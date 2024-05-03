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
  m = a("150063"),
  C = a("425493"),
  p = a("434650"),
  h = a("410030"),
  E = a("100527"),
  g = a("906732"),
  x = a("702486"),
  S = a("580747"),
  b = a("605236"),
  T = a("984370"),
  L = a("329067"),
  v = a("51855"),
  I = a("479446"),
  N = a("981632"),
  _ = a("290026"),
  y = a("819640"),
  O = a("594174"),
  k = a("292665"),
  A = a("682864"),
  R = a("471731"),
  j = a("626135"),
  P = a("74538"),
  B = a("792125"),
  D = a("335131"),
  F = a("328347"),
  M = a("186711"),
  w = a("280773"),
  H = a("223143"),
  U = a("298228"),
  W = a("937510"),
  G = a("853748"),
  V = a("426171"),
  z = a("823941"),
  K = a("732329"),
  Y = a("752053"),
  X = a("861746"),
  Z = a("508498"),
  Q = a("38900"),
  q = a("709999"),
  $ = a("373113"),
  J = a("141594"),
  ee = a("302800"),
  et = a("981631"),
  ea = a("921944"),
  el = a("420212"),
  es = a("474936"),
  er = a("689938"),
  en = a("803702");

function ei(e) {
  var t, a;
  let {
    category: r,
    initialItemCardRef: c,
    tallerCardsEnabled: d,
    lightningCheckoutEnabled: m,
    isPremiumUser: C,
    isGiftEasterEggEnabled: p
  } = e, h = (0, W.usePurchasedProductsSort)(r.products), E = (0, i.groupBy)(h, "type"), g = (0, u.useStateFromStores)([F.default], () => F.default.initialProductSkuId), {
    unifiedProductCatalogEnabled: x
  } = (0, w.useCollectiblesUnifiedProductCatalogExperiment)({
    location: "CollectiblesShop"
  }), S = K.default;
  d && m ? S = X.default : d && (S = q.default);
  let b = s.useCallback(e => t => {
      e.skuId === g && (c.current = t.current)
    }, [g, c]),
    T = (e, t) => 0 === e.length ? null : (0, l.jsxs)("div", {
      children: [null != t ? (0, l.jsx)(f.Text, {
        className: n()(en.itemTypeTitle, {
          [en.itemTypeTitleForTallerCard]: d
        }),
        color: "header-secondary",
        variant: "text-sm/bold",
        children: t
      }) : (0, l.jsx)(A.default, {
        size: 24
      }), (0, l.jsx)("div", {
        className: n()(en.cardsContainer, d ? en.tallerShopCard : en.regularShopCard),
        children: e.map(e => (0, l.jsx)(S, {
          onMount: b(e),
          isPremiumUser: C,
          category: r,
          product: e,
          isGiftEasterEggEnabled: p
        }, e.skuId))
      })]
    });
  return x ? T(h) : (0, l.jsxs)(l.Fragment, {
    children: [T(null !== (t = E[o.CollectiblesItemType.AVATAR_DECORATION]) && void 0 !== t ? t : [], er.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), T(null !== (a = E[o.CollectiblesItemType.PROFILE_EFFECT]) && void 0 !== a ? a : [], er.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE)]
  })
}

