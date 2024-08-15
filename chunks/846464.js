n.d(s, {
	q: function () {
		return E;
	}
});
var t = n(735250);
n(470079);
var r = n(120356),
	i = n.n(r),
	l = n(481060),
	a = n(140465),
	o = n(639119),
	C = n(55610),
	d = n(973007),
	u = n(74538),
	c = n(987209),
	_ = n(598),
	p = n(409813),
	x = n(614223),
	L = n(48175),
	h = n(474936),
	f = n(689938),
	I = n(627133);
function E(e) {
	let { handleStepChange: s, handleClose: n, referralTrialOfferId: r } = e,
		{
			setSelectedSkuId: i,
			activeSubscription: l,
			startedPaymentFlowWithPaymentSourcesRef: C,
			setSelectedPlanId: d,
			priceOptions: f
		} = (0, _.usePaymentContext)(),
		{ isGift: I } = (0, c.wD)(),
		E = (0, o.N)(r),
		N = (0, a.Nx)();
	return (0, t.jsx)(M, {
		selectSku: (e) =>
			(function (e) {
				let {
					activeSubscription: s,
					newSkuId: n,
					setSelectedSkuId: t,
					handleStepChange: r,
					isGift: i,
					userTrialOffer: l,
					setSelectedPlanId: a,
					startedPaymentFlowWithPaymentSources: o
				} = e;
				t(n);
				let C = p.h8.PLAN_SELECT,
					d = (0, u.k5)(s);
				(d === h.Si.TIER_1 || d === h.Si.TIER_2) && n === h.Si.TIER_0 && !i && (C = p.h8.WHAT_YOU_LOSE);
				let c = (0, L.T)({
						userTrialOffer: l,
						isGift: i,
						skuId: n
					}),
					_ = (0, x.Kp)({
						isTrial: c,
						isGift: i,
						selectedSkuId: n,
						startedPaymentFlowWithPaymentSources: o
					});
				C !== p.h8.WHAT_YOU_LOSE && _ && ((C = p.h8.REVIEW), a((0, x.nA)(n, s))),
					r(C, { analyticsDataOverride: { sku_id: n } });
			})({
				activeSubscription: l,
				newSkuId: e,
				setSelectedSkuId: i,
				handleStepChange: s,
				isGift: I,
				userTrialOffer: E,
				startedPaymentFlowWithPaymentSources: C.current,
				setSelectedPlanId: d
			}),
		onClose: n,
		isGift: I,
		inOfferExperience: N,
		priceOptions: f
	});
}
function M(e) {
	let { selectSku: s, onClose: n, isGift: r, inOfferExperience: a, priceOptions: o } = e;
	return (0, t.jsxs)(t.Fragment, {
		children: [
			(0, t.jsxs)(l.ModalHeader, {
				className: I.skuSelectModalHeader,
				separator: !1,
				children: [
					(0, t.jsx)(l.FormTitle, {
						tag: l.FormTitleTags.H4,
						children: f.Z.Messages.BILLING_STEP_SELECT_PLAN
					}),
					(0, t.jsx)(l.ModalCloseButton, { onClick: n })
				]
			}),
			(0, t.jsxs)(l.ModalContent, {
				className: i()(I.skuSelectModalContent, { [I.modalPadding]: a }),
				children: [
					(0, t.jsx)(C.Z, {
						fromBoostCancelModal: !1,
						className: I.legacyPricingNotice
					}),
					(0, t.jsx)(d.Z, {
						onSelectSku: (e) => s((0, u.Wz)(e)),
						isGift: r,
						priceOptions: o
					})
				]
			})
		]
	});
}
