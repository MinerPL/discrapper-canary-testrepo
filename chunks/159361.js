"use strict";
t.d(s, {
  Z: function() {
    return l
  }
});
var n = t(581050),
  i = t(689938);

function l(e) {
  var s, t;
  let l = (null == e ? void 0 : null === (s = e.latestRequest) || void 0 === s ? void 0 : s.state) === n.X.REJECTED;
  return {
    isApplicationRejected: l,
    requestCooldownDuration: function(e) {
      let s;
      if (null == e) return;
      let t = Date.parse(e),
        n = Date.now();
      if (isNaN(t) || t < n) return;
      let l = 1440,
        a = 10080,
        r = 43200,
        o = Math.round((t - n) / 6e4),
        c = e => Math.round(o / e);
      return s = o >= 43200 ? i.Z.Messages.DURATION_MONTHS.format({
        months: c(r)
      }) : o >= a ? i.Z.Messages.DURATION_WEEKS.format({
        weeks: c(a)
      }) : o >= l ? i.Z.Messages.DURATION_DAYS.format({
        days: c(l)
      }) : o >= 60 ? i.Z.Messages.DURATION_HOURS.format({
        hours: c(60)
      }) : i.Z.Messages.DURATION_MINUTES.format({
        minutes: o
      })
    }(null == e ? void 0 : null === (t = e.rejection) || void 0 === t ? void 0 : t.can_reapply_at)
  }
}