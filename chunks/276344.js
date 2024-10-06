n.d(t, {
    JN: function () {
        return a;
    },
    NM: function () {
        return o;
    }
});
var r = n(818083);
let i = (0, r.B)({
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
function a(e) {
    let { hasLeaderboard: t } = i.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return t;
}
let s = (0, r.B)({
    kind: 'guild',
    id: '2024-09_league_of_legends_leaderboard',
    label: 'League of Legends Leaderboard',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Leaderboard',
            config: { enabled: !0 }
        }
    ]
});
function o(e, t) {
    let { enabled: n } = s.getCurrentConfig(
        {
            guildId: e,
            location: t
        },
        { autoTrackExposure: !0 }
    );
    return n;
}
