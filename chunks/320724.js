s.d(t, {
    K: function () {
        return r;
    },
    P: function () {
        return o;
    }
}), s(411104);
var n = s(570140), a = s(358085), i = s(998502);
function r() {
    if (!(0, a.isDesktop)())
        throw Error('Attempted to observe candidate games on a non-desktop platform');
    i.ZP.setCandidateGamesCallback(e => {
        n.Z.dispatch({
            type: 'CANDIDATE_GAMES_CHANGE',
            games: e
        });
    }), n.Z.dispatch({ type: 'GAME_DETECTION_WATCH_CANDIDATE_GAMES_START' });
}
function o() {
    if (!(0, a.isDesktop)())
        throw Error('Attempted to stop observing candidate games on a non-desktop platform');
    i.ZP.clearCandidateGamesCallback(), n.Z.dispatch({ type: 'GAME_DETECTION_WATCH_CANDIDATE_GAMES_STOP' });
}
