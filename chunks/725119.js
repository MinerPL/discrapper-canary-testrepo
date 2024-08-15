n.d(t, {
	Z: function () {
		return d;
	}
});
var r = n(735250);
n(470079);
var i = n(481060),
	a = n(40851),
	s = n(906732),
	o = n(785717),
	l = n(171368),
	u = n(981631),
	c = n(689938);
function d(e) {
	let { label: t, onAction: n, ...d } = e,
		{ analyticsLocations: _ } = (0, s.ZP)(),
		{ context: E } = (0, o.KZ)(),
		f = (0, a.Aq)();
	return (0, r.jsx)(i.MenuItem, {
		id: 'user-profile',
		label: null != t ? t : c.Z.Messages.PROFILE,
		action: () => {
			null == n || n(),
				(0, l.openUserProfileModal)({
					sourceAnalyticsLocations: _,
					...E,
					...d
				}),
				f.dispatch(u.CkL.POPOUT_CLOSE);
		}
	});
}
