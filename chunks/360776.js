"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  r = s("907002"),
  i = s("65597"),
  u = s("206230"),
  o = s("154889"),
  d = s("917247"),
  c = s("218435"),
  _ = s("881155"),
  E = s("646718"),
  I = s("49111"),
  f = s("895185"),
  T = function(e) {
    var t, s;
    let {
      isVisible: n,
      isFullscreen: T,
      subscriptionTier: S
    } = e, R = null === (t = (0, d.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, m = (0, o.usePremiumDiscountOffer)(), p = (0, o.discountOfferHasTier)(m, E.PremiumSubscriptionSKUs.TIER_2) ? E.PremiumSubscriptionSKUs.TIER_2 : void 0, N = (0, i.default)([u.default], () => u.default.useReducedMotion), g = (0, r.useSpring)({
      transform: n ? "translateY(-100%)" : "translateY(0%)",
      opacity: n ? 1 : 0,
      config: {
        tension: 120,
        friction: 12
      },
      immediate: N
    }), A = {
      section: I.AnalyticsSections.MARKETING_FLOATING_CTA
    };
    return (0, a.jsx)(r.animated.div, {
      className: l(f.wrapper, {
        [f.fullscreenWrapper]: T,
        [f.invisible]: !n
      }),
      style: g,
      children: (0, a.jsxs)("div", {
        className: f.innerWrapper,
        children: [(0, a.jsx)(_.default, {
          className: f.button,
          shinyButtonClassName: f.shinyButton,
          subscriptionTier: null !== (s = null != S ? S : null == R ? void 0 : R.sku_id) && void 0 !== s ? s : p,
          premiumModalAnalyticsLocation: A,
          isPersistentCTA: !0
        }), (0, a.jsx)(c.default, {
          className: f.button,
          premiumModalAnalyticsLocation: A
        })]
      })
    })
  }