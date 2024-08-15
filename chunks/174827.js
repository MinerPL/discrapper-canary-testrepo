n.d(s, {
	x: function () {
		return B;
	}
}),
	n(47120);
var t = n(735250),
	r = n(470079),
	i = n(512722),
	l = n.n(i),
	a = n(399606),
	o = n(481060),
	C = n(975608),
	d = n(600164),
	u = n(711459),
	c = n(374649),
	_ = n(650032),
	p = n(439017),
	x = n(104494),
	L = n(639119),
	h = n(642530),
	f = n(381507),
	I = n(314404),
	E = n(594174),
	M = n(509545),
	N = n(669079),
	j = n(63063),
	T = n(74538),
	g = n(987209),
	m = n(598),
	A = n(409813),
	O = n(51499),
	S = n(456251),
	R = n(614277),
	P = n(809144),
	Z = n(698708),
	v = n(981631),
	y = n(474936),
	b = n(689938),
	U = n(30214);
function B(e) {
	var s, n, i;
	let {
			handleStepChange: B,
			initialPlanId: H,
			subscriptionTier: k,
			trialId: G,
			referralTrialOfferId: F,
			handleClose: w
		} = e,
		{
			activeSubscription: D,
			hasFetchedSubscriptions: W,
			paymentSourceId: Y,
			paymentSources: K,
			selectedSkuId: V,
			selectedPlan: X,
			step: Q,
			defaultPlanId: q,
			priceOptions: J,
			isPremium: z
		} = (0, m.usePaymentContext)(),
		{ isGift: $, giftRecipient: ee, giftMessage: es } = (0, g.wD)(),
		en = null != Y ? K[Y] : null,
		{ newPlans: et } = u.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
		er = (0, a.e7)([E.default], () => E.default.getCurrentUser()),
		ei = !$ && null != V && V === y.Si.TIER_2 && null != er && er.hasHadPremium() && W && null == D && (0, u.aQ)(en),
		el = (0, L.N)(F),
		ea = !$ && null != el && null != V && y.nG[el.trial_id].skus.includes(V),
		eo = (0, x.Ng)(),
		eC =
			null == eo
				? void 0
				: null === (s = eo.discount) || void 0 === s
					? void 0
					: s.plan_ids.some((e) => y.GP[e].skuId === V),
		ed = !$ && null != eo && null != V && eC,
		eu = null !== (n = ea || ed) && void 0 !== n && n,
		{ defaultToMonthlyPlan: ec } = p.k.useExperiment({ location: 'd17fd6_4' }, { autoTrackExposure: !1 }),
		e_ = r.useMemo(
			() =>
				(0, T.V7)({
					skuId: V,
					isPremium: z,
					multiMonthPlans: ei ? et : [],
					currentSubscription: D,
					isGift: $,
					isEligibleForTrial: ea,
					defaultPlanId: q,
					defaultToMonthlyPlan: ec
				}),
			[V, z, et, D, ei, $, ea, q, ec]
		),
		ep = ed && e_.includes(y.Xh.PREMIUM_MONTH_TIER_2) ? y.Xh.PREMIUM_MONTH_TIER_2 : e_[0],
		ex = (0, a.e7)([M.Z], () => M.Z.get(ep)),
		eL = [
			{
				planId: null == ex ? void 0 : ex.id,
				quantity: 1
			}
		],
		[eh, ef] = r.useState(eu),
		[eI, eE] = (0, c.ED)({
			items: eL,
			renewal: !1,
			preventFetch: !eu,
			applyEntitlements: !0,
			trialId: G,
			paymentSourceId: J.paymentSourceId,
			currency: J.currency
		});
	r.useEffect(() => {
		eu && ef((null == eI ? void 0 : eI.subscriptionPeriodEnd) == null);
	}, [eI, eu]),
		(0, C.Z)(
			'Payment Modal Plan Select Step',
			eh,
			5,
			{
				proratedInvoicePreview: eI,
				proratedInvoiceError: eE,
				isEligibleForOffer: eu
			},
			{ tags: { app_context: 'billing' } }
		);
	let eM = null !== (i = null == eE ? void 0 : eE.message) && void 0 !== i ? i : b.Z.Messages.ERROR_GENERIC_TITLE,
		eN = eu && null == eE,
		ej = eu && null != eE,
		eT = eN && null == D && !!eu && (null == eI ? void 0 : eI.subscriptionPeriodEnd) == null,
		{ enabled: eg } = _._.useExperiment({ location: 'PremiumPaymentPlanSelectStep' }, { autoTrackExposure: !1 }),
		em = !$ && (null == ex ? void 0 : ex.skuId) === y.Si.TIER_2 && (null == el ? void 0 : el.referrer_id) != null && eg,
		eA = null;
	return ((eA = em ? (0, t.jsx)(f.Z, {}) : (0, t.jsx)(h.Z, {})), eT)
		? (0, t.jsx)(S.Z, {})
		: (l()(null != Q, 'Step should be set'),
			l()(e_.length > 0, 'Premium plan options should be set'),
			(0, t.jsxs)(t.Fragment, {
				children: [
					(0, t.jsx)(P.P, { giftMessage: es }),
					!($ && (0, N.pO)(ee)) && (0, t.jsx)(O.Z, { isEligibleForTrial: ea }),
					(0, t.jsxs)(R.C3, {
						children: [
							eN && (0, t.jsx)('hr', { className: U.planSelectSeparatorUpper }),
							eA,
							(0, t.jsx)(Z.Z, {}),
							ej
								? (0, t.jsx)(o.FormErrorBlock, { children: eM })
								: (0, t.jsx)(I.O, {
										planOptions: e_,
										eligibleForMultiMonthPlans: ei,
										referralTrialOfferId: F,
										selectedPlanId: null == X ? void 0 : X.id,
										subscriptionPeriodEnd: null == eI ? void 0 : eI.subscriptionPeriodEnd,
										discountInvoiceItems: ed ? (null == eI ? void 0 : eI.invoiceItems) : void 0,
										handleClose: w
									}),
							eN &&
								(0, t.jsxs)(t.Fragment, {
									children: [
										(0, t.jsx)('hr', { className: U.planSelectSeparatorLower }),
										(0, t.jsx)(o.Text, {
											variant: 'text-xs/normal',
											children: b.Z.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
												link: j.Z.getArticleURL(v.BhN.PREMIUM_DETAILS_CANCEL_SUB)
											})
										})
									]
								})
						]
					}),
					(0, t.jsx)(R.O3, {
						children: (0, t.jsx)(o.ModalFooter, {
							justify: d.Z.Justify.BETWEEN,
							align: d.Z.Align.CENTER,
							children: (0, t.jsx)(I.M, {
								onStepChange: B,
								onBackClick: () => B(A.h8.SKU_SELECT),
								showBackButton: null == H && null == k,
								planOptions: e_,
								shouldRenderUpdatedPaymentModal: eN,
								isTrial: ea
							})
						})
					})
				]
			}));
}
