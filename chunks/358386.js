t.d(e, {
	Z: function () {
		return c;
	}
});
var r = t(735250);
t(470079);
var u = t(442837),
	i = t(481060),
	a = t(430824),
	o = t(594174),
	l = t(689938);
function c(n, e) {
	let c = (0, u.e7)([o.default], () => o.default.getCurrentUser()),
		d = (0, u.e7)([a.Z], () => a.Z.getGuild(e));
	return null == d || null == c || n.id === d.ownerId || n.bot || !d.isOwnerWithRequiredMfaLevel(c)
		? null
		: (0, r.jsx)(i.MenuItem, {
				id: 'transfer-ownership',
				color: 'danger',
				label: l.Z.Messages.TRANSFER_OWNERSHIP,
				action: () =>
					(0, i.openModalLazy)(async () => {
						let { default: e } = await t.e('8653').then(t.bind(t, 928090));
						return (t) =>
							(0, r.jsx)(e, {
								...t,
								guild: d,
								fromUser: c,
								toUser: n
							});
					})
			});
}
