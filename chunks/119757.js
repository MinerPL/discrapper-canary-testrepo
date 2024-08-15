n.d(t, {
	Z: function () {
		return s;
	}
});
var r = n(735250);
n(470079);
var i = n(481060),
	a = n(212395);
let s = (e) => {
	let { title: t, subtitle: n, icon: s } = e;
	return (0, r.jsxs)('div', {
		className: a.wrapper,
		children: [
			null != s &&
				(0, r.jsx)(s, {
					size: 'xs',
					color: 'currentColor',
					className: a.icon
				}),
			(0, r.jsx)(i.Text, {
				variant: 'text-md/normal',
				className: a.title,
				children: t
			}),
			null != n && '' !== n
				? (0, r.jsx)(i.Text, {
						variant: 'text-xs/semibold',
						className: a.subtitle,
						children: n
					})
				: null
		]
	});
};
