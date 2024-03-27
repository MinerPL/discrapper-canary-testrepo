"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
});
var a = s("396076"),
  l = s("782340");

function n(e) {
  var t, s;
  let n = (null == e ? void 0 : null === (t = e.latestRequest) || void 0 === t ? void 0 : t.state) === a.CreatorMonetizationApplicationState.REJECTED,
    i = function(e) {
      let t;
      if (null == e) return;
      let s = Date.parse(e),
        a = Date.now();
      if (isNaN(s) || s < a) return;
      let n = 1440,
        i = 7 * n,
        r = 30 * n,
        o = Math.round((s - a) / 6e4),
        d = e => Math.round(o / e);
      return t = o >= r ? l.default.Messages.DURATION_MONTHS.format({
        months: d(r)
      }) : o >= i ? l.default.Messages.DURATION_WEEKS.format({
        weeks: d(i)
      }) : o >= n ? l.default.Messages.DURATION_DAYS.format({
        days: d(n)
      }) : o >= 60 ? l.default.Messages.DURATION_HOURS.format({
        hours: d(60)
      }) : l.default.Messages.DURATION_MINUTES.format({
        minutes: o
      })
    }(null == e ? void 0 : null === (s = e.rejection) || void 0 === s ? void 0 : s.can_reapply_at);
  return {
    isApplicationRejected: n,
    requestCooldownDuration: i
  }
}