"use strict";
a.r(t), a.d(t, {
  default: function() {
    return et
  }
}), a("222007");
var l = a("37983"),
  s = a("884691"),
  r = a("414456"),
  n = a.n(r),
  o = a("917351"),
  i = a("265586"),
  u = a("65597"),
  c = a("151426"),
  d = a("551042"),
  f = a("77078"),
  m = a("939488"),
  C = a("304580"),
  p = a("811425"),
  g = a("841098"),
  h = a("812204"),
  E = a("685665"),
  b = a("481120"),
  S = a("890503"),
  T = a("10641"),
  v = a("539938"),
  x = a("210721"),
  L = a("65324"),
  I = a("778588"),
  N = a("697218"),
  _ = a("764490"),
  y = a("29557"),
  k = a("599110"),
  O = a("719923"),
  A = a("439932"),
  P = a("21526"),
  R = a("216719"),
  j = a("702953"),
  F = a("235898"),
  D = a("296304"),
  B = a("334820"),
  M = a("344205"),
  w = a("89569"),
  H = a("419513"),
  U = a("434393"),
  W = a("571464"),
  G = a("931262"),
  V = a("695824"),
  z = a("518907"),
  Y = a("368560"),
  K = a("819852"),
  X = a("49111"),
  Z = a("994428"),
  q = a("894282"),
  $ = a("646718"),
  J = a("782340"),
  Q = a("922063");

