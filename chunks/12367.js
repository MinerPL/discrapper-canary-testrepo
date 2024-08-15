var e = n(566885),
	o = n(926515),
	i = n(772425),
	u = n(339718),
	f = n(49693),
	a = n(981971),
	c = n(11697),
	s = n(908355),
	y = n(536524),
	p = n(192291).aTypedArrayConstructor,
	h = n(165915);
t.exports = function (t) {
	var r,
		n,
		v,
		d,
		g,
		l,
		A,
		w,
		x = i(this),
		b = u(t),
		T = arguments.length,
		E = T > 1 ? arguments[1] : void 0,
		I = void 0 !== E,
		R = c(b);
	if (R && !s(R)) for (w = (A = a(b, R)).next, b = []; !(l = o(w, A)).done; ) b.push(l.value);
	for (I && T > 2 && (E = e(E, arguments[2])), n = f(b), d = y((v = new (p(x))(n))), r = 0; n > r; r++)
		(g = I ? E(b[r], r) : b[r]), (v[r] = d ? h(g) : +g);
	return v;
};
