var r = n(347941),
	i = Object.prototype.hasOwnProperty;
t.Z = function (e, t, n, a, s, o) {
	var l = 1 & n,
		u = (0, r.Z)(e),
		c = u.length;
	if (c != (0, r.Z)(t).length && !l) return !1;
	for (var d = c; d--; ) {
		var _ = u[d];
		if (!(l ? _ in t : i.call(t, _))) return !1;
	}
	var E = o.get(e),
		f = o.get(t);
	if (E && f) return E == t && f == e;
	var h = !0;
	o.set(e, t), o.set(t, e);
	for (var p = l; ++d < c; ) {
		var m = e[(_ = u[d])],
			I = t[_];
		if (a) var T = l ? a(I, m, _, t, e, o) : a(m, I, _, e, t, o);
		if (!(void 0 === T ? m === I || s(m, I, n, a, o) : T)) {
			h = !1;
			break;
		}
		p || (p = 'constructor' == _);
	}
	if (h && !p) {
		var g = e.constructor,
			S = t.constructor;
		g != S && 'constructor' in e && 'constructor' in t && !('function' == typeof g && g instanceof g && 'function' == typeof S && S instanceof S) && (h = !1);
	}
	return o.delete(e), o.delete(t), h;
};
