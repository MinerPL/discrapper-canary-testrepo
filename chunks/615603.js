t(653041);
var n = t(735250),
	a = t(470079),
	i = t(120356),
	r = t.n(i),
	o = t(442837),
	l = t(481060),
	c = t(607070),
	d = t(158153),
	_ = t(760558),
	E = t(401786),
	u = t(450468),
	I = t(98278),
	T = t(314684),
	S = t(594174),
	N = t(78839),
	C = t(267642),
	m = t(74538),
	A = t(283029),
	O = t(357956),
	g = t(275909),
	h = t(981631),
	p = t(735825),
	R = t(689938),
	x = t(623765);
function M(e) {
	let { guildBoostSlot: s, isCancellable: t, onCancel: i, onUncancel: r, premiumSubscription: o, useReducedMotion: c } = e,
		d = a.useMemo(() => (null != s.cooldownEndsAt ? new Date(s.cooldownEndsAt) : null), [s]),
		_ = (0, C.tl)(s);
	return (0, n.jsxs)(
		'li',
		{
			className: x.unappliedGuildBoostSlot,
			children: [
				(0, n.jsxs)('div', {
					className: x.unappliedGuildBoostSlotContentPrimary,
					children: [
						(0, n.jsx)(g.Z, {
							className: x.unappliedGuildBoostSlotIcon,
							hasCooldown: s.isOnCooldown(),
							isCanceled: _,
							useReducedMotion: c
						}),
						_ && null != o
							? (0, n.jsx)(l.Text, {
									color: 'text-muted',
									variant: 'text-sm/medium',
									children: R.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PENDING_CANCELATION.format({ date: o.currentPeriodEnd })
								})
							: s.isOnCooldown() && null != d
								? (0, n.jsx)(O.Z, { cooldown: d.getTime() })
								: (0, n.jsx)(l.Text, {
										className: x.__invalid_unappliedGuildBoostSlotDescription,
										color: 'text-muted',
										variant: 'text-sm/medium',
										children: R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_UNAPPLIED_GUILD_BOOST_DESCRIPTION
									})
					]
				}),
				(0, n.jsxs)('div', {
					className: x.unappliedGuildBoostSlotContentSecondary,
					children: [
						t &&
							!_ &&
							(0, n.jsx)(l.Button, {
								className: x.unappliedGuildBoostSlotCta,
								color: l.Button.Colors.PRIMARY,
								look: l.Button.Looks.LINK,
								onClick: () => i(s),
								size: l.Button.Sizes.NONE,
								children: R.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_CANCEL_BUTTON
							}),
						_ &&
							(0, n.jsx)(l.Button, {
								className: x.unappliedGuildBoostSlotCta,
								color: l.Button.Colors.PRIMARY,
								look: l.Button.Looks.LINK,
								onClick: () => r(s),
								size: l.Button.Sizes.NONE,
								children: R.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_UNCANCEL_BUTTON
							})
					]
				})
			]
		},
		s.id
	);
}
function f(e) {
	(0, l.openModalLazy)(
		async () => (s) =>
			(0, n.jsx)(E.default, {
				...s,
				guildBoostSlot: e
			})
	);
}
function D(e) {
	(0, l.openModalLazy)(
		async () => (s) =>
			(0, n.jsx)(u.default, {
				...s,
				guildBoostSlotId: e.id
			})
	);
}
s.Z = function (e) {
	let s, t;
	let { guildBoostSlots: i } = e,
		E = (0, o.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()),
		u = (null == E ? void 0 : E.isPausedOrPausePending) === !0,
		O = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
		g = (0, o.e7)([S.default], () => S.default.getCurrentUser()),
		P = (0, T.Vp)(),
		{
			appliedGuildBoostSlots: L,
			unappliedGuildBoostSlots: b,
			numActiveGuildBoostSlots: Z,
			hasCooldownBoosts: v,
			allGuildBoostsAreOnCooldown: j
		} = a.useMemo(() => {
			let e = [],
				s = [],
				t = 0,
				n = !1,
				a = !0;
			return (
				i.forEach((i) => {
					!(0, C.tl)(i) && t++, i.isOnCooldown() ? (n = !0) : (a = !1), null != i.premiumGuildSubscription ? e.push(i) : s.push(i);
				}),
				{
					appliedGuildBoostSlots: e,
					unappliedGuildBoostSlots: s,
					numActiveGuildBoostSlots: t,
					hasCooldownBoosts: n,
					allGuildBoostsAreOnCooldown: a
				}
			);
		}, [i]),
		B = null != E ? (0, d.G)(E, P) : 0,
		U = Math.max(0, B - L.length),
		G = Z > B,
		F = B === i.length,
		y = F ? U : 1,
		V = a.useMemo(() => {
			let e = [];
			for (let s = 0; s < y; s++)
				e.push(
					(0, n.jsx)(
						A.Z,
						{
							className: x.headerBoostGem,
							useReducedMotion: O
						},
						s
					)
				);
			return e;
		}, [y, O]),
		Y = null != P,
		w = a.useMemo(() => b.find((e) => e.isAvailable()), [b]);
	if (0 === b.length) return null;
	let H = b.length;
	if (((s = F ? (1 === H && Y ? R.Z.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_TITLE : (j ? R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOSTS_ALL_COOLDOWN : R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_INCLUDED_WITH_SUBSCRIPTION).format({ numUnappliedGuildBoostSlots: H })) : (j ? R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOSTS_ALL_COOLDOWN : R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_V2).format({ numUnappliedGuildBoostSlots: H })), m.ZP.isPremium(g))) {
		if (F && 1 === H && Y) t = P.skuId === p.Ft.FREE_GUILD_BOOST_1_MONTH ? R.Z.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_1_MONTH_VARIANT : R.Z.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_3_MONTHS_VARIANT;
		else {
			let e = (e, s) =>
				(0, n.jsx)(
					l.Clickable,
					{
						className: x.headerLearnMoreLink,
						tag: 'span',
						onClick: () => {
							(0, I.z)();
						},
						children: e
					},
					s
				);
			t = j
				? R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING_WITH_PREMIUM_SUBSCRIPTION_ALL_COOLDOWN.format({ learnMoreHook: e })
				: R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING_WITH_PREMIUM_SUBSCRIPTION.format({
						numUnappliedGuildBoostSlots: H,
						learnMoreHook: e
					});
		}
	} else t = j ? R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING_ALL_COOLDOWN : R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING.format({ numUnappliedGuildBoostSlots: H });
	return (0, n.jsxs)('div', {
		className: x.wrapper,
		children: [
			Y &&
				(0, n.jsxs)('div', {
					className: x.specialHeader,
					children: [
						(0, n.jsx)(l.Text, {
							variant: 'text-xs/semibold',
							className: x.pill,
							children: R.Z.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_TITLE.toLocaleUpperCase()
						}),
						(0, n.jsx)(l.Heading, {
							color: 'header-primary',
							variant: 'heading-md/semibold',
							children: R.Z.Messages.GUILD_BOOST_NITRO_REWARD_BANNER
						})
					]
				}),
			(0, n.jsxs)('div', {
				className: r()(x.content, {
					[x.headerWithBoost]: Y,
					[x.headerWithoutSpecialHeader]: !Y
				}),
				children: [
					(0, n.jsxs)('div', {
						className: x.header,
						children: [
							(0, n.jsxs)('div', {
								className: x.headerContentPrimary,
								children: [
									(0, n.jsx)('div', {
										className: x.headerBoostGems,
										children: V
									}),
									(0, n.jsxs)('div', {
										className: x.__invalid_headerCopy,
										children: [
											(0, n.jsx)(l.Heading, {
												className: x.headerHeading,
												variant: 'heading-lg/bold',
												children: s
											}),
											(0, n.jsx)(l.Text, {
												className: x.__invalid_headerSubheading,
												color: 'text-primary',
												variant: 'text-sm/normal',
												children: t
											})
										]
									})
								]
							}),
							(0, n.jsx)('div', {
								className: x.headerContentSecondary,
								children: (0, n.jsx)(l.Tooltip, {
									shouldShow: null == w || u,
									text: u ? R.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION : R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_NO_AVAILABLE_GUILD_BOOST_SLOTS,
									children: (e) =>
										(0, n.jsx)(l.Button, {
											...e,
											disabled: null == w || u,
											onClick:
												null != w
													? () => {
															var e;
															return (
																(e = w),
																void (0, l.openModalLazy)(
																	async () => (s) =>
																		(0, n.jsx)(_.default, {
																			...s,
																			guildBoostSlots: [e],
																			locationSection: h.jXE.SETTINGS_PREMIUM
																		})
																)
															);
														}
													: void 0,
											children: R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_ANY_SERVER
										})
								})
							})
						]
					}),
					(!F || v) &&
						(0, n.jsx)('ul', {
							className: x.unappliedBoostSlots,
							children: b.map((e) =>
								(0, n.jsx)(
									M,
									{
										guildBoostSlot: e,
										isCancellable: G,
										onCancel: f,
										onUncancel: D,
										premiumSubscription: E,
										useReducedMotion: O
									},
									e.id
								)
							)
						})
				]
			})
		]
	});
};
