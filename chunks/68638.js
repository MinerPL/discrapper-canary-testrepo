var s, a, i, r, l = n(392711), o = n.n(l), c = n(442837), d = n(570140), u = n(314897), _ = n(823379), E = n(891864);
let I = {}, T = 0;
class m extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(u.default);
    }
    isFetching() {
        return T > 0;
    }
    getGuild(e) {
        return I[e];
    }
    getGuilds(e) {
        return e.map(e => I[e]).filter(_.lm);
    }
}
i = 'DiscoverGuildsStore', (a = 'displayName') in (s = m) ? Object.defineProperty(s, a, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : s[a] = i, t.Z = new m(d.Z, {
    DISCOVER_GUILDS_FETCH_START: function (e) {
        T += 1;
    },
    DISCOVER_GUILDS_FETCH_SUCCESS: function (e) {
        let {guilds: t} = e;
        T -= 1, o().map(t, E.Z).forEach(e => I[e.id] = e);
    },
    DISCOVER_GUILDS_FETCH_FAILURE: function (e) {
        T -= 1;
    }
});
