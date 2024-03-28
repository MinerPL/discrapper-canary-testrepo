"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
});
var l = s("626135"),
  a = s("981631");

function n(e, t, s, n) {
  l.default.track(a.AnalyticEvents.USER_REPORT_SUBMITTED, {
    report_name: "Guild Deletion",
    guild_id: e,
    reason: t,
    feedback: s,
    skipped: n
  })
}