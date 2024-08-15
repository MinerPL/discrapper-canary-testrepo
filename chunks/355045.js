var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(442837),
	l = n(622535),
	u = n(481060),
	c = n(906732),
	d = n(565138),
	_ = n(963249),
	E = n(594174),
	f = n(314884),
	h = n(709586),
	p = n(74538),
	m = n(678558),
	I = n(981631),
	T = n(474936),
	g = n(689938),
	S = n(837220);
t.Z = function (e) {
	let { closeLayer: t, guild: n, onCtaVisibilityChange: a } = e,
		A = (0, o.e7)([E.default], () => E.default.getCurrentUser()),
		N = (0, o.e7)([f.Z], () => f.Z.boostSlots),
		{ analyticsLocations: v } = (0, c.ZP)(),
		O = i.useMemo(
			() =>
				Object.keys(N).filter((e) => {
					let t = N[e];
					return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id;
				}),
			[N, n.id]
		);
	return (0, r.jsxs)('div', {
		className: S.guildStatus,
		children: [
			(0, r.jsx)(d.Z, {
				className: S.guildIcon,
				guild: n,
				size: d.Z.Sizes.LARGER
			}),
			(0, r.jsx)(u.Heading, {
				className: S.guildName,
				color: 'always-white',
				variant: 'text-lg/bold',
				children: n.name
			}),
			(0, r.jsxs)('div', {
				className: S.guildBoostCountWrapper,
				children: [
					(0, r.jsxs)('div', {
						className: S.guildBoostCount,
						children: [
							(0, r.jsx)(h.Z, { className: s()(S.guildBoostBadge, { [S.guildBoostBadgeWithBoosts]: n.premiumSubscriberCount > 0 }) }),
							(0, r.jsx)(u.Text, {
								className: S.guildStatusCopy,
								variant: 'text-md/bold',
								children: g.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({ subscriptions: n.premiumSubscriberCount })
							})
						]
					}),
					O.length > 0
						? (0, r.jsx)(u.Text, {
								className: S.guildBoostCountCurrentUser,
								variant: 'text-sm/normal',
								children: g.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_USER_SUBSCRIPTION_COUNT.format({ numSubscriptions: O.length })
							})
						: null
				]
			}),
			(0, r.jsxs)('div', {
				className: S.guildBoostCtas,
				children: [
					(0, r.jsx)(l.$, {
						onChange: a,
						threshold: 0.9,
						children: (0, r.jsx)('div', {
							className: s()(S.guildBoostCta, S.guildBoostCtaBoostWrapper),
							children: (0, r.jsx)(m.Z, {
								className: S.guildBoostCtaBoost,
								innerClassName: s()(S.__invalid_guildBoostCtaContent, S.guildBoostCtaBoostContent),
								buttonShineClassName: S.guildBoostCtaBoostShine,
								guild: n,
								analyticsLocation: {
									page: I.ZY5.PREMIUM_GUILD_USER_MODAL,
									section: I.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
									object: I.qAy.BUTTON_CTA,
									objectType: I.Qqv.BUY
								},
								closeLayer: t,
								color: u.Button.Colors.WHITE,
								size: u.Button.Sizes.LARGE,
								fullWidth: !0
							})
						})
					}),
					p.ZP.hasFreeBoosts(A) || p.ZP.isPremium(A, T.p9.TIER_2)
						? (0, r.jsxs)(u.Button, {
								className: s()(S.guildBoostCta, S.guildBoostCtaSecondary),
								innerClassName: s()(S.__invalid_guildBoostCtaContent, S.guildBoostCtaGiftContent),
								look: u.Button.Looks.OUTLINED,
								color: u.Button.Colors.WHITE,
								onClick: function () {
									(0, _.Z)({
										initialPlanId: null,
										subscriptionTier: T.Si.TIER_2,
										isGift: !0,
										analyticsLocations: v,
										analyticsObject: {
											page: I.ZY5.PREMIUM_GUILD_USER_MODAL,
											section: I.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
											object: I.qAy.BUTTON_ICON,
											objectType: I.Qqv.GIFT
										},
										onClose: (e) => e && t()
									});
								},
								size: u.Button.Sizes.LARGE,
								children: [
									(0, r.jsx)(u.GiftIcon, {
										size: 'md',
										color: 'currentColor',
										className: S.guildBoostCtaGiftIcon
									}),
									g.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_GIFT_NITRO
								]
							})
						: (0, r.jsx)(u.Button, {
								className: s()(S.guildBoostCta, S.guildBoostCtaSecondary),
								innerClassName: s()(S.__invalid_guildBoostCtaContent, S.__invalid_guildBoostCtaSubscribeContent),
								look: u.Button.Looks.OUTLINED,
								color: u.Button.Colors.WHITE,
								onClick: function () {
									(0, _.Z)({
										initialPlanId: null,
										subscriptionTier: T.Si.TIER_2,
										analyticsLocations: v,
										analyticsObject: {
											page: I.ZY5.PREMIUM_GUILD_USER_MODAL,
											section: I.jXE.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
											object: I.qAy.BUTTON_ICON,
											objectType: I.Qqv.BUY
										},
										onClose: (e) => e && t()
									});
								},
								size: u.Button.Sizes.LARGE,
								children: g.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_SUBSCRIBE_WITH_FREE_BOOSTS
							})
				]
			})
		]
	});
};
