n.d(t, {
    O: function () {
        return c;
    }
});
var r = n(442837),
    i = n(675478),
    a = n(581883),
    s = n(626135),
    o = n(434382),
    l = n(981631);
async function u(e, t) {
    await (0, i.PS)(
        e,
        (n) => {
            (n.leaderboardsDisabled = !n.leaderboardsDisabled),
                s.default.track(l.rMx.LEADERBOARD_USER_OPT_OUT_UPDATED, {
                    leaderboard_id: t,
                    guild_id: e,
                    leaderboards_disabled: n.leaderboardsDisabled
                });
        },
        i.fy.INFREQUENT_USER_ACTION
    ),
        await new Promise((e) => setTimeout(e, 300)),
        await o.Z.fetchLeaderboard({
            guildId: e,
            leaderboardId: t,
            force: !0
        });
}
function c(e, t) {
    let n = (0, r.e7)(
        [a.Z],
        () => {
            var t, n;
            return null === (n = a.Z.settings.guilds) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : t[e];
        },
        [e]
    );
    return {
        leaderboardsDisabled: (null == n ? void 0 : n.leaderboardsDisabled) === !0,
        toggleGuildLeaderboardsDisabled: () => u(e, t)
    };
}
