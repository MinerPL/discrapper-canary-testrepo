i.d(n, {
	Z: function () {
		return _;
	}
});
var l = i(735250),
	t = i(470079),
	s = i(481060),
	a = i(906732),
	o = i(702557),
	u = i(171368),
	d = i(314897),
	r = i(246946),
	c = i(626135),
	Z = i(981631),
	M = i(228168),
	E = i(689938);
function _(e) {
	let { user: n, guildId: i, channelId: _, context: f } = e,
		{ id: N } = n,
		{ loading: A, note: I } = (0, o.Z)(N),
		g = !A && null != I && I.length > 0,
		v = f === Z.IlC.POPOUT,
		b = t.useContext(c.AnalyticsContext),
		{ analyticsLocations: m } = (0, a.ZP)();
	return N === d.default.getId() || r.Z.hidePersonalInformation || v
		? null
		: (0, l.jsx)(s.MenuItem, {
				id: 'note',
				label: A ? E.Z.Messages.LOADING_NOTE : g ? E.Z.Messages.EDIT_NOTE : E.Z.Messages.ADD_NOTE,
				action: () => {
					(0, u.openUserProfileModal)({
						userId: n.id,
						section: M.oh.USER_INFO,
						subsection: M.Tb.NOTE,
						guildId: i,
						channelId: _,
						sourceAnalyticsLocations: m,
						analyticsLocation: b.location
					});
				}
			});
}
