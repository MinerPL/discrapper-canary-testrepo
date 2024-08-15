t.d(s, {
  Ky: function() {
return r;
  },
  P7: function() {
return o;
  }
}), t(411104);
var n = t(570140),
  a = t(358085),
  i = t(998502);

function r() {
  if (!(0, a.isDesktop)())
throw Error('Attempted to observe candidate games on a non-desktop platform');
  i.ZP.setCandidateGamesCallback(e => {
n.Z.dispatch({
  type: 'CANDIDATE_GAMES_CHANGE',
  games: e
});
  }), n.Z.dispatch({
type: 'GAME_DETECTION_WATCH_CANDIDATE_GAMES_START'
  });
}

function o() {
  if (!(0, a.isDesktop)())
throw Error('Attempted to stop observing candidate games on a non-desktop platform');
  i.ZP.clearCandidateGamesCallback(), n.Z.dispatch({
type: 'GAME_DETECTION_WATCH_CANDIDATE_GAMES_STOP'
  });
}
t(189451).l.ALL;