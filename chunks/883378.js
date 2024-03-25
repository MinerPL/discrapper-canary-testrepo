"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
});
var n = a("37983");
a("884691");
var l = a("446674"),
  i = a("77078"),
  u = a("161454"),
  r = a("86878"),
  d = a("686470"),
  s = a("535974"),
  c = a("602043"),
  o = a("780009"),
  f = a("860285"),
  I = a("782340");

function A(e, t) {
  let a = (0, l.useStateFromStores)([u.default], () => u.default.getRunningVerifiedApplicationIds().includes(e.id), [e.id]),
    A = (0, l.useStateFromStores)([d.default, f.default, s.default, r.default], () => (0, c.isLaunchable)({
      LibraryApplicationStore: d.default,
      LaunchableGameStore: f.default,
      DispatchApplicationStore: s.default,
      ConnectedAppsStore: r.default,
      applicationId: e.id,
      branchId: e.branchId
    }), [e.branchId, e.id]);
  return a || !A ? null : (0, n.jsx)(i.MenuItem, {
    id: "launch",
    label: I.default.Messages.APPLICATION_CONTEXT_MENU_LAUNCH,
    action: () => o.playApplication(e.id, e, {
      analyticsParams: {
        location: t
      }
    })
  })
}