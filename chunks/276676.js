"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
}), l("222007");
var n = l("884691"),
  s = l("917351"),
  u = l.n(s),
  a = l("446674"),
  i = l("634634"),
  o = l("718517"),
  r = l("299039"),
  d = l("933326"),
  c = l("398604"),
  E = l("822516");

function f(e, t, l) {
  let s = (0, a.useStateFromStores)([c.default], () => c.default.getGuildScheduledEvent(e)),
    f = (0, i.default)(l),
    [h, C] = n.useState(null != l && null != s ? (0, E.generateNextRecurrences)(4, (0, E.getRRule)(l), new Date(s.scheduled_start_time)) : []);
  n.useEffect(() => {
    if (null == f || null == l || null == s || u.isEqual(f, l)) return;
    let e = (0, E.getRRule)(l);
    C((0, E.generateNextRecurrences)(h.length, e, new Date(s.scheduled_start_time)))
  }, [l, h.length, s, f]), n.useEffect(() => {
    if (null == t) return;
    let l = h.map(e => r.default.fromTimestamp(Math.floor(e.getTime() / o.default.Millis.SECOND) * o.default.Millis.SECOND));
    d.default.getGuildEventUserCounts(t, e, l)
  }, [e, t, h]);
  let g = n.useMemo(() => {
    if (null == l || 0 === h.length || (null == s ? void 0 : s.scheduled_start_time) == null) return !1;
    let e = new Date;
    e.setFullYear(e.getFullYear() + E.MAX_YEARS_AHEAD_RECURRING_EVENT);
    let t = h[h.length - 1],
      n = (0, E.getRRule)(l),
      u = n.after(t);
    return null != u && u <= e
  }, [l, h, null == s ? void 0 : s.scheduled_start_time]);
  return {
    recurrenceStartTimes: h,
    canViewMoreRecurrences: g,
    updateRecurrenceStartTimes: () => {
      if (null == l || null == s) return;
      let e = (0, E.getRRule)(l),
        t = h[h.length - 1];
      C([...h, ...(0, E.generateNextRecurrences)(4, e, t, !0)])
    }
  }
}