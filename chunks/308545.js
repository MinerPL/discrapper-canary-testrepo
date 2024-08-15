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
	o = t(444816);
let l = ['#2d456e', '#395788', '#486ead', '#4f7ac2', '#5989d9', '#729bdd', '#96b3e3', '#b5c9e9', '#e0e0e2'],
	c = ['#f7931e'],
	d = [0.05, 0.09, 0.15, 0.2, 0.25, 0.33, 0.44, 0.57, 0.95],
	u = [
		{
			base: 4,
			tint: 1
		},
		{
			base: 4,
			tint: 1
		},
		{
			base: 4,
			tint: 1
		},
		{
			base: 4,
			tint: 1
		},
		{
			base: 4,
			tint: 1
		},
		{
			base: 4,
			tint: 1
		},
		{
			base: 4,
			tint: 1
		},
		{
			base: 4,
			tint: 1
		},
		{
			base: 7,
			tint: 1
		}
	],
	m = [0.4],
	_ = [
		{
			base: 1,
			tint: 5
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
			(0, a.jsx)('defs', { children: (0, a.jsx)('style', { children: g }) }),
			(0, a.jsx)('use', {
				href: ''.concat(o, '#wrapper-layer'),
				id: T
			})
		]
	});
}
