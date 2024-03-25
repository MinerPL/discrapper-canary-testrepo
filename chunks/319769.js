"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("913144"),
  s = n("299285"),
  l = n("269180"),
  i = n("860285");

function r(e) {
  let {
    gameId: t
  } = e;
  ! function(e) {
    let t;
    let n = i.default.launchableGames[e],
      r = s.default.getApplication(e);
    (t = null != r ? l.default.isLaunchable(r) : l.default.isGameLaunchable(e)).then(t => {
      t !== n && a.default.dispatch({
        type: "GAME_LAUNCHABLE_UPDATE",
        gameId: e,
        isLaunchable: t
      })
    })
  }(t)
}
var o = {
  initialize() {
    a.default.subscribe("CHECK_LAUNCHABLE_GAME", r)
  }
}