t.d(s, {
	V: function () {
		return c;
	}
}),
	t(47120),
	t(470079);
var n = t(392711),
	a = t.n(n),
	i = t(442837),
	r = t(271383),
	o = t(430824),
	l = t(353093);
function c() {
	return (0, i.Wu)([o.Z, r.ZP], () => {
		let e = o.Z.getGuilds();
		return a()(e)
			.values()
			.filter((e) => {
				var s;
				return (0, l.EJ)(e) && (null === (s = r.ZP.getSelfMember(e.id)) || void 0 === s ? void 0 : s.joinedAt) != null;
			})
			.value();
	});
}
