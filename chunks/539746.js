n.d(t, {
    J$: function () {
        return a;
    },
    _J: function () {
        return s;
    },
    xG: function () {
        return o;
    }
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: 'user',
    id: '2024-06_game_profile_experiment',
    label: 'Enables the Game Profile',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.POST_CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { enabled: n } = a.getCurrentConfig({ location: e }, { autoTrackExposure: t });
    return n;
}
function o(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { enabled: n } = a.useExperiment({ location: e }, { autoTrackExposure: t });
    return n;
}
