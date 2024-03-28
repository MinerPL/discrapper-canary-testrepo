"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
}), a("47120");
var n = a("735250");
a("470079");
var l = a("442837"),
  i = a("481060"),
  u = a("594190"),
  r = a("417363"),
  d = a("346329"),
  s = a("981631"),
  o = a("689938");

function c(e) {
  let t = (0, l.useStateFromStores)([u.default], () => u.default.getRunningVerifiedApplicationIds().includes(e.id), [e.id]),
    [a, c] = (0, l.useStateFromStoresArray)([r.default], () => [r.default.isUpToDate(e.id, e.branchId), r.default.shouldPatch(e.id, e.branchId)], [e.branchId, e.id]);
  return a && !t && c ? (0, n.jsx)(i.MenuItem, {
    id: "repair",
    label: o.default.Messages.APPLICATION_CONTEXT_MENU_REPAIR,
    action: () => d.repairApplication(e.id, e.branchId, s.AnalyticsLocations.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
  }) : null
}