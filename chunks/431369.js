"use strict";
s.r(e), s.d(e, {
  calculateAdditionalPlansWithPremiumGuildAdjustment: function() {
    return r
  }
}), s("411104"), s("47120");
var n = s("512722"),
  i = s.n(n),
  l = s("509545"),
  a = s("74538"),
  u = s("474936"),
  o = s("981631");

function r(t, e) {
  let s = l.default.get(t.planId);
  i()(null != s, "missing premium subscription plan");
  let n = l.default.getForSkuAndInterval((0, a.castPremiumSubscriptionAsSkuId)(u.PremiumSubscriptionSKUs.GUILD), s.interval, s.intervalCount);
  i()(null != n, "missing premium guild plan");
  let r = null != t.renewalMutations ? t.renewalMutations.additionalPlans : t.additionalPlans,
    d = (t.status === o.SubscriptionStatusTypes.CANCELED ? 0 : (0, a.getNumPremiumGuildSubscriptions)(r)) + e,
    c = r.filter(t => t.planId !== n.id);
  if (d < 0) throw Error("Invalid adjustment");
  return 0 === d ? c : [...c, {
    planId: n.id,
    quantity: d
  }]
}