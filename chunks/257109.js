var r = n(467360),
	i = n(483266),
	a = n(862195),
	s = n(24002),
	o = n(178683),
	l = n(176338),
	u = n(526389),
	c = '[object Map]',
	d = '[object Promise]',
	_ = '[object Set]',
	E = '[object WeakMap]',
	f = '[object DataView]',
	h = (0, u.Z)(r.Z),
	p = (0, u.Z)(i.Z),
	I = (0, u.Z)(a.Z),
	m = (0, u.Z)(s.Z),
	T = (0, u.Z)(o.Z),
	g = l.Z;
((r.Z && g(new r.Z(new ArrayBuffer(1))) != f) ||
	(i.Z && g(new i.Z()) != c) ||
	(a.Z && g(a.Z.resolve()) != d) ||
	(s.Z && g(new s.Z()) != _) ||
	(o.Z && g(new o.Z()) != E)) &&
	(g = function (e) {
		var t = (0, l.Z)(e),
			n = '[object Object]' == t ? e.constructor : void 0,
			r = n ? (0, u.Z)(n) : '';
		if (r)
			switch (r) {
				case h:
					return f;
				case p:
					return c;
				case I:
					return d;
				case m:
					return _;
				case T:
					return E;
			}
		return t;
	}),
	(t.Z = g);
