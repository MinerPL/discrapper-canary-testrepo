n.d(t, {
    Hr: function () {
        return i;
    },
    Ku: function () {
        return a;
    }
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-01_voice_user_game_activity',
    label: 'Voice User Game Activity',
    defaultConfig: { showGameIcon: !1 },
    treatments: [{
            id: 1,
            label: 'Show game icon next to the Voice User in VC',
            config: { showGameIcon: !0 }
        }]
});
function i(e, t) {
    let {showGameIcon: n} = r.useExperiment({ location: e }, { autoTrackExposure: t });
    return n;
}
function a(e, t) {
    let {showGameIcon: n} = r.getCurrentConfig({ location: e }, { autoTrackExposure: t });
    return n;
}
t.ZP = r;
