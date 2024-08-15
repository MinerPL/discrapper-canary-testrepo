n.d(t, {
	R: function () {
		return l;
	}
}),
	n(47120);
var r = n(735250),
	i = n(470079),
	a = n(442837),
	s = n(481060),
	o = n(607070);
function l(e) {
	let { animationData: t, className: n } = e,
		[l, u] = (0, i.useState)(0),
		c = (0, a.e7)([o.Z], () => o.Z.useReducedMotion);
	return (
		(0, i.useEffect)(() => {
			let e = l + 1;
			e < t.length && t[e]();
		}, [l, t]),
		(0, r.jsx)(s.LottieAnimation, {
			importData: t[l],
			className: n,
			shouldAnimate: !c,
			versionKey: l,
			onComplete: () => {
				l < t.length - 1 && u(l + 1);
			},
			loop: l === t.length - 1
		})
	);
}
