var i = n(570140), s = n(812206), a = n(877481), r = n(592745);
function l(e) {
    let {gameId: t} = e;
    !function (e) {
        let t;
        let n = r.Z.launchableGames[e], l = s.Z.getApplication(e);
        (t = null != l ? a.Z.isLaunchable(l) : a.Z.isGameLaunchable(e)).then(t => {
            t !== n && i.Z.dispatch({
                type: 'GAME_LAUNCHABLE_UPDATE',
                gameId: e,
                isLaunchable: t
            });
        });
    }(t);
}
t.Z = {
    initialize() {
        i.Z.subscribe('CHECK_LAUNCHABLE_GAME', l);
    }
};
