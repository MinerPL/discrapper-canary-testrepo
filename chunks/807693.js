"use strict";
l.r(t);
var r, n, a, u, s = l("442837"),
  i = l("570140");
let o = {};
class d extends(u = s.default.Store) {
  getEULA(e) {
    return o[e]
  }
}
a = "EULAStore", (n = "displayName") in(r = d) ? Object.defineProperty(r, n, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[n] = a, t.default = new d(i.default, {
  EULA_FETCH_SUCCESS: function(e) {
    let {
      eula: t
    } = e;
    o[t.id] = t
  }
})