n.d(t, {
	I: function () {
		return E;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(338545),
	s = n(481060),
	o = n(345332),
	l = n(417153),
	u = n(561466),
	c = n(730346);
let d = {
		duration: 300,
		friction: 24,
		tension: 280
	},
	_ = {
		[u.az.TOP]: {
			styles: c.containerTop,
			transition: {
				trail: 400,
				from: {
					transform: 'translate3d(0, -100%, 0)',
					opacity: 0,
					config: d
				},
				enter: {
					transform: 'translate3d(0, -0px, 0)',
					opacity: 1,
					config: d
				},
				leave: {
					transform: 'translate3d(0, -100%, 0)',
					opacity: 0,
					config: {
						...d,
						friction: 40,
						clamp: !0
					}
				}
			}
		},
		[u.az.BOTTOM]: {
			styles: c.containerBottom,
			transition: {
				trail: 400,
				from: {
					transform: 'translate3d(0, 100%, 0)',
					opacity: 0,
					config: d
				},
				enter: {
					transform: 'translate3d(0, 0px, 0)',
					opacity: 1,
					config: d
				},
				leave: {
					transform: 'translate3d(0, 100%, 0)',
					opacity: 0,
					config: {
						...d,
						friction: 40,
						clamp: !0
					}
				}
			}
		}
	};
function E() {
	var e, t, n, c;
	let d = (0, l.Es)((e) => e.currentToast),
		E = i.useRef(null !== (n = null == d ? void 0 : null === (e = d.options) || void 0 === e ? void 0 : e.position) && void 0 !== n ? n : u.si.position),
		f = i.useRef(null !== (c = null == d ? void 0 : null === (t = d.options) || void 0 === t ? void 0 : t.duration) && void 0 !== c ? c : u.si.duration);
	i.useEffect(() => {
		if (null != d) {
			var e, t, n, r;
			(E.current = null !== (n = null === (e = d.options) || void 0 === e ? void 0 : e.position) && void 0 !== n ? n : u.si.position), (f.current = null !== (r = null === (t = d.options) || void 0 === t ? void 0 : t.duration) && void 0 !== r ? r : u.si.duration);
		}
	}, [d]);
	let h = i.useMemo(() => {
			var e, t;
			return _[null !== (t = null == d ? void 0 : null === (e = d.options) || void 0 === e ? void 0 : e.position) && void 0 !== t ? t : E.current];
		}, [d]),
		p = (0, s.useTransition)(d, {
			keys: (e) => {
				var t;
				return null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : '';
			},
			...h.transition
		});
	return (
		i.useEffect(() => {
			null != d &&
				setTimeout(() => {
					(0, l.z5)();
				}, f.current);
		}, [d]),
		(0, r.jsx)('div', {
			className: h.styles,
			children: p((e, t) =>
				null === t
					? null
					: (0, r.jsx)(
							a.animated.div,
							{
								style: e,
								children: (0, r.jsx)(o.F, { ...t })
							},
							t.id
						)
			)
		})
	);
}
