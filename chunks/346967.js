n.d(t, {
	Z: function () {
		return E;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(512722),
	l = n.n(s),
	r = n(442837),
	o = n(911367),
	c = n(699516),
	u = n(594174),
	d = n(453956),
	h = n(184301),
	m = n(87728),
	p = n(705816),
	_ = n(792379),
	f = n(402777);
function E(e) {
	let { location: t, channel: n, ...s } = e,
		E = (0, m.Z)();
	(0, o.t)();
	let [g] = n.recipients,
		C = (0, r.e7)([u.default], () => u.default.getUser(g));
	l()(null != C, 'ProfilePanelExperimentWrapper: user cannot be undefined');
	let I = (0, r.e7)([u.default], () => u.default.getCurrentUser());
	l()(null != I, 'ProfilePanelExperimentWrapper: currentUser cannot be undefined'),
		a.useEffect(() => {
			(0, h.Z)(C, {
				withMutualFriends: !C.bot,
				withMutualGuilds: !0,
				channelId: n.id
			});
		}, [C, n.id]);
	let x = (0, r.e7)([c.Z], () => c.Z.isBlocked(C.id)),
		[T, N] = a.useState(x),
		v = (0, d.sS)({ location: t });
	return (a.useEffect(() => {
		N(x);
	}, [x]),
	E)
		? null
		: T && v
			? (0, i.jsx)(p.Z, {
					user: C,
					channel: n,
					onViewBlockedProfileClick: () => N(!1),
					...s
				})
			: C.isNonUserBot()
				? (0, i.jsx)(_.Z, {
						user: C,
						channel: n,
						...s
					})
				: (0, i.jsx)(f.Z, {
						user: C,
						currentUser: I,
						channel: n,
						...s
					});
}
