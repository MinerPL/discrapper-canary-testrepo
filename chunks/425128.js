n.d(t, {
    _7: function () {
        return u;
    },
    _b: function () {
        return c;
    },
    pV: function () {
        return l;
    }
});
var r = n(544891),
    i = n(570140),
    a = n(881052),
    s = n(463031),
    o = n(981631);
let l = async (e) => {
        let { guildId: t, leaderboardId: n, intervalOffset: i = 0, force: s = !1 } = e;
        try {
            var l;
            let e = (
                    await r.tn.get({
                        url: o.ANM.GUILD_LEADERBOARD(t, n),
                        query: {
                            interval_offset: i,
                            cached: !s
                        }
                    })
                ).body,
                a = null !== (l = e.wait_ms_until_next_fetch) && void 0 !== l ? l : 900000;
            return null != a && (e.expires_at = Date.now() + a), e;
        } catch (e) {
            throw new a.Hx(e);
        }
    },
    u = async (e) => {
        let { riotConnectionId: t, lolConnectionId: n, onlyUpdateIfStale: l } = e;
        try {
            let e = (
                await r.tn.post({
                    url: o.ANM.UPDATE_MY_LOL_LEADERBOARD(),
                    body: {
                        riot_connection_id: t,
                        lol_connection_id: n,
                        only_update_if_stale: l
                    }
                })
            ).body;
            return (
                null != e.update_enqueued_timestamp &&
                    i.Z.dispatch({
                        type: 'SET_USER_LEADERBOARD_LAST_UPDATE_REQUESTED',
                        leaderboardId: s._,
                        lastUpdateRequested: e.update_enqueued_timestamp
                    }),
                e
            );
        } catch (e) {
            throw new a.Hx(e);
        }
    },
    c = async (e) => {
        let { guildId: t, leaderboardId: n, sortByStatisticId: i, sortDesc: s, showWinnerCrown: l } = e;
        try {
            return (
                await r.tn.put({
                    url: o.ANM.GUILD_LEADERBOARD_SETTINGS(t, n),
                    body: {
                        sort_by_statistic_id: i,
                        sort_desc: s,
                        show_winner_crown: l
                    }
                })
            ).body;
        } catch (e) {
            throw new a.Hx(e);
        }
    };
