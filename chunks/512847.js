"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("392711"),
  i = n.n(l),
  r = n("442837"),
  o = n("317381"),
  u = n("258609"),
  d = n("569545"),
  c = n("106301"),
  f = n("590415"),
  E = n("131704"),
  h = n("199902"),
  _ = n("314897"),
  C = n("592125"),
  m = n("430824"),
  S = n("131951"),
  I = n("292959"),
  p = n("19780"),
  T = n("944486"),
  g = n("606304"),
  A = n("979651"),
  N = n("938475"),
  v = n("823379"),
  O = n("557177"),
  R = n("981631");

function L(e, t, n, a) {
  s.useEffect(() => {
    let s = t(),
      l = new r.BatchedStoreListener(e, () => {
        let e = t(),
          l = n(s, e);
        null != l && !I.default.isSoundDisabled(l) && (0, O.playSound)(l, null != a ? a : .4), s = e
      });
    return l.attach("useSound"), () => l.detach()
  })
}

function P() {
  return L([S.default, T.default], () => ({
    inVoiceChannel: null != T.default.getVoiceChannelId(),
    selfMute: S.default.isSelfMute(),
    selfDeaf: S.default.isSelfDeaf(),
    audioPermissionReady: S.default.isNativeAudioPermissionReady(),
    shouldSkipMuteUnmuteSound: S.default.shouldSkipMuteUnmuteSound()
  }), (e, t) => {
    let {
      inVoiceChannel: n,
      selfMute: a,
      selfDeaf: s,
      audioPermissionReady: l,
      shouldSkipMuteUnmuteSound: i
    } = t;
    if (e.selfDeaf !== s) return s ? "deafen" : "undeafen";
    if (!!l) {
      if ((n || e.audioPermissionReady) && e.selfMute !== a) {
        if (i) {
          S.default.notifyMuteUnmuteSoundWasSkipped();
          return
        }
        return a ? "mute" : "unmute"
      }
    }
  }), null
}

function M() {
  return L([C.default, p.default, T.default, u.default], () => {
    let e = C.default.getChannel(T.default.getVoiceChannelId()),
      t = null == e ? void 0 : e.type,
      n = null == e ? void 0 : e.getGuildId(),
      a = p.default.getWasEverRtcConnected(),
      s = p.default.getState();
    return {
      channelType: t,
      guildId: n,
      connected: s === R.RTCConnectionStates.RTC_CONNECTED,
      connectHasStarted: !a && s !== R.RTCConnectionStates.DISCONNECTED || s === R.RTCConnectionStates.RTC_CONNECTED,
      awaitingRemote: null != u.default.getAwaitingRemoteSessionInfo(),
      connectedRemote: null != u.default.getRemoteSessionId()
    }
  }, (e, t) => {
    let {
      channelType: n,
      connected: a,
      connectHasStarted: s,
      awaitingRemote: l,
      connectedRemote: i
    } = t, r = e.channelType, o = e.connectedRemote, u = e.connected, d = e.connectHasStarted;
    if (!d && s || i && !o) {
      if (null != n && E.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(n)) return;
      return "user_join"
    }
    if (u && !a) {
      if (l || i || null != r && E.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(r)) return;
      return "disconnect"
    }
  }), null
}

function y() {
  return L([g.default], () => g.default.isCurrentUserSpeaking(), (e, t) => {
    if (e !== t) {
      let e = S.default.isSelfMute();
      if (S.default.getMode() === R.InputModes.PUSH_TO_TALK && !e) return t ? "ptt_start" : "ptt_stop"
    }
  }), null
}

function D() {
  return L([S.default], () => S.default.isSelfMutedTemporarily(), (e, t) => {
    if (e !== t) {
      let e = S.default.isSelfMute();
      if (S.default.getMode() === R.InputModes.VOICE_ACTIVITY && !e) return t ? "ptt_stop" : "ptt_start"
    }
  }), null
}

function b() {
  return L([A.default], () => A.default.userHasBeenMovedVersion, (e, t) => {
    if (e !== t) return "user_moved"
  }), null
}

