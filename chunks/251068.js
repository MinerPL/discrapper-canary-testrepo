r.d(t, {
    m: function () {
        return n;
    }
});
let a = (0, r(818083).B)({
        kind: 'user',
        id: '2024-09_shop_browse_backend',
        label: 'Collectibles Shop Home Backend',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'use backend data',
                config: { enabled: !0 }
            }
        ]
    }),
    n = (e) => a.useExperiment({ location: e }).enabled;
