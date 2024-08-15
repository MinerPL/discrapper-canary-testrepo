n.d(t, {
	v: function () {
		return _;
	}
}),
	n(47120);
var r = n(735250),
	a = n(470079),
	i = n(512722),
	l = n.n(i),
	s = n(89057),
	o = n(987209),
	u = n(598),
	c = n(409813),
	d = n(456251),
	I = n(981631);
function _(e) {
	let { handleStepChange: t, handleClose: n } = e,
		{ blockedPayments: i, hasFetchedSkus: _, paymentSources: f, hasFetchedPaymentSources: h, application: E, skusById: S, selectedSkuId: m } = (0, u.usePaymentContext)(),
		{ isGift: p } = (0, o.wD)(),
		[T, C] = a.useState(!0);
	return (a.useEffect(() => {
		let e = null != E;
		if (!!_ && !!h && !!e) C(!1);
	}, [_, h, E]),
	a.useEffect(() => {
		if (T || i) return;
		l()(null != m, 'Expected selectedSkuId');
		let e = S[m];
		if (p && (null == e ? void 0 : e.productLine) === I.POd.COLLECTIBLES) {
			t(c.h8.GIFT_CUSTOMIZATION);
			return;
		}
		if (0 === Object.keys(f).length) {
			t(c.h8.ADD_PAYMENT_STEPS);
			return;
		}
		t(c.h8.REVIEW);
	}, [T, i, t, f, p, S, m]),
	T)
		? (0, r.jsx)(d.Z, {})
		: i
			? (0, r.jsx)(s.Vq, { onClose: n })
			: null;
}
