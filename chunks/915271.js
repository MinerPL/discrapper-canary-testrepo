var n = t(735250),
  r = t(470079),
  s = t(442837),
  l = t(481060),
  o = t(873115),
  i = t(618541),
  c = t(975060),
  u = t(912454),
  d = t(689938),
  E = t(373044);
class _ extends r.PureComponent {
  componentDidMount() {
null != this.props.venmoClient && o.by();
  }
  componentWillUnmount() {
o.RS().then(() => o.ib());
  }
  render() {
let {
  venmoUsername: e,
  className: a,
  venmoClient: t
} = this.props, r = null != e && '' !== e;
return (0, n.jsxs)('div', {
  className: a,
  children: [
    (0, n.jsx)(u.ZP, {
      type: u.ZP.Types.VENMO,
      size: u.Uy.MEDIUM,
      className: E.venmoIcon
    }),
    r ? (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)(l.Heading, {
          variant: e.length < 25 ? 'heading-xl/bold' : 'heading-lg/bold',
          className: E.connectionInstructions,
          children: d.Z.Messages.PAYMENT_SOURCE_VENMO_CONNECTED_SUCCESS.format({
            venmoUsername: e
          })
        }),
        (0, n.jsx)(l.Text, {
          variant: 'text-md/medium',
          className: E.connectionInstructions,
          children: d.Z.Messages.PAYMENT_SOURCE_VENMO_CONNECTED_SUCCESS_INSTRUCTIONS
        })
      ]
    }) : (0, n.jsx)(l.Text, {
      variant: 'text-md/medium',
      className: E.connectionInstructions,
      children: null == t ? d.Z.Messages.PAYMENT_SOURCE_VENMO_LOADING : d.Z.Messages.PAYMENT_SOURCE_VENMO_CONNECTION_INSTRUCTIONS
    })
  ]
});
  }
}
a.Z = s.ZP.connectStores([
  i.Z,
  c.Z
], () => ({
  venmoUsername: c.Z.venmoUsername,
  venmoClient: i.Z.getVenmoClient()
}))(_);