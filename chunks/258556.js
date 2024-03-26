"use strict";
a.r(t), a.d(t, {
  default: function() {
    return J
  }
}), a("222007");
var l = a("37983"),
  r = a("884691"),
  s = a("414456"),
  n = a.n(s),
  o = a("917351"),
  i = a("265586"),
  u = a("65597"),
  c = a("151426"),
  d = a("551042"),
  f = a("77078"),
  m = a("939488"),
  C = a("304580"),
  p = a("841098"),
  g = a("812204"),
  h = a("685665"),
  E = a("481120"),
  b = a("890503"),
  S = a("10641"),
  T = a("539938"),
  v = a("210721"),
  L = a("65324"),
  x = a("778588"),
  I = a("697218"),
  _ = a("764490"),
  N = a("29557"),
  y = a("599110"),
  O = a("719923"),
  k = a("439932"),
  A = a("21526"),
  P = a("216719"),
  R = a("702953"),
  F = a("235898"),
  j = a("296304"),
  D = a("334820"),
  B = a("89569"),
  M = a("419513"),
  w = a("434393"),
  H = a("571464"),
  U = a("931262"),
  W = a("695824"),
  G = a("518907"),
  V = a("368560"),
  z = a("49111"),
  K = a("994428"),
  Y = a("894282"),
  X = a("646718"),
  Z = a("782340"),
  q = a("922063");

