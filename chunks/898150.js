s.r(n), s.d(n, {
  MESSAGE_REMINDER_DURATION_ITEMS: function() {
return d;
  },
  MessageReminderEditMenu: function() {
return o;
  },
  useMessageReminderDurationSuggestions: function() {
return c;
  }
}), s(653041);
var t = s(735250);
s(470079);
var a = s(913527),
  i = s.n(a),
  r = s(481060),
  l = s(239091),
  u = s(70956),
  E = s(324701),
  M = s(689938);
let d = [{
duration: 30 * u.Z.Millis.MINUTE,
getLabel: () => M.Z.Messages.MESSAGE_REMINDERS_IN_THIRTY_MIN
  },
  {
duration: u.Z.Millis.HOUR,
getLabel: () => M.Z.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR
  },
  {
duration: 2 * u.Z.Millis.HOUR,
getLabel: () => M.Z.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS
  },
  {
duration: 4 * u.Z.Millis.HOUR,
getLabel: () => M.Z.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS
  }
];

function c(e) {
  let {
onSelectDuration: n,
showCustom: s = !0
  } = e, a = d.map(e => {
let {
  duration: s,
  getLabel: a
} = e;
return (0, t.jsx)(r.MenuItem, {
  id: 'create-reminder-'.concat(s),
  label: a(),
  action: () => n(s)
}, s);
  });
  return s && a.push((0, t.jsx)(r.MenuItem, {
id: 'create-reminder-custom',
label: M.Z.Messages.MESSAGE_REMINDERS_CUSTOM_DUE,
action: () => null
  }, 'custom')), a;
}

function o(e) {
  let {
message: n,
label: s
  } = e, a = c({
onSelectDuration: e => (0, E.z)({
  channelId: n.channel_id,
  messageId: n.id,
  dueAt: i()().add(e, 'millisecond').toDate()
})
  });
  return (0, t.jsx)(r.Menu, {
navId: 'message-reminder-create',
onClose: l.Zy,
'aria-label': M.Z.Messages.MESSAGE_REMINDERS_CREATE,
onSelect: () => null,
children: (0, t.jsx)(r.MenuGroup, {
  label: s,
  children: a
})
  });
}