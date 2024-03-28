"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  n = s("718017"),
  l = s("399606"),
  o = s("607070"),
  u = s("104494"),
  d = s("639119"),
  c = s("318747"),
  _ = s("409100"),
  E = s("474936"),
  T = s("981631"),
  I = s("450057");
t.default = function(e) {
  var t, s;
  let {
    isVisible: i,
    isFullscreen: R,
    subscriptionTier: S
  } = e, f = null === (t = (0, d.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, m = (0, u.usePremiumDiscountOffer)(), N = (0, u.discountOfferHasTier)(m, E.PremiumSubscriptionSKUs.TIER_2) ? E.PremiumSubscriptionSKUs.TIER_2 : void 0, A = (0, l.useStateFromStores)([o.default], () => o.default.useReducedMotion), p = (0, n.useSpring)({
    transform: i ? "translateY(-100%)" : "translateY(0%)",
    opacity: i ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: A
  }), C = {
    section: T.AnalyticsSections.MARKETING_FLOATING_CTA
  };
  return (0, a.jsx)(n.animated.div, {
    className: r()(I.wrapper, {
      [I.fullscreenWrapper]: R,
      [I.invisible]: !i
    }),
    style: p,
    children: (0, a.jsxs)("div", {
      className: I.innerWrapper,
      children: [(0, a.jsx)(_.default, {
        className: I.button,
        shinyButtonClassName: I.shinyButton,
        subscriptionTier: null !== (s = null != S ? S : null == f ? void 0 : f.sku_id) && void 0 !== s ? s : N,
        premiumModalAnalyticsLocation: C,
        isPersistentCTA: !0
      }), (0, a.jsx)(c.default, {
        className: I.button,
        premiumModalAnalyticsLocation: C
      })]
    })
  })
}