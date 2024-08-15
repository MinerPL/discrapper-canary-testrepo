n.d(t, {
	Z: function () {
		return c;
	}
});
var i = n(735250);
n(470079);
var a = n(120356),
	s = n.n(a),
	r = n(481060),
	l = n(17845),
	o = n(89866);
function c(e) {
	let { title: t, description: n, onScroll: a, button: c, children: d, bannerContainerClassName: u, bannerBackground: _ } = e;
	return (0, i.jsxs)(r.AdvancedScroller, {
		onScroll: a,
		className: s()(o.container, o.background),
		children: [
			(0, i.jsx)(l.Z, {
				title: t,
				description: n,
				button: c,
				className: u,
				background: _
			}),
			(0, i.jsx)('section', {
				className: s()(o.contentContainer, o.gradient),
				children: (0, i.jsx)('div', {
					className: s()(o.content),
					children: d
				})
			})
		]
	});
}
