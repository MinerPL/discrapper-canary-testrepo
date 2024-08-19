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
    m = new Set();
function I(e) {
    m.has(e.id) && m.delete(e.id),
        (d[e.id] = {
            lastFetchTimestamp: Date.now(),
            guild: e
        });
}
class T extends (r = s.ZP.Store) {
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
    shouldFetchGuild(e) {
        if (m.has(e)) return !1;
        let t = d[e];
        return null == t || t.lastFetchTimestamp < Date.now() - l.Z.Millis.HOUR;
    }
    getGuildProfiles(e) {
        return e.reduce((e, t) => {
            let n = d[t];
            return null == n ? e : (e.push(n.guild), e);
        }, []);
    }
    getCurrentRecommendationId() {
        return f;
    }
}
u(T, 'displayName', 'ClanDiscoveryStore'),
    u(T, 'persistKey', 'ClanDiscoveryStore'),
    (t.Z = new T(o.Z, {
        FETCH_STATIC_CLAN_LIST_START: function () {
            E = !0;
        },
        FETCH_STATIC_CLAN_LIST_SUCCESS: function (e) {
            (c = e.clans), (_ = !0), (E = !1), e.clans.forEach(I);
        },
        FETCH_STATIC_CLAN_LIST_FAILURE: function () {
            E = !1;
        },
        FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS: function (e) {
            let { searchResult: t, criteriaHash: n, recommendationId: r } = e;
            return (p[n] = t), (f = r), t.items.forEach(I), (t.guildIds = t.guildIds.reduce((e, t) => (m.has(t) ? e : (e.push(t), e)), [])), !0;
        },
        FETCH_CLAN_DISCOVERY_PROFILE_LIST_SUCCESS: function (e) {
            var t;
            let { guilds: n, failedGuildIds: r } = e;
            return (
                n.forEach(I),
                (t = r).forEach((e) => {
                    delete d[e], m.add(e);
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
