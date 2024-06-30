n.d(t, {
    S: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
        id: '2024-03_quests_activity_quest',
        kind: 'user',
        label: 'Activity Quest',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Activity Quest enabled',
                config: { enabled: !0 }
            }
        ]
    }), i = e => {
        let {
            location: t,
            autoTrackExposure: n
        } = e;
        return r.getCurrentConfig({ location: t }, { autoTrackExposure: n }).enabled;
    };
