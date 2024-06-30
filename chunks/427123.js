n(47120), n(653041);
var i, a, s, l, r = n(392711), o = n.n(r), c = n(442837), d = n(433517), u = n(570140), _ = n(496929), E = n(16084), m = n(728345), I = n(812206), T = n(594190), h = n(594174), N = n(580130), f = n(55563), p = n(981631);
let C = 'DetectedOffPlatformPremiumPerksStore', g = {}, S = {}, A = [];
function x() {
    let e = !1;
    for (let {
                skuId: t,
                applicationId: n
            } of o().values(S)) {
        if (A.includes(t))
            continue;
        let i = I.Z.getApplication(n);
        if (null == i) {
            !I.Z.isFetchingApplication(n) && !I.Z.didFetchingApplicationFail(n) && m.Z.fetchApplication(n);
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
class O extends (i = c.ZP.Store) {
    initialize() {
        var e;
        this.waitFor(T.ZP, f.Z, N.Z), A = null !== (e = d.K.get(C)) && void 0 !== e ? e : A;
    }
    getDetectedOffPlatformPremiumPerks() {
        return o().values(g);
    }
}
l = 'DetectedOffPlatformPremiumPerksStore', (s = 'displayName') in (a = O) ? Object.defineProperty(a, s, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : a[s] = l, t.Z = new O(u.Z, {
    LOGOUT: function () {
        g = {}, S = {};
    },
    SKU_FETCH_SUCCESS: x,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: x,
    ENTITLEMENT_CREATE: x,
    APPLICATION_FETCH_SUCCESS: x,
    DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
        let {skuId: t} = e;
        if (delete g[t], A.includes(t))
            return !1;
        A.push(t), d.K.set(C, A);
    },
    RUNNING_GAMES_CHANGE: function () {
        let e = !1;
        for (let {
                    id: t,
                    distributor: n
                } of T.ZP.getRunningGames())
            if (null != t && n !== p.GQo.DISCORD)
                for (let {
                            skuId: n,
                            applicationId: i
                        } of p.Lg6) {
                    if (!(i !== t || A.includes(n)))
                        null == S[n] && (!N.Z.applicationIdsFetched.has(i) && !N.Z.applicationIdsFetching.has(i) && null == N.Z.getForSku(n) && _.yD(i), S[n] = {
                            skuId: n,
                            applicationId: i
                        }, e = !0);
                }
        return e && x(), e;
    }
});
