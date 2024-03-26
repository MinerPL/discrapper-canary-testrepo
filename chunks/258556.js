"use strict";
a.r(t), a.d(t, {
  default: function() {
    return es
  }
}), a("794252"), a("222007");
var r = a("37983"),
  s = a("884691"),
  l = a("414456"),
  n = a.n(l),
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
  I = a("778588"),
  N = a("697218"),
  _ = a("764490"),
  k = a("29557"),
  O = a("599110"),
  y = a("719923"),
  A = a("439932"),
  P = a("21526"),
  R = a("411691"),
  j = a("216719"),
  B = a("702953"),
  F = a("698957"),
  D = a("235898"),
  M = a("296304"),
  w = a("334820"),
  H = a("89569"),
  U = a("419513"),
  W = a("434393"),
  G = a("571464"),
  V = a("43525"),
  z = a("798235"),
  K = a("931262"),
  Y = a("695824"),
  X = a("518907"),
  Z = a("368560"),
  q = a("49111"),
  $ = a("994428"),
  J = a("894282"),
  Q = a("646718"),
  ee = a("782340"),
  et = a("922063");

function ea(e) {
  let {
    isFullScreen: t
  } = e, a = (0, R.default)("CollectiblesShop");
  return (0, o.match)(a).with(R.CollectiblesShopMarketingVariants.WINTER_2023_DROP, () => (0, r.jsx)(z.default, {
    isFullScreen: t
  })).otherwise(() => (0, r.jsx)(V.default, {
    isFullScreen: t
  }))
}

