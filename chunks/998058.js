a.d(l, {
    i: function () {
        return r;
    }
});
var n = a(544891), t = a(570140), s = a(881052), i = a(981631);
let r = async e => {
    try {
        var l;
        let a = await n.tn.get({ url: i.ANM.SIMILAR_GAMES(e) }), s = (null !== (l = a.body.similar_games) && void 0 !== l ? l : []).filter(l => l !== e);
        t.Z.dispatch({
            type: 'GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS',
            applicationId: e,
            games: s
        });
    } catch (e) {
        throw new s.Hx(e);
    }
};
