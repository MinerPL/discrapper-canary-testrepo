let r, i;
n(653041);
var a,
    s,
    o,
    l,
    u = n(512722),
    c = n.n(u),
    d = n(392711),
    _ = n.n(d),
    E = n(442837),
    f = n(46973),
    h = n(570140),
    p = n(594190),
    I = n(444852),
    m = n(569545),
    T = n(687516),
    S = n(139656),
    g = n(358085),
    A = n(199902),
    N = n(314897),
    O = n(131951),
    R = n(158776),
    v = n(19780),
    C = n(981631),
    L = n(65154);
let y = {},
    D = {},
    b = {},
    M = {},
    P = C.hVg.THEATRE,
    U = {},
    w = [];
function x() {
    _().forEach(U, (e, t) => {
        e.destroy(e.isOwner ? 'sender-disconnect' : 'receiver-disconnect'), delete U[t];
    });
}
function G(e) {
    _().forEach(U, (t, n) => {
        t.updateStats(e);
    }),
        e
            .filter((e) => {
                let { connection: t } = e;
                return t.context === L.Yn.STREAM;
            })
            .forEach((e) => {
                let { stats: t } = e;
                h.Z.dispatch({
                    type: 'STREAM_STATS_UPDATE',
                    stats: t
                });
            });
}
function k() {
    return !0;
}
class B extends (a = E.ZP.Store) {
    getActiveStreamKey() {
        return (0, S.Z)(O.Z) ? i : null;
    }
    getRTCConnections() {
        return U;
    }
    getAllActiveStreamKeys() {
        return Object.keys(U);
    }
    getRTCConnection(e) {
        return U[e];
    }
    getStatsHistory(e, t, n) {
        if (!(0, S.Z)(O.Z) || null == t) return null;
        if (n) {
            let n = A.Z.getActiveStreamForUser(t, e);
            if (null == n || 0 === A.Z.getViewerIds(n).length) return null;
        }
        return w.map((e) =>
            n
                ? (function (e) {
                      var t, n, r, i, a;
                      let s = e.find((e) => 'video' === e.type);
                      return null != s && 'video' === s.type
                          ? {
                                type: 'streamer',
                                packetsSentOrReceived: null !== (n = s.packetsSent) && void 0 !== n ? n : 0,
                                packetsLost: null !== (r = s.packetsLost) && void 0 !== r ? r : 0,
                                frameRate: null !== (i = s.frameRateEncode) && void 0 !== i ? i : 0,
                                resolution: null !== (a = null === (t = s.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== a ? a : 0,
                                bitrate: 0
                            }
                          : null;
                  })(e.rtp.outbound)
                : (function (e) {
                      var t, n, r, i, a, s;
                      if (null == e) return null;
                      let o = e.find((e) => 'video' === e.type);
                      return null != o && 'video' === o.type
                          ? {
                                type: 'spectator',
                                packetsSentOrReceived: null !== (n = o.packetsReceived) && void 0 !== n ? n : 0,
                                packetsLost: null !== (r = o.packetsLost) && void 0 !== r ? r : 0,
                                frameRate: null !== (i = o.frameRateDecode) && void 0 !== i ? i : 0,
                                bitrate: null !== (a = o.bitrate) && void 0 !== a ? a : 0,
                                resolution: null !== (s = null === (t = o.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== s ? s : 0
                            }
                          : null;
                  })(e.rtp.inbound[t])
        );
    }
    getQuality() {
        if (!(0, S.Z)(O.Z)) return C.IE4.UNKNOWN;
        let e = this.getActiveStreamKey(),
            t = null != e ? U[e] : null;
        return null != t ? t.quality : C.IE4.UNKNOWN;
    }
    getMediaSessionId(e) {
        if (null == e) return null;
        let t = U[e];
        if (null != t) return null != t ? t.getMediaSessionId() : null;
    }
    getRtcConnectionId(e) {
        if (null == e) return null;
        let t = U[e];
        if (null != t) return null != t ? t.getRTCConnectionId() : null;
    }
    getVideoStats(e) {
        if (null == e) return null;
        let t = U[e];
        return null != t ? t.getVideoStats() : null;
    }
    getHostname(e) {
        if (null == e) return '';
        let t = U[e];
        return null != t ? (null != t.hostname ? t.hostname : '') : '';
    }
    getRegion(e) {
        if (null == e) return null;
        let t = U[e];
        return null != t ? t.getRegion() : null;
    }
    getMaxViewers(e) {
        if (null == e) return null;
        let t = U[e];
        return null != t ? t.getMaxViewers() : null;
    }
    getStreamSourceId(e) {
        return M[e];
    }
    getUserIds(e) {
        let t = U[e];
        return null == t ? void 0 : t.getUserIds();
    }
    isUserConnected(e, t) {
        let n = U[e];
        return null == n ? void 0 : n.getIsUserConnected(t);
    }
    getSecureFramesState(e) {
        let t = U[e];
        return null == t ? void 0 : t.getSecureFramesState();
    }
    getSecureFramesRosterMapEntry(e, t) {
        let n = U[e],
            r = null == n ? void 0 : n.getSecureFramesRosterMap();
        return null == r ? void 0 : r.get(t);
    }
}
(l = 'StreamRTCConnectionStore'),
    (o = 'displayName') in (s = B)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.Z = new B(
        h.Z,
        !O.Z.isSupported() || __OVERLAY__
            ? {}
            : {
                  CONNECTION_OPEN: function (e) {
                      (r = e.sessionId), (i = null), x();
                  },
                  CONNECTION_CLOSED: function () {
                      (r = null), (i = null), x();
                  },
                  RTC_CONNECTION_STATE: k,
                  RTC_CONNECTION_PING: k,
                  RTC_CONNECTION_LOSS_RATE: k,
                  RTC_CONNECTION_UPDATE_ID: function (e) {
                      return _().some(U, (t) => t === e.connection);
                  },
                  RTC_CONNECTION_SECURE_FRAMES_UPDATE: k,
                  STREAM_START: function (e) {
                      let { streamType: t, guildId: n, channelId: r, appContext: i, pid: a, sourceId: s } = e,
                          o = (0, m.V9)({
                              streamType: t,
                              guildId: n,
                              channelId: r,
                              ownerId: N.default.getId()
                          });
                      if (
                          ((y[o] = i),
                          _().forEach(U, (e) => {
                              let { analyticsContext: t } = e;
                              t.setActionContext(i);
                          }),
                          (M[o] = s),
                          (b[o] = a),
                          null != a)
                      ) {
                          let e = p.ZP.getGameForPID(a);
                          null != e &&
                              (D[o] = {
                                  name: e.name,
                                  id: e.id,
                                  exe: e.exeName,
                                  distributor: e.distributor
                              });
                      }
                  },
                  STREAM_STOP: function (e) {
                      let { appContext: t, streamKey: n } = e;
                      (y[n] = t),
                          _().forEach(U, (e) => {
                              let { analyticsContext: n } = e;
                              n.setActionContext(t);
                          }),
                          (M[n] = null),
                          (b[n] = null);
                  },
                  STREAM_CREATE: function (e) {
                      let { streamKey: t, rtcServerId: n, region: a, viewerIds: s } = e;
                      i = t;
                      let o = U[t];
                      if (null == o && null != n) {
                          var l, u, d;
                          null == b[t] && (D[t] = null);
                          let e = (0, m.my)(t);
                          null == D[t] && null == M[t] && (D[t] = (0, T.L2)(e, R.Z));
                          let i = new I.A({
                              streamRegion: a,
                              streamApplication: D[t],
                              streamSourceType: (function (e) {
                                  var t, n, r;
                                  if (null == e) return 'unknown';
                                  if (g.isPlatformEmbedded || (null === (t = platform) || void 0 === t ? void 0 : t.name) === 'Chrome') {
                                      if (e.startsWith('web-contents-media-stream:')) return 'tab';
                                      if (e.startsWith('window:')) return 'window';
                                      else if (e.startsWith('screen:')) return 'screen';
                                  } else if ((null === (n = platform) || void 0 === n ? void 0 : n.name) === 'Firefox') return '' !== e ? 'window' : 'screen';
                                  else if ((null === (r = platform) || void 0 === r ? void 0 : r.name) === 'Safari') return 'window';
                                  return 'unknown';
                              })(M[t]),
                              actionContext: y[t],
                              numViewers: null != s ? s.length : 0
                          });
                          (l = t),
                              (u = n),
                              (d = i),
                              c()(null != r, 'Creating RTCConnection without session.'),
                              (o = new I.Z({
                                  sessionId: r,
                                  streamKey: l,
                                  serverId: u,
                                  initialLayout: P,
                                  analyticsContext: d,
                                  isStreamer: null != D[l],
                                  parentMediaSessionId: v.Z.getMediaSessionId()
                              })),
                              (U[t] = o);
                      }
                      (w = []), O.Z.getMediaEngine().on(f.aB.ConnectionStats, G);
                  },
                  STREAM_SERVER_UPDATE: function (e) {
                      let t = U[e.streamKey];
                      if (null == t) return !1;
                      t.connect(e.endpoint, e.token);
                  },
                  STREAM_UPDATE: function (e) {
                      let { streamKey: t, viewerIds: n, paused: r } = e,
                          i = U[t];
                      if (null == i) return !1;
                      null != n && i.analyticsContext.trackViewerCount(n.length), i.streamUpdate(r);
                  },
                  STREAM_DELETE: function (e) {
                      let { streamKey: t } = e,
                          n = U[t];
                      if (null == n) return !1;
                      t === i && ((i = null), O.Z.getMediaEngine().off(f.aB.ConnectionStats, G)), n.destroy('stream-end'), delete U[t];
                  },
                  STREAM_STATS_UPDATE: function (e) {
                      let { stats: t } = e;
                      if (null == t) return !1;
                      w.push(t), w.length > 30 && w.shift();
                  },
                  STREAM_LAYOUT_UPDATE: function (e) {
                      let { layout: t } = e;
                      (P = t), Object.values(U).forEach((e) => e.layoutChange(t));
                  },
                  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: function (e) {
                      let { userId: t, context: n, quality: r } = e;
                      _().forEach(U, (e) => {
                          e.setSimulcastDebugOverride(t, n, r);
                      });
                  }
              }
    ));
