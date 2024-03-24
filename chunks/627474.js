"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  n = s("414456"),
  i = s.n(n),
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
  R = s("35505");
let S = e => {
  let {
    showAllPerksButton: t,
    leftAlignHeaders: s,
    title: r,
    headerClassname: n
  } = e, i = (0, a.jsx)(o.Heading, {
    variant: "heading-xxl/extrabold",
    color: "header-primary",
    className: null != n ? n : R.heading,
    children: r
  });
  return null == t ? i : s ? (0, a.jsxs)("div", {
    className: R.sectionHeader,
    children: [i, null != t && (0, a.jsx)("div", {
      className: R.showAllPerksButton,
      children: t
    })]
  }) : (0, a.jsx)("div", {
    className: R.container,
    children: (0, a.jsx)("div", {
      className: R.sectionHeaderSeeAll,
      children: i
    })
  })
};
var m = e => {
  var t;
  let {
    className: s,
    variant: n = T.PerksDiscoverabilityCardSection.PERKS_DISCOVERABILITY,
    noBackground: m = !1,
    leftAlignHeaders: N = !1,
    showAllPerksButton: A,
    headerClassname: p,
    isFullScreen: C = !0
  } = e, g = r.useRef(null), O = (0, _.useShouldScrollToWhatsNew)(), P = (0, u.default)("perks-discoverability"), M = (0, d.useMarketingOptimizationExperiment)({
    autoTrackExposure: !1
  });
  (0, _.useClearNewBadge)(), (0, c.useClearTenureBadge)();
  let h = n === T.PerksDiscoverabilityCardSection.WHATS_NEW;
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
    D = (0, c.useFreeBoostUserTenureReward)(),
    v = (0, I.getFilteredPerksDiscoverabilityCards)(x, n, P, C, null == D ? void 0 : D.showNotification),
    U = v.some(e => null != e.pillText),
    [b, j] = r.useState(null),
    B = r.useRef(new l.Environment);
  return (0, a.jsxs)(a.Fragment, {
    children: [(null == x ? void 0 : null === (t = x.freeBoost) || void 0 === t ? void 0 : t.name) === E.PerksDiscoverabilityCardTypes.FREE_BOOST && (0, a.jsx)(l.ConfettiCanvas, {
      ref: j,
      className: R.confettiCanvas,
      environment: B.current
    }), (0, a.jsxs)("div", {
      ref: g,
      className: i(R.section, {
        [R.centerAlignSection]: !N,
        [R.leftAlignSection]: N
      }, s),
      children: [(0, a.jsx)(S, {
        showAllPerksButton: A,
        leftAlignHeaders: N,
        title: L.title,
        headerClassname: p
      }), !M && (0, a.jsx)(o.Text, {
        variant: "text-lg/normal",
        color: "header-primary",
        className: i(R.subtitle, {
          [R.subtitle]: null == A || N,
          [R.subtitleWithButton]: null != A && !N,
          [R.fullWidth]: h || N,
          [R.moreSubtitleMargin]: U,
          [R.leftAlignSubtitle]: N,
          [R.centerAlignSubtitle]: !N
        }),
        children: L.subtitle
      }), !N && null != A && (0, a.jsx)("div", {
        className: i(R.showAllPerksButtonCenter),
        children: A
      }), (0, a.jsx)("div", {
        className: i({
          [R.cardContainer]: C,
          [R.cardContainerNarrowWidth]: !C
        }),
        children: v.map((e, t) => (0, a.jsx)(f.default, {
          confettiCanvas: e.name === E.PerksDiscoverabilityCardTypes.FREE_BOOST ? b : void 0,
          ...e,
          forceShadow: m
        }, "".concat(e.name, "_").concat(t)))
      })]
    })]
  })
}