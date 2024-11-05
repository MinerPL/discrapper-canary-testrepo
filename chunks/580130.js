n(47120), n(653041);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(959546),
    f = n(283595),
    _ = n(780570),
    h = n(55563),
    p = n(981631),
    m = n(474936);
let g = {},
    E = {},
    v = {},
    I = {},
    S = !1,
    T = !1,
    b = new Set(),
    y = new Set(),
    A = {};
function N(e) {
    (g[e.id] = d.Z.createFromServer(e)), null == v[e.sku_id] && (v[e.sku_id] = new Set()), null == I[e.application_id] && (I[e.application_id] = new Set()), null != e.subscription_id && (null == A[e.subscription_id] && (A[e.subscription_id] = new Set()), A[e.subscription_id].add(e.id)), I[e.application_id].add(e.id), v[e.sku_id].add(e.id);
}
function C(e) {
    E[e.id] = d.Z.createFromServer(e);
}
function R(e) {
    return N(e.entitlement);
}
class O extends (r = u.yh) {
    initialize() {
        this.syncWith([f.Z], () => !0);
    }
    get(e) {
        return g[e];
    }
    getGiftable() {
        return l().values(E);
    }
    getForApplication(e) {
        let t = I[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(g[e]);
        return n;
    }
    getForSku(e) {
        let t = v[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(g[e]);
        return n;
    }
    get fetchingAllEntitlements() {
        return S;
    }
    get fetchedAllEntitlements() {
        return T;
    }
    get applicationIdsFetching() {
        return b;
    }
    get applicationIdsFetched() {
        return y;
    }
    isFetchingForApplication(e) {
        return this.fetchingAllEntitlements || (null != e && this.applicationIdsFetching.has(e));
    }
    isFetchedForApplication(e) {
        return this.fetchedAllEntitlements || (null != e && this.applicationIdsFetched.has(e));
    }
    getForSubscription(e) {
        let t = A[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(g[e]);
        return n;
    }
    isEntitledToSku(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = v[t];
        if (null != i)
            for (let t of i) {
                let n = g[t];
                if (null != n && n.isValid(e, h.Z, r)) return !0;
            }
        if (y.has(n)) return !1;
        let a = null != r ? f.Z.getLibraryApplication(n, r) : f.Z.getActiveLibraryApplication(n);
        return !!(null != a && a.sku.id === t && (0, _.Je)(a)) || null;
    }
    hasFetchedForApplicationIds(e) {
        return e.every((e) => y.has(e));
    }
    getFractionalPremium(e) {
        var t;
        let n = [];
        return (
            null === (t = this.getForApplication(m.CL)) ||
                void 0 === t ||
                t.forEach((t) => {
                    t.type === p.qc2.FRACTIONAL_REDEMPTION && t.consumed === e && n.push(t);
                }),
            n
        );
    }
    getUnactivatedFractionalPremiumUnits() {
        var e;
        let t = [];
        return (
            null === (e = this.getForApplication(m.CL)) ||
                void 0 === e ||
                e.forEach((e) => {
                    m.xJ.includes(e.skuId) && !e.consumed && t.push(e);
                }),
            t
        );
    }
}
(s = 'EntitlementStore'),
    (a = 'displayName') in (i = O)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new O(c.Z, {
        ENTITLEMENT_FETCH_APPLICATION_START: function (e) {
            let { applicationId: t } = e;
            b.add(t);
        },
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function (e) {
            let { applicationId: t, entitlements: n } = e;
            for (let e of (b.delete(t), y.add(t), n)) !0 !== e.consumed && N(e);
        },
        ENTITLEMENT_FETCH_APPLICATION_FAIL: function () {},
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function (e) {
            let { entitlements: t } = e;
            (E = {}), t.forEach(C);
        },
        SKU_PURCHASE_SUCCESS: function (e) {
            let { entitlements: t } = e;
            for (let e of t) N(e);
        },
        LIBRARY_FETCH_SUCCESS: function (e) {
            let { libraryApplications: t } = e;
            for (let e of t) if (null != e.entitlements) for (let t of e.entitlements) N(t);
        },
        ENTITLEMENT_CREATE: R,
        ENTITLEMENT_UPDATE: R,
        ENTITLEMENT_DELETE: function (e) {
            return (function (e) {
                delete g[e.id];
                let t = I[e.application_id];
                null != t && t.delete(e.id);
                let n = v[e.sku_id];
                if ((null != n && n.delete(e.id), null != e.subscription_id)) {
                    let t = A[e.subscription_id];
                    null != t && t.delete(e.id);
                }
            })(e.entitlement);
        },
        LOGOUT: function () {
            (g = {}), (v = {}), (I = {}), (S = !1), (T = !1), (b = new Set()), (y = new Set());
        },
        ENTITLEMENTS_FETCH_FOR_USER_START: function () {
            S = !0;
        },
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function (e) {
            let { entitlements: t } = e;
            for (let e of ((T = !0), (S = !1), t)) N(e);
        },
        ENTITLEMENTS_FETCH_FOR_USER_FAIL: function () {
            (T = !1), (S = !1);
        }
    }));
