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
    u = n(392711),
    c = n.n(u),
    d = n(442837),
    _ = n(570140);
((r = o || (o = {}))[(r.FETCHING = 0)] = 'FETCHING'), (r[(r.FETCHED = 1)] = 'FETCHED'), (r[(r.ERROR = 2)] = 'ERROR');
let E = {},
    f = {},
    h = {};
function p(e) {
    let { includesInactive: t } = e;
    return 'includes_inactive:'.concat(t);
}
class m extends (l = d.ZP.Store) {
    getLastFetchTimeMs(e) {
        let { includesInactive: t } = e;
        return h[p({ includesInactive: t })];
    }
    getFetchState(e) {
        let { includesInactive: t } = e;
        return f[p({ includesInactive: t })];
    }
    getCollections(e) {
        let { includesInactive: t } = e;
        return E[p({ includesInactive: t })];
    }
}
(s = void 0),
    (a = 'displayName') in (i = m)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new m(_.Z, {
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS: function (e) {
            let { includesInactive: t } = e;
            f = {
                ...f,
                [p({ includesInactive: t })]: 0
            };
        },
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: function (e) {
            var t;
            let { collections: n, includesInactive: r } = e,
                i = p({ includesInactive: r });
            let a =
                ((t = n.map((e) => {
                    var t;
                    return (e.application_directory_collection_items = ((t = e.application_directory_collection_items), c().sortBy(t, ['position', 'id']))), e;
                })),
                c().sortBy(t, ['position', 'id']));
            (E = {
                ...E,
                [i]: a
            }),
                (f = {
                    ...f,
                    [i]: 1
                });
            let s = Date.now();
            h = {
                ...h,
                [i]: s
            };
        },
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: function (e) {
            let { includesInactive: t } = e;
            f = {
                ...f,
                [p({ includesInactive: t })]: 2
            };
        }
    }));
