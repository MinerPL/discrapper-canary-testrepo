"use strict";
let i, s, r, a;
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("222007"), n("424973"), n("808653");
var o = n("446674"),
  l = n("913144"),
  u = n("76393"),
  d = n("374014"),
  c = n("223913"),
  f = n("537429"),
  _ = n("271938"),
  h = n("42203"),
  g = n("305961"),
  m = n("42887"),
  E = n("957255"),
  p = n("945956"),
  v = n("568307"),
  S = n("18494"),
  T = n("800762"),
  I = n("49111"),
  C = n("706530");
let A = null,
  y = {},
  N = null;

function R() {
  i = new Map, s = {}, r = {}, a = {}, y = {}
}
R();

function O(e) {
  i.delete(e)
}

function D() {
  let e = [];
  for (let t in s) {
    let n = s[t];
    for (let i in n) e.push(s[t][i])
  }
  return e
}

function P(e) {
  let {
    streamKey: t,
    region: n,
    viewerIds: s,
    paused: a
  } = e;
  i.set(t, {
    ...(0, d.decodeStreamKey)(t),
    state: a ? I.ApplicationStreamStates.PAUSED : I.ApplicationStreamStates.ACTIVE
  }), r[t] = {
    streamKey: t,
    region: n,
    viewerIds: s
  }
}

function b(e, t) {
  return e === C.StreamTypes.CALL || E.default.canWithPartialContext(I.Permissions.VIEW_CHANNEL, {
    channelId: t
  })
}

