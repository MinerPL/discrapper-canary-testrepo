n(47120);
var s, r = n(735250),
  i = n(470079),
  a = n(120356),
  l = n.n(a),
  o = n(442837),
  c = n(893776),
  u = n(129293),
  d = n(388905),
  _ = n(17894),
  h = n(108427),
  E = n(314897),
  g = n(626135),
  p = n(981631),
  I = n(689938),
  m = n(514356),
  f = n(549856);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
o.ZP.initialize();
class T extends(s = i.PureComponent) {
  componentDidMount() {
this.handleVerify(), (0, h.e)('verify_email');
  }
  renderVerifyFailed() {
return (0, r.jsxs)(d.ZP, {
  children: [
    (0, r.jsx)(d.Ee, {
      src: n(375673),
      className: l()(m.image, f.marginBottom20)
    }),
    (0, r.jsx)(d.Dx, {
      className: f.marginBottom8,
      children: I.Z.Messages.VERFICATION_EXPIRED
    }),
    (0, r.jsx)(d.DK, {
      className: f.marginBottom40,
      children: I.Z.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION
    }),
    (0, r.jsx)(d.zx, {
      onClick: this.handleLogin,
      children: I.Z.Messages._LOGIN
    })
  ]
});
  }
  renderVerifySucceeded() {
return (0, r.jsxs)(d.ZP, {
  children: [
    (0, r.jsx)(d.Ee, {
      src: n(73962),
      className: l()(m.image, f.marginBottom20)
    }),
    (0, r.jsx)(d.Dx, {
      className: f.marginBottom40,
      children: I.Z.Messages.VERIFICATION_VERIFIED
    }),
    (0, r.jsx)(d.zx, {
      onClick: this.handleOpenApp,
      children: I.Z.Messages.VERIFICATION_OPEN_DISCORD
    })
  ]
});
  }
  renderVerifying() {
return (0, r.jsxs)(d.ZP, {
  children: [
    (0, r.jsx)(d.Ee, {
      src: n(892235),
      className: l()(m.image, f.marginBottom20)
    }),
    (0, r.jsx)(d.Dx, {
      className: f.marginBottom8,
      children: I.Z.Messages.VERIFICATION_VERIFYING
    }),
    (0, r.jsx)(d.DK, {
      className: f.marginBottom40,
      children: I.Z.Messages.ACTION_MAY_TAKE_A_MOMENT
    }),
    (0, r.jsx)(d.zx, {
      submitting: !0,
      color: d.zx.Colors.PRIMARY
    })
  ]
});
  }
  render() {
let {
  verifyFailed: e,
  verifySucceeded: t
} = this.props;
return e ? this.renderVerifyFailed() : t ? this.renderVerifySucceeded() : this.renderVerifying();
  }
  constructor(...e) {
super(...e), N(this, 'handleVerify', () => {
  let e = (0, u.Z)(this.props.location);
  null != e && c.Z.verify(e);
}), N(this, 'handleLogin', () => {
  let {
    transitionTo: e
  } = this.props;
  e(p.Z5c.LOGIN);
}), N(this, 'handleOpenApp', () => {
  let {
    verifyingUserId: e
  } = this.props;
  g.default.track(p.rMx.VERIFY_ACCOUNT_APP_OPENED, {
    verifying_user_id: e
  }), (0, _.Z)('verify_email');
});
  }
}
N(T, 'defaultProps', {
  transitionTo: e => n.g.location.assign(e)
}), t.Z = o.ZP.connectStores([E.default], () => ({
  verifyFailed: E.default.didVerifyFail(),
  verifyErrors: E.default.getVerifyErrors(),
  verifySucceeded: E.default.didVerifySucceed(),
  fingerprint: E.default.getFingerprint(),
  verifyingUserId: E.default.getVerifyingUserId()
}))(T);