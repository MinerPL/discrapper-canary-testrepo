n.d(t, {
    nY: function () {
        return i;
    },
    w7: function () {
        return a;
    }
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-07_profile_effects_webp',
    label: 'Uses WEBP for Profile Effect Assets',
    defaultConfig: {
        usingWebp: !1,
        usingWebm: !1
    },
    treatments: [
        {
            id: 1,
            label: 'WEBP Enabled',
            config: {
                usingWebp: !0,
                usingWebm: !1
            }
        },
        {
            id: 2,
            label: 'WEBM Enabled',
            config: {
                usingWebp: !1,
                usingWebm: !0
            }
        }
    ]
});
function i(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { usingWebm: n } = r.useExperiment({ location: e }, { autoTrackExposure: t });
    return n;
}
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { usingWebp: n, usingWebm: i } = r.useExperiment({ location: e }, { autoTrackExposure: t });
    return n ? 'webp' : i ? 'webm' : 'png';
}
