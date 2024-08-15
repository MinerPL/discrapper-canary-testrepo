t.d(n, {
	Z: function () {
		return c;
	}
});
var a = t(735250);
t(470079);
var i = t(392711),
	l = t.n(i),
	s = t(442837),
	o = t(481060),
	u = t(344185),
	r = t(665906),
	d = t(689938);
function c(e) {
	let n = (0, r.Xb)(e),
		i = (0, s.e7)([u.Z], () => !l().isEmpty(u.Z.getThreadsForGuild(e.id)));
	return n && i
		? (0, a.jsx)(o.MenuItem, {
				id: 'active-threads',
				label: d.Z.Messages.ACTIVE_THREADS,
				icon: o.ChatIcon,
				action: () => {
					(0, o.openModalLazy)(async () => {
						let { default: n } = await t.e('22482').then(t.bind(t, 157743));
						return (t) =>
							(0, a.jsx)(n, {
								guildId: e.id,
								...t
							});
					});
				}
			})
		: null;
}
