n.d(t, {
	Z: function () {
		return o;
	}
});
var r = n(149765),
	i = n(131704),
	a = n(700785),
	s = n(231338);
function o(e) {
	if (null == e) return !1;
	let { type: t } = e;
	if (null == e.guild_id || !i.zS.has(t)) return !1;
	if (e.isGuildVocal() && !a.Uu(s.Pl.CONNECT, e)) return !0;
	let n = e.permissionOverwrites[e.guild_id];
	return null != n && r.e$(n.deny, s.Pl.VIEW_CHANNEL);
}
