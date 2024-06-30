var i, l, a, r, s = t(442837), o = t(570140), c = t(827498);
let u = {
    show: !1,
    entrypoint: c._b.NONE,
    closeReason: c.ti.DISMISSED
};
function d(e) {
    let {
        closeReason: n = c.ti.DISMISSED
    } = e;
    return u.show = !1, u.entrypoint = c._b.NONE, u.closeReason = n, !0;
}
class m extends (r = s.ZP.Store) {
    initialize() {
    }
    shouldShowPopup() {
        return u.show && u.entrypoint === c._b.TEXT;
    }
    shouldShowModal() {
        return u.show && u.entrypoint === c._b.VOICE;
    }
    entrypoint() {
        return u.entrypoint;
    }
    closeReason() {
        return u.closeReason;
    }
}
function p() {
    d({ closeReason: c.ti.DISMISSED });
}
function _() {
    d({ closeReason: c.ti.COMMAND });
}
a = 'AppLauncherStore', (l = 'displayName') in (i = m) ? Object.defineProperty(i, l, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[l] = a, n.Z = new m(o.Z, {
    APP_LAUNCHER_SHOW: function (e) {
        let {entrypoint: n} = e;
        return u.show = !0, u.entrypoint = n, u.closeReason = c.ti.DISMISSED, !0;
    },
    APP_LAUNCHER_DISMISS: d,
    CONNECTION_OPEN: p,
    LOGOUT: p,
    CHANNEL_SELECT: p,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: _,
    APP_LAUNCHER_SET_ACTIVE_COMMAND: _
});
