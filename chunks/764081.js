"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("120356"),
  i = s.n(r),
  n = s("990547"),
  l = s("399606"),
  o = s("481060"),
  u = s("100527"),
  d = s("182567"),
  c = s("906732"),
  _ = s("213609"),
  E = s("78839"),
  T = s("63063"),
  I = s("958589"),
  R = s("104494"),
  f = s("639119"),
  S = s("276800"),
  m = s("409100"),
  A = s("474936"),
  N = s("981631"),
  p = s("689938"),
  g = s("980444");
let C = "April2024MarketingBanner";
t.default = function(e) {
  let {
    isFullscreen: t
  } = e, s = (0, l.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), r = (0, f.usePremiumTrialOffer)(), P = (0, R.usePremiumDiscountOffer)(), O = null != r || null != P, M = I.default.useExperiment({
    location: C
  }).enabled, {
    analyticsLocations: h
  } = (0, c.default)();
  if ((0, _.default)({
      type: n.ImpressionTypes.VIEW,
      name: n.ImpressionNames.PREMIUM_MARKETING_BANNER,
      properties: {
        location_stack: h,
        banner_id: C
      }
    }, {
      disableTrack: !M
    }), !M) return null;
  let L = new Date("2024-05-01T17:00:00Z");
  return (0, a.jsx)(d.AnalyticsLocationsProvider, {
    newLocations: [u.default.PREMIUM_MARKETING_PAGE_BANNER],
    children: (0, a.jsx)("div", {
      className: i()(g.banner, {
        [g.negative48pxMarginTop]: t && !O,
        [g.negative24pxMarginTop]: t && O
      }),
      children: (0, a.jsxs)("div", {
        className: g.bannerContent,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(o.Heading, {
            variant: "display-sm",
            color: "always-white",
            children: p.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_HEADER
          }), (0, a.jsx)(o.Text, {
            className: g.countdown,
            variant: "text-sm/medium",
            children: (0, a.jsx)(S.default, {
              endDate: L
            })
          }), (0, a.jsx)(o.Text, {
            className: g.bannerSubheader,
            variant: "text-sm/medium",
            color: "always-white",
            children: null == s ? p.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_BANNER_BODY_NON_SUB.format({
              helpCenterLink: T.default.getArticleURL(N.HelpdeskArticles.PREMIUM_APRIL_2024_MARKETING_MOMENT)
            }) : p.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_BANNER_BODY_UPGRADE.format({
              helpCenterLink: T.default.getArticleURL(N.HelpdeskArticles.PREMIUM_APRIL_2024_MARKETING_MOMENT)
            })
          })]
        }), (0, a.jsx)(m.default, {
          buttonText: p.default.Messages.BOGO_CLAIM_OFFER,
          buttonTextClassName: g.subscribeButtonText,
          subscriptionTier: A.PremiumSubscriptionSKUs.TIER_2,
          className: g.subscribeButton,
          showIcon: !1,
          forceInverted: !0
        })]
      })
    })
  })
}