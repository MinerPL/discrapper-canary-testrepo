n.d(t, {
    J: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-06_leaderboard',
    label: 'Leaderboard',
    defaultConfig: { hasLeaderboard: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Leaderboard',
            config: { hasLeaderboard: !0 }
        }
    ]
});
function i(e) {
    let { hasLeaderboard: t } = r.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return t;
}
