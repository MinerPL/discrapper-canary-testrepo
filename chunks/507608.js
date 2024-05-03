"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  l = n("905322"),
  s = n("512100"),
  a = n("200207"),
  o = n("269210"),
  d = n("752843"),
  c = n("368072"),
  u = n("790472"),
  f = n("442837"),
  m = n("481060"),
  p = n("607070"),
  h = n("100527"),
  S = n("906732"),
  v = n("87484"),
  g = n("171246"),
  x = n("889989"),
  T = n("696906"),
  C = n("55563"),
  E = n("551428"),
  j = n("626135"),
  N = n("768581"),
  _ = n("937615"),
  I = n("73346"),
  L = n("624138"),
  R = n("591759"),
  y = n("110742"),
  A = n("981631"),
  b = n("474936"),
  O = n("689938"),
  M = n("876310");

function P(e) {
  let {
    app: t,
    subscriptionGroupListing: n,
    guildId: s,
    storeLayout: a
  } = e, {
    subscriptions: o,
    otps: d
  } = a, c = r.useMemo(() => {
    var e, t;
    let i = new Set(o.map(e => e.id));
    return null !== (t = null == n ? void 0 : null === (e = n.subscription_listings) || void 0 === e ? void 0 : e.filter(e => i.has(e.id))) && void 0 !== t ? t : []
  }, [null == n ? void 0 : n.subscription_listings, o]), u = r.useMemo(() => {
    let e = t.getIconSource(100);
    if (null != e && "number" != typeof e) {
      let t;
      if (Array.isArray(e) ? e.length > 0 && (t = e[0].uri) : t = e.uri, null != t) {
        var n;
        return null !== (n = R.default.toURLSafe(t)) && void 0 !== n ? n : void 0
      }
    }
  }, [t]), {
    bot: v
  } = t, x = r.useMemo(() => {
    var e;
    if ((null == v ? void 0 : v.banner) == null) return;
    let t = (0, N.getUserBannerURL)({
      id: v.id,
      banner: v.banner,
      size: 1024,
      canAnimate: !1
    });
    return null != t && null !== (e = R.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [v]), T = r.useMemo(() => {
    var e;
    if ((null == v ? void 0 : v.banner) == null) return;
    let t = (0, N.getUserBannerURL)({
      id: v.id,
      banner: v.banner,
      size: 1024,
      canAnimate: !0
    });
    return null != t && null !== (e = R.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [v]), C = (0, f.useStateFromStores)([p.default], () => p.default.useReducedMotion), E = r.useMemo(() => [...c.map(e => e.id), ...d.map(e => e.id)], [c, d]), {
    analyticsLocations: _
  } = (0, S.default)(h.default.APP_STOREFRONT);
  return r.useEffect(() => {
    0 !== E.length && j.default.track(A.AnalyticEvents.VIEW_PREMIUM_APP_STOREFRONT, {
      application_id: t.id,
      sku_ids: E,
      location_stack: _
    })
  }, [_, t.id, E]), (0, i.jsxs)("div", {
    className: M.wrapper,
    children: [(0, i.jsx)(l.Banner, {
      title: t.name,
      iconSrc: u,
      backgroundSrc: x,
      animatedBackgroundSrc: T,
      prefersReducedMotion: C
    }), c.length > 0 && null != n && (0, i.jsxs)("div", {
      className: M.productSection,
      children: [(0, i.jsx)(m.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: O.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS
      }), (0, i.jsx)("div", {
        className: M.productList,
        children: c.map(e => (0, i.jsx)(B, {
          appId: t.id,
          groupListingId: n.id,
          guildId: s,
          listing: e,
          groupListingType: (0, g.isApplicationUserSubscription)(n.sku_flags) ? "user" : "guild"
        }, e.id))
      })]
    }), d.length > 0 && (0, i.jsxs)("div", {
      className: M.productSection,
      children: [(0, i.jsx)(m.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: O.default.Messages.STOREFRONT_APP_PRODUCTS
      }), (0, i.jsx)("div", {
        className: M.productList,
        children: d.map(e => (0, i.jsx)(k, {
          skuId: e.sku.id,
          appId: t.id
        }, e.id))
      })]
    }), (0, i.jsx)(m.Text, {
      variant: "text-md/normal",
      className: M.legalText,
      children: null != t.termsOfServiceUrl && null != t.privacyPolicyUrl ? O.default.Messages.STOREFRONT_VIEW_TOS_PP.format({
        tosUrl: t.termsOfServiceUrl,
        ppUrl: t.privacyPolicyUrl
      }) : O.default.Messages.STOREFRONT_NO_TOS_PP
    })]
  })
}

function B(e) {
  let {
    appId: t,
    groupListingId: n,
    guildId: l,
    listing: s,
    groupListingType: a
  } = e, {
    openModal: u
  } = (0, T.default)({
    listing: s,
    guildId: l,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: A.AnalyticsLocations.APP_STOREFRONT
  }), f = r.useMemo(() => {
    var e;
    return null === (e = s.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, x.getBenefitIcon)(t, e.icon)
    }))
  }, [t, s.store_listing_benefits]), p = (0, y.useHasActiveEntitlement)(s.id), h = r.useMemo(() => {
    var e;
    return null != s.image_asset && null !== (e = R.default.toURLSafe((0, I.getAssetURL)(t, s.image_asset, 256))) && void 0 !== e ? e : void 0
  }, [t, s.image_asset]), S = s.subscription_plans.length > 0 ? s.subscription_plans[0] : null;
  if (null === S) return null;
  let v = "guild" === a || "user" === a && !p,
    g = e => {
      var n;
      return v ? (0, i.jsx)(w, {
        appId: t,
        skuId: s.id,
        onClick: null !== (n = e.onClick) && void 0 !== n ? n : u,
        className: e.className,
        children: O.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
          rate: (0, _.formatRate)((0, _.formatPrice)(S.price, S.currency), b.SubscriptionIntervalTypes.MONTH, 1)
        })
      }) : (0, i.jsx)(U, {
        className: e.className,
        children: O.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
      })
    };
  return (0, i.jsx)(o.SubscriptionCard, {
    title: s.name,
    description: s.description,
    imgSrc: h,
    subscriptionType: a,
    onPurchase: u,
    PurchaseButton: g,
    benefitItems: null != f ? f.map(e => (0, i.jsx)(o.SubscriptionCardBenefit, {
      name: e.title,
      icon: e.icon
    }, e.id)) : void 0,
    onDetails: null != f ? () => {
      (0, m.openModal)(e => {
        let {
          onClose: n,
          transitionState: r
        } = e;
        return (0, i.jsxs)(m.ModalRoot, {
          transitionState: r,
          size: m.ModalSize.DYNAMIC,
          className: M.subDetailsModal,
          children: [(0, i.jsx)(F, {
            appId: t,
            skuId: s.id,
            benefits: f.map(e => (0, i.jsx)(o.SubscriptionCardBenefit, {
              name: e.title,
              icon: e.icon,
              description: e.description
            }, e.id)),
            description: s.description,
            imgSrc: h,
            title: s.name,
            tag: (0, i.jsx)(d.SubscriptionTag, {
              type: a
            }),
            onClose: n,
            FallbackIcon: c.BadgeIcon
          }), (0, i.jsxs)(m.ModalFooter, {
            className: M.footer,
            children: [(0, i.jsx)(m.Button, {
              className: M.backButton,
              onClick: n,
              look: m.ButtonLooks.BLANK,
              children: (0, i.jsx)(m.Text, {
                color: "header-primary",
                tag: "p",
                variant: "heading-md/semibold",
                children: O.default.Messages.BACK
              })
            }), (0, i.jsx)(g, {})]
          })]
        })
      })
    } : void 0
  })
}

