"use strict";
a.r(t), a.d(t, {
  default: function() {
    return el
  }
}), a("222007");
var s = a("37983"),
  l = a("884691"),
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
  x = a("10641"),
  v = a("539938"),
  T = a("210721"),
  L = a("65324"),
  I = a("845962"),
  y = a("501768"),
  N = a("778588"),
  _ = a("697218"),
  k = a("764490"),
  O = a("29557"),
  A = a("599110"),
  P = a("719923"),
  R = a("439932"),
  j = a("21526"),
  F = a("853987"),
  B = a("216719"),
  D = a("702953"),
  M = a("235898"),
  w = a("296304"),
  H = a("334820"),
  U = a("344205"),
  W = a("89569"),
  G = a("419513"),
  V = a("434393"),
  z = a("571464"),
  Y = a("931262"),
  K = a("695824"),
  X = a("518907"),
  Z = a("368560"),
  q = a("819852"),
  $ = a("49111"),
  J = a("994428"),
  Q = a("894282"),
  ee = a("646718"),
  et = a("782340"),
  ea = a("922063");

function es(e) {
  var t, a;
  let {
    category: r,
    className: c,
    isPremiumUser: d,
    initialItemCardRef: m,
    isGiftEasterEggEnabled: C,
    setIsGiftEasterEggEnabled: g,
    showEasterEggToggle: h
  } = e, E = l.useRef(10 + 70 * Math.random()), b = (0, H.usePurchasedProductsSort)(r.products), S = (0, o.groupBy)(b, "type"), x = (0, u.useStateFromStores)([B.default], () => B.default.initialProductSkuId), {
    tallerCardsEnabled: v
  } = (0, D.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), I = v ? X.default : V.default, y = l.useCallback(e => t => {
    e.skuId === x && (m.current = t.current)
  }, [x, m]), [N, _] = l.useState(!1), k = q.SkuIdToCountdownDisplayOptions[r.skuId], O = (0, p.useIsVisible)(e => {
    _(e && null != k)
  }, .35), A = (e, t) => 0 === e.length ? null : (0, s.jsxs)("div", {
    children: [(0, s.jsx)(f.Text, {
      className: n(ea.itemTypeTitle, {
        [ea.itemTypeTitleForTallerCard]: v
      }),
      color: "header-secondary",
      variant: "text-sm/bold",
      children: t
    }), (0, s.jsx)("div", {
      className: n(ea.cardsContainer, v ? ea.tallerShopCard : ea.regularShopCard, c),
      children: e.map(e => (0, s.jsx)(I, {
        onMount: y(e),
        isPremiumUser: d,
        category: r,
        product: e,
        isGiftEasterEggEnabled: C
      }, e.skuId))
    })]
  });
  return (0, s.jsxs)("div", {
    className: ea.categoryWrapper,
    ref: O,
    children: [h && (0, s.jsx)(f.Clickable, {
      className: n(ea.hiddenWumpus, {
        [ea.hiddenWumpusEnabled]: C
      }),
      onClick: () => g(!0),
      style: {
        left: "".concat(E.current, "%")
      },
      children: (0, s.jsx)(L.default, {
        idleAnimationState: T.AnimationState.IDLE,
        giftStyle: ee.PremiumGiftStyles.BOX
      })
    }), (0, s.jsx)(G.default, {
      category: r,
      className: v ? ea.tallerShopCardBanner : void 0,
      hideLimitedTimeBadge: null != k
    }), A(null !== (t = S[i.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], et.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), A(null !== (a = S[i.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== a ? a : [], et.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE), null != k && null != r.unpublishedAt && (0, s.jsx)(U.CollectiblesCountdown, {
      unpublishedAt: r.unpublishedAt,
      isVisible: N,
      displayOptions: k
    })]
  })
}
var el = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: a,
    analyticsLocations: r
  } = (0, u.useStateFromStoresObject)([B.default], () => B.default.getAnalytics()), {
    analyticsLocations: o
  } = (0, E.default)([...r, h.default.COLLECTIBLES_SHOP]), p = (0, u.useStateFromStores)([N.default], () => N.default.getLayers().includes($.Layers.COLLECTIBLES_SHOP)), T = (0, d.useHasAnyModalOpen)(), {
    onClose: L
  } = (0, Y.useCollectiblesShopRouting)(), H = (0, u.useStateFromStores)([_.default], () => _.default.getCurrentUser()), U = P.default.canUseCollectibles(H), G = (0, S.default)("shop_disable_cache"), V = (0, S.default)("shop_include_unpublished"), {
    categories: X,
    isFetchingCategories: q,
    error: el
  } = (0, M.default)({
    noCache: G,
    includeUnpublished: V
  }), er = (0, u.useStateFromStores)([F.default], () => F.default.products), en = l.useMemo(() => {
    let e = [...er.values()].filter(e => e.type === i.CollectiblesItemType.PROFILE_EFFECT);
    return e.some(e => null == I.default.getProfileEffectById(e.items[0].id))
  }, [er]);
  (0, y.default)(en);
  let eo = (0, w.usePurchasedCategoriesSort)(X),
    {
      tallerCardsEnabled: ei
    } = (0, D.useCollectiblesShopTallerCardsExperiment)({
      location: "CollectiblesShop"
    }),
    eu = l.useRef(null),
    [ec, ed] = l.useState(!1);
  (0, W.useProductDetailsDeepLinking)({
    categories: X,
    isFetchingCategories: q,
    isLayer: p,
    initialItemCardRef: eu
  });
  let {
    sessionId: ef,
    scrollerRef: em,
    scrollHandler: eC
  } = (0, b.usePageScrollPosition)($.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
  l.useEffect(() => {
    A.default.track($.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: o,
      source: a,
      page_session_id: ef
    }), !U && A.default.track($.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: ee.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: o
    })
  }, [U, o, a, ef]), l.useEffect(() => {
    !(0, x.isDismissibleContentDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, x.markDismissibleContentAsDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: J.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, []), l.useEffect(() => {
    !t && (0, m.setHomeLink)($.Routes.COLLECTIBLES_SHOP)
  }, [t]), l.useEffect(() => () => {
    (0, j.setCollectiblesCategoryItemsViewed)({
      categories: [...X.values()],
      itemTypes: [i.CollectiblesItemType.AVATAR_DECORATION, i.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [X]), l.useEffect(() => {
    if (!t || p || T) return;
    let e = e => {
      e.key === Q.KeyboardEventKey.Escape && L()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, p, T, L]);
  let ep = l.useCallback(() => {
      (0, j.fetchCollectiblesCategories)({
        noCache: G,
        includeUnpublished: V
      })
    }, [G, V]),
    eg = (0, g.default)(),
    {
      containerRef: eh,
      returnRef: eE
    } = function() {
      let e = l.useRef(null),
        t = l.useRef(null);
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
      className: ea.shop,
      ref: t ? eh : void 0,
      children: [t ? null : (0, s.jsxs)(v.default, {
        className: n((0, R.getThemeClass)(eg), ea.headerBar),
        toolbar: !0,
        children: [(0, s.jsx)(O.default, {
          className: ea.logo
        }), (0, s.jsx)(v.default.Title, {
          className: ea.title,
          children: et.default.Messages.COLLECTIBLES_SHOP
        })]
      }), t && (0, s.jsx)("div", {
        className: ea.closeWrapper,
        children: (0, s.jsx)(C.default, {
          className: ea.close,
          closeAction: p ? j.closeCollectiblesShop : L,
          keybind: "ESC"
        })
      }), (0, s.jsx)(f.AdvancedScroller, {
        className: n(ea.shopScroll, {
          [ea.shopScrollBackgroundPrimary]: ei
        }),
        ref: em,
        onScroll: eC,
        children: (0, s.jsx)("div", {
          className: n(ea.pageWrapper, {
            [ea.pageWrapperFullscreen]: t,
            [ea.pageWrapperBackgroundPrimary]: ei
          }),
          children: (0, s.jsxs)("main", {
            className: n(ea.page, {
              [ea.pageWithShopBannerHidden]: !t
            }),
            children: [t ? (0, s.jsx)(k.default, {
              title: et.default.Messages.COLLECTIBLES_SHOP,
              ref: t ? eE : void 0
            }) : null, q ? (0, s.jsx)(K.default, {}) : el ? (0, s.jsx)(z.default, {
              onRetry: ep
            }) : (0, s.jsx)("div", {
              className: ea.categories,
              children: eo.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map(e => (0, s.jsx)(es, {
                isPremiumUser: U,
                category: e,
                initialItemCardRef: eu,
                setIsGiftEasterEggEnabled: ed,
                isGiftEasterEggEnabled: ec
              }, e.skuId))
            })]
          })
        })
      })]
    }), ec && (0, s.jsx)(Z.default, {})]
  })
}