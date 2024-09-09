n.d(t, {
    pF: function () {
        return a;
    }
});
var r = n(818083);
n(528264), n(46140);
let i = (0, r.B)({
        id: '2024-07_quests_mobile_ga',
        kind: 'user',
        label: 'Quests Mobile GA',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    a = (e) => {
        let { location: t } = e;
        return i.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled;
    };
