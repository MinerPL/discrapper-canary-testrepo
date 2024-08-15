var n = r(147018),
	i = r(345374),
	o = r(886960),
	a = r(49693),
	s = r(980855),
	u = r(299623),
	c = r(959318),
	l = Array,
	h = Math.max,
	f = Math.min;
n(
	{
		target: 'Array',
		proto: !0
	},
	{
		toSpliced: function (t, e) {
			var r,
				n,
				i,
				p,
				m = u(this),
				d = a(m),
				v = s(t, d),
				g = arguments.length,
				y = 0;
			for (
				0 === g ? (r = n = 0) : 1 === g ? ((r = 0), (n = d - v)) : ((r = g - 2), (n = f(h(c(e), 0), d - v))),
					p = l((i = o(d + r - n)));
				y < v;
				y++
			)
				p[y] = m[y];
			for (; y < v + r; y++) p[y] = arguments[y - v + 2];
			for (; y < i; y++) p[y] = m[y + n - r];
			return p;
		}
	}
),
	i('toSpliced');
