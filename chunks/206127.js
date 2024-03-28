"use strict";
s.r(t), s.d(t, {
  useCheapestMonthlyPrice: function() {
    return l
  }
});
var a = s("442837"),
  i = s("509545"),
  r = s("74538"),
  n = s("474936");

function l() {
  let e = (0, a.useStateFromStores)([i.default], () => i.default.getForSkuAndInterval((0, r.castPremiumSubscriptionAsSkuId)(n.PremiumSubscriptionSKUs.TIER_0), n.SubscriptionIntervalTypes.MONTH));
  return null != e ? (0, r.getFormattedPriceForPlan)(e) : "…"
}