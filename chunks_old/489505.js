"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var s = n("599110"),
  a = n("49111");

function l(e, t, n, l) {
  s.default.track(a.AnalyticEvents.USER_REPORT_SUBMITTED, {
    report_name: "Guild Leave",
    guild_id: e,
    reason: t,
    feedback: n,
    skipped: l
  })
}