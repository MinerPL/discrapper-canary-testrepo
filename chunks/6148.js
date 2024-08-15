t.d(n, {
  Z: function() {
return c;
  }
});
var i = t(735250);
t(470079);
var a = t(442837),
  l = t(481060),
  r = t(904245),
  s = t(665906),
  o = t(314897),
  u = t(418476),
  d = t(689938);

function c(e, n) {
  let t = (0, a.e7)([o.default], () => o.default.getId()),
c = (0, s.$R)(n),
E = (0, s.Gu)(n);
  return (0, u.Z)(e, t) && c && !E ? (0, i.jsx)(l.MenuItem, {
id: 'edit',
label: d.Z.Messages.EDIT_MESSAGE,
action: () => r.Z.startEditMessage(n.id, e.id, e.content),
icon: l.PencilIcon
  }) : null;
}