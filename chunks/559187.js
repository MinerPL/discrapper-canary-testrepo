"use strict";
a.r(t), a.d(t, {
  default: function() {
    return s
  }
});
var n = a("626135"),
  l = a("981631");

function s(e) {
  let {
    problem: t,
    feedback: a,
    reportType: s,
    reportId: r = null,
    rating: o = null,
    dontShowAgain: u
  } = e;
  n.default.track(l.AnalyticEvents.IAR_FEEDBACK_SUBMITTED, {
    reason: t,
    report_type: s,
    report_id: r,
    rating: o,
    feedback: a,
    dont_show_again: u
  })
}