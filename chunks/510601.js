n.d(t, {
    kM: function () {
        return i;
    },
    vg: function () {
        return a;
    }
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-01_guild_gaming_voice_activity',
    label: 'Guild Gaming Voice Activity',
    defaultConfig: {
        shouldSubscribeToGuildMemberUpdates: !1,
        showGamingVoiceActivity: !1
    },
    treatments: [
        {
            id: 0,
            label: 'Control',
            config: {
                shouldSubscribeToGuildMemberUpdates: !0,
                showGamingVoiceActivity: !1
            }
        },
        {
            id: 1,
            label: 'Badge the server icon & show gamers in the tooltip if gamers are in VC',
            config: {
                shouldSubscribeToGuildMemberUpdates: !0,
                showGamingVoiceActivity: !0
            }
        }
    ]
});
function i(e, t) {
    let {showGamingVoiceActivity: n} = r.useExperiment({ location: e }, { autoTrackExposure: t });
    return n;
}
function a(e, t) {
    let {showGamingVoiceActivity: n} = r.getCurrentConfig({ location: e }, { autoTrackExposure: t });
    return n;
}
t.ZP = r;
