n.d(t, {
    K: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2024-06_enhanced_custom_status',
        label: 'Enhanced Custom Status Experiment',
        defaultConfig: { customStatusBubbleEditEnabled: !1 },
        treatments: [
            {
                id: 3,
                label: 'Enables custom status bubble editing in all user profile surfaces',
                config: { customStatusBubbleEditEnabled: !0 }
            }
        ]
    }),
    i = (e) => {
        let { location: t, autoTrackExposure: n = !0, trackExposureOptions: i = {} } = e;
        return r.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                trackExposureOptions: i
            }
        );
    };
