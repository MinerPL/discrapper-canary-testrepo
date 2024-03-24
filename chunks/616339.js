"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var a = s("37983");
s("884691");
var r = s("414456"),
  n = s.n(r),
  i = s("77078"),
  l = s("719923"),
  o = s("837797"),
  u = s("154889"),
  d = s("917247"),
  c = s("907648"),
  _ = s("598739"),
  E = s("449881"),
  T = s("881155"),
  I = s("646718"),
  f = s("782340"),
  R = s("635650"),
  S = e => {
    var t, s;
    let {
      title: r,
      titleClassName: S = "",
      subtitle: m = "",
      description: N = "",
      descriptionCta: A = "",
      isPremiumGetCta: p,
      onCtaClick: C,
      cardVariant: g
    } = e, O = (0, d.usePremiumTrialOffer)(), P = null == O ? void 0 : O.subscription_trial, M = (0, u.usePremiumDiscountOffer)(), h = (0, l.formatTrialCtaIntervalDuration)({
      intervalType: null == P ? void 0 : P.interval,
      intervalCount: null == P ? void 0 : P.interval_count
    }), L = (0, o.useResponseOnUserState)({
      defaultResponse: f.default.Messages.PREMIUM_SETTINGS_GET,
      onNonTier2Subscriber: f.default.Messages.BILLING_SWITCH_PLAN_UPGRADE,
      onTier2TrialOffer: h,
      onTier0TrialOffer: h,
      onDiscountOffer: f.default.Messages.PREMIUM_DISCOUNT_CTA.format({
        percent: null == M ? void 0 : M.discount.amount
      })
    }), x = null != g ? _.CardVariantsInfo[g] : _.CardVariantsInfo[c.CardVariants.DEFAULT];
    return (0, a.jsxs)("div", {
      className: n(R.cardDescription, null == x ? void 0 : null === (t = x.description) || void 0 === t ? void 0 : t.className),
      children: [(0, a.jsx)(E.default, {
        title: r,
        cardVariantStyleInfo: x,
        titleClassName: S,
        subtitle: m,
        description: N
      }), p && (0, a.jsx)(T.default, {
        subscriptionTier: I.PremiumSubscriptionSKUs.TIER_2,
        buttonText: L,
        color: i.Button.Colors.GREEN,
        look: i.Button.Looks.FILLED
      }), 0 !== A.length && (s = null == x ? void 0 : x.descriptionCta, (null == s ? void 0 : s.hideOnHoverComponent) !== !0) && null != C && (0, a.jsx)(i.Button, {
        onClick: C,
        children: A
      })]
    })
  }