"use strict";
a.r(t);
var n = a("735250"),
  r = a("470079"),
  s = a("442837"),
  l = a("481060"),
  o = a("975060"),
  i = a("912454"),
  u = a("559725"),
  c = a("439041"),
  d = a("689938"),
  p = a("275689");
class S extends r.PureComponent {
  componentDidMount() {
    null == this.props.adyenPaymentData && u.reopenCashAppPayWindow()
  }
  render() {
    var e, t;
    let {
      className: a,
      cashAppPayComponent: r
    } = this.props, s = this.props.adyenPaymentData, o = null !== (t = null == s ? void 0 : null === (e = s.paymentMethod) || void 0 === e ? void 0 : e.cashtag) && void 0 !== t ? t : "", u = null != s && "" !== o;
    return (0, n.jsxs)("div", {
      className: a,
      children: [(0, n.jsx)(i.default, {
        type: i.default.Types.CASH_APP,
        size: i.IconSizes.MEDIUM,
        className: p.icon
      }), u ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(l.Heading, {
          variant: o.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
          className: p.connectionInstructions,
          children: d.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY_CONNECTED_SUCCESS.format({
            cashtag: o
          })
        }), (0, n.jsx)(l.Text, {
          variant: "text-md/medium",
          className: p.connectionInstructions,
          children: d.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY_CONNECTED_SUCCESS_INSTRUCTIONS
        })]
      }) : (0, n.jsx)(l.Text, {
        variant: "text-md/medium",
        className: p.connectionInstructions,
        children: null == r ? d.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY_LOADING : d.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY_CONNECTION_INSTRUCTIONS
      })]
    })
  }
}
t.default = s.default.connectStores([c.default, o.default], () => ({
  cashAppPayComponent: c.default.cashAppPayComponent,
  adyenPaymentData: o.default.adyenPaymentData
}))(S)