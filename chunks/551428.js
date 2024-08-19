let r;
n(47120), n(411104);
var i,
    u,
    l,
    o,
    E = n(442837),
    a = n(570140),
    _ = n(706454),
    S = n(156570),
    s = n(823379);
let A = {},
    c = {},
    I = {},
    T = {};
function d(e) {
    let t = e.id,
        n = e.sku.id,
        r = A[t],
        i = S.Z.createFromServer(e);
    if (!(null != r && !r.isSlimDirectoryVersion() && i.isSlimDirectoryVersion())) !1 === e.published ? (null == I[n] && (I[n] = new Set()), I[n].add(t)) : (T[n] = t), (A[t] = i);
}
function R(e, t) {
    return ''.concat(e, ':').concat(t);
}
function C() {
    (A = {}), (T = {}), (I = {}), (c = {});
}
function N() {
    if (r === _.default.locale) return !1;
    C(), (r = _.default.locale);
}
class M extends (i = E.ZP.Store) {
    initialize() {
        this.waitFor(_.default), this.syncWith([_.default], N), (r = _.default.locale);
    }
    get(e) {
        return A[e];
    }
    getForSKU(e, t) {
        let n = T[e];
        return null != t ? c[R(t, e)] : null != n ? A[n] : null;
    }
    getUnpublishedForSKU(e) {
        let t = I[e];
        return null == t
            ? []
            : Array.from(t)
                  .map((e) => A[e])
                  .filter(s.lm);
    }
    getForChannel(e, t) {
        return c[R(e, t)];
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
    (l = 'displayName') in (u = M)
        ? Object.defineProperty(u, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[l] = o),
    (t.Z = new M(a.Z, {
        STORE_LISTINGS_FETCH_SUCCESS: function (e) {
            let { storeListings: t } = e;
            for (let e of t) d(e);
        },
        STORE_LISTING_FETCH_SUCCESS: function (e) {
            let { storeListing: t, channelId: n } = e;
            if (null != n) {
                let e = S.Z.createFromServer(t);
                (c[R(n, e.skuId)] = e), (T[e.skuId] = e.id);
            } else d(t);
        },
        USER_SETTINGS_PROTO_UPDATE: N,
        APPLICATION_STORE_CLEAR_DATA: C,
        GIFT_CODE_RESOLVE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            if (null == t.store_listing) return !1;
            d(t.store_listing);
        }
    }));
