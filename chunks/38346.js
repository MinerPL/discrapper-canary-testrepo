"use strict";
a.r(t), a.d(t, {
  default: function() {
    return I
  }
});
var n = a("735250");
a("470079");
var l = a("442837"),
  i = a("481060"),
  u = a("943094"),
  r = a("594190"),
  d = a("173747"),
  s = a("417363"),
  o = a("346329"),
  c = a("981631"),
  f = a("689938");

function I(e) {
  let t = (0, l.useStateFromStores)([r.default], () => r.default.getRunningVerifiedApplicationIds().includes(e.id), [e.id]),
    a = (0, l.useStateFromStores)([s.default], () => s.default.isInstalled(e.id, e.branchId), [e.branchId, e.id]),
    I = (0, l.useStateFromStores)([d.default], () => d.default.getTargetManifests(e.id, e.branchId), [e.branchId, e.id]);
  if (a) return t ? null : (0, n.jsx)(i.MenuItem, {
    id: "uninstall",
    label: f.default.Messages.APPLICATION_CONTEXT_MENU_UNINSTALL,
    action: () => (0, u.uninstallBranchPrompt)(e.id, e.branchId, c.AnalyticsLocations.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
  });
  return null == I ? null : (0, n.jsx)(i.MenuItem, {
    id: "install",
    label: f.default.Messages.APPLICATION_CONTEXT_MENU_INSTALL,
    action: () => o.installApplication(e.id, e.branchId, c.AnalyticsLocations.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
  })
}