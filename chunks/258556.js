"use strict";
a.r(t), a.d(t, {
  default: function() {
    return et
  }
}), a("222007");
var s = a("37983"),
  r = a("884691"),
  l = a("414456"),
  n = a.n(l),
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
  x = a("10641"),
  v = a("539938"),
  T = a("210721"),
  L = a("65324"),
  I = a("778588"),
  y = a("697218"),
  N = a("764490"),
  _ = a("29557"),
  k = a("599110"),
  O = a("719923"),
  A = a("439932"),
  P = a("21526"),
  R = a("216719"),
  j = a("702953"),
  F = a("235898"),
  B = a("296304"),
  D = a("334820"),
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
    category: l,
    className: c,
    isPremiumUser: d,
    initialItemCardRef: m,
    isGiftEasterEggEnabled: C,
    setIsGiftEasterEggEnabled: g,
    showEasterEggToggle: h
  } = e, E = r.useRef(10 + 70 * Math.random()), b = (0, D.usePurchasedProductsSort)(l.products), S = (0, o.groupBy)(b, "type"), x = (0, u.useStateFromStores)([R.default], () => R.default.initialProductSkuId), {
    tallerCardsEnabled: v
  } = (0, j.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), I = v ? z.default : U.default, y = r.useCallback(e => t => {
    e.skuId === x && (m.current = t.current)
  }, [x, m]), [N, _] = r.useState(!1), k = K.SkuIdToCountdownDisplayOptions[l.skuId], O = (0, p.useIsVisible)(e => {
    _(e && null != k)
  }, .35), A = (e, t) => 0 === e.length ? null : (0, s.jsxs)("div", {
    children: [(0, s.jsx)(f.Text, {
      className: n(Q.itemTypeTitle, {
        [Q.itemTypeTitleForTallerCard]: v
      }),
      color: "header-secondary",
      variant: "text-sm/bold",
      children: t
    }), (0, s.jsx)("div", {
      className: n(Q.cardsContainer, v ? Q.tallerShopCard : Q.regularShopCard, c),
      children: e.map(e => (0, s.jsx)(I, {
        onMount: y(e),
        isPremiumUser: d,
        category: l,
        product: e,
        isGiftEasterEggEnabled: C
      }, e.skuId))
    })]
  });
  return (0, s.jsxs)("div", {
    className: Q.categoryWrapper,
    ref: O,
    children: [h && (0, s.jsx)(f.Clickable, {
      className: n(Q.hiddenWumpus, {
        [Q.hiddenWumpusEnabled]: C
      }),
      onClick: () => g(!0),
      style: {
        left: "".concat(E.current, "%")
      },
      children: (0, s.jsx)(L.default, {
        idleAnimationState: T.AnimationState.IDLE,
        giftStyle: $.PremiumGiftStyles.BOX
      })
    }), (0, s.jsx)(H.default, {
      category: l,
      className: v ? Q.tallerShopCardBanner : void 0,
      hideLimitedTimeBadge: null != k
    }), A(null !== (t = S[i.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], J.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), A(null !== (a = S[i.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== a ? a : [], J.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE), null != k && null != l.unpublishedAt && (0, s.jsx)(M.CollectiblesCountdown, {
      unpublishedAt: l.unpublishedAt,
      isVisible: N,
      displayOptions: k
    })]
  })
}
var et = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: a,
    analyticsLocations: l
  } = (0, u.useStateFromStoresObject)([R.default], () => R.default.getAnalytics()), {
    analyticsLocations: o
  } = (0, E.default)([...l, h.default.COLLECTIBLES_SHOP]), p = (0, u.useStateFromStores)([I.default], () => I.default.getLayers().includes(X.Layers.COLLECTIBLES_SHOP)), T = (0, d.useHasAnyModalOpen)(), {
    onClose: L
  } = (0, G.useCollectiblesShopRouting)(), D = (0, u.useStateFromStores)([y.default], () => y.default.getCurrentUser()), M = O.default.canUseCollectibles(D), H = (0, S.default)("shop_disable_cache"), U = (0, S.default)("shop_include_unpublished"), {
    categories: z,
    isFetchingCategories: K,
    error: et
  } = (0, F.default)({
    noCache: H,
    includeUnpublished: U
  }), ea = (0, B.usePurchasedCategoriesSort)(z), {
    tallerCardsEnabled: es
  } = (0, j.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), er = r.useRef(null), [el, en] = r.useState(!1);
  (0, w.useProductDetailsDeepLinking)({
    categories: z,
    isFetchingCategories: K,
    isLayer: p,
    initialItemCardRef: er
  });
  let {
    sessionId: eo,
    scrollerRef: ei,
    scrollHandler: eu
  } = (0, b.usePageScrollPosition)(X.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
  r.useEffect(() => {
    k.default.track(X.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: o,
      source: a,
      page_session_id: eo
    }), !M && k.default.track(X.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: $.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: o
    })
  }, [M, o, a, eo]), r.useEffect(() => {
    !(0, x.isDismissibleContentDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, x.markDismissibleContentAsDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: Z.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, []), r.useEffect(() => {
    !t && (0, m.setHomeLink)(X.Routes.COLLECTIBLES_SHOP)
  }, [t]), r.useEffect(() => () => {
    (0, P.setCollectiblesCategoryItemsViewed)({
      categories: [...z.values()],
      itemTypes: [i.CollectiblesItemType.AVATAR_DECORATION, i.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [z]), r.useEffect(() => {
    if (!t || p || T) return;
    let e = e => {
      e.key === q.KeyboardEventKey.Escape && L()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, p, T, L]);
  let ec = r.useCallback(() => {
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
      let e = r.useRef(null),
        t = r.useRef(null);
      return (0, f.useFocusLock)(e, {
        returnRef: t
      }), {
        containerRef: e,
        returnRef: t
      }
    }();
  return (0, s.jsxs)(E.AnalyticsLocationProvider, {
    value: o,
    children: [(0, s.jsxs)("div", {
      className: Q.shop,
      ref: t ? ef : void 0,
      children: [t ? null : (0, s.jsxs)(v.default, {
        className: n((0, A.getThemeClass)(ed), Q.headerBar),
        toolbar: !0,
        children: [(0, s.jsx)(_.default, {
          className: Q.logo
        }), (0, s.jsx)(v.default.Title, {
          className: Q.title,
          children: J.default.Messages.COLLECTIBLES_SHOP
        })]
      }), t && (0, s.jsx)("div", {
        className: Q.closeWrapper,
        children: (0, s.jsx)(C.default, {
          className: Q.close,
          closeAction: p ? P.closeCollectiblesShop : L,
          keybind: "ESC"
        })
      }), (0, s.jsx)(f.AdvancedScroller, {
        className: n(Q.shopScroll, {
          [Q.shopScrollBackgroundPrimary]: es
        }),
        ref: ei,
        onScroll: eu,
        children: (0, s.jsx)("div", {
          className: n(Q.pageWrapper, {
            [Q.pageWrapperFullscreen]: t,
            [Q.pageWrapperBackgroundPrimary]: es
          }),
          children: (0, s.jsxs)("main", {
            className: n(Q.page, {
              [Q.pageWithShopBannerHidden]: !t
            }),
            children: [t ? (0, s.jsx)(N.default, {
              title: J.default.Messages.COLLECTIBLES_SHOP,
              ref: t ? em : void 0
            }) : null, K ? (0, s.jsx)(V.default, {}) : et ? (0, s.jsx)(W.default, {
              onRetry: ec
            }) : (0, s.jsx)("div", {
              className: Q.categories,
              children: ea.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map(e => (0, s.jsx)(ee, {
                isPremiumUser: M,
                category: e,
                initialItemCardRef: er,
                setIsGiftEasterEggEnabled: en,
                isGiftEasterEggEnabled: el
              }, e.skuId))
            })]
          })
        })
      })]
    }), el && (0, s.jsx)(Y.default, {})]
  })
}