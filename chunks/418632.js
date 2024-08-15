t(47120);
var n, a = t(735250),
  i = t(470079),
  r = t(512722),
  o = t.n(r),
  l = t(442837),
  c = t(481060),
  d = t(893776),
  _ = t(468026),
  E = t(594174),
  u = t(689938);

function I(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[s] = t, e;
}
class T extends(n = i.Component) {
  render() {
let {
  color: e,
  look: s,
  size: t
} = this.props;
return (0, a.jsx)(c.Button, {
  look: s,
  size: t,
  color: e,
  disabled: this.state.isSendingVerificationEmail,
  onClick: this.handleResendVerification,
  children: u.Z.Messages.RESEND_VERIFICATION_EMAIL
});
  }
  constructor(...e) {
super(...e), I(this, 'state', {
  isSendingVerificationEmail: !1
}), I(this, 'handleResendVerification', () => {
  let {
    currentUser: e,
    onClick: s
  } = this.props;
  null == s || s(), this.setState({
    isSendingVerificationEmail: !0
  }, () => {
    d.Z.verifyResend().then(() => (0, c.openModal)(s => (0, a.jsx)(c.ConfirmModal, {
      header: u.Z.Messages.VERIFICATION_EMAIL_TITLE,
      confirmText: u.Z.Messages.OKAY,
      confirmButtonColor: c.Button.Colors.BRAND,
      ...s,
      children: (0, a.jsx)(c.Text, {
        variant: 'text-md/normal',
        children: u.Z.Messages.VERIFICATION_EMAIL_BODY.format({
          email: e.email
        })
      })
    }))).catch(e => {
      let {
        body: s
      } = e, t = u.Z.Messages.VERIFICATION_EMAIL_ERROR_BODY;
      null != s && s.email && (t = s.email), (0, c.openModal)(e => (0, a.jsx)(_.default, {
        title: u.Z.Messages.VERIFICATION_EMAIL_ERROR_TITLE,
        body: t,
        ...e
      }));
    }).then(() => this.setState({
      isSendingVerificationEmail: !1
    }));
  });
});
  }
}
I(T, 'defaultProps', {
  size: c.Button.Sizes.MEDIUM,
  color: c.Button.Colors.BRAND
}), s.Z = l.ZP.connectStores([E.default], () => {
  let e = E.default.getCurrentUser();
  return o()(null != e, 'ResendEmailVerificationButton: currentUser cannot be undefined'), {
currentUser: e
  };
})(T);