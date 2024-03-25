"use strict";
a.r(t), a.d(t, {
  default: function() {
    return ei
  }
}), a("794252"), a("222007");
var l = a("37983"),
  s = a("884691"),
  r = a("414456"),
  n = a.n(r),
  i = a("917351"),
  o = a("506838"),
  c = a("265586"),
  u = a("65597"),
  d = a("151426"),
  f = a("551042"),
  m = a("77078"),
  p = a("939488"),
  g = a("304580"),
  C = a("841098"),
  h = a("812204"),
  E = a("685665"),
  b = a("481120"),
  S = a("890503"),
  x = a("10641"),
  T = a("539938"),
  v = a("210721"),
  L = a("65324"),
  I = a("845962"),
  N = a("501768"),
  _ = a("778588"),
  k = a("697218"),
  y = a("764490"),
  O = a("29557"),
  A = a("599110"),
  P = a("719923"),
  R = a("439932"),
  j = a("21526"),
  F = a("853987"),
  B = a("411691"),
  D = a("216719"),
  M = a("702953"),
  w = a("698957"),
  H = a("235898"),
  U = a("296304"),
  W = a("334820"),
  G = a("89569"),
  V = a("419513"),
  z = a("434393"),
  K = a("571464"),
  Y = a("43525"),
  X = a("798235"),
  Z = a("931262"),
  q = a("695824"),
  $ = a("518907"),
  J = a("368560"),
  Q = a("49111"),
  ee = a("994428"),
  et = a("894282"),
  ea = a("646718"),
  el = a("782340"),
  es = a("922063");

function er(e) {
  let {
    isFullScreen: t
  } = e, a = (0, B.default)("CollectiblesShop");
  return (0, o.match)(a).with(B.CollectiblesShopMarketingVariants.WINTER_2023_DROP, () => (0, l.jsx)(X.default, {
    isFullScreen: t
  })).otherwise(() => (0, l.jsx)(Y.default, {
    isFullScreen: t
  }))
}

