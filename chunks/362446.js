"use strict";
n.r(t), n("724458");
var i, a, l, s, o = n("442837"),
  r = n("570140"),
  d = n("981631");
let u = {};

function c(e) {
  let t = u[e = null != e ? e : "null"];
  return null == t && (t = u[e] = {
    state: d.RTCConnectionStates.DISCONNECTED,
    quality: d.RTCConnectionQuality.UNKNOWN,
    pings: [],
    hostname: null,
    lossRate: null
  }), t
}

function f(e, t, n) {
  let i = u[e = null != e ? e : "null"];
  return null != i ? t(i) : n
}

function h(e) {
  let {
    lobbyId: t
  } = e;
  delete u[t]
}
class p extends(i = o.default.Store) {
  getConnectionState(e) {
    return f(e, e => {
      let {
        state: t
      } = e;
      return t
    }, d.RTCConnectionStates.DISCONNECTED)
  }
  getQuality(e) {
    return f(e, e => {
      let {
        quality: t
      } = e;
      return t
    }, d.RTCConnectionQuality.UNKNOWN)
  }
  getHostname(e) {
    return f(e, e => {
      let {
        hostname: t
      } = e;
      return t
    }, null)
  }
  getPings(e) {
    return f(e, e => {
      let {
        pings: t
      } = e;
      return t
    }, [])
  }
  getAveragePing(e) {
    let t = this.getPings(e);
    return 0 === t.length ? 0 : t.reduce((e, t) => e + t.value, 0) / t.length
  }
  getLastPing(e) {
    var t;
    let n = this.getPings(e);
    if (0 === n.length) return 0;
    return null === (t = n[n.length - 1]) || void 0 === t ? void 0 : t.value
  }
  getOutboundLossRate(e) {
    return f(e, e => {
      let {
        lossRate: t
      } = e;
      return t
    }, null)
  }
}
s = "OverlayRTCConnectionStore", (l = "displayName") in(a = p) ? Object.defineProperty(a, l, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = s, t.default = new p(r.default, {
  OVERLAY_INITIALIZE: function(e) {
    u = e.rtcConnectionStates
  },
  RTC_CONNECTION_STATE: function(e) {
    if (null != e.streamKey) return !1;
    let t = c(e.lobbyId);
    t.state = e.state, t.hostname = e.hostname
  },
  RTC_CONNECTION_PING: function(e) {
    let t = c(e.lobbyId);
    t.pings = e.pings, t.quality = e.quality
  },
  RTC_CONNECTION_LOSS_RATE: function(e) {
    c(e.lobbyId).lossRate = e.lossRate
  },
  LOBBY_DELETE: h,
  LOBBY_DISCONNECT: h
})