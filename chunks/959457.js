"use strict";
let i, r;
n(653041);
var s, o, a, l, u = n(512722),
  _ = n.n(u),
  d = n(392711),
  c = n.n(d),
  E = n(442837),
  I = n(46973),
  T = n(570140),
  h = n(594190),
  S = n(444852),
  f = n(569545),
  N = n(687516),
  A = n(139656),
  m = n(358085),
  O = n(199902),
  R = n(314897),
  C = n(592125),
  p = n(131951),
  g = n(158776),
  L = n(19780),
  v = n(981631),
  D = n(65154);
let M = {},
  P = {},
  y = {},
  U = {},
  b = v.hVg.THEATRE,
  G = {},
  w = [];

function k() {
  c().forEach(G, (e, t) => {
    e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect"), delete G[t]
  })
}

function B(e) {
  c().forEach(G, (t, n) => {
    t.updateStats(e)
  }), e.filter(e => {
    let {
      connection: t
    } = e;
    return t.context === D.Yn.STREAM
  }).forEach(e => {
    let {
      stats: t
    } = e;
    T.Z.dispatch({
      type: "STREAM_STATS_UPDATE",
      stats: t
    })
  })
}

function x() {
  return !0
}
class V extends(s = E.ZP.Store) {
  getActiveStreamKey() {
    return (0, A.Z)(p.Z) ? r : null
  }
  getAllActiveStreamKeys() {
    return Object.keys(G)
  }
  getRTCConnection(e) {
    return G[e]
  }
  getStatsHistory(e, t, n) {
    if (!(0, A.Z)(p.Z) || null == t) return null;
    if (n) {
      let n = O.Z.getActiveStreamForUser(t, e);
      if (null == n || 0 === O.Z.getViewerIds(n).length) return null
    }
    return w.map(e => n ? function(e) {
      var t, n, i, r, s;
      let o = e.find(e => "video" === e.type);
      return null != o && "video" === o.type ? {
        type: "streamer",
        packetsSentOrReceived: null !== (n = o.packetsSent) && void 0 !== n ? n : 0,
        packetsLost: null !== (i = o.packetsLost) && void 0 !== i ? i : 0,
        frameRate: null !== (r = o.frameRateEncode) && void 0 !== r ? r : 0,
        resolution: null !== (s = null === (t = o.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== s ? s : 0,
        bitrate: 0
      } : null
    }(e.rtp.outbound) : function(e) {
      var t, n, i, r, s, o;
      if (null == e) return null;
      let a = e.find(e => "video" === e.type);
      return null != a && "video" === a.type ? {
        type: "spectator",
        packetsSentOrReceived: null !== (n = a.packetsReceived) && void 0 !== n ? n : 0,
        packetsLost: null !== (i = a.packetsLost) && void 0 !== i ? i : 0,
        frameRate: null !== (r = a.frameRateDecode) && void 0 !== r ? r : 0,
        bitrate: null !== (s = a.bitrate) && void 0 !== s ? s : 0,
        resolution: null !== (o = null === (t = a.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== o ? o : 0
      } : null
    }(e.rtp.inbound[t]))
  }
  getQuality() {
    if (!(0, A.Z)(p.Z)) return v.IE4.UNKNOWN;
    let e = this.getActiveStreamKey(),
      t = null != e ? G[e] : null;
    return null != t ? t.quality : v.IE4.UNKNOWN
  }
  getMediaSessionId(e) {
    if (null == e) return null;
    let t = G[e];
    if (null != t) return null != t ? t.getMediaSessionId() : null
  }
  getRtcConnectionId(e) {
    if (null == e) return null;
    let t = G[e];
    if (null != t) return null != t ? t.getRTCConnectionId() : null
  }
  getVideoStats(e) {
    if (null == e) return null;
    let t = G[e];
    return null != t ? t.getVideoStats() : null
  }
  getHostname(e) {
    if (null == e) return "";
    let t = G[e];
    return null != t ? null != t.hostname ? t.hostname : "" : ""
  }
  getRegion(e) {
    if (null == e) return null;
    let t = G[e];
    return null != t ? t.getRegion() : null
  }
  getMaxViewers(e) {
    if (null == e) return null;
    let t = G[e];
    return null != t ? t.getMaxViewers() : null
  }
  getStreamSourceId(e) {
    return U[e]
  }
}
l = "StreamRTCConnectionStore", (a = "displayName") in(o = V) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.Z = new V(T.Z, !p.Z.isSupported() || __OVERLAY__ ? {} : {
  CONNECTION_OPEN: function(e) {
    i = e.sessionId, r = null, k()
  },
  CONNECTION_CLOSED: function() {
    i = null, r = null, k()
  },
  RTC_CONNECTION_STATE: x,
  RTC_CONNECTION_PING: x,
  RTC_CONNECTION_LOSS_RATE: x,
  RTC_CONNECTION_UPDATE_ID: function(e) {
    return c().some(G, t => t === e.connection)
  },
  STREAM_START: function(e) {
    let {
      streamType: t,
      guildId: n,
      channelId: i,
      appContext: r,
      pid: s,
      sourceId: o
    } = e, a = (0, f.V9)({
      streamType: t,
      guildId: n,
      channelId: i,
      ownerId: R.default.getId()
    });
    if (M[a] = r, c().forEach(G, e => {
        let {
          analyticsContext: t
        } = e;
        t.setActionContext(r)
      }), U[a] = o, y[a] = s, null != s) {
      let e = h.ZP.getGameForPID(s);
      null != e && (P[a] = {
        name: e.name,
        id: e.id,
        exe: e.exeName,
        distributor: e.distributor
      })
    }
  },
  STREAM_STOP: function(e) {
    let {
      appContext: t,
      streamKey: n
    } = e;
    M[n] = t, c().forEach(G, e => {
      let {
        analyticsContext: n
      } = e;
      n.setActionContext(t)
    }), U[n] = null, y[n] = null
  },
  STREAM_CREATE: function(e) {
    let {
      streamKey: t,
      rtcServerId: n,
      region: s,
      viewerIds: o
    } = e;
    r = t;
    let a = G[t];
    if (null == a && null != n) {
      var l, u, d;
      null == y[t] && (P[t] = null);
      let e = (0, f.my)(t);
      null == P[t] && null == U[t] && (P[t] = (0, N.L2)(e, g.Z));
      let r = C.Z.getChannel(e.channelId),
        c = null != r && r.isBroadcastChannel(),
        E = new S.A({
          streamRegion: s,
          streamApplication: P[t],
          streamSourceType: function(e) {
            var t, n, i;
            if (null == e) return "unknown";
            if (m.isPlatformEmbedded || (null === (t = platform) || void 0 === t ? void 0 : t.name) === "Chrome") {
              if (e.startsWith("web-contents-media-stream:")) return "tab";
              if (e.startsWith("window:")) return "window";
              else if (e.startsWith("screen:")) return "screen"
            } else if ((null === (n = platform) || void 0 === n ? void 0 : n.name) === "Firefox") return "" !== e ? "window" : "screen";
            else if ((null === (i = platform) || void 0 === i ? void 0 : i.name) === "Safari") return "window";
            return "unknown"
          }(U[t]),
          actionContext: M[t],
          numViewers: null != o ? o.length : 0,
          isBroadcast: c
        });
      l = t, u = n, d = E, _()(null != i, "Creating RTCConnection without session."), a = new S.Z({
        sessionId: i,
        streamKey: l,
        serverId: u,
        initialLayout: b,
        analyticsContext: d,
        isStreamer: null != P[l],
        parentMediaSessionId: L.Z.getMediaSessionId()
      }), G[t] = a
    }
    w = [], p.Z.getMediaEngine().on(I.aB.ConnectionStats, B)
  },
  STREAM_SERVER_UPDATE: function(e) {
    let t = G[e.streamKey];
    if (null == t) return !1;
    t.connect(e.endpoint, e.token)
  },
  STREAM_UPDATE: function(e) {
    let {
      streamKey: t,
      viewerIds: n,
      paused: i
    } = e, r = G[t];
    if (null == r) return !1;
    null != n && r.analyticsContext.trackViewerCount(n.length), r.streamUpdate(i)
  },
  STREAM_DELETE: function(e) {
    let {
      streamKey: t
    } = e, n = G[t];
    if (null == n) return !1;
    t === r && (r = null, p.Z.getMediaEngine().off(I.aB.ConnectionStats, B)), n.destroy("stream-end"), delete G[t]
  },
  STREAM_STATS_UPDATE: function(e) {
    let {
      stats: t
    } = e;
    if (null == t) return !1;
    w.push(t), w.length > 30 && w.shift()
  },
  STREAM_LAYOUT_UPDATE: function(e) {
    let {
      layout: t
    } = e;
    b = t, Object.values(G).forEach(e => e.layoutChange(t))
  },
  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: function(e) {
    let {
      userId: t,
      context: n,
      quality: i
    } = e;
    c().forEach(G, e => {
      e.setSimulcastDebugOverride(t, n, i)
    })
  }
})