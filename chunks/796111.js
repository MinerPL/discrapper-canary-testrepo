n.d(t, {
    P: function () {
        return a;
    },
    i: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
        id: '2024-06_quest_inline_console_connection',
        kind: 'user',
        label: 'Quest Inline Console Connection Experiment',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Simplified console connection flow',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Inline console connection flow',
                config: { enabled: !0 }
            }
        ]
    }),
    i = (e) => {
        let { location: t, autoTrackExposure: n = !1 } = e;
        return r.getCurrentConfig({ location: t }, { autoTrackExposure: n }).enabled;
    },
    a = (e) => {
        let { location: t, autoTrackExposure: n = !1 } = e,
            { enabled: i } = r.useExperiment({ location: t }, { autoTrackExposure: n });
        return i;
    };