function ee(e) {
  var t, a;
  let {
    category: r,
    className: c,
    isPremiumUser: d,
    initialItemCardRef: m,
    isGiftEasterEggEnabled: C,
    setIsGiftEasterEggEnabled: g,
    showEasterEggToggle: h
  } = e, E = s.useRef(10 + 70 * Math.random()), b = (0, B.usePurchasedProductsSort)(r.products), S = (0, o.groupBy)(b, "type"), T = (0, u.useStateFromStores)([R.default], () => R.default.initialProductSkuId), {
    tallerCardsEnabled: v
  } = (0, j.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), I = v ? z.default : U.default, N = s.useCallback(e => t => {
    e.skuId === T && (m.current = t.current)
  }, [T, m]), [_, y] = s.useState(!1), k = K.SkuIdToCountdownDisplayOptions[r.skuId], O = (0, p.useIsVisible)(e => {
    y(e && null != k)
  }, .35), A = (e, t) => 0 === e.length ? null : (0, l.jsxs)("div", {
    children: [(0, l.jsx)(f.Text, {
      className: n(Q.itemTypeTitle, {
        [Q.itemTypeTitleForTallerCard]: v
      }),
      color: "header-secondary",
      variant: "text-sm/bold",
      children: t
    }), (0, l.jsx)("div", {
      className: n(Q.cardsContainer, v ? Q.tallerShopCard : Q.regularShopCard, c),
      children: e.map(e => (0, l.jsx)(I, {
        onMount: N(e),
        isPremiumUser: d,
        category: r,
        product: e,
        isGiftEasterEggEnabled: C
      }, e.skuId))
    })]
  });
  return (0, l.jsxs)("div", {
    className: Q.categoryWrapper,
    ref: O,
    children: [h && (0, l.jsx)(f.Clickable, {
      className: n(Q.hiddenWumpus, {
        [Q.hiddenWumpusEnabled]: C
      }),
      onClick: () => g(!0),
      style: {
        left: "".concat(E.current, "%")
      },
      children: (0, l.jsx)(L.default, {
        idleAnimationState: x.AnimationState.IDLE,
        giftStyle: $.PremiumGiftStyles.BOX
      })
    }), (0, l.jsx)(H.default, {
      category: r,
      className: v ? Q.tallerShopCardBanner : void 0,
      hideLimitedTimeBadge: null != k
    }), A(null !== (t = S[i.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], J.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), A(null !== (a = S[i.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== a ? a : [], J.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE), null != k && null != r.unpublishedAt && (0, l.jsx)(M.CollectiblesCountdown, {
      unpublishedAt: r.unpublishedAt,
      isVisible: _,
      displayOptions: k
    })]
  })
}
var et = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: a,
    analyticsLocations: r
  } = (0, u.useStateFromStoresObject)([R.default], () => R.default.getAnalytics()), {
    analyticsLocations: o
  } = (0, E.default)([...r, h.default.COLLECTIBLES_SHOP]), p = (0, u.useStateFromStores)([I.default], () => I.default.getLayers().includes(X.Layers.COLLECTIBLES_SHOP)), x = (0, d.useHasAnyModalOpen)(), {
    onClose: L
  } = (0, G.useCollectiblesShopRouting)(), B = (0, u.useStateFromStores)([N.default], () => N.default.getCurrentUser()), M = O.default.canUseCollectibles(B), H = (0, S.default)("shop_disable_cache"), U = (0, S.default)("shop_include_unpublished"), {
    categories: z,
    isFetchingCategories: K,
    error: et
  } = (0, F.default)({
    noCache: H,
    includeUnpublished: U
  }), ea = (0, D.usePurchasedCategoriesSort)(z), {
    tallerCardsEnabled: el
  } = (0, j.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), es = s.useRef(null), [er, en] = s.useState(!1);
  (0, w.useProductDetailsDeepLinking)({
    categories: z,
    isFetchingCategories: K,
    isLayer: p,
    initialItemCardRef: es
  });
  let {
    sessionId: eo,
    scrollerRef: ei,
    scrollHandler: eu
  } = (0, b.usePageScrollPosition)(X.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
  s.useEffect(() => {
    k.default.track(X.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: o,
      source: a,
      page_session_id: eo
    }), !M && k.default.track(X.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: $.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: o
    })
  }, [M, o, a, eo]), s.useEffect(() => {
    !(0, T.isDismissibleContentDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, T.markDismissibleContentAsDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: Z.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, []), s.useEffect(() => {
    !t && (0, m.setHomeLink)(X.Routes.COLLECTIBLES_SHOP)
  }, [t]), s.useEffect(() => () => {
    (0, P.setCollectiblesCategoryItemsViewed)({
      categories: [...z.values()],
      itemTypes: [i.CollectiblesItemType.AVATAR_DECORATION, i.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [z]), s.useEffect(() => {
    if (!t || p || x) return;
    let e = e => {
      e.key === q.KeyboardEventKey.Escape && L()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, p, x, L]);
  let ec = s.useCallback(() => {
      (0, P.fetchCollectiblesCategories)({
        noCache: H,
        includeUnpublished: U
      })
    }, [H, U]),
    ed = (0, g.default)(),
    {
      containerRef: ef,
      returnRef: em
    } = function() {
      let e = s.useRef(null),
        t = s.useRef(null);
      return (0, f.useFocusLock)(e, {
        returnRef: t
      }), {
        containerRef: e,
        returnRef: t
      }
    }();
  return (0, l.jsxs)(E.AnalyticsLocationProvider, {
    value: o,
    children: [(0, l.jsxs)("div", {
      className: Q.shop,
      ref: t ? ef : void 0,
      children: [t ? null : (0, l.jsxs)(v.default, {
        className: n((0, A.getThemeClass)(ed), Q.headerBar),
        toolbar: !0,
        children: [(0, l.jsx)(y.default, {
          className: Q.logo
        }), (0, l.jsx)(v.default.Title, {
          className: Q.title,
          children: J.default.Messages.COLLECTIBLES_SHOP
        })]
      }), t && (0, l.jsx)("div", {
        className: Q.closeWrapper,
        children: (0, l.jsx)(C.default, {
          className: Q.close,
          closeAction: p ? P.closeCollectiblesShop : L,
          keybind: "ESC"
        })
      }), (0, l.jsx)(f.AdvancedScroller, {
        className: n(Q.shopScroll, {
          [Q.shopScrollBackgroundPrimary]: el
        }),
        ref: ei,
        onScroll: eu,
        children: (0, l.jsx)("div", {
          className: n(Q.pageWrapper, {
            [Q.pageWrapperFullscreen]: t,
            [Q.pageWrapperBackgroundPrimary]: el
          }),
          children: (0, l.jsxs)("main", {
            className: n(Q.page, {
              [Q.pageWithShopBannerHidden]: !t
            }),
            children: [t ? (0, l.jsx)(_.default, {
              title: J.default.Messages.COLLECTIBLES_SHOP,
              ref: t ? em : void 0
            }) : null, K ? (0, l.jsx)(V.default, {}) : et ? (0, l.jsx)(W.default, {
              onRetry: ec
            }) : (0, l.jsx)("div", {
              className: Q.categories,
              children: ea.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map(e => (0, l.jsx)(ee, {
                isPremiumUser: M,
                category: e,
                initialItemCardRef: es,
                setIsGiftEasterEggEnabled: en,
                isGiftEasterEggEnabled: er
              }, e.skuId))
            })]
          })
        })
      })]
    }), er && (0, l.jsx)(Y.default, {})]
  })
}