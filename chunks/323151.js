var r = n(687249),
	i = n(718332),
	a = n(995542),
	s = n(92141),
	o = n(53919),
	l = n(290677),
	u = n(551023),
	c = n(454745),
	d = '[object Arguments]',
	_ = '[object Array]',
	E = '[object Object]',
	f = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, h, p, I) {
	var m = l(e),
		T = l(t),
		g = m ? _ : o(e),
		S = T ? _ : o(t);
	(g = g == d ? E : g), (S = S == d ? E : S);
	var A = g == E,
		N = S == E,
		v = g == S;
	if (v && u(e)) {
		if (!u(t)) return !1;
		(m = !0), (A = !1);
	}
	if (v && !A) return I || (I = new r()), m || c(e) ? i(e, t, n, h, p, I) : a(e, t, g, n, h, p, I);
	if (!(1 & n)) {
		var O = A && f.call(e, '__wrapped__'),
			R = N && f.call(t, '__wrapped__');
		if (O || R) {
			var C = O ? e.value() : e,
				y = R ? t.value() : t;
			return I || (I = new r()), p(C, y, n, h, I);
		}
	}
	return !!v && (I || (I = new r()), s(e, t, n, h, p, I));
};
