"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var s, i, l = n("37983"),
  r = n("884691"),
  a = n("153967"),
  o = n("771072"),
  c = n("382133"),
  d = n("630394"),
  u = n("91601"),
  h = n("478715"),
  f = n("446674"),
  m = n("333693"),
  x = n("618991"),
  v = n("77078"),
  p = n("812204"),
  g = n("685665"),
  j = n("509167"),
  C = n("129408"),
  S = n("377527"),
  T = n("375010"),
  N = n("698041"),
  R = n("315102"),
  b = n("153160"),
  I = n("271560"),
  y = n("253981"),
  M = n("49111"),
  E = n("646718"),
  L = n("782340"),
  B = n("816896");
let O = {
  width: 20,
  height: 20,
  color: "white"
};

function _(e) {
  var t, n;
  let {
    app: s,
    subscriptionGroupListing: i,
    guildId: o,
    products: d
  } = e, u = null !== (n = null == i ? void 0 : null === (t = i.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published)) && void 0 !== n ? n : [], [h, f] = r.useState(() => u.length > 0 ? 0 : 1), p = r.useMemo(() => {
    let e = s.getIconSource(100);
    if (null != e && "number" != typeof e) {
      let n;
      if (Array.isArray(e) ? e.length > 0 && (n = e[0].uri) : n = e.uri, null != n) {
        var t;
        return null !== (t = y.default.toURLSafe(n)) && void 0 !== t ? t : void 0
      }
    }
  }, [s]), {
    bot: g
  } = s, j = r.useMemo(() => {
    var e;
    if ((null == g ? void 0 : g.banner) == null) return;
    let t = (0, R.getUserBannerURL)({
      id: g.id,
      banner: g.banner,
      size: 1024,
      canAnimate: !1
    });
    return null != t && null !== (e = y.default.toURLSafe(t)) && void 0 !== e ? e : void 0
  }, [g]), S = u.length > 0 && d.length > 0, T = 1 === h ? d.map(e => (0, l.jsx)(w, {
    sku: e,
    appId: s.id
  }, e.id)) : null != i ? u.map(e => (0, l.jsx)(A, {
    appId: s.id,
    groupListingId: i.id,
    guildId: o,
    listing: e,
    groupListingType: (0, C.isApplicationUserSubscription)(i.sku_flags) ? "user" : "guild"
  }, e.id)) : [];
  return (0, l.jsxs)("div", {
    className: B.wrapper,
    children: [(0, l.jsx)("div", {
      className: B.banner,
      children: (0, l.jsx)(a.Banner, {
        title: s.name,
        iconSrc: p,
        backgroundSrc: j
      })
    }), (0, l.jsx)(v.Text, {
      variant: "eyebrow",
      className: B.tabsText,
      children: L.default.Messages.STOREFRONT_PREMIUM_ITEMS
    }), (0, l.jsx)("div", {
      className: B.tabs,
      children: S ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(c.CategoryTab, {
          icon: (0, l.jsx)(m.BadgeIcon, {
            ...O
          }),
          title: L.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
          body: L.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS_BODY.format({
            appName: s.name
          }),
          disabled: 0 === u.length,
          selected: 0 === h,
          onClick: () => {
            f(0)
          }
        }), (0, l.jsx)(c.CategoryTab, {
          icon: (0, l.jsx)(x.TicketIcon, {
            ...O
          }),
          title: L.default.Messages.STOREFRONT_APP_PRODUCTS,
          body: L.default.Messages.STOREFRONT_APP_PRODUCTS_BODY.format({
            appName: s.name
          }),
          disabled: 0 === d.length,
          selected: 1 === h,
          onClick: () => {
            f(1)
          }
        })]
      }) : null
    }), (0, l.jsx)("div", {
      className: B.productList,
      style: {
        gridTemplateColumns: 1 === T.length ? "1fr" : void 0
      },
      children: T
    })]
  })
}(i = s || (s = {}))[i.SUBSCRIPTIONS = 0] = "SUBSCRIPTIONS", i[i.PRODUCTS = 1] = "PRODUCTS";

