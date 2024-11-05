let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-10_golive_simulcast',
    label: 'GoLive Simulcast',
    defaultConfig: {
        simulcastEnabled: !1,
        lqStreamBitrate: 0
    },
    treatments: [
        {
            id: 1,
            label: 'Simulcast @ 1.5Mbps',
            config: {
                simulcastEnabled: !0,
                lqStreamBitrate: 1500000
            }
        }
    ]
});
t.Z = {
    getConfig: () => r.getCurrentConfig({ location: 'getConfig' }, { autoTrackExposure: !1 }),
    simulcastEnabled: () => r.getCurrentConfig({ location: 'simulcastEnabled' }, { autoTrackExposure: !0 }).simulcastEnabled
};
