"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  s = n("664336"),
  i = n("397680"),
  r = n("466148"),
  u = n("822516"),
  o = n("393745"),
  d = n("782340"),
  c = n("992831");

function f(e) {
  let {
    guildEvent: t,
    recurrenceId: n
  } = e, f = (0, r.default)(t.id, n), h = (0, i.default)(n, t.id);
  if (null == t) return null;
  let m = (null == t ? void 0 : t.scheduled_start_time) != null ? (0, u.getRecurrenceStatus)(h, f.startTime, new Date(null == t ? void 0 : t.scheduled_start_time)) : null;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.default.Divider, {
      className: c.divider
    }), (0, a.jsx)(o.GuildEventTimeStatus, {
      startTime: f.startTime.toISOString(),
      status: null != m ? m : t.status,
      liveText: d.default.Messages.LIVE_EVENT,
      className: c.eventSchedule,
      textVariant: "text-lg/semibold",
      eventType: t.entity_type,
      guildEventId: null == t ? void 0 : t.id,
      recurrenceId: n
    }), (0, a.jsx)(l.Text, {
      color: "header-secondary",
      variant: "text-md/normal",
      className: c.eventName,
      children: t.name
    })]
  })
}