n.d(t, {
	K: function () {
		return u;
	},
	i: function () {
		return l;
	}
});
var r = n(735250),
	i = n(652874),
	a = n(442837),
	s = n(857192),
	o = n(511023);
let l = (0, i.Z)((e) => ({
	horizontalSpacing: 8,
	verticalSpacing: 8,
	maxHorizontalSpacing: 64,
	maxVerticalSpacing: 64,
	setHorizontalSpacing: (t) => {
		e({ horizontalSpacing: Math.round(Math.min(Math.max(t, 0), 64)) });
	},
	setVerticalSpacing: (t) => {
		e({ verticalSpacing: Math.round(Math.min(Math.max(t, 0), 64)) });
	}
}));
function u() {
	let e = (0, a.e7)([s.default], () => s.default.layoutDebuggingEnabled),
		{ horizontalSpacing: t, verticalSpacing: n } = l();
	return e
		? (0, r.jsx)('div', {
				className: o.container,
				children: (0, r.jsx)('div', {
					className: o.gridOverlay,
					'data-horizontal': t > 0,
					'data-vertical': n > 0,
					style: {
						'--custom-grid-horizontal-spacing': ''.concat(t, 'px'),
						'--custom-grid-vertical-spacing': ''.concat(n, 'px')
					}
				})
			})
		: null;
}
