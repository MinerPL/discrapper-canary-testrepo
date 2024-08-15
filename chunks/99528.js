t.d(n, {
	Z: function () {
		return d;
	}
});
var l = t(735250);
t(470079);
var i = t(442837),
	u = t(481060),
	s = t(726521),
	r = t(924301),
	a = t(689938);
function d(e) {
	let n = (0, i.e7)([r.ZP], () => r.ZP.getGuildScheduledEvent(e), [e]);
	return null == e || null == n
		? null
		: (0, l.jsx)(u.MenuItem, {
				id: 'report-event',
				label: a.Z.Messages.REPORT_MODAL_REPORT_EVENT_MENU_ITEM,
				action: () => (0, s.d$)(n),
				icon: u.FlagIcon,
				color: 'danger'
			});
}
