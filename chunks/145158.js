var i = r(818083);
n.Z = (0, i.B)({
    kind: 'user',
    id: '2024-10_system_date_formatter',
    label: 'Use system APIs for date formatting',
    defaultConfig: {
        enableSystemFormatter: !1,
        enable24HourPref: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enable system formatter',
            config: {
                enableSystemFormatter: !0,
                enable24HourPref: !1
            }
        },
        {
            id: 2,
            label: 'Enable pref for 24-hour time format',
            config: {
                enableSystemFormatter: !0,
                enable24HourPref: !0
            }
        }
    ]
});
