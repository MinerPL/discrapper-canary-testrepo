a.d(t, {
	Z: function () {
		return l;
	}
}),
	a(653041);
var n = a(701488),
	s = a(689938);
function l(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
		a = [
			{
				value: n.K8.FAILED_LOAD,
				label: e ? s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_FAILED_LOAD : s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_FAILED_LOAD
			},
			{
				value: n.K8.LAGGING,
				label: e ? s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_LAGGING : s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_LAGGING
			},
			{
				value: n.K8.CONFUSING,
				label: e ? s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_CONFUSING : s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_CONFUSING
			},
			{
				value: n.K8.NOT_FUN,
				label: e ? s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_NOT_FUN : s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_NOT_FUN
			},
			{
				value: n.K8.OTHER,
				label: s.Z.Messages.CALL_FEEDBACK_OPTION_OTHER
			}
		];
	return (
		t &&
			a.push({
				value: n.K8.ADS,
				label: e ? s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_INCLUDED_ADS : s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_INCLUDES_ADS
			}),
		a
	);
}
