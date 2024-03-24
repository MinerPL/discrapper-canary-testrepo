"use strict";
s.r(t), s.d(t, {
  getNumIncludedAndTenureRewardPremiumGuildSubscriptionSlots: function() {
    return n
  }
});
var a = s("719923");

function n(e, t) {
  return a.default.getNumIncludedPremiumGuildSubscriptionSlots(e.planId) + (null != t ? 1 : 0)
}