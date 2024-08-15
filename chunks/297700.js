n.d(t, {
	Z: function () {
		return c;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(481060),
	l = n(189798),
	u = n(658640);
function c(e) {
	let { children: t, size: n = 16, className: a, flowerStarClassName: c, ...d } = e,
		_ = i.Children.only(t),
		E = (0, o.useRedesignIconContext)().enabled && !e.allowFullSizedIcon;
	return (0, r.jsxs)('div', {
		className: s()(u.flowerStarContainer, a),
		style: {
			width: n,
			height: n
		},
		children: [
			(0, r.jsx)(l.Z, {
				...d,
				className: s()(c, u.flowerStar)
			}),
			(0, r.jsx)('div', {
				className: s()(u.childContainer, { [u.redesignIconChildContainer]: E }),
				children: _
			})
		]
	});
}
