"use strict";
n.r(t), n.d(t, {
  getNowPlayingAnalytics: function() {
    return i
  }
}), n("808653"), n("446674");
var l = n("389817"),
  a = n("392453"),
  s = n("988268");

function i() {
  let e = (0, l.getNowPlayingVisible)(),
    t = a.default.nowPlayingCards;
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
  }(t, e)
}