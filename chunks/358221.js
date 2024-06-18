"use strict";
n(653041), n(724458), n(47120);
var i, r, s, o, a = n(512722),
  l = n.n(a),
  u = n(392711),
  _ = n.n(u),
  d = n(442837),
  c = n(570140),
  E = n(317381),
  I = n(710845),
  T = n(258609),
  h = n(569545),
  S = n(199902),
  f = n(314897),
  N = n(523746),
  A = n(592125),
  m = n(944486),
  O = n(606304),
  R = n(594174),
  C = n(33039),
  p = n(979651),
  g = n(413523),
  L = n(354459),
  v = n(981631);
let D = new I.Z("ChannelRTCStore"),
  M = Object.freeze([]),
  P = [],
  y = {},
  U = {},
  b = {},
  G = {},
  w = {},
  k = {},
  B = {},
  x = {},
  V = {},
  Z = {};

function H(e) {
  let t = y[e];
  return null == t && (t = new g.ZP(e), y[e] = t), t
}

function F(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P;
  return t.reduce((t, n) => e(H(n)) ? (function(e) {
    let t = H(e);
    if (0 === t.size()) return;
    let n = er(e) || q(t) ? v.WtW.VIDEO : v.WtW.VOICE;
    n === v.WtW.VOICE ? (delete G[e], delete w[e]) : G[e] = n
  }(n), function(e) {
    let t = f.default.getId(),
      n = H(e);
    if (0 === n.size() || m.Z.getVoiceChannelId() !== e) {
      z(e, null);
      return
    }
    let i = L.dF.NONE,
      r = n.toArray(g.sI.STREAM).find(e => e.type === L.fO.STREAM && S.Z.getActiveStreamForStreamKey(e.id));
    if (null != r) l()(r.type === L.fO.STREAM, "Impossible condition"), i = r.id;
    else if (1 === n.size()) i = t;
    else if (1 === n.size(g.sI.VIDEO)) {
      let [e] = n.toArray(g.sI.VIDEO);
      i = e.id
    } else {
      var s;
      let e = n.toArray().find(e => e.type === L.fO.USER && e.id !== t && !e.ringing);
      i = null !== (s = null == e ? void 0 : e.id) && void 0 !== s ? s : t
    }
    let [o] = j(e);
    if (o !== L.dF.AUTO && o !== L.dF.NONE) {
      let e = n.getParticipant(o);
      (null == e || e.type === L.fO.STREAM && null == S.Z.getActiveStreamForStreamKey(e.id)) && (o = L.dF.NONE)
    }
    z(e, [o, i])
  }(n), !0) : t, !1)
}

function Y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P;
  return F(t => t.updateParticipant(e), t)
}

function j(e) {
  var t;
  let n = A.Z.getChannel(e),
    i = (null == n ? void 0 : n.isDM()) ? L.dF.AUTO : L.dF.NONE;
  return null !== (t = U[e]) && void 0 !== t ? t : [i, L.dF.NONE]
}

function W(e) {
  if (null == U[e]) return !1;
  let [t] = U[e];
  return t !== L.dF.NONE
}

function K(e) {
  null == b[e] && (b[e] = {
    gridDurationMs: 0,
    focusDurationMs: 0,
    toggleCount: 0,
    lastUpdate: 0
  });
  let t = b[e],
    n = performance.now(),
    i = W(e);
  if (t.lastUpdate > 0) {
    let e = n - t.lastUpdate;
    t[i ? "focusDurationMs" : "gridDurationMs"] += e
  }
  t.lastUpdate = n
}

function z(e, t) {
  K(e);
  let n = W(e);
  null == t ? delete U[e] : U[e] = t, n !== W(e) && b[e].toggleCount++
}

function q(e) {
  return e.size(g.sI.STREAM) > 0 || e.size(g.sI.VIDEO) > 0 || e.hasEmbeddedActivity()
}

function X(e) {
  delete y[e], delete U[e], delete G[e], delete w[e]
}

function Q() {
  return F(e => e.rebuild(), function() {
    let e = [],
      t = m.Z.getChannelId();
    null != t && e.push(t);
    let n = m.Z.getVoiceChannelId();
    null != n && !e.includes(n) && e.push(n);
    let i = T.Z.getRemoteSessionId(),
      r = p.Z.getVoiceStateForSession(f.default.getId(), i);
    (null == r ? void 0 : r.channelId) != null && e.push(null == r ? void 0 : r.channelId), _().difference(P, e).forEach(X);
    let s = _().difference(e, P);
    return P = e, s
  }())
}

function J() {
  return F(e => e.updateEmbeddedActivities())
}

