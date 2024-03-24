"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s("808653"), s("222007");
var a = s("37983"),
  r = s("884691"),
  n = s("414456"),
  i = s.n(n),
  l = s("446674"),
  o = s("290381"),
  u = s("77078"),
  d = s("206230"),
  c = s("812204"),
  _ = s("685665"),
  E = s("411691"),
  T = s("594098"),
  I = s("599110"),
  f = s("322507"),
  R = s("941797"),
  S = s("628550"),
  m = s("907648"),
  N = s("598739"),
  A = s("49111"),
  p = s("782340"),
  C = s("390553"),
  g = s("679324"),
  O = e => {
    let {
      isAllPerksVisible: t,
      setIsAllPerksVisible: s,
      previousComponent: n
    } = e, O = r.useRef(null), P = (0, S.default)(), M = Object.entries(P).reduce((e, t) => {
      let [s, a] = t;
      return !1 !== a.canReveal && "upcomingDropUntimed" !== a.name && (e[s] = a), e
    }, {}), {
      AnalyticsLocationProvider: h,
      analyticsLocations: L
    } = (0, _.default)(c.default.PREMIUM_SUBSCRIBER_NITRO_HOME), [x, D] = r.useState(!1), v = (0, E.default)("perks-discoverability"), U = (0, l.useStateFromStores)([d.default], () => d.default.useReducedMotion);
    return (0, a.jsx)(u.AdvancedScrollerAuto, {
      className: i(C.allPerksScroller, {
        [C.open]: t,
        [C.openCloseReduceMotion]: U
      }),
      ref: O,
      children: (0, a.jsx)("div", {
        className: C.container,
        children: (0, a.jsxs)(h, {
          children: [(0, a.jsx)(f.default, {
            className: C.heroHeading,
            onBackClick: () => {
              s(!1), I.default.track(A.AnalyticEvents.NITRO_HOME_NAVIGATION, {
                current_component: m.NitroLandingPages.SEE_ALL,
                next_component: n,
                interaction_component: "Back Button"
              })
            }
          }), (0, a.jsxs)("div", {
            className: C.column,
            children: [(0, a.jsx)(u.Heading, {
              variant: "heading-xxl/extrabold",
              color: "header-primary",
              className: C.heading,
              children: p.default.Messages.MARKETING_PAGE_CAROUSEL_TITLE
            }), (0, a.jsx)(R.default, {
              className: C.cardCarousel,
              cards: (0, N.getFilteredPerksDiscoverabilityCards)(M, m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW, v),
              cardType: m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW
            }), (0, a.jsx)(u.Heading, {
              variant: "heading-xxl/extrabold",
              color: "header-primary",
              className: C.heading,
              children: p.default.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD
            }), (0, a.jsx)(R.default, {
              className: C.cardCarousel,
              cards: (0, N.getFilteredPerksDiscoverabilityCards)(M, m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW, v),
              cardType: m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW
            }), (0, a.jsx)(u.Heading, {
              variant: "heading-xxl/extrabold",
              color: "header-primary",
              className: C.heading,
              children: p.default.Messages.NITRO_HOME_SHOW_UP_HOW_YOU_WANT
            }), (0, a.jsx)(R.default, {
              className: C.cardCarousel,
              cards: (0, N.getFilteredPerksDiscoverabilityCards)(M, m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW, v),
              cardType: m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW
            })]
          }), (0, a.jsx)("div", {
            className: C.footerSpacing
          }), (0, a.jsx)(o.VisibilitySensor, {
            onChange: e => {
              e && !x && (I.default.track(A.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: L
              }), D(!0))
            },
            children: (0, a.jsx)("div", {
              className: C.bottomOfPageVisibilitySensor
            })
          }), (0, a.jsx)(T.default, {
            src: g,
            className: C.bottomIllustration,
            width: 112,
            height: 85,
            zoomable: !1
          })]
        })
      })
    })
  }