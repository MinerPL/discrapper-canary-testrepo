"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("803997"),
  n = s.n(r),
  l = s("911765"),
  o = s("481060"),
  u = s("410154"),
  d = s("846363"),
  c = s("314684"),
  _ = s("565626"),
  E = s("32173"),
  T = s("391110"),
  I = s("75077"),
  R = s("320319"),
  S = s("755655");
let f = e => {
  let {
    showAllPerksButton: t,
    leftAlignHeaders: s,
    title: i,
    headerClassname: r
  } = e, n = (0, a.jsx)(o.Heading, {
    variant: "heading-xxl/extrabold",
    color: "header-primary",
    className: null != r ? r : S.heading,
    children: i
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
    variant: r = T.PerksDiscoverabilityCardSection.PERKS_DISCOVERABILITY,
    noBackground: m = !1,
    leftAlignHeaders: N = !1,
    showAllPerksButton: A,
    headerClassname: p,
    isFullScreen: C = !0
  } = e, g = i.useRef(null), O = (0, _.useShouldScrollToWhatsNew)(), P = (0, u.default)("perks-discoverability"), M = (0, d.useMarketingOptimizationExperiment)({
    autoTrackExposure: !1
  });
  (0, _.useClearNewBadge)();
  let h = r === T.PerksDiscoverabilityCardSection.WHATS_NEW,
    L = (0, c.useClearTenureBadge)();
  i.useEffect(() => {
    h && L()
  }, [L, h]), i.useEffect(() => {
    let e = g.current;
    if (null == e || !O || !h) return;
    let t = requestAnimationFrame(() => {
      e.scrollIntoView({
        behavior: "smooth"
      })
    });
    return () => cancelAnimationFrame(t)
  }, [g, O, h]);
  let x = (0, I.usePerksDiscoverabilityStrings)(h),
    v = (0, E.default)(),
    D = (0, c.useFreeBoostUserTenureReward)(),
    b = (0, I.getFilteredPerksDiscoverabilityCards)(v, r, P, C, null == D ? void 0 : D.showNotification),
    U = b.some(e => null != e.pillText),
    [j, y] = i.useState(null),
    B = i.useRef(new l.Environment);
  return (0, a.jsxs)(a.Fragment, {
    children: [(null == v ? void 0 : null === (t = v.freeBoost) || void 0 === t ? void 0 : t.name) === E.PerksDiscoverabilityCardTypes.FREE_BOOST && (0, a.jsx)(l.ConfettiCanvas, {
      ref: y,
      className: S.confettiCanvas,
      environment: B.current
    }), (0, a.jsxs)("div", {
      ref: g,
      className: n()(S.section, {
        [S.centerAlignSection]: !N,
        [S.leftAlignSection]: N
      }, s),
      children: [(0, a.jsx)(f, {
        showAllPerksButton: A,
        leftAlignHeaders: N,
        title: x.title,
        headerClassname: p
      }), !M && (0, a.jsx)(o.Text, {
        variant: "text-lg/normal",
        color: "header-primary",
        className: n()(S.subtitle, {
          [S.subtitle]: null == A || N,
          [S.subtitleWithButton]: null != A && !N,
          [S.fullWidth]: h || N,
          [S.moreSubtitleMargin]: U,
          [S.leftAlignSubtitle]: N,
          [S.centerAlignSubtitle]: !N
        }),
        children: x.subtitle
      }), !N && null != A && (0, a.jsx)("div", {
        className: n()(S.showAllPerksButtonCenter),
        children: A
      }), (0, a.jsx)("div", {
        className: n()({
          [S.cardContainer]: C,
          [S.cardContainerNarrowWidth]: !C
        }),
        children: b.map((e, t) => (0, a.jsx)(R.default, {
          confettiCanvas: e.name === E.PerksDiscoverabilityCardTypes.FREE_BOOST ? j : void 0,
          ...e,
          forceShadow: m
        }, "".concat(e.name, "_").concat(t)))
      })]
    })]
  })
}