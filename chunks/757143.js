var e = r(197187),
	i = r(926515),
	u = r(581031),
	o = r(527221),
	a = r(936940),
	c = r(24033),
	s = r(354848),
	f = r(35179),
	l = r(959318),
	h = r(552028),
	v = r(714050),
	p = r(676125),
	d = r(344597),
	x = r(995739),
	g = r(115726),
	I = r(651673),
	y = r(641236)('replace'),
	E = Math.max,
	b = Math.min,
	R = u([].concat),
	$ = u([].push),
	A = u(''.indexOf),
	k = u(''.slice),
	m = '$0' === 'a'.replace(/./, '$0'),
	C = !!/./[y] && '' === /./[y]('a', '$0');
o(
	'replace',
	function (n, t, r) {
		var u = C ? '$' : '$0';
		return [
			function (n, r) {
				var e = p(this),
					u = f(n) ? void 0 : x(n, y);
				return u ? i(u, n, e, r) : i(t, v(e), n, r);
			},
			function (n, i) {
				var o = c(this),
					a = v(n);
				if ('string' == typeof i && -1 === A(i, u) && -1 === A(i, '$<')) {
					var f = r(t, o, a, i);
					if (f.done) return f.value;
				}
				var p = s(i);
				!p && (i = v(i));
				var x = o.global;
				x && ((T = o.unicode), (o.lastIndex = 0));
				for (var y = []; null !== (O = I(o, a)); ) {
					if (($(y, O), !x)) break;
					'' === v(O[0]) && (o.lastIndex = d(a, h(o.lastIndex), T));
				}
				for (var m = '', C = 0, S = 0; S < y.length; S++) {
					for (var w, T, O, _, U = v((O = y[S])[0]), M = E(b(l(O.index), a.length), 0), K = [], N = 1; N < O.length; N++) {
						$(K, void 0 === (w = O[N]) ? w : String(w));
					}
					var P = O.groups;
					if (p) {
						var B = R([U], K, M, a);
						void 0 !== P && $(B, P), (_ = v(e(i, void 0, B)));
					} else _ = g(U, a, M, K, P, i);
					M >= C && ((m += k(a, C, M) + _), (C = M + U.length));
				}
				return m + k(a, C);
			}
		];
	},
	!!a(function () {
		var n = /./;
		return (
			(n.exec = function () {
				var n = [];
				return (n.groups = { a: '7' }), n;
			}),
			'7' !== ''.replace(n, '$<a>')
		);
	}) ||
		!m ||
		C
);
