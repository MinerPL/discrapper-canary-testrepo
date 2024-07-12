n.d(t, {
  h: function() {
return b;
  }
}), n(47120);
var r = n(735250),
  s = n(470079),
  a = n(442837),
  o = n(481060),
  i = n(607070),
  l = n(100527),
  c = n(906732),
  d = n(44315),
  u = n(810090),
  p = n(626135),
  g = n(328347),
  f = n(530915),
  C = n(948625),
  m = n(981631),
  h = n(395114);

function _(e) {
  var t, n;
  let {
config: a,
index: i,
handleCTAClick: l,
text: c,
reducedMotion: p = !1
  } = e, g = s.useMemo(() => (0, C.E8)(a, p), [
a,
p
  ]);
  return (0, r.jsxs)('div', {
className: h.headerContainer,
children: [
  (0, r.jsxs)('div', {
    className: h.headerInnerContainer,
    children: [
      null == a.backgroundVideoSrc || p ? (0, r.jsx)('img', {
        src: a.backgroundStaticSrc,
        alt: '',
        className: h.headerAsset
      }) : (0, r.jsx)(u.Z, {
        autoPlay: !0,
        muted: !0,
        loop: !0,
        playsInline: !0,
        responsive: !0,
        className: h.headerAsset,
        children: (0, r.jsx)('source', {
          src: a.backgroundVideoSrc,
          type: 'video/mp4'
        })
      }),
      (0, r.jsxs)('div', {
        className: h.headerContent,
        style: {
          color: null !== (t = a.textColor) && void 0 !== t ? t : (0, d.Lq)(m.Ilk.WHITE_100)
        },
        children: [
          (0, r.jsx)('div', {
            className: h.badgeContainer,
            style: {
              visibility: null != a.badge ? 'visible' : 'hidden'
            },
            children: null != a.badge && (0, r.jsx)(o.Text, {
              variant: 'text-xs/semibold',
              className: h.badge,
              children: a.badge.label()
            })
          }),
          (0, r.jsxs)('div', {
            className: h.logoAndDescriptionContainer,
            children: [
              null != a.logoSrc && (0, r.jsx)('img', {
                src: a.logoSrc,
                alt: '',
                className: h.logo
              }),
              (null != a.description || null != c) && (0, r.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'currentColor',
                children: null !== (n = a.description) && void 0 !== n ? n : c
              })
            ]
          }),
          (0, r.jsx)('div', {
            children: null != a.cta && (0, r.jsx)(o.Button, {
              onClick: () => l(a, i),
              children: a.cta.label()
            })
          })
        ]
      })
    ]
  }),
  g.map((e, t) => (0, r.jsx)('img', {
    src: e,
    className: h.overflowImage,
    alt: ''
  }, t))
]
  });
}

function b(e) {
  let {
categories: t,
handleScrollToCategory: n
  } = e, o = s.useMemo(() => {
let e = {};
for (let n of t)
  e[n.skuId] = n;
return e;
  }, [t]), d = s.useMemo(() => (0, C.yc)(o), [o]), {
analyticsLocations: u
  } = (0, a.cj)([g.Z], () => g.Z.getAnalytics()), {
analyticsLocations: b
  } = (0, c.ZP)([
...u,
l.Z.COLLECTIBLES_SHOP_HEADER_CAROUSEL
  ]), x = s.useCallback((e, t) => {
let r = e.cta;
p.default.track(m.rMx.SHOP_HEADER_CAROUSEL_CTA_CLICKED, {
  location_stack: b,
  slide_id: e.id,
  slide_index: t,
  sku_id: null == r ? void 0 : r.categorySkuId
}), (null == r ? void 0 : r.categorySkuId) != null && n(r.categorySkuId);
  }, [
b,
n
  ]), I = (0, a.e7)([i.Z], () => i.Z.useReducedMotion), E = s.useCallback((e, t) => {
var n, s;
let a = null === (n = e.cta) || void 0 === n ? void 0 : n.categorySkuId,
  i = null != a ? null === (s = o[a]) || void 0 === s ? void 0 : s.summary : void 0;
return (0, r.jsx)(_, {
  config: e,
  text: i,
  handleCTAClick: x,
  reducedMotion: I,
  index: t
});
  }, [
o,
x,
I
  ]), L = s.useCallback(e => {
var t;
return null === (t = d[e]) || void 0 === t ? void 0 : t.id;
  }, [d]);
  return (0, r.jsx)('div', {
className: h.carouselContainer,
children: (0, r.jsx)(f.U, {
  carouselId: 'collectibles_shop_header_carousel',
  className: h.carousel,
  items: d,
  renderItem: E,
  getItemId: L,
  controlsClassName: h.paginationControls,
  paginationButtonClassName: h.paginationButton,
  delay: 6000,
  analyticsLocations: b,
  unidirectional: !0
})
  });
}