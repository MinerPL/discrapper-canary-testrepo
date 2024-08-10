n.d(t, {
  h: function() {
return b;
  }
}), n(47120);
var s = n(735250),
  r = n(470079),
  a = n(442837),
  i = n(481060),
  o = n(607070),
  c = n(100527),
  l = n(906732),
  d = n(44315),
  u = n(70097),
  f = n(626135),
  p = n(328347),
  g = n(530915),
  C = n(948625),
  _ = n(981631),
  m = n(395114);

function h(e) {
  var t, n;
  let {
config: a,
index: o,
handleCTAClick: c,
text: l,
reducedMotion: f = !1
  } = e, p = r.useMemo(() => (0, C.E8)(a, f), [
a,
f
  ]);
  return (0, s.jsxs)('div', {
className: m.headerContainer,
children: [
  (0, s.jsxs)('div', {
    className: m.headerInnerContainer,
    children: [
      null == a.backgroundVideoSrc || f ? (0, s.jsx)('img', {
        src: a.backgroundStaticSrc,
        alt: '',
        className: m.headerAsset
      }) : (0, s.jsx)(u.Z, {
        autoPlay: !0,
        muted: !0,
        loop: !0,
        playsInline: !0,
        responsive: !0,
        className: m.headerAsset,
        children: (0, s.jsx)('source', {
          src: a.backgroundVideoSrc,
          type: 'video/mp4'
        })
      }),
      (0, s.jsxs)('div', {
        className: m.headerContent,
        style: {
          color: null !== (t = a.textColor) && void 0 !== t ? t : (0, d.Lq)(_.Ilk.WHITE_100)
        },
        children: [
          (0, s.jsx)('div', {
            className: m.badgeContainer,
            style: {
              visibility: null != a.badge ? 'visible' : 'hidden'
            },
            children: null != a.badge && (0, s.jsx)(i.Text, {
              variant: 'text-xs/semibold',
              className: m.badge,
              children: a.badge.label()
            })
          }),
          (0, s.jsxs)('div', {
            className: m.logoAndDescriptionContainer,
            children: [
              null != a.logoSrc && (0, s.jsx)('img', {
                src: a.logoSrc,
                alt: '',
                className: m.logo
              }),
              (null != a.description || null != l) && (0, s.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'currentColor',
                children: null !== (n = a.description) && void 0 !== n ? n : l
              })
            ]
          }),
          (0, s.jsx)('div', {
            children: null != a.cta && (0, s.jsx)(i.Button, {
              onClick: () => c(a, o),
              children: a.cta.label()
            })
          })
        ]
      })
    ]
  }),
  p.map((e, t) => (0, s.jsx)('img', {
    src: e,
    className: m.overflowImage,
    alt: ''
  }, t))
]
  });
}

function b(e) {
  let {
categories: t,
handleScrollToCategory: n
  } = e, i = r.useMemo(() => {
let e = {};
for (let n of t)
  e[n.skuId] = n;
return e;
  }, [t]), d = r.useMemo(() => (0, C.yc)(i), [i]), {
analyticsLocations: u
  } = (0, a.cj)([p.Z], () => p.Z.getAnalytics()), {
analyticsLocations: b
  } = (0, l.ZP)([
...u,
c.Z.COLLECTIBLES_SHOP_HEADER_CAROUSEL
  ]), x = r.useCallback((e, t) => {
let s = e.cta;
f.default.track(_.rMx.SHOP_HEADER_CAROUSEL_CTA_CLICKED, {
  location_stack: b,
  slide_id: e.id,
  slide_index: t,
  sku_id: null == s ? void 0 : s.categorySkuId
}), (null == s ? void 0 : s.categorySkuId) != null && n(s.categorySkuId);
  }, [
b,
n
  ]), E = (0, a.e7)([o.Z], () => o.Z.useReducedMotion), I = r.useCallback((e, t) => {
var n, r;
let a = null === (n = e.cta) || void 0 === n ? void 0 : n.categorySkuId,
  o = null != a ? null === (r = i[a]) || void 0 === r ? void 0 : r.summary : void 0;
return (0, s.jsx)(h, {
  config: e,
  text: o,
  handleCTAClick: x,
  reducedMotion: E,
  index: t
});
  }, [
i,
x,
E
  ]), v = r.useCallback(e => {
var t;
return null === (t = d[e]) || void 0 === t ? void 0 : t.id;
  }, [d]);
  return (0, s.jsx)('div', {
className: m.carouselContainer,
children: (0, s.jsx)(g.U, {
  carouselId: 'collectibles_shop_header_carousel',
  className: m.carousel,
  items: d,
  renderItem: I,
  getItemId: v,
  controlsClassName: m.paginationControls,
  paginationButtonClassName: m.paginationButton,
  delay: 6000,
  analyticsLocations: b,
  unidirectional: !0
})
  });
}