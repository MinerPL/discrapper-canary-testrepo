"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("808653"), s("222007");
var a = s("37983"),
  r = s("884691"),
  n = s("414456"),
  l = s.n(n),
  i = s("77078"),
  u = s("446674"),
  o = s("290381"),
  d = s("206230"),
  c = s("812204"),
  _ = s("685665"),
  E = s("411691"),
  I = s("594098"),
  T = s("599110"),
  f = s("322507"),
  S = s("941797"),
  R = s("628550"),
  m = s("598739"),
  A = s("49111"),
  N = s("782340"),
  p = s("137537"),
  g = s("679324"),
  C = e => {
    let {
      isAllPerksVisible: t,
      setIsAllPerksVisible: s
    } = e, n = r.useRef(null), C = (0, R.default)(), P = Object.entries(C).reduce((e, t) => {
      let [s, a] = t;
      return !1 !== a.canReveal && "upcomingDropUntimed" !== a.name && (e[s] = a), e
    }, {}), {
      AnalyticsLocationProvider: O,
      analyticsLocations: M
    } = (0, _.default)(c.default.PREMIUM_SUBSCRIBER_NITRO_HOME), [h, L] = r.useState(!1), x = (0, E.default)("perks-discoverability"), v = (0, u.useStateFromStores)([d.default], () => d.default.useReducedMotion);
    return (0, a.jsx)(i.AdvancedScrollerAuto, {
      className: l(p.allPerksScroller, {
        [p.open]: t,
        [p.openCloseReduceMotion]: v
      }),
      ref: n,
      children: (0, a.jsx)("div", {
        className: p.container,
        children: (0, a.jsxs)(O, {
          children: [(0, a.jsx)(f.default, {
            className: p.heroHeading,
            onBackClick: () => s(!1)
          }), (0, a.jsxs)("div", {
            className: p.column,
            children: [(0, a.jsx)(i.Heading, {
              variant: "heading-xxl/extrabold",
              color: "header-primary",
              className: p.heading,
              children: N.default.Messages.MARKETING_PAGE_CAROUSEL_TITLE
            }), (0, a.jsx)(S.default, {
              className: p.cardCarousel,
              cards: (0, m.getFilteredPerksDiscoverabilityCards)(P, m.PerksDiscoverabilityVariants.CARD_CAROUSEL_FIRST_ROW, x),
              cardType: m.PerksDiscoverabilityVariants.CARD_CAROUSEL_FIRST_ROW
            }), (0, a.jsx)(i.Heading, {
              variant: "heading-xxl/extrabold",
              color: "header-primary",
              className: p.heading,
              children: N.default.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD
            }), (0, a.jsx)(S.default, {
              className: p.cardCarousel,
              cards: (0, m.getFilteredPerksDiscoverabilityCards)(P, m.PerksDiscoverabilityVariants.CARD_CAROUSEL_SECOND_ROW, x),
              cardType: m.PerksDiscoverabilityVariants.CARD_CAROUSEL_SECOND_ROW
            }), (0, a.jsx)(i.Heading, {
              variant: "heading-xxl/extrabold",
              color: "header-primary",
              className: p.heading,
              children: N.default.Messages.NITRO_HOME_SHOW_UP_HOW_YOU_WANT
            }), (0, a.jsx)(S.default, {
              className: p.cardCarousel,
              cards: (0, m.getFilteredPerksDiscoverabilityCards)(P, m.PerksDiscoverabilityVariants.CARD_CAROUSEL_THIRD_ROW, x),
              cardType: m.PerksDiscoverabilityVariants.CARD_CAROUSEL_THIRD_ROW
            })]
          }), (0, a.jsx)("div", {
            className: p.footerSpacing
          }), (0, a.jsx)(o.VisibilitySensor, {
            onChange: e => {
              e && !h && (T.default.track(A.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: M
              }), L(!0))
            },
            children: (0, a.jsx)("div", {
              className: p.bottomOfPageVisibilitySensor
            })
          }), (0, a.jsx)(I.default, {
            src: g,
            className: p.bottomIllustration,
            width: 112,
            height: 85,
            zoomable: !1
          })]
        })
      })
    })
  }