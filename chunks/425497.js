let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-10_mobile_video_disable',
    label: 'Backgrounding Mobile App Disables Incoming Video',
    defaultConfig: { stopVideoWhenHidden: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { stopVideoWhenHidden: !0 }
        }
    ]
});
t.Z = { stopVideoWhenHidden: () => r.getCurrentConfig({ location: 'stopVideoWhenHidden' }, { autoTrackExposure: !0 }).stopVideoWhenHidden };
