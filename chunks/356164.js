n(47120), n(653041);
var i,
    a = n(442837),
    s = n(570140),
    r = n(881052),
    l = n(726115),
    o = n(128449);
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
let d = new Map(),
    u = new Map(),
    _ = new Set(),
    E = null;
function h(e) {
    return [o.BP, e.query, o.t0, e.categoryId, o.KL, e.languageCode].join('-');
}
class m {
    handleSearchStart() {
        (this.error = null), (this.isFetching = !0);
    }
    handleSearchFailure(e) {
        (this.isFetching = !1), (this.error = new r.Hx(e));
    }
    handleSearchSuccess(e) {
        let { total: t, guilds: n } = e;
        (this.error = null), (this.isFetching = !1), (this.isInitialFetchComplete = !0), (this.lastFetchTimestamp = Date.now()), (this.total = t);
        let i = [...this.guildIds];
        n.forEach((e) => i.push(e.id)), (this.guildIds = i), (this.offset = i.length);
    }
    constructor({ query: e }) {
        c(this, 'guildIds', []), c(this, 'error', null), c(this, 'offset', null), c(this, 'total', null), c(this, 'isFetching', !1), c(this, 'isInitialFetchComplete', !1), c(this, 'lastFetchTimestamp', null), c(this, 'query', void 0), (this.query = e);
    }
}
function I(e) {
    var t;
    let n = h(e),
        i = null !== (t = d.get(n)) && void 0 !== t ? t : new m({ query: e.query });
    return d.set(n, i), i;
}
function p(e, t) {
    let n = h(e),
        i = d.get(n);
    return null != i ? t(i) : null;
}
class g extends (i = a.ZP.Store) {
    getGuild(e) {
        return u.get(e);
    }
    getGuildIds(e) {
        return p(e, (e) => e.guildIds);
    }
    getIsFetching(e) {
        return p(e, (e) => e.isFetching);
    }
    getIsInitialFetchComplete(e) {
        return p(e, (e) => e.isInitialFetchComplete);
    }
    getOffset(e) {
        return p(e, (e) => e.offset);
    }
    getTotal(e) {
        return p(e, (e) => e.total);
    }
    getLastFetchTimestamp(e) {
        return p(e, (e) => e.lastFetchTimestamp);
    }
    getAlgoliaSearchIndex() {
        return E;
    }
    getIsAlgoliaInitialized() {
        return null != E;
    }
    getIsBlocked(e) {
        return _.has(e);
    }
}
c(g, 'displayName', 'GlobalDiscoveryServersSearchResultsStore'),
    (t.Z = new g(s.Z, {
        CONNECTION_OPEN: function () {
            d.clear(), u.clear(), _.clear(), (E = null);
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_INITIALIZED: function (e) {
            let { algoliaSearchIndex: t } = e;
            E = t;
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_START: function (e) {
            let { query: t, categoryId: n, languageCode: i, reset: a } = e,
                s = h({
                    query: t,
                    categoryId: n,
                    languageCode: i
                });
            a && d.delete(s),
                I({
                    query: t,
                    categoryId: n,
                    languageCode: i
                }).handleSearchStart();
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: function (e) {
            let { query: t, categoryId: n, languageCode: i, total: a, guilds: s } = e;
            I({
                query: t,
                categoryId: n,
                languageCode: i
            }).handleSearchSuccess({
                total: a,
                guilds: s
            }),
                s.forEach((e) => {
                    u.set(e.id, (0, l.U0)(e));
                });
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: function (e) {
            let { query: t, categoryId: n, languageCode: i, error: a } = e;
            I({
                query: t,
                categoryId: n,
                languageCode: i
            }).handleSearchFailure(a);
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function (e) {
            let { ignoreQueries: t } = e,
                n = new Set(t);
            d.forEach((e, t) => {
                if (null != e.query) !n.has(e.query) && d.delete(t);
            });
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_BLOCKED: function (e) {
            let { query: t } = e;
            _.add(t);
        }
    }));
