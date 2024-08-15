n.d(t, {
	Z: function () {
		return r;
	}
});
var i = n(735250);
n(470079);
var a = n(481060),
	s = n(689938);
function r(e) {
	let { tabs: t, selectedTab: n, onTabSelect: r, onClose: l } = e;
	return (0, i.jsx)(a.Menu, {
		navId: 'global-discovery-tabs-overflow-menu',
		'aria-label': s.Z.Messages.GLOBAL_DISCOVERY_MORE_MENU_A11Y,
		hideScroller: !0,
		onClose: l,
		onSelect: l,
		children: (0, i.jsx)(
			a.MenuGroup,
			{
				children: t.map((e) => {
					let { id: t, label: s } = e;
					return (0, i.jsx)(
						a.MenuItem,
						{
							id: t,
							label: s,
							icon: t === n ? a.CircleCheckIcon : void 0,
							action: () => r(t)
						},
						t
					);
				})
			},
			'overflow-tabs'
		)
	});
}
