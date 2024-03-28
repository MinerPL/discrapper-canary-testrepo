"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("622535"),
  n = s("481060"),
  l = s("100527"),
  o = s("906732"),
  u = s("332475"),
  d = s("626135"),
  c = s("314684"),
  _ = s("898997"),
  E = s("794484"),
  T = s("347475"),
  I = s("342414"),
  R = s("391110"),
  S = s("71363"),
  f = s("781800"),
  m = s("981631"),
  N = s("379101"),
  A = s("865215");
t.default = () => {
  let e = i.useRef(null),
    [t, s] = i.useState(!1),
    {
      analyticsLocations: p
    } = (0, o.default)(l.default.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [C, g] = i.useState(!1);
  return (0, c.useFetchEntitlementsForTenureReward)(), (0, _.useMaybeFetchReferralsRemaining)("SubscriberNitroHome"), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(n.AdvancedScrollerAuto, {
      className: N.mainPageScroller,
      ref: e,
      children: (0, a.jsx)("div", {
        className: N.container,
        children: (0, a.jsxs)(o.AnalyticsLocationProvider, {
          value: p,
          children: [(0, a.jsx)(I.default, {
            className: N.heroHeading
          }), (0, a.jsx)(E.default, {
            variant: R.PerksDiscoverabilityCardSection.WHATS_NEW,
            className: N.whatsNew,
            noBackground: !0,
            leftAlignHeaders: !0
          }), (0, a.jsx)(E.default, {
            className: N.perksDiscoverability,
            noBackground: !0,
            leftAlignHeaders: !0,
            showAllPerksButton: (0, a.jsx)(f.default, {
              setIsAllPerksVisible: s,
              previousComponent: R.NitroLandingPages.HOME
            })
          }), (0, a.jsx)(T.default, {
            className: N.giftNitro,
            location: l.default.PREMIUM_MARKETING_GIFT_SECTION,
            analyticsLocation: {
              page: m.AnalyticsPages.NITRO_HOME,
              section: m.AnalyticsSections.GIFT_BANNER
            }
          }), (0, a.jsx)("div", {
            className: N.footerSpacing
          }), (0, a.jsx)(r.VisibilitySensor, {
            onChange: e => {
              e && !C && (d.default.track(m.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: p
              }), g(!0))
            },
            children: (0, a.jsx)("div", {
              className: N.bottomOfPageVisibilitySensor
            })
          }), (0, a.jsx)(u.default, {
            src: A,
            className: N.bottomIllustration,
            width: 112,
            height: 85,
            zoomable: !1
          })]
        })
      })
    }), (0, a.jsx)(S.default, {
      isAllPerksVisible: t,
      setIsAllPerksVisible: s,
      previousComponent: R.NitroLandingPages.HOME
    })]
  })
}