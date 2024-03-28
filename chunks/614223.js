"use strict";
n.r(t), n.d(t, {
  getDefaultPlanOneStepCheckout: function() {
    return i
  },
  inOneStepSubscriptionCheckout: function() {
    return s
  },
  planSwitchLoadingShowSpinner: function() {
    return l
  }
});
var a = n("74538"),
  r = n("474936");

function s(e) {
  let {
    isTrial: t,
    isGift: n,
    selectedSkuId: a,
    startedPaymentFlowWithPaymentSources: s
  } = e;
  return !t && !n && null != a && r.ACTIVE_PREMIUM_SKUS.includes(a) && s
}

function l(e, t, n) {
  let a = !1;
  return e && null != t && null == t.invoiceItems.find(e => e.subscriptionPlanId === n.id) && (a = !0), a
}

function i(e, t, n) {
  let s = null != t ? (0, a.getPremiumPlanItem)(t) : null,
    l = r.PREMIUM_SKU_TO_YEARLY_PLAN[e],
    i = null != n ? n : l;
  return null != s ? i === s.planId && i === r.PREMIUM_SKU_TO_MONTHLY_PLAN[e] ? i = r.PREMIUM_SKU_TO_YEARLY_PLAN[e] : i === s.planId && i === r.PREMIUM_SKU_TO_YEARLY_PLAN[e] ? i = r.PREMIUM_SKU_TO_MONTHLY_PLAN[e] : (s.planId === r.SubscriptionPlans.PREMIUM_YEAR_TIER_0 || s.planId === r.SubscriptionPlans.PREMIUM_YEAR_TIER_1) && i === r.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && (i = r.SubscriptionPlans.PREMIUM_YEAR_TIER_2) : i === r.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && (i = r.SubscriptionPlans.PREMIUM_MONTH_TIER_1), i
}