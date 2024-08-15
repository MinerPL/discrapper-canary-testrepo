var i = n(570140),
	a = n(812206),
	s = n(877481),
	r = n(592745);
function l(e) {
	let { gameId: t } = e;
	!(function (e) {
		let t;
		let n = r.Z.launchableGames[e],
			l = a.Z.getApplication(e);
		(t = null != l ? s.Z.isLaunchable(l) : s.Z.isGameLaunchable(e)).then((t) => {
			t !== n &&
				i.Z.dispatch({
					type: 'GAME_LAUNCHABLE_UPDATE',
					gameId: e,
					isLaunchable: t
				});
		});
	})(t);
}
t.Z = {
	initialize() {
		i.Z.subscribe('CHECK_LAUNCHABLE_GAME', l);
	}
};
