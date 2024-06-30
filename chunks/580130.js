n(47120);
var r, i, a, o, s = n(392711), l = n.n(s), u = n(442837), c = n(570140), d = n(959546), _ = n(283595), E = n(780570), f = n(55563);
let h = {}, p = {}, m = {}, I = {}, T = !1, g = !1, S = new Set(), A = new Set(), N = {};
function v(e) {
    h[e.id] = d.Z.createFromServer(e), null == m[e.sku_id] && (m[e.sku_id] = new Set()), null == I[e.application_id] && (I[e.application_id] = new Set()), null != e.subscription_id && (null == N[e.subscription_id] && (N[e.subscription_id] = new Set()), N[e.subscription_id].add(e.id)), I[e.application_id].add(e.id), m[e.sku_id].add(e.id);
}
function O(e) {
    p[e.id] = d.Z.createFromServer(e);
}
function R(e) {
    return v(e.entitlement);
}
class C extends (r = u.yh) {
    initialize() {
        this.syncWith([_.Z], () => !0);
    }
    get(e) {
        return h[e];
    }
    getGiftable() {
        return l().values(p);
    }
    getForApplication(e) {
        let t = I[e];
        if (null == t)
            return null;
        let n = new Set();
        for (let e of t)
            n.add(h[e]);
        return n;
    }
    getForSku(e) {
        let t = m[e];
        if (null == t)
            return null;
        let n = new Set();
        for (let e of t)
            n.add(h[e]);
        return n;
    }
    get fetchingAllEntitlements() {
        return T;
    }
    get fetchedAllEntitlements() {
        return g;
    }
    get applicationIdsFetching() {
        return S;
    }
    get applicationIdsFetched() {
        return A;
    }
    isFetchingForApplication(e) {
        return this.fetchingAllEntitlements || null != e && this.applicationIdsFetching.has(e);
    }
    isFetchedForApplication(e) {
        return this.fetchedAllEntitlements || null != e && this.applicationIdsFetched.has(e);
    }
    getForSubscription(e) {
        let t = N[e];
        if (null == t)
            return null;
        let n = new Set();
        for (let e of t)
            n.add(h[e]);
        return n;
    }
    isEntitledToSku(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, i = m[t];
        if (null != i)
            for (let t of i) {
                let n = h[t];
                if (null != n && n.isValid(e, f.Z, r))
                    return !0;
            }
        if (A.has(n))
            return !1;
        let a = null != r ? _.Z.getLibraryApplication(n, r) : _.Z.getActiveLibraryApplication(n);
        return !!(null != a && a.sku.id === t && (0, E.Je)(a)) || null;
    }
    hasFetchedForApplicationIds(e) {
        return e.every(e => A.has(e));
    }
}
o = 'EntitlementStore', (a = 'displayName') in (i = C) ? Object.defineProperty(i, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = o, t.Z = new C(c.Z, {
    ENTITLEMENT_FETCH_APPLICATION_START: function (e) {
        let {applicationId: t} = e;
        S.add(t);
    },
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function (e) {
        let {
            applicationId: t,
            entitlements: n
        } = e;
        for (let e of (S.delete(t), A.add(t), n))
            !0 !== e.consumed && v(e);
    },
    ENTITLEMENT_FETCH_APPLICATION_FAIL: function () {
    },
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function (e) {
        let {entitlements: t} = e;
        p = {}, t.forEach(O);
    },
    SKU_PURCHASE_SUCCESS: function (e) {
        let {entitlements: t} = e;
        for (let e of t)
            v(e);
    },
    LIBRARY_FETCH_SUCCESS: function (e) {
        let {libraryApplications: t} = e;
        for (let e of t)
            if (null != e.entitlements)
                for (let t of e.entitlements)
                    v(t);
    },
    ENTITLEMENT_CREATE: R,
    ENTITLEMENT_UPDATE: R,
    ENTITLEMENT_DELETE: function (e) {
        return function (e) {
            delete h[e.id];
            let t = I[e.application_id];
            null != t && t.delete(e.id);
            let n = m[e.sku_id];
            if (null != n && n.delete(e.id), null != e.subscription_id) {
                let t = N[e.subscription_id];
                null != t && t.delete(e.id);
            }
        }(e.entitlement);
    },
    LOGOUT: function () {
        h = {}, m = {}, I = {}, T = !1, g = !1, S = new Set(), A = new Set();
    },
    ENTITLEMENTS_FETCH_FOR_USER_START: function () {
        T = !0;
    },
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function (e) {
        let {entitlements: t} = e;
        for (let e of (g = !0, T = !1, t))
            v(e);
    },
    ENTITLEMENTS_FETCH_FOR_USER_FAIL: function () {
        g = !1, T = !1;
    }
});
