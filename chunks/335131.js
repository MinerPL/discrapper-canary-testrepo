n.d(t, {
    B1: function () {
        return N;
    },
    DR: function () {
        return h;
    },
    F$: function () {
        return T;
    },
    K$: function () {
        return v;
    },
    R2: function () {
        return O;
    },
    fK: function () {
        return A;
    },
    jr: function () {
        return S;
    },
    mK: function () {
        return f;
    },
    oK: function () {
        return p;
    },
    oc: function () {
        return I;
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
var u = n(549616),
    c = n(833798),
    d = n(778787),
    _ = n(161226),
    E = n(981631);
n(597688), n(574709), n(1870), n(328347), n(874703);
let f = (e) => {
        let { openInLayer: t = !0, ...n } = e;
        s.Z.dispatch({
            type: 'COLLECTIBLES_SHOP_OPEN',
            ...n
        });
        t && (0, o.jN)(E.S9g.COLLECTIBLES_SHOP);
    },
    h = () => {
        s.Z.dispatch({ type: 'COLLECTIBLES_SHOP_CLOSE' }), (0, o.xf)();
    },
    p = (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_DETAILS_OPEN',
            item: e
        });
    },
    m = (e, t) => !!e == !!t,
    I = (e, t) => m(null == e ? void 0 : e.noCache, null == t ? void 0 : t.noCache) && m(null == e ? void 0 : e.includeUnpublished, null == t ? void 0 : t.includeUnpublished) && m(null == e ? void 0 : e.includeBundles, null == t ? void 0 : t.includeBundles) && (null == e ? void 0 : e.countryCode) === (null == t ? void 0 : t.countryCode) && (null == e ? void 0 : e.paymentGateway) === (null == t ? void 0 : t.paymentGateway),
    T = async (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORIES_FETCH',
            options: null != e ? e : {}
        });
        let t = {};
        null != e && (!0 === e.noCache && (t.no_cache = !0), !0 === e.includeUnpublished && (t.include_unpublished = !0), !0 === e.includeBundles && (t.include_bundles = !0), null != e.countryCode && (t.country_code = e.countryCode), null !== e.paymentGateway && (t.payment_gateway = e.paymentGateway));
        try {
            let e = await a.tn.get({
                url: E.ANM.COLLECTIBLES_CATEGORIES,
                query: t
            });
            s.Z.dispatch({
                type: 'COLLECTIBLES_CATEGORIES_FETCH_SUCCESS',
                categories: e.body.map(u.Z.fromServer)
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
            let e = await a.tn.get(E.ANM.COLLECTIBLES_PURCHASES);
            s.Z.dispatch({
                type: 'COLLECTIBLES_PURCHASES_FETCH_SUCCESS',
                purchases: e.body.map(_.Z.fromServer)
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
    S = async (e, t) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_FETCH',
            skuId: e
        });
        try {
            let n = {};
            (null == t ? void 0 : t.countryCode) !== null && (n.country_code = null == t ? void 0 : t.countryCode), (null == t ? void 0 : t.paymentGateway) !== null && (n.payment_gateway = null == t ? void 0 : t.paymentGateway);
            let r = await a.tn.get({
                url: E.ANM.COLLECTIBLES_PRODUCTS(e),
                query: n
            });
            s.Z.dispatch({
                type: 'COLLECTIBLES_PRODUCT_FETCH_SUCCESS',
                skuId: e,
                product: d.Z.fromServer(r.body)
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
    A = async (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_CLAIM',
            skuId: e
        });
        try {
            var t;
            let n = await a.tn.put({
                url: E.ANM.COLLECTIBLES_CLAIM,
                body: { sku_id: e }
            });
            s.Z.dispatch({
                type: 'COLLECTIBLES_CLAIM_SUCCESS',
                skuId: e,
                purchases: null === (t = n.body) || void 0 === t ? void 0 : t.map(_.Z.fromServer)
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
    N = async (e, t) => {
        try {
            return (
                await a.tn.get({
                    url: E.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENT,
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
    v = (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORY_ITEMS_VIEWED',
            ...e
        });
    },
    O = async (e) => {
        let { release: t = i.P.PROD } = e;
        s.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH' });
        let n = { platform: r.h.DESKTOP };
        t !== i.P.PROD && (n.release = t);
        try {
            let e = await a.tn.get({
                url: E.ANM.COLLECTIBLES_MARKETING,
                query: n
            });
            s.Z.dispatch({
                type: 'COLLECTIBLES_MARKETING_FETCH_SUCCESS',
                marketings: c.s.fromServer(e.body)
            });
        } catch (e) {
            throw (s.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH_FAILURE' }), new l.Hx(e));
        }
    };
