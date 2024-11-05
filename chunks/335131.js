n.d(t, {
    B1: function () {
        return N;
    },
    DR: function () {
        return E;
    },
    F$: function () {
        return T;
    },
    Gq: function () {
        return O;
    },
    K$: function () {
        return C;
    },
    LE: function () {
        return M;
    },
    R2: function () {
        return R;
    },
    SN: function () {
        return x;
    },
    Zu: function () {
        return L;
    },
    ag: function () {
        return w;
    },
    fK: function () {
        return A;
    },
    gA: function () {
        return D;
    },
    jr: function () {
        return y;
    },
    mK: function () {
        return g;
    },
    oK: function () {
        return v;
    },
    oc: function () {
        return S;
    },
    qg: function () {
        return b;
    },
    x8: function () {
        return P;
    }
}),
    n(411104);
var r = n(561842),
    i = n(664081),
    a = n(544891),
    s = n(570140),
    o = n(37234),
    l = n(881052);
n(777639);
var u = n(703656),
    c = n(959546),
    d = n(1870),
    f = n(549616),
    _ = n(833798),
    h = n(778787),
    p = n(161226),
    m = n(981631);
n(597688), n(574709), n(328347), n(874703);
let g = (e) => {
        let { openInLayer: t = !0, ...n } = e;
        s.Z.dispatch({
            type: 'COLLECTIBLES_SHOP_OPEN',
            ...n
        });
        t ? (0, o.jN)(m.S9g.COLLECTIBLES_SHOP) : (0, u.uL)(m.Z5c.COLLECTIBLES_SHOP);
    },
    E = () => {
        s.Z.dispatch({ type: 'COLLECTIBLES_SHOP_CLOSE' }), (0, o.xf)();
    },
    v = (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_DETAILS_OPEN',
            item: e
        });
    },
    I = (e, t) => !!e == !!t,
    S = (e, t) => I(null == e ? void 0 : e.noCache, null == t ? void 0 : t.noCache) && I(null == e ? void 0 : e.includeUnpublished, null == t ? void 0 : t.includeUnpublished) && I(null == e ? void 0 : e.includeBundles, null == t ? void 0 : t.includeBundles) && (null == e ? void 0 : e.countryCode) === (null == t ? void 0 : t.countryCode) && (null == e ? void 0 : e.paymentGateway) === (null == t ? void 0 : t.paymentGateway),
    T = async (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORIES_FETCH',
            options: null != e ? e : {}
        });
        let t = {};
        null != e && (!0 === e.noCache && (t.no_cache = !0), !0 === e.includeUnpublished && (t.include_unpublished = !0), !0 === e.includeBundles && (t.include_bundles = !0), null != e.countryCode && (t.country_code = e.countryCode), null !== e.paymentGateway && (t.payment_gateway = e.paymentGateway));
        try {
            let e = await a.tn.get({
                url: m.ANM.COLLECTIBLES_CATEGORIES,
                query: t
            });
            s.Z.dispatch({
                type: 'COLLECTIBLES_CATEGORIES_FETCH_SUCCESS',
                categories: e.body.map(f.Z.fromServer)
            });
        } catch (e) {
            throw (
                (s.Z.dispatch({
                    type: 'COLLECTIBLES_CATEGORIES_FETCH_FAILURE',
                    error: new l.Hx(e)
                }),
                new l.Hx(e))
            );
        }
    },
    b = async () => {
        if (!d.Z.isFetching) {
            s.Z.dispatch({ type: 'COLLECTIBLES_PURCHASES_FETCH' });
            try {
                let e = await a.tn.get(m.ANM.COLLECTIBLES_PURCHASES);
                s.Z.dispatch({
                    type: 'COLLECTIBLES_PURCHASES_FETCH_SUCCESS',
                    purchases: e.body.map(p.Z.fromServer)
                });
            } catch (e) {
                throw (
                    (s.Z.dispatch({
                        type: 'COLLECTIBLES_PURCHASES_FETCH_FAILURE',
                        error: new l.Hx(e)
                    }),
                    new l.Hx(e))
                );
            }
        }
    },
    y = async (e, t) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_FETCH',
            skuId: e
        });
        try {
            let n = {};
            (null == t ? void 0 : t.countryCode) !== null && (n.country_code = null == t ? void 0 : t.countryCode), (null == t ? void 0 : t.paymentGateway) !== null && (n.payment_gateway = null == t ? void 0 : t.paymentGateway);
            let r = await a.tn.get({
                url: m.ANM.COLLECTIBLES_PRODUCTS(e),
                query: n
            });
            s.Z.dispatch({
                type: 'COLLECTIBLES_PRODUCT_FETCH_SUCCESS',
                skuId: e,
                product: h.Z.fromServer(r.body)
            });
        } catch (t) {
            throw (
                (s.Z.dispatch({
                    type: 'COLLECTIBLES_PRODUCT_FETCH_FAILURE',
                    skuId: e,
                    error: new l.Hx(t)
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
                url: m.ANM.COLLECTIBLES_CLAIM,
                body: { sku_id: e }
            });
            s.Z.dispatch({
                type: 'COLLECTIBLES_CLAIM_SUCCESS',
                skuId: e,
                purchases: null === (t = n.body) || void 0 === t ? void 0 : t.map(p.Z.fromServer)
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
                    url: m.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENT,
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
    C = (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORY_ITEMS_VIEWED',
            ...e
        });
    },
    R = async (e) => {
        let { release: t = i.P.PROD } = e;
        s.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH' });
        let n = { platform: r.h.DESKTOP };
        t !== i.P.PROD && (n.release = t);
        try {
            let e = await a.tn.get({
                url: m.ANM.COLLECTIBLES_MARKETING,
                query: n
            });
            s.Z.dispatch({
                type: 'COLLECTIBLES_MARKETING_FETCH_SUCCESS',
                marketings: _.s.fromServer(e.body)
            });
        } catch (e) {
            throw (s.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH_FAILURE' }), new l.Hx(e));
        }
    },
    O = async (e) => {
        s.Z.dispatch({
            type: 'CONSUMABLES_PRICE_FETCH_STARTED',
            skuId: e
        });
        try {
            let t = await a.tn.get({ url: m.ANM.CONSUMABLE_FETCH_PRICE(e) });
            if (null == t.body.price)
                throw (
                    (s.Z.dispatch({
                        type: 'CONSUMABLES_PRICE_FETCH_FAILED',
                        skuId: e
                    }),
                    Error('price not found'))
                );
            let n = t.body.price;
            return (
                s.Z.dispatch({
                    type: 'CONSUMABLES_PRICE_FETCH_SUCCEEDED',
                    skuId: e,
                    price: n
                }),
                {
                    amount: n.amount,
                    currency: n.currency,
                    exponent: n.currency_exponent
                }
            );
        } catch (t) {
            throw (
                (s.Z.dispatch({
                    type: 'CONSUMABLES_PRICE_FETCH_FAILED',
                    skuId: e
                }),
                new l.Hx(t))
            );
        }
    },
    D = async (e) => {
        s.Z.dispatch({
            type: 'CONSUMABLES_ENTITLEMENT_FETCH_STARTED',
            skuId: e
        });
        try {
            let t = await a.tn.get({ url: m.ANM.FETCH_HD_STREAMING_ENTITLEMENT }),
                n = null != t.body.entitlement ? c.Z.createFromServer(t.body.entitlement) : null;
            return (
                s.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED',
                    skuId: e,
                    entitlement: n
                }),
                t.body.entitlement
            );
        } catch (t) {
            throw (
                (s.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_FAILED',
                    skuId: e
                }),
                new l.Hx(t))
            );
        }
    },
    L = async (e) => {
        await a.tn.post({
            url: m.ANM.CONSUME_HD_STREAMING_POTION,
            body: { channel_id: e }
        });
    },
    x = (e) => {
        s.Z.dispatch({
            type: 'CONSUMABLES_CLEAR_ERROR',
            skuId: e
        });
    },
    w = () => {
        s.Z.dispatch({ type: 'PLAYED_HD_STREAMING_POTION_ANIMATION' });
    },
    M = () => {
        s.Z.dispatch({ type: 'RESET_PLAYED_HD_STREAMING_POTION_ANIMATION' });
    },
    P = (e) => {
        s.Z.dispatch({
            type: 'SET_PREVIOUS_GO_LIVE_SETTINGS',
            previousGoLiveSettings: e
        });
    };
