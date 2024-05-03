"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("120356"),
  i = s.n(r),
  n = s("718017"),
  l = s("399606"),
  o = s("607070"),
  u = s("104494"),
  d = s("639119"),
  c = s("318747"),
  _ = s("409100"),
  E = s("474936"),
  T = s("981631"),
  I = s("49189");
t.default = function(e) {
  var t, s;
  let {
    isVisible: r,
    isFullscreen: R,
    subscriptionTier: f
  } = e, S = null === (t = (0, d.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, m = (0, u.usePremiumDiscountOffer)(), A = (0, u.discountOfferHasTier)(m, E.PremiumSubscriptionSKUs.TIER_2) ? E.PremiumSubscriptionSKUs.TIER_2 : void 0, N = (0, l.useStateFromStores)([o.default], () => o.default.useReducedMotion), p = (0, n.useSpring)({
    transform: r ? "translateY(-100%)" : "translateY(0%)",
    opacity: r ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: N
  }), g = {
    section: T.AnalyticsSections.MARKETING_FLOATING_CTA
  };
  return (0, a.jsx)(n.animated.div, {
    className: i()(I.wrapper, {
      [I.fullscreenWrapper]: R,
      [I.invisible]: !r
    }),
    style: p,
    children: (0, a.jsxs)("div", {
      className: I.innerWrapper,
      children: [(0, a.jsx)(_.default, {
        className: I.button,
        shinyButtonClassName: I.shinyButton,
        subscriptionTier: null !== (s = null != f ? f : null == S ? void 0 : S.sku_id) && void 0 !== s ? s : A,
        premiumModalAnalyticsLocation: g,
        isPersistentCTA: !0
      }), (0, a.jsx)(c.default, {
        className: I.button,
        premiumModalAnalyticsLocation: g
      })]
    })
  })
}