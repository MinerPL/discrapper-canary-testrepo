"use strict";
n.r(t);
var s, a, l, i, r = n("442837"),
  o = n("570140");
let u = [];
class d extends(i = r.default.Store) {
  getEligibleGuildsForNagActivate() {
    return u
  }
}
l = "CreatorMonetizationMarketingStore", (a = "displayName") in(s = d) ? Object.defineProperty(s, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = l, t.default = new d(o.default, {
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function(e) {
    let {
      eligibleGuilds: t
    } = e;
    u = t
  }
})