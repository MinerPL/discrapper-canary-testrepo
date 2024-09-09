let r;
n(47120);
var i,
    a,
    s,
    o,
    l = n(442837),
    u = n(570140),
    c = n(706454),
    d = n(659181),
    _ = n(77498);
let E = new Map(),
    f = new Set(),
    h = new Set(),
    p = new Map(),
    I = new Map(),
    m = new Map();
function T(e) {
    var t;
    p.set(e.id, d.Z.createFromServer(e)),
        f.delete(e.id),
        h.delete(e.id),
        null === (t = e.bundled_sku_ids) ||
            void 0 === t ||
            t.forEach((t) => {
                E.set(t, e.id);
            }),
        !I.has(e.application_id) && I.set(e.application_id, new Set()),
        I.get(e.application_id).add(e.id);
}
function S(e) {
    T(e);
}
function g(e) {
    T(e.sku), null != e.child_skus && e.child_skus.forEach((e) => T(e)), null != e.alternative_skus && e.alternative_skus.forEach((e) => T(e));
}
function A(e) {
    let { entitlements: t } = e;
    for (let e of t) null != e.sku && T(e.sku);
}
function N() {
    (E = new Map()), (f = new Set()), (h = new Set()), (p = new Map()), (I = new Map()), (m = new Map());
}
function O() {
    if (r === c.default.locale) return !1;
    (r = c.default.locale), N();
}
class R extends (i = l.yh) {
    initialize() {
        this.waitFor(c.default, _.Z), this.syncWith([c.default], O), (r = c.default.locale);
    }
    get(e) {
        return p.get(e);
    }
    getForApplication(e) {
        let t = I.get(e);
        return null == t ? [] : Array.from(t).map((e) => p.get(e));
    }
    isFetching(e) {
        return f.has(e);
    }
    getSKUs() {
        return Object.fromEntries(p);
    }
    getParentSKU(e) {
        let t = E.get(e);
        if (null != t) return this.get(t);
    }
    didFetchingSkuFail(e) {
        return h.has(e);
    }
}
(o = 'SKUStore'),
    (s = 'displayName') in (a = R)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new R(u.Z, {
        STORE_LISTINGS_FETCH_START: function (e) {
            let { skuId: t } = e;
            f.add(t);
        },
        STORE_LISTINGS_FETCH_FAIL: function (e) {
            let { skuId: t } = e;
            f.delete(t), h.add(t);
        },
        STORE_LISTINGS_FETCH_SUCCESS: function (e) {
            let { storeListings: t } = e;
            for (let e of t) g(e);
        },
        STORE_LISTING_FETCH_SUCCESS: function (e) {
            let { storeListing: t } = e;
            g(t);
        },
        GIFT_CODE_RESOLVE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            if (null == t.store_listing) return !1;
            T(t.store_listing.sku);
        },
        SKU_FETCH_START: function (e) {
            let { skuId: t } = e;
            f.add(t);
        },
        SKU_FETCH_SUCCESS: function (e) {
            let { sku: t } = e;
            T(t);
        },
        SKU_FETCH_FAIL: function (e) {
            let { skuId: t } = e;
            f.delete(t), h.add(t);
        },
        SKUS_FETCH_SUCCESS: function (e) {
            let { guildId: t, skus: n } = e;
            for (let e of n) T(e);
            null != t && m.set(t, new Set(n.map((e) => e.id)));
        },
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: A,
        APPLICATION_STORE_CLEAR_DATA: N,
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: A,
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: A
    }));
