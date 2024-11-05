n.d(e, {
    M: function () {
        return i;
    }
});
var o,
    a,
    r,
    c,
    i,
    u,
    l = n(442837),
    s = n(570140),
    E = n(592125),
    d = n(757266),
    f = n(375954);
((o = i || (i = {})).NOT_FETCHED = 'NOT_FETCHED'), (o.FETCHING = 'FETCHING'), (o.FETCHED = 'FETCHED');
let C = null,
    _ = 'NOT_FETCHED';
class N extends (u = l.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, d.Z, f.Z);
    }
    getApps() {
        return C;
    }
    getFetchState() {
        return _;
    }
}
(c = 'AuthorizedAppsStore'),
    (r = 'displayName') in (a = N)
        ? Object.defineProperty(a, r, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[r] = c),
    (e.Z = new N(s.Z, {
        USER_AUTHORIZED_APPS_REQUEST: function () {
            _ = 'FETCHING';
        },
        USER_AUTHORIZED_APPS_UPDATE: function (t) {
            (_ = 'FETCHED'), (C = t.apps);
        }
    }));
