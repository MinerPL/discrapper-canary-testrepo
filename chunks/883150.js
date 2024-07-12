s.r(n), s.d(n, {
  default: function() {
return _;
  }
});
var t = s(735250);
s(470079);
var i = s(913527),
  a = s.n(i),
  r = s(481060),
  o = s(239091),
  E = s(235047),
  l = s(962796),
  u = s(689938);

function _(e) {
  let {
message: n
  } = e, s = (0, E.W)(n, e => (0, l.dR)(n.id, a()().add(e, 'millisecond').toDate()));
  return (0, t.jsx)(r.Menu, {
navId: 'message-reminder-snooze',
onClose: o.Zy,
'aria-label': u.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
onSelect: () => {},
children: s
  });
}