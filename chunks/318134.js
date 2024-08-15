n.d(t, {
	Z: function () {
		return c;
	}
}),
	n(47120);
var r = n(470079),
	i = n(442837),
	a = n(434650),
	s = n(906732),
	o = n(353647),
	l = n(785717),
	u = n(221292);
function c(e) {
	let { user: t, display: n, activity: c, entry: d, stream: _, analyticsLocations: E } = e,
		{ context: f, trackUserProfileAction: h } = (0, l.KZ)(),
		{ analyticsLocations: p } = (0, s.ZP)(),
		I = null != E ? E : p,
		[m, T] = (0, i.Wu)([o.Z], () => [o.Z.getUserOutbox(t.id), o.Z.isFetchingUserOutbox(t.id)]),
		g = (0, r.useCallback)(
			(e) => {
				let { action: t } = e;
				h({
					action: t,
					analyticsLocations: I
				}),
					(0, u.z7)({
						action: t,
						display: n,
						activity: c,
						entry: d,
						stream: _,
						outbox: m,
						analyticsLocations: I,
						...f
					});
			},
			[h, f, n, c, _, d, m, I]
		),
		[S, A] = (0, r.useState)(!1),
		N = (0, r.useCallback)(
			(e) => {
				e && (g({ action: 'VIEW' }), A(!0));
			},
			[g]
		);
	return {
		onAction: g,
		trackViewRef: (0, a.O)(N, void 0, !T && !S)
	};
}
