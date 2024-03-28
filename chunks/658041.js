"use strict";
n.r(t), n.d(t, {
  getNextShownUpcomingEventNoticeType: function() {
    return d
  }
});
var l = n("913527"),
  u = n.n(l),
  a = n("709054"),
  s = n("765305");

function d(e, t, n, l) {
  let d = u()(),
    i = new Date(e.scheduled_start_time).getTime(),
    r = {
      start: i - s.EVENT_STARTING_SOON_WINDOW_MILLISECONDS,
      end: i
    };
  if (d.isBetween(r.start, r.end)) {
    if (null != t) {
      let e = u()(t),
        n = e.isBetween(r.start, r.end),
        a = e.isBetween(u()(i).subtract(s.ACKED_RECENTLY_WINDOW_DAYS, "days"), i);
      return n || a && !l ? void 0 : s.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
    }
    return s.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
  }
  let o = a.default.extractTimestamp(e.id),
    c = Math.min((null != n ? n : o) + s.NEW_EVENT_WINDOW_MILLISECONDS, i);
  if (d.isBetween(o, c) && null == t && !l) return s.UpcomingGuildEventNoticeTypes.NEW_EVENT
}