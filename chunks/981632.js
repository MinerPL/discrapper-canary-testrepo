n.d(t, {
	Z: function () {
		return d;
	}
}),
	n(47120),
	n(411104);
var i = n(735250),
	r = n(470079),
	s = n(442837),
	l = n(481060),
	a = n(607070),
	o = n(409302),
	u = n(474936);
function d(e) {
	let { giftStyle: t, className: n, shouldAnimate: d = !0, defaultAnimationState: c, idleAnimationState: _ } = e,
		E = (0, s.e7)([a.Z], () => a.Z.useReducedMotion),
		[h, p] = r.useState(c),
		f = r.useRef((0, o._)(t, h)),
		[S, m] = r.useState(null == _),
		[I, b] = r.useState(!1),
		[g, C] = r.useState(-1),
		O = () => {
			(f.current = (0, o._)(t, h)), C((e) => e + 1);
		},
		A = () => {
			m(!1), b(!0), C(-1), p(c);
		};
	r.useEffect(() => {
		null == _ && p(c);
	}, [_, c]),
		r.useEffect(() => {
			if (null != _ && g >= 0) {
				A();
				return;
			}
			O();
		}, [t, _]),
		r.useEffect(() => {
			(!I || null == _) && O();
		}, [h]),
		r.useEffect(() => {
			I && (m(null == _), b(!1), O());
		}, [I]);
	if (!u.Cj.hasOwnProperty(t)) throw Error('Unexpected giftStyle '.concat(t));
	return (0, i.jsx)(l.LottieAnimation, {
		importData: f.current,
		shouldAnimate: !E && d,
		className: n,
		versionKey: g,
		onComplete:
			null != _
				? () => {
						null != _ && (p(_), m(!0));
					}
				: void 0,
		loop: S
	});
}
