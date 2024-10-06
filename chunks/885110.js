n(47120);
var r,
    i,
    a,
    s,
    o = n(348327),
    l = n.n(o),
    u = n(392711),
    c = n.n(u),
    d = n(442837),
    _ = n(570140),
    E = n(503438),
    f = n(768419),
    h = n(695346),
    p = n(581883),
    I = n(780570),
    m = n(77498),
    T = n(517100),
    S = n(283595),
    g = n(293273),
    A = n(158776),
    N = n(797258),
    O = n(981631);
let R = !1,
    v = O.Skl.ONLINE,
    C = O.Skl.UNKNOWN,
    L = 0,
    y = [],
    D = !1,
    b = !0,
    M = Object.freeze([]),
    P = [];
function U(e) {
    return (0, I.OT)(e, S.Z);
}
function w(e) {
    switch (e.type) {
        case O.IIU.LISTENING:
            if ((0, E.Z)(e)) return f.Z.shouldShowActivity();
            if (null != e.application_id) return U(e.application_id);
            return !1;
        case O.IIU.PLAYING:
            return null != e.application_id
                ? U(e.application_id)
                : (function (e) {
                      let t = m.Z.getGameByName(e);
                      return null != t ? U(t.id) : h.G6.getSetting();
                  })(e.name);
        case O.IIU.STREAMING:
        case O.IIU.WATCHING:
        default:
            return null == e.application_id || U(e.application_id);
    }
}
function x() {
    var e;
    if (((L = null !== (e = T.Z.getIdleSince()) && void 0 !== e ? e : 0), (D = T.Z.isAFK()), b)) v = C;
    else if (R) v = O.Skl.INVISIBLE;
    else {
        let e = h.co.getSetting();
        v = e !== O.Skl.UNKNOWN ? e : O.Skl.ONLINE;
    }
    v === O.Skl.ONLINE && L > 0 && (v = O.Skl.IDLE);
    let t = !1,
        n = b || v === O.Skl.INVISIBLE ? [] : g.Z.getActivities().filter(w);
    !l()(y, n) && ((y = n), (t = !0));
    let r = N.Z.getRemoteActivities();
    if ((M !== r && ((M = r), (t = !0)), t)) {
        let e = y.find((e) => e.type === O.IIU.CUSTOM_STATUS);
        P =
            y.filter((e) => e.type !== O.IIU.CUSTOM_STATUS).length > 0
                ? y
                : null != e
                  ? [
                        e,
                        ...c()(M)
                            .filter((e) => e.type !== O.IIU.CUSTOM_STATUS)
                            .uniqBy((e) => ''.concat(e.type, ':').concat(e.application_id, ':').concat(e.name))
                            .value()
                    ]
                  : c().uniqBy(M, (e) => ''.concat(e.type, ':').concat(e.application_id, ':').concat(e.name));
    }
}
function G() {
    (b = !1), (C = O.Skl.UNKNOWN), x(), A.Z.setCurrentUserOnConnectionOpen(v, P);
}
class k extends (r = d.ZP.Store) {
    initialize() {
        this.waitFor(T.Z, p.Z, g.Z, N.Z, S.Z, m.Z), this.syncWith([g.Z], x);
    }
    getLocalPresence() {
        return {
            status: v,
            since: L,
            activities: y,
            afk: D
        };
    }
    getStatus() {
        return v;
    }
    getActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? P : y;
    }
    getPrimaryActivity() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? P[0] : y[0];
    }
    getApplicationActivity(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return this.findActivity((t) => t.application_id === e, t);
    }
    findActivity(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return this.getActivities(t).find(e);
    }
}
(s = 'SelfPresenceStore'),
    (a = 'displayName') in (i = k)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new k(_.Z, {
        START_SESSION: x,
        CONNECTION_OPEN: function () {
            G();
        },
        CONNECTION_OPEN_SUPPLEMENTAL: G,
        OVERLAY_INITIALIZE: G,
        CONNECTION_CLOSED: x,
        IDLE: x,
        AFK: x,
        RUNNING_GAMES_CHANGE: x,
        STREAMING_UPDATE: x,
        USER_SETTINGS_PROTO_UPDATE: x,
        LOCAL_ACTIVITY_UPDATE: x,
        SPOTIFY_PLAYER_STATE: x,
        SPOTIFY_PLAYER_PLAY: x,
        USER_CONNECTIONS_UPDATE: x,
        SESSIONS_REPLACE: x,
        RPC_APP_DISCONNECTED: x,
        LIBRARY_FETCH_SUCCESS: x,
        LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: x,
        LOGOUT: function () {
            (b = !0), (C = v), x();
        },
        FORCE_INVISIBLE: function (e) {
            return (R = e.invisible), x();
        },
        WINDOW_FOCUS: function () {
            return (R = !1), x();
        }
    }));
