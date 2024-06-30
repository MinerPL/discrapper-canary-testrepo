n.d(t, {
    xG: function () {
        return o;
    }
});
var r = n(818083);
let i = (0, r.B)({
        kind: 'user',
        id: '2024-06_game_profile',
        label: 'Enables the Game Profile',
        defaultConfig: { enabled: !1 },
        treatments: [{
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }]
    }), a = (0, r.B)({
        kind: 'user',
        id: '2024-06_game_profile_experiment',
        label: 'Enables the Game Profile',
        defaultConfig: { enabled: !1 },
        treatments: [{
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }]
    });
function o(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    i.useExperiment({ location: e }, { autoTrackExposure: t });
    let {enabled: n} = a.useExperiment({ location: e }, { autoTrackExposure: !0 });
    return n;
}
