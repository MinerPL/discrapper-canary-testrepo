n(47120), n(653041), n(724458);
var i,
    a = n(442837),
    s = n(570140),
    r = n(881052),
    l = n(726115);
function o(e, t, n) {
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
let c = new Map(),
    d = new Map(),
    u = null;
class _ {
    handleSearchStart() {
        (this.error = null), (this.isFetching = !0);
    }
    handleSearchFailure(e) {
        (this.isFetching = !1), (this.error = new r.Hx(e));
    }
    handleSearchSuccess(e) {
        let { total: t, guilds: n } = e;
        (this.error = null), (this.isFetching = !1), (this.isInitialFetchComplete = !0), (this.total = t);
        let i = [...this.guildIds];
        n.forEach((e) => i.push(e.id)), (this.guildIds = i), (this.offset = i.length);
    }
    constructor() {
        o(this, 'guildIds', []), o(this, 'error', null), o(this, 'offset', null), o(this, 'total', null), o(this, 'isFetching', !1), o(this, 'isInitialFetchComplete', !1);
    }
}
function E(e) {
    var t;
    let n = null !== (t = c.get(e)) && void 0 !== t ? t : new _();
    return c.set(e, n), n;
}
function h(e, t) {
    let n = c.get(e);
    return null != n ? t(n) : null;
}
class m extends (i = a.ZP.Store) {
    getGuild(e) {
        return d.get(e);
    }
    getGuildIds(e) {
        return h(e, (e) => e.guildIds);
    }
    getIsFetching(e) {
        return h(e, (e) => e.isFetching);
    }
    getIsInitialFetchComplete(e) {
        return h(e, (e) => e.isInitialFetchComplete);
    }
    getOffset(e) {
        return h(e, (e) => e.offset);
    }
    getAlgoliaSearchIndex() {
        return u;
    }
    getIsAlgoliaInitialized() {
        return null != u;
    }
}
o(m, 'displayName', 'GlobalDiscoveryServersSearchResultsStore'),
    new m(s.Z, {
        CONNECTION_OPEN: function () {
            c.clear(), (u = null);
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_INITIALIZED: function (e) {
            let { algoliaSearchIndex: t } = e;
            u = t;
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_START: function (e) {
            let { id: t } = e;
            E(t).handleSearchStart();
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: function (e) {
            let { id: t, total: n, guilds: i } = e;
            E(t).handleSearchSuccess({
                total: n,
                guilds: i
            }),
                i.forEach((e) => {
                    d.set(e.id, (0, l.U0)(e));
                });
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: function (e) {
            let { id: t, error: n } = e;
            E(t).handleSearchFailure(n);
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_BULK_CLEAR: function (e) {
            let { ids: t } = e;
            return t.reduce((e, t) => !!c.delete(t) || e, !1);
        }
    });
