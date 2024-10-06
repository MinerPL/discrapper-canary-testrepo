t.d(n, {
    s: function () {
        return x;
    }
}),
    t(789020);
var l = t(735250),
    i = t(470079),
    a = t(442837),
    r = t(544891),
    o = t(481060),
    s = t(570140),
    c = t(171246),
    u = t(509545),
    d = t(55563),
    m = t(551428),
    _ = t(74538),
    f = t(937615),
    p = t(147496),
    C = t(519896),
    h = t(981631),
    I = t(689938);
let E = (0, a.Kb)([d.Z, u.Z, m.Z], {
    queryId: (e) => (null != e ? ['premium-button', e] : null),
    get: (e) => {
        var n;
        if (null == e) return;
        let t = d.Z.get(e),
            l = null !== (n = u.Z.getForSKU(e)) && void 0 !== n ? n : [],
            i = m.Z.getForSKU(e),
            a = d.Z.getParentSKU(e);
        if (null != t && null != i && (null == t || t.type !== h.epS.SUBSCRIPTION || null != a))
            return {
                parentSku: a,
                sku: t,
                storeListing: i,
                subscriptionPlans: l
            };
    },
    load: async (e, n) => {
        if (null == n) return;
        let t = { url: h.ANM.STOREFRONT_PREMIUM_BUTTON(n) },
            { body: l } = await r.tn.get(t);
        s.Z.dispatch({
            type: 'STORE_LISTINGS_FETCH_SUCCESS',
            storeListings: l.store_listings
        }),
            null != l.subscription_plans &&
                s.Z.dispatch({
                    type: 'SUBSCRIPTION_PLANS_FETCH_SUCCESS',
                    skuId: n,
                    subscriptionPlans: l.subscription_plans
                }),
            null != l.skus &&
                l.skus.forEach((e) => {
                    s.Z.dispatch({
                        type: 'SKU_FETCH_SUCCESS',
                        sku: e
                    });
                });
    },
    useStateHook: a.cj
});
function x(e) {
    let { data: n } = E(e),
        t = null == n ? void 0 : n.parentSku,
        a = null == n ? void 0 : n.sku,
        r = null == n ? void 0 : n.storeListing,
        s = null == n ? void 0 : n.subscriptionPlans,
        u = i.useCallback(() => {
            if ((null == a ? void 0 : a.applicationId) == null || (null == a ? void 0 : a.id) == null || (null == a ? void 0 : a.flags) == null) return null;
            (0, o.openModal)((e) => {
                let { onClose: n, transitionState: t } = e;
                return (0, l.jsx)(C.SubscriptionDetailsModal, {
                    appId: a.applicationId,
                    subscriptionType: (0, c.KW)(a.flags) ? 'user' : 'guild',
                    onClose: n,
                    skuId: a.id,
                    transitionState: t,
                    guildId: null
                });
            });
        }, [null == a ? void 0 : a.applicationId, null == a ? void 0 : a.id, null == a ? void 0 : a.flags]),
        d = i.useCallback(() => {
            if (null == a) return null;
            (0, o.openModal)((e) => {
                let { onClose: n, transitionState: t } = e;
                return (0, l.jsx)(p.ItemDetailsModal, {
                    appId: a.applicationId,
                    skuId: a.id,
                    onClose: n,
                    transitionState: t
                });
            });
        }, [a]);
    if (null != a && null != r && (null == a || a.type !== h.epS.SUBSCRIPTION || null != t)) {
        if (null == e || (null != a && !a.available))
            return {
                disabled: !0,
                label: I.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
            };
        if (a.type === h.epS.SUBSCRIPTION) {
            if (null == s || 0 === s.length)
                return {
                    disabled: !0,
                    label: I.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
                };
            let e = s[0],
                n = (0, _.aS)(e.id);
            return {
                disabled: !1,
                label: I.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                    skuName: a.name,
                    price: (0, f.T4)(n.amount, n.currency)
                }),
                onClick: u
            };
        }
        return null == a.price
            ? {
                  disabled: !0,
                  label: I.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
              }
            : {
                  disabled: !1,
                  label: I.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                      skuName: a.name,
                      price: (0, f.T4)(a.price.amount, a.price.currency)
                  }),
                  onClick: d
              };
    }
}
