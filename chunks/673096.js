s(47120);
var n, a, i, r, o = s(442837), l = s(570140);
let c = [];
function d() {
    c = [];
}
class _ extends (n = o.ZP.Store) {
    getSessions() {
        return c;
    }
}
r = 'AuthSessionsStore', (i = 'displayName') in (a = _) ? Object.defineProperty(a, i, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : a[i] = r, t.Z = new _(l.Z, {
    LOGOUT: d,
    LOGIN_SUCCESS: d,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let {sessions: t} = e;
        c = t.map(e => ({
            ...e,
            approx_last_used_time: new Date(e.approx_last_used_time)
        }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let {sessionIdHashes: t} = e, s = [...c], n = !1;
        for (let e of t) {
            let t = s.findIndex(t => t.id_hash === e);
            t >= 0 && (s.splice(t, 1), n = !0);
        }
        if (!n)
            return !1;
        c = s;
    }
});
