t.d(n, {
  W: function() {
return m;
  },
  Z: function() {
return I;
  }
});
var i = t(735250);
t(470079);
var a = t(913527),
  l = t.n(a),
  r = t(442837),
  o = t(481060),
  s = t(768943),
  u = t(962796),
  d = t(742989),
  c = t(550727),
  E = t(448239),
  M = t(689938);

function I(e) {
  let {
showReminders: n
  } = d.Z.useExperiment({
location: 'use_message_reminders_item'
  }, {
autoTrackExposure: !1
  }), t = (0, r.e7)([s.Z], () => s.Z.isMessageReminder(e.id)), a = m(e, n => (0, u.HG)({
channelId: e.channel_id,
messageId: e.id,
dueAt: l()().add(n, 'millisecond').toDate()
  }));
  return n ? (0, i.jsx)(o.MenuItem, {
id: 'mark-todo',
label: t ? M.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : M.Z.Messages.MESSAGE_REMINDERS_REMIND_ME,
icon: t ? (0, o.makeIconCompat)(E.Z) : void 0,
action: () => t ? (0, u.bn)({
  channelId: e.channel_id,
  messageId: e.id
}) : (0, u.HG)({
  channelId: e.channel_id,
  messageId: e.id
}),
children: t ? null : a
  }) : null;
}

function m(e, n) {
  return c.B.map(e => {
let {
  duration: t,
  getLabel: a
} = e;
return (0, i.jsx)(o.MenuItem, {
  id: 'mark-todo-'.concat(t),
  label: a(),
  action: () => n(t)
}, t);
  });
}