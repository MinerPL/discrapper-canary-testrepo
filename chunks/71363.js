"use strict";
s.r(t), s("724458"), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("442837"),
  o = s("622535"),
  u = s("481060"),
  d = s("607070"),
  c = s("100527"),
  _ = s("906732"),
  E = s("410154"),
  T = s("332475"),
  I = s("626135"),
  R = s("915296"),
  f = s("103433"),
  S = s("166021"),
  m = s("32173"),
  A = s("391110"),
  N = s("75077"),
  p = s("981631"),
  g = s("689938"),
  C = s("3230"),
  P = s("865215");
t.default = e => {
  let t, s, {
      isAllPerksVisible: i,
      setIsAllPerksVisible: O,
      previousComponent: M,
      isFullScreen: h
    } = e,
    L = r.useRef(null),
    x = Object.entries((0, m.default)()).reduce((e, t) => {
      let [s, a] = t;
      return !1 !== a.canReveal && "upcomingDropUntimed" !== a.name && (e[s] = a), e
    }, {}),
    v = (0, R.useGetMarketingPageNonSubPerkTileOrderExperiment)({
      location: A.NitroLandingPages.SEE_ALL
    }),
    {
      analyticsLocations: b
    } = (0, _.default)(c.default.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [D, U] = r.useState(!1),
    j = (0, E.default)("perks-discoverability"),
    y = (0, l.useStateFromStores)([d.default], () => d.default.useReducedMotion),
    B = (0, N.useIsPremiumSubscriber)();
  return v === R.TileOrderVariant.DEFAULT ? (t = g.default.Messages.MARKETING_PAGE_CAROUSEL_TITLE, s = g.default.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD) : (t = g.default.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD, s = g.default.Messages.MARKETING_PAGE_CAROUSEL_TITLE), (0, a.jsx)(u.AdvancedScrollerAuto, {
    className: n()(C.allPerksScroller, {
      [C.open]: i,
      [C.openCloseReduceMotion]: y
    }),
    ref: L,
    children: (0, a.jsx)("div", {
      className: C.container,
      children: (0, a.jsxs)(_.AnalyticsLocationProvider, {
        value: b,
        children: [(0, a.jsx)(f.default, {
          className: C.heroHeading,
          onBackClick: () => {
            O(!1), I.default.track(p.AnalyticEvents.NITRO_HOME_NAVIGATION, {
              current_component: A.NitroLandingPages.SEE_ALL,
              next_component: M,
              interaction_component: "Back Button"
            })
          }
        }), (0, a.jsxs)("div", {
          className: C.column,
          children: [(0, a.jsx)(u.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: C.heading,
            children: t
          }), (0, a.jsx)(S.default, {
            className: C.cardCarousel,
            cards: (0, N.getFilteredPerksDiscoverabilityCards)({
              perksCards: x,
              variant: A.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW,
              shopMarketingVariation: j,
              tileOrderVariant: v,
              isPremiumSubscriber: B,
              isFullScreen: h
            }),
            cardType: A.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW
          }), (0, a.jsx)(u.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: C.heading,
            children: s
          }), (0, a.jsx)(S.default, {
            className: C.cardCarousel,
            cards: (0, N.getFilteredPerksDiscoverabilityCards)({
              perksCards: x,
              variant: A.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW,
              shopMarketingVariation: j,
              tileOrderVariant: v,
              isPremiumSubscriber: B,
              isFullScreen: h
            }),
            cardType: A.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW
          }), (0, a.jsx)(u.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: C.heading,
            children: g.default.Messages.NITRO_HOME_SHOW_UP_HOW_YOU_WANT
          }), (0, a.jsx)(S.default, {
            className: C.cardCarousel,
            cards: (0, N.getFilteredPerksDiscoverabilityCards)({
              perksCards: x,
              variant: A.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW,
              shopMarketingVariation: j,
              tileOrderVariant: v,
              isPremiumSubscriber: B,
              isFullScreen: h
            }),
            cardType: A.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW
          })]
        }), (0, a.jsx)("div", {
          className: C.footerSpacing
        }), (0, a.jsx)(o.VisibilitySensor, {
          onChange: e => {
            e && !D && (I.default.track(p.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              location_stack: b
            }), U(!0))
          },
          children: (0, a.jsx)("div", {
            className: C.bottomOfPageVisibilitySensor
          })
        }), (0, a.jsx)(T.default, {
          src: P,
          className: C.bottomIllustration,
          width: 112,
          height: 85,
          zoomable: !1
        })]
      })
    })
  })
}