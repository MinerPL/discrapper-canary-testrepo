n.d(t, {
    a: function () {
        return i;
    }
});
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2023-05_go_live_quest_fortnite',
    label: 'Fortnite: Go Live Quest',
    defaultConfig: {
        dropsEnabled: !1,
        streamLengthRequirement: 0,
        viewerCountRequirement: 0,
        autoEnrollment: !1,
        showUnenroll: !1
    },
    treatments: [
        {
            id: 1,
            label: '15 min stream req + auto enrollment',
            config: {
                dropsEnabled: !0,
                streamLengthRequirement: 15,
                viewerCountRequirement: 1,
                autoEnrollment: !0,
                showUnenroll: !1
            }
        },
        {
            id: 99,
            label: '2 minute stream req + auto enrollment',
            config: {
                dropsEnabled: !0,
                streamLengthRequirement: 2,
                viewerCountRequirement: 1,
                autoEnrollment: !0,
                showUnenroll: !0
            }
        }
    ]
});
