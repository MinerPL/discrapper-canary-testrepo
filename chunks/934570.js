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
  n = s("446674"),
  l = s("77078"),
  o = s("915639"),
  u = s("521012"),
  d = s("909469"),
  c = s("485138"),
  _ = s("218435"),
  E = s("881155"),
  T = s("646718"),
  I = s("49111"),
  f = s("924509"),
  R = function(e) {
    let {
      localizedPricingPromo: t,
      smallGap: s
    } = e, r = t.countryCode, R = (0, n.useStateFromStores)([o.default], () => o.default.locale);
    (0, c.useTrackLocalizedPricingPromoImpression)(I.AnalyticsSections.SETTINGS_PREMIUM_BANNER, r);
    let S = (0, n.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription()),
      {
        localizedPricingBannerHeader: m,
        localizedPricingBannerBody: N
      } = (0, d.getLocalizedPricingBannerStrings)({
        localizedPricingPromo: t,
        subscription: S,
        userLocale: R
      }),
      A = r.toLowerCase() + "Banner";
    return (0, a.jsxs)("div", {
      className: i(f.bannerContainer, {
        [f.smallGap]: s,
        [f.bigGap]: !s
      }),
      children: [(0, a.jsx)("div", {
        className: i(f[A], f.bannerImageContainer)
      }), (0, a.jsx)(l.Heading, {
        className: f.bannerHeading,
        variant: "heading-xl/semibold",
        children: m
      }), (0, a.jsx)("div", {
        className: f.textContainer,
        children: (0, a.jsx)(l.Text, {
          color: "none",
          variant: "text-md/normal",
          className: f.bannerBody,
          children: N
        })
      }), (0, a.jsxs)("div", {
        className: f.ctaButtonContainer,
        children: [(0, a.jsx)(E.default, {
          forceInverted: !0,
          className: f.ctaButton,
          subscriptionTier: T.PremiumSubscriptionSKUs.TIER_2
        }), (0, a.jsx)(_.default, {
          forceWhite: !0,
          subscriptionTier: T.PremiumSubscriptionSKUs.TIER_2,
          className: f.ctaButton
        })]
      })]
    })
  }