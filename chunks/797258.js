var r, i, a, o, s = n(392711), l = n.n(s), u = n(442837), c = n(570140), d = n(314897);
let _ = Object.freeze([]), E = {};
function f(e) {
    E = {}, e.sessions.forEach(e => {
        E[e.sessionId] = e;
    });
}
class h extends (o = u.ZP.Store) {
    initialize() {
        this.waitFor(d.default);
    }
    getSessions() {
        return E;
    }
    getSession() {
        let e = d.default.getSessionId();
        return null != e ? this.getSessionById(e) : null;
    }
    getRemoteActivities() {
        let e = d.default.getSessionId(), t = l().find(E, t => t.active && t.sessionId !== e);
        return null != t ? t.activities : _;
    }
    getSessionById(e) {
        return E[e];
    }
    getActiveSession() {
        return l().find(E, e => {
            let {active: t} = e;
            return t;
        });
    }
}
a = 'SessionsStore', (i = 'displayName') in (r = h) ? Object.defineProperty(r, i, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : r[i] = a, t.Z = new h(c.Z, {
    CONNECTION_OPEN: f,
    SESSIONS_REPLACE: f
});
