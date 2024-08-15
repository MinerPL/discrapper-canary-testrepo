t.d(n, {
  Z: function() {
return c;
  }
}), t(47120);
var l = t(735250);
t(470079);
var i = t(442837),
  u = t(481060),
  s = t(889161),
  r = t(924301),
  a = t(482241),
  d = t(894017),
  E = t(79874),
  o = t(689938);

function c(e) {
  let {
guildEventId: n,
recurrenceId: t,
guild: c,
channel: _
  } = e, T = null != t, {
canManageGuildEvent: N
  } = (0, s.XJ)(null != _ ? _ : c), [I, Z] = (0, i.Wu)([r.ZP], () => [
r.ZP.isActive(n),
r.ZP.getGuildScheduledEvent(n)
  ]), f = (0, d.Z)(t, null == Z ? void 0 : Z.id), g = null != Z && N(Z), M = (null == Z ? void 0 : Z.recurrence_rule) != null && !T, D = (0, E.zI)(n, t);
  if (!g || I && !M && !T || T && !T || null == Z || null == D)
return null;
  let {
startTime: v
  } = D;
  if (I && T) {
var S;
if (null == v)
  return null;
let e = new Date(null !== (S = null == f ? void 0 : f.scheduled_start_time) && void 0 !== S ? S : v);
if (new Date() > e)
  return null;
  }
  let O = e => {
(0, u.openModal)(i => (0, l.jsxs)(u.ConfirmModal, {
  ...i,
  header: o.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
  confirmText: M || e ? o.Z.Messages.DELETE_ALL_EVENTS : o.Z.Messages.DELETE_EVENT,
  cancelText: o.Z.Messages.NEVERMIND,
  onConfirm: () => T && !e ? a.Z.deleteRecurrence(c.id, n, t, f) : a.Z.deleteGuildEvent(n, c.id),
  children: [
    (0, l.jsx)(u.Text, {
      variant: 'text-md/normal',
      children: o.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
    }),
    (0, l.jsx)('br', {}),
    (M || e) && (0, l.jsx)(u.Text, {
      variant: 'text-md/normal',
      children: o.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY_IS_RECURRING.format()
    })
  ]
}));
  };
  return (0, l.jsx)(u.MenuItem, {
id: o.Z.Messages.DELETE_EVENT,
label: o.Z.Messages.DELETE_EVENT,
action: T ? void 0 : () => O(),
color: 'danger',
children: T && (0, l.jsxs)(l.Fragment, {
  children: [
    (0, l.jsx)(u.MenuItem, {
      id: o.Z.Messages.DELETE_THIS_EVENT,
      label: o.Z.Messages.DELETE_THIS_EVENT,
      action: () => O(),
      disabled: null == f ? void 0 : f.is_canceled,
      color: 'danger'
    }),
    (0, l.jsx)(u.MenuItem, {
      id: o.Z.Messages.DELETE_ALL_EVENTS_IN_SERIES,
      label: o.Z.Messages.DELETE_ALL_EVENTS_IN_SERIES,
      action: () => O(!0),
      color: 'danger'
    })
  ]
})
  });
}