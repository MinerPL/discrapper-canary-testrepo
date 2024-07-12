t.d(n, {
  Z: function() {
return c;
  }
});
var l = t(735250);
t(470079);
var i = t(442837),
  u = t(481060),
  s = t(889161),
  r = t(924301),
  a = t(894017),
  d = t(79874),
  E = t(576749),
  o = t(689938);

function c(e) {
  let {
guildEventId: n,
guild: c,
channel: _,
recurrenceId: T,
isRecurrenceItem: N
  } = e, {
canManageGuildEvent: I
  } = (0, s.XJ)(null != _ ? _ : c), Z = (0, i.e7)([r.ZP], () => r.ZP.getGuildScheduledEvent(n)), f = I(Z), g = (0, E.Z)(), M = (0, a.Z)(T, null == Z ? void 0 : Z.id), D = (0, d.zI)(n, T);
  if (!f || null == D || null == Z)
return null;
  let v = null != Z.recurrence_rule && !N,
S = e => {
  (null == T || e) && !N ? (0, u.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([
      t.e('58023'),
      t.e('45621')
    ]).then(t.bind(t, 779250));
    return t => (0, l.jsx)(e, {
      ...t,
      guildScheduledEventId: n,
      guildId: c.id
    });
  }, g) : null != T && (0, u.openModalLazy)(async () => {
    let {
      default: e
    } = await t.e('27919').then(t.bind(t, 379038));
    return n => (0, l.jsx)(e, {
      ...n,
      guildEvent: Z,
      recurrenceId: T
    });
  }, g);
};
  return (0, l.jsx)(u.MenuItem, {
id: o.Z.Messages.EDIT_EVENT,
label: o.Z.Messages.EDIT_EVENT,
action: v ? void 0 : () => S(!0),
children: v && (0, l.jsxs)(l.Fragment, {
  children: [
    (0, l.jsx)(u.MenuItem, {
      id: o.Z.Messages.EDIT_THIS_EVENT,
      label: o.Z.Messages.EDIT_THIS_EVENT,
      action: () => S(!1),
      disabled: (null == M ? void 0 : M.is_canceled) || D.startTime.getTime() < Date.now()
    }),
    (0, l.jsx)(u.MenuItem, {
      id: o.Z.Messages.EDIT_ALL_EVENTS,
      label: o.Z.Messages.EDIT_ALL_EVENTS,
      action: () => S(!0),
      disabled: new Date(Z.scheduled_start_time).getTime() < Date.now()
    })
  ]
})
  });
}