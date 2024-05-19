"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("47120");
var i = n("735250"),
  l = n("470079"),
  r = n("905322"),
  a = n("200207"),
  s = n("269210"),
  o = n("442837"),
  u = n("481060"),
  d = n("607070"),
  c = n("100527"),
  f = n("906732"),
  p = n("87484"),
  m = n("171246"),
  g = n("889989"),
  v = n("696906"),
  h = n("55563"),
  S = n("551428"),
  C = n("626135"),
  x = n("768581"),
  T = n("73346"),
  L = n("624138"),
  R = n("591759"),
  j = n("110742"),
  _ = n("147496"),
  b = n("680005"),
  I = n("519896"),
  y = n("981631"),
  N = n("689938"),
  E = n("399461");

function O(e) {
  let {
    app: t,
    subscriptionGroupListing: n,
    guildId: a,
    storeLayout: s
  } = e, {
    subscriptions: p,
    otps: g
  } = s, v = l.useMemo(() => {
    var e, t;
    let i = new Set(p.map(e => e.id));
    return null !== (t = null == n ? void 0 : null === (e = n.subscription_listings) || void 0 === e ? void 0 : e.filter(e => i.has(e.id))) && void 0 !== t ? t : []
  }, [null == n ? void 0 : n.subscription_listings, p]), h = l.useMemo(() => {
    let e = t.getIconSource(100);
    if (null != e && "number" != typeof e) {
      let t;
      if (Array.isArray(e) ? e.length > 0 && (t = e[0].uri) : t = e.uri, null != t) {
        var n;
        return null !== (n = R.default.toURLSafe(t)) && void 0 !== n ? n : void 0
      }
    }
  }, [t]), {
    bot: S
  } = t, T = l.useMemo(() => {
    var e;
    if ((null == S ? void 0 : S.banner) == null) return;
    let t = (0, x.getUserBannerURL)({
      id: S.id,
      banner: S.banner,
      size: 1024,
      canAnimate: !1
    });
    return null != t && null !== (e = R.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [S]), L = l.useMemo(() => {
    var e;
    if ((null == S ? void 0 : S.banner) == null) return;
    let t = (0, x.getUserBannerURL)({
      id: S.id,
      banner: S.banner,
      size: 1024,
      canAnimate: !0
    });
    return null != t && null !== (e = R.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [S]), j = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), _ = l.useMemo(() => [...v.map(e => e.id), ...g.map(e => e.id)], [v, g]), {
    analyticsLocations: b
  } = (0, f.default)(c.default.APP_STOREFRONT);
  return l.useEffect(() => {
    0 !== _.length && C.default.track(y.AnalyticEvents.VIEW_PREMIUM_APP_STOREFRONT, {
      application_id: t.id,
      sku_ids: _,
      location_stack: b
    })
  }, [b, t.id, _]), (0, i.jsxs)("div", {
    className: E.wrapper,
    children: [(0, i.jsx)(r.Banner, {
      title: t.name,
      iconSrc: h,
      backgroundSrc: T,
      animatedBackgroundSrc: L,
      prefersReducedMotion: j
    }), v.length > 0 && null != n && (0, i.jsxs)("div", {
      className: E.productSection,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: N.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS
      }), (0, i.jsx)("div", {
        className: E.productList,
        children: v.map(e => (0, i.jsx)(A, {
          appId: t.id,
          groupListingId: n.id,
          guildId: a,
          listing: e,
          groupListingType: (0, m.isApplicationUserSubscription)(n.sku_flags) ? "user" : "guild"
        }, e.id))
      })]
    }), g.length > 0 && (0, i.jsxs)("div", {
      className: E.productSection,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: N.default.Messages.STOREFRONT_APP_PRODUCTS
      }), (0, i.jsx)("div", {
        className: E.productList,
        children: g.map(e => (0, i.jsx)(P, {
          skuId: e.sku.id,
          appId: t.id
        }, e.id))
      })]
    }), (0, i.jsx)(u.Text, {
      variant: "text-md/normal",
      className: E.legalText,
      children: null != t.termsOfServiceUrl && null != t.privacyPolicyUrl ? N.default.Messages.STOREFRONT_VIEW_TOS_PP.format({
        tosUrl: t.termsOfServiceUrl,
        ppUrl: t.privacyPolicyUrl
      }) : N.default.Messages.STOREFRONT_NO_TOS_PP
    })]
  })
}