function A(e) {
  let {
    appId: t,
    groupListingId: n,
    guildId: s,
    listing: i,
    groupListingType: a
  } = e, {
    openModal: c
  } = (0, T.default)({
    listing: i,
    guildId: s,
    groupListingId: n,
    showBenefitsFirst: !1,
    analyticsLocation: M.AnalyticsLocations.BOT_PROFILE_POPOUT
  }), d = r.useMemo(() => {
    var e;
    return null === (e = i.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, S.getBenefitIcon)(t, e.icon)
    }))
  }, [t, i.store_listing_benefits]), f = r.useMemo(() => {
    var e;
    return null != i.image_asset && null !== (e = y.default.toURLSafe((0, I.getAssetURL)(t, i.image_asset, 64))) && void 0 !== e ? e : void 0
  }, [t, i.image_asset]), m = i.subscription_plans.length > 0 ? i.subscription_plans[0] : null;
  if (null === m) return null;
  let x = (0, l.jsx)(v.Button, {
    onClick: c,
    children: L.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
      rate: (0, b.formatRate)((0, b.formatPrice)(m.price, m.currency), E.SubscriptionIntervalTypes.MONTH, 1)
    })
  });
  return (0, l.jsx)(u.SubscriptionCard, {
    title: i.name,
    description: i.description,
    imgSrc: f,
    subscriptionType: a,
    onPurchase: c,
    PurchaseButton: e => (0, l.jsx)(v.Button, {
      ...e,
      children: L.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
        rate: (0, b.formatRate)((0, b.formatPrice)(m.price, m.currency), E.SubscriptionIntervalTypes.MONTH, 1)
      })
    }),
    benefitItems: null != d ? d.map(e => (0, l.jsx)(u.SubscriptionCardBenefit, {
      name: e.title,
      icon: e.icon
    }, e.id)) : void 0,
    onDetails: null != d ? () => {
      (0, v.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, l.jsxs)(v.ModalRoot, {
          transitionState: n,
          size: v.ModalSize.DYNAMIC,
          className: B.subDetailsModal,
          children: [(0, l.jsx)(o.CardDetails, {
            benefits: d.map(e => (0, l.jsx)(u.SubscriptionCardBenefit, {
              name: e.title,
              icon: e.icon,
              description: e.description
            }, e.id)),
            description: i.description,
            imgSrc: f,
            title: i.name,
            tag: (0, l.jsx)(h.SubscriptionTag, {
              type: a
            }),
            onClose: t
          }), (0, l.jsxs)(v.ModalFooter, {
            className: B.footer,
            children: [(0, l.jsx)(v.Button, {
              className: B.backButton,
              onClick: t,
              look: v.ButtonLooks.BLANK,
              children: (0, l.jsx)(v.Text, {
                color: "header-primary",
                tag: "p",
                variant: "heading-md/semibold",
                children: L.default.Messages.BACK
              })
            }), x]
          })]
        })
      })
    } : void 0
  })
}

function w(e) {
  var t, n, s;
  let {
    sku: i,
    appId: r
  } = e, {
    analyticsLocations: a
  } = (0, g.default)(p.default.APP_STOREFRONT), c = (0, f.useStateFromStores)([N.default], () => N.default.getForSKU(i.id), [i]), u = i.name, m = null !== (n = null == c ? void 0 : null === (t = c.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== n ? n : void 0, x = (null == c ? void 0 : c.headerBackground) != null && null !== (s = y.default.toURLSafe((0, I.getAssetURL)(r, c.headerBackground, 256))) && void 0 !== s ? s : void 0, C = i.type === M.SKUTypes.DURABLE ? L.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0, {
    price: S
  } = i;
  if (null == S) return null;
  let T = () => {
      (0, j.default)({
        applicationId: r,
        skuId: i.id,
        analyticsLocations: a
      })
    },
    R = (0, l.jsx)(v.Button, {
      onClick: T,
      children: L.default.Messages.STOREFRONT_PURCHASE_FOR.format({
        price: (0, b.formatPrice)(S.amount, S.currency)
      })
    });
  return (0, l.jsx)(d.ProductCard, {
    title: u,
    description: m,
    headerImage: x,
    availabilityLabel: C,
    onDetails: () => {
      (0, v.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, l.jsxs)(v.ModalRoot, {
          transitionState: n,
          size: v.ModalSize.DYNAMIC,
          className: B.subDetailsModal,
          children: [(0, l.jsx)(o.CardDetails, {
            title: u,
            description: m,
            imgSrc: x,
            tag: null != C ? (0, l.jsx)(h.Tag, {
              text: C
            }) : void 0,
            onClose: t
          }), (0, l.jsxs)(v.ModalFooter, {
            className: B.footer,
            children: [(0, l.jsx)(v.Button, {
              className: B.backButton,
              onClick: t,
              look: v.ButtonLooks.BLANK,
              children: (0, l.jsx)(v.Text, {
                color: "header-primary",
                tag: "p",
                variant: "heading-md/semibold",
                children: L.default.Messages.BACK
              })
            }), R]
          })]
        })
      })
    },
    PurchaseButton: e => (0, l.jsx)(v.Button, {
      ...e,
      children: L.default.Messages.STOREFRONT_PURCHASE_FOR.format({
        price: (0, b.formatPrice)(S.amount, S.currency)
      })
    }),
    onPurchase: T
  })
}