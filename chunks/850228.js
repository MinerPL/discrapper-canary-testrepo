var s = t(735250),
    n = t(470079),
    l = t(442837),
    r = t(481060),
    o = t(219929),
    i = t(975060),
    c = t(559725),
    u = t(439041),
    d = t(689938),
    E = t(152029);
class A extends n.PureComponent {
    componentDidMount() {
        null == this.props.adyenPaymentData && c.cp();
    }
    render() {
        var e, a;
        let { className: t, cashAppPayComponent: n } = this.props,
            l = this.props.adyenPaymentData,
            i = null !== (a = null == l ? void 0 : null === (e = l.paymentMethod) || void 0 === e ? void 0 : e.cashtag) && void 0 !== a ? a : '',
            c = null != l && '' !== i;
        return (0, s.jsxs)('div', {
            className: t,
            children: [
                (0, s.jsx)(o.ZP, {
                    type: o.ZP.Types.CASH_APP,
                    size: o.Uy.MEDIUM,
                    className: E.icon
                }),
                c
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(r.Heading, {
                                  variant: i.length < 25 ? 'heading-xl/bold' : 'heading-lg/bold',
                                  className: E.connectionInstructions,
                                  children: d.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY_CONNECTED_SUCCESS.format({ cashtag: i })
                              }),
                              (0, s.jsx)(r.Text, {
                                  variant: 'text-md/medium',
                                  className: E.connectionInstructions,
                                  children: d.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY_CONNECTED_SUCCESS_INSTRUCTIONS
                              })
                          ]
                      })
                    : (0, s.jsx)(r.Text, {
                          variant: 'text-md/medium',
                          className: E.connectionInstructions,
                          children: null == n ? d.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY_LOADING : d.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY_CONNECTION_INSTRUCTIONS
                      })
            ]
        });
    }
}
a.Z = l.ZP.connectStores([u.Z, i.Z], () => ({
    cashAppPayComponent: u.Z.cashAppPayComponent,
    adyenPaymentData: i.Z.adyenPaymentData
}))(A);
