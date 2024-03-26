"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("37983");
s("884691");
var r = s("819855"),
  i = s("77078"),
  n = s("841098"),
  l = s("719923"),
  o = s("154889"),
  u = s("917247"),
  d = s("635956"),
  c = s("646718"),
  _ = s("782340"),
  E = s("947111");
let T = e => {
    let {
      showTrialCTA: t,
      subscriptionTier: s,
      shouldShowUpsells: a,
      trialDurationCopy: r,
      isPersistentCTA: i,
      subscriptionTrial: n
    } = e;
    if (t && (s === c.PremiumSubscriptionSKUs.TIER_2 || i)) return (0, l.formatTrialCtaIntervalDuration)({
      intervalType: null == n ? void 0 : n.interval,
      intervalCount: null == n ? void 0 : n.interval_count
    });
    if (t) return _.default.Messages.GET_FREE_TRIAL.format({
      freeTrialText: r
    });
    if (a && s === c.PremiumSubscriptionSKUs.TIER_2) return _.default.Messages.BOGO_CHANGE_LOG_REDEEM
  },
  I = (e, t, s, a) => t || s ? _.default.Messages.PREMIUM_DISCOUNT_CTA_WITHOUT_PERCENT : e === c.PremiumSubscriptionSKUs.TIER_2 ? _.default.Messages.PREMIUM_DISCOUNT_CTA.format({
    percent: a
  }) : void 0;
var f = e => {
  var t;
  let {
    forceInverted: s,
    subscriptionTier: c,
    isEligibleForBogoPromotion: f = !1,
    isPersistentCTA: S = !1,
    useShorterCTA: R = !1,
    ...m
  } = e, A = (0, n.default)(), N = (0, r.isThemeDark)(A) || s, p = null === (t = (0, u.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, C = (0, l.formatTrialOfferIntervalDuration)({
    intervalType: null == p ? void 0 : p.interval,
    intervalCount: null == p ? void 0 : p.interval_count
  }), g = (0, o.usePremiumDiscountOffer)(), O = null != p && c === p.sku_id, P = f ? _.default.Messages.BOGO_CLAIM_OFFER : null != g ? I(c, R, S, g.discount.amount) : T({
    showTrialCTA: O,
    subscriptionTier: c,
    shouldShowUpsells: !1,
    trialDurationCopy: C,
    isPersistentCTA: S,
    subscriptionTrial: p
  });
  return (0, a.jsx)(d.default, {
    color: i.ButtonColors.BRAND,
    look: N ? i.ButtonLooks.INVERTED : void 0,
    buttonShineClassName: "buttonShineClassName" in m ? m.buttonShineClassName : N ? E.brandShine : void 0,
    trialId: null == p ? void 0 : p.id,
    buttonText: P,
    buttonTextClassName: O ? E.freeTrialText : void 0,
    onlyShineOnHover: !0,
    subscriptionTier: c,
    ...m
  })
}