n.d(t, {
    c: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-10_blocking_context',
    label: 'Blocking Context',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show blocking context in block confirmation modal',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t } = e;
    return r.getCurrentConfig({ location: t }, { autoTrackExposure: !0 }).enabled;
}
