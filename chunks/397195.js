t.d(n, {
	Z: function () {
		return u;
	}
});
var l = t(470079),
	s = t(106351),
	a = t(399606),
	i = t(447003),
	r = t(592125),
	o = t(984933),
	d = t(823379);
function u(e) {
	let n = (0, a.Wu)([o.ZP], () => o.ZP.getVocalChannelIds(e)),
		t = (0, a.Wu)([r.Z], () => n.map((e) => r.Z.getChannel(e)).filter(d.lm), [n]);
	return l.useMemo(() => t.filter((e) => !(0, i.Z)(e) && e.type === s.d.GUILD_VOICE), [t]);
}
