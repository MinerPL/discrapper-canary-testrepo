e.d(t, {
	Z: function () {
		return c;
	}
});
var u = e(735250);
e(470079);
var i = e(481060),
	r = e(37234),
	l = e(434404),
	o = e(981631),
	a = e(689938);
function c(n, t) {
	return t === o.IlC.POPOUT
		? null
		: (0, u.jsx)(i.MenuItem, {
				id: 'nav-server-settings',
				label: a.Z.Messages.SERVER_SETTINGS,
				action: () => {
					(0, r.xf)(), l.Z.open(n, o.pNK.MODERATION);
				}
			});
}
