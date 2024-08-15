s.d(t, {
	Z: function () {
		return i;
	}
});
var a = s(735250);
s(470079);
var n = s(481060),
	l = s(104910),
	o = s(216019);
function i(e) {
	let { icon: t, message: s, onClick: i, autoFocus: r } = e;
	return (0, a.jsxs)('button', {
		className: l.container,
		onClick: i,
		autoFocus: r,
		children: [
			(0, a.jsx)('img', {
				className: l.icon,
				alt: '',
				src: t
			}),
			(0, a.jsx)(n.Text, {
				className: l.text,
				variant: 'text-md/bold',
				children: s
			}),
			(0, a.jsx)('img', {
				className: l.arrow,
				alt: '',
				src: o
			})
		]
	});
}
