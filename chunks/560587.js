var n,
    a,
    r,
    l,
    i = s(442837),
    o = s(570140);
let d = {};
class c extends (l = i.ZP.Store) {
    getBranches(e) {
        var t;
        return null !== (t = d[e]) && void 0 !== t ? t : [];
    }
}
(r = 'ApplicationBranchStore'),
    (a = 'displayName') in (n = c)
        ? Object.defineProperty(n, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (n[a] = r),
    (t.Z = new c(o.Z, {
        OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
            let { applicationId: t, branches: s } = e;
            d[t] = s;
        },
        LOGOUT: function () {
            d = {};
        }
    }));
