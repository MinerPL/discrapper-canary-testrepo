"use strict";
n.r(t), n.d(t, {
  updateSubscriptionInvoicePreview: function() {
    return p
  },
  useOneTimePurchaseInvoicePreview: function() {
    return S
  },
  useSubscriptionInvoicePreview: function() {
    return C
  },
  useGetSubscriptionInvoice: function() {
    return R
  },
  getItemUnitPriceWithDiscount: function() {
    return N
  }
}), n("222007");
var s = n("884691"),
  r = n("627445"),
  a = n.n(r),
  l = n("446674"),
  i = n("872717"),
  o = n("448993"),
  u = n("195358"),
  d = n("521012"),
  c = n("719923"),
  f = n("271560"),
  m = n("49111");
async function E(e) {
  let {
    items: t,
    paymentSourceId: n,
    trialId: s,
    code: r,
    applyEntitlements: a = !1,
    currency: l,
    renewal: d,
    metadata: f
  } = e;
  t = (0, c.coerceExistingItemsToNewItemInterval)(t);
  let E = {
    items: t.map(e => {
      let {
        planId: t,
        ...n
      } = e;
      return {
        ...n,
        plan_id: t
      }
    }),
    payment_source_id: n,
    trial_id: s,
    code: r,
    apply_entitlements: a,
    currency: l,
    renewal: d,
    metadata: f
  };
  try {
    let e = await i.HTTP.post({
      url: m.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
      body: E,
      oldFormErrors: !0
    });
    return u.default.createInvoiceFromServer(e.body)
  } catch (e) {
    throw new o.BillingError(e)
  }
}
async function p(e) {
  let {
    subscriptionId: t,
    items: n,
    paymentSourceId: s,
    renewal: r,
    currency: a,
    applyEntitlements: l = !1,
    analyticsLocations: d,
    analyticsLocation: f,
    userDiscountOfferId: E
  } = e;
  null != n && (n = (0, c.coerceExistingItemsToNewItemInterval)(n));
  let p = {
    items: null == n ? void 0 : n.map(e => {
      let {
        planId: t,
        ...n
      } = e;
      return {
        ...n,
        plan_id: t
      }
    }),
    payment_source_id: s,
    renewal: r,
    apply_entitlements: l,
    currency: a,
    user_discount_offer_id: E
  };
  try {
    let e = await i.HTTP.patch({
      url: m.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
      query: {
        location: f,
        location_stack: d
      },
      body: p,
      oldFormErrors: !0
    });
    return u.default.createInvoiceFromServer(e.body)
  } catch (e) {
    throw new o.BillingError(e)
  }
}
async function I(e) {
  let {
    paymentSourceId: t,
    skuId: n,
    subscriptionPlanId: s
  } = e;
  a(n, "SKU ID is missing for one time purchase gift invoice preview");
  try {
    let e = await (0, f.httpGetWithCountryCodeQuery)({
      url: m.Endpoints.STORE_SKU_PURCHASE(n),
      query: {
        gift: !0,
        payment_source_id: t,
        sku_subscription_plan_id: s
      },
      oldFormErrors: !0
    });
    return u.default.createInvoiceFromServer(e.body)
  } catch (e) {
    throw new o.BillingError(e)
  }
}
async function _(e) {
  let {
    subscriptionId: t,
    preventFetch: n
  } = e;
  if (n) return null;
  let s = await i.HTTP.get({
    url: m.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
    oldFormErrors: !0
  });
  return u.default.createInvoiceFromServer(s.body)
}

function h(e, t) {
  let {
    preventFetch: n = !1
  } = e, [r, a] = (0, s.useState)(null), [i, o] = (0, s.useState)(null), u = (0, l.useStateFromStores)([d.default], () => d.default.getSubscriptions());
  return (0, s.useEffect)(() => {
    let e = !1;
    async function s() {
      try {
        o(null), a(null);
        let n = await t();
        !e && a(n)
      } catch (t) {
        !e && o(t)
      }
    }
    return !n && s(), () => {
      e = !0
    }
  }, [n, t, u]), [r, i]
}

function S(e) {
  let t = (0, s.useCallback)(() => I(e), [JSON.stringify(e)]);
  return h(e, t)
}

function C(e) {
  if ("subscriptionId" in e && null == e.subscriptionId) {
    let {
      subscriptionId: t,
      ...n
    } = e;
    e = n
  }
  let t = (0, s.useCallback)(() => "subscriptionId" in e ? p(e) : "items" in e ? E(e) : null, [JSON.stringify(e)]);
  return h(e, t)
}

function R(e) {
  let t = (0, s.useCallback)(() => _(e), [JSON.stringify(e)]);
  return h(e, t)
}

function N(e) {
  let t = e.subscriptionPlanPrice;
  return e.discounts.forEach(n => {
    let s = n.amount / e.quantity;
    t -= s
  }), t
}