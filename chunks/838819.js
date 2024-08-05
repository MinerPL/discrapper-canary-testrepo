n.r(t), n(47120);
var s = n(735250),
  r = n(470079),
  a = n(120356),
  o = n.n(a),
  i = n(392711),
  c = n(979554),
  l = n(399606),
  d = n(704215),
  u = n(952265),
  f = n(780384),
  p = n(481060),
  g = n(150063),
  C = n(434650),
  _ = n(100527),
  m = n(906732),
  b = n(702486),
  h = n(514361),
  x = n(605236),
  E = n(977395),
  I = n(479446),
  v = n(981632),
  L = n(290026),
  S = n(210887),
  T = n(819640),
  N = n(594174),
  O = n(626135),
  k = n(74538),
  j = n(335131),
  P = n(372047),
  A = n(328347),
  B = n(280773),
  R = n(617452),
  Z = n(223143),
  M = n(675052),
  y = n(298228),
  w = n(937510),
  F = n(853748),
  H = n(426171),
  D = n(823941),
  U = n(752053),
  G = n(963102),
  W = n(128185),
  V = n(508498),
  z = n(38900),
  Y = n(709999),
  K = n(373113),
  X = n(399033),
  q = n(994896),
  $ = n(141594),
  J = n(302800),
  Q = n(981631),
  ee = n(921944),
  et = n(420212),
  en = n(474936),
  es = n(689938),
  er = n(425391);

function ea(e) {
  let {
products: t,
handleShopCardMount: n,
header: r,
category: a,
isPremiumUser: o,
isGiftEasterEggEnabled: i
  } = e, c = (0, l.e7)([N.default], () => N.default.getCurrentUser());
  return null == c || 0 === t.length ? null : (0, s.jsxs)('div', {
children: [
  null != r ? (0, s.jsx)(p.Text, {
    className: er.itemTypeTitle,
    color: 'header-secondary',
    variant: 'text-sm/bold',
    children: r
  }) : (0, s.jsx)(p.Spacer, {
    size: 24
  }),
  (0, s.jsx)('div', {
    className: er.cardsContainer,
    children: t.map(e => (0, s.jsx)(Y.Z, {
      onMount: n(e),
      isPremiumUser: o,
      category: a,
      product: e,
      user: c,
      isGiftEasterEggEnabled: i
    }, e.skuId))
  })
]
  });
}

function eo(e) {
  let {
category: t,
initialItemCardRef: n,
includeBundles: a = !1,
...o
  } = e, d = (0, w.l)(t.products), u = (0, l.e7)([A.Z], () => A.Z.initialProductSkuId), f = r.useCallback(e => t => {
e.skuId === u && (n.current = t.current);
  }, [
u,
n
  ]), {
unifiedProductCatalogEnabled: p
  } = (0, B.n)('CollectiblesShop');
  if (p || a)
return (0, s.jsx)(ea, {
  products: d,
  handleShopCardMount: f,
  category: t,
  ...o
});
  {
var g, C;
let e = (0, i.groupBy)(d, 'type');
return (0, s.jsxs)(s.Fragment, {
  children: [
    (0, s.jsx)(ea, {
      products: null !== (g = e[c.Z.AVATAR_DECORATION]) && void 0 !== g ? g : [],
      handleShopCardMount: f,
      category: t,
      header: es.Z.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER,
      ...o
    }),
    (0, s.jsx)(ea, {
      products: null !== (C = e[c.Z.PROFILE_EFFECT]) && void 0 !== C ? C : [],
      handleShopCardMount: f,
      category: t,
      header: es.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      ...o
    })
  ]
});
  }
}

