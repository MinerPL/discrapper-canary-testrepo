a.d(s, {
    p: function () {
        return l;
    }
});
let n = (0, a(818083).B)({
    kind: 'user',
    id: '2024-08_game_follow_survey',
    label: 'Game Follow Fake Door Survey',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function l(e) {
    let s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { enabled: a } = n.useExperiment({ location: e }, { autoTrackExposure: s });
    return a;
}
