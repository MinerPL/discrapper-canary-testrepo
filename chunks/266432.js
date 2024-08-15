n.d(t, {
	Z: function () {
		return c;
	}
}),
	n(47120);
var i = n(470079),
	a = n(442837),
	s = n(566620),
	l = n(317381),
	r = n(592125),
	o = n(26033);
function c(e, t) {
	let n = (0, a.e7)([r.Z], () => r.Z.getChannel(t)),
		c = i.useMemo(() => (null == e ? void 0 : e.some((e) => (0, o.Mq)(e))), [e]);
	i.useEffect(() => {
		c && s.w1({ guildId: null == n ? void 0 : n.guild_id });
	}, [null == n ? void 0 : n.guild_id, c]);
	let u = (0, a.Wu)([l.ZP], () => l.ZP.getShelfActivities(null == n ? void 0 : n.guild_id));
	return i.useMemo(() => {
		if (!c) return e;
		let t = new Set(u.map((e) => e.application_id));
		return null == e ? void 0 : e.filter((e) => !(0, o.Mq)(e) || t.has(e.extra.application_id));
	}, [e, u, c]);
}
