var n = t(735250),
  r = t(470079),
  s = t(442837),
  l = t(481060),
  o = t(873115),
  i = t(618541),
  c = t(975060),
  u = t(912454),
  d = t(689938),
  E = t(647728);
class _ extends r.PureComponent {
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
return (0, n.jsx)(l.FormSection, {
  className: a,
  title: d.Z.Messages.PAYMENT_SOURCE_PAYPAL_ACCOUNT,
  children: (0, n.jsxs)('div', {
    className: E.inputWrapper,
    children: [
      (0, n.jsx)(u.ZP, {
        type: u.ZP.Types.PAYPAL,
        className: E.paypalIcon
      }),
      (0, n.jsx)(l.TextInput, {
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
a.Z = s.ZP.connectStores([
  i.Z,
  c.Z
], () => ({
  braintreeEmail: c.Z.braintreeEmail,
  paypalClient: i.Z.getPayPalClient()
}))(_);