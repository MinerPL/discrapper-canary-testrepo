let r, i;
n(47120);
var a, o, s, l, u = n(392711), c = n(442837), d = n(570140), _ = n(706454), E = n(884697);
let f = new Map(), h = new Map(), p = f, m = h, I = !1, T = new Set();
let g = {}, S = () => {
        p = f, m = h, i = void 0, I = !1, T = new Set(), r = void 0, g = {};
    };
class A extends (a = c.ZP.Store) {
    initialize() {
        this.syncWith([_.default], S);
    }
    get isFetchingCategories() {
        return I;
    }
    isFetchingProduct(e) {
        return null != e && T.has(e);
    }
    get error() {
        return r;
    }
    get lastSuccessfulFetch() {
        return i;
    }
    get lastFetchOptions() {
        return g;
    }
    get categories() {
        return p;
    }
    get products() {
        return m;
    }
    getCategory(e) {
        return null != e ? p.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? m.get(e) : void 0;
    }
    getCategoryForProduct(e) {
        let t = this.getProduct(e);
        return this.getCategory(null == t ? void 0 : t.categorySkuId);
    }
}
l = 'CollectiblesCategoryStore', (s = 'displayName') in (o = A) ? Object.defineProperty(o, s, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : o[s] = l, t.Z = new A(d.Z, {
    COLLECTIBLES_CATEGORIES_FETCH: e => {
        I = !0, r = void 0, g = e.options;
    },
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: e => {
        0 === e.categories.length ? (p = f, m = h) : !(0, u.isEqual)([...p.values()], e.categories) && (p = new Map(e.categories.map(e => [
            e.skuId,
            e
        ])), m = new Map((0, E.Cs)(p).map(e => [
            e.skuId,
            e
        ]))), i = Date.now(), I = !1, r = void 0;
    },
    COLLECTIBLES_CATEGORIES_FETCH_FAILURE: e => {
        let {error: t} = e;
        p = f, m = h, I = !1, T = new Set(), r = t;
    },
    COLLECTIBLES_PRODUCT_FETCH: e => {
        let {skuId: t} = e;
        (T = new Set(T)).add(t), r = void 0;
    },
    COLLECTIBLES_PRODUCT_FETCH_SUCCESS: e => {
        let {
            skuId: t,
            product: n
        } = e;
        m.set(t, n), (T = new Set(T)).delete(t), r = void 0;
    },
    COLLECTIBLES_PRODUCT_FETCH_FAILURE: e => {
        let {
            skuId: t,
            error: n
        } = e;
        (T = new Set(T)).delete(t), r = n;
    },
    LOGOUT: S
});
