"use strict";
a.r(t), a("47120");
var l = a("735250"),
  s = a("470079"),
  r = a("120356"),
  n = a.n(r),
  i = a("392711"),
  o = a("979554"),
  u = a("399606"),
  c = a("524437"),
  d = a("952265"),
  f = a("481060"),
  C = a("150063"),
  m = a("425493"),
  p = a("434650"),
  E = a("410030"),
  h = a("100527"),
  g = a("906732"),
  x = a("702486"),
  v = a("580747"),
  b = a("605236"),
  T = a("984370"),
  L = a("329067"),
  S = a("51855"),
  I = a("479446"),
  N = a("981632"),
  _ = a("290026"),
  y = a("819640"),
  O = a("594174"),
  A = a("292665"),
  j = a("682864"),
  k = a("471731"),
  R = a("486620"),
  P = a("626135"),
  B = a("74538"),
  M = a("792125"),
  D = a("335131"),
  F = a("328347"),
  w = a("280773"),
  H = a("617452"),
  U = a("223143"),
  W = a("298228"),
  V = a("937510"),
  G = a("853748"),
  z = a("426171"),
  K = a("823941"),
  Y = a("752053"),
  Z = a("861746"),
  X = a("508498"),
  q = a("38900"),
  Q = a("709999"),
  $ = a("373113"),
  J = a("994896"),
  ee = a("141594"),
  et = a("302800"),
  ea = a("981631"),
  el = a("921944"),
  es = a("420212"),
  er = a("474936"),
  en = a("689938"),
  ei = a("425734");

