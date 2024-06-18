"use strict";
let i;
n(47120);
var r, s, o, a, l = n(442837),
  u = n(570140),
  _ = n(706454),
  d = n(659181),
  c = n(77498);
let E = new Set,
  I = new Set,
  T = new Map,
  h = new Map,
  S = new Map;

function f(e) {
  T.set(e.id, d.Z.createFromServer(e)), E.delete(e.id), I.delete(e.id), !h.has(e.application_id) && h.set(e.application_id, new Set), h.get(e.application_id).add(e.id)
}

function N(e) {
  f(e)
}

function A(e) {
  f(e.sku), null != e.child_skus && e.child_skus.forEach(e => f(e)), null != e.alternative_skus && e.alternative_skus.forEach(e => f(e))
}

function m(e) {
  let {
    entitlements: t
  } = e;
  for (let e of t) null != e.sku && f(e.sku)
}

function O() {
  E = new Set, I = new Set, T = new Map, h = new Map, S = new Map
}

function R() {
  if (i === _.default.locale) return !1;
  i = _.default.locale, O()
}
class C extends(r = l.yh) {
  initialize() {
    this.waitFor(_.default, c.Z), this.syncWith([_.default], R), i = _.default.locale
  }
  get(e) {
    return T.get(e)
  }
  getForApplication(e) {
    let t = h.get(e);
    return null == t ? [] : Array.from(t).map(e => T.get(e))
  }
  isFetching(e) {
    return E.has(e)
  }
  getSKUs() {
    return Object.fromEntries(T)
  }
  didFetchingSkuFail(e) {
    return I.has(e)
  }
}
a = "SKUStore", (o = "displayName") in(s = C) ? Object.defineProperty(s, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = a, t.Z = new C(u.Z, {
  STORE_LISTINGS_FETCH_SUCCESS: function(e) {
    let {
      storeListings: t
    } = e;
    for (let e of t) A(e)
  },
  STORE_LISTING_FETCH_SUCCESS: function(e) {
    let {
      storeListing: t
    } = e;
    A(t)
  },
  GIFT_CODE_RESOLVE_SUCCESS: function(e) {
    let {
      giftCode: t
    } = e;
    if (null == t.store_listing) return !1;
    f(t.store_listing.sku)
  },
  SKU_FETCH_START: function(e) {
    let {
      skuId: t
    } = e;
    E.add(t)
  },
  SKU_FETCH_SUCCESS: function(e) {
    let {
      sku: t
    } = e;
    f(t)
  },
  SKU_FETCH_FAIL: function(e) {
    let {
      skuId: t
    } = e;
    E.delete(t), I.add(t)
  },
  SKUS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      skus: n
    } = e;
    for (let e of n) f(e);
    null != t && S.set(t, new Set(n.map(e => e.id)))
  },
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: m,
  APPLICATION_STORE_CLEAR_DATA: O,
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: m,
  ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: m
})