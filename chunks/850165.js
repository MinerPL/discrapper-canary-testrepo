n.d(t, {
	Z: function () {
		return a;
	}
});
var s = n(735250);
n(470079);
var o = n(481060),
	r = n(917475);
function a(e) {
	let { heroImageSrc: t, heroImageAlt: n, children: a, header: i, description: c } = e;
	return (0, s.jsxs)(s.Fragment, {
		children: [
			(0, s.jsx)('img', {
				src: t,
				alt: n,
				className: r.heroImage
			}),
			(0, s.jsxs)(o.ModalContent, {
				className: r.body,
				children: [
					(0, s.jsxs)('div', {
						className: r.textContainer,
						children: [
							(0, s.jsx)(o.Heading, {
								variant: 'heading-xl/semibold',
								color: 'header-primary',
								children: i
							}),
							null != c &&
								(0, s.jsx)(o.Text, {
									variant: 'text-md/medium',
									color: 'header-secondary',
									className: r.description,
									children: c
								})
						]
					}),
					a
				]
			})
		]
	});
}
