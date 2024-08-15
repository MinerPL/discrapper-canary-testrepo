t.d(e, {
	u: function () {
		return a;
	}
});
var i = t(735250);
t(470079);
var l = t(777207),
	r = t(541822),
	o = t(330711),
	s = t(689498);
function a(n) {
	let { benefits: e, description: t, imgSrc: a, title: c, tag: d, FallbackIcon: u } = n,
		S = null != a ? { '--custom-background-url': 'url('.concat(a.toString(), ')') } : void 0,
		m = null != t && '' !== t,
		I = m || null != e;
	return (0, i.jsxs)('div', {
		className: s.container,
		children: [
			(0, i.jsxs)('div', {
				className: s.header,
				children: [
					(0, i.jsx)('div', {
						className: s.headerBackground,
						style: S
					}),
					(0, i.jsx)('div', {
						className: s.headerTop,
						children: (0, i.jsx)('div', { children: d })
					}),
					(0, i.jsx)('div', {
						className: s.headerImage,
						children:
							null != a
								? (0, i.jsx)('img', {
										src: a.toString(),
										alt: ''
									})
								: (0, i.jsx)(u, {
										size: 'custom',
										color: 'var(--text-muted)',
										height: 96,
										width: 96
									})
					})
				]
			}),
			(0, i.jsxs)(r.Z, {
				className: s.scroll,
				children: [
					(0, i.jsx)('br', {}),
					(0, i.jsxs)('div', {
						className: s.scrollContent,
						children: [
							(0, i.jsx)(l.x, {
								color: 'header-primary',
								tag: 'div',
								variant: 'heading-xl/semibold',
								children: c
							}),
							I &&
								(0, i.jsxs)('div', {
									className: s.details,
									children: [
										(0, i.jsx)(l.x, {
											color: 'header-primary',
											tag: 'div',
											variant: 'heading-lg/semibold',
											children: o.Z.Messages.Storefront.PRODUCT_DETAILS
										}),
										m &&
											(0, i.jsx)(l.x, {
												color: 'text-muted',
												variant: 'text-md/normal',
												className: s.description,
												children: t
											}),
										null != e &&
											(0, i.jsxs)('div', {
												className: s.benefits,
												children: [
													(0, i.jsx)(l.x, {
														color: 'header-secondary',
														variant: 'eyebrow',
														children: o.Z.Messages.Storefront.BENEFITS_TITLE
													}),
													e
												]
											})
									]
								})
						]
					})
				]
			})
		]
	});
}
