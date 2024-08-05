s.r(t), s.d(t, {
  AccountConnectionResult: function() {
return C;
  },
  LinkPlatformLogo: function() {
return g;
  }
}), s(47120);
var n = s(735250),
  r = s(470079),
  a = s(120356),
  o = s.n(a),
  i = s(593473),
  l = s(481060),
  c = s(457330),
  d = s(726542),
  u = s(536285),
  N = s(981631),
  m = s(689938),
  f = s(789487);

function p(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
let _ = null != window.opener;

function g(e) {
  let {
platform: t,
className: s
  } = e;
  return (0, n.jsxs)('div', {
className: o()(f.logos, s),
children: [
  (0, n.jsx)('div', {
    className: o()(f.logo, f.logoDiscord)
  }),
  (0, n.jsx)('div', {
    className: f.logosDivider
  }),
  (0, n.jsx)('div', {
    className: f.logo,
    style: {
      backgroundImage: 'url("'.concat(t.icon.whiteSVG, '")')
    }
  })
]
  });
}

function C(e) {
  let t, s, {
  verifying: a,
  verified: i,
  platformType: c
} = e,
u = d.Z.get(c),
N = r.useCallback(() => {
  window.close();
}, []);
  return t = a ? (0, n.jsx)('div', {
className: f.message,
children: m.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({
  name: u.name
})
  }) : i ? (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsx)('div', {
    className: f.message,
    children: m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS.format({
      name: u.name
    })
  }),
  (0, n.jsx)('div', {
    className: o()(f.message, f.details),
    children: m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS_DETAILS
  })
]
  }) : (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsx)('div', {
    className: o()(f.message, f.error),
    children: m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format({
      name: u.name
    })
  }),
  (0, n.jsx)('div', {
    className: o()(f.message, f.details),
    children: m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS
  })
]
  }), (_ || a) && (s = (0, n.jsx)(l.Button, {
className: f.btn,
disabled: a,
onClick: N,
children: a ? (0, n.jsx)(l.Spinner, {
  itemClassName: f.spinnerItem
}) : m.Z.Messages.DONE
  })), (0, n.jsx)('div', {
className: f.verifyConnectedAccount,
children: (0, n.jsxs)('div', {
  children: [
    (0, n.jsx)(g, {
      platform: u
    }),
    t,
    s
  ]
})
  });
}
class v extends r.Component {
  componentDidMount() {
let e;
let t = (0, i.parse)(this.props.location.search),
  {
    code: s,
    state: n,
    oauth_verifier: r,
    loading: a
  } = t;
if (null != a)
  return;
null != r && (s = r), Object.keys(t).forEach(s => {
  if (!!s.startsWith('openid.'))
    null == e && (e = {}), e[s] = t[s];
});
let o = e => {
    let {
      status: t,
      body: s
    } = e;
    this.setState({
      verifying: !1,
      verified: 204 === t || 200 === t
    }, () => {
      this.state.verified && _ && window.close();
    }), (null == s ? void 0 : s.redirect) != null && (window.location = s.redirect);
  },
  l = {
    code: s,
    openid_params: e,
    state: n
  },
  d = e => c.Z.callback(this.getType(), l, e).then(o, o);
if (_) {
  d(!1);
  return;
}
u.default.request(N.Etm.CONNECTIONS_CALLBACK, {
  ...l,
  providerType: this.getType()
}).then(o, e => d('RPCError' !== e.name)).then(() => u.default.disconnect());
  }
  render() {
let {
  verifying: e,
  verified: t
} = this.state, s = this.getType();
return d.Z.isSupported(s) ? (0, n.jsx)(C, {
  platformType: this.getType(),
  verifying: e,
  verified: t
}) : null;
  }
  constructor(...e) {
super(...e), p(this, 'state', {
  verifying: !0,
  verified: !1
}), p(this, 'getType', () => this.props.match.params.type);
  }
}
t.default = v;