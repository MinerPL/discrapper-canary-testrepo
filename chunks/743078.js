n.d(t, {
    Z: function () {
        return l;
    }
});
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2024-10_voice_icon_states',
    label: 'Voice/Video icon states',
    defaultConfig: { mode: 'mic-push-to-enable' },
    treatments: [
        {
            id: 1,
            label: 'Microphone push to disable.',
            config: { mode: 'mic-push-to-disable' }
        },
        {
            id: 2,
            label: 'Microphone push to disable w/ red.',
            config: { mode: 'mic-push-to-disable-red' }
        }
    ]
});
function l(e) {
    return i.useExperiment(e);
}
