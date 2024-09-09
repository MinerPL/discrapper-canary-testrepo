a.d(s, {
    i: function () {
        return i;
    }
});
var n = a(544891),
    r = a(570140),
    l = a(881052),
    t = a(981631);
let i = async (e) => {
    try {
        var s;
        let a = await n.tn.get({ url: t.ANM.SIMILAR_GAMES(e) }),
            l = (null !== (s = a.body.similar_games) && void 0 !== s ? s : []).filter((s) => s !== e);
        r.Z.dispatch({
            type: 'GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS',
            applicationId: e,
            games: l
        });
    } catch (e) {
        throw new l.Hx(e);
    }
};
