t.d(e, {
    h: function () {
        return f;
    },
    m: function () {
        return m;
    }
}),
    t(789020);
var l = t(200651);
t(192379);
var i = t(512722),
    r = t.n(i),
    o = t(481060),
    a = t(496929),
    s = t(171246),
    u = t(509545),
    c = t(55563),
    d = t(987209),
    p = t(981631);
function f(n) {
    let { initialPlanId: e, activeSubscription: i, analyticsObject: r, analyticsLocation: a, analyticsLocations: s, analyticsSubscriptionType: u, renderHeader: c, planGroup: f, skuId: v, guildId: m, reviewWarningMessage: h, applicationId: x, showBenefitsFirst: S, onComplete: I, forcesTransitionToGuild: g } = n;
    (0, o.openModalLazy)(
        async () => {
            let { PaymentContextProvider: n } = await Promise.resolve().then(t.bind(t, 563132)),
                o = (await Promise.all([t.e('52249'), t.e('26182'), t.e('32776'), t.e('8573')]).then(t.bind(t, 405083))).default,
                { getApplicationPaymentSteps: p } = await Promise.all([t.e('63288'), t.e('77298'), t.e('23357'), t.e('12013'), t.e('99783'), t.e('26182'), t.e('95900'), t.e('40031')]).then(t.bind(t, 759386)),
                Z = p({
                    guildId: m,
                    showBenefitsFirst: S
                });
            return (t) =>
                (0, l.jsx)(n, {
                    applicationId: x,
                    activeSubscription: i,
                    stepConfigs: Z,
                    skuIDs: [v],
                    children: (0, l.jsx)(d.KB, {
                        children: (0, l.jsx)(o, {
                            ...t,
                            initialPlanId: e,
                            skuId: v,
                            analyticsLocations: s,
                            analyticsObject: r,
                            analyticsLocation: a,
                            analyticsSubscriptionType: u,
                            renderHeader: c,
                            planGroup: f,
                            reviewWarningMessage: h,
                            applicationId: x,
                            guildId: null != m ? m : void 0,
                            onComplete: I,
                            forcesTransitionToGuild: g
                        })
                    })
                });
        },
        { onCloseRequest: p.dG4 }
    );
}
let v = async (n, e) => {
    let t = (await (0, a.yD)(n)).filter((n) => null == n.ends_at || new Date(n.ends_at) > new Date()).find((n) => n.sku_id === e);
    r()(null == t, 'User already has an active subscription to this SKU');
};
async function m(n) {
    var e;
    let { applicationId: t, skuId: l, initialPlanId: i, analyticsLocationObject: o, analyticsLocations: a, renderHeader: d } = n,
        m = c.Z.get(l),
        h = u.Z.getForSKU(l);
    r()(null != m, 'Failed to find SKU');
    let x = (0, s.KW)(m.flags);
    r()(x, 'Guild application subscriptions unsupported!'),
        await v(t, l),
        f({
            initialPlanId: null != i ? i : null === (e = h[0]) || void 0 === e ? void 0 : e.id,
            activeSubscription: null,
            analyticsLocations: a,
            analyticsLocationObject: o,
            analyticsSubscriptionType: p.NYc.APPLICATION,
            renderHeader: d,
            planGroup: [],
            skuId: l,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: t
        });
}
