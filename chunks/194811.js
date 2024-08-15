n.d(t, {
	Z: function () {
		return c;
	}
});
var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(481060),
	o = n(652853),
	l = n(228168),
	u = n(139665);
function c(e) {
	let { text: t, tags: n, platform: i } = e,
		{ profileType: c } = (0, o.z)();
	return null == t || '' === t
		? (0, r.jsx)('div', {
				className: a()(u.headerTags, u.absolute, { [u.panel]: c === l.y0.PANEL }),
				children: n
			})
		: (0, r.jsxs)('header', {
				className: u.header,
				children: [
					(0, r.jsxs)(s.Heading, {
						className: u.headerText,
						variant: c === l.y0.PANEL ? 'text-xs/semibold' : 'text-xs/medium',
						color: 'header-primary',
						children: [
							t,
							null != i &&
								(0, r.jsx)('div', {
									className: u.platformIcon,
									style: {
										maskImage: 'url('.concat(i.icon.whiteSVG, ')'),
										WebkitMaskImage: 'url('.concat(i.icon.whiteSVG, ')')
									}
								})
						]
					}),
					(0, r.jsx)('div', {
						className: u.headerTags,
						children: n
					})
				]
			});
}
