n.d(t, {
	Z: function () {
		return C;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(338545),
	l = n(442837),
	r = n(780384),
	o = n(481060),
	c = n(435064),
	u = n(39604),
	d = n(175470),
	h = n(569545),
	m = n(314910),
	p = n(357768);
let _ = { visibility: 'hidden' },
	f = {
		precision: 0.0001,
		duration: 300
	},
	E = {
		tension: 150,
		friction: 20,
		precision: 0.0001,
		bounce: 0
	},
	g = { duration: 1000 };
function C(e) {
	let { stream: t, inPopout: n } = e,
		{ reducedMotion: C } = a.useContext(r.Sf),
		I = (0, a.useRef)(null),
		x = d.n.getState().clipsButtonRef,
		T = (0, h.V9)(t),
		N = (0, l.e7)([c.Z], () => c.Z.getActiveAnimation()),
		v = (0, l.Wu)([c.Z], () => c.Z.getStreamClipAnimations(T)),
		S = (0, a.useRef)();
	a.useEffect(
		() => () => {
			(0, u.Gh)(T);
		},
		[T]
	);
	let Z = () => {
			var e;
			let t = null === (e = I.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
			return null == t || n
				? _
				: {
						width: t.width,
						height: t.height,
						top: t.top,
						left: t.left
					};
		},
		A = (e) => {
			let t = null == x ? void 0 : x.getBoundingClientRect();
			if (((S.current = t), e.timestamp !== N || null == t || n)) return _;
			let { top: i, left: a } = t;
			return {
				top: i + 36,
				left: a - 216,
				height: 151,
				width: 268
			};
		},
		M = (0, a.useRef)(null),
		b = (0, o.useTransition)(
			v,
			{
				keys: (e) => e.timestamp,
				ref: M,
				from: { opacity: 0.2 },
				enter: { opacity: 0 },
				config: f
			},
			'animate-always'
		),
		R = (0, a.useRef)(null),
		j = (0, o.useTransition)(
			v,
			{
				ref: R,
				keys: (e) => e.timestamp,
				from: (e) => ({
					position: 'fixed',
					visibility: 'hidden',
					opacity: 1,
					...(C.enabled ? A(e) : Z())
				}),
				enter: (e) => [
					{
						opacity: 1,
						visibility: 'visible',
						...A(e)
					}
				],
				leave: {
					opacity: 0,
					...(!C.enabled && {
						height: 0,
						width: 0,
						...(() => {
							if (null != S.current)
								return {
									top: S.current.top + 12,
									left: S.current.left + 12
								};
						})()
					})
				},
				config: C.enabled ? g : E,
				onRest: (e, t) => {
					null != t.item && null != v.find((e) => e.timestamp === t.item.timestamp) && (0, u.Gh)(T, t.item.timestamp);
				}
			},
			'animate-always'
		);
	return (
		(0, s.useChain)([M, R], [0, 0.1], 3000),
		(0, i.jsxs)(i.Fragment, {
			children: [
				(0, i.jsx)('div', {
					className: p.hidden,
					ref: I
				}),
				b(
					(e, t) =>
						null != t &&
						(0, i.jsx)(s.animated.div, {
							className: p.whiteFlash,
							style: e
						})
				),
				(0, i.jsx)(m.ZP, {
					children: (0, i.jsx)('div', {
						className: p.hidden,
						children: j(
							(e, t, n, a) =>
								(null == t ? void 0 : t.thumbnail) != null &&
								(0, i.jsx)(s.animated.img, {
									src: t.thumbnail,
									className: p.movingImage,
									style: e
								})
						)
					})
				})
			]
		})
	);
}
