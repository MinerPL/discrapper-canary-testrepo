n.d(t, {
    qI: function () {
        return a;
    }
});
var r = n(818083);
let i = (0, r.B)({
        kind: 'user',
        id: '2024-03_profile_mutuals',
        label: 'Profile Mutuals',
        defaultConfig: { enabled: !1 },
        treatments: [{
                id: 1,
                label: 'Show Profile Mutuals (Friends/Guilds)',
                config: { enabled: !0 }
            }]
    }), a = function () {
        let {
            autoTrackExposure: e = !1,
            disable: t = !1,
            location: n = '24rt789ugh'
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return i.useExperiment({ location: n }, {
            autoTrackExposure: e,
            disable: t
        });
    };
