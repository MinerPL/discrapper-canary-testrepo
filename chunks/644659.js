var e,
	o,
	i,
	u = r(197047),
	c = r(161581),
	f = r(622281),
	a = r(251069),
	s = r(740362),
	p = r(801127),
	l = r(883539),
	v = r(624906),
	b = 'Object already initialized',
	y = c.TypeError,
	g = c.WeakMap;
if (u || p.state) {
	var h = p.state || (p.state = new g());
	(h.get = h.get),
		(h.has = h.has),
		(h.set = h.set),
		(e = function (t, n) {
			if (h.has(t)) throw y(b);
			return (n.facade = t), h.set(t, n), n;
		}),
		(o = function (t) {
			return h.get(t) || {};
		}),
		(i = function (t) {
			return h.has(t);
		});
} else {
	var m = l('state');
	(v[m] = !0),
		(e = function (t, n) {
			if (s(t, m)) throw y(b);
			return (n.facade = t), a(t, m, n), n;
		}),
		(o = function (t) {
			return s(t, m) ? t[m] : {};
		}),
		(i = function (t) {
			return s(t, m);
		});
}
t.exports = {
	set: e,
	get: o,
	has: i,
	enforce: function (t) {
		return i(t) ? o(t) : e(t, {});
	},
	getterFor: function (t) {
		return function (n) {
			var r;
			if (!f(n) || (r = o(n)).type !== t) throw y('Incompatible receiver, ' + t + ' required');
			return r;
		};
	}
};