function x() {
  return L([T.default, A.default], () => {
    let e = T.default.getVoiceChannelId();
    if (null == e) return f.RequestToSpeakStates.NONE;
    let t = A.default.getVoiceStateForChannel(e);
    return (0, f.getAudienceRequestToSpeakState)(t)
  }, (e, t) => {
    if (e !== t && t === f.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return "reconnect"
  }), null
}

function U() {
  return L([T.default, h.default, _.default, A.default, C.default], () => {
    let e, t;
    let n = T.default.getVoiceChannelId(),
      a = _.default.getId();
    let s = [],
      l = null,
      i = 0,
      r = h.default.getAllActiveStreams();
    if (null != n) {
      let a = C.default.getChannel(n);
      null != a && (e = a.type, t = N.default.countVoiceStatesForChannel(a.id) - (A.default.isInChannel(a.id) ? 1 : 0), s = h.default.getAllApplicationStreamsForChannel(a.id).map(e => e.ownerId))
    }
    let o = null;
    return (null == (o = 1 === r.length ? r[0] : h.default.getCurrentUserActiveStream()) ? void 0 : o.state) === R.ApplicationStreamStates.CONNECTING && (o = null), null != o && (l = (0, d.encodeStreamKey)(o), i = h.default.getViewerIds(l).filter(e => e !== a).length), {
      channelType: e,
      voiceChannelId: n,
      voiceChannelUserCount: t,
      streamingUserIds: s,
      singleActiveStreamKey: l,
      singleActiveStreamViewerCount: i,
      currentUserId: a,
      allActiveStreams: r
    }
  }, (e, t) => {
    let {
      channelType: n,
      voiceChannelId: a,
      voiceChannelUserCount: s,
      streamingUserIds: l,
      singleActiveStreamKey: i,
      singleActiveStreamViewerCount: r,
      currentUserId: o
    } = t;
    if (e.voiceChannelId !== a || null == a || function(e) {
        let t = C.default.getChannel(e);
        if (null == t) return !1;
        let n = t.getGuildId();
        if (null == n) return !1;
        let a = m.default.getGuild(n);
        return null != a && a.afkChannelId === t.id
      }(a) || null != n && E.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(n)) return;
    let u = null != i && e.singleActiveStreamKey === i,
      d = l.some(t => !e.streamingUserIds.includes(t)),
      c = e.allActiveStreams.map(e => e.ownerId),
      f = e.streamingUserIds.some(e => !l.includes(e) && (e === o || c.includes(e)));
    if (d) return "stream_started";
    if (f) return "stream_ended";
    if (e.singleActiveStreamViewerCount <= 25 && u && r > e.singleActiveStreamViewerCount) return "stream_user_joined";
    else if (null != e.voiceChannelUserCount && null != s && e.voiceChannelUserCount <= 25 && s > e.voiceChannelUserCount) return "user_join";
    else if (null != e.voiceChannelUserCount && null != s && e.voiceChannelUserCount <= 25 && s < e.voiceChannelUserCount) return "user_leave";
    else if (e.singleActiveStreamViewerCount <= 25 && u && r < e.singleActiveStreamViewerCount) return "stream_user_left"
  }), null
}

function j() {
  return L([T.default, o.default, _.default], () => {
    let e = T.default.getVoiceChannelId(),
      t = _.default.getId(),
      n = (0, v.isNotNullish)(e) ? o.default.getEmbeddedActivitiesForChannel(e) : o.NO_ACTIVITIES;
    return {
      voiceChannelId: e,
      currentUserId: t,
      channelActivities: n
    }
  }, (e, t) => {
    let n, {
      voiceChannelId: a,
      currentUserId: s,
      channelActivities: l
    } = t;
    if (null == a) return;
    e.channelActivities.length < l.length && (n = "activity_launch");
    let i = e.channelActivities.find(e => e.userIds.has(s)),
      r = l.find(e => e.userIds.has(s));
    return void 0 === r && (0, v.isNotNullish)(i) && (n = "activity_end"), void 0 === i && (0, v.isNotNullish)(r) && r.userIds.size > 1 && (n = "activity_user_join"), (0, v.isNotNullish)(r) && (0, v.isNotNullish)(i) && (r.userIds.size > i.userIds.size && (n = "activity_user_join"), r.userIds.size < i.userIds.size && (n = "activity_user_left")), n
  }), null
}

function G() {
  return L([c.default, T.default], () => ({
    hangStatus: c.default.getCurrentHangStatus(),
    customHangStatus: c.default.getCustomHangStatus(),
    inVoice: null != T.default.getVoiceChannelId()
  }), (e, t) => {
    var n, a;
    let {
      hangStatus: s,
      customHangStatus: l
    } = t;
    if (e.inVoice && (null != s && s !== e.hangStatus || null != l && (l.status !== (null === (n = e.customHangStatus) || void 0 === n ? void 0 : n.status) || !i().isEqual(l.emoji, null === (a = e.customHangStatus) || void 0 === a ? void 0 : a.emoji)))) return "hang_status_select"
  }, .15), null
}

function w() {
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(P, {}), (0, a.jsx)(M, {}), (0, a.jsx)(y, {}), (0, a.jsx)(D, {}), (0, a.jsx)(b, {}), (0, a.jsx)(U, {}), (0, a.jsx)(x, {}), (0, a.jsx)(j, {}), (0, a.jsx)(G, {})]
  })
}