function eo(e) {
  let {
    category: t,
    isPremiumUser: a,
    initialItemCardRef: r,
    isGiftEasterEggEnabled: i,
    setIsGiftEasterEggEnabled: o,
    showEasterEggToggle: u,
    isFullScreen: c,
    lightningCheckoutEnabled: d
  } = e, m = s.useRef(10 + 70 * Math.random()), {
    tallerCardsEnabled: C
  } = (0, M.useCollectiblesShopTallerCardsExperiment)({
    location: "CollectiblesShop"
  }), [h, E] = s.useState(!1), g = (0, ee.getCountdownDisplayOptions)(t.skuId), x = (0, p.useIsVisible)(e => {
    E(e && null != g)
  }, c ? .13 : .15);
  return (0, l.jsxs)("div", {
    className: en.categoryWrapper,
    ref: x,
    children: [u && (0, l.jsx)(f.Clickable, {
      className: n()(en.hiddenWumpus, {
        [en.hiddenWumpusEnabled]: i
      }),
      onClick: () => o(!0),
      style: {
        left: "".concat(m.current, "%")
      },
      children: (0, l.jsx)(N.default, {
        idleAnimationState: I.AnimationState.IDLE,
        giftStyle: es.PremiumGiftStyles.BOX
      })
    }), (0, l.jsx)(z.default, {
      category: t,
      className: C ? en.__invalid_tallerShopCardBanner : void 0,
      hideLimitedTimeBadge: null != g
    }), (0, l.jsx)(ei, {
      category: t,
      initialItemCardRef: r,
      tallerCardsEnabled: C,
      isPremiumUser: a,
      isGiftEasterEggEnabled: i,
      lightningCheckoutEnabled: d
    }), null != g && null != t.unpublishedAt && (0, l.jsx)(G.CollectiblesCountdown, {
      unpublishedAt: t.unpublishedAt,
      isVisible: h,
      displayOptions: g,
      isFullScreen: c
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
  } = (0, g.default)([...r, E.default.COLLECTIBLES_SHOP]), p = (0, u.useStateFromStores)([y.default], () => y.default.getLayers().includes(et.Layers.COLLECTIBLES_SHOP)), I = (0, d.useHasAnyModalOpen)(), {
    onClose: N
  } = (0, Z.useCollectiblesShopRouting)(), A = (0, u.useStateFromStores)([O.default], () => O.default.getCurrentUser()), w = P.default.canUseCollectibles(A), W = (0, S.default)("shop_disable_cache"), G = (0, S.default)("shop_include_unpublished"), {
    categories: z,
    isFetchingCategories: K,
    error: X
  } = (0, H.default)({
    noCache: W,
    includeUnpublished: G
  });
  (0, _.useReloadProfileEffectWhenConfigsAreMissing)();
  let q = (0, U.usePurchasedCategoriesSort)(z),
    {
      tallerCardsEnabled: ee
    } = (0, M.useCollectiblesShopTallerCardsExperiment)({
      location: "CollectiblesShop"
    }),
    ei = v.default.useExperiment({
      location: E.default.COLLECTIBLES_SHOP
    }, {
      autoTrackExposure: !1
    }),
    {
      userIsEligible: eu
    } = (0, L.useLightningCheckoutEligibility)(),
    ec = ei.enabled && eu,
    ed = s.useRef(null),
    [ef, em] = s.useState(!1);
  (0, V.useProductDetailsDeepLinking)({
    categories: z,
    isFetchingCategories: K,
    isLayer: p,
    initialItemCardRef: ed
  });
  let {
    sessionId: eC,
    scrollerRef: ep,
    scrollHandler: eh
  } = (0, x.usePageScrollPosition)(et.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, a);
  s.useEffect(() => {
    j.default.track(et.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
      location_stack: i,
      source: a,
      page_session_id: eC
    }), !w && j.default.track(et.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: es.PremiumUpsellTypes.COLLECTIBLES_SHOP,
      location_stack: i
    })
  }, [w, i, a, eC]);
  let {
    dismissCollectiblesShopTabNewBadge: eE
  } = (0, J.default)();
  s.useEffect(() => {
    eE(), !(0, b.isDismissibleContentDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, b.markDismissibleContentAsDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
      dismissAction: ea.ContentDismissActionType.AUTO_DISMISS,
      forceTrack: !0
    })
  }, [eE]), s.useEffect(() => {
    !t && (0, m.setHomeLink)(et.Routes.COLLECTIBLES_SHOP)
  }, [t]), s.useEffect(() => () => {
    (0, D.setCollectiblesCategoryItemsViewed)({
      categories: [...z.values()],
      itemTypes: [o.CollectiblesItemType.AVATAR_DECORATION, o.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [z]), s.useEffect(() => {
    if (!t || p || I) return;
    let e = e => {
      e.key === el.KeyboardEventKey.Escape && N()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [t, p, I, N]), s.useEffect(() => {
    eu && v.default.trackExposure({
      location: E.default.COLLECTIBLES_SHOP
    })
  }, [eu]);
  let eg = s.useCallback(() => {
      (0, D.fetchCollectiblesCategories)({
        noCache: W,
        includeUnpublished: G
      })
    }, [W, G]),
    ex = (0, h.default)(),
    {
      containerRef: eS,
      returnRef: eb
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
      className: en.shop,
      ref: t ? eS : void 0,
      children: [t ? null : (0, l.jsxs)(T.default, {
        className: n()((0, B.getThemeClass)(ex), en.__invalid_headerBar),
        toolbar: !0,
        children: [(0, l.jsx)(R.default, {
          className: en.logo
        }), (0, l.jsx)(T.default.Title, {
          className: en.title,
          children: er.default.Messages.COLLECTIBLES_SHOP
        })]
      }), t && (0, l.jsx)("div", {
        className: en.closeWrapper,
        children: (0, l.jsx)(C.default, {
          className: en.close,
          closeAction: p ? D.closeCollectiblesShop : N,
          keybind: "ESC"
        })
      }), (0, l.jsx)(f.AdvancedScroller, {
        className: n()(en.shopScroll, {
          [en.shopScrollBackgroundPrimary]: ee
        }),
        ref: ep,
        onScroll: eh,
        children: (0, l.jsx)("div", {
          className: n()(en.pageWrapper, {
            [en.pageWrapperFullscreen]: t,
            [en.pageWrapperBackgroundPrimary]: ee
          }),
          children: (0, l.jsxs)("main", {
            className: n()(en.page, {
              [en.pageWithShopBannerHidden]: !t
            }),
            children: [t ? (0, l.jsx)(k.default, {
              title: er.default.Messages.COLLECTIBLES_SHOP,
              ref: t ? eb : void 0
            }) : null, K ? (0, l.jsx)(Q.default, {}) : X ? (0, l.jsx)(Y.default, {
              onRetry: eg
            }) : (0, l.jsx)("div", {
              className: en.categories,
              children: q.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
                let {
                  products: t
                } = e;
                return t.length > 0
              }).map(e => (0, l.jsx)(eo, {
                isPremiumUser: w,
                category: e,
                initialItemCardRef: ed,
                setIsGiftEasterEggEnabled: em,
                isGiftEasterEggEnabled: ef,
                isFullScreen: t,
                lightningCheckoutEnabled: ec
              }, e.skuId))
            })]
          })
        })
      })]
    }), ef && (0, l.jsx)($.default, {})]
  })
}