function eo(e) {
  var t, a;
  let {
    category: r,
    initialItemCardRef: n,
    lightningCheckoutEnabled: c,
    isPremiumUser: d,
    isGiftEasterEggEnabled: C
  } = e, m = (0, V.usePurchasedProductsSort)(r.products), p = (0, i.groupBy)(m, "type"), E = (0, u.useStateFromStores)([F.default], () => F.default.initialProductSkuId), {
    unifiedProductCatalogEnabled: h
  } = (0, w.useCollectiblesUnifiedProductCatalogExperiment)({
    location: "CollectiblesShop"
  }), g = c ? Z.default : Q.default, x = s.useCallback(e => t => {
    e.skuId === E && (n.current = t.current)
  }, [E, n]), v = (e, t) => 0 === e.length ? null : (0, l.jsxs)("div", {
    children: [null != t ? (0, l.jsx)(f.Text, {
      className: ei.itemTypeTitle,
      color: "header-secondary",
      variant: "text-sm/bold",
      children: t
    }) : (0, l.jsx)(j.default, {
      size: 24
    }), (0, l.jsx)("div", {
      className: ei.cardsContainer,
      children: e.map(e => (0, l.jsx)(g, {
        onMount: x(e),
        isPremiumUser: d,
        category: r,
        product: e,
        isGiftEasterEggEnabled: C
      }, e.skuId))
    })]
  });
  return h ? v(m) : (0, l.jsxs)(l.Fragment, {
    children: [v(null !== (t = p[o.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], en.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), v(null !== (a = p[o.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== a ? a : [], en.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE)]
  })
}

function eu(e) {
  let {
    category: t,
    isPremiumUser: a,
    initialItemCardRef: r,
    isGiftEasterEggEnabled: i,
    setIsGiftEasterEggEnabled: o,
    showEasterEggToggle: u,
    isFullScreen: c,
    lightningCheckoutEnabled: d,
    index: C
  } = e, m = s.useRef(10 + 70 * Math.random()), [E, h] = s.useState(!1), g = (0, et.getCountdownDisplayOptions)(t.skuId), x = (0, p.useIsVisible)(e => {
    h(e && null != g)
  }, c ? .13 : .15);
  return (0, l.jsxs)("div", {
    className: ei.categoryWrapper,
    ref: x,
    children: [u && (0, l.jsx)(f.Clickable, {
      className: n()(ei.hiddenWumpus, {
        [ei.hiddenWumpusEnabled]: i
      }),
      onClick: () => o(!0),
      style: {
        left: "".concat(m.current, "%")
      },
      children: (0, l.jsx)(N.default, {
        idleAnimationState: I.AnimationState.IDLE,
        giftStyle: er.PremiumGiftStyles.BOX
      })
    }), (0, l.jsx)(K.default, {
      category: t,
      hideLimitedTimeBadge: null != g,
      index: C
    }), (0, l.jsx)(eo, {
      category: t,
      initialItemCardRef: r,
      isPremiumUser: a,
      isGiftEasterEggEnabled: i,
      lightningCheckoutEnabled: d
    }), null != g && null != t.unpublishedAt && (0, l.jsx)(G.CollectiblesCountdown, {
      unpublishedAt: t.unpublishedAt,
      isVisible: E,
      displayOptions: g,
      isFullScreen: c
    })]
  })
}

function ec(e) {
  let {
    isFullScreen: t,
    isLayer: a,
    onClose: s
  } = e, {
    condensedBannersEnabled: r
  } = (0, J.useCollectiblesCondensedBannersExperiment)({
    location: "CollectiblesShop"
  }), i = (0, E.default)();
  return t ? (0, l.jsx)("div", {
    className: ei.closeWrapper,
    children: (0, l.jsx)(m.default, {
      className: ei.close,
      closeAction: a ? D.closeCollectiblesShop : s,
      keybind: "ESC"
    })
  }) : r ? (0, l.jsx)(T.default, {
    className: n()((0, M.getThemeClass)(i), ei.headerBar),
    innerClassname: ei.shopLogoContainer,
    toolbar: !0,
    children: (0, l.jsx)(R.default, {
      className: ei.shopLogo
    })
  }) : (0, l.jsxs)(T.default, {
    className: n()((0, M.getThemeClass)(i)),
    toolbar: !0,
    children: [(0, l.jsx)(k.default, {
      className: ei.logo
    }), (0, l.jsx)(T.default.Title, {
      className: ei.title,
      children: en.default.Messages.COLLECTIBLES_SHOP
    })]
  })
}
t.default = function(e) {
  let {
    isFullScreen: t = !0
  } = e, {
    analyticsSource: a,
    analyticsLocations: r
  } = (0, u.useStateFromStoresObject)([F.default], () => F.default.getAnalytics()), {
    analyticsLocations: i
  } = (0, g.default)([...r, h.default.COLLECTIBLES_SHOP]), m = (0, u.useStateFromStores)([y.default], () => y.default.getLayers().includes(ea.Layers.COLLECTIBLES_SHOP)), p = (0, d.useHasAnyModalOpen)(), {
    onClose: E
  } = (0, X.useCollectiblesShopRouting)(), T = (0, u.useStateFromStores)([O.default], () => O.default.getCurrentUser()), I = B.default.canUseCollectibles(T), N = (0, v.default)("shop_disable_cache"), j = (0, v.default)("shop_include_unpublished"), {
    categories: k,
    isFetchingCategories: R,
    error: M
  } = (0, U.default)({
    noCache: N,
    includeUnpublished: j
  });
  (0, _.useReloadProfileEffectWhenConfigsAreMissing)();
  let w = (0, W.usePurchasedCategoriesSort)(k),
    V = S.default.useExperiment({
      location: h.default.COLLECTIBLES_SHOP
    }, {
      autoTrackExposure: !1
    }),
    {
      userIsEligible: G
    } = (0, L.useLightningCheckoutEligibility)(),
    K = V.enabled && G,
    Z = (0, H.useShopBundleEnabled)("CollectiblesShop"),
    Q = s.useRef(null),
    [J, et] = s.useState(!1);
  (0, z.useProductDetailsDeepLinking)({
    categories: k,
    isFetchingCategories: R,
    isLayer: m,
    initialItemCardRef: Q
  });
  let {
    sessionId: eo,
    scrollerRef: ed,
    scrollHandler: ef
  } = (0, x.usePageScrollPosition)(ea.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
  s.useEffect(() => {
    P.default.track(ea.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: i,
      source: a,
      page_session_id: eo
    }), !I && P.default.track(ea.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: er.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: i
    })
  }, [I, i, a, eo]);
  let {
    dismissCollectiblesShopTabNewBadge: eC
  } = (0, ee.default)();
  s.useEffect(() => {
    eC(), !(0, b.isDismissibleContentDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, b.markDismissibleContentAsDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: el.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [eC]), s.useEffect(() => {
    !t && (0, C.setHomeLink)(ea.Routes.COLLECTIBLES_SHOP)
  }, [t]), s.useEffect(() => () => {
    (0, D.setCollectiblesCategoryItemsViewed)({
      categories: [...k.values()],
      itemTypes: [o.CollectiblesItemType.AVATAR_DECORATION, o.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [k]), s.useEffect(() => {
    if (!t || m || p) return;
    let e = e => {
      e.key === es.KeyboardEventKey.Escape && E()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, m, p, E]), s.useEffect(() => {
    G && S.default.trackExposure({
      location: h.default.COLLECTIBLES_SHOP
    })
  }, [G]);
  let em = s.useCallback(() => {
      (0, D.fetchCollectiblesCategories)({
        noCache: N,
        includeUnpublished: j,
        includeBundles: Z
      })
    }, [N, j, Z]),
    {
      containerRef: ep,
      returnRef: eE
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
  return (0, l.jsxs)(g.AnalyticsLocationProvider, {
    value: i,
    children: [(0, l.jsxs)("div", {
      className: ei.shop,
      ref: t ? ep : void 0,
      children: [(0, l.jsx)(ec, {
        isFullScreen: t,
        isLayer: m,
        onClose: E
      }), (0, l.jsx)(f.AdvancedScroller, {
        className: ei.shopScroll,
        ref: ed,
        onScroll: ef,
        children: (0, l.jsx)("div", {
          className: n()(ei.pageWrapper, {
            [ei.pageWrapperFullscreen]: t
          }),
          children: (0, l.jsxs)("main", {
            className: n()(ei.page, {
              [ei.pageWithShopBannerHidden]: !t
            }),
            children: [t ? (0, l.jsx)(A.default, {
              title: en.default.Messages.COLLECTIBLES_SHOP,
              ref: t ? eE : void 0
            }) : null, R ? (0, l.jsx)(q.default, {}) : M ? (0, l.jsx)(Y.default, {
              onRetry: em
            }) : (0, l.jsx)("div", {
              className: ei.categories,
              children: w.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map((e, a) => (0, l.jsx)(eu, {
                isPremiumUser: I,
                category: e,
                initialItemCardRef: Q,
                setIsGiftEasterEggEnabled: et,
                isGiftEasterEggEnabled: J,
                isFullScreen: t,
                lightningCheckoutEnabled: K,
                index: a
              }, e.skuId))
            })]
          })
        })
      })]
    }), J && (0, l.jsx)($.default, {})]
  })
}