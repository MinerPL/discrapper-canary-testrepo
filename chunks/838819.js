n.r(t), n(47120);
var r = n(735250),
  s = n(470079),
  a = n(120356),
  o = n.n(a),
  i = n(392711),
  l = n(979554),
  c = n(399606),
  d = n(704215),
  u = n(952265),
  p = n(780384),
  g = n(481060),
  f = n(150063),
  C = n(434650),
  m = n(100527),
  h = n(906732),
  _ = n(702486),
  b = n(514361),
  x = n(605236),
  I = n(479446),
  E = n(981632),
  L = n(290026),
  S = n(210887),
  v = n(819640),
  T = n(594174),
  N = n(626135),
  O = n(74538),
  j = n(335131),
  Z = n(372047),
  k = n(328347),
  R = n(280773),
  A = n(617452),
  P = n(223143),
  B = n(675052),
  M = n(298228),
  y = n(937510),
  w = n(853748),
  F = n(426171),
  D = n(823941),
  H = n(752053),
  U = n(963102),
  G = n(128185),
  W = n(508498),
  V = n(38900),
  Y = n(709999),
  z = n(373113),
  K = n(399033),
  X = n(994896),
  q = n(141594),
  $ = n(302800),
  J = n(981631),
  Q = n(921944),
  ee = n(420212),
  et = n(474936),
  en = n(689938),
  er = n(425391);

function es(e) {
  let {
products: t,
handleShopCardMount: n,
header: s,
category: a,
isPremiumUser: o,
isGiftEasterEggEnabled: i
  } = e, l = (0, c.e7)([T.default], () => T.default.getCurrentUser());
  return null == l || 0 === t.length ? null : (0, r.jsxs)('div', {
children: [
  null != s ? (0, r.jsx)(g.Text, {
    className: er.itemTypeTitle,
    color: 'header-secondary',
    variant: 'text-sm/bold',
    children: s
  }) : (0, r.jsx)(g.Spacer, {
    size: 24
  }),
  (0, r.jsx)('div', {
    className: er.cardsContainer,
    children: t.map(e => (0, r.jsx)(Y.Z, {
      onMount: n(e),
      isPremiumUser: o,
      category: a,
      product: e,
      user: l,
      isGiftEasterEggEnabled: i
    }, e.skuId))
  })
]
  });
}

function ea(e) {
  let {
category: t,
initialItemCardRef: n,
includeBundles: a = !1,
...o
  } = e, d = (0, y.l)(t.products), u = (0, c.e7)([k.Z], () => k.Z.initialProductSkuId), p = s.useCallback(e => t => {
e.skuId === u && (n.current = t.current);
  }, [
u,
n
  ]), {
unifiedProductCatalogEnabled: g
  } = (0, R.n)('CollectiblesShop');
  if (g || a)
return (0, r.jsx)(es, {
  products: d,
  handleShopCardMount: p,
  category: t,
  ...o
});
  {
var f, C;
let e = (0, i.groupBy)(d, 'type');
return (0, r.jsxs)(r.Fragment, {
  children: [
    (0, r.jsx)(es, {
      products: null !== (f = e[l.Z.AVATAR_DECORATION]) && void 0 !== f ? f : [],
      handleShopCardMount: p,
      category: t,
      header: en.Z.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER,
      ...o
    }),
    (0, r.jsx)(es, {
      products: null !== (C = e[l.Z.PROFILE_EFFECT]) && void 0 !== C ? C : [],
      handleShopCardMount: p,
      category: t,
      header: en.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      ...o
    })
  ]
});
  }
}

