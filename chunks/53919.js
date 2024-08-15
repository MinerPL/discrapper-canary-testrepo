var r = n(762378),
	i = n(481062),
	a = n(34775),
	s = n(79568),
	o = n(221286),
	l = n(903425),
	u = n(785775),
	c = '[object Map]',
	d = '[object Promise]',
	_ = '[object Set]',
	E = '[object WeakMap]',
	f = '[object DataView]',
	h = u(r),
	p = u(i),
	m = u(a),
	I = u(s),
	T = u(o),
	g = l;
((r && g(new r(new ArrayBuffer(1))) != f) || (i && g(new i()) != c) || (a && g(a.resolve()) != d) || (s && g(new s()) != _) || (o && g(new o()) != E)) &&
	(g = function (e) {
		var t = l(e),
			n = '[object Object]' == t ? e.constructor : void 0,
			r = n ? u(n) : '';
		if (r)
			switch (r) {
				case h:
					return f;
				case p:
					return c;
				case m:
					return d;
				case I:
					return _;
				case T:
					return E;
			}
		return t;
	}),
	(e.exports = g);
