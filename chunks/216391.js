"use strict";
let a;
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("70102");
var s = n("917351"),
  l = n.n(s),
  i = n("446674"),
  r = n("913144"),
  o = n("997722"),
  u = n("422791"),
  d = n("271938"),
  c = n("260320"),
  f = n("42887"),
  E = n("49111");
let h = {};

function _() {
  l.forEach(h, (e, t) => {
    e.destroy(), delete h[t]
  })
}

function C(e, t, n) {
  let a = h[e];
  return null != a ? t(a) : n
}

function S(e) {
  let {
    lobbyId: t
  } = e, n = h[t];
  if (null == n) return !1;
  n.destroy(), delete h[t]
}

function I() {
  return !0
}
class m extends i.default.Store {
  forEach(e) {
    l.each(h, e)
  }
  getState(e) {
    return C(e, e => e.state, E.RTCConnectionStates.DISCONNECTED)
  }
  isConnected(e) {
    return this.getState(e) === E.RTCConnectionStates.RTC_CONNECTED
  }
  isDisconnected(e) {
    return this.getState(e) === E.RTCConnectionStates.DISCONNECTED
  }
  getHostname(e) {
    return C(e, e => e.hostname, null)
  }
  getQuality(e) {
    return C(e, e => e.quality, E.RTCConnectionQuality.UNKNOWN)
  }
  getPings(e) {
    return C(e, e => e.getPings(), [])
  }
  getAveragePing(e) {
    return C(e, e => e.getAveragePing(), 0)
  }
  getLastPing(e) {
    return C(e, e => e.getLastPing(), 0)
  }
  getOutboundLossRate(e) {
    return C(e, e => e.getOutboundLossRate(), 0)
  }
  getMediaSessionId(e) {
    return C(e, e => e.getMediaSessionId(), null)
  }
  getRTCConnectionId(e) {
    return C(e, e => e.getRTCConnectionId(), null)
  }
  getDuration(e) {
    return C(e, e => e.getDuration(), 0)
  }
}
m.displayName = "RTCConnectionStore";
var p = new m(r.default, f.default.isSupported() ? {
  CONNECTION_OPEN: function(e) {
    a = e.sessionId, _()
  },
  CONNECTION_CLOSED: function() {
    a = null, _()
  },
  RTC_CONNECTION_STATE: I,
  RTC_CONNECTION_PING: I,
  RTC_CONNECTION_LOSS_RATE: I,
  RTC_CONNECTION_UPDATE_ID: function(e) {
    return l.some(h, t => t === e.connection)
  },
  LOBBY_VOICE_STATE_UPDATE: function(e) {
    if (d.default.getId() !== e.userId || e.sessionId !== a) return !1;
    let t = h[e.lobbyId];
    null != t && null == e.channelId ? (t.destroy(), delete h[e.lobbyId]) : null != t ? t.channelId = e.channelId : null != e.channelId && (t = function(e, t) {
      if (null == a) throw Error("Creating RTCConnection without session.");
      let n = c.default.getLobby(e);
      if (null == n) throw Error("Creating RTCConnection without lobby.");
      let s = n.application_id,
        l = new o.default({
          userId: d.default.getId(),
          sessionId: a,
          guildId: e,
          channelId: t,
          context: s
        });
      return l.on(u.RTCConnectionEvent.State, (t, n, a) => {
        r.default.dispatch({
          type: "RTC_CONNECTION_STATE",
          state: t,
          ...n,
          ...a,
          lobbyId: e
        })
      }), l.on(u.RTCConnectionEvent.Ping, (t, n) => {
        r.default.dispatch({
          type: "RTC_CONNECTION_PING",
          pings: t,
          quality: n,
          lobbyId: e
        })
      }), l.on(u.RTCConnectionEvent.OutboundLossRate, t => {
        r.default.dispatch({
          type: "RTC_CONNECTION_LOSS_RATE",
          lossRate: t,
          lobbyId: e
        })
      }), l
    }(e.lobbyId, e.channelId), h[e.lobbyId] = t)
  },
  LOBBY_VOICE_SERVER_UPDATE: function(e) {
    let t = h[e.lobbyId];
    if (null == t) return !1;
    t.connect(e.endpoint, e.token)
  },
  LOBBY_DELETE: S,
  LOBBY_DISCONNECT: S
} : {})