function eo(e) {
  let {
category: t,
isPremiumUser: n,
initialItemCardRef: a,
isGiftEasterEggEnabled: i,
setIsGiftEasterEggEnabled: l,
showEasterEggToggle: c,
isFullScreen: d,
index: u,
includeBundles: p = !1
  } = e, f = s.useRef(10 + 70 * Math.random()), [m, h] = s.useState(!1), _ = (0, $.M7)(t.skuId), b = (0, C.O)(e => {
h(e && null != _);
  }, d ? 0.13 : 0.15);
  return (0, r.jsxs)('div', {
className: er.categoryWrapper,
ref: b,
children: [
  c && (0, r.jsx)(g.Clickable, {
    className: o()(er.hiddenWumpus, {
      [er.hiddenWumpusEnabled]: i
    }),
    onClick: () => l(!0),
    style: {
      left: ''.concat(f.current, '%')
    },
    children: (0, r.jsx)(E.Z, {
      idleAnimationState: I.S.IDLE,
      giftStyle: et.Cj.BOX
    })
  }),
  (0, r.jsx)(D.Z, {
    category: t,
    hideLimitedTimeBadge: null != _,
    index: u
  }),
  (0, r.jsx)(ea, {
    category: t,
    initialItemCardRef: a,
    isPremiumUser: n,
    isGiftEasterEggEnabled: i,
    includeBundles: p
  }),
  null != _ && null != t.unpublishedAt && (0, r.jsx)(w.$, {
    unpublishedAt: t.unpublishedAt,
    isVisible: m,
    displayOptions: _,
    isFullScreen: d
  })
]
  });
}
t.default = function(e) {
  let {
isFullScreen: t = !0
  } = e, {
analyticsSource: n,
analyticsLocations: a
  } = (0, c.cj)([k.Z], () => k.Z.getAnalytics()), {
analyticsLocations: i
  } = (0, h.ZP)([
...a,
m.Z.COLLECTIBLES_SHOP
  ]), C = (0, c.e7)([v.Z], () => v.Z.getLayers().includes(J.S9g.COLLECTIBLES_SHOP)), I = (0, u.f9)(), {
onClose: E
  } = (0, W.Db)(), R = (0, c.e7)([T.default], () => T.default.getCurrentUser()), y = O.ZP.canUseCollectibles(R), {
categories: w,
isFetchingCategories: D,
error: Y,
refreshCategories: $
  } = (0, P.Z)();
  (0, L.P)();
  let es = (0, M.O)(w),
{
  sortedPopularPickProducts: ea,
  popularProductToCategoryMap: ei
} = (0, B.a)(w),
el = (0, A.e)('CollectiblesShop'),
ec = s.useRef(null),
[ed, eu] = s.useState(!1);
  (0, F.Kp)({
categories: w,
isFetchingCategories: D,
isLayer: C,
initialItemCardRef: ec
  });
  let {
sessionId: ep,
scrollerRef: eg,
scrollHandler: ef
  } = (0, _._)(J.rMx.COLLECTIBLES_SHOP_SCROLLED, n);
  s.useEffect(() => {
N.default.track(J.rMx.COLLECTIBLES_SHOP_VIEWED, {
  location_stack: i,
  source: n,
  page_session_id: ep
}), !y && N.default.track(J.rMx.PREMIUM_UPSELL_VIEWED, {
  type: et.cd.COLLECTIBLES_SHOP,
  location_stack: i
});
  }, [
y,
i,
n,
ep
  ]);
  let {
dismissCollectiblesShopTabNewBadge: eC
  } = (0, q.Z)();
  s.useEffect(() => {
if (eC(), !(0, x.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK))
  (0, x.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
    dismissAction: Q.L.AUTO_DISMISS,
    forceTrack: !0
  });
  }, [eC]), s.useEffect(() => {
!t && (0, f.Y)(J.Z5c.COLLECTIBLES_SHOP);
  }, [t]), s.useEffect(() => () => {
(0, j.K$)({
  categories: [...w.values()],
  itemTypes: [
    l.Z.AVATAR_DECORATION,
    l.Z.PROFILE_EFFECT
  ]
});
  }, [w]), s.useEffect(() => {
if (!t || C || I)
  return;
let e = e => {
  if (e.key === ee.mR.Escape)
    E();
};
return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
  }, [
t,
C,
I,
E
  ]);
  let em = s.useCallback(() => {
  $();
}, [$]),
{
  containerRef: eh
} = function() {
  let e = s.useRef(null),
    t = s.useRef(null);
  return (0, g.useFocusLock)(e, {
    returnRef: t
  }), {
    containerRef: e,
    returnRef: t
  };
}(),
{
  setCategoryRef: e_,
  handleScrollToCategory: eb
} = (0, F.xV)(eg.current),
{
  condensedBannersAndDynamicHeadersEnabled: ex
} = (0, X.O)({
  location: 'CollectiblesShop'
}),
{
  enabled: eI
} = (0, Z.Z)({
  location: 'CollectiblesShop'
}),
eE = (0, c.e7)([b.Z], () => b.Z.gradientPreset),
eL = !(0, c.e7)([S.Z], () => (0, p.wj)(S.Z.theme)) && null == eE;
  return (0, r.jsxs)(h.Gt, {
value: i,
children: [
  (0, r.jsx)('div', {
    className: er.shop,
    ref: t ? eh : void 0,
    children: (0, r.jsxs)(g.AdvancedScroller, {
      className: er.shopScroll,
      ref: eg,
      onScroll: ef,
      children: [
        (0, r.jsx)(U.I, {
          isFullScreen: t,
          isLayer: C,
          onClose: E
        }),
        (0, r.jsx)('div', {
          className: er.pageWrapper,
          children: (0, r.jsxs)('main', {
            className: o()(er.page, {
              [er.pageFullscreen]: t
            }),
            children: [
              ex && es.length > 0 && (0, r.jsx)(G.h, {
                categories: es,
                handleScrollToCategory: eb
              }),
              eI && (0, r.jsxs)('div', {
                className: o()(er.popularPicksContainer, eL ? er.defaultLightModeCustomGradient : er.popularPicksGradient),
                children: [
                  (0, r.jsx)(g.Text, {
                    className: er.popularPicksHeader,
                    variant: 'text-lg/medium',
                    children: en.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                  }),
                  (0, r.jsx)(K.Z, {
                    products: ea,
                    user: R,
                    productToCategoryMap: ei
                  })
                ]
              }),
              D ? (0, r.jsx)(V.Z, {}) : Y ? (0, r.jsx)(H.Z, {
                onRetry: em
              }) : (0, r.jsx)('div', {
                className: er.categories,
                children: es.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date()).filter(e => {
                  let {
                    products: t
                  } = e;
                  return t.length > 0;
                }).map((e, n) => (0, r.jsx)('div', {
                  ref: t => e_(e.skuId, t),
                  children: (0, r.jsx)(eo, {
                    isPremiumUser: y,
                    category: e,
                    initialItemCardRef: ec,
                    setIsGiftEasterEggEnabled: eu,
                    isGiftEasterEggEnabled: ed,
                    isFullScreen: t,
                    includeBundles: el,
                    index: n
                  })
                }, e.skuId))
              })
            ]
          })
        })
      ]
    })
  }),
  ed && (0, r.jsx)(z.Z, {})
]
  });
};