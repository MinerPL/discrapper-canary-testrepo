var r = n(444675),
	i = n(607974),
	a = n(64750);
if (n(322499)() || n(882171)()) {
	var s = Symbol.iterator;
	e.exports = function (e) {
		return null != e && void 0 !== e[s] ? e[s]() : i(e) ? Array.prototype[s].call(e) : void 0;
	};
} else {
	var o = n(189612),
		l = n(163494),
		u = n(690244),
		c = u('%Map%', !0),
		d = u('%Set%', !0),
		_ = n(192853),
		E = _('Array.prototype.push'),
		f = _('String.prototype.charCodeAt'),
		h = _('String.prototype.slice'),
		p = function (e, t) {
			if (t + 1 >= e.length) return t + 1;
			var n = f(e, t);
			if (n < 55296 || n > 56319) return t + 1;
			var r = f(e, t + 1);
			return r < 56320 || r > 57343 ? t + 1 : t + 2;
		},
		m = function (e) {
			var t = 0;
			return {
				next: function () {
					var n,
						r = t >= e.length;
					return (
						!r && ((n = e[t]), (t += 1)),
						{
							done: r,
							value: n
						}
					);
				}
			};
		},
		I = function (e, t) {
			if (o(e) || i(e)) return m(e);
			if (l(e)) {
				var n = 0;
				return {
					next: function () {
						var t = p(e, n),
							r = h(e, n, t);
						return (
							(n = t),
							{
								done: t > e.length,
								value: r
							}
						);
					}
				};
			}
			if (t && void 0 !== e['_es6-shim iterator_']) return e['_es6-shim iterator_']();
		};
	if (c || d) {
		var T = n(403006),
			g = n(72859),
			S = _('Map.prototype.forEach', !0),
			A = _('Set.prototype.forEach', !0);
		if (void 0 === r || !r.versions || !r.versions.node) {
			var N = _('Map.prototype.iterator', !0),
				v = _('Set.prototype.iterator', !0);
		}
		var O = _('Map.prototype.@@iterator', !0) || _('Map.prototype._es6-shim iterator_', !0),
			R = _('Set.prototype.@@iterator', !0) || _('Set.prototype._es6-shim iterator_', !0),
			C = function (e) {
				if (T(e)) {
					if (N) return a(N(e));
					if (O) return O(e);
					if (S) {
						var t = [];
						return (
							S(e, function (e, n) {
								E(t, [n, e]);
							}),
							m(t)
						);
					}
				}
				if (g(e)) {
					if (v) return a(v(e));
					if (R) return R(e);
					if (A) {
						var n = [];
						return (
							A(e, function (e) {
								E(n, e);
							}),
							m(n)
						);
					}
				}
			};
		e.exports = function (e) {
			return C(e) || I(e);
		};
	} else
		e.exports = function (e) {
			if (null != e) return I(e, !0);
		};
}
