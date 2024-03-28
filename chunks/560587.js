"use strict";
s.r(t);
var a, n, l, r, i = s("442837"),
  d = s("570140");
let o = {};
class u extends(r = i.default.Store) {
  getBranches(e) {
    var t;
    return null !== (t = o[e]) && void 0 !== t ? t : []
  }
}
l = "ApplicationBranchStore", (n = "displayName") in(a = u) ? Object.defineProperty(a, n, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[n] = l, t.default = new u(d.default, {
  OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function(e) {
    let {
      applicationId: t,
      branches: s
    } = e;
    o[t] = s
  },
  LOGOUT: function() {
    o = {}
  }
})