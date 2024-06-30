n.d(t, {
    J: function () {
        return a;
    },
    e: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2024-05_collectibles_shop_bundle',
        label: 'Collectibles Shop Bundle',
        defaultConfig: {
            enabled: !1,
            showToastAfterUseBundle: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Shop with bundle',
                config: {
                    enabled: !0,
                    showToastAfterUseBundle: !1
                }
            },
            {
                id: 2,
                label: 'Bundle + Use Now Non-Bundle',
                config: {
                    enabled: !0,
                    showToastAfterUseBundle: !0
                }
            }
        ]
    }), i = e => r.useExperiment({ location: e }).enabled, a = e => r.useExperiment({ location: e }).showToastAfterUseBundle;
