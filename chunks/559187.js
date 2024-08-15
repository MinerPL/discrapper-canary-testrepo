n.d(t, {
	Z: function () {
		return o;
	}
});
var a = n(626135),
	s = n(981631);
function o(e) {
	let { problem: t, feedback: n, reportType: o, reportId: l = null, rating: r = null, dontShowAgain: i } = e;
	a.default.track(s.rMx.IAR_FEEDBACK_SUBMITTED, {
		reason: t,
		report_type: o,
		report_id: l,
		rating: r,
		feedback: n,
		dont_show_again: i
	});
}
