"use strict";
n.r(t), n("47120"), n("653041");
var s, a, l, i, r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("433517"),
  c = n("570140"),
  f = n("496929"),
  E = n("16084"),
  _ = n("728345"),
  m = n("812206"),
  T = n("594190"),
  I = n("594174"),
  p = n("580130"),
  h = n("55563"),
  N = n("981631");
let S = "DetectedOffPlatformPremiumPerksStore",
  C = {},
  A = {},
  g = [];

function M() {
  let e = !1;
  for (let {
      skuId: t,
      applicationId: n
    }
    of o().values(A)) {
    if (g.includes(t)) continue;
    let s = m.default.getApplication(n);
    if (null == s) {
      !m.default.isFetchingApplication(n) && !m.default.didFetchingApplicationFail(n) && _.default.fetchApplication(n);
      continue
    }
    let a = h.default.get(t);
    if (null == a) {
      !h.default.isFetching(t) && !h.default.didFetchingSkuFail(t) && E.fetchPublishedSKU(s.id, t);
      continue
    }
    p.default.applicationIdsFetching.has(s.id) || p.default.isEntitledToSku(I.default.getCurrentUser(), t, s.id, s.id) || !a.available ? null != C[t] && (delete C[t], e = !0) : (C[t] = {
      skuId: t,
      applicationId: n
    }, e = !0)
  }
  return e
}
class R extends(s = u.default.Store) {
  initialize() {
    var e;
    this.waitFor(T.default, h.default, p.default), g = null !== (e = d.Storage.get(S)) && void 0 !== e ? e : g
  }
  getDetectedOffPlatformPremiumPerks() {
    return o().values(C)
  }
}
i = "DetectedOffPlatformPremiumPerksStore", (l = "displayName") in(a = R) ? Object.defineProperty(a, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = i, t.default = new R(c.default, {
  LOGOUT: function() {
    C = {}, A = {}
  },
  SKU_FETCH_SUCCESS: M,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: M,
  ENTITLEMENT_CREATE: M,
  APPLICATION_FETCH_SUCCESS: M,
  DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function(e) {
    let {
      skuId: t
    } = e;
    if (delete C[t], g.includes(t)) return !1;
    g.push(t), d.Storage.set(S, g)
  },
  RUNNING_GAMES_CHANGE: function() {
    let e = !1;
    for (let {
        id: t,
        distributor: n
      }
      of T.default.getRunningGames())
      if (null != t && n !== N.Distributors.DISCORD)
        for (let {
            skuId: n,
            applicationId: s
          }
          of N.OFF_PLATFORM_PREMIUM_PERKS) {
          if (!(s !== t || g.includes(n))) null == A[n] && (!p.default.applicationIdsFetched.has(s) && !p.default.applicationIdsFetching.has(s) && null == p.default.getForSku(n) && f.fetchUserEntitlementsForApplication(s), A[n] = {
            skuId: n,
            applicationId: s
          }, e = !0)
        }
    return e && M(), e
  }
})