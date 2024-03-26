"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  i = s("414456"),
  n = s.n(i),
  l = s("516555"),
  o = s("77078"),
  u = s("411691"),
  d = s("527715"),
  c = s("359499"),
  _ = s("367226"),
  E = s("628550"),
  T = s("907648"),
  I = s("598739"),
  f = s("558566"),
  S = s("35505");
let R = e => {
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
var m = e => {
  var t;
  let {
    className: s,
    variant: i = T.PerksDiscoverabilityCardSection.PERKS_DISCOVERABILITY,
    noBackground: m = !1,
    leftAlignHeaders: A = !1,
    showAllPerksButton: N,
    headerClassname: p,
    isFullScreen: C = !0
  } = e, g = r.useRef(null), O = (0, _.useShouldScrollToWhatsNew)(), P = (0, u.default)("perks-discoverability"), M = (0, d.useMarketingOptimizationExperiment)({
    autoTrackExposure: !1
  });
  (0, _.useClearNewBadge)(), (0, c.useClearTenureBadge)();
  let h = i === T.PerksDiscoverabilityCardSection.WHATS_NEW;
  r.useEffect(() => {
    let e = g.current;
    if (null == e || !O || !h) return;
    let t = requestAnimationFrame(() => {
      e.scrollIntoView({
        behavior: "smooth"
      })
    });
    return () => cancelAnimationFrame(t)
  }, [g, O, h]);
  let L = (0, I.usePerksDiscoverabilityStrings)(h),
    x = (0, E.default)(),
    v = (0, c.useFreeBoostUserTenureReward)(),
    D = (0, I.getFilteredPerksDiscoverabilityCards)(x, i, P, C, null == v ? void 0 : v.showNotification),
    b = D.some(e => null != e.pillText),
    [U, j] = r.useState(null),
    G = r.useRef(new l.Environment);
  return (0, a.jsxs)(a.Fragment, {
    children: [(null == x ? void 0 : null === (t = x.freeBoost) || void 0 === t ? void 0 : t.name) === E.PerksDiscoverabilityCardTypes.FREE_BOOST && (0, a.jsx)(l.ConfettiCanvas, {
      ref: j,
      className: S.confettiCanvas,
      environment: G.current
    }), (0, a.jsxs)("div", {
      ref: g,
      className: n(S.section, {
        [S.centerAlignSection]: !A,
        [S.leftAlignSection]: A
      }, s),
      children: [(0, a.jsx)(R, {
        showAllPerksButton: N,
        leftAlignHeaders: A,
        title: L.title,
        headerClassname: p
      }), !M && (0, a.jsx)(o.Text, {
        variant: "text-lg/normal",
        color: "header-primary",
        className: n(S.subtitle, {
          [S.subtitle]: null == N || A,
          [S.subtitleWithButton]: null != N && !A,
          [S.fullWidth]: h || A,
          [S.moreSubtitleMargin]: b,
          [S.leftAlignSubtitle]: A,
          [S.centerAlignSubtitle]: !A
        }),
        children: L.subtitle
      }), !A && null != N && (0, a.jsx)("div", {
        className: n(S.showAllPerksButtonCenter),
        children: N
      }), (0, a.jsx)("div", {
        className: n({
          [S.cardContainer]: C,
          [S.cardContainerNarrowWidth]: !C
        }),
        children: D.map((e, t) => (0, a.jsx)(f.default, {
          confettiCanvas: e.name === E.PerksDiscoverabilityCardTypes.FREE_BOOST ? U : void 0,
          ...e,
          forceShadow: m
        }, "".concat(e.name, "_").concat(t)))
      })]
    })]
  })
}