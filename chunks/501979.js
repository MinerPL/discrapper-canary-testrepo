var n = r(425561),
	a = r(393531),
	o = r(208529);
e.exports = function (e, t, r, i, _, E) {
	var s = 1 & r,
		c = e.length,
		I = t.length;
	if (c != I && !(s && I > c)) return !1;
	var u = E.get(e),
		l = E.get(t);
	if (u && l) return u == t && l == e;
	var R = -1,
		A = !0,
		T = 2 & r ? new n() : void 0;
	for (E.set(e, t), E.set(t, e); ++R < c; ) {
		var d = e[R],
			N = t[R];
		if (i) var p = s ? i(N, d, R, t, e, E) : i(d, N, R, e, t, E);
		if (void 0 !== p) {
			if (p) continue;
			A = !1;
			break;
		}
		if (T) {
			if (
				!a(t, function (e, t) {
					if (!o(T, t) && (d === e || _(d, e, r, i, E))) return T.push(t);
				})
			) {
				A = !1;
				break;
			}
		} else if (!(d === N || _(d, N, r, i, E))) {
			A = !1;
			break;
		}
	}
	return E.delete(e), E.delete(t), A;
};
