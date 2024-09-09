n.d(t, {
    u: function () {
        return o;
    }
});
var a = n(818083),
    r = n(987338);
let s = (0, a.B)({
        kind: 'user',
        id: '2024-08_shop_browse',
        label: 'Collectibles Shop Browse Experiment',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable new shop layout',
                config: { enabled: !0 }
            }
        ],
        commonTriggerPoint: r.$P.COLLECTIBLES_SHOP_OPEN
    }),
    o = (e) => s.useExperiment({ location: e }).enabled;
