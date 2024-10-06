n.d(t, {
    h: function () {
        return a;
    }
});
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2024-09_global_discovery_apps',
    label: 'Global Discovery Apps',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: a } = i.useExperiment({ location: t }, { autoTrackExposure: n });
    return a;
}
