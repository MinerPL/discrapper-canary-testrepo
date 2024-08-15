let r;
n.d(t, {
	az: function () {
		return _;
	},
	d2: function () {
		return d;
	},
	eH: function () {
		return c;
	},
	oe: function () {
		return E;
	}
}),
	n(47120);
var i,
	a,
	s = n(657610),
	o = n(544891),
	l = n(981631);
((a = i || (i = {})).REQUIRES_PAYMENT_METHOD = 'requires_payment_method'),
	(a.REQUIRES_CONFIRMATION = 'requires_confirmation'),
	(a.REQUIRES_ACTION = 'requires_action'),
	(a.PROCESSING = 'processing'),
	(a.CANCELED = 'canceled'),
	(a.SUCCEEDED = 'succeeded');
let u = (e) => {
		let t = (t) =>
				'You passed an invalid expiration date '.concat(e) +
				''.concat(null != t ? t : '') +
				'Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`',
			n = e.split(/[.\-/\s]+/g);
		2 !== n.length && t();
		let r = n.map((e) => {
				let r = parseInt(e);
				return isNaN(r) && t(''.concat(n, ' is not a number.')), r < 1 && t(''.concat(r, ' is less than one.')), r;
			}),
			[i, a] = r[0] > 12 ? [r[1], r[0]] : [r[0], r[1]];
		return i > 12 && t('Month must be a number 1-12, not '.concat(i, '.')), a < 100 && (a += 2000), [i, a];
	},
	c = (e) => {
		let t, n;
		try {
			[t, n] = u(e);
		} catch (e) {
			return !1;
		}
		let r = new Date(n, t),
			i = new Date();
		return r.setMonth(r.getMonth() - 1), r.setMonth(r.getMonth() + 1, 1), r > i;
	};
function d() {
	return null != r ? Promise.resolve(r) : (0, s.loadStripe)(l.Ai1.STRIPE.KEY).then((e) => ((r = e), e));
}
function _(e) {
	var t, n, r, i, a, s, o, l;
	let { billing_details: u } = e,
		c = null !== (t = u.address) && void 0 !== t ? t : {},
		d = {
			name: null !== (n = u.name) && void 0 !== n ? n : '',
			line1: null !== (r = c.line1) && void 0 !== r ? r : '',
			line2: null !== (i = c.line2) && void 0 !== i ? i : '',
			city: null !== (a = c.city) && void 0 !== a ? a : '',
			state: null !== (s = c.state) && void 0 !== s ? s : '',
			country: null !== (o = c.country) && void 0 !== o ? o : '',
			postalCode: null !== (l = c.postal_code) && void 0 !== l ? l : ''
		};
	return {
		token: e.id,
		billingAddressInfo: d
	};
}
async function E(e) {
	try {
		let { stripe_payment_intent_client_secret: t } = (
				await o.tn.get({
					url: l.ANM.BILLING_STRIPE_PAYMENT_INTENTS(e),
					oldFormErrors: !0
				})
			).body,
			n = await d();
		if (null == n) return { error: 'unable to load stripe' };
		let { error: r, paymentIntent: i } = await n.retrievePaymentIntent(t);
		if (null != r) return { error: r.message };
		if (null == i) return { error: 'payment intent does not exist' };
		let a = {};
		switch (
			('requires_payment_method' === i.status &&
				null != i.last_payment_error &&
				null != i.last_payment_error.payment_method &&
				(a.payment_method = i.last_payment_error.payment_method.id),
			i.status)
		) {
			case 'requires_payment_method':
			case 'requires_confirmation':
			case 'requires_action':
				let { error: s } = await n.confirmCardPayment(t, a);
				if (null != s) return { error: s.message };
				return {};
			case 'succeeded':
			case 'processing':
				return {};
			default:
				return { error: 'Invalid Payment Intent status: '.concat(i.status) };
		}
	} catch (e) {
		return { error: e.message };
	}
}
