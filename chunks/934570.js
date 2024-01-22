"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  r = s("446674"),
  i = s("77078"),
  u = s("915639"),
  o = s("521012"),
  d = s("909469"),
  c = s("485138"),
  _ = s("218435"),
  E = s("881155"),
  I = s("646718"),
  f = s("49111"),
  T = s("456217"),
  S = function(e) {
    let {
      localizedPricingPromo: t,
      smallGap: s
    } = e, n = t.countryCode, S = (0, r.useStateFromStores)([u.default], () => u.default.locale);
    (0, c.useTrackLocalizedPricingPromoImpression)(f.AnalyticsSections.SETTINGS_PREMIUM_BANNER, n);
    let R = (0, r.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()),
      {
        localizedPricingBannerHeader: m,
        localizedPricingBannerBody: p
      } = (0, d.getLocalizedPricingBannerStrings)({
        localizedPricingPromo: t,
        subscription: R,
        userLocale: S
      }),
      N = n.toLowerCase() + "Banner";
    return (0, a.jsxs)("div", {
      className: l(T.bannerContainer, {
        [T.smallGap]: s,
        [T.bigGap]: !s
      }),
      children: [(0, a.jsx)("div", {
        className: l(T[N], T.bannerImageContainer)
      }), (0, a.jsx)(i.Heading, {
        className: T.bannerHeading,
        variant: "heading-xl/semibold",
        children: m
      }), (0, a.jsx)("div", {
        className: T.textContainer,
        children: (0, a.jsx)(i.Text, {
          color: "none",
          variant: "text-md/normal",
          className: T.bannerBody,
          children: p
        })
      }), (0, a.jsxs)("div", {
        className: T.ctaButtonContainer,
        children: [(0, a.jsx)(E.default, {
          forceInverted: !0,
          className: T.ctaButton,
          subscriptionTier: I.PremiumSubscriptionSKUs.TIER_2
        }), (0, a.jsx)(_.default, {
          forceWhite: !0,
          subscriptionTier: I.PremiumSubscriptionSKUs.TIER_2,
          className: T.ctaButton
        })]
      })]
    })
  }