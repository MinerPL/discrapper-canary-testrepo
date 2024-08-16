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
    _ = !1,
    E = !1,
    f = null,
    h = { status: 'unloaded' },
    p = {};
class m extends (r = s.ZP.Store) {
    getSearchResult(e) {
        let t = p[a().v3(JSON.stringify(e))];
        return null == t || t.loadedAt < Date.now() - l.Z.Millis.HOUR ? h : t;
    }
    getSavedGuildsResult(e) {
        return e.map((e) => d.find((t) => t.id === e)).filter(u.lm);
    }
    hasLoadedStaticClanDiscovery() {
        return _;
    }
    getStaticClans() {
        return d;
    }
    isLoading() {
        return E;
    }
    getCurrentRecommendationId() {
        return f;
    }
}
c(m, 'displayName', 'ClanDiscoveryStore'),
    c(m, 'persistKey', 'ClanDiscoveryStore'),
    (t.Z = new m(o.Z, {
        FETCH_STATIC_CLAN_LIST_START: function () {
            E = !0;
        },
        FETCH_STATIC_CLAN_LIST_SUCCESS: function (e) {
            (d = e.clans), (_ = !0), (E = !1);
        },
        FETCH_STATIC_CLAN_LIST_FAILURE: function () {
            E = !1;
        },
        FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS: function (e) {
            (p[e.criteriaHash] = e.searchResult), (f = e.recommendationId);
        }
    }));
