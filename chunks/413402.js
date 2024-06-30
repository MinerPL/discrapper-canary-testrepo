n.d(t, {
    M: function () {
        return l;
    },
    i: function () {
        return a;
    }
});
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2024-06_rtc_voice_state_sync_experiment',
    label: 'RTC and Voice State Desync Fixes',
    defaultConfig: { enabled: !1 },
    treatments: [{
            id: 1,
            label: 'Desync fixes enabled',
            config: { enabled: !0 }
        }]
});
function a() {
    let {enabled: e} = i.getCurrentConfig({ location: 'isRTCVoiceStateDesyncExperimentEnabled' });
    return e;
}
function l() {
    let {enabled: e} = i.useExperiment({ location: 'useIsRTCVoiceStateDesyncExperimentEnabled' });
    return e;
}
