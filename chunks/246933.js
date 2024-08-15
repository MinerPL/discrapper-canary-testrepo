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
	o = t(409814);
let l = ['#cc99ff', '#ffffff'],
	c = ['#2d3dee', '#ffffff'],
	d = [0.3, 1],
	u = [
		{
			base: 2,
			tint: 1
		},
		{
			base: 5,
			tint: 1
		}
	],
	m = [0.3, 1],
	_ = [
		{
			base: 2,
			tint: 1
		},
		{
			base: 5,
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
					(0, a.jsxs)('defs', {
						children: [
							(0, a.jsxs)('radialGradient', {
								id: 'fog-gradient-primary',
								cx: '.5',
								cy: '.5',
								r: '.6',
								fx: '.76',
								fy: '.33',
								spreadMethod: 'pad',
								children: [
									(0, a.jsx)('stop', {
										stopColor: x[1],
										offset: '0%'
									}),
									(0, a.jsx)('stop', {
										stopColor: x[0],
										offset: '70%'
									})
								]
							}),
							(0, a.jsxs)('radialGradient', {
								id: 'fog-gradient-secondary',
								cx: '.5',
								cy: '.5',
								r: '.6',
								fx: '.76',
								fy: '.33',
								spreadMethod: 'pad',
								children: [
									(0, a.jsx)('stop', {
										stopColor: p[1],
										offset: '0%'
									}),
									(0, a.jsx)('stop', {
										stopColor: p[0],
										offset: '70%'
									})
								]
							})
						]
					}),
					(0, a.jsx)('style', { children: g })
				]
			}),
			(0, a.jsx)('use', {
				href: ''.concat(o, '#wrapper-layer'),
				id: T
			}),
			(0, a.jsx)('use', {
				href: ''.concat(o, '#clan-banner-warp-tunnel-secondary'),
				style: { fill: 'url(#fog-gradient-secondary)' }
			}),
			(0, a.jsx)('use', {
				href: ''.concat(o, '#clan-banner-warp-tunnel-primary'),
				style: { fill: 'url(#fog-gradient-primary)' }
			})
		]
	});
}
