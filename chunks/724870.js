i.d(n, {
    h: function () {
        return p;
    },
    m: function () {
        return I;
    }
}), i(789020);
var t = i(735250);
i(470079);
var a = i(512722), r = i.n(a), o = i(481060), l = i(496929), s = i(171246), c = i(509545), d = i(55563), u = i(987209), _ = i(981631);
function p(e) {
    let {
        initialPlanId: n,
        activeSubscription: a,
        analyticsObject: r,
        analyticsLocation: l,
        analyticsLocations: s,
        analyticsSubscriptionType: c,
        renderHeader: d,
        planGroup: p,
        skuId: m,
        guildId: I,
        reviewWarningMessage: f,
        applicationId: g,
        showBenefitsFirst: h,
        eligibleApplicationSubscriptionGuilds: C,
        onComplete: v,
        forcesTransitionToGuild: E
    } = e;
    (0, o.openModalLazy)(async () => {
        let {PaymentContextProvider: e} = await Promise.resolve().then(i.bind(i, 598)), o = (await Promise.all([
                i.e('15972'),
                i.e('6416'),
                i.e('32776'),
                i.e('96549')
            ]).then(i.bind(i, 405083))).default, {getApplicationPaymentSteps: _} = await Promise.all([
                i.e('96427'),
                i.e('77298'),
                i.e('23357'),
                i.e('12013'),
                i.e('39612'),
                i.e('95900'),
                i.e('95854'),
                i.e('94694')
            ]).then(i.bind(i, 759386)), x = _({
                guildId: I,
                showBenefitsFirst: h,
                eligibleApplicationSubscriptionGuilds: C
            });
        return i => (0, t.jsx)(e, {
            applicationId: g,
            activeSubscription: a,
            stepConfigs: x,
            skuIDs: [m],
            children: (0, t.jsx)(u.KB, {
                children: (0, t.jsx)(o, {
                    ...i,
                    initialPlanId: n,
                    skuId: m,
                    analyticsLocations: s,
                    analyticsObject: r,
                    analyticsLocation: l,
                    analyticsSubscriptionType: c,
                    renderHeader: d,
                    planGroup: p,
                    reviewWarningMessage: f,
                    applicationId: g,
                    guildId: null != I ? I : void 0,
                    onComplete: v,
                    forcesTransitionToGuild: E
                })
            })
        });
    }, { onCloseRequest: _.dG4 });
}
let m = async (e, n) => {
    let i = (await (0, l.yD)(e)).filter(e => null == e.ends_at || new Date(e.ends_at) > new Date()).find(e => e.sku_id === n);
    r()(null == i, 'User already has an active subscription to this SKU');
};
async function I(e) {
    var n;
    let {
            applicationId: i,
            skuId: t,
            initialPlanId: a,
            analyticsLocationObject: o,
            analyticsLocations: l,
            renderHeader: u
        } = e, I = d.Z.get(t), f = c.Z.getForSKU(t);
    r()(null != I, 'Failed to find SKU');
    let g = (0, s.KW)(I.flags);
    r()(g, 'Guild application subscriptions unsupported!'), await m(i, t), p({
        initialPlanId: null != a ? a : null === (n = f[0]) || void 0 === n ? void 0 : n.id,
        activeSubscription: null,
        analyticsLocations: l,
        analyticsLocationObject: o,
        analyticsSubscriptionType: _.NYc.APPLICATION,
        renderHeader: u,
        planGroup: [],
        skuId: t,
        guildId: null,
        eligibleApplicationSubscriptionGuilds: [],
        showBenefitsFirst: !1,
        applicationId: i
    });
}
