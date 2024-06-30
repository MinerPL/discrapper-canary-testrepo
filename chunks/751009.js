n.d(t, {
    K: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2024-06_enhanced_custom_status',
        label: 'Enhanced Custom Status Experiment',
        defaultConfig: { modifyStatusEnabled: !1 },
        treatments: [{
                id: 1,
                label: 'Modifiable custom status',
                config: { modifyStatusEnabled: !0 }
            }]
    }), i = e => {
        let {
            location: t,
            autoTrackExposure: n = !0,
            trackExposureOptions: i = {}
        } = e;
        return r.useExperiment({ location: t }, {
            autoTrackExposure: n,
            trackExposureOptions: i
        });
    };
