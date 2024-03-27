"use strict";
s.r(t), s.d(t, {
  useResponseOnUserState: function() {
    return u
  }
});
var a = s("446674"),
  r = s("521012"),
  i = s("719923"),
  n = s("154889"),
  l = s("917247"),
  o = s("646718");

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
    onCustomCriteria: f
  } = e, R = (0, l.usePremiumTrialOffer)(), S = (0, n.usePremiumDiscountOffer)(), m = (0, a.useStateFromStores)([r.default], () => r.default.getPremiumTypeSubscription()), N = i.default.getPremiumTypeFromSubscription(m);
  if (null != f) {
    let e = f();
    if (null != e) return e
  }
  return null != R && (0, o.SubscriptionTrials)[R.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_0) ? null != d ? d : t : null != R && (0, o.SubscriptionTrials)[R.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_2) ? null != c ? c : t : null != m && null != m.trialId && N === o.PremiumTypes.TIER_0 ? null != _ ? _ : t : null != m && null != m.trialId && N === o.PremiumTypes.TIER_2 ? null != E ? E : t : null != S ? null != s ? s : t : null == N ? null != u ? u : t : N === o.PremiumTypes.TIER_0 || N === o.PremiumTypes.TIER_1 ? null != T ? T : t : N === o.PremiumTypes.TIER_2 ? null != I ? I : t : t
}