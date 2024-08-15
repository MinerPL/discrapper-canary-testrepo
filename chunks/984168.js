t.d(n, {
	Z: function () {
		return d;
	}
});
var i = t(735250);
t(470079);
var a = t(120356),
	l = t.n(a),
	o = t(481060),
	r = t(314734),
	s = t(689938),
	c = t(449784);
function d(e) {
	let { sortOrder: n, onSortOptionClick: t, closePopout: a } = e,
		d = (e) => {
			t(e), a();
		};
	return (0, i.jsx)('div', {
		className: l()(r.Jh, c.container),
		children: (0, i.jsx)(o.Menu, {
			navId: 'command-list-sort',
			'aria-label': s.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_A11Y_LABEL,
			hideScroller: !0,
			onClose: a,
			onSelect: a,
			children: (0, i.jsxs)(o.MenuGroup, {
				label: s.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_HEADER,
				children: [
					(0, i.jsx)(o.MenuRadioItem, {
						id: 'sort-by-popular',
						group: 'sort-by',
						label: s.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_POPULAR,
						action: () => d(r.bS.POPULAR),
						checked: n === r.bS.POPULAR
					}),
					(0, i.jsx)(o.MenuRadioItem, {
						id: 'sort-by-alphabetical',
						group: 'sort-by',
						label: s.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_ALPHABETICAL,
						action: () => d(r.bS.ALPHABETICAL),
						checked: n === r.bS.ALPHABETICAL
					})
				]
			})
		})
	});
}
