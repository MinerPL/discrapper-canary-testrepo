let r, i;
n(653041);
var a, s, o, l, u = n(512722),
  c = n.n(u),
  d = n(392711),
  _ = n.n(d),
  E = n(442837),
  f = n(46973),
  h = n(570140),
  p = n(594190),
  m = n(444852),
  I = n(569545),
  T = n(687516),
  g = n(139656),
  S = n(358085),
  A = n(199902),
  N = n(314897),
  v = n(592125),
  O = n(131951),
  R = n(158776),
  C = n(19780),
  y = n(981631),
  D = n(65154);
let L = {},
  b = {},
  M = {},
  P = {},
  U = y.hVg.THEATRE,
  w = {},
  x = [];

function G() {
  _().forEach(w, (e, t) => {
e.destroy(e.isOwner ? 'sender-disconnect' : 'receiver-disconnect'), delete w[t];
  });
}

function k(e) {
  _().forEach(w, (t, n) => {
t.updateStats(e);
  }), e.filter(e => {
let {
  connection: t
} = e;
return t.context === D.Yn.STREAM;
  }).forEach(e => {
let {
  stats: t
} = e;
h.Z.dispatch({
  type: 'STREAM_STATS_UPDATE',
  stats: t
});
  });
}

function B() {
  return !0;
}
class F extends(a = E.ZP.Store) {
  getActiveStreamKey() {
return (0, g.Z)(O.Z) ? i : null;
  }
  getAllActiveStreamKeys() {
return Object.keys(w);
  }
  getRTCConnection(e) {
return w[e];
  }
  getStatsHistory(e, t, n) {
if (!(0, g.Z)(O.Z) || null == t)
  return null;
if (n) {
  let n = A.Z.getActiveStreamForUser(t, e);
  if (null == n || 0 === A.Z.getViewerIds(n).length)
    return null;
}
return x.map(e => n ? function(e) {
  var t, n, r, i, a;
  let s = e.find(e => 'video' === e.type);
  return null != s && 'video' === s.type ? {
    type: 'streamer',
    packetsSentOrReceived: null !== (n = s.packetsSent) && void 0 !== n ? n : 0,
    packetsLost: null !== (r = s.packetsLost) && void 0 !== r ? r : 0,
    frameRate: null !== (i = s.frameRateEncode) && void 0 !== i ? i : 0,
    resolution: null !== (a = null === (t = s.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== a ? a : 0,
    bitrate: 0
  } : null;
}(e.rtp.outbound) : function(e) {
  var t, n, r, i, a, s;
  if (null == e)
    return null;
  let o = e.find(e => 'video' === e.type);
  return null != o && 'video' === o.type ? {
    type: 'spectator',
    packetsSentOrReceived: null !== (n = o.packetsReceived) && void 0 !== n ? n : 0,
    packetsLost: null !== (r = o.packetsLost) && void 0 !== r ? r : 0,
    frameRate: null !== (i = o.frameRateDecode) && void 0 !== i ? i : 0,
    bitrate: null !== (a = o.bitrate) && void 0 !== a ? a : 0,
    resolution: null !== (s = null === (t = o.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== s ? s : 0
  } : null;
}(e.rtp.inbound[t]));
  }
  getQuality() {
if (!(0, g.Z)(O.Z))
  return y.IE4.UNKNOWN;
let e = this.getActiveStreamKey(),
  t = null != e ? w[e] : null;
return null != t ? t.quality : y.IE4.UNKNOWN;
  }
  getMediaSessionId(e) {
if (null == e)
  return null;
let t = w[e];
if (null != t)
  return null != t ? t.getMediaSessionId() : null;
  }
  getRtcConnectionId(e) {
if (null == e)
  return null;
let t = w[e];
if (null != t)
  return null != t ? t.getRTCConnectionId() : null;
  }
  getVideoStats(e) {
if (null == e)
  return null;
let t = w[e];
return null != t ? t.getVideoStats() : null;
  }
  getHostname(e) {
if (null == e)
  return '';
let t = w[e];
return null != t ? null != t.hostname ? t.hostname : '' : '';
  }
  getRegion(e) {
if (null == e)
  return null;
let t = w[e];
return null != t ? t.getRegion() : null;
  }
  getMaxViewers(e) {
if (null == e)
  return null;
let t = w[e];
return null != t ? t.getMaxViewers() : null;
  }
  getStreamSourceId(e) {
return P[e];
  }
}
l = 'StreamRTCConnectionStore', (o = 'displayName') in(s = F) ? Object.defineProperty(s, o, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = l, t.Z = new F(h.Z, !O.Z.isSupported() || __OVERLAY__ ? {} : {
  CONNECTION_OPEN: function(e) {
r = e.sessionId, i = null, G();
  },
  CONNECTION_CLOSED: function() {
r = null, i = null, G();
  },
  RTC_CONNECTION_STATE: B,
  RTC_CONNECTION_PING: B,
  RTC_CONNECTION_LOSS_RATE: B,
  RTC_CONNECTION_UPDATE_ID: function(e) {
return _().some(w, t => t === e.connection);
  },
  STREAM_START: function(e) {
let {
  streamType: t,
  guildId: n,
  channelId: r,
  appContext: i,
  pid: a,
  sourceId: s
} = e, o = (0, I.V9)({
  streamType: t,
  guildId: n,
  channelId: r,
  ownerId: N.default.getId()
});
if (L[o] = i, _().forEach(w, e => {
    let {
      analyticsContext: t
    } = e;
    t.setActionContext(i);
  }), P[o] = s, M[o] = a, null != a) {
  let e = p.ZP.getGameForPID(a);
  null != e && (b[o] = {
    name: e.name,
    id: e.id,
    exe: e.exeName,
    distributor: e.distributor
  });
}
  },
  STREAM_STOP: function(e) {
let {
  appContext: t,
  streamKey: n
} = e;
L[n] = t, _().forEach(w, e => {
  let {
    analyticsContext: n
  } = e;
  n.setActionContext(t);
}), P[n] = null, M[n] = null;
  },
  STREAM_CREATE: function(e) {
let {
  streamKey: t,
  rtcServerId: n,
  region: a,
  viewerIds: s
} = e;
i = t;
let o = w[t];
if (null == o && null != n) {
  var l, u, d;
  null == M[t] && (b[t] = null);
  let e = (0, I.my)(t);
  null == b[t] && null == P[t] && (b[t] = (0, T.L2)(e, R.Z));
  let i = v.Z.getChannel(e.channelId),
    _ = null != i && i.isBroadcastChannel(),
    E = new m.A({
      streamRegion: a,
      streamApplication: b[t],
      streamSourceType: function(e) {
        var t, n, r;
        if (null == e)
          return 'unknown';
        if (S.isPlatformEmbedded || (null === (t = platform) || void 0 === t ? void 0 : t.name) === 'Chrome') {
          if (e.startsWith('web-contents-media-stream:'))
            return 'tab';
          if (e.startsWith('window:'))
            return 'window';
          else if (e.startsWith('screen:'))
            return 'screen';
        } else if ((null === (n = platform) || void 0 === n ? void 0 : n.name) === 'Firefox')
          return '' !== e ? 'window' : 'screen';
        else if ((null === (r = platform) || void 0 === r ? void 0 : r.name) === 'Safari')
          return 'window';
        return 'unknown';
      }(P[t]),
      actionContext: L[t],
      numViewers: null != s ? s.length : 0,
      isBroadcast: _
    });
  l = t, u = n, d = E, c()(null != r, 'Creating RTCConnection without session.'), o = new m.Z({
    sessionId: r,
    streamKey: l,
    serverId: u,
    initialLayout: U,
    analyticsContext: d,
    isStreamer: null != b[l],
    parentMediaSessionId: C.Z.getMediaSessionId()
  }), w[t] = o;
}
x = [], O.Z.getMediaEngine().on(f.aB.ConnectionStats, k);
  },
  STREAM_SERVER_UPDATE: function(e) {
let t = w[e.streamKey];
if (null == t)
  return !1;
t.connect(e.endpoint, e.token);
  },
  STREAM_UPDATE: function(e) {
let {
  streamKey: t,
  viewerIds: n,
  paused: r
} = e, i = w[t];
if (null == i)
  return !1;
null != n && i.analyticsContext.trackViewerCount(n.length), i.streamUpdate(r);
  },
  STREAM_DELETE: function(e) {
let {
  streamKey: t
} = e, n = w[t];
if (null == n)
  return !1;
t === i && (i = null, O.Z.getMediaEngine().off(f.aB.ConnectionStats, k)), n.destroy('stream-end'), delete w[t];
  },
  STREAM_STATS_UPDATE: function(e) {
let {
  stats: t
} = e;
if (null == t)
  return !1;
x.push(t), x.length > 30 && x.shift();
  },
  STREAM_LAYOUT_UPDATE: function(e) {
let {
  layout: t
} = e;
U = t, Object.values(w).forEach(e => e.layoutChange(t));
  },
  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: function(e) {
let {
  userId: t,
  context: n,
  quality: r
} = e;
_().forEach(w, e => {
  e.setSimulcastDebugOverride(t, n, r);
});
  }
});