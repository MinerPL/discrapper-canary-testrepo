n.d(t, {
    NH: function () {
        return a;
    },
    aK: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-08_blocking_voice_states',
    label: 'Blocking Voice States',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    return r.useExperiment({ location: e }, { autoTrackExposure: !0 }).enabled;
}
function a(e) {
    let { enabled: t } = r.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return t;
}
