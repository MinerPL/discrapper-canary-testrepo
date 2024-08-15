n.d(t, {
	y6: function () {
		return E;
	}
}),
	n(47120);
var i = n(470079),
	a = n(442837),
	s = n(45114),
	r = n(733427),
	l = n(455199),
	o = n(833592),
	c = n(140155),
	u = n(774807),
	d = n(490897);
let _ = (e) => {
		let { isFocused: t, navigatedAway: n, isDesktop: _, withMentions: E = !1, initialPageSize: I } = e,
			m = (0, a.e7)([u.Z], () => u.Z.shouldReload()),
			T = i.useRef(!1),
			[h, N] = i.useState(!1),
			{
				initialized: f,
				loading: C,
				items: p,
				hasMore: g,
				cursor: S,
				errored: A
			} = (0, a.cj)([c.Z], () => ({
				initialized: c.Z.initialized,
				loading: c.Z.loading,
				items: c.Z.items,
				hasMore: c.Z.hasMore,
				cursor: c.Z.cursor,
				errored: c.Z.errored
			})),
			{ roleFilter: R, everyoneFilter: x } = (0, a.cj)([l.Z], () => ({
				everyoneFilter: l.Z.everyoneFilter,
				roleFilter: l.Z.roleFilter
			}));
		i.useEffect(() => ((0, o.Vk)(!0), () => (0, o.Vk)(!1)), []),
			i.useEffect(() => {
				f && t && (0, s.FT)(d.W.NOTIFICATION_CENTER);
			}, [t, f]);
		let O = (0, r.Z)();
		i.useEffect(
			() => () => {
				_ ? !O() && (A || p.length > 100) && (0, o.jF)() : n && p.length > 100 && (0, o.jF)();
			},
			[n, p, _, O, A]
		),
			i.useEffect(() => {
				let e = m && t;
				(!f || e) &&
					(0, o.jk)({
						limit: null != I ? I : E ? 8 : 20,
						with_mentions: E,
						roles_filter: R,
						everyone_filter: x
					});
			}, [f, m, t, E, R, x, I]);
		let M = i.useCallback(
			async (e) => {
				!T.current &&
					f &&
					g &&
					null != S &&
					(e || !A) &&
					((T.current = !0),
					N(!0),
					await (0, o.jk)(
						{
							after: S,
							with_mentions: E,
							roles_filter: R,
							everyone_filter: x,
							limit: E ? 8 : 20
						},
						() => {
							T.current = !1;
						}
					),
					N(!1));
			},
			[f, g, S, A, E, R, x]
		);
		return {
			initialized: f,
			loading: C,
			items: p,
			hasMore: g,
			loadMore: M,
			loadingMore: h,
			setReadNotifItemToAcked: (e) => {
				!e.acked && (e.acked = !0);
			},
			errored: A
		};
	},
	E = () => {
		let {
			initialized: e,
			loading: t,
			items: n,
			hasMore: i,
			loadMore: a
		} = _({
			isFocused: !0,
			isDesktop: !0
		});
		return {
			initialized: e,
			loading: t,
			items: n.filter((e) => 'notification-center-item' === e.kind),
			hasMore: i,
			loadMore: a
		};
	};
