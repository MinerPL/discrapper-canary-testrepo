n.d(t, {
    I7: function () {
        return s;
    },
    gh: function () {
        return a;
    }
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: 'user',
    id: '2024-10_rapidash_discovery_plus',
    label: 'Rapidash Discovery Plus',
    defaultConfig: {
        enabled: !1,
        treatment: 'control'
    },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Discovery Plus Enabled',
            config: {
                enabled: !0,
                treatment: 'discovery-plus'
            }
        }
    ]
});
function s() {
    return a.useExperiment({ location: 'RapidashDiscoveryPlusExperiment' }, { autoTrackExposure: !1 });
}
