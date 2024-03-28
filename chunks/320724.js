"use strict";
s.r(t), s.d(t, {
  stopWatchingCandidateGames: function() {
    return r
  },
  watchCandidateGames: function() {
    return i
  }
}), s("411104");
var a = s("570140"),
  n = s("358085"),
  l = s("998502");

function i() {
  if (!(0, n.isDesktop)()) throw Error("Attempted to observe candidate games on a non-desktop platform");
  l.default.setCandidateGamesCallback(e => {
    a.default.dispatch({
      type: "CANDIDATE_GAMES_CHANGE",
      games: e
    })
  }), a.default.dispatch({
    type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_START"
  })
}

function r() {
  if (!(0, n.isDesktop)()) throw Error("Attempted to stop observing candidate games on a non-desktop platform");
  l.default.clearCandidateGamesCallback(), a.default.dispatch({
    type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_STOP"
  })
}