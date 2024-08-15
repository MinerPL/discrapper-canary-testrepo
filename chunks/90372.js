var a = n(470079),
	s = n(451478),
	r = n(830917),
	l = n(985518);
t.Z = {
	useForumChannelSeenManager: function (e) {
		let { guildId: t, channelId: n } = e,
			i = a.useRef(null),
			o = (0, r.UU)(),
			c = !s.Z.isFocused(o);
		return (
			a.useLayoutEffect(
				() => (
					null == i.current &&
						((i.current = new l.ZP({
							guildId: t,
							channelId: n,
							isPaused: c,
							windowId: o
						})),
						i.current.initialize()),
					() => {
						var e;
						null === (e = i.current) || void 0 === e || e.terminate(), (i.current = null);
					}
				),
				[n, t, c, o]
			),
			i.current
		);
	}
};