function $(e) {
  var t, a;
  let {
    category: s,
    className: c,
    isPremiumUser: d,
    initialItemCardRef: m,
    isGiftEasterEggEnabled: C,
    setIsGiftEasterEggEnabled: p,
    showEasterEggToggle: g
  } = e, h = r.useRef(10 + 70 * Math.random()), E = (0, D.usePurchasedProductsSort)(s.products), b = (0, o.groupBy)(E, "type"), S = (0, u.useStateFromStores)([P.default], () => P.default.initialProductSkuId), {
    tallerCardsEnabled: T
  } = (0, R.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), x = T ? G.default : w.default, I = r.useCallback(e => t => {
    e.skuId === S && (m.current = t.current)
  }, [S, m]), _ = (e, t) => 0 === e.length ? null : (0, l.jsxs)("div", {
    children: [(0, l.jsx)(f.Text, {
      className: n(q.itemTypeTitle, {
        [q.itemTypeTitleForTallerCard]: T
      }),
      color: "header-secondary",
      variant: "text-sm/bold",
      children: t
    }), (0, l.jsx)("div", {
      className: n(q.cardsContainer, T ? q.tallerShopCard : q.regularShopCard, c),
      children: e.map(e => (0, l.jsx)(x, {
        onMount: I(e),
        isPremiumUser: d,
        category: s,
        product: e,
        isGiftEasterEggEnabled: C
      }, e.skuId))
    })]
  });
  return (0, l.jsxs)("div", {
    className: q.categoryWrapper,
    children: [g && (0, l.jsx)(f.Clickable, {
      className: n(q.hiddenWumpus, {
        [q.hiddenWumpusEnabled]: C
      }),
      onClick: () => p(!0),
      style: {
        left: "".concat(h.current, "%")
      },
      children: (0, l.jsx)(L.default, {
        idleAnimationState: v.AnimationState.IDLE,
        giftStyle: X.PremiumGiftStyles.BOX
      })
    }), (0, l.jsx)(M.default, {
      category: s,
      className: T ? q.tallerShopCardBanner : void 0
    }), _(null !== (t = b[i.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], Z.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), _(null !== (a = b[i.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== a ? a : [], Z.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE)]
  })
}
var J = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: a,
    analyticsLocations: s
  } = (0, u.useStateFromStoresObject)([P.default], () => P.default.getAnalytics()), {
    analyticsLocations: o
  } = (0, h.default)([...s, g.default.COLLECTIBLES_SHOP]), v = (0, u.useStateFromStores)([x.default], () => x.default.getLayers().includes(z.Layers.COLLECTIBLES_SHOP)), L = (0, d.useHasAnyModalOpen)(), {
    onClose: D
  } = (0, U.useCollectiblesShopRouting)(), M = (0, u.useStateFromStores)([I.default], () => I.default.getCurrentUser()), w = O.default.canUseCollectibles(M), G = (0, b.default)("shop_disable_cache"), J = (0, b.default)("shop_include_unpublished"), {
    categories: Q,
    isFetchingCategories: ee,
    error: et
  } = (0, F.default)({
    noCache: G,
    includeUnpublished: J
  }), ea = (0, j.usePurchasedCategoriesSort)(Q), {
    tallerCardsEnabled: el
  } = (0, R.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), er = r.useRef(null), [es, en] = r.useState(!1);
  (0, B.useProductDetailsDeepLinking)({
    categories: Q,
    isFetchingCategories: ee,
    isLayer: v,
    initialItemCardRef: er
  });
  let {
    sessionId: eo,
    scrollerRef: ei,
    scrollHandler: eu
  } = (0, E.usePageScrollPosition)(z.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
  r.useEffect(() => {
    y.default.track(z.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: o,
      source: a,
      page_session_id: eo
    }), !w && y.default.track(z.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: X.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: o
    })
  }, [w, o, a, eo]), r.useEffect(() => {
    !(0, S.isDismissibleContentDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, S.markDismissibleContentAsDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: K.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, []), r.useEffect(() => {
    !t && (0, m.setHomeLink)(z.Routes.COLLECTIBLES_SHOP)
  }, [t]), r.useEffect(() => () => {
    (0, A.setCollectiblesCategoryItemsViewed)({
      categories: [...Q.values()],
      itemTypes: [i.CollectiblesItemType.AVATAR_DECORATION, i.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [Q]), r.useEffect(() => {
    if (!t || v || L) return;
    let e = e => {
      e.key === Y.KeyboardEventKey.Escape && D()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, v, L, D]);
  let ec = r.useCallback(() => {
      (0, A.fetchCollectiblesCategories)({
        noCache: G,
        includeUnpublished: J
      })
    }, [G, J]),
    ed = (0, p.default)(),
    {
      containerRef: ef,
      returnRef: em
    } = function() {
      let e = r.useRef(null),
        t = r.useRef(null);
      return (0, f.useFocusLock)(e, {
        returnRef: t
      }), {
        containerRef: e,
        returnRef: t
      }
    }();
  return (0, l.jsxs)(h.AnalyticsLocationProvider, {
    value: o,
    children: [(0, l.jsxs)("div", {
      className: q.shop,
      ref: t ? ef : void 0,
      children: [t ? null : (0, l.jsxs)(T.default, {
        className: n((0, k.getThemeClass)(ed), q.headerBar),
        toolbar: !0,
        children: [(0, l.jsx)(N.default, {
          className: q.logo
        }), (0, l.jsx)(T.default.Title, {
          className: q.title,
          children: Z.default.Messages.COLLECTIBLES_SHOP
        })]
      }), t && (0, l.jsx)("div", {
        className: q.closeWrapper,
        children: (0, l.jsx)(C.default, {
          className: q.close,
          closeAction: v ? A.closeCollectiblesShop : D,
          keybind: "ESC"
        })
      }), (0, l.jsx)(f.AdvancedScroller, {
        className: n(q.shopScroll, {
          [q.shopScrollBackgroundPrimary]: el
        }),
        ref: ei,
        onScroll: eu,
        children: (0, l.jsx)("div", {
          className: n(q.pageWrapper, {
            [q.pageWrapperFullscreen]: t,
            [q.pageWrapperBackgroundPrimary]: el
          }),
          children: (0, l.jsxs)("main", {
            className: n(q.page, {
              [q.pageWithShopBannerHidden]: !t
            }),
            children: [t ? (0, l.jsx)(_.default, {
              title: Z.default.Messages.COLLECTIBLES_SHOP,
              ref: t ? em : void 0
            }) : null, ee ? (0, l.jsx)(W.default, {}) : et ? (0, l.jsx)(H.default, {
              onRetry: ec
            }) : (0, l.jsx)("div", {
              className: q.categories,
              children: ea.filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map(e => (0, l.jsx)($, {
                isPremiumUser: w,
                category: e,
                initialItemCardRef: er,
                setIsGiftEasterEggEnabled: en,
                isGiftEasterEggEnabled: es
              }, e.skuId))
            })]
          })
        })
      })]
    }), es && (0, l.jsx)(V.default, {})]
  })
}