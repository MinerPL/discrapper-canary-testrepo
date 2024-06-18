"use strict";
n.d(t, {
  J$: function() {
    return C
  },
  Pz: function() {
    return S
  },
  fZ: function() {
    return p
  }
}), n(47120), n(653041);
var i, r = n(442837),
  s = n(46973),
  o = n(570140),
  a = n(304680),
  l = n(131951),
  u = n(594174),
  _ = n(981631),
  d = n(65154);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let E = C(d.Yn.DEFAULT, _._s_.TRANSPORT, 0),
  I = E,
  T = {},
  h = new Map,
  S = {
    availableOutgoingBitrate: !0,
    bitrate: !0,
    bitrateTarget: !0,
    bytesReceived: !0,
    bytesSent: !0,
    encoderQualityPsnr: !0,
    encoderQualityVmaf: !0,
    encodeUsage: !0,
    frameRateDecode: !0,
    frameRateEncode: !0,
    frameRateInput: !0,
    frameRateNetwork: !0,
    frameRateRender: !0,
    inboundBitrateEstimate: !0,
    packetsLost: !0,
    packetsReceived: !0,
    packetsSent: !0,
    ping: !0
  };

function f(e, t, n) {
  return "".concat(e, ":").concat(t, ":").concat(n)
}

function N(e, t) {
  return "".concat(e, ":").concat(t)
}
class A {
  static empty() {
    return new A({})
  }
  put(e, t, n, i) {
    if ("" === i) {
      let i = {
        ...this.state
      };
      return delete i[f(e, t, n)], new A(i)
    }
    return new A({
      [f(e, t, n)]: i,
      ...this.state
    })
  }
  get(e, t, n) {
    let i = this.state[f(e, t, n)];
    return null != i ? i : null
  }
  constructor(e) {
    c(this, "state", void 0), this.state = e
  }
}
let m = A.empty(),
  O = !1,
  R = null;

function C(e, t, n) {
  return "".concat(e, ":").concat(t, ":").concat(n)
}

function p(e) {
  let [t, n] = e.split(":");
  return {
    context: t,
    section: n
  }
}

function g() {
  Object.values(d.Yn).forEach(e => {
    T[e] = {}
  })
}
g();

function L() {
  null != R && (R.destroy(), R = null)
}
class v extends(i = r.ZP.Store) {
  getSection() {
    return I
  }
  getStats() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.Yn.DEFAULT;
    return T[e][0]
  }
  getAllStats() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.Yn.DEFAULT;
    return Object.values(T[e])
  }
  getVideoStreams() {
    return m
  }
  shouldRecordNextConnection() {
    return O
  }
  getSimulcastDebugOverride(e, t) {
    let n = N(e, t);
    return h.has(n) ? h.get(n) : d.Z.NO_OVERRIDE
  }
}
c(v, "displayName", "RTCDebugStore"), t.ZP = new v(o.Z, {
  RTC_DEBUG_MODAL_OPEN: function(e) {
    var t;
    I = null !== (t = e.section) && void 0 !== t ? t : E
  },
  RTC_DEBUG_MODAL_CLOSE: function() {
    L()
  },
  RTC_DEBUG_MODAL_SET_SECTION: function(e) {
    I = e.section
  },
  RTC_DEBUG_MODAL_UPDATE: function(e) {
    let {
      context: t,
      stats: n,
      index: i
    } = e, r = T[t];
    if (null != n) {
      let [e, s, o] = I.split(":");
      if (e === t && parseInt(o) === i && null != u.default.getUser(s)) {
        let {
          rtp: {
            inbound: e
          }
        } = n;
        !Object.keys(e).includes(s) && (I = E)
      }
      r[i] = function e(t) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
          r = {};
        for (let [s, o] of Object.entries(t)) {
          let t = n[s];
          if (Array.isArray(o)) {
            if ("object" == typeof o[0]) {
              let n = Array.isArray(t) ? t : [],
                a = r[s] = [];
              for (let t = 0; t < o.length; t++) {
                let r = n[t],
                  s = "object" == typeof r ? r : {};
                a.push(e(o[t], s, i))
              }
            } else r[s] = o
          } else if ("object" == typeof o && null !== o) {
            let n = "object" == typeof t && null !== t ? t : {};
            r[s] = e(o, n, i)
          } else if (s in S && "number" == typeof o) {
            let e = r[s] = Array.isArray(t) ? t : [];
            e.push({
              value: o,
              time: i
            }), e.length > 600 && e.shift()
          } else r[s] = o
        }
        return r
      }(n, r[i])
    } else delete r[i]
  },
  RTC_DEBUG_MODAL_OPEN_REPLAY: function(e) {
    a.gl()
  },
  RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: function(e) {
    let {
      path: t
    } = e, n = l.Z.getMediaEngine();
    if (L(), !n.supports(d.AN.CONNECTION_REPLAY) || 0 === t.length) return;
    let i = n.createReplayConnection(d.Yn.DEFAULT, t);
    null != i && (R = i, i.on(s.Sh.Video, (e, t, n, r, s) => {
      o.Z.dispatch({
        type: "RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT",
        mediaEngineConnectionId: i.mediaEngineConnectionId,
        userId: e,
        videoSsrc: null != r ? r : 0,
        streamId: null != t ? t : ""
      })
    }), o.Z.wait(() => a.bA()))
  },
  RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: function(e) {
    m = m.put(e.mediaEngineConnectionId, e.userId, e.videoSsrc, e.streamId)
  },
  RTC_DEBUG_SET_RECORDING_FLAG: function(e) {
    let {
      value: t
    } = e;
    O = t
  },
  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: function(e) {
    let {
      userId: t,
      context: n,
      quality: i
    } = e;
    h.set(N(t, n), i)
  },
  VOICE_CHANNEL_SELECT: function(e) {
    null != e.channelId && (g(), h.clear())
  }
}), l.Z.getMediaEngine().on(s.aB.ConnectionStats, function(e) {
  Object.values(d.Yn).forEach(t => {
    e.filter(e => {
      let {
        connection: n
      } = e;
      return n.context === t
    }).forEach((e, n) => {
      o.Z.dispatch({
        type: "RTC_DEBUG_MODAL_UPDATE",
        stats: e.stats,
        context: t,
        index: n,
        mediaEngineConnectionId: e.connection.mediaEngineConnectionId
      })
    })
  })
})