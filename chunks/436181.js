"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140);
let u = null,
  _ = !1;
class d extends(o = a.ZP.Store) {
  getLastProgress() {
    return u
  }
  isRunning() {
    return _
  }
}
s = "DispatchApplicationLaunchSetupStore", (r = "displayName") in(i = d) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new d(l.Z, {
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
    _ = !0
  },
  DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function(e) {
    let {
      progress: t,
      total: n,
      name: i
    } = e;
    u = {
      progress: t,
      total: n,
      name: i
    }
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function() {
    u = null, _ = !1
  }
})