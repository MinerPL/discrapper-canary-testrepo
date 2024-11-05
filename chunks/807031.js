n.d(t, {
    KR: function () {
        return i;
    },
    wC: function () {
        return a;
    }
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-09_voice_channel_blocked_user_warning',
    label: 'Voice Channel Blocked User Warning',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show blocked user warning in voice channel as a modal',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t } = e;
    return r.useExperiment({ location: t }, { autoTrackExposure: !0 }).enabled;
}
function a(e) {
    let { location: t } = e;
    return r.getCurrentConfig({ location: t }, { autoTrackExposure: !0 }).enabled;
}
