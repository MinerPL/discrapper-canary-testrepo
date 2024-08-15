n.d(t, {
	U: function () {
		return h;
	}
});
var l = n(735250),
	i = n(470079),
	u = n(512722),
	o = n.n(u),
	r = n(481060),
	a = n(479446),
	s = n(646476),
	d = n(104494),
	c = n(639119),
	_ = n(981632),
	f = n(798769),
	E = n(689011),
	m = n(669079),
	T = n(987209),
	p = n(598),
	A = n(409813),
	g = n(981631),
	S = n(474936),
	P = n(231338),
	M = n(900550);
function h(e) {
	var t;
	let { renderHeader: n, referralTrialOfferId: u, handleClose: h } = e,
		{
			selectedSkuId: v,
			step: I,
			selectedPlan: y,
			purchaseState: N,
			purchaseType: R,
			selectedSku: C
		} = (0, p.usePaymentContext)(),
		{ isGift: k, selectedGiftStyle: L, giftRecipient: Z } = (0, T.wD)(),
		O =
			k &&
			(0, m.pO)(Z) &&
			I === A.h8.CONFIRM &&
			null != L &&
			(null == C ? void 0 : C.productLine) !== g.POd.COLLECTIBLES,
		b = null != n && null != I,
		w = I !== A.h8.SKU_SELECT && null != v,
		D = (0, c.N)(u),
		x = !k && null != D && null != v && S.nG[D.trial_id].skus.includes(v),
		U = (0, d.Ng)(),
		G =
			null == U
				? void 0
				: null === (t = U.discount) || void 0 === t
					? void 0
					: t.plan_ids.some((e) => S.GP[e].skuId === v),
		Y = !k && null != U && null != v && G,
		{ enabled: W } = s.ZP.useExperiment({ location: 'PaymentModalHeader' }, { autoTrackExposure: !1 }),
		F = (0, s.rK)(),
		H = W && F;
	return i.useMemo(() => {
		if (null == I) return;
		let e = null;
		if (O)
			e = (0, l.jsxs)('div', {
				className: M.container,
				children: [
					(0, l.jsx)(_.Z, {
						defaultAnimationState: a.S.LOOP,
						giftStyle: L,
						className: M.seasonalGiftBoxHeaderIcon
					}),
					(0, l.jsx)(r.ModalCloseButton, {
						onClick: h,
						className: M.closeButton
					})
				]
			});
		else if (b) e = n(null != y ? y : null, h, I);
		else if (R === P.GZ.ONE_TIME)
			e = (0, l.jsx)(E.t, {
				step: I,
				onClose: h
			});
		else if (w)
			o()(v in S.y7, 'invalid sku id: '.concat(v)),
				(e = (0, l.jsx)(f.Z, {
					currentStep: null != I ? I : void 0,
					purchaseState: N,
					premiumType: S.y7[v],
					onClose: h,
					showTrialBadge: x,
					showDiscountBadge: Y,
					isGift: k,
					giftRecipient: Z,
					useWinterTheme: H
				}));
		return e;
	}, [L, h, N, n, y, v, I, x, Y, O, w, b, R, k, Z, H]);
}
