"use strict";
s.r(t), s.d(t, {
  useCheapestMonthlyPrice: function() {
    return i
  }
});
var a = s("446674"),
  n = s("10514"),
  l = s("719923"),
  r = s("646718");

function i() {
  let e = (0, a.useStateFromStores)([n.default], () => n.default.getForSkuAndInterval(r.PremiumSubscriptionSKUs.TIER_0, r.SubscriptionIntervalTypes.MONTH));
  return null != e ? (0, l.getFormattedPriceForPlan)(e) : "…"
}