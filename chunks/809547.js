n.d(t, {
    M: function () {
        return o;
    }
});
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(31775),
    c = n.n(u),
    d = n(288385),
    f = n(442837),
    _ = n(570140);
function h(e) {
    let { query: t, guildId: n, page: r, pageSize: i, categoryId: a, integrationType: s, minUserInstallCommandCount: o, excludeAppsWithCustomInstallUrl: l, excludeNonEmbeddedApps: u, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c, source: f = d.F.APP_DIRECTORY } = e;
    return "query:'".concat(t, "' guildId:").concat(n, ' page:').concat(r, ' pageSize:').concat(i, ' categoryId:').concat(a, ' integrationType:').concat(s, ' minUserInstallCommandCount:').concat(o, ' excludeAppsWithCustomInstallUrl:').concat(l, ' excludeNonEmbeddedApps:').concat(u, ' excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:').concat(c, ' source:').concat(f);
}
((r = o || (o = {}))[(r.FETCHING = 0)] = 'FETCHING'), (r[(r.FETCHED = 1)] = 'FETCHED'), (r[(r.ERROR = 2)] = 'ERROR');
let p = new (c())({ max: 20 }),
    m = {};
class g extends (l = f.ZP.Store) {
    getSearchResults(e) {
        let { query: t, guildId: n, page: r, pageSize: i, categoryId: a, integrationType: s, minUserInstallCommandCount: o, excludeAppsWithCustomInstallUrl: l, excludeNonEmbeddedApps: u, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c, source: d } = e,
            f = h({
                query: t,
                guildId: n,
                page: r,
                pageSize: i,
                categoryId: a,
                integrationType: s,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c,
                source: d
            });
        return p.get(f);
    }
    getFetchState(e) {
        let { query: t, guildId: n, page: r, pageSize: i, categoryId: a, integrationType: s, minUserInstallCommandCount: o, excludeAppsWithCustomInstallUrl: l, excludeNonEmbeddedApps: u, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c, source: d } = e;
        return m[
            h({
                query: t,
                guildId: n,
                page: r,
                pageSize: i,
                categoryId: a,
                integrationType: s,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c,
                source: d
            })
        ];
    }
}
(s = 'ApplicationDirectorySearchStore'),
    (a = 'displayName') in (i = g)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new g(_.Z, {
        APPLICATION_DIRECTORY_FETCH_SEARCH: function (e) {
            let { query: t, guildId: n, page: r, pageSize: i, categoryId: a, integrationType: s, minUserInstallCommandCount: o, excludeAppsWithCustomInstallUrl: l, excludeNonEmbeddedApps: u, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c, source: d } = e,
                f = h({
                    query: t,
                    guildId: n,
                    page: r,
                    pageSize: i,
                    categoryId: a,
                    integrationType: s,
                    minUserInstallCommandCount: o,
                    excludeAppsWithCustomInstallUrl: l,
                    excludeNonEmbeddedApps: u,
                    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c,
                    source: d
                });
            m = {
                ...m,
                [f]: 0
            };
        },
        APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: function (e) {
            let { query: t, guildId: n, page: r, pageSize: i, categoryId: a, result: s, integrationType: o, minUserInstallCommandCount: l, excludeAppsWithCustomInstallUrl: u, excludeNonEmbeddedApps: c, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d, source: f } = e,
                _ = h({
                    query: t,
                    guildId: n,
                    page: r,
                    pageSize: i,
                    categoryId: a,
                    integrationType: o,
                    minUserInstallCommandCount: l,
                    excludeAppsWithCustomInstallUrl: u,
                    excludeNonEmbeddedApps: c,
                    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
                    source: f
                });
            p.set(_, {
                lastFetchTimeMs: Date.now(),
                ...s
            }),
                (m = {
                    ...m,
                    [_]: 1
                });
        },
        APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function (e) {
            let { query: t, guildId: n, page: r, pageSize: i, categoryId: a, integrationType: s, minUserInstallCommandCount: o, excludeAppsWithCustomInstallUrl: l, excludeNonEmbeddedApps: u, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c, source: d } = e,
                f = h({
                    query: t,
                    guildId: n,
                    page: r,
                    pageSize: i,
                    categoryId: a,
                    integrationType: s,
                    minUserInstallCommandCount: o,
                    excludeAppsWithCustomInstallUrl: l,
                    excludeNonEmbeddedApps: u,
                    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c,
                    source: d
                });
            m = {
                ...m,
                [f]: 2
            };
        }
    }));
