n.d(t, {
    B1: function () {
        return O;
    },
    DR: function () {
        return p;
    },
    F$: function () {
        return S;
    },
    K$: function () {
        return R;
    },
    R2: function () {
        return v;
    },
    fK: function () {
        return N;
    },
    jr: function () {
        return A;
    },
    mK: function () {
        return h;
    },
    oK: function () {
        return I;
    },
    oc: function () {
        return T;
    },
    qg: function () {
        return g;
    }
});
var r = n(561842),
    i = n(664081),
    a = n(544891),
    s = n(570140),
    o = n(37234),
    l = n(881052);
n(777639);
var u = n(703656),
    c = n(549616),
    d = n(833798),
    _ = n(778787),
    E = n(161226),
    f = n(981631);
n(597688), n(574709), n(1870), n(328347), n(874703);
let h = (e) => {
        let { openInLayer: t = !0, ...n } = e;
        s.Z.dispatch({
            type: 'COLLECTIBLES_SHOP_OPEN',
            ...n
        });
        t ? (0, o.jN)(f.S9g.COLLECTIBLES_SHOP) : (0, u.uL)(f.Z5c.COLLECTIBLES_SHOP);
    },
    p = () => {
        s.Z.dispatch({ type: 'COLLECTIBLES_SHOP_CLOSE' }), (0, o.xf)();
    },
    I = (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_DETAILS_OPEN',
            item: e
        });
    },
    m = (e, t) => !!e == !!t,
    T = (e, t) => m(null == e ? void 0 : e.noCache, null == t ? void 0 : t.noCache) && m(null == e ? void 0 : e.includeUnpublished, null == t ? void 0 : t.includeUnpublished) && m(null == e ? void 0 : e.includeBundles, null == t ? void 0 : t.includeBundles) && (null == e ? void 0 : e.countryCode) === (null == t ? void 0 : t.countryCode) && (null == e ? void 0 : e.paymentGateway) === (null == t ? void 0 : t.paymentGateway),
    S = async (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORIES_FETCH',
            options: null != e ? e : {}
        });
        let t = {};
        null != e && (!0 === e.noCache && (t.no_cache = !0), !0 === e.includeUnpublished && (t.include_unpublished = !0), !0 === e.includeBundles && (t.include_bundles = !0), null != e.countryCode && (t.country_code = e.countryCode), null !== e.paymentGateway && (t.payment_gateway = e.paymentGateway));
        try {
            let e = await a.tn.get({
                url: f.ANM.COLLECTIBLES_CATEGORIES,
                query: t
            });
            s.Z.dispatch({
                type: 'COLLECTIBLES_CATEGORIES_FETCH_SUCCESS',
                categories: e.body.map(c.Z.fromServer)
            });
        } catch (e) {
            throw (
                (s.Z.dispatch({
                    type: 'COLLECTIBLES_CATEGORIES_FETCH_FAILURE',
                    error: e
                }),
                new l.Hx(e))
            );
        }
    },
    g = async () => {
        s.Z.dispatch({ type: 'COLLECTIBLES_PURCHASES_FETCH' });
        try {
            let e = await a.tn.get(f.ANM.COLLECTIBLES_PURCHASES);
            s.Z.dispatch({
                type: 'COLLECTIBLES_PURCHASES_FETCH_SUCCESS',
                purchases: e.body.map(E.Z.fromServer)
            });
        } catch (e) {
            throw (
                (s.Z.dispatch({
                    type: 'COLLECTIBLES_PURCHASES_FETCH_FAILURE',
                    error: e
                }),
                new l.Hx(e))
            );
        }
    },
    A = async (e, t) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_FETCH',
            skuId: e
        });
        try {
            let n = {};
            (null == t ? void 0 : t.countryCode) !== null && (n.country_code = null == t ? void 0 : t.countryCode), (null == t ? void 0 : t.paymentGateway) !== null && (n.payment_gateway = null == t ? void 0 : t.paymentGateway);
            let r = await a.tn.get({
                url: f.ANM.COLLECTIBLES_PRODUCTS(e),
                query: n
            });
            s.Z.dispatch({
                type: 'COLLECTIBLES_PRODUCT_FETCH_SUCCESS',
                skuId: e,
                product: _.Z.fromServer(r.body)
            });
        } catch (t) {
            throw (
                (s.Z.dispatch({
                    type: 'COLLECTIBLES_PRODUCT_FETCH_FAILURE',
                    skuId: e,
                    error: t
                }),
                new l.Hx(t))
            );
        }
    },
    N = async (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_CLAIM',
            skuId: e
        });
        try {
            var t;
            let n = await a.tn.put({
                url: f.ANM.COLLECTIBLES_CLAIM,
                body: { sku_id: e }
            });
            s.Z.dispatch({
                type: 'COLLECTIBLES_CLAIM_SUCCESS',
                skuId: e,
                purchases: null === (t = n.body) || void 0 === t ? void 0 : t.map(E.Z.fromServer)
            });
        } catch (t) {
            throw (
                (s.Z.dispatch({
                    type: 'COLLECTIBLES_CLAIM_FAILURE',
                    skuId: e,
                    error: t
                }),
                new l.Hx(t))
            );
        }
    },
    O = async (e, t) => {
        try {
            return (
                await a.tn.get({
                    url: f.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: {
                        sku_id: t,
                        recipient_id: e
                    }
                })
            ).body.valid;
        } catch (e) {
            throw new l.Hx(e);
        }
    },
    R = (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORY_ITEMS_VIEWED',
            ...e
        });
    },
    v = async (e) => {
        let { release: t = i.P.PROD } = e;
        s.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH' });
        let n = { platform: r.h.DESKTOP };
        t !== i.P.PROD && (n.release = t);
        try {
            let e = await a.tn.get({
                url: f.ANM.COLLECTIBLES_MARKETING,
                query: n
            });
            s.Z.dispatch({
                type: 'COLLECTIBLES_MARKETING_FETCH_SUCCESS',
                marketings: d.s.fromServer(e.body)
            });
        } catch (e) {
            throw (s.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH_FAILURE' }), new l.Hx(e));
        }
    };