function $(e) {
  let {
    userId: t
  } = e;
  return F(e => e.updateParticipantSpeaking(t))
}

function ee(e) {
  let {
    user: t
  } = e;
  return Y(t.id)
}

function et(e) {
  let {
    channelId: t
  } = e;
  return F(e => e.rebuild(), [t])
}

function en(e) {
  let {
    channel: {
      id: t
    }
  } = e;
  return delete x[t], delete V[t], X(t)
}

function ei(e) {
  let {
    streamKey: t
  } = e, {
    channelId: n,
    ownerId: i
  } = (0, h.my)(t);
  return Y(i, [n])
}

function er(e) {
  var t;
  return !!(null === (t = A.Z.getChannel(e)) || void 0 === t ? void 0 : t.isGuildVocal())
}
class es extends(i = d.ZP.Store) {
  initialize() {
    this.waitFor(S.Z, f.default, N.Z, A.Z, E.ZP, m.Z, O.Z, R.default, C.Z, p.Z), this.syncWith([E.ZP], J), this.syncWith([T.Z], Q)
  }
  getParticipantsVersion(e) {
    return H(e).version
  }
  getParticipants(e) {
    var t;
    return null !== (t = H(e).toArray()) && void 0 !== t ? t : M
  }
  getSpeakingParticipants(e) {
    var t;
    return null !== (t = H(e).toArray(g.sI.SPEAKING)) && void 0 !== t ? t : M
  }
  getFilteredParticipants(e) {
    return B[e] ? H(e).toArray(g.sI.FILTERED) : H(e).toArray()
  }
  getVideoParticipants(e) {
    var t;
    return null !== (t = H(e).toArray(g.sI.VIDEO)) && void 0 !== t ? t : M
  }
  getStreamParticipants(e) {
    var t;
    return null !== (t = H(e).toArray(g.sI.STREAM)) && void 0 !== t ? t : M
  }
  getActivityParticipants(e) {
    var t;
    return null !== (t = H(e).toArray(g.sI.ACTIVITY)) && void 0 !== t ? t : M
  }
  getParticipant(e, t) {
    return H(e).getParticipant(t)
  }
  getUserParticipantCount(e) {
    let t = H(e);
    return t.size() - t.size(g.sI.STREAM) - t.size(g.sI.ACTIVITY)
  }
  getParticipantsOpen(e) {
    var t;
    return null === (t = k[e]) || void 0 === t || t
  }
  getVoiceParticipantsHidden(e) {
    var t;
    return null !== (t = B[e]) && void 0 !== t && t
  }
  getSelectedParticipantId(e) {
    let [t, n] = j(e);
    return t === L.dF.NONE ? null : t !== L.dF.AUTO ? t : n === L.dF.NONE || n === L.dF.AUTO ? null : n
  }
  getSelectedParticipant(e) {
    let t = this.getSelectedParticipantId(e);
    return null == t ? null : H(e).getParticipant(t)
  }
  getSelectedParticipantStats(e) {
    let t = b[e];
    return null == t ? {} : {
      view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
      view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
      view_mode_toggle_count: t.toggleCount
    }
  }
  getMode(e) {
    var t;
    return null !== (t = G[e]) && void 0 !== t ? t : er(e) ? v.WtW.VIDEO : v.WtW.VOICE
  }
  getLayout(e) {
    var t, n;
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v.IlC.APP;
    if (__OVERLAY__) return v.AEg.NORMAL;
    let r = A.Z.getChannel(e),
      s = er(e) || (null == r ? void 0 : r.isBroadcastChannel());
    return null !== (n = null === (t = w[e]) || void 0 === t ? void 0 : t[i]) && void 0 !== n ? n : s ? v.AEg.NO_CHAT : v.AEg.NORMAL
  }
  getChatOpen(e) {
    var t;
    return null !== (t = x[e]) && void 0 !== t && t
  }
  isFullscreenInContext() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.IlC.APP;
    return Object.values(w).some(t => t[e] === v.AEg.FULL_SCREEN)
  }
  getStageStreamSize(e) {
    return V[e]
  }
  getStageVideoLimitBoostUpsellDismissed(e) {
    return Z[e]
  }
}
o = "ChannelRTCStore", (s = "displayName") in(r = es) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new es(c.Z, {
  CONNECTION_OPEN: Q,
  CONNECTION_OPEN_SUPPLEMENTAL: Q,
  THREAD_LIST_SYNC: Q,
  OVERLAY_INITIALIZE: Q,
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t,
      currentVoiceChannelId: n
    } = e;
    return null != t ? delete b[t] : null != n && (delete x[n], delete V[n], K(n)), Q()
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t,
      messageId: n
    } = e, i = Q(), r = A.Z.getChannel(t);
    return null == t || null == n || (null == r ? void 0 : r.type) !== v.d4z.GUILD_VOICE && (null == r ? void 0 : r.type) !== v.d4z.GUILD_STAGE_VOICE || x[t] ? i : (x[t] = !0, !0)
  },
  CHANNEL_RTC_ACTIVE_CHANNELS: Q,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t,
      initial: n
    } = e;
    return t.reduce((e, t) => {
      let {
        userId: i,
        channelId: r
      } = t;
      return n && null != r && !P.includes(r) ? e : Y(i) || e
    }, !1)
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (t.type === v.d4z.GROUP_DM) {
      let e = t.originChannelId;
      if (null != e) {
        var n, i;
        return w[t.id] = {
          [v.IlC.APP]: null !== (i = null === (n = w[e]) || void 0 === n ? void 0 : n[v.IlC.APP]) && void 0 !== i ? i : v.AEg.NORMAL
        }, !0
      }
      t.isBroadcastChannel() && (w[t.id] = {
        [v.IlC.APP]: v.AEg.NO_CHAT
      })
    }
    return !1
  },
  CHANNEL_DELETE: en,
  THREAD_DELETE: en,
  CALL_CREATE: et,
  CALL_UPDATE: et,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    return X(t)
  },
  CHANNEL_RTC_SELECT_PARTICIPANT: function(e) {
    let {
      channelId: t,
      id: n
    } = e, i = H(t);
    null == n && i.toArray(g.sI.STREAM).forEach(e => {
      (0, L._5)(e) && i.updateParticipant(e.user.id)
    });
    let [, r] = j(t);
    if (z(t, [null != n ? n : L.dF.NONE, r]), (0, h.DB)(n)) {
      try {
        let {
          ownerId: e
        } = (0, h.my)(n);
        e === f.default.getId() && Y(e, [t])
      } catch (e) {
        D.warn("INVALID STREAM KEY FORMAT ".concat(n), e)
      }!q(i) && (k[t] = !1)
    }
  },
  CHANNEL_RTC_UPDATE_LAYOUT: function(e) {
    let {
      channelId: t,
      layout: n,
      appContext: i
    } = e;
    w[t] = {
      ...w[t],
      [i]: n
    }
  },
  CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function(e) {
    let {
      channelId: t,
      participantsOpen: n
    } = e;
    k[t] = n
  },
  CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function(e) {
    let {
      channelId: t,
      voiceParticipantsHidden: n
    } = e;
    B[t] = n
  },
  CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function(e) {
    let {
      channelId: t,
      large: n
    } = e;
    V[t] = n
  },
  CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function(e) {
    let {
      channelId: t,
      dismissed: n
    } = e;
    Z[t] = n
  },
  STREAM_UPDATE_SELF_HIDDEN: function(e) {
    let {
      channelId: t,
      selfStreamHidden: n
    } = e, i = f.default.getId();
    if (n) {
      let [e] = j(t);
      (0, h.DB)(e) && e.includes(i) && z(t, null)
    }
    Y(i, [t])
  },
  CHANNEL_RTC_UPDATE_CHAT_OPEN: function(e) {
    let {
      channelId: t,
      chatOpen: n
    } = e;
    x[t] = n
  },
  RTC_CONNECTION_VIDEO: function(e) {
    let {
      channelId: t,
      userId: n
    } = e;
    return Y(n, [t])
  },
  RTC_CONNECTION_PLATFORM: function(e) {
    let {
      channelId: t,
      userId: n
    } = e;
    return Y(n, [t])
  },
  AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
    let {
      userId: t
    } = e;
    return Y(t)
  },
  MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function(e) {
    let {
      channelId: t,
      senderUserId: n,
      maxResolution: i,
      maxFrameRate: r
    } = e;
    return F(e => e.updateParticipantQuality(n, i, r), [t])
  },
  STREAM_CLOSE: ei,
  STREAM_DELETE: ei,
  STREAM_WATCH: function(e) {
    let {
      streamKey: t
    } = e, {
      channelId: n,
      ownerId: i
    } = (0, h.my)(t);
    return Y(i, [n])
  },
  SPEAKING: $,
  GUILD_SOUNDBOARD_SOUND_PLAY_START: $,
  GUILD_SOUNDBOARD_SOUND_PLAY_END: $,
  USER_UPDATE: ee,
  GUILD_MEMBER_UPDATE: ee,
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e, n = [];
    if (_().forEach(P, e => {
        let i = A.Z.getChannel(e);
        (null == i || i.getGuildId() === t.id) && n.push(e)
      }), 0 === n.length) return !1;
    _().forEach(n, e => X(e))
  }
})