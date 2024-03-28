"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  },
  isInTrialRedemption: function() {
    return i
  }
});
var u = n("639119"),
  l = n("474936");

function i(e) {
  let {
    userTrialOffer: t,
    isGift: n,
    skuId: u
  } = e;
  return !n && null != t && null != u && (0, l.SubscriptionTrials)[t.trial_id].skus.includes(u)
}

function a(e) {
  let {
    isGift: t,
    skuId: n,
    referralTrialOfferId: i
  } = e, a = (0, u.usePremiumTrialOffer)(i);
  return !t && null != a && null != n && (0, l.SubscriptionTrials)[a.trial_id].skus.includes(n)
}