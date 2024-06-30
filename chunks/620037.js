let l = (0, s(818083).B)({
    kind: 'user',
    id: '2023-12_collectibles_gifting_dm_entrypoint',
    label: 'Collectibles Gifting From DM\'s',
    defaultConfig: { confirmUpsellEnabled: !1 },
    treatments: [{
            id: 2,
            label: 'Collectibles Gifting from DM\'s Enabled With Confirm Step Upsell',
            config: { confirmUpsellEnabled: !0 }
        }]
});
n.Z = e => {
    let {
        location: n,
        autoTrackExposure: s = !0,
        trackExposureOptions: i = {}
    } = e;
    return l.useExperiment({ location: n }, {
        autoTrackExposure: s,
        trackExposureOptions: i
    });
};