function L(e) {
  let t = h.default.getChannel(e.channelId);
  return !!b(e.streamType, e.channelId) || null != t && (0, c.canWatchStream)(t, T.default, g.default, E.default, u.default)[0]
}
class M extends o.default.Store {
  initialize() {
    this.syncWith([E.default], () => !0), this.waitFor(v.default, E.default)
  }
  isSelfStreamHidden(e) {
    var t;
    return null !== (t = y[e]) && void 0 !== t && t
  }
  getLastActiveStream() {
    var e;
    return (0, f.default)(m.default) ? null !== (e = Array.from(i.values()).pop()) && void 0 !== e ? e : null : null
  }
  getAllActiveStreams() {
    return (0, f.default)(m.default) ? Array.from(i.values()) : []
  }
  getAllActiveStreamsForChannel(e) {
    return (0, f.default)(m.default) ? Array.from(i.values()).filter(t => t.channelId === e) : []
  }
  getActiveStreamForStreamKey(e) {
    var t;
    return (0, f.default)(m.default) ? null !== (t = i.get(e)) && void 0 !== t ? t : null : null
  }
  getActiveStreamForApplicationStream(e) {
    var t;
    if (!(0, f.default)(m.default) || null == e) return null;
    let n = (0, d.encodeStreamKey)(e);
    return null !== (t = this.getActiveStreamForStreamKey(n)) && void 0 !== t ? t : null
  }
  getCurrentUserActiveStream() {
    let e = S.default.getVoiceChannelId(),
      t = h.default.getChannel(e);
    return null == t ? null : this.getActiveStreamForUser(_.default.getId(), t.getGuildId())
  }
  getActiveStreamForUser(e, t) {
    var n;
    let i = this.getStreamForUser(e, t);
    return null != i ? this.getActiveStreamForApplicationStream(i) : null !== (n = this.getAllActiveStreams().find(t => t.ownerId === e)) && void 0 !== n ? n : null
  }
  getStreamerActiveStreamMetadata() {
    var e;
    let t = S.default.getVoiceChannelId(),
      n = h.default.getChannel(t);
    if (null == n) return null;
    let i = this.getActiveStreamForUser(_.default.getId(), n.getGuildId());
    return null == i ? null : null !== (e = a[(0, d.encodeStreamKey)(i)]) && void 0 !== e ? e : null
  }
  getAnyStreamForUser(e) {
    var t;
    if (!(0, f.default)(m.default)) return null;
    let n = s[e];
    return null == n ? null : null !== (t = Object.values(n).find(e => L(e))) && void 0 !== t ? t : null
  }
  getStreamForUser(e, t) {
    var n;
    if (!(0, f.default)(m.default)) return null;
    let i = null === (n = s[e]) || void 0 === n ? void 0 : n[null != t ? t : "null"];
    return null != i && L(i) ? i : null
  }
  getRTCStream(e) {
    var t;
    return (0, f.default)(m.default) ? null !== (t = r[e]) && void 0 !== t ? t : null : null
  }
  getAllApplicationStreams() {
    return (0, f.default)(m.default) ? D().filter(e => null != e && b(e.streamType, e.channelId)) : []
  }
  getAllApplicationStreamsForChannel(e) {
    return (0, f.default)(m.default) ? D().filter(t => null != t && t.channelId === e && b(t.streamType, t.channelId)) : []
  }
  getViewerIds(e) {
    if (!(0, f.default)(m.default)) return [];
    let t = null;
    t = "string" == typeof e ? e : (0, d.encodeStreamKey)(e);
    let n = null != t ? r[t] : null;
    return null != n ? n.viewerIds : []
  }
  getCurrentAppIntent() {
    return N
  }
  getState() {
    return (0, f.default)(m.default) ? {
      activeStreams: Array.from(i.entries()),
      streamsByUserAndGuild: s,
      rtcStreams: r,
      streamerActiveStreamMetadatas: a
    } : {
      activeStreams: [],
      streamsByUserAndGuild: {},
      rtcStreams: {},
      streamerActiveStreamMetadatas: {}
    }
  }
}
M.displayName = "ApplicationStreamingStore";
var U = new M(l.default, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      applicationStreamState: t
    } = e;
    s = t.streamsByUserAndGuild, i = new Map(t.activeStreams), r = t.rtcStreams, a = t.streamerActiveStreamMetadatas
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      var n, i, r, a, o;
      let {
        userId: l,
        guildId: u,
        channelId: d,
        sessionId: c,
        selfStream: f
      } = t;
      if (f && null != d) {
        ;
        return null == s[(n = {
          streamType: null != u ? C.StreamTypes.GUILD : C.StreamTypes.CALL,
          ownerId: l,
          guildId: u,
          channelId: d
        }).ownerId] && (s[n.ownerId] = {}), s[n.ownerId][null !== (i = n.guildId) && void 0 !== i ? i : "null"] = n, !0
      } {
        ;
        let t = _.default.getSessionId();
        if (l === _.default.getId() && c !== t && null != p.default.getChannelId()) return e;
        return r = l, a = null != (a = u) ? a : "null", (null === (o = s[r]) || void 0 === o ? void 0 : o[a]) != null && (delete s[r][a], !0) || e
      }
    }, !1)
  },
  STREAM_WATCH: function(e) {
    let {
      streamKey: t
    } = e, n = (0, d.decodeStreamKey)(t);
    i.delete(t), i.set(t, {
      ...n,
      state: I.ApplicationStreamStates.CONNECTING
    }), n.ownerId === _.default.getId() && (y[n.channelId] = !1)
  },
  STREAM_START: function(e) {
    let {
      streamType: t,
      guildId: n,
      channelId: s,
      pid: r,
      sourceName: o
    } = e, l = (0, d.encodeStreamKey)({
      streamType: t,
      guildId: n,
      channelId: s,
      ownerId: _.default.getId()
    }), u = null != r ? v.default.getGameForPID(r) : null;
    a[l] = {
      id: null == u ? void 0 : u.id,
      pid: r,
      sourceName: o
    }, i.delete(l), i.set(l, {
      streamType: t,
      guildId: n,
      channelId: s,
      ownerId: _.default.getId(),
      state: I.ApplicationStreamStates.CONNECTING
    })
  },
  STREAM_STOP: function(e) {
    let {
      streamKey: t
    } = e;
    a[t] = null
  },
  STREAM_CREATE: P,
  STREAM_UPDATE: P,
  STREAM_TIMED_OUT: function(e) {
    let {
      streamKey: t
    } = e, n = i.get(t);
    if (null == n) return !1;
    i.set(t, {
      ...n,
      state: I.ApplicationStreamStates.FAILED
    })
  },
  STREAM_DELETE: function(e) {
    let {
      streamKey: t,
      unavailable: s,
      reason: a
    } = e;
    delete r[t];
    let o = i.get(t);
    if (null == o) return !1;
    let l = I.ApplicationStreamStates.ENDED;
    if (s) l = I.ApplicationStreamStates.RECONNECTING;
    else if (a === I.ApplicationStreamDeleteReasons.UNAUTHORIZED) l = I.ApplicationStreamStates.FAILED;
    else if (a === I.ApplicationStreamDeleteReasons.SAFETY_GUILD_RATE_LIMITED) {
      let {
        guildId: e
      } = (0, d.decodeStreamKey)(t);
      n.el("772545").then(n.bind(n, "772545")).then(t => {
        let {
          default: n
        } = t;
        n(e)
      }), l = I.ApplicationStreamStates.ENDED
    }
    i.set(t, {
      ...o,
      state: l
    }), l === I.ApplicationStreamStates.ENDED && A !== t && O(t)
  },
  STREAM_CLOSE: function(e) {
    let {
      streamKey: t
    } = e;
    O(t)
  },
  STREAM_UPDATE_SELF_HIDDEN: function(e) {
    let {
      channelId: t,
      selfStreamHidden: n
    } = e, i = (0, d.isStreamKey)(A);
    i && (null == A ? void 0 : A.includes(_.default.getId())) && !1 === y[t] && !0 === n && (A = null), y[t] = n
  },
  SET_STREAM_APP_INTENT: function(e) {
    let {
      intent: t
    } = e;
    N = t
  },
  RTC_CONNECTION_STATE: function(e) {
    let {
      streamKey: t,
      state: n
    } = e;
    if (null == t) return !1;
    let s = i.get(t);
    if (null == s || s.state === I.ApplicationStreamStates.ENDED) return !1;
    let r = s.state;
    switch (n) {
      case I.RTCConnectionStates.DISCONNECTED:
        r = I.ApplicationStreamStates.RECONNECTING;
        break;
      case I.RTCConnectionStates.RTC_CONNECTED:
        r = I.ApplicationStreamStates.ACTIVE
    }
    if (r === s.state) return !1;
    i.set(t, {
      ...s,
      state: r
    })
  },
  CHANNEL_RTC_SELECT_PARTICIPANT: function(e) {
    let {
      id: t,
      channelId: n
    } = e;
    if (A = t, Array.from(i.values()).forEach(e => {
        (0, d.encodeStreamKey)(e) !== A && e.state === I.ApplicationStreamStates.ENDED && O((0, d.encodeStreamKey)(e))
      }), null == t) return;
    let s = (0, d.isStreamKey)(t);
    s && t.includes(_.default.getId()) && (y[n] = !1)
  },
  CONNECTION_OPEN: R,
  CONNECTION_CLOSED: R,
  LOGOUT: R
})