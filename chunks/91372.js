"use strict";
n.r(t);
var s, a, l, i, r = n("442837"),
  o = n("570140");
let u = "UPDATE_NOT_AVAILABLE";

function d(e) {
  u = e.type
}
class c extends(i = r.default.Store) {
  getState() {
    return u
  }
}
l = "AutoUpdateStore", (a = "displayName") in(s = c) ? Object.defineProperty(s, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = l, t.default = new c(o.default, {
  CHECKING_FOR_UPDATES: d,
  UPDATE_NOT_AVAILABLE: d,
  UPDATE_AVAILABLE: d,
  UPDATE_MANUALLY: d,
  UPDATE_ERROR: d,
  UPDATE_DOWNLOADED: d
})