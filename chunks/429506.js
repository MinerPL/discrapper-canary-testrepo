"use strict";
a.r(t), a.d(t, {
  default: function() {
    return l
  }
});
var n = a("626135"),
  s = a("981631");

function l(e) {
  let {
    rating: t = null
  } = e;
  n.default.track(s.AnalyticEvents.SAFETY_USER_SENTIMENT_FEEDBACK_SUBMITTED, {
    rating: t
  })
}