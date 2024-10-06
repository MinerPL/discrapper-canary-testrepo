var r = n(818083),
    i = n(987338);
t.Z = (0, r.B)({
    kind: 'user',
    id: '2024-09_app_dms',
    label: 'App DMs Experiment',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enable special UI for DMs with Apps',
            config: { enabled: !0 }
        }
    ]
});
