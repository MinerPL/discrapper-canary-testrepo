"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
});
var a = s("37983");
s("884691");
var r = s("414456"),
  i = s.n(r),
  n = s("77078"),
  l = s("719923"),
  o = s("837797"),
  u = s("154889"),
  d = s("917247"),
  c = s("159764"),
  _ = s("449881"),
  E = s("881155"),
  T = s("646718"),
  I = s("782340"),
  f = s("635650"),
  R = e => {
    var t, s;
    let {
      title: r,
      titleClassName: R = "",
      subtitle: S = "",
      description: m = "",
      descriptionCta: N = "",
      isPremiumGetCta: A,
      onCtaClick: p,
      cardVariant: C
    } = e, g = (0, d.usePremiumTrialOffer)(), O = null == g ? void 0 : g.subscription_trial, P = (0, u.usePremiumDiscountOffer)(), M = (0, l.formatTrialCtaIntervalDuration)({
      intervalType: null == O ? void 0 : O.interval,
      intervalCount: null == O ? void 0 : O.interval_count
    }), h = (0, o.useResponseOnUserState)({
      defaultResponse: I.default.Messages.PREMIUM_SETTINGS_GET,
      onNonTier2Subscriber: I.default.Messages.BILLING_SWITCH_PLAN_UPGRADE,
      onTier2TrialOffer: M,
      onTier0TrialOffer: M,
      onDiscountOffer: I.default.Messages.PREMIUM_DISCOUNT_CTA.format({
        percent: null == P ? void 0 : P.discount.amount
      })
    }), L = (0, c.useCardVariantsInfo)(C);
    return (0, a.jsxs)("div", {
      className: i(f.cardDescription, null == L ? void 0 : null === (t = L.description) || void 0 === t ? void 0 : t.className),
      children: [(0, a.jsx)(_.default, {
        title: r,
        cardVariantStyleInfo: L,
        titleClassName: R,
        subtitle: S,
        description: m
      }), A && (0, a.jsx)(E.default, {
        subscriptionTier: T.PremiumSubscriptionSKUs.TIER_2,
        buttonText: h,
        color: n.Button.Colors.GREEN,
        look: n.Button.Looks.FILLED
      }), 0 !== N.length && (s = null == L ? void 0 : L.descriptionCta, (null == s ? void 0 : s.hideOnHoverComponent) !== !0) && null != p && (0, a.jsx)(n.Button, {
        onClick: p,
        children: N
      })]
    })
  }