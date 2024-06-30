n.d(t, {
    V: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-03_metrics_endpoint_v2',
    label: 'Metrics V2 Endpoint Rollout',
    defaultConfig: { enabled: !1 },
    treatments: [{
            id: 1,
            label: 'Enables sending metrics to the v2 endpoint which accepts a new data format',
            config: { enabled: !0 }
        }]
});
function i(e) {
    let {enabled: t} = r.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return t;
}
