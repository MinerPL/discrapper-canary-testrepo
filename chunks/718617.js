n.d(t, {
	Z: function () {
		return I;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(338545),
	l = n(442837),
	r = n(186325),
	o = n(481060),
	c = n(110924),
	u = n(714338),
	d = n(237617),
	h = n(433355),
	m = n(189432),
	p = n(727381),
	_ = n(313692),
	f = n(596443),
	E = n(50493),
	g = n(981631);
function C(e, t) {
	return (n) => {
		if (0 === n) return 'auto';
		let i = 'forwards' === t.current,
			a = n > 0,
			s = !1;
		return (
			a && i && 'left' === e && (s = !0),
			a && !i && 'right' === e && (s = !0),
			!a && i && 'right' === e && (s = !0),
			!a && !i && 'left' === e && (s = !0),
			s ? 'calc('.concat(100 * Math.abs(n), '% + ').concat(Math.round(12 * Math.abs(n)), 'px)') : 'auto'
		);
	};
}
function I(e) {
	var t, n;
	let { userId: I, guildId: x, onClose: T, analyticsLocation: N, className: v } = e,
		S = (0, l.e7)([h.ZP], () => h.ZP.getGuildSidebarState(x), [x]),
		Z = null !== (t = null == S ? void 0 : S.details.modViewPanel) && void 0 !== t ? t : E.k.INFO,
		A = (0, c.Z)(I);
	let M = null == (n = Z) ? null : n === E.k.INFO ? 'backwards' : 'forwards',
		b = (0, d.Z)(M),
		{ reducedMotion: R } = a.useContext(r.S),
		j = a.useCallback(
			(e) => {
				null != S && (0, m.r)(x, I, S.baseChannelId, { modViewPanel: e });
			},
			[S, x, I]
		),
		L = a.useMemo(
			() => ({
				[g.EkH.CLOSE_MODAL]: {
					binds: ['esc'],
					comboKeysBindGlobal: !0,
					action() {
						if (Z === E.k.INFO) return T();
						return j(E.k.INFO);
					}
				}
			}),
			[T, Z, j]
		);
	a.useEffect(() => (u.Z.enable(), u.Z.enableTemp(L), () => u.Z.disableTemp()), [L]);
	let P = (0, o.useTransition)(
		Z,
		{
			value: 0,
			from: { value: 1 },
			enter: { value: 0 },
			leave: { value: -1 }
		},
		A !== I ? 'animate-never' : 'animate-always'
	);
	return (0, i.jsx)(s.animated.div, {
		style: {
			position: 'relative',
			height: '100%',
			flex: 1,
			overflow: 'hidden'
		},
		children: P((e, t, n) => {
			var a, l, r;
			let { key: o } = n;
			return (0, i.jsx)(
				s.animated.div,
				{
					style: {
						position: 'absolute',
						display: 'flex',
						flexDirection: 'column',
						backfaceVisibility: 'hidden',
						width: '100%',
						height: '100%',
						...(R.enabled
							? { opacity: null === (a = e.value) || void 0 === a ? void 0 : a.to((e) => 1 - Math.abs(e)) }
							: {
									left: null === (l = e.value) || void 0 === l ? void 0 : l.to(C('left', b)),
									right: null === (r = e.value) || void 0 === r ? void 0 : r.to(C('right', b))
								})
					},
					children: (function (e) {
						switch (e) {
							case E.k.INFO:
								return (0, i.jsx)(p.Z, {
									userId: I,
									guildId: x,
									onNavigate: j,
									className: v
								});
							case E.k.MESSAGE_HISTORY:
								return (0, i.jsx)(_.Z, {
									userId: I,
									guildId: x,
									onNavigate: () => j(E.k.INFO),
									className: v
								});
							case E.k.PERMISSIONS:
								return (0, i.jsx)(f.Z, {
									userId: I,
									guildId: x,
									onNavigate: () => j(E.k.INFO),
									className: v
								});
							default:
								return null;
						}
					})(t)
				},
				o
			);
		})
	});
}
