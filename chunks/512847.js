n.d(t, {
  Z: function() {
return G;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(392711),
  r = n.n(s),
  l = n(442837),
  o = n(317381),
  c = n(258609),
  d = n(569545),
  u = n(106301),
  _ = n(590415),
  h = n(131704),
  E = n(199902),
  I = n(314897),
  m = n(592125),
  g = n(430824),
  p = n(131951),
  T = n(292959),
  S = n(19780),
  f = n(944486),
  C = n(606304),
  N = n(979651),
  A = n(938475),
  v = n(823379),
  Z = n(557177),
  L = n(981631);

function O(e, t, n, i) {
  a.useEffect(() => {
let a = t(),
  s = new l.Fh(e, () => {
    let e = t(),
      s = n(a, e);
    null != s && !T.Z.isSoundDisabled(s) && (0, Z.GN)(s, null != i ? i : 0.4), a = e;
  });
return s.attach('useSound'), () => s.detach();
  });
}

function R() {
  return O([
p.Z,
f.Z
  ], () => ({
inVoiceChannel: null != f.Z.getVoiceChannelId(),
selfMute: p.Z.isSelfMute(),
selfDeaf: p.Z.isSelfDeaf(),
audioPermissionReady: p.Z.isNativeAudioPermissionReady(),
shouldSkipMuteUnmuteSound: p.Z.shouldSkipMuteUnmuteSound()
  }), (e, t) => {
let {
  inVoiceChannel: n,
  selfMute: i,
  selfDeaf: a,
  audioPermissionReady: s,
  shouldSkipMuteUnmuteSound: r
} = t;
if (e.selfDeaf !== a)
  return a ? 'deafen' : 'undeafen';
if (!!s && (!!n || !!e.audioPermissionReady)) {
  if (e.selfMute !== i) {
    if (r) {
      p.Z.notifyMuteUnmuteSoundWasSkipped();
      return;
    }
    return i ? 'mute' : 'unmute';
  }
}
  }), null;
}

function x() {
  return O([
m.Z,
S.Z,
f.Z,
c.Z
  ], () => {
let e = m.Z.getChannel(f.Z.getVoiceChannelId()),
  t = null == e ? void 0 : e.type,
  n = null == e ? void 0 : e.getGuildId(),
  i = S.Z.getWasEverRtcConnected(),
  a = S.Z.getState();
return {
  channelType: t,
  guildId: n,
  connected: a === L.hes.RTC_CONNECTED,
  connectHasStarted: !i && a !== L.hes.DISCONNECTED || a === L.hes.RTC_CONNECTED,
  awaitingRemote: null != c.Z.getAwaitingRemoteSessionInfo(),
  connectedRemote: null != c.Z.getRemoteSessionId()
};
  }, (e, t) => {
let {
  channelType: n,
  connected: i,
  connectHasStarted: a,
  awaitingRemote: s,
  connectedRemote: r
} = t, l = e.channelType, o = e.connectedRemote, c = e.connected, d = e.connectHasStarted;
if (!d && a || r && !o) {
  if (null != n && h.Lr.has(n))
    return;
  return 'user_join';
}
if (c && !i) {
  if (s || r || null != l && h.Lr.has(l))
    return;
  return 'disconnect';
}
  }), null;
}

function b() {
  return O([C.Z], () => C.Z.isCurrentUserSpeaking(), (e, t) => {
if (e !== t) {
  let e = p.Z.isSelfMute();
  if (p.Z.getMode() === L.pM4.PUSH_TO_TALK && !e)
    return t ? 'ptt_start' : 'ptt_stop';
}
  }), null;
}

function P() {
  return O([p.Z], () => p.Z.isSelfMutedTemporarily(), (e, t) => {
if (e !== t) {
  let e = p.Z.isSelfMute();
  if (p.Z.getMode() === L.pM4.VOICE_ACTIVITY && !e)
    return t ? 'ptt_stop' : 'ptt_start';
}
  }), null;
}

function M() {
  return O([N.Z], () => N.Z.userHasBeenMovedVersion, (e, t) => {
if (e !== t)
  return 'user_moved';
  }), null;
}

function D() {
  return O([
f.Z,
N.Z
  ], () => {
let e = f.Z.getVoiceChannelId();
if (null == e)
  return _.xO.NONE;
let t = N.Z.getVoiceStateForChannel(e);
return (0, _.gf)(t);
  }, (e, t) => {
if (e !== t && t === _.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK)
  return 'reconnect';
  }), null;
}

function y() {
  return O([
f.Z,
E.Z,
I.default,
N.Z,
m.Z
  ], () => {
let e, t;
let n = f.Z.getVoiceChannelId(),
  i = I.default.getId();
let a = [],
  s = null,
  r = 0,
  l = E.Z.getAllActiveStreams();
if (null != n) {
  let i = m.Z.getChannel(n);
  null != i && (e = i.type, t = A.ZP.countVoiceStatesForChannel(i.id) - (N.Z.isInChannel(i.id) ? 1 : 0), a = E.Z.getAllApplicationStreamsForChannel(i.id).map(e => e.ownerId));
}
let o = null;
return (null == (o = 1 === l.length ? l[0] : E.Z.getCurrentUserActiveStream()) ? void 0 : o.state) === L.jm8.CONNECTING && (o = null), null != o && (s = (0, d.V9)(o), r = E.Z.getViewerIds(s).filter(e => e !== i).length), {
  channelType: e,
  voiceChannelId: n,
  voiceChannelUserCount: t,
  streamingUserIds: a,
  singleActiveStreamKey: s,
  singleActiveStreamViewerCount: r,
  currentUserId: i,
  allActiveStreams: l
};
  }, (e, t) => {
let {
  channelType: n,
  voiceChannelId: i,
  voiceChannelUserCount: a,
  streamingUserIds: s,
  singleActiveStreamKey: r,
  singleActiveStreamViewerCount: l,
  currentUserId: o
} = t;
if (e.voiceChannelId !== i || null == i || function(e) {
    let t = m.Z.getChannel(e);
    if (null == t)
      return !1;
    let n = t.getGuildId();
    if (null == n)
      return !1;
    let i = g.Z.getGuild(n);
    return null != i && i.afkChannelId === t.id;
  }(i) || null != n && h.Lr.has(n))
  return;
let c = null != r && e.singleActiveStreamKey === r,
  d = s.some(t => !e.streamingUserIds.includes(t)),
  u = e.allActiveStreams.map(e => e.ownerId),
  _ = e.streamingUserIds.some(e => !s.includes(e) && (e === o || u.includes(e)));
if (d)
  return 'stream_started';
if (_)
  return 'stream_ended';
if (e.singleActiveStreamViewerCount <= 25 && c && l > e.singleActiveStreamViewerCount)
  return 'stream_user_joined';
else if (null != e.voiceChannelUserCount && null != a && e.voiceChannelUserCount <= 25 && a > e.voiceChannelUserCount)
  return 'user_join';
else if (null != e.voiceChannelUserCount && null != a && e.voiceChannelUserCount <= 25 && a < e.voiceChannelUserCount)
  return 'user_leave';
else if (e.singleActiveStreamViewerCount <= 25 && c && l < e.singleActiveStreamViewerCount)
  return 'stream_user_left';
  }), null;
}

function j() {
  return O([
f.Z,
o.ZP,
I.default
  ], () => {
let e = f.Z.getVoiceChannelId(),
  t = f.Z.getChannelId(),
  n = o.ZP.getConnectedActivityChannelId(),
  i = I.default.getId(),
  a = (0, v.lm)(t) ? o.ZP.getEmbeddedActivitiesForChannel(t) : o.i6,
  s = (0, v.lm)(e) ? o.ZP.getEmbeddedActivitiesForChannel(e) : o.i6,
  r = (0, v.lm)(n) ? o.ZP.getEmbeddedActivitiesForChannel(n) : o.i6;
return {
  voiceChannelId: e,
  currentUserId: i,
  channelActivities: a,
  connectedChannelActivities: r,
  userConnectedActivity: (0, v.lm)(n) ? o.ZP.getSelfEmbeddedActivityForChannel(n) : null,
  voiceChannelActivities: s
};
  }, (e, t) => {
let n, {
  voiceChannelId: i,
  currentUserId: a,
  channelActivities: s,
  connectedChannelActivities: r,
  userConnectedActivity: l,
  voiceChannelActivities: o
} = t;
let c = o.some(e => e.applicationId === (null == l ? void 0 : l.applicationId) && e.launchId === l.launchId);
if ((0, v.lm)(i)) {
  let t = e.voiceChannelActivities.find(e => e.userIds.has(a)),
    i = o.find(e => e.userIds.has(a));
  e.voiceChannelActivities.length < o.length && (0, v.lm)(e.voiceChannelId) && (n = 'activity_launch'), void 0 === i && (0, v.lm)(t) && (n = 'activity_end'), void 0 === t && (0, v.lm)(i) && i.userIds.size > 1 && (n = 'activity_user_join'), (0, v.lm)(i) && (0, v.lm)(t) && (i.userIds.size > t.userIds.size && (n = 'activity_user_join'), i.userIds.size < t.userIds.size && (n = 'activity_user_left'));
}
if (!c) {
  e.connectedChannelActivities.length < r.length && e.channelActivities.length < s.length && (n = 'activity_launch');
  let t = e.userConnectedActivity;
  null == l && (0, v.lm)(t) && (n = 'activity_end'), (0, v.lm)(l) && (0, v.lm)(t) && (l.userIds.size > t.userIds.size && (n = 'activity_user_join'), l.userIds.size < t.userIds.size && (n = 'activity_user_left'));
}
return n;
  }), null;
}

function U() {
  return O([
u.Z,
f.Z
  ], () => ({
hangStatus: u.Z.getCurrentHangStatus(),
customHangStatus: u.Z.getCustomHangStatus(),
inVoice: null != f.Z.getVoiceChannelId()
  }), (e, t) => {
var n, i;
let {
  hangStatus: a,
  customHangStatus: s
} = t;
if (e.inVoice && (null != a && a !== e.hangStatus || null != s && (s.status !== (null === (n = e.customHangStatus) || void 0 === n ? void 0 : n.status) || !r().isEqual(s.emoji, null === (i = e.customHangStatus) || void 0 === i ? void 0 : i.emoji))))
  return 'hang_status_select';
  }, 0.15), null;
}

function G() {
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(R, {}),
  (0, i.jsx)(x, {}),
  (0, i.jsx)(b, {}),
  (0, i.jsx)(P, {}),
  (0, i.jsx)(M, {}),
  (0, i.jsx)(y, {}),
  (0, i.jsx)(D, {}),
  (0, i.jsx)(j, {}),
  (0, i.jsx)(U, {})
]
  });
}