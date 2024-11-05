n(47120), n(724458);
var r = n(381338),
    i = n(99815);
let a = new Set([i.E.LOL_MOST_PLAYED_CHAMPION_ID]);
function s(e, t) {
    return {
        user_id: e,
        statistics: t.reduce(
            (e, t) => (
                (e[t] = {
                    value: Math.floor(100 * Math.random()),
                    updated_at: new Date().toISOString()
                }),
                e
            ),
            {}
        )
    };
}
let o = Object.values(i.E),
    l = {
        guild_id: '1266851512559210577',
        leaderboard_id: '1280436307230720000',
        interval_start: '1295808410419200000',
        interval_end: '1298345125478400000',
        guild_settings: {
            sort_by_statistic_id: i.E.LOL_TOTAL_KILLS,
            sort_desc: !0,
            show_winner_crown: !0
        },
        settings: {
            sort_by_statistic_id: i.E.LOL_TOTAL_KILLS,
            sort_desc: !0,
            interval_type: r.q.WEEKLY,
            statistics: o.reduce(
                (e, t) => (
                    (e[t] = {
                        id: t,
                        aggregation_type: 1,
                        selectable_for_competition: !a.has(t)
                    }),
                    e
                ),
                {}
            )
        },
        users: [s('213097507503210496', o), s('250892381526687765', o), s('1011326743526785086', o), s('107562988810027008', o), s('1088605061631983768', o), s('1073722616684232897', o)]
    };
t.Z = l;
