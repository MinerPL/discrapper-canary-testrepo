"use strict";
n.r(t);
var a, l, s, i, r = n("442837"),
  o = n("570140"),
  u = n("41776");
let d = null,
  c = null;

function f() {
  let e = u.default.mostRecentLurkedGuildId();
  null != e ? (d = e, c = null) : (null != d ? c = d : c = null, d = null)
}
class h extends(i = r.default.Store) {
  initialize() {
    this.syncWith([u.default], f)
  }
  shouldShowPopout(e) {
    return c === e
  }
}
s = "LurkerModePopoutStore", (l = "displayName") in(a = h) ? Object.defineProperty(a, l, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = s, t.default = new h(o.default)