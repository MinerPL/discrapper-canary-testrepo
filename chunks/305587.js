_.d(E, {
    Xs: function () {
        return t;
    }
});
let n = (0, _(818083).B)({
    kind: 'user',
    id: '2024-09_dm_mute_feedback',
    label: 'DM Mute Feedback Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable DM Mute Feedback Survey',
            config: { enabled: !0 }
        }
    ]
});
function t(e) {
    let { enabled: E } = n.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return E;
}
