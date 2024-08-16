n.d(t, {
    G: function () {
        return i;
    },
    s: function () {
        return r;
    }
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-04_dm_settings_upsell',
    label: 'DM Settings Upsell',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable DM Settings Upsell (with upsell threshold at 2 rejected MRs)',
            config: { enabled: !0 }
        },
        {
            id: 2,
            label: 'Enable DM Settings Upsell (with upsell threshold at 3 rejected MRs)',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n = !1 } = e;
    return r.getCurrentConfig({ location: t }, { autoTrackExposure: n }).enabled;
}
