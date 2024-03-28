"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("145597");

function r(e, t) {
  if (__OVERLAY__) {
    let e = t.getGame(),
      n = (0, l.getPID)();
    return null == e || null == n ? null : {
      id: e.id,
      pid: n,
      pidPath: [],
      nativeProcessObserverId: 0,
      hidden: !1,
      elevated: !1,
      name: e.name,
      lastFocused: 0,
      exePath: "",
      exeName: "",
      cmdLine: "",
      processName: "",
      distributor: null,
      windowHandle: null,
      fullscreenType: 0
    }
  }
  return e.getVisibleGame()
}