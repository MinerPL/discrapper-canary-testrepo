n.d(t, {
    ED: function () {
        return g;
    },
    Ox: function () {
        return S;
    },
    hz: function () {
        return h;
    },
    o5: function () {
        return T;
    },
    pV: function () {
        return A;
    }
}),
    n(47120);
var r = n(470079),
    i = n(512722),
    a = n.n(i),
    s = n(442837),
    o = n(544891),
    l = n(881052),
    u = n(146528),
    c = n(78839),
    d = n(74538),
    _ = n(73346),
    E = n(981631);
async function f(e) {
    let { items: t, paymentSourceId: n, trialId: r, code: i, applyEntitlements: a = !1, currency: s, renewal: c, metadata: _ } = e,
        f = {
            items: (t = (0, d.gB)(t)).map((e) => {
                let { planId: t, ...n } = e;
                return {
                    ...n,
                    plan_id: t
                };
            }),
            payment_source_id: n,
            trial_id: r,
            code: i,
            apply_entitlements: a,
            currency: s,
            renewal: c,
            metadata: _
        };
    try {
        let e = await o.tn.post({
            url: E.ANM.BILLING_SUBSCRIPTIONS_PREVIEW,
            body: f,
            oldFormErrors: !0
        });
        return u.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new l.HF(e);
    }
}
async function h(e) {
    let { subscriptionId: t, items: n, paymentSourceId: r, renewal: i, currency: a, applyEntitlements: s = !1, analyticsLocations: c, analyticsLocation: _, userDiscountOfferId: f } = e;
    null != n && (n = (0, d.gB)(n));
    let h = {
        items:
            null == n
                ? void 0
                : n.map((e) => {
                      let { planId: t, ...n } = e;
                      return {
                          ...n,
                          plan_id: t
                      };
                  }),
        payment_source_id: r,
        renewal: i,
        apply_entitlements: s,
        currency: a,
        user_discount_offer_id: f
    };
    try {
        let e = await o.tn.patch({
            url: E.ANM.BILLING_SUBSCRIPTION_PREVIEW(t),
            query: {
                location: _,
                location_stack: c
            },
            body: h,
            oldFormErrors: !0
        });
        return u.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new l.HF(e);
    }
}
async function p(e) {
    let { paymentSourceId: t, skuId: n, subscriptionPlanId: r, currency: i, loadId: s } = e;
    a()(n, 'SKU ID is missing for one time purchase gift invoice preview');
    try {
        let e = await (0, _.Kb)({
            url: E.ANM.STORE_SKU_PURCHASE(n),
            query: {
                gift: !0,
                payment_source_id: t,
                sku_subscription_plan_id: r,
                currency: i,
                load_id: s
            },
            oldFormErrors: !0
        });
        return u.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new l.HF(e);
    }
}
async function m(e) {
    let { subscriptionId: t, preventFetch: n } = e;
    if (n) return null;
    let r = await o.tn.get({
        url: E.ANM.BILLING_SUBSCRIPTION_INVOICE(t),
        oldFormErrors: !0
    });
    return u.Z.createInvoiceFromServer(r.body);
}
function I(e, t) {
    let { preventFetch: n = !1 } = e,
        [i, a] = (0, r.useState)(null),
        [o, l] = (0, r.useState)(null),
        u = (0, s.e7)([c.ZP], () => c.ZP.getSubscriptions());
    return (
        (0, r.useEffect)(() => {
            let e = !1;
            async function r() {
                try {
                    l(null), a(null);
                    let n = await t();
                    !e && a(n);
                } catch (t) {
                    !e && l(t);
                }
            }
            return (
                !n && r(),
                () => {
                    e = !0;
                }
            );
        }, [n, t, u]),
        [i, o]
    );
}
function T(e) {
    let t = (0, r.useCallback)(() => p(e), [JSON.stringify(e)]);
    return I(e, t);
}
function g(e) {
    if ('subscriptionId' in e && null == e.subscriptionId) {
        let { subscriptionId: t, ...n } = e;
        e = n;
    }
    let t = (0, r.useCallback)(() => ('subscriptionId' in e ? h(e) : 'items' in e ? f(e) : null), [JSON.stringify(e)]);
    return I(e, t);
}
function S(e) {
    let t = (0, r.useCallback)(() => m(e), [JSON.stringify(e)]);
    return I(e, t);
}
function A(e) {
    let t = e.subscriptionPlanPrice;
    return (
        e.discounts.forEach((n) => {
            let r = n.amount / e.quantity;
            t -= r;
        }),
        t
    );
}
