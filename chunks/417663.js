"use strict";
s.r(t), s.d(t, {
  AccountConnectionResult: function() {
    return h
  },
  LinkPlatformLogo: function() {
    return g
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  r = s("120356"),
  i = s.n(r),
  o = s("593473"),
  l = s("481060"),
  c = s("457330"),
  d = s("726542"),
  u = s("536285"),
  f = s("981631"),
  N = s("689938"),
  m = s("217842");

function C(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let p = null != window.opener;

function g(e) {
  let {
    platform: t,
    className: s
  } = e;
  return (0, a.jsxs)("div", {
    className: i()(m.logos, s),
    children: [(0, a.jsx)("div", {
      className: i()(m.logo, m.logoDiscord)
    }), (0, a.jsx)("div", {
      className: m.logosDivider
    }), (0, a.jsx)("div", {
      className: m.logo,
      style: {
        backgroundImage: 'url("'.concat(t.icon.whiteSVG, '")')
      }
    })]
  })
}

function h(e) {
  let t, s, {
      verifying: r,
      verified: o,
      platformType: c
    } = e,
    u = d.default.get(c),
    f = n.useCallback(() => {
      window.close()
    }, []);
  return t = r ? (0, a.jsx)("div", {
    className: m.message,
    children: N.default.Messages.CONNECTED_ACCOUNT_VERIFYING.format({
      name: u.name
    })
  }) : o ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: m.message,
      children: N.default.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS.format({
        name: u.name
      })
    }), (0, a.jsx)("div", {
      className: i()(m.message, m.details),
      children: N.default.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS_DETAILS
    })]
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: i()(m.message, m.error),
      children: N.default.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format({
        name: u.name
      })
    }), (0, a.jsx)("div", {
      className: i()(m.message, m.details),
      children: N.default.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS
    })]
  }), (p || r) && (s = (0, a.jsx)(l.Button, {
    className: m.btn,
    disabled: r,
    onClick: f,
    children: r ? (0, a.jsx)(l.Spinner, {
      itemClassName: m.spinnerItem
    }) : N.default.Messages.DONE
  })), (0, a.jsx)("div", {
    className: m.verifyConnectedAccount,
    children: (0, a.jsxs)("div", {
      children: [(0, a.jsx)(g, {
        platform: u
      }), t, s]
    })
  })
}
class v extends n.Component {
  componentDidMount() {
    let e;
    let t = (0, o.parse)(this.props.location.search),
      {
        code: s,
        state: a,
        oauth_verifier: n,
        loading: r
      } = t;
    if (null != r) return;
    null != n && (s = n), Object.keys(t).forEach(s => {
      s.startsWith("openid.") && (null == e && (e = {}), e[s] = t[s])
    });
    let i = e => {
        let {
          status: t,
          body: s
        } = e;
        this.setState({
          verifying: !1,
          verified: 204 === t || 200 === t
        }, () => {
          this.state.verified && p && window.close()
        }), (null == s ? void 0 : s.redirect) != null && (window.location = s.redirect)
      },
      l = {
        code: s,
        openid_params: e,
        state: a
      },
      d = e => c.default.callback(this.getType(), l, e).then(i, i);
    if (p) {
      d(!1);
      return
    }
    u.default.request(f.RPCCommands.CONNECTIONS_CALLBACK, {
      ...l,
      providerType: this.getType()
    }).then(i, e => d("RPCError" !== e.name)).then(() => u.default.disconnect())
  }
  render() {
    let {
      verifying: e,
      verified: t
    } = this.state, s = this.getType();
    return d.default.isSupported(s) ? (0, a.jsx)(h, {
      platformType: this.getType(),
      verifying: e,
      verified: t
    }) : null
  }
  constructor(...e) {
    super(...e), C(this, "state", {
      verifying: !0,
      verified: !1
    }), C(this, "getType", () => this.props.match.params.type)
  }
}
t.default = v