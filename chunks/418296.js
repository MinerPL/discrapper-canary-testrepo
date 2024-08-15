var r = n(425561),
	i = n(834598),
	a = n(460510),
	s = n(208529),
	o = n(833295),
	l = n(433005);
e.exports = function (e, t, n) {
	var u = -1,
		c = i,
		d = e.length,
		_ = !0,
		E = [],
		f = E;
	if (n) (_ = !1), (c = a);
	else if (d >= 200) {
		var h = t ? null : o(e);
		if (h) return l(h);
		(_ = !1), (c = s), (f = new r());
	} else f = t ? [] : E;
	t: for (; ++u < d; ) {
		var p = e[u],
			I = t ? t(p) : p;
		if (((p = n || 0 !== p ? p : 0), _ && I == I)) {
			for (var m = f.length; m--; ) if (f[m] === I) continue t;
			t && f.push(I), E.push(p);
		} else !c(f, I, n) && (f !== E && f.push(I), E.push(p));
	}
	return E;
};
