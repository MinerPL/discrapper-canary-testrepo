t.d(n, {
	Z: function () {
		return d;
	}
});
var i = t(735250),
	a = t(470079),
	s = t(120356),
	l = t.n(s),
	r = t(481060),
	o = t(169991);
function d(e) {
	let { children: n, icon: t, title: s } = e;
	return (0, i.jsxs)('header', {
		className: o.header,
		children: [
			(0, i.jsxs)('div', {
				className: o.name,
				children: [
					a.cloneElement(t, {
						className: l()(t.props.className, o.icon),
						height: 24,
						width: 24
					}),
					(0, i.jsx)(r.Heading, {
						variant: 'heading-md/semibold',
						className: o.title,
						children: s
					})
				]
			}),
			n
		]
	});
}