function A(e) {
  let {
    appId: t,
    groupListingId: n,
    guildId: r,
    listing: a,
    groupListingType: o
  } = e, {
    openModal: d
  } = (0, v.default)({
    guildId: r,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: y.AnalyticsLocations.APP_STOREFRONT,
    skuId: a.id
  }), c = l.useMemo(() => {
    var e;
    return null === (e = a.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, g.getBenefitIcon)(t, e.icon)
    }))
  }, [t, a.store_listing_benefits]), f = l.useMemo(() => {
    var e;
    return null != a.image_asset && null !== (e = R.default.toURLSafe((0, T.getAssetURL)(t, a.image_asset, 256))) && void 0 !== e ? e : void 0
  }, [t, a.image_asset]), p = a.subscription_plans.length > 0 ? a.subscription_plans[0] : null;
  return null === p ? null : (0, i.jsx)(s.SubscriptionCard, {
    title: a.name,
    description: a.description,
    imgSrc: f,
    subscriptionType: o,
    onPurchase: d,
    PurchaseButton: e => (0, i.jsx)(b.SubscriptionPurchaseButton, {
      ...e,
      appId: t,
      groupListingId: n,
      groupListingType: o,
      guildId: r,
      skuId: a.id,
      subPlan: p
    }),
    benefitItems: null != c ? c.map(e => (0, i.jsx)(s.SubscriptionCardBenefit, {
      name: e.title,
      icon: e.icon
    }, e.id)) : void 0,
    onDetails: null != c ? () => {
      (0, u.openModal)(e => {
        let {
          onClose: l,
          transitionState: r
        } = e;
        return (0, i.jsx)(I.SubscriptionDetailsModal, {
          appId: t,
          groupListingId: n,
          groupListingType: o,
          onClose: l,
          skuId: a.id,
          transitionState: r
        })
      })
    } : void 0
  })
}

function P(e) {
  var t, n, l, r;
  let {
    skuId: s,
    appId: d
  } = e, {
    analyticsLocations: m
  } = (0, f.default)(c.default.APP_STOREFRONT), g = (0, o.useStateFromStores)([S.default], () => S.default.getForSKU(s), [s]), v = (0, o.useStateFromStores)([h.default], () => h.default.get(s), [s]), C = (0, j.useHasActiveEntitlement)(s);
  if (null == v) return null;
  let x = null !== (n = v.name) && void 0 !== n ? n : "",
    I = null !== (l = null == g ? void 0 : null === (t = g.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== l ? l : void 0,
    E = (null == g ? void 0 : g.headerBackground) != null && null !== (r = R.default.toURLSafe((0, T.getAssetURL)(d, g.headerBackground, 256))) && void 0 !== r ? r : void 0,
    O = v.type === y.SKUTypes.DURABLE && C,
    A = v.type === y.SKUTypes.DURABLE ? O ? N.default.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : N.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0,
    {
      price: P
    } = v;
  return null == P ? null : (0, i.jsx)(a.ProductCard, {
    title: x,
    description: I,
    headerImage: E,
    availabilityLabel: A,
    onDetails: (0, L.isNullOrEmpty)(I) ? void 0 : () => {
      (0, u.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, i.jsx)(_.ItemDetailsModal, {
          appId: d,
          skuId: s,
          onClose: t,
          transitionState: n
        })
      })
    },
    PurchaseButton: e => (0, i.jsx)(b.ItemPurchaseButton, {
      ...e,
      appId: d,
      sku: v
    }),
    onPurchase: () => {
      (0, p.default)({
        applicationId: d,
        skuId: v.id,
        analyticsLocations: m
      })
    }
  })
}