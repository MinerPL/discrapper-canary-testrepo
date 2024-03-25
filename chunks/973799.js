"use strict";
n.r(t), n.d(t, {
  formatExpirationLabel: function() {
    return i
  },
  default: function() {
    return r
  }
});
var s = n("866227"),
  a = n.n(s),
  l = n("782340");

function i(e) {
  let t = a();
  if (e <= t) return;
  let n = e.diff(t, "days");
  if (n > 1) return l.default.Messages.POLL_EXPIRY_DAYS_REMAINING.format({
    days: n
  });
  let s = e.diff(t, "hours");
  if (s > 1) return l.default.Messages.POLL_EXPIRY_HOURS_REMAINING.format({
    hours: s
  });
  let i = e.diff(t, "minutes");
  return l.default.Messages.POLL_EXPIRY_MINUTES_REMAINING.format({
    minutes: i
  })
}

function r(e) {
  if (null != e) return i(e)
}