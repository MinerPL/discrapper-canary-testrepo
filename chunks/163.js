t.d(n, {
	Z: function () {
		return m;
	}
}),
	t(47120);
var l = t(470079),
	a = t(442837),
	i = t(570140),
	r = t(211739),
	s = t(680089),
	o = t(9156),
	c = t(152376),
	d = t(724213),
	u = t(981631);
function h(e) {
	i.Z.dispatch({
		type: 'CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES',
		guildId: e
	});
}
function m(e) {
	let n = (0, a.e7)([o.ZP], () => o.ZP.getPendingChannelUpdates(e));
	return (
		l.useEffect(() => (h(e), () => h(e)), [e]),
		l.useEffect(() => {
			null != n && (0, c.C1)(e, n);
		}, [e, n]),
		{
			onChannelClick: l.useCallback((e, n, t) => {
				let l = o.ZP.isChannelOptedIn(e, n),
					a = n === t;
				!l && s.Z.isCollapsed(t) && null != t && (0, r.mJ)(t),
					(0, d.hi)(e)
						? a
							? (0, d.rz)(e, { include: new Set([n]) })
							: (0, d.rz)(e, { exclude: new Set([n]) })
						: (0, c.k$)(e, n, !l, { section: u.jXE.CHANNEL_BROWSER });
			}, [])
		}
	);
}
