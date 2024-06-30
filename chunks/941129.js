n.d(t, {
    S: function () {
        return s;
    },
    u: function () {
        return a;
    }
});
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2023-01_consumer_education_launch',
    label: 'Safety Consumer Education Launch - Block/Mute',
    defaultConfig: {
        bucket: 0,
        enabled: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Mute',
            config: {
                bucket: 1,
                enabled: !0
            }
        },
        {
            id: 2,
            label: 'Block',
            config: {
                bucket: 2,
                enabled: !0
            }
        }
    ]
});
function s() {
    return i.useExperiment({ location: 'b85a21_1' }, { autoTrackExposure: !0 }).enabled;
}
function a() {
    return i.useExperiment({ location: 'b85a21_2' }, { autoTrackExposure: !1 }).bucket;
}
