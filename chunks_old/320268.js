"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007"), n("424973");
var s = n("917351"),
  a = n.n(s),
  l = n("446674"),
  i = n("95410"),
  r = n("913144"),
  o = n("316718"),
  u = n("465527"),
  d = n("651057"),
  c = n("299285"),
  E = n("161454"),
  f = n("697218"),
  _ = n("437712"),
  T = n("552712"),
  I = n("49111");
let m = "DetectedOffPlatformPremiumPerksStore",
  N = {},
  p = {},
  S = [];

function C() {
  let e = !1;
  for (let {
      skuId: t,
      applicationId: n
    }
    of a.values(p)) {
    if (S.includes(t)) continue;
    let s = c.default.getApplication(n);
    if (null == s) {
      !c.default.isFetchingApplication(n) && !c.default.didFetchingApplicationFail(n) && d.default.fetchApplication(n);
      continue
    }
    let a = T.default.get(t);
    if (null == a) {
      !T.default.isFetching(t) && !T.default.didFetchingSkuFail(t) && u.fetchSKU(s.id, t);
      continue
    }
    _.default.applicationIdsFetching.has(s.id) || _.default.isEntitledToSku(f.default.getCurrentUser(), t, s.id, s.id) || !a.available ? null != N[t] && (delete N[t], e = !0) : (N[t] = {
      skuId: t,
      applicationId: n
    }, e = !0)
  }
  return e
}
class A extends l.default.Store {
  initialize() {
    var e;
    this.waitFor(E.default, T.default, _.default), S = null !== (e = i.Storage.get(m)) && void 0 !== e ? e : S
  }
  getDetectedOffPlatformPremiumPerks() {
    return a.values(N)
  }
}
A.displayName = "DetectedOffPlatformPremiumPerksStore";
var h = new A(r.default, {
  LOGOUT: function() {
    N = {}, p = {}
  },
  SKU_FETCH_SUCCESS: C,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: C,
  ENTITLEMENT_CREATE: C,
  APPLICATION_FETCH_SUCCESS: C,
  DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function(e) {
    let {
      skuId: t
    } = e;
    if (delete N[t], S.includes(t)) return !1;
    S.push(t), i.Storage.set(m, S)
  },
  RUNNING_GAMES_CHANGE: function() {
    let e = !1;
    for (let {
        id: t,
        distributor: n
      }
      of E.default.getRunningGames())
      if (null != t && n !== I.Distributors.DISCORD)
        for (let {
            skuId: n,
            applicationId: s
          }
          of I.OFF_PLATFORM_PREMIUM_PERKS) {
          if (!(s !== t || S.includes(n))) null == p[n] && (!_.default.applicationIdsFetched.has(s) && !_.default.applicationIdsFetching.has(s) && null == _.default.getForSku(n) && o.fetchUserEntitlementsForApplication(s), p[n] = {
            skuId: n,
            applicationId: s
          }, e = !0)
        }
    return e && C(), e
  }
})