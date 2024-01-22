"use strict";
let i, s;
n.r(t), n.d(t, {
  default: function() {
    return B
  }
}), n("222007");
var r = n("714617"),
  a = n.n(r),
  o = n("917351"),
  l = n.n(o),
  u = n("446674"),
  d = n("913144"),
  c = n("429928"),
  f = n("837374"),
  _ = n("662285"),
  h = n("845579"),
  g = n("374363"),
  m = n("233069"),
  E = n("964889"),
  p = n("271938"),
  v = n("546463"),
  S = n("603699"),
  T = n("686470"),
  I = n("52028"),
  C = n("824563"),
  A = n("235660"),
  y = n("49111");
let N = !1,
  R = y.StatusTypes.ONLINE,
  O = y.StatusTypes.UNKNOWN,
  D = 0,
  P = [],
  b = !1,
  L = !0,
  M = Object.freeze([]),
  U = [];

function k(e) {
  return (0, E.shouldShareApplicationActivity)(e, T.default)
}

function w(e) {
  switch (e.type) {
    case y.ActivityTypes.LISTENING:
      if ((0, c.default)(e)) return _.default.shouldShowActivity();
      if (null != e.application_id) return k(e.application_id);
      return !1;
    case y.ActivityTypes.PLAYING:
      return null != e.application_id ? k(e.application_id) : function(e) {
        let t = v.default.getGameByName(e);
        return null != t ? k(t.id) : h.ShowCurrentGame.getSetting()
      }(e.name);
    case y.ActivityTypes.STREAMING:
    case y.ActivityTypes.WATCHING:
    default:
      return null == e.application_id || k(e.application_id)
  }
}

function V() {
  var e;
  D = null !== (e = S.default.getIdleSince()) && void 0 !== e ? e : 0, b = S.default.isAFK(), L ? (R = O, G()) : R = N ? y.StatusTypes.INVISIBLE : h.StatusSetting.getSetting(), R === y.StatusTypes.ONLINE && D > 0 && (R = y.StatusTypes.IDLE);
  let t = !1,
    n = L || R === y.StatusTypes.INVISIBLE ? [] : I.default.getActivities().filter(w);
  !a(P, n) && (P = n, t = !0);
  let i = A.default.getRemoteActivities();
  if (M !== i && (M = i, t = !0), t) {
    let e = P.find(e => e.type === y.ActivityTypes.CUSTOM_STATUS),
      t = P.filter(e => e.type !== y.ActivityTypes.CUSTOM_STATUS);
    U = t.length > 0 ? P : null != e ? [e, ...l(M).filter(e => e.type !== y.ActivityTypes.CUSTOM_STATUS).uniqBy(e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name)).value()] : l.uniqBy(M, e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name))
  }
}

function G() {
  i = void 0, s = void 0
}

function F() {
  L = !1, O = y.StatusTypes.UNKNOWN, V(), C.default.setCurrentUserOnConnectionOpen(R, U)
}
class x extends u.default.Store {
  initialize() {
    this.waitFor(S.default, g.default, I.default, A.default, T.default, v.default), this.syncWith([I.default], V)
  }
  getLocalPresence() {
    return {
      status: R,
      since: D,
      activities: P,
      afk: b,
      broadcast: s
    }
  }
  getStatus() {
    return R
  }
  getActivities() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return e ? U : P
  }
  getPrimaryActivity() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return e ? U[0] : P[0]
  }
  getApplicationActivity(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return this.findActivity(t => t.application_id === e, t)
  }
  findActivity(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return this.getActivities(t).find(e)
  }
  getBroadcast() {
    return i
  }
}
x.displayName = "SelfPresenceStore";
var B = new x(d.default, {
  START_SESSION: V,
  CONNECTION_OPEN: F,
  CONNECTION_OPEN_SUPPLEMENTAL: F,
  OVERLAY_INITIALIZE: F,
  CONNECTION_CLOSED: V,
  IDLE: V,
  AFK: V,
  RUNNING_GAMES_CHANGE: V,
  STREAMING_UPDATE: V,
  USER_SETTINGS_PROTO_UPDATE: V,
  LOCAL_ACTIVITY_UPDATE: V,
  SPOTIFY_PLAYER_STATE: V,
  SPOTIFY_PLAYER_PLAY: V,
  USER_CONNECTIONS_UPDATE: V,
  SESSIONS_REPLACE: V,
  RPC_APP_DISCONNECTED: V,
  LIBRARY_FETCH_SUCCESS: V,
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: V,
  LOGOUT: function() {
    L = !0, O = R, V()
  },
  EMBEDDED_ACTIVITY_CLOSE: V,
  EMBEDDED_ACTIVITY_OPEN: V,
  FORCE_INVISIBLE: function(e) {
    return N = e.invisible, V()
  },
  WINDOW_FOCUS: function() {
    return N = !1, V()
  },
  BROADCAST_START: function(e) {
    i = e.broadcast, s = (0, f.broadcastToServer)(e.broadcast)
  },
  BROADCAST_STOP: G,
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    t instanceof m.ChannelRecordBase && (null == t ? void 0 : t.isBroadcastChannel()) && (null == t ? void 0 : t.ownerId) === p.default.getId() && (i = void 0, s = void 0)
  }
})