let s = (0, n(818083).B)({
    kind: 'user',
    id: '2024-09_tiered_tenure_badging_whats_new',
    label: "Tiered Tenure Badging (What's New)",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enable Tiered Tenure Badging on What's New",
            config: { enabled: !0 }
        }
    ]
});
t.Z = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return s.useExperiment({ location: 'experiment_hook' }, { autoTrackExposure: e });
};
