t.d(n, {
    M: function () {
        return s;
    }
}),
    t(724458);
var a = t(544891),
    r = t(981631);
let i = (e) =>
    e.reduce(
        (e, n) => (
            (e[n.game_application_id] = {
                level: n.activity_level,
                score: n.activity_score
            }),
            e
        ),
        {}
    );
async function s(e) {
    return i((await a.tn.get({ url: r.ANM.GUILD_TOP_GAMES(e) })).body.top_games);
}
