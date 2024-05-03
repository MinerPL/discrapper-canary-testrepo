"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("236471"),
  o = s("481060"),
  u = s("410154"),
  d = s("915296"),
  c = s("846363"),
  _ = s("314684"),
  E = s("565626"),
  T = s("32173"),
  I = s("391110"),
  R = s("75077"),
  f = s("320319"),
  S = s("293908");
let m = e => {
  let {
    showAllPerksButton: t,
    leftAlignHeaders: s,
    title: r,
    headerClassname: i
  } = e, n = (0, a.jsx)(o.Heading, {
    variant: "heading-xxl/extrabold",
    color: "header-primary",
    className: null != i ? i : S.heading,
    children: r
  });
  return null == t ? n : s ? (0, a.jsxs)("div", {
    className: S.sectionHeader,
    children: [n, null != t && (0, a.jsx)("div", {
      className: S.showAllPerksButton,
      children: t
    })]
  }) : (0, a.jsx)("div", {
    className: S.container,
    children: (0, a.jsx)("div", {
      className: S.sectionHeaderSeeAll,
      children: n
    })
  })
};
t.default = e => {
  var t;
  let {
    className: s,
    variant: i = I.PerksDiscoverabilityCardSection.PERKS_DISCOVERABILITY,
    noBackground: A = !1,
    leftAlignHeaders: N = !1,
    showAllPerksButton: p,
    headerClassname: g,
    isFullScreen: C = !0
  } = e, P = r.useRef(null), O = (0, _.useFreeBoostUserTenureReward)(), M = (0, E.useShouldScrollToWhatsNew)(O), h = (0, u.default)("perks-discoverability"), L = (0, c.useMarketingOptimizationExperiment)({
    autoTrackExposure: !1
  });
  (0, E.useClearNewBadge)();
  let x = (0, d.useGetMarketingPageNonSubPerkTileOrderExperiment)({
      location: I.PerksDiscoverabilityCardSection.PERKS_DISCOVERABILITY
    }),
    v = i === I.PerksDiscoverabilityCardSection.WHATS_NEW,
    b = (0, _.useClearTenureBadge)();
  r.useEffect(() => {
    v && !M && b()
  }, [b, v, M]), r.useEffect(() => {
    let e = P.current;
    if (null == e || !M || !v) return;
    let t = requestAnimationFrame(() => {
      e.scrollIntoView({
        behavior: "smooth"
      }), v && b()
    });
    return () => {
      cancelAnimationFrame(t), v && b()
    }
  }, [P, M, v, b]);
  let D = (0, R.usePerksDiscoverabilityStrings)(v),
    U = (0, T.default)(),
    j = (0, R.useIsPremiumSubscriber)(),
    y = (0, R.getFilteredPerksDiscoverabilityCards)({
      perksCards: U,
      variant: i,
      shopMarketingVariation: h,
      isFullScreen: C,
      showTenureCard: null == O ? void 0 : O.showCard,
      tileOrderVariant: x,
      isPremiumSubscriber: j
    }),
    B = y.some(e => null != e.pillText),
    [G, k] = r.useState(null),
    H = r.useRef(new l.Environment);
  return (0, a.jsxs)(a.Fragment, {
    children: [(null == U ? void 0 : null === (t = U.freeBoost) || void 0 === t ? void 0 : t.name) === T.PerksDiscoverabilityCardTypes.FREE_BOOST && (0, a.jsx)(l.ConfettiCanvas, {
      ref: k,
      className: S.confettiCanvas,
      environment: H.current
    }), (0, a.jsxs)("div", {
      ref: P,
      className: n()(S.section, {
        [S.centerAlignSection]: !N,
        [S.leftAlignSection]: N
      }, s),
      children: [(0, a.jsx)(m, {
        showAllPerksButton: p,
        leftAlignHeaders: N,
        title: D.title,
        headerClassname: g
      }), !L && (0, a.jsx)(o.Text, {
        variant: "text-lg/normal",
        color: "header-primary",
        className: n()(S.subtitle, {
          [S.subtitle]: null == p || N,
          [S.subtitleWithButton]: null != p && !N,
          [S.fullWidth]: v || N,
          [S.moreSubtitleMargin]: B,
          [S.leftAlignSubtitle]: N,
          [S.centerAlignSubtitle]: !N
        }),
        children: D.subtitle
      }), !N && null != p && (0, a.jsx)("div", {
        className: n()(S.showAllPerksButtonCenter),
        children: p
      }), (0, a.jsx)("div", {
        className: n()({
          [S.cardContainer]: C,
          [S.cardContainerNarrowWidth]: !C
        }),
        children: y.map((e, t) => (0, a.jsx)(f.default, {
          confettiCanvas: e.name === T.PerksDiscoverabilityCardTypes.FREE_BOOST ? G : void 0,
          ...e,
          forceShadow: A
        }, "".concat(e.name, "_").concat(t)))
      })]
    })]
  })
}