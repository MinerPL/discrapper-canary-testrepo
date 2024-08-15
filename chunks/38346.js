t.d(e, {
  Z: function() {
return A;
  }
});
var i = t(735250);
t(470079);
var a = t(442837),
  l = t(481060),
  r = t(943094),
  d = t(594190),
  s = t(173747),
  u = t(417363),
  c = t(346329),
  I = t(981631),
  o = t(689938);

function A(n) {
  let e = (0, a.e7)([d.ZP], () => d.ZP.getRunningVerifiedApplicationIds().includes(n.id), [n.id]),
t = (0, a.e7)([u.Z], () => u.Z.isInstalled(n.id, n.branchId), [
  n.branchId,
  n.id
]),
A = (0, a.e7)([s.Z], () => s.Z.getTargetManifests(n.id, n.branchId), [
  n.branchId,
  n.id
]);
  if (t)
return e ? null : (0, i.jsx)(l.MenuItem, {
  id: 'uninstall',
  label: o.Z.Messages.APPLICATION_CONTEXT_MENU_UNINSTALL,
  action: () => (0, r.W)(n.id, n.branchId, I.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
});
  return null == A ? null : (0, i.jsx)(l.MenuItem, {
id: 'install',
label: o.Z.Messages.APPLICATION_CONTEXT_MENU_INSTALL,
action: () => c.installApplication(n.id, n.branchId, I.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
  });
}