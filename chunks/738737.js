n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(987209),
    r = n(981631);
function l(e) {
    let { initialPlanId: t, activeSubscription: l, trialId: o, trialFooterMessageOverride: c, onClose: u, analyticsObject: d, analyticsLocation: _, analyticsLocations: E, analyticsSubscriptionType: I, renderHeader: m, renderPurchaseConfirmation: T, planGroup: h, reviewWarningMessage: N, skuId: f } = e;
    (0, a.openModalLazy)(
        async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(n.bind(n, 598)),
                { PaymentModal: a } = await Promise.all([n.e('52249'), n.e('47006'), n.e('32776'), n.e('92040')]).then(n.bind(n, 791785)),
                { STEPS: r } = await Promise.all([n.e('96427'), n.e('52249'), n.e('54803'), n.e('15685'), n.e('47006'), n.e('32776'), n.e('18209'), n.e('8016'), n.e('68136'), n.e('51199'), n.e('61061')]).then(n.bind(n, 7305));
            return (n) => {
                let { onClose: C, ...p } = n;
                return (0, i.jsx)(e, {
                    activeSubscription: l,
                    stepConfigs: r,
                    skuIDs: [f],
                    children: (0, i.jsx)(s.KB, {
                        children: (0, i.jsx)(a, {
                            ...p,
                            initialPlanId: t,
                            onClose: (e) => {
                                C(), null == u || u(e);
                            },
                            analyticsLocations: E,
                            analyticsObject: d,
                            analyticsLocation: _,
                            analyticsSubscriptionType: I,
                            skuId: f,
                            renderHeader: m,
                            renderPurchaseConfirmation: T,
                            planGroup: h,
                            trialId: o,
                            trialFooterMessageOverride: c,
                            reviewWarningMessage: N
                        })
                    })
                });
            };
        },
        {
            onCloseCallback: () => {
                null == u || u(!1);
            },
            onCloseRequest: r.dG4
        }
    );
}
