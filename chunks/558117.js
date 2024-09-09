n.d(t, {
    R: function () {
        return r;
    }
});
let s = (0, n(818083).B)({
        kind: 'user',
        id: '2024-07_reveal_mystery_card',
        label: 'Shop Reveal Mystery Card',
        defaultConfig: { revealed: !1 },
        treatments: [
            {
                id: 1,
                label: 'Force reveal mystery card in shop',
                config: { revealed: !0 }
            }
        ]
    }),
    r = (e) => s.useExperiment({ location: e });
