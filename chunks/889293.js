"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("446674"),
  a = n("913144");
let l = [];
class i extends s.default.Store {
  getEligibleGuildsForNagActivate() {
    return l
  }
}
i.displayName = "CreatorMonetizationMarketingStore";
var r = new i(a.default, {
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function(e) {
    let {
      eligibleGuilds: t
    } = e;
    l = t
  }
})