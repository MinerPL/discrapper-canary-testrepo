"use strict";
n(724458);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  d = n(287734),
  c = n(710845),
  E = n(569545),
  I = n(581883),
  T = n(314897),
  h = n(523746),
  S = n(592125),
  f = n(131951),
  N = n(19780),
  A = n(936349),
  m = n(944486),
  O = n(885110),
  R = n(959457),
  C = n(358085),
  p = n(138859),
  g = n(955132),
  L = n(645436),
  v = n(344651),
  D = n(981631),
  M = n(526761);
let P = window.DiscordNative;
g.Wb.dispatcher.getDispatchHandler = v.Z;
let y = new c.Z("ConnectionStore"),
  U = 0,
  b = null,
  G = !0,
  w = null;
async function k(e) {
  U = Date.now(), b = e.sessionId, g.RR.handleConnectionOpen();
  let t = {},
    n = m.Z.getVoiceChannelId();
  if (null != n) {
    var i, r, s, o, a, l, u, _;
    if ((null === (a = window) || void 0 === a ? void 0 : null === (o = a.performance) || void 0 === o ? void 0 : null === (s = o.getEntriesByType) || void 0 === s ? void 0 : null === (r = s.call(o, "navigation")) || void 0 === r ? void 0 : null === (i = r[0]) || void 0 === i ? void 0 : i.type) === "reload" || (null === (l = await (null == P ? void 0 : null === (_ = P.processUtils) || void 0 === _ ? void 0 : null === (u = _.getLastCrash) || void 0 === u ? void 0 : u.call(_))) || void 0 === l ? void 0 : l.rendererCrashReason) != null || !G) {
      let e = S.Z.getChannel(n);
      null != e && (t = {
        guildId: e.getGuildId(),
        channelId: n
      })
    } else N.Z.setLastSessionVoiceChannelId(null != n ? n : null), d.default.selectVoiceChannel(null)
  }
  g.GC.update(t, !0), G = !1
}

function B() {
  g.GC.update()
}

function x() {
  return g.GC.update(), !1
}

function V() {
  return g.RR.update(), !1
}

