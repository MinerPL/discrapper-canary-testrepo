n.d(t, {
	m: function () {
		return v;
	}
});
var i = n(735250),
	l = n(470079),
	r = n(399606),
	a = n(704215),
	s = n(692547),
	o = n(481060),
	c = n(239091),
	u = n(605236),
	d = n(45966),
	h = n(31445),
	p = n(22082),
	_ = n(703656),
	f = n(306680),
	g = n(709054),
	m = n(540126),
	C = n(434479),
	I = n(981631),
	E = n(176505),
	N = n(490897),
	x = n(689938),
	S = n(704842);
function v(e) {
	let { guild: t, selected: v } = e,
		Z = (0, h.Z)(t),
		T = (0, u.wE)(a.z.CHANNEL_BROWSER_NEW_BADGE_NUX),
		L = (0, r.Wu)([p.Z], () =>
			Array.from(p.Z.getNewChannelIds(t.id)).filter((e) => p.Z.shouldIndicateNewChannel(t.id, e))
		),
		A = (0, r.e7)([f.ZP], () => f.ZP.hasUnread(t.id, N.W.GUILD_ONBOARDING_QUESTION)),
		b = L.length > m.Cb,
		M = (0, r.e7)([d.Z, f.ZP], () => {
			let e = d.Z.lastFetchedAt(t.id),
				n = f.ZP.lastMessageId(t.id, N.W.GUILD_ONBOARDING_QUESTION);
			if (null == n) return !1;
			let i = g.default.extractTimestamp(n);
			return null != e && e > i;
		}),
		R = l.useCallback(() => {
			(0, _.uL)(I.Z5c.CHANNEL(t.id, Z ? E.oC.CUSTOMIZE_COMMUNITY : E.oC.CHANNEL_BROWSER));
		}, [t.id, Z]),
		O = l.useCallback(
			(e) => {
				(0, c.jW)(e, async () => {
					let { default: e } = await n.e('8926').then(n.bind(n, 156673));
					return (n) =>
						(0, i.jsx)(e, {
							...n,
							guild: t
						});
				});
			},
			[t]
		),
		P = null;
	return (
		(!T || A || b) &&
			!v &&
			!M &&
			(P = (0, i.jsx)(o.TextBadge, {
				color: s.Z.colors.BADGE_BRAND_BG.css,
				text: x.Z.Messages.NEW,
				className: S.newChannel
			})),
		(0, i.jsx)(C.m, {
			id: 'channels-'.concat(t.id),
			renderIcon: (e) =>
				(0, i.jsx)(o.ChannelListMagnifyingGlassIcon, {
					size: 'md',
					color: 'currentColor',
					className: e
				}),
			text: Z ? x.Z.Messages.CHANNELS_AND_ROLES : x.Z.Messages.CHANNEL_BROWSER_TITLE,
			selected: v,
			onClick: R,
			onContextMenu: O,
			trailing: P
		})
	);
}
