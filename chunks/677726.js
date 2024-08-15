t.d(n, {
	Z: function () {
		return a;
	}
});
var r = t(735250);
t(470079);
var i = t(120356),
	o = t.n(i),
	l = t(481060),
	c = t(471731),
	s = t(600636);
function a(e) {
	let { title: n, className: t, ref: i } = e;
	return (0, r.jsxs)('div', {
		className: o()(s.header, t),
		ref: i,
		children: [
			(0, r.jsx)(c.Z, { className: s.logo }),
			(0, r.jsx)(l.HeadingLevel, {
				forceLevel: 1,
				children: (0, r.jsx)(l.Heading, {
					className: s.title,
					variant: 'heading-md/semibold',
					color: 'header-secondary',
					children: n
				})
			})
		]
	});
}
