t.d(e, {
	Z: function () {
		return a;
	}
});
var r = t(735250);
t(470079);
var i = t(481060),
	s = t(434404),
	u = t(144507),
	o = t(981631),
	c = t(689938);
function a(n) {
	return (0, u.$D)(n)
		? (0, r.jsx)(i.MenuItem, {
				id: 'role-subscription-settings',
				label: c.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_EDIT_SETTINGS,
				action: () => {
					s.Z.open(n.id, o.pNK.ROLE_SUBSCRIPTIONS);
				}
			})
		: null;
}
