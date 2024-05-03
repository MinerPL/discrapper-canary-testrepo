"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("780384"),
  i = s("481060"),
  n = s("410030"),
  l = s("74538"),
  o = s("650032"),
  u = s("104494"),
  d = s("639119"),
  c = s("197115"),
  _ = s("474936"),
  E = s("689938"),
  T = s("755427");
let I = e => {
    let {
      showTrialCTA: t,
      subscriptionTier: s,
      shouldShowUpsells: a,
      trialDurationCopy: r,
      isPersistentCTA: i,
      shouldShowReferralTrialCopy: n,
      subscriptionTrial: o
    } = e;
    if (t && n) return E.default.Messages.REFERRAL_PROGRAM_START_TRIAL;
    if (t && (s === _.PremiumSubscriptionSKUs.TIER_2 || i)) return (0, l.formatTrialCtaIntervalDuration)({
      intervalType: null == o ? void 0 : o.interval,
      intervalCount: null == o ? void 0 : o.interval_count
    });
    if (t) return E.default.Messages.GET_FREE_TRIAL.format({
      freeTrialText: r
    });
    else if (a && s === _.PremiumSubscriptionSKUs.TIER_2) return E.default.Messages.BOGO_CHANGE_LOG_REDEEM
  },
  R = (e, t, s, a) => t || s ? E.default.Messages.PREMIUM_DISCOUNT_CTA_WITHOUT_PERCENT : e === _.PremiumSubscriptionSKUs.TIER_2 ? E.default.Messages.PREMIUM_DISCOUNT_CTA.format({
    percent: a
  }) : void 0;
t.default = e => {
  let {
    forceInverted: t,
    subscriptionTier: s,
    isEligibleForBogoPromotion: f = !1,
    isPersistentCTA: S = !1,
    useShorterCTA: m = !1,
    ...A
  } = e, N = (0, n.default)(), p = (0, r.isThemeDark)(N) || t, g = (0, d.usePremiumTrialOffer)(), C = null == g ? void 0 : g.subscription_trial, P = (0, l.formatTrialOfferIntervalDuration)({
    intervalType: null == C ? void 0 : C.interval,
    intervalCount: null == C ? void 0 : C.interval_count
  }), O = (0, u.usePremiumDiscountOffer)(), M = null != C && s === C.sku_id, {
    enabled: h
  } = o.ReferralProgramRecipient.useExperiment({
    location: "SubscribeButton"
  }, {
    autoTrackExposure: !1
  }), L = h && (null == g ? void 0 : g.trial_id) === _.PREMIUM_TIER_2_REFERRAL_TRIAL_ID, x = f ? E.default.Messages.BOGO_CLAIM_OFFER : null != O ? R(s, m, S, O.discount.amount) : I({
    showTrialCTA: M,
    subscriptionTier: s,
    shouldShowUpsells: !1,
    trialDurationCopy: P,
    isPersistentCTA: S,
    shouldShowReferralTrialCopy: L,
    subscriptionTrial: C
  });
  return (0, a.jsx)(c.default, {
    color: i.ButtonColors.BRAND,
    look: p ? i.ButtonLooks.INVERTED : void 0,
    buttonShineClassName: "buttonShineClassName" in A ? A.buttonShineClassName : p ? T.brandShine : void 0,
    trialId: null == C ? void 0 : C.id,
    buttonText: x,
    buttonTextClassName: M ? T.freeTrialText : void 0,
    onlyShineOnHover: !0,
    subscriptionTier: s,
    ...A
  })
}