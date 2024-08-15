n.d(t, {
	Z: function () {
		return c;
	}
});
var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(481060),
	o = n(689079),
	l = n(924178);
let u = (e) => {
	switch (e.id) {
		case o.bi.BUILT_IN:
			return s.SlashBoxIcon;
		case o.bi.FRECENCY:
			return s.ClockIcon;
		default:
			return;
	}
};
function c(e) {
	let { section: t, className: n, width: i, height: s, padding: o, isSelected: c, selectable: d = !1, ..._ } = e,
		E = u(t);
	return (0, r.jsx)('div', {
		className: a()(l.wrapper, n, {
			[l.selectable]: d,
			[l.selected]: d && c
		}),
		style: {
			width: i,
			height: s,
			padding: null != o ? o : 0
		},
		children:
			null != E
				? (0, r.jsx)(E, {
						className: l.icon,
						color: 'currentColor',
						size: 'custom',
						width: i,
						height: s,
						..._
					})
				: null
	});
}
