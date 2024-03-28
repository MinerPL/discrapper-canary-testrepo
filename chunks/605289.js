"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  n = s("442837"),
  l = s("481060"),
  o = s("706454"),
  u = s("78839"),
  d = s("985754"),
  c = s("222727"),
  _ = s("318747"),
  E = s("409100"),
  T = s("474936"),
  I = s("981631"),
  R = s("722354");
t.default = function(e) {
  let {
    localizedPricingPromo: t,
    smallGap: s
  } = e, i = t.countryCode, S = (0, n.useStateFromStores)([o.default], () => o.default.locale);
  (0, c.useTrackLocalizedPricingPromoImpression)(I.AnalyticsSections.SETTINGS_PREMIUM_BANNER, i);
  let f = (0, n.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription()),
    {
      localizedPricingBannerHeader: m,
      localizedPricingBannerBody: N
    } = (0, d.getLocalizedPricingBannerStrings)({
      localizedPricingPromo: t,
      subscription: f,
      userLocale: S
    }),
    A = i.toLowerCase() + "Banner";
  return (0, a.jsxs)("div", {
    className: r()(R.bannerContainer, {
      [R.smallGap]: s,
      [R.bigGap]: !s
    }),
    children: [(0, a.jsx)("div", {
      className: r()(R[A], R.bannerImageContainer)
    }), (0, a.jsx)(l.Heading, {
      className: R.bannerHeading,
      variant: "heading-xl/semibold",
      children: m
    }), (0, a.jsx)("div", {
      className: R.textContainer,
      children: (0, a.jsx)(l.Text, {
        color: "none",
        variant: "text-md/normal",
        className: R.bannerBody,
        children: N
      })
    }), (0, a.jsxs)("div", {
      className: R.ctaButtonContainer,
      children: [(0, a.jsx)(E.default, {
        forceInverted: !0,
        className: R.ctaButton,
        subscriptionTier: T.PremiumSubscriptionSKUs.TIER_2
      }), (0, a.jsx)(_.default, {
        forceWhite: !0,
        subscriptionTier: T.PremiumSubscriptionSKUs.TIER_2,
        className: R.ctaButton
      })]
    })]
  })
}