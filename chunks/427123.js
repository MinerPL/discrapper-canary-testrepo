n(47120), n(653041);
var i, a, s, r, l = n(392711),
  o = n.n(l),
  c = n(442837),
  u = n(433517),
  d = n(570140),
  _ = n(496929),
  E = n(16084),
  I = n(728345),
  m = n(812206),
  T = n(594190),
  h = n(594174),
  N = n(580130),
  f = n(55563),
  C = n(981631);
let p = 'DetectedOffPlatformPremiumPerksStore',
  g = {},
  S = {},
  A = [];

function R() {
  let e = !1;
  for (let {
  skuId: t,
  applicationId: n
}
of o().values(S)) {
if (A.includes(t))
  continue;
let i = m.Z.getApplication(n);
if (null == i) {
  !m.Z.isFetchingApplication(n) && !m.Z.didFetchingApplicationFail(n) && I.Z.fetchApplication(n);
  continue;
}
let a = f.Z.get(t);
if (null == a) {
  !f.Z.isFetching(t) && !f.Z.didFetchingSkuFail(t) && E.$N(i.id, t);
  continue;
}
N.Z.applicationIdsFetching.has(i.id) || N.Z.isEntitledToSku(h.default.getCurrentUser(), t, i.id, i.id) || !a.available ? null != g[t] && (delete g[t], e = !0) : (g[t] = {
  skuId: t,
  applicationId: n
}, e = !0);
  }
  return e;
}
class x extends(i = c.ZP.Store) {
  initialize() {
var e;
this.waitFor(T.ZP, f.Z, N.Z), A = null !== (e = u.K.get(p)) && void 0 !== e ? e : A;
  }
  getDetectedOffPlatformPremiumPerks() {
return o().values(g);
  }
}
r = 'DetectedOffPlatformPremiumPerksStore', (s = 'displayName') in(a = x) ? Object.defineProperty(a, s, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = r, t.Z = new x(d.Z, {
  LOGOUT: function() {
g = {}, S = {};
  },
  SKU_FETCH_SUCCESS: R,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: R,
  ENTITLEMENT_CREATE: R,
  APPLICATION_FETCH_SUCCESS: R,
  DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function(e) {
let {
  skuId: t
} = e;
if (delete g[t], A.includes(t))
  return !1;
A.push(t), u.K.set(p, A);
  },
  RUNNING_GAMES_CHANGE: function() {
let e = !1;
for (let {
    id: t,
    distributor: n
  }
  of T.ZP.getRunningGames())
  if (null != t && n !== C.GQo.DISCORD)
    for (let {
        skuId: n,
        applicationId: i
      }
      of C.Lg6) {
      if (!(i !== t || A.includes(n)))
        null == S[n] && (!N.Z.applicationIdsFetched.has(i) && !N.Z.applicationIdsFetching.has(i) && null == N.Z.getForSku(n) && _.yD(i), S[n] = {
          skuId: n,
          applicationId: i
        }, e = !0);
    }
return e && R(), e;
  }
});