"use strict";
let i, r;
n(411104), n(724458);
var s, o, a, l, u = n(442837),
  _ = n(570140),
  d = n(437263),
  c = n(764976),
  E = n(646047),
  I = n(258609),
  T = n(338336),
  h = n(314897),
  S = n(938475),
  f = n(981631),
  N = n(65154);
let A = [],
  m = null,
  O = null,
  R = null,
  C = null,
  p = !1,
  g = !1;

function L(e, t) {
  if (null == r) throw Error("Creating RTCConnection without session.");
  let i = h.default.getId(),
    s = new(n(861687)).Z({
      userId: i,
      sessionId: r,
      guildId: e,
      channelId: t
    });
  return s.on(d.z.State, (e, t, n) => {
    _.Z.wait(() => _.Z.dispatch({
      type: "RTC_CONNECTION_STATE",
      state: e,
      ...t,
      ...n
    }))
  }), s.on(d.z.Video, (e, t, n, i, r) => {
    _.Z.wait(() => _.Z.dispatch({
      type: "RTC_CONNECTION_VIDEO",
      guildId: e,
      channelId: t,
      userId: n,
      streamId: i,
      rtcServerId: r,
      context: N.Yn.DEFAULT
    }))
  }), s.on(d.z.Ping, (e, t) => {
    _.Z.wait(() => _.Z.dispatch({
      type: "RTC_CONNECTION_PING",
      pings: e,
      quality: t
    }))
  }), s.on(d.z.OutboundLossRate, e => {
    _.Z.wait(() => _.Z.dispatch({
      type: "RTC_CONNECTION_LOSS_RATE",
      lossRate: e
    }))
  }), s.on(d.z.Speaking, (e, t) => {
    null == R || R.setSpeaking(e, t)
  }), s.on(d.z.Flags, (e, t) => {
    _.Z.wait(() => {
      _.Z.dispatch({
        type: "RTC_CONNECTION_FLAGS",
        flags: t,
        userId: e,
        guildId: s.guildId,
        channelId: s.channelId,
        context: s.context
      })
    })
  }), s.on(d.z.ClientDisconnect, e => {
    _.Z.wait(() => {
      _.Z.dispatch({
        type: "RTC_CONNECTION_CLIENT_DISCONNECT",
        userId: e,
        guildId: s.guildId,
        channelId: s.channelId
      })
    })
  }), s.on(d.z.Platform, (e, t, n) => {
    _.Z.wait(() => {
      _.Z.dispatch({
        type: "RTC_CONNECTION_PLATFORM",
        platform: t,
        userId: e,
        channelId: n
      })
    })
  }), s.on(d.z.SecureFramesUpdate, e => {
    _.Z.wait(() => {
      _.Z.dispatch({
        type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE",
        state: e
      })
    })
  }), R = new c.Z(h.default.getId(), t), C = null, p = !1, g = !1, s
}

function v() {
  if (null == i) return !1;
  C = i.getDuration(), i.destroy(), i = null, R = null
}

function D() {
  m = null
}

function M(e) {
  let {
    channel: t
  } = e;
  if (null == i || i.channelId !== t.id) return !1;
  v()
}

