"use strict";
t.r(s), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  l = t.n(i),
  r = t(392711),
  o = t(979554),
  c = t(399606),
  u = t(704215),
  d = t(952265),
  C = t(481060),
  E = t(150063),
  f = t(434650),
  m = t(100527),
  p = t(906732),
  g = t(702486),
  h = t(605236),
  x = t(51855),
  _ = t(479446),
  I = t(981632),
  T = t(290026),
  N = t(819640),
  S = t(594174),
  L = t(626135),
  b = t(74538),
  v = t(335131),
  O = t(328347),
  Z = t(280773),
  A = t(884697),
  R = t(617452),
  j = t(223143),
  P = t(298228),
  M = t(937510),
  k = t(853748),
  B = t(426171),
  y = t(823941),
  F = t(752053),
  D = t(963102),
  U = t(128185),
  H = t(861746),
  w = t(508498),
  G = t(38900),
  W = t(709999),
  V = t(373113),
  Y = t(994896),
  z = t(141594),
  K = t(302800),
  X = t(981631),
  q = t(921944),
  Q = t(420212),
  $ = t(474936),
  J = t(689938),
  ee = t(425734);

function es(e) {
  let {
    products: s,
    handleShopCardMount: t,
    header: a,
    category: i,
    isPremiumUser: l,
    isGiftEasterEggEnabled: r,
    lightningCheckoutEnabled: o
  } = e, u = (0, c.e7)([S.default], () => S.default.getCurrentUser());
  return null == u || 0 === s.length ? null : (0, n.jsxs)("div", {
    children: [null != a ? (0, n.jsx)(C.Text, {
      className: ee.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: a
    }) : (0, n.jsx)(C.Spacer, {
      size: 24
    }), (0, n.jsx)("div", {
      className: ee.cardsContainer,
      children: s.map(e => {
        var s;
        let a = (s = e, !o || (0, A.x6)(s) ? W.Z : H.Z);
        return (0, n.jsx)(a, {
          onMount: t(e),
          isPremiumUser: l,
          category: i,
          product: e,
          user: u,
          isGiftEasterEggEnabled: r
        }, e.skuId)
      })
    })]
  })
}

function et(e) {
  let {
    category: s,
    initialItemCardRef: t,
    includeBundles: i = !1,
    ...l
  } = e, u = (0, M.l)(s.products), d = (0, c.e7)([O.Z], () => O.Z.initialProductSkuId), C = a.useCallback(e => s => {
    e.skuId === d && (t.current = s.current)
  }, [d, t]), {
    unifiedProductCatalogEnabled: E
  } = (0, Z.n)("CollectiblesShop");
  if (E || i) return (0, n.jsx)(es, {
    products: u,
    handleShopCardMount: C,
    category: s,
    ...l
  });
  {
    var f, m;
    let e = (0, r.groupBy)(u, "type");
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(es, {
        products: null !== (f = e[o.Z.AVATAR_DECORATION]) && void 0 !== f ? f : [],
        handleShopCardMount: C,
        category: s,
        header: J.Z.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER,
        ...l
      }), (0, n.jsx)(es, {
        products: null !== (m = e[o.Z.PROFILE_EFFECT]) && void 0 !== m ? m : [],
        handleShopCardMount: C,
        category: s,
        header: J.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
        ...l
      })]
    })
  }
}

