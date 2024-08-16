a.d(s, {
    i: function () {
        return i;
    }
});
var n = a(544891),
    l = a(570140),
    r = a(881052),
    t = a(981631);
let i = async (e) => {
    try {
        var s;
        let a = await n.tn.get({ url: t.ANM.SIMILAR_GAMES(e) }),
            r = (null !== (s = a.body.similar_games) && void 0 !== s ? s : []).filter((s) => s !== e);
        l.Z.dispatch({
            type: 'GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS',
            applicationId: e,
            games: r
        });
    } catch (e) {
        throw new r.Hx(e);
    }
};
