var s = t(735250),
  n = t(470079),
  l = t(442837),
  r = t(481060),
  o = t(873115),
  i = t(219929),
  c = t(618541),
  u = t(975060),
  d = t(689938),
  E = t(647728);
class A extends n.PureComponent {
  componentDidMount() {
null != this.props.paypalClient && o.f6();
  }
  componentWillUnmount() {
o.Nj().then(() => o.Dz());
  }
  render() {
let {
  braintreeEmail: e,
  className: a,
  paypalClient: t
} = this.props;
return (0, s.jsx)(r.FormSection, {
  className: a,
  title: d.Z.Messages.PAYMENT_SOURCE_PAYPAL_ACCOUNT,
  children: (0, s.jsxs)('div', {
    className: E.inputWrapper,
    children: [
      (0, s.jsx)(i.ZP, {
        type: i.ZP.Types.PAYPAL,
        className: E.paypalIcon
      }),
      (0, s.jsx)(r.TextInput, {
        value: e,
        editable: !1,
        readOnly: !0,
        placeholder: null == t ? d.Z.Messages.PAYMENT_SOURCE_PAYPAL_LOADING : d.Z.Messages.PAYMENT_SOURCE_CONFIRM_PAYPAL_DETAILS,
        inputClassName: E.paypalInput
      })
    ]
  })
});
  }
}
a.Z = l.ZP.connectStores([
  c.Z,
  u.Z
], () => ({
  braintreeEmail: u.Z.braintreeEmail,
  paypalClient: c.Z.getPayPalClient()
}))(A);