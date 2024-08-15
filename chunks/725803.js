n.d(t, {
	Z: function () {
		return o;
	}
}),
	n(47120);
var s = n(470079),
	a = n(442837),
	i = n(881052),
	r = n(728345),
	l = n(812206);
function o(e, t) {
	let n = (0, a.e7)([l.Z], () => l.Z.getGuildApplication(e, t)),
		[o, c] = s.useState(null == n),
		[d, u] = s.useState(),
		[_, I] = s.useState(!1),
		E = s.useCallback(async () => {
			if (null == n && null != e) {
				I(!0), c(!0);
				try {
					await r.Z.getApplicationsForGuild(e, {
						type: t,
						includeTeam: !0
					});
				} catch (e) {
					u(new i.Hx(e));
				} finally {
					c(!1);
				}
			}
		}, [n, t, e]);
	return (
		s.useEffect(() => {
			!_ && E();
		}, [_, E]),
		{
			application: n,
			error: d,
			loading: o
		}
	);
}
