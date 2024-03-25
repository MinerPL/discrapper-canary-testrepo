"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("37983");
s("884691");
var r = s("414456"),
  i = s.n(r),
  n = s("146606"),
  l = s("65597"),
  o = s("206230"),
  u = s("154889"),
  d = s("917247"),
  c = s("218435"),
  _ = s("881155"),
  E = s("646718"),
  T = s("49111"),
  I = s("589323"),
  f = function(e) {
    var t, s;
    let {
      isVisible: r,
      isFullscreen: f,
      subscriptionTier: R
    } = e, S = null === (t = (0, d.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, m = (0, u.usePremiumDiscountOffer)(), N = (0, u.discountOfferHasTier)(m, E.PremiumSubscriptionSKUs.TIER_2) ? E.PremiumSubscriptionSKUs.TIER_2 : void 0, A = (0, l.useStateFromStores)([o.default], () => o.default.useReducedMotion), p = (0, n.useSpring)({
      transform: r ? "translateY(-100%)" : "translateY(0%)",
      opacity: r ? 1 : 0,
      config: {
        tension: 120,
        friction: 12
      },
      immediate: A
    }), C = {
      section: T.AnalyticsSections.MARKETING_FLOATING_CTA
    };
    return (0, a.jsx)(n.animated.div, {
      className: i(I.wrapper, {
        [I.fullscreenWrapper]: f,
        [I.invisible]: !r
      }),
      style: p,
      children: (0, a.jsxs)("div", {
        className: I.innerWrapper,
        children: [(0, a.jsx)(_.default, {
          className: I.button,
          shinyButtonClassName: I.shinyButton,
          subscriptionTier: null !== (s = null != R ? R : null == S ? void 0 : S.sku_id) && void 0 !== s ? s : N,
          premiumModalAnalyticsLocation: C,
          isPersistentCTA: !0
        }), (0, a.jsx)(c.default, {
          className: I.button,
          premiumModalAnalyticsLocation: C
        })]
      })
    })
  }