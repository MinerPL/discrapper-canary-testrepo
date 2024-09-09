n.d(t, {
    n: function () {
        return a;
    }
});
let i = (0, n(818083).B)({
        kind: 'user',
        id: '2024-08_shop_recurring_dc',
        label: 'Shop Recurring Dismissible Content Experiment',
        defaultConfig: { recurringDCEnabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Enable single use dismissible content',
                config: { recurringDCEnabled: !1 }
            },
            {
                id: 1,
                label: 'Enable recurring dismissible content',
                config: { recurringDCEnabled: !0 }
            }
        ]
    }),
    a = (e) => i.useExperiment({ location: e }).recurringDCEnabled;
