t(47120);
var n,
    a,
    i,
    r,
    o = t(442837),
    l = t(570140);
let c = [];
function d() {
    c = [];
}
class _ extends (n = o.ZP.Store) {
    getSessions() {
        return c;
    }
}
(r = 'AuthSessionsStore'),
    (i = 'displayName') in (a = _)
        ? Object.defineProperty(a, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[i] = r),
    (s.Z = new _(l.Z, {
        LOGOUT: d,
        LOGIN_SUCCESS: d,
        FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
            let { sessions: s } = e;
            c = s.map((e) => ({
                ...e,
                approx_last_used_time: new Date(e.approx_last_used_time)
            }));
        },
        LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
            let { sessionIdHashes: s } = e,
                t = [...c],
                n = !1;
            for (let e of s) {
                let s = t.findIndex((s) => s.id_hash === e);
                s >= 0 && (t.splice(s, 1), (n = !0));
            }
            if (!n) return !1;
            c = t;
        }
    }));
