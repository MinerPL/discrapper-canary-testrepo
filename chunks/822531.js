var s = n(735250);
n(470079);
var a = n(481060),
	i = n(725803),
	r = n(546221),
	l = n(489028),
	o = n(674563);
t.Z = (e) => {
	let { guild: t } = e,
		{ application: n, loading: c } = (0, i.Z)(t.id, o.wW.GUILD_ROLE_SUBSCRIPTIONS);
	return c
		? (0, s.jsx)(a.Spinner, {})
		: null != n
			? (0, s.jsx)(r.Z, {
					guildId: t.id,
					application: n
				})
			: (0, s.jsx)(l.Z, { guild: t });
};
