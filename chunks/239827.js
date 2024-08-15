var n = t(735250),
	a = t(470079),
	i = t(120356),
	r = t.n(i),
	o = t(481060),
	l = t(689938),
	c = t(927256);
s.Z = a.forwardRef(function (e, s) {
	let { currentPageIndex: t, numPages: a, onChangePage: i, children: d, className: _, showPageCount: E = !0, ...u } = e,
		I = t <= 0,
		T = t >= a - 1;
	return (0, n.jsxs)('div', {
		className: r()(c.__invalid_paginator, _),
		ref: s,
		...u,
		children: [
			d,
			(0, n.jsxs)('div', {
				className: c.pageActions,
				children: [
					(0, n.jsx)(o.Clickable, {
						className: r()(c.pageButtonPrev, { [c.disabled]: I }),
						tabIndex: I ? -1 : 0,
						onClick: I ? void 0 : () => i(t - 1),
						children: (0, n.jsx)(o.ChevronSmallLeftIcon, {
							size: 'md',
							color: 'currentColor',
							className: c.pageButtonIcon,
							'aria-label': l.Z.Messages.PAGINATION_PREVIOUS
						})
					}),
					E
						? (0, n.jsx)('div', {
								className: c.pageIndicator,
								children: l.Z.Messages.PAGINATOR_OF_PAGES.format({
									currentPage: t + 1,
									numPages: a
								})
							})
						: (0, n.jsx)('div', {
								className: c.pageIndicator,
								children: l.Z.Messages.PAGINATOR_CURRENT_PAGE.format({ currentPage: t + 1 })
							}),
					(0, n.jsx)(o.Clickable, {
						className: r()(c.pageButtonNext, { [c.disabled]: T }),
						tabIndex: T ? -1 : 0,
						onClick: T ? void 0 : () => i(t + 1),
						children: (0, n.jsx)(o.ChevronSmallRightIcon, {
							size: 'md',
							color: 'currentColor',
							className: c.pageButtonIcon,
							'aria-label': l.Z.Messages.PAGINATION_NEXT
						})
					})
				]
			})
		]
	});
});
