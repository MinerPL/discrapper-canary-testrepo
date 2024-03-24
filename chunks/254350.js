"use strict";
n.r(t), n.d(t, {
  isInTrialRedemption: function() {
    return a
  },
  default: function() {
    return i
  }
});
var l = n("917247"),
  u = n("646718");

function a(e) {
  let {
    userTrialOffer: t,
    isGift: n,
    skuId: l
  } = e;
  return !n && null != t && null != l && (0, u.SubscriptionTrials)[t.trial_id].skus.includes(l)
}

function i(e) {
  let {
    isGift: t,
    skuId: n,
    referralTrialOfferId: a
  } = e, i = (0, l.usePremiumTrialOffer)(a);
  return !t && null != i && null != n && (0, u.SubscriptionTrials)[i.trial_id].skus.includes(n)
}