"use strict";
var i, r = n(442837),
  s = n(570140);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function a() {
  return {
    usageByApplicationId: {},
    shelfOrder: []
  }
}
let l = a();
class u extends(i = r.ZP.PersistedStore) {
  initialize(e) {
    l = {
      ...a(),
      ...null != e ? e : {}
    }
  }
  getState() {
    return l
  }
}
o(u, "displayName", "ActivityShelfStore"), o(u, "persistKey", "ActivityShelfStore"), t.Z = new u(s.Z, {
  LOGOUT: function() {
    l = a()
  }
})