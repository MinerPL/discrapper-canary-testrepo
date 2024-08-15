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
	spacing: 8,
	minSpacing: 4,
	maxSpacing: 64,
	setSpacing: (t) => {
		e({ spacing: Math.min(Math.max(t, 4), 64) });
	},
	showHorizontalLines: !0
}));
function u() {
	let e = (0, a.e7)([s.default], () => s.default.layoutDebuggingEnabled),
		{ spacing: t, showHorizontalLines: n } = l();
	return e
		? (0, r.jsx)('div', {
				className: o.container,
				children: (0, r.jsx)('div', {
					className: o.gridOverlay,
					'data-horizontal': n,
					style: { '--custom-grid-spacing': ''.concat(t, 'px') }
				})
			})
		: null;
}
