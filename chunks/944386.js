n.d(t, {
	u: function () {
		return d;
	}
});
var r = n(470079),
	i = n(367907),
	a = n(592125),
	s = n(944486),
	o = n(626135),
	l = n(130402),
	u = n(185923),
	c = n(981631);
let d = (e) => {
	let { emojiId: t, currentGuildId: n, popoutData: d, nonce: _, demoMode: E } = e,
		{ current: f } = r.useRef({
			guild_id: n,
			emoji_id: t,
			...(0, i.v_)(a.Z.getChannel(s.Z.getChannelId(n)))
		});
	return (
		r.useEffect(() => {
			var e;
			(0, l.x)(u.qR.TrackOpenPopoutUsed),
				!E &&
					o.default.track(c.rMx.OPEN_POPOUT, {
						type: null !== (e = null == d ? void 0 : d.analyticsType) && void 0 !== e ? e : 'Standard Emoji Popout',
						nonce: _,
						...f
					});
		}, []),
		f
	);
};
