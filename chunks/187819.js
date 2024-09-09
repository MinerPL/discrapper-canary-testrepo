t.d(s, {
    _p: function () {
        return a;
    }
});
let n = (0, t(818083).B)({
    kind: 'user',
    id: '2024-08_safety_settings_update',
    label: 'Safety Settings Update',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Safety Settings Update',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: s } = e,
        { enabled: t } = n.useExperiment({ location: s }, { autoTrackExposure: !0 });
    return t;
}
