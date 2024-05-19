"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("887024"),
  o = s("481060"),
  u = s("410154"),
  d = s("915296"),
  c = s("846363"),
  _ = s("314684"),
  E = s("565626"),
  T = s("32173"),
  I = s("734741"),
  R = s("391110"),
  f = s("75077"),
  S = s("320319"),
  m = s("766752");
let A = e => {
  let {
    showAllPerksButton: t,
    leftAlignHeaders: s,
    title: r,
    headerClassname: i
  } = e, n = (0, a.jsx)(o.Heading, {
    variant: "heading-xxl/extrabold",
    color: "header-primary",
    className: null != i ? i : m.heading,
    children: r
  });
  return null == t ? n : s ? (0, a.jsxs)("div", {
    className: m.sectionHeader,
    children: [n, null != t && (0, a.jsx)("div", {
      className: m.showAllPerksButton,
      children: t
    })]
  }) : (0, a.jsx)("div", {
    className: m.container,
    children: (0, a.jsx)("div", {
      className: m.sectionHeaderSeeAll,
      children: n
    })
  })
};
t.default = e => {
  var t;
  let {
    className: s,
    variant: i = R.PerksDiscoverabilityCardSection.PERKS_DISCOVERABILITY,
    noBackground: N = !1,
    leftAlignHeaders: p = !1,
    showAllPerksButton: g,
    headerClassname: C,
    isFullScreen: P = !0
  } = e, O = r.useRef(null), M = (0, _.useFreeBoostUserTenureReward)(), [h, L] = r.useState(!1), x = (0, E.useShouldScrollToWhatsNew)(M) || h, v = (0, u.default)("perks-discoverability"), b = (0, c.useMarketingOptimizationExperiment)({
    autoTrackExposure: !1
  });
  r.useLayoutEffect(() => {
    L((0, I.shouldScrollToMarketingMomentContent)())
  }, []), (0, E.useClearNewBadge)(), (0, I.useDismissWhatsNewCardDCs)();
  let D = (0, d.useGetMarketingPageNonSubPerkTileOrderExperiment)({
      location: R.PerksDiscoverabilityCardSection.PERKS_DISCOVERABILITY
    }),
    U = i === R.PerksDiscoverabilityCardSection.WHATS_NEW,
    j = (0, _.useClearTenureBadge)();
  r.useEffect(() => {
    U && !x && j()
  }, [j, U, x]), r.useEffect(() => {
    let e = O.current;
    if (null == e || !x || !U) return;
    let t = requestAnimationFrame(() => {
      e.scrollIntoView({
        behavior: "smooth"
      }), U && j()
    });
    return () => {
      cancelAnimationFrame(t), U && j()
    }
  }, [O, x, U, j]);
  let G = (0, f.usePerksDiscoverabilityStrings)(U),
    y = (0, T.default)(),
    B = (0, f.useIsPremiumSubscriber)(),
    k = (0, f.getFilteredPerksDiscoverabilityCards)({
      perksCards: y,
      variant: i,
      shopMarketingVariation: v,
      isFullScreen: P,
      showTenureCard: null == M ? void 0 : M.showCard,
      tileOrderVariant: D,
      isPremiumSubscriber: B
    }),
    H = k.some(e => null != e.pillText),
    [F, w] = r.useState(null),
    W = r.useRef(new l.Environment);
  return (0, a.jsxs)(a.Fragment, {
    children: [(null == y ? void 0 : null === (t = y.freeBoost) || void 0 === t ? void 0 : t.name) === T.PerksDiscoverabilityCardTypes.FREE_BOOST && (0, a.jsx)(l.ConfettiCanvas, {
      ref: w,
      className: m.confettiCanvas,
      environment: W.current
    }), (0, a.jsxs)("div", {
      ref: O,
      className: n()(m.section, {
        [m.centerAlignSection]: !p,
        [m.leftAlignSection]: p
      }, s),
      children: [(0, a.jsx)(A, {
        showAllPerksButton: g,
        leftAlignHeaders: p,
        title: G.title,
        headerClassname: C
      }), !b && (0, a.jsx)(o.Text, {
        variant: "text-lg/normal",
        color: "header-primary",
        className: n()(m.subtitle, {
          [m.subtitle]: null == g || p,
          [m.subtitleWithButton]: null != g && !p,
          [m.fullWidth]: U || p,
          [m.moreSubtitleMargin]: H,
          [m.leftAlignSubtitle]: p,
          [m.centerAlignSubtitle]: !p
        }),
        children: G.subtitle
      }), !p && null != g && (0, a.jsx)("div", {
        className: n()(m.showAllPerksButtonCenter),
        children: g
      }), (0, a.jsx)("div", {
        className: n()({
          [m.cardContainer]: P,
          [m.cardContainerNarrowWidth]: !P
        }),
        children: k.map((e, t) => (0, a.jsx)(S.default, {
          confettiCanvas: e.name === T.PerksDiscoverabilityCardTypes.FREE_BOOST ? F : void 0,
          ...e,
          forceShadow: N
        }, "".concat(e.name, "_").concat(t)))
      })]
    })]
  })
}