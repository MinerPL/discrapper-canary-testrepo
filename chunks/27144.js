n.d(t, {
    L: function () {
        return i;
    },
    z: function () {
        return a;
    }
});
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2024-07_user_profile_past_activity',
        label: 'User Profile Past Activity Experiment',
        defaultConfig: {
            pastActivityEnabled: !1,
            mostRecentActivityEnabled: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Past activity enabled',
                config: {
                    pastActivityEnabled: !0,
                    mostRecentActivityEnabled: !1
                }
            },
            {
                id: 2,
                label: 'Past and most recent activity enabled',
                config: {
                    pastActivityEnabled: !0,
                    mostRecentActivityEnabled: !0
                }
            }
        ]
    }),
    i = (e) => {
        let { location: t, autoTrackExposure: n = !0, trackExposureOptions: i = {} } = e;
        return r.getCurrentConfig(
            { location: t },
            {
                autoTrackExposure: n,
                trackExposureOptions: i
            }
        );
    },
    a = (e) => {
        let { location: t, autoTrackExposure: n = !0, trackExposureOptions: i = {} } = e;
        return r.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                trackExposureOptions: i
            }
        );
    };
