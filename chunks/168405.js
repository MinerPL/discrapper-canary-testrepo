t.d(n, {
  Z: function() {
return o;
  }
});
var i = t(735250);
t(470079);
var s = t(481060),
  l = t(665906),
  a = t(50284),
  r = t(689938);

function o(e, n) {
  return (0, l.$R)(n) ? (0, i.jsx)(s.MenuItem, {
id: 'mark-unread',
label: r.Z.Messages.MARK_UNREAD,
action: () => (0, a.Z)(n.id, e.id),
icon: s.ChatMarkUnreadIcon
  }) : null;
}