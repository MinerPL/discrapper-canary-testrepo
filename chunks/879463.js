n.d(s, {
    eP: function () {
        return r;
    }
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2023-12_pause_subscriptions_experiment',
    label: 'Pause Subscriptions Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Pause Subscription Enabled',
            config: { enabled: !0 }
        }
    ]
});
s.ZP = (e) => {
    let { location: s, autoTrackExposure: n = !0, trackExposureOptions: t = {} } = e;
    return r.useExperiment(
        { location: s },
        {
            autoTrackExposure: n,
            trackExposureOptions: t
        }
    );
};
