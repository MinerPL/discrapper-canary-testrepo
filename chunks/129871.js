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
	o = t(136050);
let l = ['#7185f6', '#7799f3', '#7eb2eb', '#85d5e0', '#89e6dd', '#8cefda', '#68eacb'],
	c = ['#ffffff', '#f0f0f0'],
	d = [0.15, 0.23, 0.32, 0.45, 0.57, 0.62, 0.7],
	u = [
		{
			base: 14,
			tint: 1
		},
		{
			base: 10,
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
	],
	m = [0.95, 1],
	_ = [
		{
			base: 1,
			tint: 2
		},
		{
			base: 14,
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
						children: (0, a.jsxs)('radialGradient', {
							id: 'foam-gradient',
							cx: '0.5',
							cy: '0.5',
							r: '0.65',
							fx: '0.5',
							fy: '0.8',
							children: [
								(0, a.jsx)('stop', {
									stopColor: p[1],
									offset: '60%'
								}),
								(0, a.jsx)('stop', {
									stopColor: p[0],
									offset: '100%'
								})
							]
						})
					}),
					(0, a.jsx)('style', { children: g })
				]
			}),
			(0, a.jsx)('use', {
				href: ''.concat(o, '#wrapper-layer'),
				id: T
			}),
			(0, a.jsx)('use', {
				href: ''.concat(o, '#foam'),
				style: { fill: 'url(#foam-gradient)' }
			})
		]
	});
}
