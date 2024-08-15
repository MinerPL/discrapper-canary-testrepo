t.d(s, {
	Z: function () {
		return T;
	}
}),
	t(47120);
var n = t(735250),
	a = t(470079),
	i = t(120356),
	r = t.n(i),
	o = t(338545),
	l = t(748780),
	c = t(481060),
	d = t(442837),
	_ = t(607070),
	E = t(663389),
	u = t(81138);
function I(e) {
	let { children: s, className: t, onFlashEnd: i, animationDelay: E = 500 } = e,
		I = c.tokens.colors.TEXT_LINK,
		T = (0, d.e7)([_.Z], () => _.Z.useReducedMotion),
		S = (0, c.useToken)(I).spring({ opacity: 0 }),
		N = (0, c.useToken)(I).spring({ opacity: 0.1 }),
		C = (0, c.useToken)(I).spring({ opacity: 0 }),
		m = (0, c.useToken)(I).spring({ opacity: 1 }),
		A = (e) => {
			e.finished && (null == i || i());
		},
		[O, g] = (0, c.useSpring)(
			() => ({
				from: {
					backgroundColor: S,
					borderColor: S
				}
			}),
			'animate-never'
		),
		h = E + 200 + 200,
		p = T ? 0 : 200;
	return (
		a.useEffect(() => {
			g({
				reset: !0,
				immediate: !1,
				to: {
					backgroundColor: S,
					borderColor: S
				},
				config: {
					duration: p,
					easing: l.Z.Easing.ease
				}
			}),
				g({
					delay: E,
					immediate: T,
					to: [
						{
							backgroundColor: N,
							borderColor: m
						}
					],
					config: {
						duration: p,
						easing: l.Z.Easing.ease
					}
				}),
				g({
					delay: h,
					immediate: T,
					to: [
						{
							backgroundColor: C,
							borderColor: C
						}
					],
					config: {
						duration: p,
						easing: l.Z.Easing.ease
					},
					onRest: A
				});
		}, [g]),
		(0, n.jsx)(o.animated.div, {
			style: O,
			className: r()(u.settingsItemHighlight, t),
			children: s
		})
	);
}
function T(e) {
	let { children: s, scrollPosition: t, animationDelay: i } = e,
		r = (0, d.e7)([E.Z], () => E.Z.getScrollPosition() === t),
		[o, l] = a.useState(!1);
	return (a.useEffect(() => {
		r && l(!0);
	}, [r]),
	o)
		? (0, n.jsx)(I, {
				animationDelay: i,
				onFlashEnd: () => l(!1),
				children: s
			})
		: (0, n.jsx)(n.Fragment, { children: s });
}
