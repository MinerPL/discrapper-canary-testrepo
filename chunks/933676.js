var e = n(581031),
	o = n(936940),
	i = n(354848),
	u = n(974971),
	f = n(545576),
	a = n(943329),
	c = function () {},
	s = [],
	y = f('Reflect', 'construct'),
	p = /^\s*(?:class|function)\b/,
	h = e(p.exec),
	v = !p.exec(c),
	d = function (t) {
		if (!i(t)) return !1;
		try {
			return y(c, s, t), !0;
		} catch (t) {
			return !1;
		}
	},
	g = function (t) {
		if (!i(t)) return !1;
		switch (u(t)) {
			case 'AsyncFunction':
			case 'GeneratorFunction':
			case 'AsyncGeneratorFunction':
				return !1;
		}
		try {
			return v || !!h(p, a(t));
		} catch (t) {
			return !0;
		}
	};
(g.sham = !0),
	(t.exports =
		!y ||
		o(function () {
			var t;
			return (
				d(d.call) ||
				!d(Object) ||
				!d(function () {
					t = !0;
				}) ||
				t
			);
		})
			? g
			: d);
