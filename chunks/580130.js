"use strict";
n(47120);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  d = n(959546),
  c = n(283595),
  E = n(780570),
  I = n(55563);
let T = {},
  h = {},
  S = {},
  f = {},
  N = !1,
  A = !1,
  m = new Set,
  O = new Set,
  R = {};

function C(e) {
  T[e.id] = d.Z.createFromServer(e), null == S[e.sku_id] && (S[e.sku_id] = new Set), null == f[e.application_id] && (f[e.application_id] = new Set), null != e.subscription_id && (null == R[e.subscription_id] && (R[e.subscription_id] = new Set), R[e.subscription_id].add(e.id)), f[e.application_id].add(e.id), S[e.sku_id].add(e.id)
}

function p(e) {
  h[e.id] = d.Z.createFromServer(e)
}

function g(e) {
  return C(e.entitlement)
}
class L extends(i = u.yh) {
  initialize() {
    this.syncWith([c.Z], () => !0)
  }
  get(e) {
    return T[e]
  }
  getGiftable() {
    return l().values(h)
  }
  getForApplication(e) {
    let t = f[e];
    if (null == t) return null;
    let n = new Set;
    for (let e of t) n.add(T[e]);
    return n
  }
  getForSku(e) {
    let t = S[e];
    if (null == t) return null;
    let n = new Set;
    for (let e of t) n.add(T[e]);
    return n
  }
  get fetchingAllEntitlements() {
    return N
  }
  get fetchedAllEntitlements() {
    return A
  }
  get applicationIdsFetching() {
    return m
  }
  get applicationIdsFetched() {
    return O
  }
  isFetchingForApplication(e) {
    return this.fetchingAllEntitlements || null != e && this.applicationIdsFetching.has(e)
  }
  isFetchedForApplication(e) {
    return this.fetchedAllEntitlements || null != e && this.applicationIdsFetched.has(e)
  }
  getForSubscription(e) {
    let t = R[e];
    if (null == t) return null;
    let n = new Set;
    for (let e of t) n.add(T[e]);
    return n
  }
  isEntitledToSku(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
      r = S[t];
    if (null != r)
      for (let t of r) {
        let n = T[t];
        if (null != n && n.isValid(e, I.Z, i)) return !0
      }
    if (O.has(n)) return !1;
    let s = null != i ? c.Z.getLibraryApplication(n, i) : c.Z.getActiveLibraryApplication(n);
    return !!(null != s && s.sku.id === t && (0, E.Je)(s)) || null
  }
  hasFetchedForApplicationIds(e) {
    return e.every(e => O.has(e))
  }
}
o = "EntitlementStore", (s = "displayName") in(r = L) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new L(_.Z, {
  ENTITLEMENT_FETCH_APPLICATION_START: function(e) {
    let {
      applicationId: t
    } = e;
    m.add(t)
  },
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function(e) {
    let {
      applicationId: t,
      entitlements: n
    } = e;
    for (let e of (m.delete(t), O.add(t), n)) !0 !== e.consumed && C(e)
  },
  ENTITLEMENT_FETCH_APPLICATION_FAIL: function() {},
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function(e) {
    let {
      entitlements: t
    } = e;
    h = {}, t.forEach(p)
  },
  SKU_PURCHASE_SUCCESS: function(e) {
    let {
      entitlements: t
    } = e;
    for (let e of t) C(e)
  },
  LIBRARY_FETCH_SUCCESS: function(e) {
    let {
      libraryApplications: t
    } = e;
    for (let e of t)
      if (null != e.entitlements)
        for (let t of e.entitlements) C(t)
  },
  ENTITLEMENT_CREATE: g,
  ENTITLEMENT_UPDATE: g,
  ENTITLEMENT_DELETE: function(e) {
    return function(e) {
      delete T[e.id];
      let t = f[e.application_id];
      null != t && t.delete(e.id);
      let n = S[e.sku_id];
      if (null != n && n.delete(e.id), null != e.subscription_id) {
        let t = R[e.subscription_id];
        null != t && t.delete(e.id)
      }
    }(e.entitlement)
  },
  LOGOUT: function() {
    T = {}, S = {}, f = {}, N = !1, A = !1, m = new Set, O = new Set
  },
  ENTITLEMENTS_FETCH_FOR_USER_START: function() {
    N = !0
  },
  ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function(e) {
    let {
      entitlements: t
    } = e;
    for (let e of (A = !0, N = !1, t)) C(e)
  },
  ENTITLEMENTS_FETCH_FOR_USER_FAIL: function() {
    A = !1, N = !1
  }
})