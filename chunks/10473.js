var i, s = n(108131), a = n.n(s), r = n(442837), l = n(570140), o = n(70956);
function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let d = [], u = !1, _ = !1, E = { status: 'unloaded' }, h = {};
class I extends (i = r.ZP.Store) {
    getSearchResult(e) {
        let t = h[a().v3(JSON.stringify(e))];
        return null == t || t.loadedAt < Date.now() - o.Z.Millis.HOUR ? E : t;
    }
    hasLoadedStaticClanDiscovery() {
        return u;
    }
    getStaticClans() {
        return d;
    }
    isLoading() {
        return _;
    }
}
c(I, 'displayName', 'ClanDiscoveryStore'), c(I, 'persistKey', 'ClanDiscoveryStore'), t.Z = new I(l.Z, {
    FETCH_STATIC_CLAN_LIST_START: function () {
        _ = !0;
    },
    FETCH_STATIC_CLAN_LIST_SUCCESS: function (e) {
        d = e.clans, u = !0, _ = !1;
    },
    FETCH_STATIC_CLAN_LIST_FAILURE: function () {
        _ = !1;
    },
    FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS: function (e) {
        h[e.criteriaHash] = e.searchResult;
    }
});
