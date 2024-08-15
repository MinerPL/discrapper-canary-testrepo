s.r(n), s.d(n, {
  default: function() {
return M;
  }
});
var t = s(735250);
s(470079);
var a = s(913527),
  i = s.n(a),
  r = s(481060),
  l = s(239091),
  u = s(324701),
  d = s(898150),
  o = s(689938);

function M(e) {
  let {
message: n
  } = e, s = (0, d.useMessageReminderDurationSuggestions)({
onSelectDuration: e => (0, u.z)({
  channelId: n.channel_id,
  messageId: n.id,
  dueAt: i()().add(e, 'millisecond').toDate()
})
  });
  return (0, t.jsx)(r.Menu, {
navId: 'message-reminder-snooze',
onClose: l.Zy,
'aria-label': o.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
onSelect: () => {},
children: s
  });
}