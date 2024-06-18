"use strict";
var r, o, s, a, i = n(442837),
  l = n(570140);
let d = null;
class E extends(a = i.ZP.Store) {
  hasAction() {
    return null != d
  }
  getAction() {
    return d
  }
}

function c(e) {
  d = e.requiredAction
}
s = "UserRequiredActionStore", (o = "displayName") in(r = E) ? Object.defineProperty(r, o, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[o] = s, t.Z = new E(l.Z, {
  CONNECTION_OPEN: c,
  USER_REQUIRED_ACTION_UPDATE: c
})