i.d(n, {
    B: function () {
        return a;
    }
});
let e = (0, i(818083).B)({
    kind: 'user',
    id: '2024-01_safety_hub_display_guild_violations',
    label: 'Safety Hub Display Guild Violations',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Display guild violations in account standing',
            config: { enabled: !0 }
        }
    ]
});
function a(t) {
    return !!e.useExperiment({ location: t }, { autoTrackExposure: !0 }).enabled;
}
