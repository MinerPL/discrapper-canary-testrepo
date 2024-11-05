n.d(t, {
    Ji: function () {
        return s;
    },
    QX: function () {
        return o;
    }
});
var r = n(818083);
let i = (0, r.B)({
        kind: 'user',
        id: '2024-07_icymi',
        label: 'In-case-you-missed-it tab',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'enables the new icymi tab',
                config: { enabled: !0 }
            }
        ]
    }),
    a = (0, r.B)({
        kind: 'user',
        id: '2024-10_icymi_sorting_fe',
        label: 'FE experiment for sorting on ICYMI',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enables ICYMI - sorting will be controlled by backend exp',
                config: { enabled: !0 }
            }
        ]
    });
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = i.getCurrentConfig(
            { location: e },
            {
                disable: !0,
                autoTrackExposure: t
            }
        ).enabled,
        r = a.getCurrentConfig(
            { location: e },
            {
                disable: !0,
                autoTrackExposure: t
            }
        ).enabled;
    return n || r;
}
(0, r.B)({
    kind: 'user',
    id: '2024-07_icymi_negative_items',
    label: 'icymi negative content (debugging only)',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'allow negative items only',
            config: { enabled: !0 }
        }
    ]
});
let o = (0, r.B)({
    kind: 'user',
    id: '2024-10_icymi_legacy',
    label: 'Legacy ICYMI experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'enable legacy ICYMI',
            config: { enabled: !0 }
        }
    ]
});
