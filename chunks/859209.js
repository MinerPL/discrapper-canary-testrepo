var e = r(354848),
	o = r(97131),
	i = r(230364),
	u = r(492424);
t.exports = function (t, n, r, c) {
	!c && (c = {});
	var f = c.enumerable,
		a = void 0 !== c.name ? c.name : n;
	if ((e(r) && i(r, a, c), c.global)) f ? (t[n] = r) : u(n, r);
	else {
		try {
			c.unsafe ? t[n] && (f = !0) : delete t[n];
		} catch (t) {}
		f
			? (t[n] = r)
			: o.f(t, n, {
					value: r,
					enumerable: !1,
					configurable: !c.nonConfigurable,
					writable: !c.nonWritable
				});
	}
	return t;
};
