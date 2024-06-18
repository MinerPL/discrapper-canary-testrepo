"use strict";
let i, r;
n(47120);
var s, o, a, l, u = n(348327),
  _ = n.n(u),
  d = n(392711),
  c = n.n(d),
  E = n(442837),
  I = n(570140),
  T = n(503438),
  h = n(860852),
  S = n(768419),
  f = n(695346),
  N = n(581883),
  A = n(131704),
  m = n(780570),
  O = n(314897),
  R = n(77498),
  C = n(517100),
  p = n(283595),
  g = n(293273),
  L = n(158776),
  v = n(797258),
  D = n(981631);
let M = !1,
  P = D.Skl.ONLINE,
  y = D.Skl.UNKNOWN,
  U = 0,
  b = [],
  G = !1,
  w = !0,
  k = Object.freeze([]),
  B = [];

function x(e) {
  return (0, m.OT)(e, p.Z)
}

function V(e) {
  switch (e.type) {
    case D.IIU.LISTENING:
      if ((0, T.Z)(e)) return S.Z.shouldShowActivity();
      if (null != e.application_id) return x(e.application_id);
      return !1;
    case D.IIU.PLAYING:
      return null != e.application_id ? x(e.application_id) : function(e) {
        let t = R.Z.getGameByName(e);
        return null != t ? x(t.id) : f.G6.getSetting()
      }(e.name);
    case D.IIU.STREAMING:
    case D.IIU.WATCHING:
    default:
      return null == e.application_id || x(e.application_id)
  }
}

function Z() {
  var e;
  if (U = null !== (e = C.Z.getIdleSince()) && void 0 !== e ? e : 0, G = C.Z.isAFK(), w) P = y, H();
  else if (M) P = D.Skl.INVISIBLE;
  else {
    let e = f.co.getSetting();
    P = e !== D.Skl.UNKNOWN ? e : D.Skl.ONLINE
  }
  P === D.Skl.ONLINE && U > 0 && (P = D.Skl.IDLE);
  let t = !1,
    n = w || P === D.Skl.INVISIBLE ? [] : g.Z.getActivities().filter(V);
  !_()(b, n) && (b = n, t = !0);
  let i = v.Z.getRemoteActivities();
  if (k !== i && (k = i, t = !0), t) {
    let e = b.find(e => e.type === D.IIU.CUSTOM_STATUS);
    B = b.filter(e => e.type !== D.IIU.CUSTOM_STATUS).length > 0 ? b : null != e ? [e, ...c()(k).filter(e => e.type !== D.IIU.CUSTOM_STATUS).uniqBy(e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name)).value()] : c().uniqBy(k, e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name))
  }
}

function H() {
  i = void 0, r = void 0
}

function F() {
  w = !1, y = D.Skl.UNKNOWN, Z(), L.Z.setCurrentUserOnConnectionOpen(P, B)
}
class Y extends(s = E.ZP.Store) {
  initialize() {
    this.waitFor(C.Z, N.Z, g.Z, v.Z, p.Z, R.Z), this.syncWith([g.Z], Z)
  }
  getLocalPresence() {
    return {
      status: P,
      since: U,
      activities: b,
      afk: G,
      broadcast: r
    }
  }
  getStatus() {
    return P
  }
  getActivities() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return e ? B : b
  }
  getPrimaryActivity() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return e ? B[0] : b[0]
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
l = "SelfPresenceStore", (a = "displayName") in(o = Y) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.Z = new Y(I.Z, {
  START_SESSION: Z,
  CONNECTION_OPEN: function() {
    F()
  },
  CONNECTION_OPEN_SUPPLEMENTAL: F,
  OVERLAY_INITIALIZE: F,
  CONNECTION_CLOSED: Z,
  IDLE: Z,
  AFK: Z,
  RUNNING_GAMES_CHANGE: Z,
  STREAMING_UPDATE: Z,
  USER_SETTINGS_PROTO_UPDATE: Z,
  LOCAL_ACTIVITY_UPDATE: Z,
  SPOTIFY_PLAYER_STATE: Z,
  SPOTIFY_PLAYER_PLAY: Z,
  USER_CONNECTIONS_UPDATE: Z,
  SESSIONS_REPLACE: Z,
  RPC_APP_DISCONNECTED: Z,
  LIBRARY_FETCH_SUCCESS: Z,
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: Z,
  LOGOUT: function() {
    w = !0, y = P, Z()
  },
  EMBEDDED_ACTIVITY_CLOSE: Z,
  EMBEDDED_ACTIVITY_OPEN: Z,
  FORCE_INVISIBLE: function(e) {
    return M = e.invisible, Z()
  },
  WINDOW_FOCUS: function() {
    return M = !1, Z()
  },
  BROADCAST_START: function(e) {
    i = e.broadcast, r = (0, h.HD)(e.broadcast)
  },
  BROADCAST_STOP: H,
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    t instanceof A.Sf && (null == t ? void 0 : t.isBroadcastChannel()) && (null == t ? void 0 : t.ownerId) === O.default.getId() && (i = void 0, r = void 0)
  }
})