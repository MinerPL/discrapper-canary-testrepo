n.d(t, {
    z: function () {
        return s;
    }
});
var r = n(818083),
    i = n(977156);
let a = (0, r.B)({
        id: '2024-03_quests_members_list_entrypoint',
        kind: 'user',
        label: 'Quests Members List Entrypoint',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Quests Members List Entrypoint enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    s = (e) => {
        let { location: t, autoTrackExposure: n = !1 } = e,
            r = (0, i.Zy)({ location: t }),
            { enabled: s } = a.useExperiment({ location: t }, { autoTrackExposure: n });
        return r && s;
    };
