"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("222007");
var n = s("37983"),
  o = s("884691"),
  i = s("627445"),
  a = s.n(i),
  l = s("446674"),
  r = s("77078"),
  d = s("437822"),
  u = s("135230"),
  c = s("697218"),
  f = s("782340");
class I extends o.Component {
  render() {
    let {
      color: e,
      look: t,
      size: s
    } = this.props;
    return (0, n.jsx)(r.Button, {
      look: t,
      size: s,
      color: e,
      disabled: this.state.isSendingVerificationEmail,
      onClick: this.handleResendVerification,
      children: f.default.Messages.RESEND_VERIFICATION_EMAIL
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      isSendingVerificationEmail: !1
    }, this.handleResendVerification = () => {
      let {
        currentUser: e,
        onClick: t
      } = this.props;
      null == t || t(), this.setState({
        isSendingVerificationEmail: !0
      }, () => {
        d.default.verifyResend().then(() => (0, r.openModal)(t => (0, n.jsx)(r.ConfirmModal, {
          header: f.default.Messages.VERIFICATION_EMAIL_TITLE,
          confirmText: f.default.Messages.OKAY,
          confirmButtonColor: r.Button.Colors.BRAND,
          ...t,
          children: (0, n.jsx)(r.Text, {
            variant: "text-md/normal",
            children: f.default.Messages.VERIFICATION_EMAIL_BODY.format({
              email: e.email
            })
          })
        }))).catch(e => {
          let {
            body: t
          } = e, s = f.default.Messages.VERIFICATION_EMAIL_ERROR_BODY;
          null != t && t.email && (s = t.email), (0, r.openModal)(e => (0, n.jsx)(u.default, {
            title: f.default.Messages.VERIFICATION_EMAIL_ERROR_TITLE,
            body: s,
            ...e
          }))
        }).then(() => this.setState({
          isSendingVerificationEmail: !1
        }))
      })
    }
  }
}
I.defaultProps = {
  size: r.Button.Sizes.MEDIUM,
  color: r.Button.Colors.BRAND
};
var h = l.default.connectStores([c.default], () => {
  let e = c.default.getCurrentUser();
  return a(null != e, "ResendEmailVerificationButton: currentUser cannot be undefined"), {
    currentUser: e
  }
})(I)