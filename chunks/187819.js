n.d(t, {
    _p: function () {
        return a;
    },
    sp: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
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
function i(e) {
    let { location: t, autoTrackExposure: n } = e,
        { enabled: i } = r.getCurrentConfig({ location: t }, { autoTrackExposure: null == n || n });
    return i;
}
function a(e) {
    let { location: t, autoTrackExposure: n } = e,
        { enabled: i } = r.useExperiment({ location: t }, { autoTrackExposure: null == n || n });
    return i;
}
