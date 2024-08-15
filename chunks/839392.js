var n, l, r, t, i = a(442837),
  o = a(570140);
let E = {};
class c extends(t = i.ZP.Store) {
  getSimilarGames(e) {
return E[e];
  }
}
r = 'GameProfileStore', (l = 'displayName') in(n = c) ? Object.defineProperty(n, l, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[l] = r, s.Z = new c(o.Z, {
  GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function(e) {
let {
  applicationId: s,
  games: a
} = e;
E[s] = a;
  }
});