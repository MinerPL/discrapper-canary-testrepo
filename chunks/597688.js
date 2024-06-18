"use strict";
let i, r;
n(47120);
var s, o, a, l, u = n(392711),
  _ = n(442837),
  d = n(570140),
  c = n(706454),
  E = n(884697);
let I = new Map,
  T = new Map,
  h = I,
  S = T,
  f = !1,
  N = new Set;
let A = {},
  m = () => {
    h = I, S = T, r = void 0, f = !1, N = new Set, i = void 0, A = {}
  };
class O extends(s = _.ZP.Store) {
  initialize() {
    this.syncWith([c.default], m)
  }
  get isFetchingCategories() {
    return f
  }
  isFetchingProduct(e) {
    return null != e && N.has(e)
  }
  get error() {
    return i
  }
  get lastSuccessfulFetch() {
    return r
  }
  get lastFetchOptions() {
    return A
  }
  get categories() {
    return h
  }
  get products() {
    return S
  }
  getCategory(e) {
    return null != e ? h.get(e) : void 0
  }
  getProduct(e) {
    return null != e ? S.get(e) : void 0
  }
  getCategoryForProduct(e) {
    let t = this.getProduct(e);
    return this.getCategory(null == t ? void 0 : t.categorySkuId)
  }
}
l = "CollectiblesCategoryStore", (a = "displayName") in(o = O) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.Z = new O(d.Z, {
  COLLECTIBLES_CATEGORIES_FETCH: e => {
    f = !0, i = void 0, A = e.options
  },
  COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: e => {
    0 === e.categories.length ? (h = I, S = T) : !(0, u.isEqual)([...h.values()], e.categories) && (h = new Map(e.categories.map(e => [e.skuId, e])), S = new Map((0, E.Cs)(h).map(e => [e.skuId, e]))), r = Date.now(), f = !1, i = void 0
  },
  COLLECTIBLES_CATEGORIES_FETCH_FAILURE: e => {
    let {
      error: t
    } = e;
    h = I, S = T, f = !1, N = new Set, i = t
  },
  COLLECTIBLES_PRODUCT_FETCH: e => {
    let {
      skuId: t
    } = e;
    (N = new Set(N)).add(t), i = void 0
  },
  COLLECTIBLES_PRODUCT_FETCH_SUCCESS: e => {
    let {
      skuId: t,
      product: n
    } = e;
    S.set(t, n), (N = new Set(N)).delete(t), i = void 0
  },
  COLLECTIBLES_PRODUCT_FETCH_FAILURE: e => {
    let {
      skuId: t,
      error: n
    } = e;
    (N = new Set(N)).delete(t), i = n
  },
  LOGOUT: m
})