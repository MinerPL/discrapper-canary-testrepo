"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("120356"),
  i = s.n(r),
  n = s("481060"),
  l = s("74538"),
  o = s("773104"),
  u = s("104494"),
  d = s("639119"),
  c = s("176782"),
  _ = s("743612"),
  E = s("409100"),
  T = s("474936"),
  I = s("689938"),
  R = s("955627");
t.default = e => {
  var t;
  let s;
  let {
    title: r,
    titleClassName: f = "",
    subtitle: S = "",
    description: m = "",
    descriptionCta: A = "",
    isPremiumGetCta: N,
    onCtaClick: p,
    cardVariant: g
  } = e, C = (0, d.usePremiumTrialOffer)(), P = null == C ? void 0 : C.subscription_trial, O = (0, u.usePremiumDiscountOffer)(), M = (0, l.formatTrialCtaIntervalDuration)({
    intervalType: null == P ? void 0 : P.interval,
    intervalCount: null == P ? void 0 : P.interval_count
  }), h = (0, o.useResponseOnUserState)({
    defaultResponse: I.default.Messages.PREMIUM_SETTINGS_GET,
    onNonTier2Subscriber: I.default.Messages.BILLING_SWITCH_PLAN_UPGRADE,
    onTier2TrialOffer: M,
    onTier0TrialOffer: M,
    onDiscountOffer: I.default.Messages.PREMIUM_DISCOUNT_CTA.format({
      percent: null == O ? void 0 : O.discount.amount
    })
  }), L = (0, c.useCardVariantsInfo)(g);
  return (0, a.jsxs)("div", {
    className: i()(R.cardDescription, null == L ? void 0 : null === (t = L.description) || void 0 === t ? void 0 : t.className),
    children: [(0, a.jsx)(_.default, {
      title: r,
      cardVariantStyleInfo: L,
      titleClassName: f,
      subtitle: S,
      description: m
    }), N && (0, a.jsx)(E.default, {
      subscriptionTier: T.PremiumSubscriptionSKUs.TIER_2,
      buttonText: h,
      color: n.Button.Colors.GREEN,
      look: n.Button.Looks.FILLED
    }), 0 !== A.length && (null == (s = null == L ? void 0 : L.descriptionCta) ? void 0 : s.hideOnHoverComponent) !== !0 && null != p && (0, a.jsx)(n.Button, {
      onClick: p,
      children: A
    })]
  })
}