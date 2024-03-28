"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
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
  R = s("622481");
t.default = e => {
  var t;
  let s;
  let {
    title: i,
    titleClassName: S = "",
    subtitle: f = "",
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
    className: r()(R.cardDescription, null == L ? void 0 : null === (t = L.description) || void 0 === t ? void 0 : t.className),
    children: [(0, a.jsx)(_.default, {
      title: i,
      cardVariantStyleInfo: L,
      titleClassName: S,
      subtitle: f,
      description: m
    }), A && (0, a.jsx)(E.default, {
      subscriptionTier: T.PremiumSubscriptionSKUs.TIER_2,
      buttonText: h,
      color: n.Button.Colors.GREEN,
      look: n.Button.Looks.FILLED
    }), 0 !== N.length && (null == (s = null == L ? void 0 : L.descriptionCta) ? void 0 : s.hideOnHoverComponent) !== !0 && null != p && (0, a.jsx)(n.Button, {
      onClick: p,
      children: N
    })]
  })
}