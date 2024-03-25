"use strict";
a.r(t), a.d(t, {
  default: function() {
    return er
  }
}), a("794252"), a("222007");
var s = a("37983"),
  r = a("884691"),
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
  return (0, o.match)(a).with(R.CollectiblesShopMarketingVariants.WINTER_2023_DROP, () => (0, s.jsx)(z.default, {
    isFullScreen: t
  })).otherwise(() => (0, s.jsx)(V.default, {
    isFullScreen: t
  }))
}

function es(e) {
  var t, a;
  let {
    category: l,
    className: o,
    isPremiumUser: d,
    initialItemCardRef: f,
    isGiftEasterEggEnabled: p,
    setIsGiftEasterEggEnabled: g,
    showEasterEggToggle: C
  } = e, h = r.useRef(10 + 70 * Math.random()), E = (0, w.usePurchasedProductsSort)(l.products), b = (0, i.groupBy)(E, "type"), S = (0, u.useStateFromStores)([j.default], () => j.default.initialProductSkuId), {
    tallerCardsEnabled: x
  } = (0, B.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), T = x ? X.default : W.default, I = r.useCallback(e => t => {
    e.skuId === S && (f.current = t.current)
  }, [S, f]), N = (e, t) => 0 === e.length ? null : (0, s.jsxs)("div", {
    children: [(0, s.jsx)(m.Text, {
      className: n(et.itemTypeTitle, {
        [et.itemTypeTitleForTallerCard]: x
      }),
      color: "header-secondary",
      variant: "text-sm/bold",
      children: t
    }), (0, s.jsx)("div", {
      className: n(et.cardsContainer, x ? et.tallerShopCard : et.regularShopCard, o),
      children: e.map(e => (0, s.jsx)(T, {
        onMount: I(e),
        isPremiumUser: d,
        category: l,
        product: e,
        isGiftEasterEggEnabled: p
      }, e.skuId))
    })]
  });
  return (0, s.jsxs)("div", {
    className: et.categoryWrapper,
    children: [C && (0, s.jsx)(m.Clickable, {
      className: n(et.hiddenWumpus, {
        [et.hiddenWumpusEnabled]: p
      }),
      onClick: () => g(!0),
      style: {
        left: "".concat(h.current, "%")
      },
      children: (0, s.jsx)(L.default, {
        idleAnimationState: v.AnimationState.IDLE,
        giftStyle: Q.PremiumGiftStyles.BOX
      })
    }), (0, s.jsx)(U.default, {
      category: l,
      className: x ? et.tallerShopCardBanner : void 0
    }), N(null !== (t = b[c.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], ee.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), N(null !== (a = b[c.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== a ? a : [], ee.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE)]
  })
}
var er = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: a,
    analyticsLocations: l
  } = (0, u.useStateFromStoresObject)([j.default], () => j.default.getAnalytics()), {
    AnalyticsLocationProvider: i,
    analyticsLocations: o
  } = (0, E.default)([...l, h.default.COLLECTIBLES_SHOP]), v = (0, u.useStateFromStores)([I.default], () => I.default.getLayers().includes(q.Layers.COLLECTIBLES_SHOP)), L = (0, f.useHasAnyModalOpen)(), {
    onClose: R
  } = (0, K.useCollectiblesShopRouting)(), w = (0, u.useStateFromStores)([N.default], () => N.default.getCurrentUser()), U = y.default.canUseCollectibles(w), W = (0, S.default)("shop_disable_cache"), V = (0, S.default)("shop_include_unpublished"), {
    categories: z,
    isFetchingCategories: X,
    error: er
  } = (0, D.default)({
    noCache: W,
    includeUnpublished: V
  }), el = (0, M.usePurchasedCategoriesSort)(z), {
    tallerCardsEnabled: en
  } = (0, B.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), ei = r.useRef(null), [eo, ec] = r.useState(!1);
  (0, H.useProductDetailsDeepLinking)({
    categories: z,
    isFetchingCategories: X,
    isLayer: v,
    initialItemCardRef: ei
  });
  let {
    sessionId: eu,
    scrollerRef: ed,
    scrollHandler: ef
  } = (0, b.usePageScrollPosition)(q.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
  r.useEffect(() => {
    O.default.track(q.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: o,
      source: a,
      page_session_id: eu
    }), !U && O.default.track(q.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: Q.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: o
    })
  }, [U, o, a, eu]), r.useEffect(() => {
    !(0, x.isDismissibleContentDismissed)(d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, x.markDismissibleContentAsDismissed)(d.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: $.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, []), r.useEffect(() => {
    !t && (0, p.setHomeLink)(q.Routes.COLLECTIBLES_SHOP)
  }, [t]), r.useEffect(() => () => {
    (0, P.setCollectiblesCategoryItemsViewed)({
      categories: [...z.values()],
      itemTypes: [c.CollectiblesItemType.AVATAR_DECORATION, c.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [z]), r.useEffect(() => {
    if (!t || v || L) return;
    let e = e => {
      e.key === J.KeyboardEventKey.Escape && R()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, v, L, R]);
  let em = r.useCallback(() => {
      (0, P.fetchCollectiblesCategories)({
        noCache: W,
        includeUnpublished: V
      })
    }, [W, V]),
    ep = (0, C.default)(),
    {
      shopBannerHidden: eg
    } = (0, F.default)({
      location: "CollectiblesShop"
    }),
    {
      containerRef: eC,
      returnRef: eh
    } = function() {
      let e = r.useRef(null),
        t = r.useRef(null);
      return (0, m.useFocusLock)(e, {
        returnRef: t
      }), {
        containerRef: e,
        returnRef: t
      }
    }();
  return (0, s.jsxs)(i, {
    children: [(0, s.jsxs)("div", {
      className: et.shop,
      ref: t ? eC : void 0,
      children: [t ? null : (0, s.jsxs)(T.default, {
        className: n((0, A.getThemeClass)(ep), et.headerBar),
        toolbar: !0,
        children: [(0, s.jsx)(k.default, {
          className: et.logo
        }), (0, s.jsx)(T.default.Title, {
          className: et.title,
          children: ee.default.Messages.COLLECTIBLES_SHOP
        })]
      }), t && (0, s.jsx)("div", {
        className: et.closeWrapper,
        children: (0, s.jsx)(g.default, {
          className: et.close,
          closeAction: v ? P.closeCollectiblesShop : R,
          keybind: "ESC"
        })
      }), (0, s.jsx)(m.AdvancedScroller, {
        className: n(et.shopScroll, {
          [et.shopScrollBackgroundPrimary]: en
        }),
        ref: ed,
        onScroll: ef,
        children: (0, s.jsx)("div", {
          className: n(et.pageWrapper, {
            [et.pageWrapperFullscreen]: t,
            [et.pageWrapperBackgroundPrimary]: en
          }),
          children: (0, s.jsxs)("main", {
            className: n(et.page, {
              [et.pageWithShopBannerHidden]: eg && !t
            }),
            children: [t ? (0, s.jsx)(_.default, {
              title: ee.default.Messages.COLLECTIBLES_SHOP,
              ref: t ? eh : void 0
            }) : null, !eg && (0, s.jsx)(ea, {
              isFullScreen: t
            }), X ? (0, s.jsx)(Y.default, {}) : er ? (0, s.jsx)(G.default, {
              onRetry: em
            }) : (0, s.jsx)("div", {
              className: et.categories,
              children: el.filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map(e => (0, s.jsx)(es, {
                isPremiumUser: U,
                category: e,
                initialItemCardRef: ei,
                setIsGiftEasterEggEnabled: ec,
                isGiftEasterEggEnabled: eo
              }, e.skuId))
            })]
          })
        })
      })]
    }), eo && (0, s.jsx)(Z.default, {})]
  })
}