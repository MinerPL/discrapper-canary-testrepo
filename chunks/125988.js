n(47120);
var r = n(470079),
	i = n(442837),
	a = n(812457),
	s = n(166625),
	o = n(271383),
	l = n(594174),
	u = n(768581),
	c = n(676742),
	d = n(660097);
t.Z = (e) => {
	var t;
	let { user: n, guildId: _, size: E, onlyAnimateOnHover: f = !1, showPending: h = !1, showTryItOut: p = !1, avatarDecorationOverride: m } = e,
		[I, T] = r.useState(!1),
		{ canAnimate: g } = (0, a.j)(I, f),
		S = (0, i.e7)([o.ZP], () => (null != _ && null != n ? o.ZP.getMember(_, n.id) : null)),
		[A, N] = (0, i.Wu)([l.default], () => {
			var e;
			return [null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.id, l.default.getUser(null == n ? void 0 : n.id)];
		}),
		v = null == S ? (null == N ? void 0 : N.avatarDecoration) : null === S.avatarDecoration ? null : null !== (t = S.avatarDecoration) && void 0 !== t ? t : null == N ? void 0 : N.avatarDecoration,
		{ pendingAvatarDecoration: O } = (0, s.Z)({
			isTryItOut: p,
			guildId: _
		}),
		R = h && void 0 !== O && void 0 !== A && A === (null == n ? void 0 : n.id),
		C = null != _ && null === O,
		y = (0, c.Z)(R ? (C ? (null == N ? void 0 : N.avatarDecoration) : null != O ? O : v) : null != v ? v : null == N ? void 0 : N.avatarDecoration),
		D = r.useMemo(
			() =>
				(0, u.NZ)({
					avatarDecoration: void 0 !== m ? m : y,
					canAnimate: g,
					size: E
				}),
			[y, g, E, m]
		),
		L = r.useCallback(() => T(!0), []);
	return {
		avatarPlaceholderSrc: d,
		avatarDecorationSrc: D,
		isAvatarDecorationAnimating: g,
		eventHandlers: {
			onMouseEnter: L,
			onMouseLeave: r.useCallback(() => T(!1), [])
		}
	};
};
