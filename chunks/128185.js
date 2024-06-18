"use strict";
t.d(s, {
  h: function() {
    return x
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(442837),
  l = t(481060),
  r = t(607070),
  o = t(100527),
  c = t(906732),
  u = t(44315),
  d = t(810090),
  C = t(626135),
  E = t(328347),
  f = t(530915),
  m = t(948625),
  p = t(981631),
  g = t(139557);

function h(e) {
  var s, t;
  let {
    config: i,
    index: r,
    handleCTAClick: o,
    text: c,
    reducedMotion: C = !1
  } = e, E = a.useMemo(() => (0, m.E8)(i, C), [i, C]);
  return (0, n.jsxs)("div", {
    className: g.headerContainer,
    children: [(0, n.jsxs)("div", {
      className: g.headerInnerContainer,
      children: [null == i.backgroundVideoSrc || C ? (0, n.jsx)("img", {
        src: i.backgroundStaticSrc,
        alt: "",
        className: g.headerAsset
      }) : (0, n.jsx)(d.Z, {
        autoPlay: !0,
        muted: !0,
        loop: !0,
        playsInline: !0,
        responsive: !0,
        className: g.headerAsset,
        children: (0, n.jsx)("source", {
          src: i.backgroundVideoSrc,
          type: "video/mp4"
        })
      }), (0, n.jsxs)("div", {
        className: g.headerContent,
        style: {
          color: null !== (s = i.textColor) && void 0 !== s ? s : (0, u.Lq)(p.Ilk.WHITE_100)
        },
        children: [(0, n.jsx)("div", {
          className: g.badgeContainer,
          style: {
            visibility: null != i.badge ? "visible" : "hidden"
          },
          children: null != i.badge && (0, n.jsx)(l.Text, {
            variant: "text-xs/bold",
            className: g.badge,
            children: i.badge.label()
          })
        }), (0, n.jsxs)("div", {
          className: g.logoAndDescriptionContainer,
          children: [null != i.logoSrc && (0, n.jsx)("img", {
            src: i.logoSrc,
            alt: "",
            className: g.logo
          }), (null != i.description || null != c) && (0, n.jsx)(l.Text, {
            variant: "text-md/medium",
            color: "currentColor",
            children: null !== (t = i.description) && void 0 !== t ? t : c
          })]
        }), (0, n.jsx)("div", {
          children: null != i.cta && (0, n.jsx)(l.Button, {
            onClick: () => o(i, r),
            children: i.cta.label()
          })
        })]
      })]
    }), E.map((e, s) => (0, n.jsx)("img", {
      src: e,
      className: g.overflowImage,
      alt: ""
    }, s))]
  })
}

function x(e) {
  let {
    categories: s,
    handleScrollToCategory: t
  } = e, {
    analyticsLocations: l
  } = (0, i.cj)([E.Z], () => E.Z.getAnalytics()), {
    analyticsLocations: u
  } = (0, c.ZP)([...l, o.Z.COLLECTIBLES_SHOP_HEADER_CAROUSEL]), d = a.useCallback((e, s) => {
    let n = e.cta;
    C.default.track(p.rMx.SHOP_HEADER_CAROUSEL_CTA_CLICKED, {
      location_stack: u,
      slide_id: e.id,
      slide_index: s,
      sku_id: null == n ? void 0 : n.categorySkuId
    }), (null == n ? void 0 : n.categorySkuId) != null && t(n.categorySkuId)
  }, [u, t]), x = (0, i.e7)([r.Z], () => r.Z.useReducedMotion), _ = a.useMemo(() => {
    let e = {};
    for (let t of s) e[t.skuId] = t.summary;
    return e
  }, [s]), I = a.useCallback((e, s) => {
    var t;
    let a = null === (t = e.cta) || void 0 === t ? void 0 : t.categorySkuId,
      i = null != a ? _[a] : void 0;
    return (0, n.jsx)(h, {
      config: e,
      text: i,
      handleCTAClick: d,
      reducedMotion: x,
      index: s
    })
  }, [_, d, x]), T = a.useCallback(e => {
    var s;
    return null === (s = m.T8[e]) || void 0 === s ? void 0 : s.id
  }, []);
  return (0, n.jsx)("div", {
    className: g.carouselContainer,
    children: (0, n.jsx)(f.U, {
      carouselId: "collectibles_shop_header_carousel",
      className: g.carousel,
      items: m.T8,
      renderItem: I,
      getItemId: T,
      controlsClassName: g.paginationControls,
      paginationButtonClassName: g.paginationButton,
      delay: 6e3,
      analyticsLocations: u,
      unidirectional: !0
    })
  })
}