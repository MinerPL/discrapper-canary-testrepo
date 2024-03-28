"use strict";
s.r(t), s("724458"), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("803997"),
  n = s.n(r),
  l = s("442837"),
  o = s("622535"),
  u = s("481060"),
  d = s("607070"),
  c = s("100527"),
  _ = s("906732"),
  E = s("410154"),
  T = s("332475"),
  I = s("626135"),
  R = s("103433"),
  S = s("166021"),
  f = s("32173"),
  m = s("391110"),
  N = s("75077"),
  A = s("981631"),
  p = s("689938"),
  C = s("379101"),
  g = s("865215");
t.default = e => {
  let {
    isAllPerksVisible: t,
    setIsAllPerksVisible: s,
    previousComponent: r
  } = e, O = i.useRef(null), P = Object.entries((0, f.default)()).reduce((e, t) => {
    let [s, a] = t;
    return !1 !== a.canReveal && "upcomingDropUntimed" !== a.name && (e[s] = a), e
  }, {}), {
    analyticsLocations: M
  } = (0, _.default)(c.default.PREMIUM_SUBSCRIBER_NITRO_HOME), [h, L] = i.useState(!1), x = (0, E.default)("perks-discoverability"), v = (0, l.useStateFromStores)([d.default], () => d.default.useReducedMotion);
  return (0, a.jsx)(u.AdvancedScrollerAuto, {
    className: n()(C.allPerksScroller, {
      [C.open]: t,
      [C.openCloseReduceMotion]: v
    }),
    ref: O,
    children: (0, a.jsx)("div", {
      className: C.container,
      children: (0, a.jsxs)(_.AnalyticsLocationProvider, {
        value: M,
        children: [(0, a.jsx)(R.default, {
          className: C.heroHeading,
          onBackClick: () => {
            s(!1), I.default.track(A.AnalyticEvents.NITRO_HOME_NAVIGATION, {
              current_component: m.NitroLandingPages.SEE_ALL,
              next_component: r,
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
          }), (0, a.jsx)(S.default, {
            className: C.cardCarousel,
            cards: (0, N.getFilteredPerksDiscoverabilityCards)(P, m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW, x),
            cardType: m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW
          }), (0, a.jsx)(u.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: C.heading,
            children: p.default.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD
          }), (0, a.jsx)(S.default, {
            className: C.cardCarousel,
            cards: (0, N.getFilteredPerksDiscoverabilityCards)(P, m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW, x),
            cardType: m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW
          }), (0, a.jsx)(u.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: C.heading,
            children: p.default.Messages.NITRO_HOME_SHOW_UP_HOW_YOU_WANT
          }), (0, a.jsx)(S.default, {
            className: C.cardCarousel,
            cards: (0, N.getFilteredPerksDiscoverabilityCards)(P, m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW, x),
            cardType: m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW
          })]
        }), (0, a.jsx)("div", {
          className: C.footerSpacing
        }), (0, a.jsx)(o.VisibilitySensor, {
          onChange: e => {
            e && !h && (I.default.track(A.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              location_stack: M
            }), L(!0))
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