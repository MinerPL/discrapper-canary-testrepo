let r, i;
n(47120);
var a,
    s,
    o,
    l,
    u = n(392711),
    c = n(442837),
    d = n(570140),
    f = n(353926),
    _ = n(109213),
    h = n(706454),
    p = n(884697),
    m = n(215023);
let g = new Map(),
    E = new Map(),
    v = [],
    I = g,
    S = E,
    T = v,
    b = null,
    y = !1,
    A = new Set();
let N = {},
    C = (e, t) => {
        if (0 === e.length) {
            T = v;
            return;
        }
        switch (b) {
            case _.u.POPULAR:
                T = m.HU;
                break;
            case _.u.RECENT:
                T = (0, p.x0)(e, t);
                break;
            case _.u.NONE:
            default:
                T = v;
        }
    },
    R = () => {
        (I = g), (S = E), (T = v), (b = null), (i = void 0), (y = !1), (A = new Set()), (r = void 0), (N = {});
    },
    O = () => {
        if (!f.Z.hasLoadedExperiments) return;
        let { giftRecommendationAlgorithm: e } = _.G.getCurrentConfig({ location: 'CollectiblesCategoryStore handleExperimentChange' }, { autoTrackExposure: !1 });
        e !== b && (i = void 0), (b = e);
    };
class D extends (a = c.ZP.Store) {
    initialize() {
        this.syncWith([h.default], R), this.syncWith([f.Z], O);
    }
    get isFetchingCategories() {
        return y;
    }
    isFetchingProduct(e) {
        return null != e && A.has(e);
    }
    get error() {
        return r;
    }
    get lastSuccessfulFetch() {
        return i;
    }
    get lastFetchOptions() {
        return N;
    }
    get categories() {
        return I;
    }
    get products() {
        return S;
    }
    get recommendedGiftSkuIds() {
        return T;
    }
    getCategory(e) {
        return null != e ? I.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? S.get(e) : void 0;
    }
    getCategoryForProduct(e) {
        let t = this.getProduct(e);
        return this.getCategory(null == t ? void 0 : t.categorySkuId);
    }
}
(l = 'CollectiblesCategoryStore'),
    (o = 'displayName') in (s = D)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.Z = new D(d.Z, {
        COLLECTIBLES_CATEGORIES_FETCH: (e) => {
            (y = !0), (r = void 0), (N = e.options);
        },
        COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: (e) => {
            0 === e.categories.length ? ((I = g), (S = E)) : !(0, u.isEqual)([...I.values()], e.categories) && ((I = new Map(e.categories.map((e) => [e.skuId, e]))), (S = new Map((0, p.Cs)(I).map((e) => [e.skuId, e])))), C(e.categories, S), (i = Date.now()), (y = !1), (r = void 0);
        },
        COLLECTIBLES_CATEGORIES_FETCH_FAILURE: (e) => {
            let { error: t } = e;
            (I = g), (S = E), (T = v), (y = !1), (A = new Set()), (r = t);
        },
        COLLECTIBLES_PRODUCT_FETCH: (e) => {
            let { skuId: t } = e;
            (A = new Set(A)).add(t), (r = void 0);
        },
        COLLECTIBLES_PRODUCT_FETCH_SUCCESS: (e) => {
            let { skuId: t, product: n } = e;
            S.set(t, n), (A = new Set(A)).delete(t), (r = void 0);
        },
        COLLECTIBLES_PRODUCT_FETCH_FAILURE: (e) => {
            let { skuId: t, error: n } = e;
            (A = new Set(A)).delete(t), (r = n);
        },
        LOGOUT: R
    }));
