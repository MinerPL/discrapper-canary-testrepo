n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(827498);
let c = {
    show: !1,
    entrypoint: u._b.NONE,
    lastShownEntrypoint: u._b.NONE,
    activeViewType: null,
    closeReason: u.ti.DISMISSED,
    initialState: void 0
};
function d(e) {
    let { closeReason: t = u.ti.DISMISSED } = e;
    return (c.show = !1), (c.entrypoint = u._b.NONE), (c.closeReason = t), (c.initialState = void 0), !0;
}
let _ = new Set();
class E extends (r = o.ZP.Store) {
    initialize() {}
    shouldShowPopup() {
        return c.show && c.entrypoint === u._b.TEXT;
    }
    shouldShowModal() {
        return c.show && c.entrypoint === u._b.VOICE;
    }
    entrypoint() {
        return c.entrypoint;
    }
    lastShownEntrypoint() {
        return c.lastShownEntrypoint;
    }
    activeViewType() {
        return c.activeViewType;
    }
    closeReason() {
        return c.closeReason;
    }
    initialState() {
        return c.initialState;
    }
    appDMChannelsWithFailedLoads() {
        return _;
    }
}
function f() {
    d({ closeReason: u.ti.DISMISSED });
}
function h() {
    d({ closeReason: u.ti.COMMAND });
}
(s = 'AppLauncherStore'),
    (a = 'displayName') in (i = E)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s);
t.Z = new E(l.Z, {
    APP_LAUNCHER_SHOW: function (e) {
        let { entrypoint: t, activeViewType: n, initialState: r } = e;
        return (c.show = !0), (c.entrypoint = t), (c.lastShownEntrypoint = t), (c.closeReason = u.ti.DISMISSED), (c.activeViewType = n), (c.initialState = r), !0;
    },
    APP_LAUNCHER_DISMISS: d,
    CONNECTION_OPEN: f,
    LOGOUT: f,
    CHANNEL_SELECT: f,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: h,
    APP_LAUNCHER_SET_ACTIVE_COMMAND: h,
    APP_LAUNCHER_ADD_FAILED_APP_DM_LOAD: function (e) {
        let { channelId: t } = e;
        _.add(t);
    },
    APP_LAUNCHER_REMOVE_FAILED_APP_DM_LOAD: function (e) {
        let { channelId: t } = e;
        _.delete(t);
    }
});
