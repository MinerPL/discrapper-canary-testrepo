n.d(t, {
	Q: function () {
		return a;
	}
});
var s,
	a,
	r = n(735250);
n(470079);
var i = n(120356),
	l = n.n(i),
	o = n(442837),
	c = n(607070),
	d = n(967538),
	_ = n(885302),
	u = n(914677),
	E = n(836846);
((s = a || (a = {}))[(s.NITRO_GEM = 0)] = 'NITRO_GEM'), (s[(s.NITRO_LOGO = 1)] = 'NITRO_LOGO');
t.Z = (e) => {
	let { showAnimations: t = !0, iconClassName: n, staticPercentage: s, innerCircleClassName: a, progressCircleStrokeSize: i, backgroundCircleSize: T, percentage: I, initialPercentage: R, progressCircleVariation: C = 0, ellipseOpacity: g, customAnimationClassName: p, circleColor: N, circleStroke: A } = e,
		m = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
		f = t && !m;
	return (0, r.jsx)('div', {
		className: l()(E.progressCircle, n, { [E.progressCricleBottomMargin]: 0 === C }),
		children: (0, r.jsx)(u.Z, {
			animationClassName: l()(E.activeProgressCircle, {
				[E.activeProgressCircleAnimation]: f,
				[null != p ? p : '']: f
			}),
			progressCircleStroke: A,
			progressCircleStrokeSize: i,
			percentage: null != s ? s : I,
			initialPercentage: null != s ? s : R,
			progressCircleVariation: C,
			children:
				0 === C
					? (0, r.jsx)(d.Z, {
							className: f ? E.nitroGemAnimation : void 0,
							backgroundColor: l()(E.gemBackgroundFill, a),
							backgroundCircleSize: T
						})
					: (0, r.jsx)(_.Z, {
							circleColor: N,
							ellipseOpacity: g
						})
		})
	});
};
