var e = r(581031),
	o = r(936940),
	i = r(354848),
	u = r(740362),
	c = r(325008),
	f = r(539459).CONFIGURABLE,
	a = r(943329),
	s = r(644659),
	p = s.enforce,
	l = s.get,
	v = String,
	b = Object.defineProperty,
	y = e(''.slice),
	g = e(''.replace),
	h = e([].join),
	m =
		c &&
		!o(function () {
			return 8 !== b(function () {}, 'length', { value: 8 }).length;
		}),
	x = String(String).split('String'),
	d = (t.exports = function (t, n, r) {
		'Symbol(' === y(v(n), 0, 7) && (n = '[' + g(v(n), /^Symbol\(([^)]*)\)/, '$1') + ']'),
			r && r.getter && (n = 'get ' + n),
			r && r.setter && (n = 'set ' + n),
			(!u(t, 'name') || (f && t.name !== n)) &&
				(c
					? b(t, 'name', {
							value: n,
							configurable: !0
						})
					: (t.name = n)),
			m && r && u(r, 'arity') && t.length !== r.arity && b(t, 'length', { value: r.arity });
		try {
			r && u(r, 'constructor') && r.constructor ? c && b(t, 'prototype', { writable: !1 }) : t.prototype && (t.prototype = void 0);
		} catch (t) {}
		var e = p(t);
		return !u(e, 'source') && (e.source = h(x, 'string' == typeof n ? n : '')), t;
	});
Function.prototype.toString = d(function () {
	return (i(this) && l(this).source) || a(this);
}, 'toString');
