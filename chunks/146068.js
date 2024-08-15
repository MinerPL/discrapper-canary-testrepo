t.d(n, {
	Z: function () {
		return f;
	}
});
var a = t(735250);
t(470079);
var r = t(249849),
	i = t(907561),
	s = t(689938),
	o = t(585025);
let l = ['#0fa3dd', '#a7e4e4', '#a2ccdd'],
	c = ['#0b3215', '#a6b51a', '#35748a', '#65a88f', '#621c12', '#f96748', '#ffbbbb'],
	d = [0.25, 0.9, 0.9],
	u = [
		{
			base: 8,
			tint: 1
		},
		{
			base: 14,
			tint: 1
		},
		{
			base: 5,
			tint: 1
		}
	],
	m = [0.05, 0.4, 0.15, 0.33, 0.1, 0.3, 0.6],
	_ = [
		{
			base: 8,
			tint: 1
		},
		{
			base: 8,
			tint: 1
		},
		{
			base: 8,
			tint: 1
		},
		{
			base: 8,
			tint: 1
		},
		{
			base: 8,
			tint: 1
		},
		{
			base: 8,
			tint: 1
		},
		{
			base: 8,
			tint: 1
		}
	];
function f(e) {
	let { width: n, height: t, primaryTintColor: f, secondaryTintColor: C, ...h } = e,
		{ primaryColorsTransformed: x, secondaryColorsTransformed: p } = (0, r.s)({
			primaryBaseColors: l,
			primaryTintColor: f,
			primaryTintLuminances: d,
			primaryLuminanceWeights: u,
			secondaryBaseColors: c,
			secondaryTintColor: C,
			secondaryTintLuminances: m,
			secondaryLuminanceWeights: _
		}),
		{ styleContent: g, containerId: T } = (0, i.bC)(x, p);
	return (0, a.jsxs)('svg', {
		...h,
		'aria-label': s.Z.Messages.CLAN_LOOK_BANNER,
		width: n,
		height: t,
		viewBox: '0 0 '.concat(i.Km, ' ').concat(i.md),
		children: [
			(0, a.jsxs)('defs', {
				children: [
					(0, a.jsx)('defs', {
						children: (0, a.jsxs)('linearGradient', {
							id: 'sky-gradient',
							x1: '0',
							x2: '1',
							y1: '0',
							y2: '1',
							children: [
								(0, a.jsx)('stop', {
									stopColor: x[2],
									offset: '0%'
								}),
								(0, a.jsx)('stop', {
									stopColor: x[0],
									offset: '100%'
								})
							]
						})
					}),
					(0, a.jsx)('style', { children: g })
				]
			}),
			(0, a.jsx)('use', {
				href: ''.concat(o, '#sky'),
				style: { fill: 'url(#sky-gradient)' }
			}),
			(0, a.jsx)('use', {
				href: ''.concat(o, '#wrapper-layer'),
				id: T
			})
		]
	});
}
