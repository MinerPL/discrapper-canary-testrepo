a.d(n, {
	Qy: function () {
		return t;
	},
	Uy: function () {
		return p;
	}
}),
	a(757143);
var t,
	o,
	r,
	i = a(735250),
	c = a(470079),
	s = a(120356),
	l = a.n(s),
	d = a(210702);
function u(e, n, a) {
	return (
		n in e
			? Object.defineProperty(e, n, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[n] = a),
		e
	);
}
((r = t || (t = {})).UNKNOWN = 'unknown'),
	(r.VISA = 'visa'),
	(r.DISCOVER = 'discover'),
	(r.MASTERCARD = 'mastercard'),
	(r.AMEX = 'amex'),
	(r.PAYPAL = 'paypal'),
	(r.PAYMENT_REQUEST = 'paymentRequest'),
	(r.G_PAY = 'gPay'),
	(r.DINERS = 'diners'),
	(r.JCB = 'jcb'),
	(r.UNIONPAY = 'unionpay'),
	(r.SOFORT = 'sofort'),
	(r.PRZELEWY24 = 'przelewy24'),
	(r.GIROPAY = 'giropay'),
	(r.PAYSAFECARD = 'paysafecard'),
	(r.GCASH = 'gcash'),
	(r.GRABPAY = 'grabpay'),
	(r.MOMO_WALLET = 'momo_wallet'),
	(r.VENMO = 'venmo'),
	(r.KAKAOPAY = 'kakaopay'),
	(r.GOPAY_WALLET = 'gopay_wallet'),
	(r.BANCONTACT = 'bancontact'),
	(r.EPS = 'eps'),
	(r.IDEAL = 'ideal'),
	(r.CASH_APP = 'cash_app'),
	(r.APPLE = 'apple');
let p = {
	SMALL: d.cardIconSmall,
	MEDIUM: d.cardIconMedium,
	LARGE: d.cardIconLarge,
	XLARGE: d.cardIconXLarge
};
class f extends (o = c.PureComponent) {
	static getType(e) {
		return null == e ? 'unknown' : t[e.replace(/[^a-z0-9_]/gi, '').toUpperCase()] || 'unknown';
	}
	render() {
		let { flipped: e, type: n, className: a, size: t } = this.props;
		return (0, i.jsx)('div', {
			className: l()(t, d[n], a, { [d.flipped]: e }),
			children: n
		});
	}
}
u(f, 'Types', t),
	u(f, 'Sizes', p),
	u(f, 'defaultProps', {
		size: p.SMALL,
		flipped: !1
	}),
	(n.ZP = f);
