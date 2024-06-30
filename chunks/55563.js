let r;
n(47120);
var i, a, o, s, l = n(442837), u = n(570140), c = n(706454), d = n(659181), _ = n(77498);
let E = new Set(), f = new Set(), h = new Map(), p = new Map(), m = new Map();
function I(e) {
    h.set(e.id, d.Z.createFromServer(e)), E.delete(e.id), f.delete(e.id), !p.has(e.application_id) && p.set(e.application_id, new Set()), p.get(e.application_id).add(e.id);
}
function T(e) {
    I(e);
}
function g(e) {
    I(e.sku), null != e.child_skus && e.child_skus.forEach(e => I(e)), null != e.alternative_skus && e.alternative_skus.forEach(e => I(e));
}
function S(e) {
    let {entitlements: t} = e;
    for (let e of t)
        null != e.sku && I(e.sku);
}
function A() {
    E = new Set(), f = new Set(), h = new Map(), p = new Map(), m = new Map();
}
function N() {
    if (r === c.default.locale)
        return !1;
    r = c.default.locale, A();
}
class v extends (i = l.yh) {
    initialize() {
        this.waitFor(c.default, _.Z), this.syncWith([c.default], N), r = c.default.locale;
    }
    get(e) {
        return h.get(e);
    }
    getForApplication(e) {
        let t = p.get(e);
        return null == t ? [] : Array.from(t).map(e => h.get(e));
    }
    isFetching(e) {
        return E.has(e);
    }
    getSKUs() {
        return Object.fromEntries(h);
    }
    didFetchingSkuFail(e) {
        return f.has(e);
    }
}
s = 'SKUStore', (o = 'displayName') in (a = v) ? Object.defineProperty(a, o, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : a[o] = s, t.Z = new v(u.Z, {
    STORE_LISTINGS_FETCH_SUCCESS: function (e) {
        let {storeListings: t} = e;
        for (let e of t)
            g(e);
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let {storeListing: t} = e;
        g(t);
    },
    GIFT_CODE_RESOLVE_SUCCESS: function (e) {
        let {giftCode: t} = e;
        if (null == t.store_listing)
            return !1;
        I(t.store_listing.sku);
    },
    SKU_FETCH_START: function (e) {
        let {skuId: t} = e;
        E.add(t);
    },
    SKU_FETCH_SUCCESS: function (e) {
        let {sku: t} = e;
        I(t);
    },
    SKU_FETCH_FAIL: function (e) {
        let {skuId: t} = e;
        E.delete(t), f.add(t);
    },
    SKUS_FETCH_SUCCESS: function (e) {
        let {
            guildId: t,
            skus: n
        } = e;
        for (let e of n)
            I(e);
        null != t && m.set(t, new Set(n.map(e => e.id)));
    },
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: S,
    APPLICATION_STORE_CLEAR_DATA: A,
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: S,
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: S
});
