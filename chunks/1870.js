"use strict";
let i, r, s;
n(47120);
var o, a, l, u, _ = n(392711),
  d = n(442837),
  c = n(570140);
let E = new Map,
  I = E,
  T = !1;
class h extends(o = d.ZP.Store) {
  get isFetching() {
    return T
  }
  get isClaiming() {
    return i
  }
  get purchases() {
    return I
  }
  get fetchError() {
    return r
  }
  get claimError() {
    return s
  }
  getPurchase(e) {
    return null != e ? I.get(e) : void 0
  }
}
u = "CollectiblesPurchaseStore", (l = "displayName") in(a = h) ? Object.defineProperty(a, l, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = u, t.Z = new h(c.Z, {
  COLLECTIBLES_PURCHASES_FETCH: e => {
    T = !0, r = void 0
  },
  COLLECTIBLES_PURCHASES_FETCH_SUCCESS: e => {
    0 === e.purchases.length ? I = E : !(0, _.isEqual)([...I.values()], e.purchases) && (I = new Map(e.purchases.map(e => [e.skuId, e]))), T = !1, r = void 0
  },
  COLLECTIBLES_PURCHASES_FETCH_FAILURE: e => {
    let {
      error: t
    } = e;
    I = E, T = !1, r = t
  },
  COLLECTIBLES_CLAIM: e => {
    i = e.skuId, s = void 0
  },
  COLLECTIBLES_CLAIM_SUCCESS: e => {
    null == e.purchases || 0 === e.purchases.length ? I = E : !(0, _.isEqual)([...I.values()], e.purchases) && (I = new Map(e.purchases.map(e => [e.skuId, e]))), i = void 0, s = void 0
  },
  COLLECTIBLES_CLAIM_FAILURE: e => {
    let {
      error: t,
      skuId: n
    } = e;
    i = n, s = t
  },
  LOGOUT: e => {
    I = E, T = !1, i = void 0, r = void 0, s = void 0
  }
})