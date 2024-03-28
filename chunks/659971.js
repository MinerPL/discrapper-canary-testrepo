"use strict";
n.r(t);
var a, s, l, i, r = n("873546"),
  o = n("442837"),
  u = n("570140");
let d = !1;
class c extends(i = o.default.Store) {
  getIsOpen() {
    return !r.isMobile || d
  }
}
l = "MobileWebSidebarStore", (s = "displayName") in(a = c) ? Object.defineProperty(a, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = l, t.default = new c(u.default, {
  MOBILE_WEB_SIDEBAR_OPEN: function() {
    d = !0
  },
  MOBILE_WEB_SIDEBAR_CLOSE: function() {
    d = !1
  }
})