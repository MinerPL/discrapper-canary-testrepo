"use strict";
s.r(t), s.d(t, {
  useCheapestMonthlyPrice: function() {
    return l
  }
});
var a = s("446674"),
  r = s("10514"),
  n = s("719923"),
  i = s("646718");

function l() {
  let e = (0, a.useStateFromStores)([r.default], () => r.default.getForSkuAndInterval((0, n.castPremiumSubscriptionAsSkuId)(i.PremiumSubscriptionSKUs.TIER_0), i.SubscriptionIntervalTypes.MONTH));
  return null != e ? (0, n.getFormattedPriceForPlan)(e) : "…"
}