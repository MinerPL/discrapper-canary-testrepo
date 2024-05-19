"use strict";
n.r(t), n.d(t, {
  ItemPurchaseButton: function() {
    return m
  },
  SubscriptionPurchaseButton: function() {
    return p
  }
});
var i = n("735250");
n("470079");
var s = n("481060"),
  l = n("100527"),
  r = n("906732"),
  a = n("87484"),
  o = n("696906"),
  u = n("626135"),
  d = n("937615"),
  c = n("110742"),
  f = n("981631"),
  h = n("474936"),
  S = n("689938");

function p(e) {
  let {
    appId: t,
    className: n,
    groupListingId: s,
    groupListingType: l,
    guildId: r,
    onClick: a,
    skuId: u,
    subPlan: p
  } = e, {
    openModal: m
  } = (0, o.default)({
    guildId: r,
    groupListingId: s,
    showBenefitsFirst: !1,
    analyticsLocation: f.AnalyticsLocations.APP_STOREFRONT,
    skuId: u
  }), T = (0, c.useHasActiveEntitlement)(u);
  return "guild" !== l && ("user" !== l || T) ? (0, i.jsx)(g, {
    className: n,
    children: S.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
  }) : (0, i.jsx)(v, {
    appId: t,
    skuId: u,
    onClick: null != a ? a : m,
    className: n,
    children: S.default.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
      rate: (0, d.formatRate)((0, d.formatPrice)(p.price, p.currency), h.SubscriptionIntervalTypes.MONTH, 1)
    })
  })
}

function m(e) {
  let {
    appId: t,
    className: n,
    onClick: s,
    sku: o
  } = e, {
    analyticsLocations: u
  } = (0, r.default)(l.default.APP_STOREFRONT), h = (0, c.useHasActiveEntitlement)(o.id), p = o.type === f.SKUTypes.DURABLE && h, {
    price: m
  } = o;
  return null == m ? null : p ? (0, i.jsx)(g, {
    className: n,
    children: S.default.Messages.COLLECTIBLES_ALREADY_OWNED
  }) : (0, i.jsx)(v, {
    appId: t,
    skuId: o.id,
    onClick: null != s ? s : () => {
      (0, a.default)({
        applicationId: t,
        skuId: o.id,
        analyticsLocations: u
      })
    },
    className: n,
    children: S.default.Messages.STOREFRONT_PURCHASE_FOR.format({
      price: (0, d.formatPrice)(m.amount, m.currency)
    })
  })
}

function v(e) {
  let {
    appId: t,
    skuId: n,
    onClick: l,
    ...r
  } = e;
  return (0, i.jsx)(s.Button, {
    ...r,
    onClick: e => {
      u.default.track(f.AnalyticEvents.STOREFRONT_PURCHASE_CLICKED, {
        application_id: t,
        sku_id: n
      }), null == l || l(e)
    }
  })
}

function g(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, i.jsx)(s.Button, {
    disabled: !0,
    className: t,
    look: s.Button.Looks.OUTLINED,
    color: s.Button.Colors.PRIMARY,
    size: s.Button.Sizes.SMALL,
    children: n
  })
}