n.d(t, {
	Z: function () {
		return c;
	}
});
var i = n(470079),
	l = n(442837),
	r = n(623633),
	a = n(199902),
	s = n(19780),
	o = n(979651);
function c(e) {
	var t;
	let n = (0, l.e7)([s.Z], () => s.Z.getGuildId()),
		c = e.children.map((e) => e.id),
		u = null != n && c.includes(n),
		d = !1,
		h = !1,
		p = !1,
		_ = (0, l.e7)([s.Z], () => s.Z.getChannelId()),
		f = null === (t = (0, r.Z)()) || void 0 === t ? void 0 : t.guild_id,
		g = null != f && c.includes(f),
		m = (0, l.e7)([o.Z], () => null != _ && o.Z.hasVideo(_), [_]),
		C = (0, l.e7)([a.Z], () => a.Z.getCurrentUserActiveStream());
	return (
		u && ((d = !m), (h = m), (p = null != C && null != C.guildId && c.includes(C.guildId))),
		i.useMemo(
			() => ({
				audio: d,
				video: h,
				screenshare: p,
				liveStage: g,
				isCurrentUserConnected: u
			}),
			[d, h, p, g, u]
		)
	);
}
