n.d(t, {
	Z: function () {
		return h;
	}
}),
	n(47120);
var r = n(735250),
	i = n(470079),
	a = n(512722),
	s = n.n(a),
	o = n(442837),
	l = n(699516),
	u = n(594174),
	c = n(971393),
	d = n(103113),
	_ = n(70785),
	E = n(969835),
	f = n(985237);
function h(e) {
	let { location: t, userId: n, user: a, ...h } = e,
		p = (0, o.e7)([u.default], () => u.default.getUser(n), [n]),
		m = null != a ? a : p;
	s()(null != m, 'UserPopoutExperimentWrapper: user cannot be undefined');
	let I = (0, o.e7)([u.default], () => u.default.getCurrentUser());
	s()(null != I, 'UserPopoutExperimentWrapper: currentUser cannot be undefined');
	let T = (0, o.e7)([l.Z], () => l.Z.isBlocked(m.id)),
		[g, S] = i.useState(T),
		A = (0, c.sS)({ location: t });
	return g && A
		? (0, r.jsx)(_.Z, {
				...h,
				user: m,
				currentUser: I,
				onViewBlockedProfileClick: () => S(!1)
			})
		: m.isNonUserBot()
			? (0, r.jsx)(d.Z, {
					...h,
					user: m,
					currentUser: I
				})
			: m.bot
				? (0, r.jsx)(f.Z, {
						...h,
						user: m,
						currentUser: I
					})
				: (0, r.jsx)(E.Z, {
						...h,
						user: m,
						currentUser: I
					});
}
