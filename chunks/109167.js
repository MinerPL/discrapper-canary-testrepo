n.d(t, {
    H: function () {
        return a;
    }
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-08_captcha_serve_volume_distribution_metric',
    label: 'Captcha serve volume distribution metric',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enables sending captcha serve volume distribution metric',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    return !!r.useExperiment({ location: e }, { autoTrackExposure: !0 }).enabled;
}
