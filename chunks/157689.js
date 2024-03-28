"use strict";
l.r(t), l.d(t, {
  default: function() {
    return d
  }
});
var n = l("709054"),
  a = l("482241"),
  s = l("854698");

function d(e, t, l, d) {
  let r = (0, s.getBaseScheduleForRecurrence)(t, e),
    i = (0, s.areDatesIdentical)(r.startDate, l.startDate) ? null : l.startDate,
    u = (0, s.areDatesIdentical)(r.endDate, l.endDate) ? null : l.endDate;
  if (null != d) return (0, s.areSchedulesIdentical)(l, r) ? a.default.deleteGuildEventException(e.guild_id, e.id, d.event_exception_id) : a.default.updateGuildEventException({
    scheduled_start_time: null == i ? void 0 : i.toISOString(),
    scheduled_end_time: null == u ? void 0 : u.toISOString(),
    is_canceled: d.is_canceled
  }, e.guild_id, e.id, t);
  {
    let l = n.default.extractTimestamp(t);
    return a.default.createGuildEventException({
      original_scheduled_start_time: new Date(l).toISOString(),
      scheduled_start_time: null == i ? void 0 : i.toISOString(),
      scheduled_end_time: null == u ? void 0 : u.toISOString(),
      is_canceled: !1
    }, e.guild_id, e.id)
  }
}