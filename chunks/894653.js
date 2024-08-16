var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140);
let u = [],
    c = null;
class d extends (s = o.ZP.Store) {
    getLastFetchTimeMs() {
        return c;
    }
    getCategories() {
        return u;
    }
}
(a = 'ApplicationDirectoryCategoriesStore'),
    (i = 'displayName') in (r = d)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new d(l.Z, {
        APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function (e) {
            let { categories: t } = e;
            (u = t), (c = Date.now());
        }
    }));