function en(e) {
  let {
    category: s,
    isPremiumUser: t,
    initialItemCardRef: i,
    isGiftEasterEggEnabled: r,
    setIsGiftEasterEggEnabled: o,
    showEasterEggToggle: c,
    isFullScreen: u,
    lightningCheckoutEnabled: d,
    index: E,
    includeBundles: m = !1
  } = e, p = a.useRef(10 + 70 * Math.random()), [g, h] = a.useState(!1), x = (0, K.M7)(s.skuId), T = (0, f.O)(e => {
    h(e && null != x)
  }, u ? .13 : .15);
  return (0, n.jsxs)("div", {
    className: ee.categoryWrapper,
    ref: T,
    children: [c && (0, n.jsx)(C.Clickable, {
      className: l()(ee.hiddenWumpus, {
        [ee.hiddenWumpusEnabled]: r
      }),
      onClick: () => o(!0),
      style: {
        left: "".concat(p.current, "%")
      },
      children: (0, n.jsx)(I.Z, {
        idleAnimationState: _.S.IDLE,
        giftStyle: $.Cj.BOX
      })
    }), (0, n.jsx)(y.Z, {
      category: s,
      hideLimitedTimeBadge: null != x,
      index: E
    }), (0, n.jsx)(et, {
      category: s,
      initialItemCardRef: i,
      isPremiumUser: t,
      isGiftEasterEggEnabled: r,
      lightningCheckoutEnabled: d,
      includeBundles: m
    }), null != x && null != s.unpublishedAt && (0, n.jsx)(k.$, {
      unpublishedAt: s.unpublishedAt,
      isVisible: g,
      displayOptions: x,
      isFullScreen: u
    })]
  })
}
s.default = function(e) {
  let {
    isFullScreen: s = !0
  } = e, {
    analyticsSource: t,
    analyticsLocations: i
  } = (0, c.cj)([O.Z], () => O.Z.getAnalytics()), {
    analyticsLocations: r
  } = (0, p.ZP)([...i, m.Z.COLLECTIBLES_SHOP]), f = (0, c.e7)([N.Z], () => N.Z.getLayers().includes(X.S9g.COLLECTIBLES_SHOP)), _ = (0, d.f9)(), {
    onClose: I
  } = (0, w.Db)(), Z = (0, c.e7)([S.default], () => S.default.getCurrentUser()), A = b.ZP.canUseCollectibles(Z), {
    categories: M,
    isFetchingCategories: k,
    error: y,
    refreshCategories: H
  } = (0, j.Z)();
  (0, T.P)();
  let W = (0, P.O)(M),
    K = (0, x.Q)(),
    J = (0, R.e)("CollectiblesShop"),
    es = a.useRef(null),
    [et, ea] = a.useState(!1);
  (0, B.Kp)({
    categories: M,
    isFetchingCategories: k,
    isLayer: f,
    initialItemCardRef: es
  });
  let {
    sessionId: ei,
    scrollerRef: el,
    scrollHandler: er
  } = (0, g._)(X.rMx.COLLECTIBLES_SHOP_SCROLLED, t);
  a.useEffect(() => {
    L.default.track(X.rMx.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: r,
      source: t,
      page_session_id: ei
    }), !A && L.default.track(X.rMx.PREMIUM_UPSELL_VIEWED, {
      type: $.cd.COLLECTIBLES_SHOP,
      location_stack: r
    })
  }, [A, r, t, ei]);
  let {
    dismissCollectiblesShopTabNewBadge: eo
  } = (0, z.Z)();
  a.useEffect(() => {
    if (eo(), !(0, h.un)(u.z.COLLECTIBLES_GIFTING_COACHMARK))(0, h.EW)(u.z.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: q.L.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [eo]), a.useEffect(() => {
    !s && (0, E.Y)(X.Z5c.COLLECTIBLES_SHOP)
  }, [s]), a.useEffect(() => () => {
    (0, v.K$)({
      categories: [...M.values()],
      itemTypes: [o.Z.AVATAR_DECORATION, o.Z.PROFILE_EFFECT]
    })
  }, [M]), a.useEffect(() => {
    if (!s || f || _) return;
    let e = e => {
      if (e.key === Q.mR.Escape) I()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [s, f, _, I]);
  let ec = a.useCallback(() => {
      H()
    }, [H]),
    {
      containerRef: eu
    } = function() {
      let e = a.useRef(null),
        s = a.useRef(null);
      return (0, C.useFocusLock)(e, {
        returnRef: s
      }), {
        containerRef: e,
        returnRef: s
      }
    }(),
    {
      setCategoryRef: ed,
      handleScrollToCategory: eC
    } = (0, B.xV)(el.current),
    {
      condensedBannersAndDynamicHeadersEnabled: eE
    } = (0, Y.O)({
      location: "CollectiblesShop"
    });
  return (0, n.jsxs)(p.Gt, {
    value: r,
    children: [(0, n.jsx)("div", {
      className: ee.shop,
      ref: s ? eu : void 0,
      children: (0, n.jsxs)(C.AdvancedScroller, {
        className: ee.shopScroll,
        ref: el,
        onScroll: er,
        children: [(0, n.jsx)(D.I, {
          isFullScreen: s,
          isLayer: f,
          onClose: I
        }), (0, n.jsx)("div", {
          className: ee.pageWrapper,
          children: (0, n.jsxs)("main", {
            className: l()(ee.page, {
              [ee.pageFullscreen]: s
            }),
            children: [eE && (0, n.jsx)(U.h, {
              categories: W,
              handleScrollToCategory: eC
            }), k ? (0, n.jsx)(G.Z, {}) : y ? (0, n.jsx)(F.Z, {
              onRetry: ec
            }) : (0, n.jsx)("div", {
              className: ee.categories,
              children: W.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: s
                } = e;
                return s.length > 0
              }).map((e, t) => (0, n.jsx)("div", {
                ref: s => ed(e.skuId, s),
                children: (0, n.jsx)(en, {
                  isPremiumUser: A,
                  category: e,
                  initialItemCardRef: es,
                  setIsGiftEasterEggEnabled: ea,
                  isGiftEasterEggEnabled: et,
                  isFullScreen: s,
                  lightningCheckoutEnabled: K,
                  includeBundles: J,
                  index: t
                })
              }, e.skuId))
            })]
          })
        })]
      })
    }), et && (0, n.jsx)(V.Z, {})]
  })
}