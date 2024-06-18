"use strict";
n(47120);
var i = n(570140),
  r = n(147913),
  s = n(885110);
class o extends r.Z {
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "stores", i = new Map().set(s.Z, a), n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}

function a() {
  i.Z.dispatch({
    type: "SELF_PRESENCE_STORE_UPDATE",
    status: s.Z.getStatus(),
    activities: s.Z.getActivities()
  })
}
t.Z = new o