var r = n(818083);
t.Z = (0, r.B)({
    kind: 'guild',
    id: '2024-03_krisp_sentiment',
    label: 'override krisp setting',
    defaultConfig: {
        shouldOverrideKrisp: !1,
        overrideKrispSetting: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Force enable krisp',
            config: {
                shouldOverrideKrisp: !0,
                overrideKrispSetting: !0
            }
        },
        {
            id: 2,
            label: 'Force disable krisp',
            config: {
                shouldOverrideKrisp: !0,
                overrideKrispSetting: !1
            }
        }
    ]
});
