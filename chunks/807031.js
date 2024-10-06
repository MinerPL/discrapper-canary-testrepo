n.d(t, {
    r: function () {
        return r;
    },
    w: function () {
        return i;
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
    return r.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
}
