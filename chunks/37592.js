t(47120);
var s = t(735250),
	n = t(470079),
	l = t(481060),
	r = t(600164),
	o = t(710845),
	i = t(219929),
	c = t(358085),
	u = t(622999),
	d = t(981631),
	E = t(689938);
function A(e, a, t) {
	return (
		a in e
			? Object.defineProperty(e, a, {
					value: t,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[a] = t),
		e
	);
}
let N = new o.Z('PaymentRequest');
class m extends n.Component {
	componentDidMount() {
		(0, u.d2)().then((e) => {
			this.initPaymentRequest(e);
		});
	}
	render() {
		let { canMakePayment: e } = this.state;
		if (null == e)
			return (0, s.jsx)(l.Button, {
				submitting: !0,
				look: l.Button.Looks.FILLED
			});
		if (!1 === e)
			return (0, s.jsx)(l.Button, {
				disabled: !0,
				look: l.Button.Looks.FILLED,
				children: E.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_UNSUPPORTED
			});
		let a = (0, c.isAndroidChrome)(),
			t = a
				? E.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_BUTTON_GPAY
				: E.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_BUTTON_GENERIC,
			n = a ? i.ZP.Types.G_PAY : i.ZP.Types.PAYMENT_REQUEST,
			{ className: o, iconClassName: u } = this.props;
		return (0, s.jsx)(
			l.Button,
			{
				onClick: this.handleOnClick,
				className: o,
				children: (0, s.jsxs)(r.Z, {
					align: r.Z.Align.CENTER,
					children: [
						(0, s.jsx)(i.ZP, {
							className: u,
							type: n
						}),
						t
					]
				})
			},
			d.HeQ.PAYMENT_REQUEST
		);
	}
	constructor(...e) {
		super(...e),
			A(this, 'state', {}),
			A(this, 'initPaymentRequest', async (e) => {
				if (null == e) return;
				let a = e.paymentRequest({
						country: 'US',
						currency: 'usd',
						total: {
							label: this.props.paymentLabel,
							amount: 0,
							pending: !0
						},
						requestPayerName: !0
					}),
					{ onStripePaymentMethodReceived: t } = this.props;
				a.on('paymentmethod', (e) => {
					let { complete: a, paymentMethod: s } = e;
					t(s), a('success');
				}),
					a.on('cancel', () => {
						t(null);
					});
				let s = await a.canMakePayment();
				N.info('PaymentRequest availablity check', s),
					this.setState({
						canMakePayment: !!s,
						paymentRequest: a
					});
			}),
			A(this, 'handleOnClick', () => {
				let { onChooseType: e } = this.props;
				e(d.HeQ.PAYMENT_REQUEST);
				let { paymentRequest: a } = this.state;
				null != a && a.show();
			});
	}
}
a.Z = m;