function P() {
  return !0
}
class y extends(s = u.ZP.Store) {
  initialize() {
    this.waitFor(S.ZP), (0, T.r)(this.getRTCConnectionId, this.getMediaSessionId)
  }
  getRTCConnection() {
    return i
  }
  getState() {
    return null != i ? i.state : f.hes.DISCONNECTED
  }
  isConnected() {
    return this.getState() === f.hes.RTC_CONNECTED
  }
  isDisconnected() {
    return this.getState() === f.hes.DISCONNECTED
  }
  getRemoteDisconnectVoiceChannelId() {
    return m
  }
  getLastSessionVoiceChannelId() {
    return O
  }
  setLastSessionVoiceChannelId(e) {
    O = e
  }
  getGuildId() {
    return null == i ? void 0 : i.guildId
  }
  getChannelId() {
    return null == i ? void 0 : i.channelId
  }
  getHostname() {
    return null != i ? i.hostname : ""
  }
  getQuality() {
    return null != i ? i.quality : f.IE4.UNKNOWN
  }
  getPings() {
    return null != i ? i.getPings() : A
  }
  getAveragePing() {
    return null != i ? null == i ? void 0 : i.getAveragePing() : 0
  }
  getLastPing() {
    return null == i ? void 0 : i.getLastPing()
  }
  getOutboundLossRate() {
    return null == i ? void 0 : i.getOutboundLossRate()
  }
  getMediaSessionId() {
    return null == i ? void 0 : i.getMediaSessionId()
  }
  getRTCConnectionId() {
    return null == i ? void 0 : i.getRTCConnectionId()
  }
  getDuration() {
    var e;
    return null !== (e = null == i ? void 0 : i.getDuration()) && void 0 !== e ? e : C
  }
  getPacketStats() {
    return null == i ? void 0 : i.getPacketStats()
  }
  getVoiceStateStats() {
    return null == R ? void 0 : R.getStats()
  }
  getWasEverMultiParticipant() {
    return p
  }
  getWasEverRtcConnected() {
    return g
  }
  getSecureFramesState() {
    return null == i ? void 0 : i.getSecureFramesState()
  }
}
l = "RTCConnectionStore", (a = "displayName") in(o = y) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l;
let U = new y(_.Z, __OVERLAY__ ? {} : {
  CONNECTION_OPEN: function(e) {
    return r = e.sessionId, m = null, O = null, v(), !1
  },
  CONNECTION_CLOSED: function() {
    r = null, m = null, O = null, v()
  },
  RTC_CONNECTION_STATE: function(e) {
    return e.state === f.hes.RTC_CONNECTED && (g = !0), !0
  },
  RTC_CONNECTION_PING: P,
  RTC_CONNECTION_LOSS_RATE: P,
  RTC_CONNECTION_UPDATE_ID: function(e) {
    return e.connection === i
  },
  RTC_CONNECTION_SECURE_FRAMES_UPDATE: P,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      var n, s, o;
      if (null == R || R.updateVoiceStates(t.userId, t.channelId), p = p || (null !== (n = null == R ? void 0 : R.getStats().max_voice_state_count) && void 0 !== n ? n : 0) > 1, h.default.getId() !== t.userId) return !1;
      if (null != i) t.sessionId === r ? null != t.guildId && t.guildId === i.guildId || null == t.guildId && t.channelId === i.channelId ? null == t.channelId ? v() : i.channelId = t.channelId : (t.guildId !== i.guildId && null == t.channelId || v(), null != t.channelId && (m = null, O = null, i = L(t.guildId, t.channelId), p = (null !== (s = null == R ? void 0 : R.getStats().max_voice_state_count) && void 0 !== s ? s : 0) > 1)) : t.guildId === i.guildId && (!(null != I.Z.getAwaitingRemoteSessionInfo() && null != I.Z.getRemoteSessionId()) && (m = i.channelId), v());
      else {
        if (t.sessionId !== r || null == t.channelId) return e;
        m = null, O = null, i = L(t.guildId, t.channelId), p = (null !== (o = null == R ? void 0 : R.getStats().max_voice_state_count) && void 0 !== o ? o : 0) > 1
      }
      return !0
    }, !1)
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (null == i || null != t && i.channelId === t) return !1;
    v()
  },
  VOICE_SERVER_UPDATE: function(e) {
    if (null == i || null != e.guildId && e.guildId !== i.guildId || null != e.channelId && e.channelId !== i.channelId) return !1;
    i.connect(e.endpoint, e.token)
  },
  CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: D,
  REMOTE_SESSION_CONNECT: D,
  CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: function() {
    O = null
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    if (null == i || i.guildId !== t.id) return !1;
    v()
  },
  CHANNEL_DELETE: M,
  THREAD_DELETE: M,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    if (null == i || i.channelId !== t) return !1;
    v()
  },
  APP_STATE_UPDATE: function(e) {
    if (null != i) {
      let t = e.state === f.$7l.BACKGROUND,
        n = E.Z.isEnabled();
      i.setAppBackgrounded(t, n)
    }
    return e.state === f.$7l.ACTIVE && null != i && i.resetBackoff("App state is active"), !1
  },
  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: function(e) {
    let {
      userId: t,
      context: n,
      quality: r
    } = e;
    null == i || i.setSimulcastDebugOverride(t, n, r)
  }
});
Promise.resolve().then(n.bind(n, 626135)).then(e => {
  let {
    addExtraAnalyticsDecorator: t
  } = e;
  t(e => {
    e.client_rtc_state = U.getState()
  })
}), t.Z = U