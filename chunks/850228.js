var n = t(735250),
  r = t(470079),
  s = t(442837),
  l = t(481060),
  o = t(975060),
  i = t(912454),
  c = t(559725),
  u = t(439041),
  d = t(689938),
  E = t(96524);
class _ extends r.PureComponent {
  componentDidMount() {
null == this.props.adyenPaymentData && c.cp();
  }
  render() {
var e, a;
let {
  className: t,
  cashAppPayComponent: r
} = this.props, s = this.props.adyenPaymentData, o = null !== (a = null == s ? void 0 : null === (e = s.paymentMethod) || void 0 === e ? void 0 : e.cashtag) && void 0 !== a ? a : '', c = null != s && '' !== o;
return (0, n.jsxs)('div', {
  className: t,
  children: [
    (0, n.jsx)(i.ZP, {
      type: i.ZP.Types.CASH_APP,
      size: i.Uy.MEDIUM,
      className: E.icon
    }),
    c ? (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)(l.Heading, {
          variant: o.length < 25 ? 'heading-xl/bold' : 'heading-lg/bold',
          className: E.connectionInstructions,
          children: d.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY_CONNECTED_SUCCESS.format({
            cashtag: o
          })
        }),
        (0, n.jsx)(l.Text, {
          variant: 'text-md/medium',
          className: E.connectionInstructions,
          children: d.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY_CONNECTED_SUCCESS_INSTRUCTIONS
        })
      ]
    }) : (0, n.jsx)(l.Text, {
      variant: 'text-md/medium',
      className: E.connectionInstructions,
      children: null == r ? d.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY_LOADING : d.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY_CONNECTION_INSTRUCTIONS
    })
  ]
});
  }
}
a.Z = s.ZP.connectStores([
  u.Z,
  o.Z
], () => ({
  cashAppPayComponent: u.Z.cashAppPayComponent,
  adyenPaymentData: o.Z.adyenPaymentData
}))(_);