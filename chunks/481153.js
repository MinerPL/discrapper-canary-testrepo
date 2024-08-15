var s = n(735250),
	r = n(470079),
	i = n(120356),
	a = n.n(i),
	l = n(442837),
	o = n(481060),
	c = n(812206),
	u = n(388905),
	d = n(925329),
	_ = n(479446),
	h = n(981632),
	E = n(594174),
	g = n(509545),
	p = n(55563),
	I = n(296848),
	m = n(981631),
	f = n(474936),
	N = n(689938),
	T = n(867013),
	x = n(257995),
	A = n(224499);
t.Z = l.ZP.connectStores([p.Z, c.Z, g.Z, E.default], (e) => {
	let { giftCode: t } = e,
		n = p.Z.get(t.skuId),
		{ subscriptionPlanId: s } = t;
	return {
		sku: n,
		subscriptionPlan: null != s ? (0, I.oE)(s) : null,
		application: c.Z.getApplication(n.applicationId),
		gifter: E.default.getUser(t.userId)
	};
})((e) => {
	let { error: t, giftCode: n, gifter: i, sku: l, application: c, subscriptionPlan: E } = e,
		g =
			null == i
				? N.Z.Messages.GIFT_CODE_AUTH_GIFTED
				: N.Z.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({ username: i.username }),
		p = l.name;
	return (
		null != E &&
			(p = (
				E.interval === f.rV.MONTH
					? N.Z.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY
					: N.Z.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY
			).format({
				skuName: l.name,
				intervalCount: E.intervalCount
			})),
		(0, s.jsxs)(r.Fragment, {
			children: [
				null != n.giftStyle
					? (0, s.jsx)(h.Z, {
							defaultAnimationState: _.S.LOOP,
							giftStyle: n.giftStyle,
							className: T.seasonalIcon
						})
					: (0, s.jsx)(u.qE, {
							src: null != i ? i.getAvatarURL(void 0, 100) : null,
							size: o.AvatarSizes.DEPRECATED_SIZE_100,
							className: A.marginBottom20
						}),
				null != t
					? (0, s.jsxs)(r.Fragment, {
							children: [
								(0, s.jsx)(u.DK, { children: N.Z.Messages.INVITE_MODAL_ERROR_TITLE }),
								(0, s.jsx)(u.Dx, { children: t })
							]
						})
					: (0, s.jsxs)(r.Fragment, {
							children: [
								(0, s.jsx)(u.DK, { children: g }),
								(0, s.jsxs)(u.Dx, {
									className: a()(A.marginTop8, x.flexCenter),
									children: [
										l.productLine !== m.POd.COLLECTIBLES &&
											(0, s.jsx)(d.Z, {
												size: d.Z.Sizes.MEDIUM,
												className: T.applicationIcon,
												game: c,
												skuId: l.id
											}),
										p
									]
								})
							]
						})
			]
		})
	);
});
