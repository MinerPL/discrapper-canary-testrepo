"use strict";
let a;
n.r(t), n("411104");
var s, l, i, r, o = n("392711"),
  u = n.n(o),
  d = n("442837"),
  c = n("570140"),
  f = n("861687"),
  E = n("437263"),
  h = n("314897"),
  _ = n("157305"),
  C = n("131951"),
  m = n("981631");
let S = {};

function I() {
  u().forEach(S, (e, t) => {
    e.destroy(), delete S[t]
  })
}

function p(e, t, n) {
  let a = S[e];
  return null != a ? t(a) : n
}

function T(e) {
  let {
    lobbyId: t
  } = e, n = S[t];
  if (null == n) return !1;
  n.destroy(), delete S[t]
}

function g() {
  return !0
}
class A extends(s = d.default.Store) {
  forEach(e) {
    u().each(S, e)
  }
  getState(e) {
    return p(e, e => e.state, m.RTCConnectionStates.DISCONNECTED)
  }
  isConnected(e) {
    return this.getState(e) === m.RTCConnectionStates.RTC_CONNECTED
  }
  isDisconnected(e) {
    return this.getState(e) === m.RTCConnectionStates.DISCONNECTED
  }
  getHostname(e) {
    return p(e, e => e.hostname, null)
  }
  getQuality(e) {
    return p(e, e => e.quality, m.RTCConnectionQuality.UNKNOWN)
  }
  getPings(e) {
    return p(e, e => e.getPings(), [])
  }
  getAveragePing(e) {
    return p(e, e => e.getAveragePing(), 0)
  }
  getLastPing(e) {
    return p(e, e => e.getLastPing(), 0)
  }
  getOutboundLossRate(e) {
    return p(e, e => e.getOutboundLossRate(), 0)
  }
  getMediaSessionId(e) {
    return p(e, e => e.getMediaSessionId(), null)
  }
  getRTCConnectionId(e) {
    return p(e, e => e.getRTCConnectionId(), null)
  }
  getDuration(e) {
    return p(e, e => e.getDuration(), 0)
  }
}
r = "RTCConnectionStore", (i = "displayName") in(l = A) ? Object.defineProperty(l, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[i] = r, t.default = new A(c.default, C.default.isSupported() ? {
  CONNECTION_OPEN: function(e) {
    a = e.sessionId, I()
  },
  CONNECTION_CLOSED: function() {
    a = null, I()
  },
  RTC_CONNECTION_STATE: g,
  RTC_CONNECTION_PING: g,
  RTC_CONNECTION_LOSS_RATE: g,
  RTC_CONNECTION_UPDATE_ID: function(e) {
    return u().some(S, t => t === e.connection)
  },
  LOBBY_VOICE_STATE_UPDATE: function(e) {
    if (h.default.getId() !== e.userId || e.sessionId !== a) return !1;
    let t = S[e.lobbyId];
    null != t && null == e.channelId ? (t.destroy(), delete S[e.lobbyId]) : null != t ? t.channelId = e.channelId : null != e.channelId && (t = function(e, t) {
      if (null == a) throw Error("Creating RTCConnection without session.");
      let n = _.default.getLobby(e);
      if (null == n) throw Error("Creating RTCConnection without lobby.");
      let s = n.application_id,
        l = new f.default({
          userId: h.default.getId(),
          sessionId: a,
          guildId: e,
          channelId: t,
          context: s
        });
      return l.on(E.RTCConnectionEvent.State, (t, n, a) => {
        c.default.dispatch({
          type: "RTC_CONNECTION_STATE",
          state: t,
          ...n,
          ...a,
          lobbyId: e
        })
      }), l.on(E.RTCConnectionEvent.Ping, (t, n) => {
        c.default.dispatch({
          type: "RTC_CONNECTION_PING",
          pings: t,
          quality: n,
          lobbyId: e
        })
      }), l.on(E.RTCConnectionEvent.OutboundLossRate, t => {
        c.default.dispatch({
          type: "RTC_CONNECTION_LOSS_RATE",
          lossRate: t,
          lobbyId: e
        })
      }), l
    }(e.lobbyId, e.channelId), S[e.lobbyId] = t)
  },
  LOBBY_VOICE_SERVER_UPDATE: function(e) {
    let t = S[e.lobbyId];
    if (null == t) return !1;
    t.connect(e.endpoint, e.token)
  },
  LOBBY_DELETE: T,
  LOBBY_DISCONNECT: T
} : {})