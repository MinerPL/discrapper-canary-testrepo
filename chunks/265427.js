var r = n(606862),
	i = n(169742),
	a = n(160171),
	s = n(192853),
	o = n(49662),
	l = s('Object.prototype.toString'),
	u = n(703825)(),
	c = 'undefined' == typeof globalThis ? n.g : globalThis,
	d = i(),
	_ = s('String.prototype.slice'),
	E = Object.getPrototypeOf,
	f =
		s('Array.prototype.indexOf', !0) ||
		function (e, t) {
			for (var n = 0; n < e.length; n += 1) if (e[n] === t) return n;
			return -1;
		},
	h = { __proto__: null };
u && o && E
	? r(d, function (e) {
			var t = new c[e]();
			if (Symbol.toStringTag in t) {
				var n = E(t),
					r = o(n, Symbol.toStringTag);
				!r && (r = o(E(n), Symbol.toStringTag)), (h['$' + e] = a(r.get));
			}
		})
	: r(d, function (e) {
			var t = new c[e](),
				n = t.slice || t.set;
			n && (h['$' + e] = a(n));
		});
var p = function (e) {
		var t = !1;
		return (
			r(h, function (n, r) {
				if (!t)
					try {
						'$' + n(e) === r && (t = _(r, 1));
					} catch (e) {}
			}),
			t
		);
	},
	I = function (e) {
		var t = !1;
		return (
			r(h, function (n, r) {
				if (!t)
					try {
						n(e), (t = _(r, 1));
					} catch (e) {}
			}),
			t
		);
	};
e.exports = function (e) {
	if (!e || 'object' != typeof e) return !1;
	if (!u) {
		var t = _(l(e), 8, -1);
		return f(d, t) > -1 ? t : 'Object' === t && I(e);
	}
	return o ? p(e) : null;
};
