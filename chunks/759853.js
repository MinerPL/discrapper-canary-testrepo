n(47120);
var s = n(735250),
	o = n(470079),
	a = n(120356),
	r = n.n(a),
	l = n(887024),
	i = n(699581),
	c = n(338545),
	d = n(442837),
	u = n(110924),
	p = n(607070),
	x = n(819640),
	m = n(569379),
	g = n(675654),
	_ = n(301095),
	C = n(197857);
let f = ['#51BC9D'];
t.Z = (e) => {
	var t;
	let { expansionSpring: n, overlayRef: a, quest: h, progressBarRef: E, isExpanded: T } = e,
		{ completionSpring: S, startCompletionAnimation: v } = (0, m.GX)(),
		A = (null === (t = h.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
		N = o.useRef(!1),
		j = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
		B = o.useRef(null),
		b = (0, d.e7)([x.Z], () => x.Z.hasLayers()),
		R = (0, u.Z)(b),
		[y, I] = o.useState(null),
		[k, M] = o.useState(null),
		O = o.useRef(
			new l.qA({
				gravity: 0,
				wind: 0
			})
		),
		U = (0, l.uR)(y, k),
		L = o.useCallback(() => {
			if (j) return;
			let e = E.current,
				t = B.current;
			if (null != t && null != e && U.isReady) {
				var n, s, o, a;
				let { x: r, y: l } = e.getBoundingClientRect(),
					{ x: i, y: c } = t.getBoundingClientRect();
				U.createMultipleConfetti(
					((n = r - i),
					(s = l - c),
					(o = e.clientHeight),
					(a = e.clientWidth),
					{
						...g.We,
						position: {
							type: 'static-random',
							minValue: {
								x: n,
								y: s
							},
							maxValue: {
								x: n + o,
								y: s + a
							}
						},
						velocity: {
							type: 'static-random',
							minValue: {
								x: -20,
								y: -20
							},
							maxValue: {
								x: 20,
								y: 20
							}
						},
						opacity: {
							type: 'linear',
							value: 2,
							addValue: -0.1
						},
						dragCoefficient: {
							type: 'static',
							value: 0.0001
						},
						size: {
							type: 'static-random',
							minValue: 2,
							maxValue: 3
						}
					}),
					100
				);
			}
		}, [E, B, U, j]),
		q = (0, u.Z)(T);
	return (o.useEffect(() => {
		A && T && !q && (v(), L());
	}, [T, A, v, L, q]),
	o.useEffect(() => {
		A &&
			!b &&
			R &&
			setTimeout(() => {
				v(), L();
			}, 200);
	}, [A, R, b, v, L]),
	o.useEffect(() => {
		if (!!U.isReady) !N.current && A && (v(), L()), (N.current = A);
	}, [A, N, L, v, U]),
	j)
		? null
		: (0, s.jsxs)('div', {
				className: _.wrapper,
				'aria-hidden': 'true',
				ref: B,
				children: [
					(0, s.jsx)(c.animated.div, {
						className: _.background,
						style: { opacity: S }
					}),
					(0, s.jsx)(c.animated.div, {
						className: r()(_.borders, _.bordersTopLeft),
						style: { opacity: S }
					}),
					(0, s.jsxs)(c.animated.div, {
						className: _.confettiWrapper,
						style: {
							transform: n
								.to({
									range: [0, 1],
									output: [-35, 0]
								})
								.to((e) => 'translateY('.concat(e, 'px)'))
						},
						children: [
							(0, s.jsx)(l.O_, {
								ref: I,
								className: _.confetti,
								environment: O.current
							}),
							(0, s.jsx)(l.Ji, {
								ref: M,
								sprites: [C],
								colors: f,
								spriteWidth: g.Ko,
								spriteHeight: g.Ko
							}),
							null != a.current &&
								(0, i.createPortal)(
									(0, s.jsx)(c.animated.div, {
										className: r()(_.borders, _.bordersBottom),
										style: { opacity: S }
									}),
									a.current
								)
						]
					})
				]
			});
};
