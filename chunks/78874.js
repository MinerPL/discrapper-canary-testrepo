"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
});
var n = a("735250");
a("470079");
var l = a("442837"),
  i = a("481060"),
  u = a("594190"),
  r = a("757266"),
  d = a("283595"),
  s = a("417363"),
  o = a("804739"),
  c = a("346329"),
  f = a("592745"),
  I = a("689938");

function A(e, t) {
  let a = (0, l.useStateFromStores)([u.default], () => u.default.getRunningVerifiedApplicationIds().includes(e.id), [e.id]),
    A = (0, l.useStateFromStores)([d.default, f.default, s.default, r.default], () => (0, o.isLaunchable)({
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
    action: () => c.playApplication(e.id, e, {
      analyticsParams: {
        location: t
      }
    })
  })
}