function en(e) {
  var t, a;
  let {
    category: r,
    className: o,
    isPremiumUser: d,
    initialItemCardRef: f,
    isGiftEasterEggEnabled: p,
    setIsGiftEasterEggEnabled: g,
    showEasterEggToggle: C
  } = e, h = s.useRef(10 + 70 * Math.random()), E = (0, W.usePurchasedProductsSort)(r.products), b = (0, i.groupBy)(E, "type"), S = (0, u.useStateFromStores)([D.default], () => D.default.initialProductSkuId), {
    tallerCardsEnabled: x
  } = (0, M.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), T = x ? $.default : z.default, I = s.useCallback(e => t => {
    e.skuId === S && (f.current = t.current)
  }, [S, f]), N = (e, t) => 0 === e.length ? null : (0, l.jsxs)("div", {
    children: [(0, l.jsx)(m.Text, {
      className: n(es.itemTypeTitle, {
        [es.itemTypeTitleForTallerCard]: x
      }),
      color: "header-secondary",
      variant: "text-sm/bold",
      children: t
    }), (0, l.jsx)("div", {
      className: n(es.cardsContainer, x ? es.tallerShopCard : es.regularShopCard, o),
      children: e.map(e => (0, l.jsx)(T, {
        onMount: I(e),
        isPremiumUser: d,
        category: r,
        product: e,
        isGiftEasterEggEnabled: p
      }, e.skuId))
    })]
  });
  return (0, l.jsxs)("div", {
    className: es.categoryWrapper,
    children: [C && (0, l.jsx)(m.Clickable, {
      className: n(es.hiddenWumpus, {
        [es.hiddenWumpusEnabled]: p
      }),
      onClick: () => g(!0),
      style: {
        left: "".concat(h.current, "%")
      },
      children: (0, l.jsx)(L.default, {
        idleAnimationState: v.AnimationState.IDLE,
        giftStyle: ea.PremiumGiftStyles.BOX
      })
    }), (0, l.jsx)(V.default, {
      category: r,
      className: x ? es.tallerShopCardBanner : void 0
    }), N(null !== (t = b[c.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], el.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), N(null !== (a = b[c.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== a ? a : [], el.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE)]
  })
}
var ei = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: a,
    analyticsLocations: r
  } = (0, u.useStateFromStoresObject)([D.default], () => D.default.getAnalytics()), {
    analyticsLocations: i
  } = (0, E.default)([...r, h.default.COLLECTIBLES_SHOP]), o = (0, u.useStateFromStores)([_.default], () => _.default.getLayers().includes(Q.Layers.COLLECTIBLES_SHOP)), v = (0, f.useHasAnyModalOpen)(), {
    onClose: L
  } = (0, Z.useCollectiblesShopRouting)(), B = (0, u.useStateFromStores)([k.default], () => k.default.getCurrentUser()), W = P.default.canUseCollectibles(B), V = (0, S.default)("shop_disable_cache"), z = (0, S.default)("shop_include_unpublished"), {
    categories: Y,
    isFetchingCategories: X,
    error: $
  } = (0, H.default)({
    noCache: V,
    includeUnpublished: z
  }), ei = (0, u.useStateFromStores)([F.default], () => F.default.products), eo = s.useMemo(() => {
    let e = [...ei.values()].filter(e => e.type === c.CollectiblesItemType.PROFILE_EFFECT);
    return e.some(e => null == I.default.getProfileEffectById(e.items[0].id))
  }, [ei]);
  (0, N.default)(eo);
  let ec = (0, U.usePurchasedCategoriesSort)(Y),
    {
      tallerCardsEnabled: eu
    } = (0, M.useCollectiblesShopTallerCardsExperiment)({
      location: "CollectiblesShop"
    }),
    ed = s.useRef(null),
    [ef, em] = s.useState(!1);
  (0, G.useProductDetailsDeepLinking)({
    categories: Y,
    isFetchingCategories: X,
    isLayer: o,
    initialItemCardRef: ed
  });
  let {
    sessionId: ep,
    scrollerRef: eg,
    scrollHandler: eC
  } = (0, b.usePageScrollPosition)(Q.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
  s.useEffect(() => {
    A.default.track(Q.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: i,
      source: a,
      page_session_id: ep
    }), !W && A.default.track(Q.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: ea.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: i
    })
  }, [W, i, a, ep]), s.useEffect(() => {
    !(0, x.isDismissibleContentDismissed)(d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, x.markDismissibleContentAsDismissed)(d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: ee.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, []), s.useEffect(() => {
    !t && (0, p.setHomeLink)(Q.Routes.COLLECTIBLES_SHOP)
  }, [t]), s.useEffect(() => () => {
    (0, j.setCollectiblesCategoryItemsViewed)({
      categories: [...Y.values()],
      itemTypes: [c.CollectiblesItemType.AVATAR_DECORATION, c.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [Y]), s.useEffect(() => {
    if (!t || o || v) return;
    let e = e => {
      e.key === et.KeyboardEventKey.Escape && L()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, o, v, L]);
  let eh = s.useCallback(() => {
      (0, j.fetchCollectiblesCategories)({
        noCache: V,
        includeUnpublished: z
      })
    }, [V, z]),
    eE = (0, C.default)(),
    {
      shopBannerHidden: eb
    } = (0, w.default)({
      location: "CollectiblesShop"
    }),
    {
      containerRef: eS,
      returnRef: ex
    } = function() {
      let e = s.useRef(null),
        t = s.useRef(null);
      return (0, m.useFocusLock)(e, {
        returnRef: t
      }), {
        containerRef: e,
        returnRef: t
      }
    }();
  return (0, l.jsxs)(E.AnalyticsLocationProvider, {
    value: i,
    children: [(0, l.jsxs)("div", {
      className: es.shop,
      ref: t ? eS : void 0,
      children: [t ? null : (0, l.jsxs)(T.default, {
        className: n((0, R.getThemeClass)(eE), es.headerBar),
        toolbar: !0,
        children: [(0, l.jsx)(O.default, {
          className: es.logo
        }), (0, l.jsx)(T.default.Title, {
          className: es.title,
          children: el.default.Messages.COLLECTIBLES_SHOP
        })]
      }), t && (0, l.jsx)("div", {
        className: es.closeWrapper,
        children: (0, l.jsx)(g.default, {
          className: es.close,
          closeAction: o ? j.closeCollectiblesShop : L,
          keybind: "ESC"
        })
      }), (0, l.jsx)(m.AdvancedScroller, {
        className: n(es.shopScroll, {
          [es.shopScrollBackgroundPrimary]: eu
        }),
        ref: eg,
        onScroll: eC,
        children: (0, l.jsx)("div", {
          className: n(es.pageWrapper, {
            [es.pageWrapperFullscreen]: t,
            [es.pageWrapperBackgroundPrimary]: eu
          }),
          children: (0, l.jsxs)("main", {
            className: n(es.page, {
              [es.pageWithShopBannerHidden]: eb && !t
            }),
            children: [t ? (0, l.jsx)(y.default, {
              title: el.default.Messages.COLLECTIBLES_SHOP,
              ref: t ? ex : void 0
            }) : null, !eb && (0, l.jsx)(er, {
              isFullScreen: t
            }), X ? (0, l.jsx)(q.default, {}) : $ ? (0, l.jsx)(K.default, {
              onRetry: eh
            }) : (0, l.jsx)("div", {
              className: es.categories,
              children: ec.filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map(e => (0, l.jsx)(en, {
                isPremiumUser: W,
                category: e,
                initialItemCardRef: ed,
                setIsGiftEasterEggEnabled: em,
                isGiftEasterEggEnabled: ef
              }, e.skuId))
            })]
          })
        })
      })]
    }), ef && (0, l.jsx)(J.default, {})]
  })
}