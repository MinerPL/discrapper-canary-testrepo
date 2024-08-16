let r, i, a;
n(47120);
var s,
    o,
    l,
    u,
    c = n(392711),
    d = n(442837),
    _ = n(570140);
let E = new Map(),
    f = E,
    h = !1;
class p extends (s = d.ZP.Store) {
    get isFetching() {
        return h;
    }
    get isClaiming() {
        return r;
    }
    get purchases() {
        return f;
    }
    get fetchError() {
        return i;
    }
    get claimError() {
        return a;
    }
    getPurchase(e) {
        return null != e ? f.get(e) : void 0;
    }
}
(u = 'CollectiblesPurchaseStore'),
    (l = 'displayName') in (o = p)
        ? Object.defineProperty(o, l, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[l] = u),
    (t.Z = new p(_.Z, {
        COLLECTIBLES_PURCHASES_FETCH: (e) => {
            (h = !0), (i = void 0);
        },
        COLLECTIBLES_PURCHASES_FETCH_SUCCESS: (e) => {
            0 === e.purchases.length ? (f = E) : !(0, c.isEqual)([...f.values()], e.purchases) && (f = new Map(e.purchases.map((e) => [e.skuId, e]))), (h = !1), (i = void 0);
        },
        COLLECTIBLES_PURCHASES_FETCH_FAILURE: (e) => {
            let { error: t } = e;
            (f = E), (h = !1), (i = t);
        },
        COLLECTIBLES_CLAIM: (e) => {
            (r = e.skuId), (a = void 0);
        },
        COLLECTIBLES_CLAIM_SUCCESS: (e) => {
            null == e.purchases || 0 === e.purchases.length ? (f = E) : !(0, c.isEqual)([...f.values()], e.purchases) && (f = new Map(e.purchases.map((e) => [e.skuId, e]))), (r = void 0), (a = void 0);
        },
        COLLECTIBLES_CLAIM_FAILURE: (e) => {
            let { error: t, skuId: n } = e;
            (r = n), (a = t);
        },
        LOGOUT: (e) => {
            (f = E), (h = !1), (r = void 0), (i = void 0), (a = void 0);
        }
    }));
