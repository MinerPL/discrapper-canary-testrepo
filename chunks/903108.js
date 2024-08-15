n.d(t, {
	Z: function () {
		return h;
	}
});
var i = n(442837),
	a = n(358221),
	s = n(430824),
	l = n(496675),
	r = n(431328),
	o = n(501655),
	c = n(146085),
	u = n(71275),
	d = n(981631);
function h(e) {
	var t;
	let n = (0, i.e7)([a.Z], () => a.Z.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
		h = (0, r.Io)(e.id),
		m = (0, r.Rk)(e.id, o.pV.AUDIENCE),
		p = (0, u.PK)(e.id),
		_ = (0, i.e7)([s.Z], () => s.Z.getGuild(e.guild_id), [e.guild_id]),
		f = (0, i.e7)([l.Z], () => l.Z.can(c.yP, e), [e]),
		E = null !== (t = null == _ ? void 0 : _.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
		C = !(null == _ ? void 0 : _.isCommunity()) && E > d.RcX;
	return p && !n && f && !C && h + m >= E;
}
