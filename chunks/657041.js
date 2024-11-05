let i = (0, n(818083).B)({
    kind: 'user',
    id: '2024-10_nitro_tab_forced_render',
    label: 'Nitro Tab Forced Re-render Investigation',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable nitro tab forced re-render',
            config: { enabled: !0 }
        }
    ]
});
t.Z = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return i.useExperiment({ location: 'nitro_tab' }, { autoTrackExposure: e });
};
