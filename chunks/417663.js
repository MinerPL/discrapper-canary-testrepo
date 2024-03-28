"use strict";
t.r(s), t.d(s, {
  AccountConnectionResult: function() {
    return g
  }
}), t("47120");
var i = t("735250"),
  a = t("470079"),
  n = t("803997"),
  r = t.n(n),
  l = t("593473"),
  c = t("481060"),
  d = t("457330"),
  o = t("726542"),
  u = t("536285"),
  p = t("981631"),
  m = t("689938"),
  f = t("504281");

function C(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let h = null != window.opener;

function g(e) {
  let s, t, {
      verifying: n,
      verified: l,
      platformType: d
    } = e,
    u = o.default.get(d),
    p = a.useCallback(() => {
      window.close()
    }, []);
  return s = n ? (0, i.jsx)("div", {
    className: f.message,
    children: m.default.Messages.CONNECTED_ACCOUNT_VERIFYING.format({
      name: u.name
    })
  }) : l ? (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: f.message,
      children: m.default.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS.format({
        name: u.name
      })
    }), (0, i.jsx)("div", {
      className: r()(f.message, f.details),
      children: m.default.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS_DETAILS
    })]
  }) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: r()(f.message, f.error),
      children: m.default.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format({
        name: u.name
      })
    }), (0, i.jsx)("div", {
      className: r()(f.message, f.details),
      children: m.default.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS
    })]
  }), (h || n) && (t = (0, i.jsx)(c.Button, {
    className: f.btn,
    disabled: n,
    onClick: p,
    children: n ? (0, i.jsx)(c.Spinner, {
      itemClassName: f.spinnerItem
    }) : m.default.Messages.DONE
  })), (0, i.jsx)("div", {
    className: f.verifyConnectedAccount,
    children: (0, i.jsxs)("div", {
      children: [(0, i.jsxs)("div", {
        className: f.logos,
        children: [(0, i.jsx)("div", {
          className: r()(f.logo, f.logoDiscord)
        }), (0, i.jsx)("div", {
          className: f.logosDivider
        }), (0, i.jsx)("div", {
          className: f.logo,
          style: {
            backgroundImage: 'url("'.concat(u.icon.whiteSVG, '")')
          }
        })]
      }), s, t]
    })
  })
}
class N extends a.Component {
  componentDidMount() {
    let e;
    let s = (0, l.parse)(this.props.location.search),
      {
        code: t,
        state: i,
        oauth_verifier: a,
        loading: n
      } = s;
    if (null != n) return;
    null != a && (t = a), Object.keys(s).forEach(t => {
      t.startsWith("openid.") && (null == e && (e = {}), e[t] = s[t])
    });
    let r = e => {
        let {
          status: s,
          body: t
        } = e;
        this.setState({
          verifying: !1,
          verified: 204 === s || 200 === s
        }, () => {
          this.state.verified && h && window.close()
        }), (null == t ? void 0 : t.redirect) != null && (window.location = t.redirect)
      },
      c = {
        code: t,
        openid_params: e,
        state: i
      },
      o = e => d.default.callback(this.getType(), c, e).then(r, r);
    if (h) {
      o(!1);
      return
    }
    u.default.request(p.RPCCommands.CONNECTIONS_CALLBACK, {
      ...c,
      providerType: this.getType()
    }).then(r, e => o("RPCError" !== e.name)).then(() => u.default.disconnect())
  }
  render() {
    let {
      verifying: e,
      verified: s
    } = this.state, t = this.getType();
    return o.default.isSupported(t) ? (0, i.jsx)(g, {
      platformType: this.getType(),
      verifying: e,
      verified: s
    }) : null
  }
  constructor(...e) {
    super(...e), C(this, "state", {
      verifying: !0,
      verified: !1
    }), C(this, "getType", () => this.props.match.params.type)
  }
}
s.default = N