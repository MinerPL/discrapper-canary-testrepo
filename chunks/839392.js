var n, t, s, i, r = a(442837), o = a(570140);
let c = {};
class d extends (i = r.ZP.Store) {
    getSimilarGames(e) {
        return c[e];
    }
}
s = 'GameProfileStore', (t = 'displayName') in (n = d) ? Object.defineProperty(n, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : n[t] = s, l.Z = new d(o.Z, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
        let {
            applicationId: l,
            games: a
        } = e;
        c[l] = a;
    }
});