function ei(e) {
  let {
category: t,
isPremiumUser: n,
initialItemCardRef: a,
isGiftEasterEggEnabled: i,
setIsGiftEasterEggEnabled: c,
showEasterEggToggle: l,
isFullScreen: d,
index: u,
includeBundles: f = !1
  } = e, g = r.useRef(10 + 70 * Math.random()), [_, m] = r.useState(!1), b = (0, J.M7)(t.skuId), h = (0, C.O)(e => {
m(e && null != b);
  }, d ? 0.13 : 0.15);
  return (0, s.jsxs)('div', {
className: er.categoryWrapper,
ref: h,
children: [
  l && (0, s.jsx)(p.Clickable, {
    className: o()(er.hiddenWumpus, {
      [er.hiddenWumpusEnabled]: i
    }),
    onClick: () => c(!0),
    style: {
      left: ''.concat(g.current, '%')
    },
    children: (0, s.jsx)(v.Z, {
      idleAnimationState: I.S.IDLE,
      giftStyle: en.Cj.BOX
    })
  }),
  (0, s.jsx)(D.Z, {
    category: t,
    hideLimitedTimeBadge: null != b,
    index: u
  }),
  (0, s.jsx)(eo, {
    category: t,
    initialItemCardRef: a,
    isPremiumUser: n,
    isGiftEasterEggEnabled: i,
    includeBundles: f
  }),
  null != b && null != t.unpublishedAt && (0, s.jsx)(F.$, {
    unpublishedAt: t.unpublishedAt,
    isVisible: _,
    displayOptions: b,
    isFullScreen: d
  })
]
  });
}
t.default = function(e) {
  let {
isFullScreen: t = !0
  } = e;
  r.useEffect(() => {
E.f.trigger();
  });
  let {
analyticsSource: n,
analyticsLocations: a
  } = (0, l.cj)([A.Z], () => A.Z.getAnalytics()), {
analyticsLocations: i
  } = (0, m.ZP)([
...a,
_.Z.COLLECTIBLES_SHOP
  ]), C = (0, l.e7)([T.Z], () => T.Z.getLayers().includes(Q.S9g.COLLECTIBLES_SHOP)), I = (0, u.f9)(), {
onClose: v
  } = (0, V.Db)(), B = (0, l.e7)([N.default], () => N.default.getCurrentUser()), w = k.ZP.canUseCollectibles(B), {
categories: F,
isFetchingCategories: D,
error: Y,
refreshCategories: J
  } = (0, Z.Z)();
  (0, L.P)();
  let ea = (0, y.O)(F),
{
  sortedPopularPickProducts: eo,
  popularProductToCategoryMap: ec
} = (0, M.a)(F),
el = (0, R.e)('CollectiblesShop'),
ed = r.useRef(null),
[eu, ef] = r.useState(!1);
  (0, H.Kp)({
categories: F,
isFetchingCategories: D,
isLayer: C,
initialItemCardRef: ed
  });
  let {
sessionId: ep,
scrollerRef: eg,
scrollHandler: eC
  } = (0, b._)(Q.rMx.COLLECTIBLES_SHOP_SCROLLED, n);
  r.useEffect(() => {
O.default.track(Q.rMx.COLLECTIBLES_SHOP_VIEWED, {
  location_stack: i,
  source: n,
  page_session_id: ep
}), !w && O.default.track(Q.rMx.PREMIUM_UPSELL_VIEWED, {
  type: en.cd.COLLECTIBLES_SHOP,
  location_stack: i
});
  }, [
w,
i,
n,
ep
  ]);
  let {
dismissCollectiblesShopTabNewBadge: e_
  } = (0, $.Z)();
  r.useEffect(() => {
if (e_(), !(0, x.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK))
  (0, x.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
    dismissAction: ee.L.AUTO_DISMISS,
    forceTrack: !0
  });
  }, [e_]), r.useEffect(() => {
!t && (0, g.Y)(Q.Z5c.COLLECTIBLES_SHOP);
  }, [t]), r.useEffect(() => () => {
(0, j.K$)({
  categories: [...F.values()],
  itemTypes: [
    c.Z.AVATAR_DECORATION,
    c.Z.PROFILE_EFFECT
  ]
});
  }, [F]), r.useEffect(() => {
if (!t || C || I)
  return;
let e = e => {
  if (e.key === et.mR.Escape)
    v();
};
return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
  }, [
t,
C,
I,
v
  ]);
  let em = r.useCallback(() => {
  J();
}, [J]),
{
  containerRef: eb
} = function() {
  let e = r.useRef(null),
    t = r.useRef(null);
  return (0, p.useFocusLock)(e, {
    returnRef: t
  }), {
    containerRef: e,
    returnRef: t
  };
}(),
{
  setCategoryRef: eh,
  handleScrollToCategory: ex
} = (0, H.xV)(eg.current),
{
  condensedBannersAndDynamicHeadersEnabled: eE
} = (0, q.O)({
  location: 'CollectiblesShop'
}),
{
  enabled: eI
} = (0, P.Z)({
  location: 'CollectiblesShop'
}),
ev = (0, l.e7)([h.Z], () => h.Z.gradientPreset),
eL = !(0, l.e7)([S.Z], () => (0, f.wj)(S.Z.theme)) && null == ev;
  return (0, s.jsxs)(m.Gt, {
value: i,
children: [
  (0, s.jsx)('div', {
    className: er.shop,
    ref: t ? eb : void 0,
    children: (0, s.jsxs)(p.AdvancedScroller, {
      className: er.shopScroll,
      ref: eg,
      onScroll: eC,
      children: [
        (0, s.jsx)(G.I, {
          isFullScreen: t,
          isLayer: C,
          onClose: v
        }),
        (0, s.jsx)('div', {
          className: er.pageWrapper,
          children: (0, s.jsxs)('main', {
            className: o()(er.page, {
              [er.pageFullscreen]: t
            }),
            children: [
              eE && ea.length > 0 && (0, s.jsx)(W.h, {
                categories: ea,
                handleScrollToCategory: ex
              }),
              eI && (0, s.jsxs)('div', {
                className: o()(er.popularPicksContainer, eL ? er.defaultLightModeCustomGradient : er.popularPicksGradient),
                children: [
                  (0, s.jsx)(p.Text, {
                    className: er.popularPicksHeader,
                    variant: 'text-lg/medium',
                    children: es.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                  }),
                  (0, s.jsx)(X.Z, {
                    products: eo,
                    user: B,
                    productToCategoryMap: ec
                  })
                ]
              }),
              D ? (0, s.jsx)(z.Z, {}) : Y ? (0, s.jsx)(U.Z, {
                onRetry: em
              }) : (0, s.jsx)('div', {
                className: er.categories,
                children: ea.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date()).filter(e => {
                  let {
                    products: t
                  } = e;
                  return t.length > 0;
                }).map((e, n) => (0, s.jsx)('div', {
                  ref: t => eh(e.skuId, t),
                  children: (0, s.jsx)(ei, {
                    isPremiumUser: w,
                    category: e,
                    initialItemCardRef: ed,
                    setIsGiftEasterEggEnabled: ef,
                    isGiftEasterEggEnabled: eu,
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
  eu && (0, s.jsx)(K.Z, {})
]
  });
};