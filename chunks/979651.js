let r, i;
n(47120), n(724458);
var a, o, s, l, u = n(392711),
  c = n.n(u),
  d = n(442837),
  _ = n(570140),
  E = n(189786),
  f = n(981631),
  h = n(354459);
let p = 0,
  m = 0,
  I = {},
  T = new Set(),
  g = new Map(),
  S = {},
  A = {},
  N = {},
  v = {};

function O(e, t) {
  return ''.concat(e, ':').concat(t);
}

function R(e, t) {
  let n = e[t];
  return null == n && (n = {}, e[t] = n), n;
}

function C(e) {
  var t;
  let n = null !== (t = I[f.ME]) && void 0 !== t ? t : {},
r = {};
  c().each(n, (t, n) => {
t.channelId !== e && (r[n] = t);
  }), I[f.ME] = r;
}

function y(e) {
  var t;
  return null !== (t = g.get(e)) && void 0 !== t ? t : new Set();
}

function D(e, t, n) {
  let r = R(I, null != e ? e : f.ME),
i = r[t],
a = n(i);
  return i === a ? [
!1,
a,
i
  ] : (null != i && (delete r[t], null != i.channelId && (delete R(S, i.channelId)[t], delete R(A, i.channelId)[t]), null != i.sessionId && delete R(N, t)[i.sessionId], ! function(e, t) {
let n = y(e);
if (!!n.has(t))
  (n = new Set(n)).delete(t), 0 === n.size ? g.delete(e) : g.set(e, n);
  }(null != e ? e : f.ME, t)), null != a && (r[t] = a, null != a.channelId && (R(S, a.channelId)[t] = a, a.selfVideo && (R(A, a.channelId)[t] = a, ! function(e, t) {
let n = y(e);
if (!n.has(t))
  (n = new Set(n)).add(t), g.set(e, n);
  }(null != e ? e : f.ME, t))), null != a.sessionId && (R(N, t)[a.sessionId] = a)), [
!0,
a,
i
  ]);
}

function L(e, t) {
  return D(e, t.userId, e => {
if (null == t.channelId)
  return null;
{
  let n = {
    channelId: t.channelId,
    deaf: t.deaf,
    mute: t.mute,
    requestToSpeakTimestamp: t.requestToSpeakTimestamp,
    selfDeaf: t.selfDeaf,
    selfMute: t.selfMute,
    selfStream: t.selfStream,
    selfVideo: t.selfVideo,
    sessionId: t.sessionId,
    suppress: t.suppress,
    userId: t.userId
  };
  return null != e ? e.merge(n) : new E.Z(n);
}
  });
}

function b(e) {
  let {
guild: t
  } = e;
  c().forEach(I[t.id], e => {
D(t.id, e.userId, () => null);
  }), delete I[t.id];
}
class M extends(a = d.ZP.Store) {
  getAllVoiceStates() {
return I;
  }
  getVoiceStateVersion() {
return m;
  }
  getVoiceStates(e) {
return R(I, null != e ? e : f.ME);
  }
  getVoiceStatesForChannel(e) {
return R(S, e);
  }
  getVideoVoiceStatesForChannel(e) {
return R(A, e);
  }
  getVoiceState(e, t) {
return this.getVoiceStates(e)[t];
  }
  getVoiceStateForChannel(e) {
var t;
let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
return null === (t = R(S, e)) || void 0 === t ? void 0 : t[n];
  }
  getVoiceStateForUser(e) {
return Object.values(R(N, e))[0];
  }
  getVoiceStateForSession(e, t) {
var n;
return null != t ? null === (n = R(N, e)) || void 0 === n ? void 0 : n[t] : null;
  }
  getUserVoiceChannelId(e, t) {
var n;
return null === (n = this.getVoiceState(e, t)) || void 0 === n ? void 0 : n.channelId;
  }
  getCurrentClientVoiceChannelId(e) {
let t = this.getVoiceState(e, r);
return null != t && null != i && t.sessionId === i ? t.channelId : null;
  }
  getUsersWithVideo(e) {
var t;
return null !== (t = g.get(e)) && void 0 !== t ? t : T;
  }
  isCurrentClientInVoiceChannel() {
var e;
return null != i && (null === (e = N[r]) || void 0 === e ? void 0 : e[i]) != null;
  }
  isInChannel(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
if (null == e)
  return !1;
let n = this.getVoiceStateForChannel(e, t);
return null != n && (t !== r || null != i && n.sessionId === i);
  }
  hasVideo(e) {
return Object.values(R(A, e)).length > 0;
  }
  getVoicePlatformForChannel(e, t) {
var n, a;
let o = null != i && (null === (a = N[r]) || void 0 === a ? void 0 : null === (n = a[i]) || void 0 === n ? void 0 : n.channelId);
return t === r && e === o ? h.wR.DESKTOP : v[O(t, e)];
  }
  get userHasBeenMovedVersion() {
return p;
  }
}
l = 'VoiceStateStore', (s = 'displayName') in(o = M) ? Object.defineProperty(o, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[s] = l, t.Z = new M(_.Z, {
  CONNECTION_OPEN: function(e) {
let {
  user: t,
  sessionId: n
} = e, a = null != r && r !== t.id;
return a && (I = {}, S = {}, N = {}, A = {}, g.clear()), r = t.id, i = n, a;
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function() {
I = {}, S = {}, N = {}, A = {}, g.clear();
  },
  OVERLAY_INITIALIZE: function(e) {
let {
  voiceStates: t,
  user: n,
  sessionId: a
} = e;
for (let [e, n] of(I = {}, S = {}, N = {}, A = {}, Object.entries(t)))
  for (let [t, r] of Object.entries(n))
    D(e, t, () => new E.Z(r));
r = n.id, i = a;
  },
  VOICE_CHANNEL_SELECT: function(e) {
let {
  guildId: t,
  channelId: n
} = e, [i] = D(t, r, e => null == e ? void 0 : e.set('channelId', n));
return i;
  },
  VOICE_STATE_UPDATES: function(e) {
let {
  voiceStates: t
} = e;
return t.reduce((e, t) => {
  let [n, r, a] = L(t.guildId, t);
  return n ? (t.sessionId === i && null != r && null != a && a.channelId !== r.channelId && (p += 1), m++, !0) : e;
}, !1);
  },
  GUILD_DELETE: b,
  GUILD_CREATE: b,
  CHANNEL_DELETE: function(e) {
let {
  channel: t
} = e;
C(t.id);
  },
  CALL_DELETE: function(e) {
let {
  channelId: t
} = e;
C(t);
  },
  PASSIVE_UPDATE_V2: function(e) {
let t = !1;
for (let n of e.voiceStates) {
  let [r] = L(e.guildId, n);
  t = t || r;
}
for (let n of e.removedVoiceStateUsers)
  D(e.guildId, n, () => null), t = !0;
return t && m++, t;
  },
  RTC_CONNECTION_PLATFORM: function(e) {
let {
  userId: t,
  channelId: n,
  platform: r
} = e;
v[O(t, n)] = r;
  }
});