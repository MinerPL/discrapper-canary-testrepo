E.r(s), E.d(s, {
  MESSAGE_REMINDER_DURATION_ITEMS: function() {
return l;
  },
  MessageReminderEditMenu: function() {
return r;
  }
});
var n = E(735250);
E(470079);
var M = E(913527),
  a = E.n(M),
  t = E(481060),
  _ = E(239091),
  R = E(70956),
  S = E(962796),
  i = E(689938);
let l = [{
duration: 30 * R.Z.Millis.MINUTE,
getLabel: e => e ? i.Z.Messages.MESSAGE_REMINDERS_FOR_THIRTY_MIN : i.Z.Messages.MESSAGE_REMINDERS_IN_THIRTY_MIN
  },
  {
duration: R.Z.Millis.HOUR,
getLabel: e => e ? i.Z.Messages.MESSAGE_REMINDERS_FOR_ONE_HOUR : i.Z.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR
  },
  {
duration: 2 * R.Z.Millis.HOUR,
getLabel: e => e ? i.Z.Messages.MESSAGE_REMINDERS_FOR_TWO_HOURS : i.Z.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS
  },
  {
duration: 4 * R.Z.Millis.HOUR,
getLabel: e => e ? i.Z.Messages.MESSAGE_REMINDERS_FOR_FOUR_HOURS : i.Z.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS
  }
];

function r(e) {
  let {
message: s,
label: E,
isSnooze: M = !1
  } = e, R = function(e) {
let {
  onSelectDuration: s,
  isSnooze: E
} = e;
return l.map(e => {
  let {
    duration: M,
    getLabel: a
  } = e;
  return (0, n.jsx)(t.MenuItem, {
    id: 'create-reminder-'.concat(M),
    label: a(E),
    action: () => s(M)
  }, M);
});
  }({
onSelectDuration: e => (0, S.HG)({
  channelId: s.channel_id,
  messageId: s.id,
  dueAt: a()().add(e, 'millisecond').toDate()
}),
isSnooze: M
  });
  return (0, n.jsx)(t.Menu, {
navId: 'message-reminder-create',
onClose: _.Zy,
'aria-label': i.Z.Messages.MESSAGE_REMINDERS_CREATE,
onSelect: () => null,
children: (0, n.jsxs)(t.MenuGroup, {
  label: E,
  children: [
    R,
    (0, n.jsx)(t.MenuItem, {
      id: 'create-reminder-custom',
      label: i.Z.Messages.MESSAGE_REMINDERS_CUSTOM_DUE,
      action: () => null
    }, 'custom')
  ]
})
  });
}