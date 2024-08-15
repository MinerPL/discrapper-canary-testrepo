a.d(n, {
  Z: function() {
return u;
  }
});
var r = a(735250);
a(470079);
var s = a(442837),
  i = a(481060),
  d = a(493683),
  t = a(592125),
  o = a(594174),
  l = a(689938);

function u(e, n) {
  let a = (0, s.e7)([o.default], () => o.default.getCurrentUser(), []),
u = (0, s.e7)([t.Z], () => t.Z.getChannel(n), [n]);
  return null == u || u.isOwner(e) || null == a || !u.isOwner(a.id) ? null : (0, r.jsx)(i.MenuItem, {
id: 'remove',
label: l.Z.Messages.REMOVE_FROM_GROUP,
action: () => d.Z.removeRecipient(n, e),
color: 'danger'
  });
}