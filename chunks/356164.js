n(47120), n(653041);
var i,
    r = n(442837),
    a = n(570140),
    l = n(881052),
    s = n(726115),
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
    h = new Set(),
    m = null;
function p(e) {
    return [o.BP, e.query, o.t0, e.categoryId, o.KL, e.languageCode].join('-');
}
class g {
    handleSearchStart() {
        (this.error = null), (this.isFetching = !0);
    }
    handleSearchFailure(e) {
        (this.isFetching = !1), (this.isInitialFetchComplete = !0), (this.error = new l.Hx(e));
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
function f(e) {
    var t;
    let n = p(e),
        i = null !== (t = d.get(n)) && void 0 !== t ? t : new g({ query: e.query });
    return d.set(n, i), i;
}
function _(e, t) {
    let n = p(e),
        i = d.get(n);
    return null != i ? t(i) : null;
}
class E extends (i = r.ZP.Store) {
    getGuild(e) {
        return u.get(e);
    }
    getGuildIds(e) {
        return _(e, (e) => e.guildIds);
    }
    getIsFetching(e) {
        return _(e, (e) => e.isFetching);
    }
    getIsInitialFetchComplete(e) {
        return _(e, (e) => e.isInitialFetchComplete);
    }
    getOffset(e) {
        return _(e, (e) => e.offset);
    }
    getTotal(e) {
        return _(e, (e) => e.total);
    }
    getLastFetchTimestamp(e) {
        return _(e, (e) => e.lastFetchTimestamp);
    }
    getError(e) {
        return _(e, (e) => e.error);
    }
    getErrorMessage(e) {
        return _(e, (e) => {
            var t;
            return null === (t = e.error) || void 0 === t ? void 0 : t.getAnyErrorMessage();
        });
    }
    getAlgoliaSearchIndex() {
        return m;
    }
    getIsAlgoliaInitialized() {
        return null != m;
    }
    getIsBlocked(e) {
        return h.has(e);
    }
}
c(E, 'displayName', 'GlobalDiscoveryServersSearchResultsStore'),
    (t.Z = new E(a.Z, {
        CONNECTION_OPEN: function () {
            d.clear(), u.clear(), h.clear(), (m = null);
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_INITIALIZED: function (e) {
            let { algoliaSearchIndex: t } = e;
            m = t;
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_START: function (e) {
            let { query: t, categoryId: n, languageCode: i, reset: r } = e,
                a = p({
                    query: t,
                    categoryId: n,
                    languageCode: i
                });
            r && d.delete(a),
                f({
                    query: t,
                    categoryId: n,
                    languageCode: i
                }).handleSearchStart();
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: function (e) {
            let { query: t, categoryId: n, languageCode: i, total: r, guilds: a } = e;
            f({
                query: t,
                categoryId: n,
                languageCode: i
            }).handleSearchSuccess({
                total: r,
                guilds: a
            }),
                a.forEach((e) => {
                    u.set(e.id, (0, s.U0)(e));
                });
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: function (e) {
            let { query: t, categoryId: n, languageCode: i, error: r } = e;
            f({
                query: t,
                categoryId: n,
                languageCode: i
            }).handleSearchFailure(r);
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
            h.add(t);
        }
    }));
