n.d(t, {
	Z: function () {
		return o;
	}
});
var s = n(735250),
	a = n(470079),
	l = n(120356),
	r = n.n(l),
	i = n(725436),
	u = n(958948),
	c = n(910212);
function o(e) {
	let { description: t, className: n, guildId: l, truncate: o = !0 } = e,
		E = a.useMemo(
			() =>
				(0, i.m)(t, !0, {
					guildId: l,
					allowLinks: !0,
					allowHeading: !0,
					allowList: !0
				}),
			[t, l]
		);
	return (0, s.jsx)('div', {
		className: r()(u.descriptionText, n, c.markup, { [u.truncate]: o }),
		children: E
	});
}
