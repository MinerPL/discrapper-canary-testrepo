let n = (0, t(818083).B)({
    id: '2024-08_premium_user_profile_try_it_out_desktop',
    label: 'Try It Out Entry Points',
    kind: 'user',
    defaultConfig: {
        enabled: !1,
        showSegmentedControl: !1,
        showFloatingUpsell: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Segmented Control',
            config: {
                enabled: !0,
                showSegmentedControl: !0,
                showFloatingUpsell: !1
            }
        },
        {
            id: 2,
            label: 'Floating Upsell',
            config: {
                enabled: !0,
                showSegmentedControl: !1,
                showFloatingUpsell: !0
            }
        }
    ]
});
s.Z = n;
