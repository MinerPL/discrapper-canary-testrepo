t.d(e, {
	Z: function () {
		return I;
	}
}),
	t(47120);
var i = t(735250);
t(470079);
var a = t(442837),
	l = t(481060),
	r = t(594190),
	d = t(417363),
	s = t(346329),
	u = t(981631),
	c = t(689938);
function I(n) {
	let e = (0, a.e7)([r.ZP], () => r.ZP.getRunningVerifiedApplicationIds().includes(n.id), [n.id]),
		[t, I] = (0, a.Wu)([d.Z], () => [d.Z.isUpToDate(n.id, n.branchId), d.Z.shouldPatch(n.id, n.branchId)], [n.branchId, n.id]);
	return t && !e && I
		? (0, i.jsx)(l.MenuItem, {
				id: 'repair',
				label: c.Z.Messages.APPLICATION_CONTEXT_MENU_REPAIR,
				action: () => s.repairApplication(n.id, n.branchId, u.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
			})
		: null;
}
