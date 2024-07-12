s.d(a, {
  i: function() {
return i;
  }
});
var n = s(544891),
  t = s(570140),
  r = s(881052),
  l = s(981631);
let i = async e => {
  try {
var a;
let s = await n.tn.get({
    url: l.ANM.SIMILAR_GAMES(e)
  }),
  r = (null !== (a = s.body.similar_games) && void 0 !== a ? a : []).filter(a => a !== e);
t.Z.dispatch({
  type: 'GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS',
  applicationId: e,
  games: r
});
  } catch (e) {
throw new r.Hx(e);
  }
};