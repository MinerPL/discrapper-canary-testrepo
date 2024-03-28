"use strict";
s.r(t), s.d(t, {
  useResponseOnUserState: function() {
    return u
  }
});
var a = s("442837"),
  i = s("78839"),
  r = s("74538"),
  n = s("104494"),
  l = s("639119"),
  o = s("474936");

function u(e) {
  let {
    defaultResponse: t,
    onDiscountOffer: s,
    onNonSubscriber: u,
    onTier0TrialOffer: d,
    onTier2TrialOffer: c,
    onTier0TrialPeriod: _,
    onTier2TrialPeriod: E,
    onNonTier2Subscriber: T,
    onTier2Subscriber: I,
    onCustomCriteria: R
  } = e, S = (0, l.usePremiumTrialOffer)(), f = (0, n.usePremiumDiscountOffer)(), m = (0, a.useStateFromStores)([i.default], () => i.default.getPremiumTypeSubscription()), N = r.default.getPremiumTypeFromSubscription(m);
  if (null != R) {
    let e = R();
    if (null != e) return e
  }
  return null != S && (0, o.SubscriptionTrials)[S.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_0) ? null != d ? d : t : null != S && (0, o.SubscriptionTrials)[S.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_2) ? null != c ? c : t : null != m && null != m.trialId && N === o.PremiumTypes.TIER_0 ? null != _ ? _ : t : null != m && null != m.trialId && N === o.PremiumTypes.TIER_2 ? null != E ? E : t : null != f ? null != s ? s : t : null == N ? null != u ? u : t : N === o.PremiumTypes.TIER_0 || N === o.PremiumTypes.TIER_1 ? null != T ? T : t : N === o.PremiumTypes.TIER_2 ? null != I ? I : t : t
}