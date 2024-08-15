n.d(t, {
	Z: function () {
		return m;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(704215),
	r = n(481060),
	l = n(785697),
	o = n(626135),
	c = n(700785),
	d = n(645041),
	u = n(981631),
	_ = n(921944),
	E = n(647086),
	h = n(135899);
function m(e) {
	var t;
	let m = (0, l.SE)(e),
		I = h.$X.some((t) => (null == e ? void 0 : e.id) !== E._ && c.oz(t, e)),
		g = (null == e ? void 0 : e.defaultMessageNotifications) === u.bL.ALL_MESSAGES,
		p = (0, d.FT)(
			s.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE,
			null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : u.lds
		),
		T = m && (I || g) && !p,
		S = a.useCallback(() => {
			var t;
			(0, d.Qd)(
				s.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE,
				null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : u.lds,
				!0,
				_.L.DISMISS
			);
		}, [e]),
		f = a.useRef(!1);
	a.useEffect(() => {
		if (T && !f.current) {
			var t;
			(0, r.openModalLazy)(
				async () => {
					let { default: t } = await n.e('54597').then(n.bind(n, 29022));
					return (n) =>
						(0, i.jsx)(t, {
							guild: e,
							canEveryoneModerate: I,
							isDefaultNotificationsAllMessages: g,
							...n
						});
				},
				{ onCloseCallback: S }
			),
				o.default.track(u.rMx.DISMISSIBLE_CONTENT_SHOWN, {
					type: s.C[s.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
					guild_id: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : u.lds
				}),
				(f.current = !0);
		}
	}, [I, e, S, g, T]);
}