function er(e) {
  var t, a;
  let {
    category: l,
    className: o,
    isPremiumUser: d,
    initialItemCardRef: f,
    isGiftEasterEggEnabled: p,
    setIsGiftEasterEggEnabled: g,
    showEasterEggToggle: C
  } = e, h = s.useRef(10 + 70 * Math.random()), E = (0, w.usePurchasedProductsSort)(l.products), b = (0, i.groupBy)(E, "type"), S = (0, u.useStateFromStores)([j.default], () => j.default.initialProductSkuId), {
    tallerCardsEnabled: x
  } = (0, B.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), T = x ? X.default : W.default, I = s.useCallback(e => t => {
    e.skuId === S && (f.current = t.current)
  }, [S, f]), N = (e, t) => 0 === e.length ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(m.Text, {
      className: n(et.itemTypeTitle, {
        [et.itemTypeTitleForTallerCard]: x
      }),
      color: "header-secondary",
      variant: "text-sm/bold",
      children: t
    }), (0, r.jsx)("div", {
      className: n(et.cardsContainer, x ? et.tallerShopCard : et.regularShopCard, o),
      children: e.map(e => (0, r.jsx)(T, {
        onMount: I(e),
        isPremiumUser: d,
        category: l,
        product: e,
        isGiftEasterEggEnabled: p
      }, e.skuId))
    })]
  });
  return (0, r.jsxs)("div", {
    className: et.categoryWrapper,
    children: [C && (0, r.jsx)(m.Clickable, {
      className: n(et.hiddenWumpus, {
        [et.hiddenWumpusEnabled]: p
      }),
      onClick: () => g(!0),
      style: {
        left: "".concat(h.current, "%")
      },
      children: (0, r.jsx)(L.default, {
        idleAnimationState: v.AnimationState.IDLE,
        giftStyle: Q.PremiumGiftStyles.BOX
      })
    }), (0, r.jsx)(U.default, {
      category: l,
      className: x ? et.tallerShopCardBanner : void 0
    }), N(null !== (t = b[c.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], ee.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), N(null !== (a = b[c.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== a ? a : [], ee.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE)]
  })
}
var es = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: a,
    analyticsLocations: l
  } = (0, u.useStateFromStoresObject)([j.default], () => j.default.getAnalytics()), {
    analyticsLocations: i
  } = (0, E.default)([...l, h.default.COLLECTIBLES_SHOP]), o = (0, u.useStateFromStores)([I.default], () => I.default.getLayers().includes(q.Layers.COLLECTIBLES_SHOP)), v = (0, f.useHasAnyModalOpen)(), {
    onClose: L
  } = (0, K.useCollectiblesShopRouting)(), R = (0, u.useStateFromStores)([N.default], () => N.default.getCurrentUser()), w = y.default.canUseCollectibles(R), U = (0, S.default)("shop_disable_cache"), W = (0, S.default)("shop_include_unpublished"), {
    categories: V,
    isFetchingCategories: z,
    error: X
  } = (0, D.default)({
    noCache: U,
    includeUnpublished: W
  }), es = (0, M.usePurchasedCategoriesSort)(V), {
    tallerCardsEnabled: el
  } = (0, B.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), en = s.useRef(null), [ei, eo] = s.useState(!1);
  (0, H.useProductDetailsDeepLinking)({
    categories: V,
    isFetchingCategories: z,
    isLayer: o,
    initialItemCardRef: en
  });
  let {
    sessionId: ec,
    scrollerRef: eu,
    scrollHandler: ed
  } = (0, b.usePageScrollPosition)(q.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
  s.useEffect(() => {
    O.default.track(q.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: i,
      source: a,
      page_session_id: ec
    }), !w && O.default.track(q.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: Q.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: i
    })
  }, [w, i, a, ec]), s.useEffect(() => {
    !(0, x.isDismissibleContentDismissed)(d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, x.markDismissibleContentAsDismissed)(d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: $.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, []), s.useEffect(() => {
    !t && (0, p.setHomeLink)(q.Routes.COLLECTIBLES_SHOP)
  }, [t]), s.useEffect(() => () => {
    (0, P.setCollectiblesCategoryItemsViewed)({
      categories: [...V.values()],
      itemTypes: [c.CollectiblesItemType.AVATAR_DECORATION, c.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [V]), s.useEffect(() => {
    if (!t || o || v) return;
    let e = e => {
      e.key === J.KeyboardEventKey.Escape && L()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, o, v, L]);
  let ef = s.useCallback(() => {
      (0, P.fetchCollectiblesCategories)({
        noCache: U,
        includeUnpublished: W
      })
    }, [U, W]),
    em = (0, C.default)(),
    {
      shopBannerHidden: ep
    } = (0, F.default)({
      location: "CollectiblesShop"
    }),
    {
      containerRef: eg,
      returnRef: eC
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
  return (0, r.jsxs)(E.AnalyticsLocationProvider, {
    value: i,
    children: [(0, r.jsxs)("div", {
      className: et.shop,
      ref: t ? eg : void 0,
      children: [t ? null : (0, r.jsxs)(T.default, {
        className: n((0, A.getThemeClass)(em), et.headerBar),
        toolbar: !0,
        children: [(0, r.jsx)(k.default, {
          className: et.logo
        }), (0, r.jsx)(T.default.Title, {
          className: et.title,
          children: ee.default.Messages.COLLECTIBLES_SHOP
        })]
      }), t && (0, r.jsx)("div", {
        className: et.closeWrapper,
        children: (0, r.jsx)(g.default, {
          className: et.close,
          closeAction: o ? P.closeCollectiblesShop : L,
          keybind: "ESC"
        })
      }), (0, r.jsx)(m.AdvancedScroller, {
        className: n(et.shopScroll, {
          [et.shopScrollBackgroundPrimary]: el
        }),
        ref: eu,
        onScroll: ed,
        children: (0, r.jsx)("div", {
          className: n(et.pageWrapper, {
            [et.pageWrapperFullscreen]: t,
            [et.pageWrapperBackgroundPrimary]: el
          }),
          children: (0, r.jsxs)("main", {
            className: n(et.page, {
              [et.pageWithShopBannerHidden]: ep && !t
            }),
            children: [t ? (0, r.jsx)(_.default, {
              title: ee.default.Messages.COLLECTIBLES_SHOP,
              ref: t ? eC : void 0
            }) : null, !ep && (0, r.jsx)(ea, {
              isFullScreen: t
            }), z ? (0, r.jsx)(Y.default, {}) : X ? (0, r.jsx)(G.default, {
              onRetry: ef
            }) : (0, r.jsx)("div", {
              className: et.categories,
              children: es.filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map(e => (0, r.jsx)(er, {
                isPremiumUser: w,
                category: e,
                initialItemCardRef: en,
                setIsGiftEasterEggEnabled: eo,
                isGiftEasterEggEnabled: ei
              }, e.skuId))
            })]
          })
        })
      })]
    }), ei && (0, r.jsx)(Z.default, {})]
  })
}