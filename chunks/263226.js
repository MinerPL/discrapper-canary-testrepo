"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
});
var a = s("626135"),
  l = s("981631");

function n(e, t, s, n) {
  a.default.track(l.AnalyticEvents.USER_REPORT_SUBMITTED, {
    report_name: "Guild Leave",
    guild_id: e,
    reason: t,
    feedback: s,
    skipped: n
  })
}