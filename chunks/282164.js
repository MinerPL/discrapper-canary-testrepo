"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  r = a("442837"),
  l = a("481060"),
  o = a("873115"),
  u = a("618541"),
  c = a("975060"),
  i = a("912454"),
  d = a("689938"),
  E = a("646615");
class p extends s.PureComponent {
  componentDidMount() {
    null != this.props.paypalClient && o.tokenizePayPal()
  }
  componentWillUnmount() {
    o.teardownPaypal().then(() => o.createPayPalClient())
  }
  render() {
    let {
      braintreeEmail: e,
      className: t,
      paypalClient: a
    } = this.props;
    return (0, n.jsx)(l.FormSection, {
      className: t,
      title: d.default.Messages.PAYMENT_SOURCE_PAYPAL_ACCOUNT,
      children: (0, n.jsxs)("div", {
        className: E.inputWrapper,
        children: [(0, n.jsx)(i.default, {
          type: i.default.Types.PAYPAL,
          className: E.paypalIcon
        }), (0, n.jsx)(l.TextInput, {
          value: e,
          editable: !1,
          readOnly: !0,
          placeholder: null == a ? d.default.Messages.PAYMENT_SOURCE_PAYPAL_LOADING : d.default.Messages.PAYMENT_SOURCE_CONFIRM_PAYPAL_DETAILS,
          inputClassName: E.paypalInput
        })]
      })
    })
  }
}
t.default = r.default.connectStores([u.default, c.default], () => ({
  braintreeEmail: c.default.braintreeEmail,
  paypalClient: u.default.getPayPalClient()
}))(p)