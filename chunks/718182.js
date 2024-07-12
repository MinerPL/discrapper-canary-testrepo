var s, r, i, a, l = n(735250),
  o = n(470079),
  c = n(525654),
  u = n.n(c),
  d = n(442837),
  h = n(893776),
  _ = n(129293),
  E = n(388905),
  g = n(108427),
  p = n(314897),
  f = n(981631),
  I = n(689938),
  m = n(549856);
d.ZP.initialize();
class N extends(a = o.PureComponent) {
  componentDidMount() {
let e = (0, _.Z)(this.props.location);
null != e && h.Z.authorizeIPAddress(e), (0, g.e)('authorize_ip');
  }
  renderLoginButton() {
if ('Android' === u().os.family || 'iOS' === u().os.family)
  return null;
let {
  transitionTo: e
} = this.props;
return (0, l.jsx)(E.zx, {
  onClick: () => e(f.Z5c.LOGIN),
  children: I.Z.Messages._LOGIN
});
  }
  renderFailed() {
return (0, l.jsxs)(E.ZP, {
  children: [
    (0, l.jsx)('img', {
      alt: '',
      src: n(211095),
      className: m.marginBottom20
    }),
    (0, l.jsx)(E.Dx, {
      className: m.marginBottom8,
      children: I.Z.Messages.AUTHORIZATION_EXPIRED
    }),
    (0, l.jsx)(E.DK, {
      className: m.marginBottom40,
      children: I.Z.Messages._AUTH_EXPIRED_SUGGESTION
    }),
    this.renderLoginButton()
  ]
});
  }
  renderSucceeded() {
return (0, l.jsxs)(E.ZP, {
  children: [
    (0, l.jsx)('img', {
      alt: '',
      src: n(640356),
      className: m.marginBottom20
    }),
    (0, l.jsx)(E.Dx, {
      className: m.marginBottom8,
      children: I.Z.Messages.IP_AUTHORIZATION_SUCCEEDED
    }),
    (0, l.jsx)(E.DK, {
      className: m.marginBottom40,
      children: I.Z.Messages._AUTH_IP_AUTH_SUCCEEDED_SUGGESTION
    }),
    this.renderLoginButton()
  ]
});
  }
  renderDefault() {
return (0, l.jsxs)(E.ZP, {
  children: [
    (0, l.jsx)(E.Hh, {}),
    (0, l.jsx)(E.Dx, {
      children: I.Z.Messages.AUTHORIZING
    })
  ]
});
  }
  render() {
let {
  verifyFailed: e,
  verifySucceeded: t
} = this.props;
return e ? this.renderFailed() : t ? this.renderSucceeded() : this.renderDefault();
  }
}
s = N, r = 'defaultProps', i = {
  transitionTo: e => n.g.location.assign(e)
}, r in s ? Object.defineProperty(s, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[r] = i, t.Z = d.ZP.connectStores([p.default], () => ({
  verifyFailed: p.default.didVerifyFail(),
  verifySucceeded: p.default.didVerifySucceed()
}))(N);