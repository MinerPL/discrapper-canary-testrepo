i.d(n, {
	Z: function () {
		return o;
	}
});
var t = i(735250);
i(470079);
var a = i(481060),
	r = i(995187);
function o(e) {
	let { activeSection: n, setSection: i, sections: o } = e;
	return (0, t.jsx)(a.TabBar, {
		selectedItem: n,
		type: 'top',
		onItemSelect: i,
		className: r.tabBar,
		children: o.map((e) => {
			let { name: n, text: i, Icon: o } = e;
			return (0, t.jsxs)(
				a.TabBar.Item,
				{
					id: n,
					className: r.tabBarItem,
					'aria-label': i,
					children: [
						(0, t.jsx)(o, {
							className: r.icon,
							color: 'currentColor'
						}),
						i
					]
				},
				n
			);
		})
	});
}
