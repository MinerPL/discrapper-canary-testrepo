t.d(n, {
	x: function () {
		return I;
	}
});
var a = t(735250),
	s = t(470079),
	i = t(512722),
	l = t.n(i),
	r = t(399606),
	o = t(607070),
	d = t(597688),
	u = t(624377),
	c = t(530618),
	E = t(331042),
	f = t(372654),
	h = t(987209),
	m = t(598),
	v = t(179118),
	C = t(614277),
	p = t(698708);
function x(e) {
	let { handleClose: n, confettiCanvas: t, hideConfetti: s = !1, analyticsLocations: i } = e,
		{ skusById: o, selectedSkuId: u, application: c } = (0, m.usePaymentContext)(),
		f = (0, r.e7)([d.Z], () => d.Z.getProduct(u));
	l()(null != u, 'Expected selectedSkuId'), l()(null != c, 'Expected application');
	let h = o[u];
	return (l()(null != h, 'Expected sku'), null == f)
		? null
		: (0, a.jsxs)(C.C3, {
				children: [
					(0, a.jsx)(p.Z, {}),
					(0, a.jsx)(E.CollectiblesCollectedModalInner, {
						product: f,
						onClose: n,
						confettiCanvas: t,
						analyticsLocations: i,
						hideConfetti: s
					})
				]
			});
}
function I(e) {
	let { isGift: n, giftCode: t, selectedGiftStyle: i, hasSentMessage: l, giftRecipient: E, giftMessageError: C, isSendingMessage: p } = (0, h.wD)(),
		I = (0, r.e7)([o.Z], () => o.Z.useReducedMotion),
		T = s.useRef(null),
		{ selectedSkuId: g } = (0, m.usePaymentContext)(),
		N = (0, r.e7)([d.Z], () => d.Z.getProduct(g)),
		{ confettiColors: S } = (0, u.Z)(null == N ? void 0 : N.styles);
	return n
		? (0, a.jsxs)('div', {
				ref: T,
				children: [
					(0, a.jsx)(v.Z, {
						giftCode: t,
						onClose: e.handleClose,
						selectedGiftStyle: i,
						hasSentMessage: l,
						giftRecipient: E,
						giftMessageError: C,
						isSendingMessage: p
					}),
					!e.hideConfetti &&
						!I &&
						(0, a.jsx)(c.Z, {
							confettiTarget: T.current,
							confettiCanvas: e.confettiCanvas,
							sprites: (0, f.vK)(null == N ? void 0 : N.categorySkuId),
							colors: null == S ? void 0 : S.map((e) => e.toHexString())
						})
				]
			})
		: (0, a.jsx)(x, { ...e });
}
