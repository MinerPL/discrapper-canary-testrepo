var i, l = t(442837), a = t(570140);
function r(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e;
}
let s = 10 * t(70956).Z.Millis.MINUTE, o = {
        lastUsedCommandId: null,
        lastUsedTimeMs: null
    };
class c extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        null != e && (o.lastUsedCommandId = e.lastUsedCommandId, o.lastUsedTimeMs = e.lastUsedTimeMs);
    }
    getState() {
        return o;
    }
    getLastUsedCommandId() {
        let e = Date.now();
        return null == o.lastUsedTimeMs || null == o.lastUsedCommandId ? null : (e > o.lastUsedTimeMs + s && (o.lastUsedCommandId = null, o.lastUsedTimeMs = null), o.lastUsedCommandId);
    }
}
r(c, 'displayName', 'AppLauncherLastUsedCommandStore'), r(c, 'persistKey', 'AppLauncherLastUsedCommandStore'), new c(a.Z, {
    APPLICATION_COMMAND_USED: function (e) {
        let {command: n} = e;
        o.lastUsedCommandId = n.id, o.lastUsedTimeMs = Date.now();
    }
});
