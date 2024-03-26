"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  i = s("290381"),
  n = s("77078"),
  l = s("812204"),
  o = s("685665"),
  u = s("594098"),
  d = s("599110"),
  c = s("359499"),
  _ = s("134132"),
  E = s("627474"),
  T = s("835618"),
  I = s("554083"),
  f = s("907648"),
  S = s("326881"),
  R = s("228967"),
  m = s("49111"),
  A = s("390553"),
  N = s("679324"),
  p = () => {
    let e = r.useRef(null),
      [t, s] = r.useState(!1),
      {
        analyticsLocations: p
      } = (0, o.default)(l.default.PREMIUM_SUBSCRIBER_NITRO_HOME),
      [C, g] = r.useState(!1);
    return (0, c.useFetchEntitlementsForTenureReward)(), (0, _.useMaybeFetchReferralsRemaining)("SubscriberNitroHome"), (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(n.AdvancedScrollerAuto, {
        className: A.mainPageScroller,
        ref: e,
        children: (0, a.jsx)("div", {
          className: A.container,
          children: (0, a.jsxs)(o.AnalyticsLocationProvider, {
            value: p,
            children: [(0, a.jsx)(I.default, {
              className: A.heroHeading
            }), (0, a.jsx)(E.default, {
              variant: f.PerksDiscoverabilityCardSection.WHATS_NEW,
              className: A.whatsNew,
              noBackground: !0,
              leftAlignHeaders: !0
            }), (0, a.jsx)(E.default, {
              className: A.perksDiscoverability,
              noBackground: !0,
              leftAlignHeaders: !0,
              showAllPerksButton: (0, a.jsx)(R.default, {
                setIsAllPerksVisible: s,
                previousComponent: f.NitroLandingPages.HOME
              })
            }), (0, a.jsx)(T.default, {
              className: A.giftNitro,
              location: l.default.PREMIUM_MARKETING_GIFT_SECTION,
              analyticsLocation: {
                page: m.AnalyticsPages.NITRO_HOME,
                section: m.AnalyticsSections.GIFT_BANNER
              }
            }), (0, a.jsx)("div", {
              className: A.footerSpacing
            }), (0, a.jsx)(i.VisibilitySensor, {
              onChange: e => {
                e && !C && (d.default.track(m.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                  location_stack: p
                }), g(!0))
              },
              children: (0, a.jsx)("div", {
                className: A.bottomOfPageVisibilitySensor
              })
            }), (0, a.jsx)(u.default, {
              src: N,
              className: A.bottomIllustration,
              width: 112,
              height: 85,
              zoomable: !1
            })]
          })
        })
      }), (0, a.jsx)(S.default, {
        isAllPerksVisible: t,
        setIsAllPerksVisible: s,
        previousComponent: f.NitroLandingPages.HOME
      })]
    })
  }