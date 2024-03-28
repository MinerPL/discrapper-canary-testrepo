"use strict";
n.r(t);
var s, a, l, i, r = n("442837"),
  o = n("570140"),
  u = n("592125"),
  d = n("757266"),
  c = n("375954");
let f = null;
class E extends(i = r.default.Store) {
  initialize() {
    this.waitFor(u.default, d.default, c.default)
  }
  getApps() {
    return f
  }
}
l = "AuthorizedAppsStore", (a = "displayName") in(s = E) ? Object.defineProperty(s, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = l, t.default = new E(o.default, {
  USER_AUTHORIZED_APPS_UPDATE: function(e) {
    f = e.apps
  }
})