"use strict";
s.r(t), s.d(t, {
  useCheapestMonthlyPrice: function() {
    return l
  }
});
var a = s("446674"),
  r = s("10514"),
  i = s("719923"),
  n = s("646718");

function l() {
  let e = (0, a.useStateFromStores)([r.default], () => r.default.getForSkuAndInterval((0, i.castPremiumSubscriptionAsSkuId)(n.PremiumSubscriptionSKUs.TIER_0), n.SubscriptionIntervalTypes.MONTH));
  return null != e ? (0, i.getFormattedPriceForPlan)(e) : "…"
}