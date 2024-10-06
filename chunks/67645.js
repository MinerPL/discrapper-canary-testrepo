n.d(t, {
    g: function () {
        return a;
    }
});
let s = (0, n(818083).B)({
    kind: 'user',
    id: '2024-09_best_of_nitro_v2_experiment',
    label: 'Best of Nitro bento boxes',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 0,
            label: 'Users see current best of nitro section',
            config: { enabled: !1 }
        },
        {
            id: 1,
            label: 'users see best of nitro bento boxes ',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { enabled: t } = s.useExperiment({ location: e }, { autoTrackExposure: !0 });
    return t;
}
