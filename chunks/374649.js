n.d(t, {
    ED: function () {
        return m;
    },
    Ox: function () {
        return T;
    },
    hz: function () {
        return E;
    },
    o5: function () {
        return I;
    },
    pV: function () {
        return S;
    }
}),
    n(47120);
var r = n(470079),
    i = n(512722),
    a = n.n(i),
    s = n(544891),
    o = n(881052),
    l = n(146528),
    u = n(74538),
    c = n(73346),
    d = n(981631);
async function _(e) {
    let { items: t, paymentSourceId: n, trialId: r, code: i, applyEntitlements: a = !1, currency: c, renewal: _, metadata: E } = e,
        f = {
            items: (t = (0, u.gB)(t)).map((e) => {
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
            currency: c,
            renewal: _,
            metadata: E
        };
    try {
        let e = await s.tn.post({
            url: d.ANM.BILLING_SUBSCRIPTIONS_PREVIEW,
            body: f,
            oldFormErrors: !0
        });
        return l.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new o.HF(e);
    }
}
async function E(e) {
    let { subscriptionId: t, items: n, paymentSourceId: r, renewal: i, currency: a, applyEntitlements: c = !1, analyticsLocations: _, analyticsLocation: E, userDiscountOfferId: f } = e;
    null != n && (n = (0, u.gB)(n));
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
        apply_entitlements: c,
        currency: a,
        user_discount_offer_id: f
    };
    try {
        let e = await s.tn.patch({
            url: d.ANM.BILLING_SUBSCRIPTION_PREVIEW(t),
            query: {
                location: E,
                location_stack: _
            },
            body: h,
            oldFormErrors: !0
        });
        return l.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new o.HF(e);
    }
}
async function f(e) {
    let { paymentSourceId: t, skuId: n, subscriptionPlanId: r, currency: i, loadId: s } = e;
    a()(n, 'SKU ID is missing for one time purchase gift invoice preview');
    try {
        let e = await (0, c.Kb)({
            url: d.ANM.STORE_SKU_PURCHASE(n),
            query: {
                gift: !0,
                payment_source_id: t,
                sku_subscription_plan_id: r,
                currency: i,
                load_id: s
            },
            oldFormErrors: !0
        });
        return l.Z.createInvoiceFromServer(e.body);
    } catch (e) {
        throw new o.HF(e);
    }
}
async function h(e) {
    let { subscriptionId: t, preventFetch: n } = e;
    if (n) return null;
    let r = await s.tn.get({
        url: d.ANM.BILLING_SUBSCRIPTION_INVOICE(t),
        oldFormErrors: !0
    });
    return l.Z.createInvoiceFromServer(r.body);
}
function p(e, t) {
    let { preventFetch: n = !1 } = e,
        [i, a] = (0, r.useState)(null),
        [s, o] = (0, r.useState)(null);
    return (
        (0, r.useEffect)(() => {
            let e = !1;
            async function r() {
                try {
                    o(null), a(null);
                    let n = await t();
                    !e && a(n);
                } catch (t) {
                    !e && o(t);
                }
            }
            return (
                !n && r(),
                () => {
                    e = !0;
                }
            );
        }, [n, t]),
        [i, s]
    );
}
function I(e) {
    let t = (0, r.useCallback)(() => f(e), [JSON.stringify(e)]);
    return p(e, t);
}
function m(e) {
    if ('subscriptionId' in e && null == e.subscriptionId) {
        let { subscriptionId: t, ...n } = e;
        e = n;
    }
    let t = (0, r.useCallback)(() => ('subscriptionId' in e ? E(e) : 'items' in e ? _(e) : null), [JSON.stringify(e)]);
    return p(e, t);
}
function T(e) {
    let t = (0, r.useCallback)(() => h(e), [JSON.stringify(e)]);
    return p(e, t);
}
function S(e) {
    let t = e.subscriptionPlanPrice;
    return (
        e.discounts.forEach((n) => {
            let r = n.amount / e.quantity;
            t -= r;
        }),
        t
    );
}
