n(47120), n(724458), n(653041);
var r,
    i = n(108131),
    a = n.n(i),
    s = n(442837),
    o = n(570140),
    l = n(70956);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = [],
    d = {},
    _ = !1,
    E = !1,
    f = null,
    h = { status: 'unloaded' },
    p = {},
    I = new Set(),
    m = !1;
function T(e) {
    return (
        I.has(e.id) && I.delete(e.id),
        (d[e.id] = {
            lastFetchTimestamp: Date.now(),
            guild: e
        }),
        !0
    );
}
class S extends (r = s.ZP.Store) {
    getSearchResult(e) {
        let t = p[a().v3(JSON.stringify(e))];
        return null == t || t.loadedAt < Date.now() - l.Z.Millis.HOUR ? h : t;
    }
    hasLoadedStaticClanDiscovery() {
        return _;
    }
    getStaticClans() {
        return c;
    }
    isLoading() {
        return E;
    }
    hasError() {
        return m;
    }
    shouldFetchGuild(e) {
        if (I.has(e)) return !1;
        let t = d[e];
        return null == t || t.lastFetchTimestamp < Date.now() - l.Z.Millis.HOUR;
    }
    getGuildProfile(e) {
        var t, n;
        return null !== (n = null === (t = d[e]) || void 0 === t ? void 0 : t.guild) && void 0 !== n ? n : null;
    }
    getCurrentRecommendationId() {
        return f;
    }
}
u(S, 'displayName', 'ClanDiscoveryStore'),
    u(S, 'persistKey', 'ClanDiscoveryStore'),
    (t.Z = new S(o.Z, {
        FETCH_STATIC_CLAN_LIST_START: function () {
            (E = !0), (m = !1);
        },
        FETCH_STATIC_CLAN_LIST_SUCCESS: function (e) {
            (c = e.clans), (_ = !0), (E = !1), e.clans.forEach(T), (m = !1);
        },
        FETCH_STATIC_CLAN_LIST_FAILURE: function () {
            (E = !1), (m = !0);
        },
        FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS: function (e) {
            let { searchResult: t, criteriaHash: n, recommendationId: r } = e;
            return (m = !1), (p[n] = t), (f = r), t.items.forEach(T), (t.guildIds = t.guildIds.reduce((e, t) => (I.has(t) ? e : (e.push(t), e)), [])), !0;
        },
        FETCH_CLAN_DISCOVERY_SEARCH_RESULT_FAILURE: function () {
            m = !0;
        },
        FETCH_CLAN_DISCOVERY_PROFILE_LIST_SUCCESS: function (e) {
            var t;
            let { guilds: n, failedGuildIds: r } = e;
            return (
                n.forEach(T),
                (t = r).forEach((e) => {
                    delete d[e], I.add(e);
                }),
                Object.keys(p).forEach((e) => {
                    let n = p[e];
                    p[e] = {
                        ...n,
                        items: n.items.filter((e) => !t.includes(e.id)),
                        guildIds: n.guildIds.filter((e) => !t.includes(e))
                    };
                }),
                (p = { ...p }),
                (c = c.filter((e) => !t.includes(e.id))),
                !0
            );
        }
    }));
