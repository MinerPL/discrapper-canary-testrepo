n(47120);
var i,
    l,
    a,
    r,
    s = n(442837),
    o = n(570140),
    c = n(959546),
    u = n(215023);
let d = new Map(),
    m = new Set(),
    f = new Set(),
    p = new Set(),
    h = new Map(),
    g = !1,
    v = null;
class S extends (i = s.ZP.Store) {
    getPrice(e) {
        return d.get(e);
    }
    isFetchingPrice(e) {
        return m.has(e);
    }
    getErrored(e) {
        return p.has(e);
    }
    getEntitlement(e) {
        return h.get(e);
    }
    isEntitlementFetched(e) {
        return h.has(e);
    }
    isEntitlementFetching(e) {
        return f.has(e);
    }
    getPlayedAnimation() {
        return g;
    }
    getPreviousGoLiveSettings() {
        return v;
    }
}
(r = 'ConsumablesStore'),
    (a = 'displayName') in (l = S)
        ? Object.defineProperty(l, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[a] = r),
    (t.Z = new S(o.Z, {
        CONSUMABLES_PRICE_FETCH_STARTED: (e) => {
            m.add(e.skuId);
        },
        CONSUMABLES_PRICE_FETCH_SUCCEEDED: (e) => {
            d.set(e.skuId, e.price), m.delete(e.skuId);
        },
        CONSUMABLES_PRICE_FETCH_FAILED: (e) => {
            m.delete(e.skuId), p.add(e.skuId);
        },
        CONSUMABLES_CLEAR_ERROR: (e) => {
            p.delete(e.skuId);
        },
        CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: (e) => {
            f.delete(e.skuId), h.set(e.skuId, e.entitlement);
        },
        SKU_PURCHASE_SUCCESS: (e) => {
            if (1 !== e.entitlements.length) return;
            let t = e.entitlements[0];
            if (t.sku_id === u.FX) h.set(e.skuId, c.Z.createFromServer(t));
        },
        PLAYED_HD_STREAMING_POTION_ANIMATION: (e) => {
            g = !0;
        },
        RESET_PLAYED_HD_STREAMING_POTION_ANIMATION: (e) => {
            g = !1;
        },
        CONSUMABLES_ENTITLEMENT_FETCH_FAILED: (e) => {
            p.add(e.skuId), f.delete(e.skuId);
        },
        CONSUMABLES_ENTITLEMENT_FETCH_STARTED: (e) => {
            f.add(e.skuId);
        },
        SET_PREVIOUS_GO_LIVE_SETTINGS: (e) => {
            v = e.previousGoLiveSettings;
        }
    }));
