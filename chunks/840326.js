"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  n = s("290381"),
  i = s("77078"),
  l = s("812204"),
  o = s("685665"),
  u = s("594098"),
  d = s("599110"),
  c = s("359499"),
  _ = s("627474"),
  E = s("835618"),
  T = s("554083"),
  I = s("907648"),
  f = s("326881"),
  R = s("228967"),
  S = s("49111"),
  m = s("390553"),
  N = s("679324"),
  A = () => {
    let e = r.useRef(null),
      [t, s] = r.useState(!1),
      {
        AnalyticsLocationProvider: A,
        analyticsLocations: p
      } = (0, o.default)(l.default.PREMIUM_SUBSCRIBER_NITRO_HOME),
      [C, g] = r.useState(!1);
    return (0, c.useFetchEntitlementsForTenureReward)(), (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(i.AdvancedScrollerAuto, {
        className: m.mainPageScroller,
        ref: e,
        children: (0, a.jsx)("div", {
          className: m.container,
          children: (0, a.jsxs)(A, {
            children: [(0, a.jsx)(T.default, {
              className: m.heroHeading
            }), (0, a.jsx)(_.default, {
              variant: I.PerksDiscoverabilityCardSection.WHATS_NEW,
              className: m.whatsNew,
              noBackground: !0,
              leftAlignHeaders: !0
            }), (0, a.jsx)(_.default, {
              className: m.perksDiscoverability,
              noBackground: !0,
              leftAlignHeaders: !0,
              showAllPerksButton: (0, a.jsx)(R.default, {
                setIsAllPerksVisible: s,
                previousComponent: I.NitroLandingPages.HOME
              })
            }), (0, a.jsx)(E.default, {
              className: m.giftNitro,
              location: l.default.PREMIUM_MARKETING_GIFT_SECTION,
              analyticsLocation: {
                page: S.AnalyticsPages.NITRO_HOME,
                section: S.AnalyticsSections.GIFT_BANNER
              }
            }), (0, a.jsx)("div", {
              className: m.footerSpacing
            }), (0, a.jsx)(n.VisibilitySensor, {
              onChange: e => {
                e && !C && (d.default.track(S.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                  location_stack: p
                }), g(!0))
              },
              children: (0, a.jsx)("div", {
                className: m.bottomOfPageVisibilitySensor
              })
            }), (0, a.jsx)(u.default, {
              src: N,
              className: m.bottomIllustration,
              width: 112,
              height: 85,
              zoomable: !1
            })]
          })
        })
      }), (0, a.jsx)(f.default, {
        isAllPerksVisible: t,
        setIsAllPerksVisible: s,
        previousComponent: I.NitroLandingPages.HOME
      })]
    })
  }