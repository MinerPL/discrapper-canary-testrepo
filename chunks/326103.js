t.d(n, {
    v: function () {
        return r;
    }
});
let a = (0, t(818083).B)({
    kind: 'user',
    id: '2024-09_game_profile_feedback_flow',
    label: 'Game Profile Feedback Flow',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function r(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { enabled: t } = a.useExperiment({ location: e }, { autoTrackExposure: n });
    return t;
}
