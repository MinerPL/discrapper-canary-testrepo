"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
});
var n = l("299039"),
  a = l("322224"),
  s = l("822516");

function r(e, t, l, r) {
  let d = (0, s.getBaseScheduleForRecurrence)(t, e),
    u = (0, s.areDatesIdentical)(d.startDate, l.startDate) ? null : l.startDate,
    i = (0, s.areDatesIdentical)(d.endDate, l.endDate) ? null : l.endDate;
  if (null != r) return (0, s.areSchedulesIdentical)(l, d) ? a.default.deleteGuildEventException(e.guild_id, e.id, r.event_exception_id) : a.default.updateGuildEventException({
    scheduled_start_time: null == u ? void 0 : u.toISOString(),
    scheduled_end_time: null == i ? void 0 : i.toISOString(),
    is_canceled: r.is_canceled
  }, e.guild_id, e.id, t);
  {
    let l = n.default.extractTimestamp(t);
    return a.default.createGuildEventException({
      original_scheduled_start_time: new Date(l).toISOString(),
      scheduled_start_time: null == u ? void 0 : u.toISOString(),
      scheduled_end_time: null == i ? void 0 : i.toISOString(),
      is_canceled: !1
    }, e.guild_id, e.id)
  }
}