"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(981631);
let _ = 0;
class d extends(o = a.ZP.Store) {
  getId() {
    return _
  }
}
s = "InstanceIdStore", (r = "displayName") in(i = d) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new d(l.Z, {
  RPC_SERVER_READY: function(e) {
    let {
      port: t
    } = e;
    _ = u.V6Z - t
  }
})