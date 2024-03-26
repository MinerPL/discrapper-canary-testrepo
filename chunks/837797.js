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
  } = e, S = (0, l.usePremiumTrialOffer)(), R = (0, n.usePremiumDiscountOffer)(), m = (0, a.useStateFromStores)([r.default], () => r.default.getPremiumTypeSubscription()), A = i.default.getPremiumTypeFromSubscription(m);
  if (null != f) {
    let e = f();
    if (null != e) return e
  }
  return null != S && (0, o.SubscriptionTrials)[S.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_0) ? null != d ? d : t : null != S && (0, o.SubscriptionTrials)[S.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_2) ? null != c ? c : t : null != m && null != m.trialId && A === o.PremiumTypes.TIER_0 ? null != _ ? _ : t : null != m && null != m.trialId && A === o.PremiumTypes.TIER_2 ? null != E ? E : t : null != R ? null != s ? s : t : null == A ? null != u ? u : t : A === o.PremiumTypes.TIER_0 || A === o.PremiumTypes.TIER_1 ? null != T ? T : t : A === o.PremiumTypes.TIER_2 ? null != I ? I : t : t
}