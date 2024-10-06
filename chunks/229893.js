n(47120), n(724458), n(653041);
var r,
    i = n(108131),
    a = n.n(i),
    s = n(442837),
    o = n(570140),
    l = n(70956),
    u = n(823379);
function c(e, t, n) {
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
let d = [],
    _ = {},
    E = !1,
    f = !1,
    h = null,
    p = { status: 'unloaded' },
    I = {},
    m = new Set(),
    T = !1,
    S = [],
    g = !1;
function A(e) {
    return (
        m.has(e.id) && m.delete(e.id),
        (_[e.id] = {
            lastFetchTimestamp: Date.now(),
            guild: e
        }),
        !0
    );
}
class N extends (r = s.ZP.Store) {
    getSearchResult(e) {
        let t = I[a().v3(JSON.stringify(e))];
        return null == t || t.loadedAt < Date.now() - l.Z.Millis.HOUR ? p : t;
    }
    hasLoadedStaticClanDiscovery() {
        return E;
    }
    getStaticClans() {
        return d;
    }
    isLoading() {
        return f;
    }
    hasError() {
        return T;
    }
    shouldFetchGuild(e) {
        if (m.has(e)) return !1;
        let t = _[e];
        return null == t || t.lastFetchTimestamp < Date.now() - l.Z.Millis.HOUR;
    }
    getGuildProfile(e) {
        var t, n;
        return null !== (n = null === (t = _[e]) || void 0 === t ? void 0 : t.guild) && void 0 !== n ? n : null;
    }
    getCurrentRecommendationId() {
        return h;
    }
    hasLoadedSavedGuilds() {
        return g;
    }
    getSavedGuildIds() {
        return S;
    }
    getSavedGuilds() {
        return S.map((e) => {
            var t;
            return null === (t = _[e]) || void 0 === t ? void 0 : t.guild;
        }).filter(u.lm);
    }
    isSavedGuildId(e) {
        return S.includes(e);
    }
}
c(N, 'displayName', 'ClanDiscoveryStore'),
    c(N, 'persistKey', 'ClanDiscoveryStore'),
    (t.Z = new N(o.Z, {
        FETCH_STATIC_CLAN_LIST_START: function () {
            (f = !0), (T = !1);
        },
        FETCH_STATIC_CLAN_LIST_SUCCESS: function (e) {
            (d = e.clans), (E = !0), (f = !1), e.clans.forEach(A), (T = !1);
        },
        FETCH_STATIC_CLAN_LIST_FAILURE: function () {
            (f = !1), (T = !0);
        },
        FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS: function (e) {
            let { searchResult: t, criteriaHash: n, recommendationId: r } = e;
            return (T = !1), (I[n] = t), (h = r), t.items.forEach(A), (t.guildIds = t.guildIds.reduce((e, t) => (m.has(t) ? e : (e.push(t), e)), [])), !0;
        },
        FETCH_CLAN_DISCOVERY_SEARCH_RESULT_FAILURE: function () {
            T = !0;
        },
        FETCH_CLAN_DISCOVERY_PROFILE_LIST_SUCCESS: function (e) {
            var t;
            let { guilds: n, failedGuildIds: r } = e;
            return (
                n.forEach(A),
                (t = r).forEach((e) => {
                    delete _[e], m.add(e);
                }),
                Object.keys(I).forEach((e) => {
                    let n = I[e];
                    I[e] = {
                        ...n,
                        items: n.items.filter((e) => !t.includes(e.id)),
                        guildIds: n.guildIds.filter((e) => !t.includes(e))
                    };
                }),
                (I = { ...I }),
                (d = d.filter((e) => !t.includes(e.id))),
                !0
            );
        },
        FETCH_CLAN_DISCOVERY_SAVED_GUILDS_SUCCESS: function (e) {
            let { guilds: t } = e;
            t.forEach(A), (S = t.map((e) => e.id)), (g = !0);
        },
        DISCOVERY_SAVED_GUILD_ADD: function (e) {
            let { guildId: t } = e;
            S = [t, ...S];
        },
        DISCOVERY_SAVED_GUILD_DELETE: function (e) {
            let { guildId: t } = e;
            S = S.filter((e) => e !== t);
        },
        DISCOVERY_SAVED_GUILD_BULK_ADD: function (e) {
            let { guildIds: t } = e;
            S = [...t, ...S];
        },
        DISCOVERY_SAVED_GUILD_BULK_DELETE: function (e) {
            let { guildIds: t } = e;
            S = S.filter((e) => !t.includes(e));
        },
        LOGOUT: function () {
            g = !1;
        }
    }));
