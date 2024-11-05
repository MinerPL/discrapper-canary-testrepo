var r,
    i,
    a,
    l,
    o = n(442837),
    s = n(570140);
let c = {},
    d = {};
class u extends (l = o.ZP.Store) {
    getSimilarGames(e) {
        return c[e];
    }
    getSimilarGamesError(e) {
        return d[e];
    }
}
(a = 'GameProfileStore'),
    (i = 'displayName') in (r = u)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new u(s.Z, {
        GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
            let { applicationId: t, games: n } = e;
            c[t] = n;
        },
        GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function (e) {
            let { applicationId: t, error: n } = e;
            d[t] = n;
        }
    }));
