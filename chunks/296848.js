"use strict";
n.r(e), n.d(e, {
  getOrFetchSubscriptionPlan: function() {
    return m
  },
  getSubscriptionPauseDurations: function() {
    return A
  },
  getSubscriptionSKUs: function() {
    return h
  },
  subscriptionCanDowngrade: function() {
    return S
  },
  subscriptionCanSwitchImmediately: function() {
    return f
  }
}), n("47120"), n("653041"), n("470079");
var i = n("512722"),
  s = n.n(i),
  r = n("913527"),
  a = n.n(r),
  u = n("99945");
n("442837");
var o = n("821849"),
  l = n("509545"),
  c = n("74538"),
  d = n("981631"),
  p = n("474936");

function h(t) {
  return t.items.map(t => {
    let e = l.default.get(t.planId);
    return s()(null != e, "Unable to fetch plan"), e
  }).map(t => t.skuId)
}

function f(t, e, n) {
  let i = t.getCurrentSubscriptionPlanIdForGroup(n);
  return t.type === d.SubscriptionTypes.PREMIUM && null == i || (s()(null != i, "Current subscription has no plan in group"), s()(!(i === p.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && e === p.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), n.indexOf(i) < n.indexOf(e))
}

function S(t, e, n) {
  return !f(t, e, n)
}

function m(t, e) {
  let n = l.default.get(t);
  if (null == n) {
    let n = p.SubscriptionPlanInfo[t];
    s()(null != n, "Missing hardcoded subscriptionPlan: ".concat(t));
    let i = (0, c.castPremiumSubscriptionAsSkuId)(n.skuId);
    !l.default.isFetchingForSKU(i) && (0, o.fetchSubscriptionPlansForSKU)(i, e)
  }
  return n
}

function A(t) {
  let e = Object.keys(u.PauseDuration).filter(t => isNaN(Number(t)));
  if (t.status !== d.SubscriptionStatusTypes.PAUSED) return {
    durations: e,
    currentDaysPaused: 0
  };
  if (null == t.pauseEndsAt) return {
    durations: [],
    currentDaysPaused: 0
  };
  {
    let n = a()(t.currentPeriodStart),
      i = Math.round(a()(t.pauseEndsAt).diff(n, "days", !0)),
      s = [];
    for (let t of e) u.PauseDuration[t] > i && s.push(t);
    return {
      durations: s,
      currentDaysPaused: i
    }
  }
}