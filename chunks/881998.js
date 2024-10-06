var i,
    a,
    s,
    l,
    r,
    o,
    c = n(442837),
    d = n(570140),
    u = n(592125),
    _ = n(757266),
    E = n(375954);
((i = r || (r = {})).NOT_FETCHED = 'NOT_FETCHED'), (i.FETCHING = 'FETCHING'), (i.FETCHED = 'FETCHED');
let I = null,
    m = 'NOT_FETCHED';
class T extends (o = c.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, _.Z, E.Z);
    }
    getApps() {
        return I;
    }
    getFetchState() {
        return m;
    }
}
(l = 'AuthorizedAppsStore'),
    (s = 'displayName') in (a = T)
        ? Object.defineProperty(a, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = l),
    (t.Z = new T(d.Z, {
        USER_AUTHORIZED_APPS_REQUEST: function () {
            m = 'FETCHING';
        },
        USER_AUTHORIZED_APPS_UPDATE: function (e) {
            (m = 'FETCHED'), (I = e.apps);
        }
    }));
