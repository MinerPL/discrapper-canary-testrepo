n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var r = n(735250),
    a = n(470079),
    i = n(89057),
    l = n(509545),
    s = n(74538),
    o = n(987209),
    u = n(598),
    c = n(456251);
function d(e) {
    let { initialStep: t, initialPlanId: n, guildId: d, setAnalyticsData: I, handleClose: _ } = e,
        { blockedPayments: f, setStep: h, hasFetchedSubscriptions: E, hasFetchedSubscriptionPlans: S, currencyLoading: m, selectedSkuId: p, setSelectedSkuId: T, setSelectedPlanId: C, priceOptions: N, setSubscriptionMetadataRequest: A } = (0, u.usePaymentContext)(),
        { isGift: O } = (0, o.wD)(),
        [P, b] = a.useState(!E || !S || m);
    return (a.useEffect(() => {
        b(!E || !S || m);
    }, [m, S, E]),
    a.useEffect(() => {
        null != d && A({ guild_id: d });
    }, [d, A]),
    a.useEffect(() => {
        C(n);
        let e = null != n ? l.Z.get(n) : null;
        if (!P && !f)
            I((t) => {
                let n = null != e ? (0, s.aS)(e.id, !1, O, N) : void 0;
                return {
                    ...t,
                    subscription_plan_id: null == e ? void 0 : e.id,
                    price: null == n ? void 0 : n.amount,
                    regular_price: null == e ? void 0 : e.price,
                    currency: N.currency
                };
            }),
                null != e && (T(null == e ? void 0 : e.skuId), h(t));
    }, [f, n, O, P, N, p, I, C, T, h, t]),
    P)
        ? (0, r.jsx)(c.Z, {})
        : f
          ? (0, r.jsx)(i.Vq, { onClose: _ })
          : null;
}
