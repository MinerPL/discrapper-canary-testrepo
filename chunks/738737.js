n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), s = n(987209), l = n(981631);
function r(e) {
    let {
        initialPlanId: t,
        activeSubscription: r,
        trialId: o,
        trialFooterMessageOverride: c,
        onClose: d,
        analyticsObject: u,
        analyticsLocation: _,
        analyticsLocations: E,
        analyticsSubscriptionType: m,
        renderHeader: I,
        renderPurchaseConfirmation: T,
        planGroup: h,
        reviewWarningMessage: N,
        skuId: f
    } = e;
    (0, a.openModalLazy)(async () => {
        let {PaymentContextProvider: e} = await Promise.resolve().then(n.bind(n, 598)), {PaymentModal: a} = await Promise.all([
                n.e('15972'),
                n.e('6416'),
                n.e('32776'),
                n.e('12041')
            ]).then(n.bind(n, 791785)), {STEPS: l} = await Promise.all([
                n.e('96427'),
                n.e('77298'),
                n.e('23357'),
                n.e('15972'),
                n.e('12013'),
                n.e('6416'),
                n.e('39612'),
                n.e('32776'),
                n.e('95900'),
                n.e('8016'),
                n.e('68136'),
                n.e('57497')
            ]).then(n.bind(n, 7305));
        return n => {
            let {
                onClose: p,
                ...C
            } = n;
            return (0, i.jsx)(e, {
                activeSubscription: r,
                stepConfigs: l,
                skuIDs: [f],
                children: (0, i.jsx)(s.KB, {
                    children: (0, i.jsx)(a, {
                        ...C,
                        initialPlanId: t,
                        onClose: e => {
                            p(), null == d || d(e);
                        },
                        analyticsLocations: E,
                        analyticsObject: u,
                        analyticsLocation: _,
                        analyticsSubscriptionType: m,
                        skuId: f,
                        renderHeader: I,
                        renderPurchaseConfirmation: T,
                        planGroup: h,
                        trialId: o,
                        trialFooterMessageOverride: c,
                        reviewWarningMessage: N
                    })
                })
            });
        };
    }, {
        onCloseCallback: () => {
            null == d || d(!1);
        },
        onCloseRequest: l.dG4
    });
}
