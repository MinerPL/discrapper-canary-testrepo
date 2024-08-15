s.d(t, {
	A: function () {
		return i;
	}
});
var n = s(913527),
	l = s.n(n),
	a = s(689938);
function i(e) {
	let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
		s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Z.Messages.FORM_LABEL_OFF,
		n = l().duration(e, 'seconds');
	if (n.days() > 0) return (t ? a.Z.Messages.DURATION_DAYS_SHORT : a.Z.Messages.DURATION_DAYS).format({ days: n.days() });
	if (n.hours() > 0) return (t ? a.Z.Messages.DURATION_HOURS_SHORT : a.Z.Messages.DURATION_HOURS).format({ hours: n.hours() });
	if (n.minutes() > 0) return (t ? a.Z.Messages.DURATION_MINUTES_SHORT : a.Z.Messages.DURATION_MINUTES).format({ minutes: n.minutes() });
	else if (e > 0) return (t ? a.Z.Messages.DURATION_SECONDS_SHORT : a.Z.Messages.DURATION_SECONDS).format({ seconds: n.seconds() });
	else return t ? a.Z.Messages.FORM_LABEL_OFF : s;
}
