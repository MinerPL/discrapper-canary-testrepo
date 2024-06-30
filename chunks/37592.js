t(47120);
var n = t(735250), r = t(470079), s = t(481060), l = t(710845), o = t(285952), i = t(912454), c = t(358085), u = t(622999), d = t(981631), E = t(689938);
function _(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = t, e;
}
let p = new l.Z('PaymentRequest');
class m extends r.Component {
    componentDidMount() {
        (0, u.d2)().then(e => {
            this.initPaymentRequest(e);
        });
    }
    render() {
        let {canMakePayment: e} = this.state;
        if (null == e)
            return (0, n.jsx)(s.Button, {
                submitting: !0,
                look: s.Button.Looks.FILLED
            });
        if (!1 === e)
            return (0, n.jsx)(s.Button, {
                disabled: !0,
                look: s.Button.Looks.FILLED,
                children: E.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_UNSUPPORTED
            });
        let a = (0, c.isAndroidChrome)(), t = a ? E.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_BUTTON_GPAY : E.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_BUTTON_GENERIC, r = a ? i.ZP.Types.G_PAY : i.ZP.Types.PAYMENT_REQUEST, {
                className: l,
                iconClassName: u
            } = this.props;
        return (0, n.jsx)(s.Button, {
            onClick: this.handleOnClick,
            className: l,
            children: (0, n.jsxs)(o.Z, {
                align: o.Z.Align.CENTER,
                children: [
                    (0, n.jsx)(i.ZP, {
                        className: u,
                        type: r
                    }),
                    t
                ]
            })
        }, d.HeQ.PAYMENT_REQUEST);
    }
    constructor(...e) {
        super(...e), _(this, 'state', {}), _(this, 'initPaymentRequest', async e => {
            if (null == e)
                return;
            let a = e.paymentRequest({
                    country: 'US',
                    currency: 'usd',
                    total: {
                        label: this.props.paymentLabel,
                        amount: 0,
                        pending: !0
                    },
                    requestPayerName: !0
                }), {onStripePaymentMethodReceived: t} = this.props;
            a.on('paymentmethod', e => {
                let {
                    complete: a,
                    paymentMethod: n
                } = e;
                t(n), a('success');
            }), a.on('cancel', () => {
                t(null);
            });
            let n = await a.canMakePayment();
            p.info('PaymentRequest availablity check', n), this.setState({
                canMakePayment: !!n,
                paymentRequest: a
            });
        }), _(this, 'handleOnClick', () => {
            let {onChooseType: e} = this.props;
            e(d.HeQ.PAYMENT_REQUEST);
            let {paymentRequest: a} = this.state;
            null != a && a.show();
        });
    }
}
a.Z = m;
