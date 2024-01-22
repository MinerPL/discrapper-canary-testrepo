"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("37983");
s("884691");
var n = s("819855"),
  l = s("77078"),
  r = s("841098"),
  i = s("719923"),
  u = s("154889"),
  o = s("917247"),
  d = s("635956"),
  c = s("646718"),
  _ = s("782340"),
  E = s("204859");
let I = e => {
    let {
      showTrialCTA: t,
      subscriptionTier: s,
      shouldShowUpsells: a,
      trialDurationCopy: n,
      isPersistentCTA: l,
      subscriptionTrial: r
    } = e;
    if (t && (s === c.PremiumSubscriptionSKUs.TIER_2 || l)) return (0, i.formatTrialCtaIntervalDuration)({
      intervalType: null == r ? void 0 : r.interval,
      intervalCount: null == r ? void 0 : r.interval_count
    });
    if (t) return _.default.Messages.GET_FREE_TRIAL.format({
      freeTrialText: n
    });
    if (a && s === c.PremiumSubscriptionSKUs.TIER_2) return _.default.Messages.BOGO_CHANGE_LOG_REDEEM
  },
  f = (e, t, s, a) => t || s ? _.default.Messages.PREMIUM_DISCOUNT_CTA_WITHOUT_PERCENT : e === c.PremiumSubscriptionSKUs.TIER_2 ? _.default.Messages.PREMIUM_DISCOUNT_CTA.format({
    percent: a
  }) : void 0;
var T = e => {
  var t;
  let {
    forceInverted: s,
    subscriptionTier: c,
    isEligibleForBogoPromotion: T = !1,
    isPersistentCTA: S = !1,
    useShorterCTA: R = !1,
    ...m
  } = e, p = (0, r.default)(), N = (0, n.isThemeDark)(p) || s, g = null === (t = (0, o.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, A = (0, i.formatTrialOfferIntervalDuration)({
    intervalType: null == g ? void 0 : g.interval,
    intervalCount: null == g ? void 0 : g.interval_count
  }), P = (0, u.usePremiumDiscountOffer)(), C = null != g && c === g.sku_id, O = T ? _.default.Messages.BOGO_CLAIM_OFFER : null != P ? f(c, R, S, P.discount.amount) : I({
    showTrialCTA: C,
    subscriptionTier: c,
    shouldShowUpsells: !1,
    trialDurationCopy: A,
    isPersistentCTA: S,
    subscriptionTrial: g
  });
  return (0, a.jsx)(d.default, {
    color: l.ButtonColors.BRAND,
    look: N ? l.ButtonLooks.INVERTED : void 0,
    buttonShineClassName: "buttonShineClassName" in m ? m.buttonShineClassName : N ? E.brandShine : void 0,
    trialId: null == g ? void 0 : g.id,
    buttonText: O,
    buttonTextClassName: C ? E.freeTrialText : void 0,
    onlyShineOnHover: !0,
    subscriptionTier: c,
    ...m
  })
}