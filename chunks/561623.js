a.r(n), a(47120), a(411104);
var t = a(735250),
	r = a(470079),
	o = a(442837),
	i = a(780384),
	_ = a(481060),
	s = a(366939),
	I = a(911969),
	l = a(410030),
	c = a(100527),
	u = a(906732),
	d = a(583046),
	f = a(963249),
	N = a(853872),
	T = a(509545),
	C = a(626135),
	E = a(74538),
	R = a(937615),
	M = a(212895),
	O = a(296848),
	L = a(374649),
	m = a(973159),
	p = a(798769),
	g = a(317269),
	A = a(474936),
	b = a(981631),
	P = a(689938),
	S = a(309461);
n.default = (e) => {
	var n, a, h, U;
	let { daysLeft: B, premiumType: Z, premiumSubscription: G, analyticsSource: x, ...F } = e,
		H = (0, l.ZP)(),
		[W, D] = r.useState(!1),
		{ analyticsLocations: Y } = (0, u.ZP)(c.Z.PREMIUM_UNCANCEL_MODAL),
		y = (0, o.e7)([N.Z], () => ((null == G ? void 0 : G.paymentSourceId) != null ? N.Z.getPaymentSource(G.paymentSourceId) : null), [G]),
		v = G.items[0].planId,
		k = (0, E.Wz)(A.GP[v].skuId),
		{ priceOptions: j } = (0, d.Z)({
			activeSubscription: null,
			skuIDs: [k],
			paymentSourceId: null == G ? void 0 : G.paymentSourceId,
			isGift: !1
		}),
		[w] = (0, L.ED)({
			subscriptionId: G.id,
			items: [
				{
					planId: v,
					quantity: 1
				}
			],
			renewal: !0,
			paymentSourceId: null == G ? void 0 : G.paymentSourceId,
			currency: j.currency,
			analyticsLocations: (0, u.ZP)(c.Z.PREMIUM_UNCANCEL_MODAL),
			analyticsLocation: c.Z.PREMIUM_UNCANCEL_MODAL
		}),
		K = (0, o.e7)([T.Z], () => (0, O.oE)(v), [v]),
		X = (0, o.e7)([T.Z], () => T.Z.isFetchingForSKU(k)),
		z = null == w ? void 0 : null === (U = w.invoiceItems) || void 0 === U ? void 0 : null === (h = U.find((e) => e.subscriptionPlanId === v)) || void 0 === h ? void 0 : null === (a = h.discounts) || void 0 === a ? void 0 : null === (n = a.find((e) => e.type === I.eW.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount,
		Q = null != K ? (0, E.aS)(K.id, !1, !1, j) : null,
		V = null != Q && null != z ? (0, R.T4)(Q.amount - (null != z ? z : 0), Q.currency) : null,
		{ intervalType: q, intervalCount: J } = E.ZP.getInterval(v),
		$ = Z === A.p9.TIER_1,
		ee = null != Q ? (0, R.T4)(Q.amount, Q.currency) : null;
	return (
		r.useEffect(() => {
			C.default.track(b.rMx.OPEN_MODAL, {
				type: 'Premium Uncancel Winback',
				source: x
			});
		}, [x]),
		(0, t.jsx)(_.ModalRoot, {
			...F,
			className: S.modal,
			children: W
				? (0, t.jsxs)(t.Fragment, {
						children: [
							(0, t.jsx)(p.Z, {
								premiumType: Z,
								onClose: F.onClose
							}),
							(0, t.jsx)(g.ZP, {
								planId: v,
								onClose: F.onClose,
								paymentSourceType: null == y ? void 0 : y.type
							})
						]
					})
				: (0, t.jsx)(m.Z, {
						premiumType: Z,
						titleText: $ ? P.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE_TIER_1.format({ daysLeft: B }) : P.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE.format({ daysLeft: B }),
						subtitleText: $ ? P.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE_TIER_1.format() : P.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE.format(),
						footer: (0, t.jsxs)('div', {
							children: [
								null !== ee
									? (0, t.jsx)(_.Text, {
											variant: 'text-sm/normal',
											children: (function (e) {
												switch (q) {
													case A.rV.YEAR:
														return $ ? P.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY_TIER_1.format({ price: e }) : P.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY.format({ price: e });
													case A.rV.MONTH:
														if (null != V)
															return P.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_DISCOUNT_PRICE_FOOTER.format({
																discountPrice: V,
																defaultPrice: e
															});
														if ($) return P.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY_TIER_1.format({ price: e });
														if (1 === J) return P.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY.format({ price: e });
														else
															return P.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MULTI_MONTH.format({
																price: e,
																intervalCount: J
															});
													default:
														throw Error('Unknown interval type '.concat(q));
												}
											})(ee)
										})
									: (0, t.jsx)(_.Spinner, { type: _.SpinnerTypes.SPINNING_CIRCLE }),
								(0, t.jsxs)('div', {
									className: S.footer,
									children: [
										(0, t.jsx)(_.Button, {
											disabled: X,
											onClick: () => {
												if (null != G) {
													let e = (0, M.tD)(v, G.currency, null == y ? void 0 : y.id);
													null != y && y.id === G.paymentSourceId && e
														? (s.O5(G, Y, b.Sbl.UNCANCEL_WINBACK_MODAL), D(!0))
														: (F.onClose(),
															(0, f.Z)({
																initialPlanId: v,
																analyticsLocations: Y,
																analyticsLocation: b.Sbl.UNCANCEL_WINBACK_MODAL
															}));
												}
											},
											children: P.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_KEEP_NITRO
										}),
										(0, t.jsx)(_.Button, {
											look: _.Button.Looks.LINK,
											color: (0, i.wj)(H) ? _.Button.Colors.WHITE : _.Button.Colors.PRIMARY,
											onClick: F.onClose,
											children: P.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_CANCEL
										})
									]
								})
							]
						}),
						onClose: F.onClose
					})
		})
	);
};
