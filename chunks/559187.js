n.d(t, {
    Z: function () {
        return l;
    }
});
var a = n(626135), o = n(981631);
function l(e) {
    let {
        problem: t,
        feedback: n,
        reportType: l,
        reportId: s = null,
        rating: r = null,
        dontShowAgain: i
    } = e;
    a.default.track(o.rMx.IAR_FEEDBACK_SUBMITTED, {
        reason: t,
        report_type: l,
        report_id: s,
        rating: r,
        feedback: n,
        dont_show_again: i
    });
}
