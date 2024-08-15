var r = n(735250),
	i = n(470079),
	a = n(996146),
	s = n(481060),
	o = n(100527),
	l = n(906732),
	u = n(963249),
	c = n(622069),
	d = n(51144),
	_ = n(443603),
	E = n(981631),
	f = n(474936),
	h = n(689938),
	p = n(305489);
t.Z = i.memo(function (e) {
	let { disabled: t, channel: n } = e,
		{ analyticsLocations: i } = (0, l.ZP)(o.Z.GIFT_BUTTON),
		I = (0, d.Ft)(n),
		{ Component: m, events: T, play: g } = (0, a.$)();
	if (t) return null;
	let S = () => {
		let { enabled: e } = c.Z.getCurrentConfig({ location: 'ChannelPremiumGiftButton' }, { autoTrackExposure: !0 });
		(0, u.Z)({
			isGift: !0,
			giftRecipient: null === I ? void 0 : I,
			initialPlanId: null,
			subscriptionTier: e ? void 0 : f.Si.TIER_2,
			analyticsLocations: i,
			analyticsObject: {
				page: n.isPrivate() ? E.ZY5.DM_CHANNEL : E.ZY5.GUILD_CHANNEL,
				section: E.jXE.CHANNEL_TEXT_AREA,
				object: E.qAy.BUTTON_ICON,
				objectType: E.Qqv.GIFT
			}
		});
	};
	return (0, r.jsx)(s.Tooltip, {
		text: h.Z.Messages.PREMIUM_GIFT_BUTTON_TOOLTIP,
		children: (e) =>
			(0, r.jsx)(_.Z, {
				...e,
				innerClassName: p.button,
				isActive: !1,
				'aria-label': h.Z.Messages.PREMIUM_GIFT_BUTTON_LABEL,
				'aria-haspopup': 'dialog',
				onClick: () => {
					S(), g();
				},
				...T,
				children: (0, r.jsx)(m, { color: 'currentColor' })
			})
	});
});
