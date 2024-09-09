n.d(t, {
    J: function () {
        return a;
    },
    d: function () {
        return s;
    }
});
let i = (0, n(818083).B)({
        kind: 'user',
        id: '2024-07_shop_server_marketing',
        label: 'Shop Server Marketing Experiment',
        defaultConfig: { serverMarketingEnabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Control (client side marketing)',
                config: { serverMarketingEnabled: !1 }
            },
            {
                id: 1,
                label: 'Server side marketing',
                config: { serverMarketingEnabled: !0 }
            }
        ]
    }),
    a = (e) => i.useExperiment({ location: e }).serverMarketingEnabled,
    s = (e) => i.getCurrentConfig({ location: e }).serverMarketingEnabled;
