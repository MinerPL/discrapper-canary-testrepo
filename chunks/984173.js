n.d(t, {
    F: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2024-10_profile_activity_react_reply',
        label: 'Profile Activity React Reply',
        defaultConfig: { activityReactReplyEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable Profile Activity React / Reply',
                config: { activityReactReplyEnabled: !0 }
            }
        ]
    }),
    i = (e) => {
        let { location: t, autoTrackExposure: n = !0 } = e,
            { activityReactReplyEnabled: i } = r.useExperiment({ location: t }, { autoTrackExposure: n });
        return i;
    };
