var r = n(421896),
	i = n(318670),
	a = n(193079),
	s = n(97106),
	o = n(257109),
	l = n(175056),
	u = n(532455),
	c = n(676067),
	d = '[object Arguments]',
	_ = '[object Array]',
	E = '[object Object]',
	f = Object.prototype.hasOwnProperty;
t.Z = function (e, t, n, h, p, I) {
	var m = (0, l.Z)(e),
		T = (0, l.Z)(t),
		g = m ? _ : (0, o.Z)(e),
		S = T ? _ : (0, o.Z)(t);
	(g = g == d ? E : g), (S = S == d ? E : S);
	var A = g == E,
		N = S == E,
		v = g == S;
	if (v && (0, u.Z)(e)) {
		if (!(0, u.Z)(t)) return !1;
		(m = !0), (A = !1);
	}
	if (v && !A)
		return I || (I = new r.Z()), m || (0, c.Z)(e) ? (0, i.Z)(e, t, n, h, p, I) : (0, a.Z)(e, t, g, n, h, p, I);
	if (!(1 & n)) {
		var O = A && f.call(e, '__wrapped__'),
			R = N && f.call(t, '__wrapped__');
		if (O || R) {
			var C = O ? e.value() : e,
				y = R ? t.value() : t;
			return I || (I = new r.Z()), p(C, y, n, h, I);
		}
	}
	return !!v && (I || (I = new r.Z()), (0, s.Z)(e, t, n, h, p, I));
};