function k(e) {
  var t, n, r, l;
  let {
    skuId: s,
    appId: o
  } = e, {
    analyticsLocations: c
  } = (0, S.default)(h.default.APP_STOREFRONT), p = (0, f.useStateFromStores)([E.default], () => E.default.getForSKU(s), [s]), g = (0, f.useStateFromStores)([C.default], () => C.default.get(s), [s]), x = (0, y.useHasActiveEntitlement)(s);
  if (null == g) return null;
  let T = null !== (n = g.name) && void 0 !== n ? n : "",
    j = null !== (r = null == p ? void 0 : null === (t = p.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== r ? r : void 0,
    N = (null == p ? void 0 : p.headerBackground) != null && null !== (l = R.default.toURLSafe((0, I.getAssetURL)(o, p.headerBackground, 256))) && void 0 !== l ? l : void 0,
    b = g.type === A.SKUTypes.DURABLE && x,
    P = g.type === A.SKUTypes.DURABLE ? b ? O.default.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : O.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0,
    {
      price: B
    } = g;
  if (null == B) return null;
  let k = () => {
      (0, v.default)({
        applicationId: o,
        skuId: g.id,
        analyticsLocations: c
      })
    },
    D = e => {
      var t;
      return b ? (0, i.jsx)(U, {
        className: e.className,
        children: O.default.Messages.COLLECTIBLES_ALREADY_OWNED
      }) : (0, i.jsx)(w, {
        appId: o,
        skuId: g.id,
        onClick: null !== (t = e.onClick) && void 0 !== t ? t : k,
        className: e.className,
        children: O.default.Messages.STOREFRONT_PURCHASE_FOR.format({
          price: (0, _.formatPrice)(B.amount, B.currency)
        })
      })
    };
  return (0, i.jsx)(a.ProductCard, {
    title: T,
    description: j,
    headerImage: N,
    availabilityLabel: P,
    onDetails: (0, L.isNullOrEmpty)(j) ? void 0 : () => {
      (0, m.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, i.jsxs)(m.ModalRoot, {
          transitionState: n,
          size: m.ModalSize.DYNAMIC,
          className: M.subDetailsModal,
          children: [(0, i.jsx)(F, {
            appId: o,
            skuId: g.id,
            title: T,
            description: j,
            imgSrc: N,
            tag: null != P ? (0, i.jsx)(d.Tag, {
              text: P
            }) : void 0,
            onClose: t,
            FallbackIcon: u.TicketIcon
          }), (0, i.jsxs)(m.ModalFooter, {
            className: M.footer,
            children: [(0, i.jsx)(m.Button, {
              className: M.backButton,
              onClick: t,
              look: m.ButtonLooks.BLANK,
              children: (0, i.jsx)(m.Text, {
                color: "header-primary",
                tag: "p",
                variant: "heading-md/semibold",
                children: O.default.Messages.BACK
              })
            }), (0, i.jsx)(D, {})]
          })]
        })
      })
    },
    PurchaseButton: D,
    onPurchase: k
  })
}

function U(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, i.jsx)(m.Button, {
    disabled: !0,
    className: t,
    look: m.Button.Looks.OUTLINED,
    color: m.Button.Colors.PRIMARY,
    size: m.Button.Sizes.SMALL,
    children: n
  })
}

function F(e) {
  let {
    appId: t,
    skuId: n,
    ...l
  } = e, {
    analyticsLocations: a
  } = (0, S.default)();
  return r.useEffect(() => {
    j.default.track(A.AnalyticEvents.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
      application_id: t,
      sku_id: n,
      location_stack: a
    })
  }, [a, t, n]), (0, i.jsx)(s.CardDetails, {
    ...l
  })
}

function w(e) {
  let {
    appId: t,
    skuId: n,
    onClick: r,
    ...l
  } = e;
  return (0, i.jsx)(m.Button, {
    ...l,
    onClick: e => {
      j.default.track(A.AnalyticEvents.STOREFRONT_PURCHASE_CLICKED, {
        application_id: t,
        sku_id: n
      }), null == r || r(e)
    }
  })
}