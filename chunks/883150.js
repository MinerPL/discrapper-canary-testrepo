a.r(n), a.d(n, {
  default: function() {
return _;
  }
});
var s = a(735250);
a(470079);
var i = a(913527),
  t = a.n(i),
  d = a(481060),
  l = a(239091),
  r = a(235047),
  o = a(962796),
  E = a(689938);

function _(e) {
  let {
message: n
  } = e, a = (0, r.W)(n, e => (0, o.HG)({
channelId: n.channel_id,
messageId: n.id,
dueAt: t()().add(e, 'millisecond').toDate()
  }));
  return (0, s.jsx)(d.Menu, {
navId: 'message-reminder-snooze',
onClose: l.Zy,
'aria-label': E.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
onSelect: () => {},
children: a
  });
}