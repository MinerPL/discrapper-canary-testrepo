"use strict";
let i;
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var s = n("446674"),
  r = n("913144"),
  a = n("915639"),
  o = n("137406"),
  l = n("546463");
let u = new Set,
  d = new Set,
  c = {},
  f = {},
  _ = {};

function h(e) {
  c[e.id] = o.default.createFromServer(e)
}

function g(e) {
  u.delete(e.id), d.delete(e.id), h(e)
}

function m(e) {
  h(e.sku), null != e.child_skus && e.child_skus.forEach(e => h(e)), null != e.alternative_skus && e.alternative_skus.forEach(e => h(e))
}

function E(e) {
  let {
    storeListings: t
  } = e;
  for (let e of t) m(e)
}

function p(e) {
  let {
    entitlements: t
  } = e;
  for (let e of t) null != e.sku && h(e.sku)
}

function v() {
  u = new Set, d = new Set, c = {}, f = {}, _ = {}
}

function S() {
  if (i === a.default.locale) return !1;
  i = a.default.locale, v()
}
class T extends s.default.Store {
  initialize() {
    this.waitFor(a.default, l.default), this.syncWith([a.default], S), i = a.default.locale
  }
  get(e) {
    return c[e]
  }
  getForApplication(e) {
    let t = f[e];
    return null == t ? [] : Array.from(t).map(e => c[e])
  }
  isFetching(e) {
    return u.has(e)
  }
  getSKUs() {
    return c
  }
  didFetchingSkuFail(e) {
    return d.has(e)
  }
}
T.displayName = "SKUStore";
var I = new T(r.default, {
  STORE_LISTINGS_FETCH_SUCCESS: E,
  APPLICATION_STORE_DIRECTORY_FETCH_SUCCESS: E,
  STORE_LISTING_FETCH_SUCCESS: function(e) {
    let {
      storeListing: t
    } = e;
    m(t)
  },
  GIFT_CODE_RESOLVE_SUCCESS: function(e) {
    let {
      giftCode: t
    } = e;
    if (null == t.store_listing) return !1;
    h(t.store_listing.sku)
  },
  SKU_FETCH_START: function(e) {
    let {
      skuId: t
    } = e;
    u.add(t)
  },
  SKU_FETCH_SUCCESS: function(e) {
    let {
      sku: t
    } = e;
    g(t)
  },
  SKU_FETCH_FAIL: function(e) {
    let {
      skuId: t
    } = e;
    u.delete(t), d.add(t)
  },
  SKUS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      applicationId: n,
      skus: i
    } = e;
    for (let e of i) g(e);
    null != t && (_[t] = new Set(i.map(e => e.id))), null != n && (f[n] = new Set(i.map(e => e.id)))
  },
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: p,
  APPLICATION_STORE_CLEAR_DATA: v,
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: p,
  ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: p
})