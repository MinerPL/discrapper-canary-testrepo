t.d(n, {
	Z: function () {
		return o;
	}
}),
	t(724458),
	t(47120),
	t(653041);
var i = t(470079),
	a = t(442837),
	l = t(924301),
	r = t(765305);
function o(e, n) {
	let t = (0, a.Wu)([l.ZP], () => Object.values(l.ZP.getUsersForGuildEvent(e, null)), [e]),
		o = (0, a.Wu)([l.ZP], () => Object.values(l.ZP.getUsersForGuildEvent(e, n)), [e, n]);
	return (0, i.useMemo)(() => {
		let e = o.reduce((e, n) => ((e[n.user_id] = n), e), {}),
			n = t.filter((n) => {
				let t = e[n.user_id];
				return null == t || t.response === r.gv.INTERESTED;
			}),
			i = o.filter((e) => e.response === r.gv.INTERESTED),
			a = new Set(),
			l = [],
			c = (e) => {
				!a.has(e.user_id) && (l.push(e), a.add(e.user_id));
			};
		return n.forEach(c), i.forEach(c), l;
	}, [t, o]);
}
