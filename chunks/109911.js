n.d(t, {
    Ji: function () {
        return s;
    }
}),
    n(873546);
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
        id: '2024-10_icymi_random',
        label: 'random sort on ICYMI',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'randomly sorts icymi content',
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
