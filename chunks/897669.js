n.d(t, {
  Z: function() {
return h;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  l = n(665149),
  s = n(894017),
  r = n(79874),
  o = n(854698),
  c = n(390966),
  d = n(689938),
  u = n(417910);

function h(e) {
  let {
guildEvent: t,
recurrenceId: n
  } = e, h = (0, r.ZP)(t, n), p = (0, s.Z)(n, t.id);
  if (null == t)
return null;
  let m = (null == t ? void 0 : t.scheduled_start_time) != null ? (0, o.lh)(p, h.startTime, new Date(null == t ? void 0 : t.scheduled_start_time)) : null;
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(l.ZP.Divider, {
    className: u.divider
  }),
  (0, i.jsx)(c.z, {
    startTime: h.startTime.toISOString(),
    status: null != m ? m : t.status,
    liveText: d.Z.Messages.LIVE_EVENT,
    className: u.eventSchedule,
    textVariant: 'text-lg/semibold',
    eventType: t.entity_type,
    guildEventId: null == t ? void 0 : t.id,
    recurrenceId: n
  }),
  (0, i.jsx)(a.Text, {
    color: 'header-secondary',
    variant: 'text-md/normal',
    className: u.eventName,
    children: t.name
  })
]
  });
}