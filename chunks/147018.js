var e = r(161581),
	o = r(347722).f,
	i = r(251069),
	u = r(859209),
	c = r(492424),
	f = r(381740),
	a = r(474180);
t.exports = function (t, n) {
	var r,
		s,
		p,
		l,
		v,
		b = t.target,
		y = t.global,
		g = t.stat;
	if ((r = y ? e : g ? e[b] || c(b, {}) : (e[b] || {}).prototype))
		for (s in n) {
			if (
				((l = n[s]),
				(p = t.dontCallGetSet ? (v = o(r, s)) && v.value : r[s]),
				!a(y ? s : b + (g ? '.' : '#') + s, t.forced) && void 0 !== p)
			) {
				if (typeof l == typeof p) continue;
				f(l, p);
			}
			(t.sham || (p && p.sham)) && i(l, 'sham', !0), u(r, s, l, t);
		}
};
