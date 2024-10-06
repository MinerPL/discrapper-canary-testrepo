i.d(t, {
    V: function () {
        return a;
    }
});
let e = (0, i(818083).B)({
    kind: 'user',
    id: '2023-11_safety_hub_inapp_appeal_ingestion',
    label: 'Safety Hub In App Appeals Ingestion',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Allow users to interact with the new In-App appeals ingestion flow',
            config: { enabled: !0 }
        },
        {
            id: 2,
            label: 'DSA Testser',
            config: { enabled: !0 }
        }
    ]
});
function a(n) {
    return !!e.useExperiment({ location: n }, { autoTrackExposure: !0 }).enabled;
}
