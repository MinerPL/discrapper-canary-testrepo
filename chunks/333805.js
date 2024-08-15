i.d(n, {
	Z: function () {
		return o;
	}
});
var t = i(735250);
i(470079);
var l = i(481060),
	s = i(726521),
	a = i(427679),
	u = i(689938);
function o(e) {
	let n = a.Z.isLive(e.id);
	return e.isGuildStageVoice() && n
		? (0, t.jsx)(l.MenuItem, {
				id: 'report-stage',
				label: u.Z.Messages.REPORT_MODAL_REPORT_STAGE_MENU_ITEM,
				action: () => (0, s.ic)(e),
				icon: l.FlagIcon,
				color: 'danger'
			})
		: null;
}
