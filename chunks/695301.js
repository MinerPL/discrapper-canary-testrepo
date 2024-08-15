var i = n(735250),
	l = n(470079),
	r = n(442837),
	a = n(481060),
	s = n(746916),
	o = n(965638),
	c = n(905423),
	u = n(486472),
	d = n(888369),
	h = n(430824),
	p = n(451478),
	_ = n(61634),
	f = n(325257),
	g = n(438266);
t.Z = l.memo(function (e) {
	let { guildNode: t, lowerBadge: n } = e,
		m = t.id,
		C = (0, r.e7)([h.Z], () => h.Z.getGuild(m)),
		I = (0, s.E)(m),
		E = (0, r.e7)([p.Z], () => p.Z.isFocused()),
		N = (0, r.e7)([u.Z], () => u.Z.isUnavailable(m)),
		x = (0, c.Z)((e) => e.guildId),
		S = (0, _.Z)(m),
		{ badge: v, unread: Z } = (0, r.cj)([d.default], () => ({
			badge: d.default.getMentionCount(m),
			unread: d.default.hasUnread(m)
		})),
		T = (0, o.I)(C) && 0 === v,
		L = l.useMemo(
			() =>
				null != n
					? n
					: T
						? (0, i.jsx)('div', {
								className: g.pauseBackground,
								children: (0, i.jsx)(a.PauseIcon, {
									size: 'custom',
									color: 'currentColor',
									className: g.pause,
									width: 10,
									height: 10
								})
							})
						: null,
			[n, T]
		);
	return (0, i.jsx)(f.Z, {
		...e,
		guild: C,
		unavailable: N,
		animatable: E,
		selected: x === m,
		badge: v,
		lowerBadge: L,
		unread: Z,
		mediaState: S,
		guildJoinRequestStatus: I
	});
});
