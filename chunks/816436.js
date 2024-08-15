n.d(t, {
	b: function () {
		return u;
	},
	v: function () {
		return l;
	}
}),
	n(47120),
	n(653041);
var r = n(392711),
	i = n.n(r),
	a = n(442837),
	s = n(592125),
	o = n(823379);
function l(e, t, n) {
	let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
		a = i()(s.Z.getMutableGuildChannelsForGuild(e)).values().groupBy('parent_id').value(),
		l = i()(n)
			.map((e) => (e.isCategory() ? e.id : e.parent_id))
			.filter(o.lm)
			.uniq()
			.map((e) => s.Z.getChannel(e))
			.filter(o.lm)
			.sortBy('position')
			.value(),
		u = new Set(l.map((e) => e.id)),
		c = n.filter((e) => !e.isCategory() && (null == e.parent_id || !u.has(e.parent_id)));
	for (let e of ((c = i().sortBy(c, (e) => (e.isGuildVocal() ? e.position + 10000 : e.position))), l)) {
		!r && c.push(e);
		let s = t.has(e.id) ? a[e.id] : n.filter((t) => t.parent_id === e.id);
		(s = i().sortBy(null != s ? s : [], (e) => (e.isGuildVocal() ? e.position + 10000 : e.position))), c.push(...s);
	}
	return c;
}
function u(e, t) {
	let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
	return (0, a.Wu)([s.Z], () => {
		let r = Array.from(t)
			.map((e) => s.Z.getChannel(e))
			.filter(o.lm);
		return l(e, t, r, n);
	});
}
