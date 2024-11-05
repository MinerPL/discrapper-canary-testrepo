n.d(t, {
    I: function () {
        return l;
    }
});
let i = (0, n(818083).B)({
        kind: 'user',
        id: '2024-10_user_profile_panel_recent_activity',
        label: 'User Profile Panel Recent Activity',
        defaultConfig: { recentActivityEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Recent activity in user profile panels enabled',
                config: { recentActivityEnabled: !0 }
            }
        ]
    }),
    l = (e) => {
        let { location: t, autoTrackExposure: n = !0, trackExposureOptions: l = {} } = e;
        return i.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                trackExposureOptions: l
            }
        );
    };
