"use strict";
n.d(t, {
  Q: function() {
    return s
  },
  t: function() {
    return o
  }
});
var i = n(780570),
  r = n(358085);

function s() {
  return (0, r.isWindows)() || (0, r.isMac)()
}

function o(e) {
  let {
    LibraryApplicationStore: t,
    LaunchableGameStore: n,
    DispatchApplicationStore: r,
    ConnectedAppsStore: s,
    applicationId: o,
    branchId: a
  } = e;
  if (s.isConnected(o)) return !0;
  if (null == a && (a = o), r.isLaunchable(o, a)) return !0;
  let l = t.getLibraryApplication(o, a);
  return !(null != l && (0, i.Je)(l)) && n.isLaunchable(o)
}