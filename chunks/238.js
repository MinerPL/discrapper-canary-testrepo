n.d(t, {
    N: function () {
        return r;
    }
}),
    n(47120);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(442837),
    c = n(570140),
    d = n(331065),
    _ = n(55563),
    E = n(551428);
let f = new Map(),
    h = new Map();
((a = r || (r = {}))[(a.NONE = 0)] = 'NONE'), (a[(a.FETCHING = 1)] = 'FETCHING'), (a[(a.FETCHED = 2)] = 'FETCHED'), (a[(a.FAILED = 3)] = 'FAILED');
let p = new d.Z({
    subscriptions: [],
    otps: []
});
class I extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, E.Z);
    }
    hasStorefront(e) {
        return f.has(e);
    }
    getStoreLayout(e) {
        var t;
        return null !== (t = f.get(e)) && void 0 !== t ? t : p;
    }
    getFetchStatus(e) {
        var t;
        return f.has(e) ? 2 : null !== (t = h.get(e)) && void 0 !== t ? t : 0;
    }
}
(l = 'ApplicationStoreDirectoryStore'),
    (o = 'displayName') in (s = I)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.Z = new I(c.Z, {
        APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: function (e) {
            let { applicationId: t, layout: n } = e;
            f.set(t, d.Z.createFromServer(n)), h.delete(t);
        },
        APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: function (e) {
            let { applicationId: t } = e;
            h.set(t, 3);
        },
        APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: function (e) {
            let { applicationId: t } = e;
            h.set(t, 1);
        }
    }));
