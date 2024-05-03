"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("622535"),
  o = s("481060"),
  u = s("100527"),
  d = s("906732"),
  c = s("332475"),
  _ = s("626135"),
  E = s("314684"),
  T = s("794484"),
  I = s("347475"),
  R = s("342414"),
  f = s("487980"),
  S = s("391110"),
  m = s("71363"),
  A = s("781800"),
  N = s("981631"),
  p = s("3230"),
  g = s("865215");
t.default = () => {
  let e = r.useRef(null),
    [t, s] = r.useState(!1),
    {
      analyticsLocations: i
    } = (0, d.default)(u.default.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [C, P] = r.useState(!1);
  (0, E.useFetchTenureRewardStatusDetails)();
  let O = (0, f.useIsEligibleSenderForReferralProgram)("SubscriberNitroHome");
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.AdvancedScrollerAuto, {
      className: p.mainPageScroller,
      ref: e,
      children: (0, a.jsx)("div", {
        className: p.container,
        children: (0, a.jsxs)(d.AnalyticsLocationProvider, {
          value: i,
          children: [(0, a.jsx)(R.default, {
            className: p.heroHeading,
            location: S.NitroLandingPages.HOME
          }), (0, a.jsx)(T.default, {
            variant: S.PerksDiscoverabilityCardSection.WHATS_NEW,
            className: n()(p.whatsNew, {
              [p.whatsNewWithOriginalHeroHeading]: !O
            }),
            noBackground: !0,
            leftAlignHeaders: !0
          }), (0, a.jsx)(T.default, {
            className: p.perksDiscoverability,
            noBackground: !0,
            leftAlignHeaders: !0,
            showAllPerksButton: (0, a.jsx)(A.default, {
              setIsAllPerksVisible: s,
              previousComponent: S.NitroLandingPages.HOME
            })
          }), (0, a.jsx)(I.default, {
            className: p.giftNitro,
            location: u.default.PREMIUM_MARKETING_GIFT_SECTION,
            analyticsLocation: {
              page: N.AnalyticsPages.NITRO_HOME,
              section: N.AnalyticsSections.GIFT_BANNER
            }
          }), (0, a.jsx)("div", {
            className: p.footerSpacing
          }), (0, a.jsx)(l.VisibilitySensor, {
            onChange: e => {
              e && !C && (_.default.track(N.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: i
              }), P(!0))
            },
            children: (0, a.jsx)("div", {
              className: p.bottomOfPageVisibilitySensor
            })
          }), (0, a.jsx)(c.default, {
            src: g,
            className: p.bottomIllustration,
            width: 112,
            height: 85,
            zoomable: !1
          })]
        })
      })
    }), (0, a.jsx)(m.default, {
      isAllPerksVisible: t,
      setIsAllPerksVisible: s,
      previousComponent: S.NitroLandingPages.HOME
    })]
  })
}