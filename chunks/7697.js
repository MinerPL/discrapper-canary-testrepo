"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
}), l("47120");
var n = l("470079"),
  s = l("392711"),
  u = l.n(s),
  i = l("442837"),
  a = l("699682"),
  o = l("70956"),
  r = l("709054"),
  d = l("897285"),
  c = l("924301"),
  f = l("854698");

function E(e, t, l) {
  let s = (0, i.useStateFromStores)([c.default], () => c.default.getGuildScheduledEvent(e)),
    E = (0, a.default)(l),
    [h, _] = n.useState(null != l && null != s ? (0, f.generateNextRecurrences)(4, (0, f.getRRule)(l), new Date(s.scheduled_start_time)) : []);
  n.useEffect(() => {
    if (null == E || null == l || null == s || u().isEqual(E, l)) return;
    let e = (0, f.getRRule)(l);
    _((0, f.generateNextRecurrences)(h.length, e, new Date(s.scheduled_start_time)))
  }, [l, h.length, s, E]), n.useEffect(() => {
    if (null == t) return;
    let l = h.map(e => r.default.fromTimestamp(Math.floor(e.getTime() / o.default.Millis.SECOND) * o.default.Millis.SECOND));
    d.default.getGuildEventUserCounts(t, e, l)
  }, [e, t, h]);
  let N = n.useMemo(() => {
    if (null == l || 0 === h.length || (null == s ? void 0 : s.scheduled_start_time) == null) return !1;
    let e = new Date;
    e.setFullYear(e.getFullYear() + f.MAX_YEARS_AHEAD_RECURRING_EVENT);
    let t = h[h.length - 1],
      n = (0, f.getRRule)(l).after(t);
    return null != n && n <= e
  }, [l, h, null == s ? void 0 : s.scheduled_start_time]);
  return {
    recurrenceStartTimes: h,
    canViewMoreRecurrences: N,
    updateRecurrenceStartTimes: () => {
      if (null == l || null == s) return;
      let e = (0, f.getRRule)(l),
        t = h[h.length - 1];
      _([...h, ...(0, f.generateNextRecurrences)(4, e, t, !0)])
    }
  }
}