function Z(e) {
  g.Wb.isSessionEstablished() && g.Wb.streamDelete(e)
}
class H extends(i = u.ZP.Store) {
  initialize() {
    this.waitFor(T.default, m.Z, S.Z, h.Z, I.Z), this.syncWith([f.Z], x), this.syncWith([O.Z], V)
  }
  getSocket() {
    return g.Wb
  }
  isTryingToConnect() {
    return !g.Wb.isClosed()
  }
  isConnected() {
    return g.Wb.isSessionEstablished()
  }
  isConnectedOrOverlay() {
    return g.Wb.isSessionEstablished() || __OVERLAY__
  }
  lastTimeConnectedChanged() {
    return U
  }
}
o = "GatewayConnectionStore", (s = "displayName") in(r = H) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new H(_.Z, {
  START_SESSION: function() {
    return g.Wb.isClosed() ? (y.verbose("Socket is reconnecting because of starting new session"), g.Wb.connect()) : (y.verbose("Socket is not reconnecting during a new session because it is not closed"), !1)
  },
  LOGIN_SUCCESS: function() {
    return y.verbose("session refresh dispatched", {
      isEstablished: g.Wb.isSessionEstablished()
    }), !!g.Wb.isSessionEstablished() && (g.Wb.close(), g.Wb.connect())
  },
  LOGOUT: function(e) {
    e.isSwitchingAccount && g.RR.handleAccountSwitch(), y.verbose("Closing socket because of logout"), g.Wb.close()
  },
  CLEAR_CACHES: function(e) {
    return e.resetSocket && (g.Wb.close(), g.Wb.dispatcher.clear(), g.Wb.connect()), !1
  },
  CONNECTION_OPEN: e => {
    k(e)
  },
  CONNECTION_CLOSED: function() {
    y.verbose("connection closed dispatched"), U = Date.now()
  },
  RTC_CONNECTION_STATE: function(e) {
    if (e.state !== D.hes.DISCONNECTED) return !1;
    e.willReconnect && (null != e.streamKey ? g.Wb.streamPing(e.streamKey) : g.Wb.voiceServerPing())
  },
  VOICE_CHANNEL_SELECT: function(e) {
    return g.GC.update({
      guildId: e.guildId,
      channelId: e.channelId
    }), (0, C.isIOS)() && null == e.channelId && w === D.$7l.BACKGROUND && g.Wb.close(!0), !1
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      if (T.default.getId() !== t.userId) return e;
      if (t.sessionId === b) g.GC.setState({
        guildId: t.guildId,
        channelId: t.channelId
      });
      else {
        if (t.guildId !== g.GC.guildId) return e;
        g.GC.setState({
          guildId: null,
          channelId: null
        })
      }
      return !0
    }, !1)
  },
  GUILD_DELETE: function(e) {
    e.guild.id === g.GC.guildId && g.GC.setState({
      guildId: null,
      channelId: null
    })
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    t.id === g.GC.channelId && g.GC.setState({
      guildId: null,
      channelId: null
    })
  },
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    t === g.GC.channelId && g.GC.setState({
      guildId: null,
      channelId: null
    })
  },
  APP_STATE_UPDATE: function(e) {
    return (0, C.isIOS)() ? (T.default.isAuthenticated() && (w === D.$7l.INACTIVE && e.state === D.$7l.BACKGROUND && null == g.GC.channelId ? g.Wb.close(!0) : w === D.$7l.BACKGROUND && e.state === D.$7l.ACTIVE && (L.Y(!1), g.Wb.connect())), w = e.state) : e.state === D.$7l.ACTIVE && (L.Y(!1), T.default.isAuthenticated() && g.Wb.resetBackoff("App state is active")), !1
  },
  GUILD_MEMBERS_REQUEST: function(e) {
    return g.Wb.isSessionEstablished() && ("userIds" in e ? l()(e.userIds).chunk(100).forEach(t => {
      g.Wb.requestGuildMembers(e.guildIds, {
        userIds: t,
        presences: !!e.presences
      })
    }) : g.Wb.requestGuildMembers(e.guildIds, {
      query: e.query,
      limit: e.limit,
      presences: !!e.presences
    })), !1
  },
  GUILD_SEARCH_RECENT_MEMBERS: function(e) {
    let {
      guildId: t,
      query: n,
      continuationToken: i
    } = e;
    g.Wb.isSessionEstablished() && g.Wb.searchRecentMembers(t, {
      query: n,
      continuationToken: i
    })
  },
  GUILD_SUBSCRIPTIONS_FLUSH: function(e) {
    let {
      subscriptions: t
    } = e;
    return g.Wb.isSessionEstablished() && g.Wb.updateGuildSubscriptions(t), !1
  },
  CALL_CONNECT: function(e) {
    let {
      channelId: t
    } = e;
    return g.Wb.isSessionEstablished() && g.Wb.callConnect(t), !1
  },
  CALL_CONNECT_MULTIPLE: function(e) {
    let {
      channelIds: t
    } = e;
    return g.Wb.isSessionEstablished() && t.forEach(e => {
      g.Wb.callConnect(e)
    }), !1
  },
  STREAM_CREATE: B,
  STREAM_START: function(e) {
    let {
      streamType: t,
      guildId: n,
      channelId: i
    } = e;
    if (g.Wb.isSessionEstablished()) {
      var r, s;
      let e = null != n ? null === (r = S.Z.getChannel(i)) || void 0 === r ? void 0 : r.rtcRegion : null === (s = h.Z.getCall(i)) || void 0 === s ? void 0 : s.region;
      g.Wb.streamCreate(t, n, i, null != e ? e : A.Z.getPreferredRegion())
    }
    return !1
  },
  STREAM_WATCH: function(e) {
    let {
      streamKey: t,
      allowMultiple: n
    } = e;
    return g.Wb.isSessionEstablished() && (n || ! function() {
      let e = function() {
        return R.Z.getAllActiveStreamKeys().find(e => (0, E.my)(e).ownerId === T.default.getId())
      }();
      R.Z.getAllActiveStreamKeys().filter(t => t !== e).forEach(e => Z(e))
    }(), g.Wb.streamWatch(t)), !1
  },
  STREAM_STOP: function(e) {
    let {
      streamKey: t
    } = e;
    return Z(t), B(), !1
  },
  STREAM_SET_PAUSED: function(e) {
    let {
      streamKey: t,
      paused: n
    } = e;
    g.Wb.isSessionEstablished() && g.Wb.streamSetPaused(t, n)
  },
  PUSH_NOTIFICATION_CLICK: function() {
    return g.Wb.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1
  },
  EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
    var t, n;
    let {
      channelId: i,
      applicationId: r
    } = e, s = null !== (n = null === (t = S.Z.getChannel(i)) || void 0 === t ? void 0 : t.getGuildId()) && void 0 !== n ? n : null;
    g.Wb.embeddedActivityClose(s, i, r)
  },
  REQUEST_FORUM_UNREADS: function(e) {
    let {
      guildId: t,
      channelId: n,
      threads: i
    } = e;
    g.Wb.requestForumUnreads(t, n, i)
  },
  REQUEST_SOUNDBOARD_SOUNDS: function(e) {
    let {
      guildIds: t
    } = e;
    g.Wb.requestSoundboardSounds(t)
  },
  REMOTE_COMMAND: function(e) {
    let {
      sessionId: t,
      payload: n
    } = e;
    return g.Wb.isSessionEstablished() && g.Wb.remoteCommand(t, n), !1
  },
  RESET_SOCKET: function(e) {
    if (g.Wb.connectionState !== p.Z.WILL_RECONNECT) g.Wb.resetSocketOnError(e.args)
  },
  RTC_SPEED_TEST_START_TEST: function() {
    return g.Wb.isSessionEstablished() && g.Wb.speedTestCreate(A.Z.getPreferredRegion()), !1
  },
  RTC_SPEED_TEST_STOP_TEST: function() {
    return g.Wb.isSessionEstablished() && g.Wb.speedTestDelete(), !1
  },
  CLIPS_SETTINGS_UPDATE: B,
  RUNNING_GAMES_CHANGE: B,
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    var t;
    e.settings.type === M.yP.PRELOADED_USER_SETTINGS && (null === (t = e.settings.proto.clips) || void 0 === t ? void 0 : t.allowVoiceRecording) != null && B()
  }
})