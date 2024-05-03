"use strict";
n.r(t);
var s, a, l, i, r = n("442837"),
  o = n("570140");
let u = {
  matureAgree: !1
};
class d extends(i = r.default.Store) {
  get didMatureAgree() {
    return u.matureAgree
  }
}
l = "ApplicationStoreSettingsStore", (a = "displayName") in(s = d) ? Object.defineProperty(s, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = l, t.default = new d(o.default, {
  APPLICATION_STORE_MATURE_AGREE: function() {
    u.matureAgree = !0
  }
})