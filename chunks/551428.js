let r;
n(47120), n(411104);
var i,
    a,
    s,
    o,
    l = n(442837),
    u = n(570140),
    c = n(706454),
    d = n(156570),
    _ = n(823379);
let E = {},
    f = {},
    h = {},
    p = {},
    I = new Set();
function m(e) {
    let t = e.id,
        n = e.sku.id,
        r = E[t],
        i = d.Z.createFromServer(e);
    if (!(null != r && !r.isSlimDirectoryVersion() && i.isSlimDirectoryVersion())) !1 === e.published ? (null == h[n] && (h[n] = new Set()), h[n].add(t)) : (p[n] = t), (E[t] = i), I.delete(e.sku.id);
}
function T(e, t) {
    return ''.concat(e, ':').concat(t);
}
function S() {
    (E = {}), (p = {}), (h = {}), (f = {}), (I = new Set());
}
function g() {
    if (r === c.default.locale) return !1;
    S(), (r = c.default.locale);
}
class A extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(c.default), this.syncWith([c.default], g), (r = c.default.locale);
    }
    get(e) {
        return E[e];
    }
    getForSKU(e, t) {
        let n = p[e];
        return null != t ? f[T(t, e)] : null != n ? E[n] : null;
    }
    getUnpublishedForSKU(e) {
        let t = h[e];
        return null == t
            ? []
            : Array.from(t)
                  .map((e) => E[e])
                  .filter(_.lm);
    }
    getForChannel(e, t) {
        return f[T(e, t)];
    }
    isFetchingForSKU(e) {
        return I.has(e);
    }
    getStoreListing(e) {
        let { storeListingId: t, skuId: n, channelId: r, isTestMode: i } = e;
        if (i && null != n) {
            let e = this.getUnpublishedForSKU(n);
            if (null != e && e.length > 0) return e[0];
        }
        if (null != t) return this.get(t);
        if (null != r) {
            if (null == n) throw Error('getStoreListing with channel expects a skuId');
            return this.getForChannel(r, n);
        }
        if (null != n) return this.getForSKU(n);
        return null;
    }
}
(o = 'StoreListingStore'),
    (s = 'displayName') in (a = A)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new A(u.Z, {
        STORE_LISTINGS_FETCH_START: function (e) {
            let { skuId: t } = e;
            I.add(t);
        },
        STORE_LISTINGS_FETCH_FAIL: function (e) {
            let { skuId: t } = e;
            I.delete(t);
        },
        STORE_LISTINGS_FETCH_SUCCESS: function (e) {
            let { storeListings: t } = e;
            for (let e of t) m(e);
        },
        STORE_LISTING_FETCH_SUCCESS: function (e) {
            let { storeListing: t, channelId: n } = e;
            if (null != n) {
                let e = d.Z.createFromServer(t);
                (f[T(n, e.skuId)] = e), (p[e.skuId] = e.id);
            } else m(t);
        },
        USER_SETTINGS_PROTO_UPDATE: g,
        APPLICATION_STORE_CLEAR_DATA: S,
        GIFT_CODE_RESOLVE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            if (null == t.store_listing) return !1;
            m(t.store_listing);
        }
    }));
