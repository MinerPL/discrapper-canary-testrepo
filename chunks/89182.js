n.d(t, {
	Z: function () {
		return c;
	}
});
var i = n(735250),
	a = n(120356),
	s = n.n(a),
	r = n(481060),
	l = n(986932);
function o(e) {
	let { items: t, onClose: n, onSelect: a, selected: s, ...o } = e;
	return (0, i.jsx)(r.Menu, {
		className: l.menu,
		navId: 'global-discovery-search-filter-options',
		'aria-label': o['aria-label'],
		hideScroller: !0,
		onClose: n,
		onSelect: n,
		children: (0, i.jsx)(
			r.MenuGroup,
			{
				children: t.map((e) => {
					let { id: t, label: n } = e;
					return (0, i.jsx)(
						r.MenuItem,
						{
							id: t,
							label: n,
							icon: t === s ? r.CircleCheckIcon : void 0,
							action: () => a(t)
						},
						t
					);
				})
			},
			'overflow-tabs'
		)
	});
}
function c(e) {
	let { className: t, items: n, title: a, onSelect: c, selected: d, ...u } = e;
	return (0, i.jsx)(r.Popout, {
		renderPopout: (e) => {
			let { closePopout: t } = e;
			return (0, i.jsx)(o, {
				selected: d,
				onClose: t,
				items: n,
				onSelect: c,
				'aria-label': u['aria-label']
			});
		},
		position: 'bottom',
		align: 'left',
		children: (e, n) => {
			let { isShown: o } = n;
			return (0, i.jsxs)('div', {
				...e,
				className: s()(l.filter, t),
				children: [
					(0, i.jsx)(r.Text, {
						variant: 'text-sm/medium',
						color: 'interactive-normal',
						children: a
					}),
					o
						? (0, i.jsx)(r.ChevronSmallUpIcon, {
								size: 'xs',
								color: r.tokens.colors.INTERACTIVE_NORMAL
							})
						: (0, i.jsx)(r.ChevronSmallDownIcon, {
								size: 'xs',
								color: r.tokens.colors.INTERACTIVE_NORMAL
							})
				]
			});
		}
	});
}
