"use strict";
n.r(t), n.d(t, {
  getNowPlayingAnalytics: function() {
    return i
  }
}), n("724458"), n("442837");
var l = n("868854"),
  a = n("801077"),
  s = n("674563");

function i() {
  let e = (0, l.getNowPlayingVisible)();
  return function(e, t) {
    let n = e.reduce((e, t) => {
      var n;
      let l = null !== (n = t.party.currentActivities.filter(e => null != e.game.name && e.game.type === s.ApplicationTypes.GAME).map(e => e.game.name)) && void 0 !== n ? n : [];
      return e.concat(l)
    }, []);
    return {
      now_playing_visible: t,
      now_playing_num_cards: e.length,
      now_playing_games_detected: n
    }
  }(a.default.nowPlayingCards, e)
}