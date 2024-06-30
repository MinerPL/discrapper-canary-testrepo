n.d(t, {
    $N: function () {
        return C;
    },
    ZZ: function () {
        return P;
    },
    jU: function () {
        return d;
    },
    pB: function () {
        return U;
    },
    uE: function () {
        return R;
    },
    x2: function () {
        return N;
    },
    xA: function () {
        return f;
    }
}), n(411104);
var r = n(544891), i = n(570140), u = n(881052), l = n(128069), o = n(34756), E = n(115130), a = n(55563), _ = n(695103), S = n(122289), s = n(823379), A = n(936101), c = n(73346), T = n(355467), I = n(981631);
async function d(e) {
    if (null == a.Z.get(e)) {
        i.Z.dispatch({
            type: 'SKU_FETCH_START',
            skuId: e
        });
        try {
            let t = await (0, c.Kb)(I.ANM.STORE_SKU(e));
            i.Z.dispatch({
                type: 'SKU_FETCH_SUCCESS',
                sku: t.body
            });
        } catch (t) {
            throw i.Z.dispatch({
                type: 'SKU_FETCH_FAIL',
                skuId: e
            }), new o.Z('Failed to fetch SKU '.concat(e));
        }
    }
}
async function C(e, t) {
    if (null == a.Z.get(t)) {
        i.Z.dispatch({
            type: 'SKU_FETCH_START',
            skuId: t
        });
        try {
            let n = _.Z.inTestModeForApplication(e) || E.Z.inDevModeForApplication(e), r = await (0, c.Kb)(n ? I.ANM.STORE_SKU(t) : I.ANM.STORE_PUBLISHED_LISTINGS_SKU(t));
            i.Z.dispatch({
                type: 'SKU_FETCH_SUCCESS',
                sku: n ? r.body : r.body.sku
            }), !n && i.Z.dispatch({
                type: 'STORE_LISTING_FETCH_SUCCESS',
                storeListing: r.body
            });
        } catch (e) {
            throw i.Z.dispatch({
                type: 'SKU_FETCH_FAIL',
                skuId: t
            }), new o.Z('Failed to fetch SKU '.concat(t));
        }
    }
}
async function R(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (!(_.Z.inTestModeForApplication(e) || E.Z.inDevModeForApplication(e)) && t)
        throw Error('this should only be used in test mode');
    let n = (await (0, c.Kb)(I.ANM.APPLICATION_SKUS(e))).body;
    return i.Z.dispatch({
        type: 'SKUS_FETCH_SUCCESS',
        skus: n
    }), n;
}
async function N(e, t, n, r) {
    let o;
    let a = {
        payment_source_id: n,
        gift: null == r ? void 0 : r.isGift
    };
    (_.Z.inTestModeForApplication(e) || E.Z.inDevModeForApplication(e)) && (a.test_mode = !0), i.Z.dispatch({
        type: 'SKU_PURCHASE_PREVIEW_FETCH',
        skuId: t
    });
    try {
        o = await (0, c.Kb)({
            url: I.ANM.STORE_SKU_PURCHASE(t),
            query: a,
            oldFormErrors: !0
        }), i.Z.dispatch({
            type: 'SKU_PURCHASE_PREVIEW_FETCH_SUCCESS',
            skuId: t,
            paymentSourceId: n,
            price: o.body
        });
    } catch (n) {
        i.Z.dispatch({
            type: 'SKU_PURCHASE_PREVIEW_FETCH_FAILURE',
            skuId: t
        });
        let e = n instanceof u.HF ? n : new u.HF(n);
        if (e.code === l.SM.BILLING_BUNDLE_ALREADY_PURCHASED || e.code === l.SM.BILLING_BUNDLE_PARTIALLY_OWNED)
            throw e;
    }
    return o;
}
let M = { isGift: !1 };
async function P(e, t, n) {
    let {
        paymentSource: o,
        expectedAmount: a,
        expectedCurrency: c,
        analyticsLoadId: d,
        isGift: C,
        giftInfoOptions: R,
        subscriptionPlanId: N,
        loadId: P,
        countryCode: f
    } = {
        ...M,
        ...n
    };
    i.Z.wait(() => {
        i.Z.dispatch({
            type: 'SKU_PURCHASE_START',
            applicationId: e,
            skuId: t
        });
    });
    let U = _.Z.inTestModeForApplication(e) || E.Z.inDevModeForApplication(e);
    try {
        let e = {
            gift: C,
            sku_subscription_plan_id: N,
            gateway_checkout_context: await (0, S.cn)(o),
            load_id: P
        };
        if (U)
            e.test_mode = !0;
        else {
            if (null != o && (e.payment_source_id = o.id, e.payment_source_token = await (0, T.Zv)(o), I.QL.has(o.type))) {
                let t = await (0, T.EH)(o.type);
                e.return_url = (0, r.K0)() + I.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(o.type, null != t ? t : '', 'success');
            }
            null != a && (e.expected_amount = a), null != c && (e.expected_currency = c), e.gift_info_options = R, null != f && (e.country_code = f), e.purchase_token = (0, A.d)();
        }
        let n = await r.tn.post({
            url: I.ANM.STORE_SKU_PURCHASE(t),
            body: e,
            context: { load_id: d },
            oldFormErrors: !0
        });
        return i.Z.dispatch({
            type: 'SKU_PURCHASE_SUCCESS',
            skuId: t,
            libraryApplications: null != n.body.library_applications ? n.body.library_applications.filter(s.lm) : [],
            entitlements: n.body.entitlements,
            giftCode: n.body.gift_code
        }), {
            ...n.body,
            redirectConfirmation: !1
        };
    } catch (r) {
        let n = r instanceof u.HF ? r : new u.HF(r);
        if ((n.code === l.SM.CONFIRMATION_REQUIRED || n.code === l.SM.AUTHENTICATION_REQUIRED) && i.Z.dispatch({
                type: 'SKU_PURCHASE_AWAIT_CONFIRMATION',
                skuId: t,
                isGift: C
            }), n.code !== l.SM.CONFIRMATION_REQUIRED)
            throw i.Z.dispatch({
                type: 'SKU_PURCHASE_FAIL',
                applicationId: e,
                skuId: t,
                error: n
            }), n;
        if (!r.body.payment_id)
            throw (0, T.SQ)('payment id cannot be null on redirected confirmations.');
        return (0, T.sk)(r.body, o);
    }
}
async function f() {
    try {
        let e = { purchase_token: (0, A.d)() };
        return {
            ...(await r.tn.post({
                url: I.ANM.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                body: e,
                oldFormErrors: !0
            })).body
        };
    } catch (e) {
        throw e instanceof u.HF ? e : new u.HF(e);
    }
}
function U() {
    i.Z.dispatch({ type: 'SKU_PURCHASE_CLEAR_ERROR' });
}
