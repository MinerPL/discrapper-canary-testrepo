"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
});
var a = s("581050"),
  l = s("689938");

function n(e) {
  var t, s;
  let n = (null == e ? void 0 : null === (t = e.latestRequest) || void 0 === t ? void 0 : t.state) === a.CreatorMonetizationApplicationState.REJECTED;
  return {
    isApplicationRejected: n,
    requestCooldownDuration: function(e) {
      let t;
      if (null == e) return;
      let s = Date.parse(e),
        a = Date.now();
      if (isNaN(s) || s < a) return;
      let n = 1440,
        i = 10080,
        r = 43200,
        o = Math.round((s - a) / 6e4),
        d = e => Math.round(o / e);
      return t = o >= 43200 ? l.default.Messages.DURATION_MONTHS.format({
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
    }(null == e ? void 0 : null === (s = e.rejection) || void 0 === s ? void 0 : s.can_reapply_at)
  }
}