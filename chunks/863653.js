_.d(E, {
    zF: function () {
        return T;
    }
});
let t = (0, _(818083).B)({
    kind: 'user',
    id: '2024-05_throughline_care',
    label: 'Throughline Care Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable throughline care links',
            config: { enabled: !0 }
        }
    ]
});
function T(e) {
    return t.useExperiment({ location: e }, { autoTrackExposure: !0 }).enabled;
}
