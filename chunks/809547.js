n.d(t, {
    M: function () {
        return s;
    }
});
var r, i, a, o, s, l, u = n(31775), c = n.n(u), d = n(442837), _ = n(570140);
function E(e) {
    let {
        query: t,
        guildId: n,
        page: r,
        categoryId: i,
        integrationType: a,
        minUserInstallCommandCount: o,
        excludeAppsWithCustomInstallUrl: s
    } = e;
    return 'query:\''.concat(t, '\' guildId:').concat(n, ' page:').concat(r, ' categoryId:').concat(i, ' integrationType:').concat(a, ' minUserInstallCommandCount:').concat(o, ' excludeAppsWithCustomInstallUrl:').concat(s);
}
(r = s || (s = {}))[r.FETCHING = 0] = 'FETCHING', r[r.FETCHED = 1] = 'FETCHED', r[r.ERROR = 2] = 'ERROR';
let f = new (c())({ max: 20 }), h = {};
class p extends (l = d.ZP.Store) {
    getSearchResults(e) {
        let {
                query: t,
                guildId: n,
                page: r,
                categoryId: i,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: s
            } = e, l = E({
                query: t,
                guildId: n,
                page: r,
                categoryId: i,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: s
            });
        return f.get(l);
    }
    getFetchState(e) {
        let {
            query: t,
            guildId: n,
            page: r,
            categoryId: i,
            integrationType: a,
            minUserInstallCommandCount: o,
            excludeAppsWithCustomInstallUrl: s
        } = e;
        return h[E({
            query: t,
            guildId: n,
            page: r,
            categoryId: i,
            integrationType: a,
            minUserInstallCommandCount: o,
            excludeAppsWithCustomInstallUrl: s
        })];
    }
}
o = 'ApplicationDirectorySearchStore', (a = 'displayName') in (i = p) ? Object.defineProperty(i, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = o, t.Z = new p(_.Z, {
    APPLICATION_DIRECTORY_FETCH_SEARCH: function (e) {
        let {
                query: t,
                guildId: n,
                page: r,
                categoryId: i,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: s
            } = e, l = E({
                query: t,
                guildId: n,
                page: r,
                categoryId: i,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: s
            });
        h = {
            ...h,
            [l]: 0
        };
    },
    APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: function (e) {
        let {
                query: t,
                guildId: n,
                page: r,
                categoryId: i,
                result: a,
                integrationType: o,
                minUserInstallCommandCount: s,
                excludeAppsWithCustomInstallUrl: l
            } = e, u = E({
                query: t,
                guildId: n,
                page: r,
                categoryId: i,
                integrationType: o,
                minUserInstallCommandCount: s,
                excludeAppsWithCustomInstallUrl: l
            });
        f.set(u, {
            lastFetchTimeMs: Date.now(),
            ...a
        }), h = {
            ...h,
            [u]: 1
        };
    },
    APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function (e) {
        let {
                query: t,
                guildId: n,
                page: r,
                categoryId: i,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: s
            } = e, l = E({
                query: t,
                guildId: n,
                page: r,
                categoryId: i,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: s
            });
        h = {
            ...h,
            [l]: 2
        };
    }
});
