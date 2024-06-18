"use strict";
n(47120);
var i, r, s, o, a = n(442837),
  l = n(570140);
let u = [];

function _() {
  u = []
}
class d extends(i = a.ZP.Store) {
  hasLayers() {
    return u.length > 0
  }
  getLayers() {
    return u
  }
}
o = "LayerStore", (s = "displayName") in(r = d) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new d(l.Z, {
  LAYER_PUSH: function(e) {
    let {
      component: t
    } = e;
    if (u.indexOf(t) >= 0) return !1;
    u = [...u, t]
  },
  LAYER_POP: function() {
    if (0 === u.length) return !1;
    u = u.slice(0, -1)
  },
  LAYER_POP_ALL: _,
  LOGOUT: _,
  NOTIFICATION_CLICK: _
})