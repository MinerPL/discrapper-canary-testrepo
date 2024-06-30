var n, a = s(442837), i = s(570140);
function r(e, t, s) {
    return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = s, e;
}
let o = !1;
class l extends (n = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && (o = e.persistentCodesEnabled);
    }
    getState() {
        return { persistentCodesEnabled: o };
    }
    getPersistentCodesEnabled() {
        return o;
    }
}
r(l, 'displayName', 'SecureFramesSettingsStore'), r(l, 'persistKey', 'SecureFramesSettingsStore'), t.Z = new l(i.Z, {
    SECURE_FRAMES_SETTINGS_UPDATE: function (e) {
        o = e.persistentCodesEnabled;
    }
});
