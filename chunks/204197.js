n.d(t, {
	Z: function () {
		return l;
	}
});
var r = n(470079),
	i = n(481060),
	a = n(1585),
	s = n(125988),
	o = n(252532);
function l(e) {
	let {
			user: t,
			guildId: n,
			size: l,
			showPending: u = !1,
			showTryItOut: c = !1,
			animateOnHover: d = !1,
			avatarDecorationOverride: _,
			avatarOverride: E
		} = e,
		{
			avatarSrc: f,
			isAvatarAnimating: h,
			eventHandlers: p
		} = (0, o.w)({
			user: t,
			guildId: n,
			size: (0, i.getAvatarSize)(l),
			showPending: u,
			animateOnHover: d,
			avatarOverride: E
		}),
		{
			avatarPlaceholderSrc: I,
			avatarDecorationSrc: m,
			eventHandlers: T
		} = (0, s.Z)({
			user: t,
			guildId: null != n ? n : void 0,
			size: (0, a.y9)(l),
			showPending: u,
			onlyAnimateOnHover: d,
			avatarDecorationOverride: _,
			showTryItOut: c
		}),
		g = r.useCallback(() => {
			p.onMouseEnter(), T.onMouseEnter();
		}, [p, T]);
	return {
		avatarPlaceholderSrc: I,
		avatarDecorationSrc: m,
		avatarSrc: f,
		isAnimating: h,
		eventHandlers: {
			onMouseEnter: g,
			onMouseLeave: r.useCallback(() => {
				p.onMouseLeave(), T.onMouseLeave();
			}, [p, T])
		}
	};
}
