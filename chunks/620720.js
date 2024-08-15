n.d(t, {
	Z: function () {
		return function e(t, n) {
			void 0 === n && (n = []);
			var o,
				l = (0, r.Z)(t),
				u = l === (null == (o = t.ownerDocument) ? void 0 : o.body),
				c = (0, a.Z)(l),
				d = u ? [c].concat(c.visualViewport || [], (0, s.Z)(l) ? l : []) : l,
				_ = n.concat(d);
			return u ? _ : _.concat(e((0, i.Z)(d)));
		};
	}
});
var r = n(310680),
	i = n(660027),
	a = n(49691),
	s = n(538018);
