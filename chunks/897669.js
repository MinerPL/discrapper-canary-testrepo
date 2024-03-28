"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("502568"),
  i = n("894017"),
  r = n("79874"),
  o = n("854698"),
  u = n("390966"),
  d = n("689938"),
  c = n("449160");

function f(e) {
  let {
    guildEvent: t,
    recurrenceId: n
  } = e, f = (0, r.default)(t.id, n), h = (0, i.default)(n, t.id);
  if (null == t) return null;
  let m = (null == t ? void 0 : t.scheduled_start_time) != null ? (0, o.getRecurrenceStatus)(h, f.startTime, new Date(null == t ? void 0 : t.scheduled_start_time)) : null;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.default.Divider, {
      className: c.divider
    }), (0, a.jsx)(u.GuildEventTimeStatus, {
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