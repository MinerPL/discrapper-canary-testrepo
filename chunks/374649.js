"use strict";
n.d(t, {
  ED: function() {
    return A
  },
  Ox: function() {
    return m
  },
  hz: function() {
    return T
  },
  o5: function() {
    return N
  },
  pV: function() {
    return O
  }
}), n(47120);
var i = n(470079),
  r = n(512722),
  s = n.n(r),
  o = n(442837),
  a = n(544891),
  l = n(881052),
  u = n(146528),
  _ = n(78839),
  d = n(74538),
  c = n(73346),
  E = n(981631);
async function I(e) {
  let {
    items: t,
    paymentSourceId: n,
    trialId: i,
    code: r,
    applyEntitlements: s = !1,
    currency: o,
    renewal: _,
    metadata: c
  } = e, I = {
    items: (t = (0, d.gB)(t)).map(e => {
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
    trial_id: i,
    code: r,
    apply_entitlements: s,
    currency: o,
    renewal: _,
    metadata: c
  };
  try {
    let e = await a.tn.post({
      url: E.ANM.BILLING_SUBSCRIPTIONS_PREVIEW,
      body: I,
      oldFormErrors: !0
    });
    return u.Z.createInvoiceFromServer(e.body)
  } catch (e) {
    throw new l.HF(e)
  }
}
async function T(e) {
  let {
    subscriptionId: t,
    items: n,
    paymentSourceId: i,
    renewal: r,
    currency: s,
    applyEntitlements: o = !1,
    analyticsLocations: _,
    analyticsLocation: c,
    userDiscountOfferId: I
  } = e;
  null != n && (n = (0, d.gB)(n));
  let T = {
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
    payment_source_id: i,
    renewal: r,
    apply_entitlements: o,
    currency: s,
    user_discount_offer_id: I
  };
  try {
    let e = await a.tn.patch({
      url: E.ANM.BILLING_SUBSCRIPTION_PREVIEW(t),
      query: {
        location: c,
        location_stack: _
      },
      body: T,
      oldFormErrors: !0
    });
    return u.Z.createInvoiceFromServer(e.body)
  } catch (e) {
    throw new l.HF(e)
  }
}
async function h(e) {
  let {
    paymentSourceId: t,
    skuId: n,
    subscriptionPlanId: i,
    currency: r,
    loadId: o
  } = e;
  s()(n, "SKU ID is missing for one time purchase gift invoice preview");
  try {
    let e = await (0, c.Kb)({
      url: E.ANM.STORE_SKU_PURCHASE(n),
      query: {
        gift: !0,
        payment_source_id: t,
        sku_subscription_plan_id: i,
        currency: r,
        load_id: o
      },
      oldFormErrors: !0
    });
    return u.Z.createInvoiceFromServer(e.body)
  } catch (e) {
    throw new l.HF(e)
  }
}
async function S(e) {
  let {
    subscriptionId: t,
    preventFetch: n
  } = e;
  if (n) return null;
  let i = await a.tn.get({
    url: E.ANM.BILLING_SUBSCRIPTION_INVOICE(t),
    oldFormErrors: !0
  });
  return u.Z.createInvoiceFromServer(i.body)
}

function f(e, t) {
  let {
    preventFetch: n = !1
  } = e, [r, s] = (0, i.useState)(null), [a, l] = (0, i.useState)(null), u = (0, o.e7)([_.ZP], () => _.ZP.getSubscriptions());
  return (0, i.useEffect)(() => {
    let e = !1;
    async function i() {
      try {
        l(null), s(null);
        let n = await t();
        !e && s(n)
      } catch (t) {
        !e && l(t)
      }
    }
    return !n && i(), () => {
      e = !0
    }
  }, [n, t, u]), [r, a]
}

function N(e) {
  let t = (0, i.useCallback)(() => h(e), [JSON.stringify(e)]);
  return f(e, t)
}

function A(e) {
  if ("subscriptionId" in e && null == e.subscriptionId) {
    let {
      subscriptionId: t,
      ...n
    } = e;
    e = n
  }
  let t = (0, i.useCallback)(() => "subscriptionId" in e ? T(e) : "items" in e ? I(e) : null, [JSON.stringify(e)]);
  return f(e, t)
}

function m(e) {
  let t = (0, i.useCallback)(() => S(e), [JSON.stringify(e)]);
  return f(e, t)
}

function O(e) {
  let t = e.subscriptionPlanPrice;
  return e.discounts.forEach(n => {
    let i = n.amount / e.quantity;
    t -= i
  }), t
}