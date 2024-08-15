var n = r(620014),
	a = r(733892);
e.exports = function (e, t, r, o) {
	var i = r.length,
		_ = i,
		E = !o;
	if (null == e) return !_;
	for (e = Object(e); i--; ) {
		var s = r[i];
		if (E && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
	}
	for (; ++i < _; ) {
		var c = (s = r[i])[0],
			I = e[c],
			u = s[1];
		if (E && s[2]) {
			if (void 0 === I && !(c in e)) return !1;
		} else {
			var l = new n();
			if (o) var R = o(I, u, c, e, t, l);
			if (!(void 0 === R ? a(u, I, 3, o, l) : R)) return !1;
		}
	}
	return !0;
};
