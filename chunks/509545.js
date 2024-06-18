"use strict";
n(47120), n(653041);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(301766),
  _ = n(251625),
  d = n(709054),
  c = n(981631),
  E = n(474936);
let I = {},
  T = {},
  h = new Set,
  S = new Set,
  f = {},
  N = {};

function A(e) {
  let t = e.skuId;
  I[e.id] = e;
  let n = e.prices[c.tuJ.DEFAULT];
  if (null != n) {
    var i;
    let t = new Set(Object.keys(n.paymentSourcePrices));
    f[e.id] = t;
    let r = Array.from(null !== (i = N[e.skuId]) && void 0 !== i ? i : new Set);
    N[e.skuId] = new Set([...r, ...Array.from(t)])
  }
  let r = T[t];
  null != r ? r.add(e.id) : T[t] = new Set([e.id])
}

function m() {
  [E.GP[E.Xh.NONE_MONTH], E.GP[E.Xh.NONE_YEAR], E.GP[E.Xh.NONE_3_MONTH], E.GP[E.Xh.NONE_6_MONTH]].forEach(e => A(u.ZP.createFromServer({
    id: e.id,
    name: e.name,
    interval: e.interval,
    interval_count: e.intervalCount,
    tax_inclusive: !0,
    sku_id: e.skuId,
    currency: c.pKx.USD,
    price: 0,
    price_tier: 0,
    discount_price: null
  })))
}

function O(e) {
  A(u.ZP.createFromServer(e))
}
m();

function R() {
  (0, _.Ti)(I), (0, _.Ti)(T), h.clear(), S.clear(), (0, _.Ti)(f), (0, _.Ti)(N), m()
}
let C = [E.rV.DAY, E.rV.MONTH, E.rV.YEAR];
class p extends(i = a.ZP.Store) {
  getPlanIdsForSkus(e) {
    let t = [];
    for (let i of e) {
      var n;
      let e = Array.from(null !== (n = T[i]) && void 0 !== n ? n : new Set);
      e.sort((e, t) => {
        let n = I[e],
          i = I[t];
        return C.indexOf(n.interval) - C.indexOf(i.interval) || n.intervalCount - i.intervalCount
      }), t.push(...e)
    }
    return t
  }
  getFetchedSKUIDs() {
    return d.default.keys(T)
  }
  getForSKU(e) {
    var t;
    return Array.from(null !== (t = T[e]) && void 0 !== t ? t : []).map(e => I[e])
  }
  getForSkuAndInterval(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return this.getForSKU(e).find(e => e.interval === t && e.intervalCount === n)
  }
  get(e) {
    return I[e]
  }
  isFetchingForSKU(e) {
    return h.has(e)
  }
  isFetchingForSKUs(e) {
    return e.some(e => this.isFetchingForSKU(e))
  }
  isLoadedForSKU(e) {
    return !!S.has(e) || !h.has(e) && null != T[e]
  }
  isLoadedForSKUs(e) {
    return e.every(e => this.isLoadedForSKU(e))
  }
  isFetchingForPremiumSKUs() {
    return E.YQ.map(e => this.isFetchingForSKU(e)).includes(!0)
  }
  isLoadedForPremiumSKUs() {
    return E.YQ.every(e => this.isLoadedForSKU(e))
  }
  ignoreSKUFetch(e) {
    S.add(e)
  }
  getPaymentSourcesForPlanId(e) {
    return f.hasOwnProperty(e) ? f[e] : null
  }
  getPaymentSourceIds() {
    let e = new Set;
    return Object.values(f).forEach(t => t.forEach(t => e.add(t))), e
  }
  hasPaymentSourceForSKUId(e, t) {
    return E.Si.NONE === t || null != N[t] && N[t].has(e)
  }
  hasPaymentSourceForSKUIds(e, t) {
    return t.every(t => this.hasPaymentSourceForSKUId(e, t))
  }
}
o = "SubscriptionPlanStore", (s = "displayName") in(r = p) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new p(l.Z, {
  SUBSCRIPTION_PLANS_FETCH: function(e) {
    let {
      skuId: t
    } = e;
    h.add(t)
  },
  SUBSCRIPTION_PLANS_FETCH_SUCCESS: function(e) {
    let {
      skuId: t,
      subscriptionPlans: n
    } = e;
    T[t] = new Set, N[t] = new Set, n.forEach(O), h.delete(t), S.delete(t)
  },
  SUBSCRIPTION_PLANS_FETCH_FAILURE: function(e) {
    let {
      skuId: t
    } = e;
    h.delete(t), S.delete(t)
  },
  SUBSCRIPTION_PLANS_RESET: R,
  GIFT_CODE_RESOLVE_SUCCESS: function(e) {
    let {
      giftCode: t
    } = e;
    null != t.subscription_plan && O(t.subscription_plan)
  },
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function(e) {
    let {
      entitlements: t
    } = e;
    for (let e of t) null != e.subscription_plan && O(e.subscription_plan)
  },
  LOGOUT: R
})