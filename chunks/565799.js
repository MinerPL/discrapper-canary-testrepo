n(47120), n(724458), n(653041);
var r, i, a, s, o = n(348327),
  l = n.n(o),
  u = n(392711),
  c = n.n(u),
  d = n(442837),
  _ = n(759174),
  E = n(570140),
  f = n(569545),
  h = n(199902),
  p = n(314897),
  m = n(592125),
  I = n(430824),
  T = n(496675),
  g = n(699516),
  S = n(606304),
  A = n(594174),
  N = n(979651),
  v = n(938475),
  O = n(501655),
  R = n(88751),
  C = n(427679);
let y = 'NO_GUILD',
  D = new _.h(e => [function(e) {
var t;
return null !== (t = e.getGuildId()) && void 0 !== t ? t : y;
  }(e)], e => e.id),
  L = new Set(),
  b = {};

function M(e) {
  return D.values(null != e ? e : void 0, !0).map(e => {
let {
  id: t
} = e;
return t;
  });
}

function P(e) {
  !L.has(e) && (L.add(e), c()(m.Z.getMutableGuildChannelsForGuild(e)).values().forEach(e => {
x(e) && D.set(e.id, e);
  }));
}

function U(e) {
  let t = b[e];
  if (null != t)
return t;
  let n = m.Z.getChannel(e);
  return null != n && n.isGuildStageVoice() ? (P(n.guild_id), x(n)) ? w(e) : null : null;
}

function w(e) {
  let t = b[e];
  return null == t && (t = new O.ZP(e), b[e] = t, t.rebuild()), t;
}

function x(e) {
  return null != e && e.isGuildStageVoice() && v.ZP.countVoiceStatesForChannel(e.id) > 0;
}

function G(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M();
  return t.reduce((t, n) => {
let r = w(n);
return e(r) ? (! function(e, t) {
  let n = m.Z.getChannel(e);
  null != n && n.isGuildStageVoice() ? 0 === t.size() ? B(n.id) : null == D.get(n.id) && D.set(n.id, n) : B(e);
}(n, r), !0) : t;
  }, !1);
}

function k(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M();
  return G(t => t.updateParticipant(e), t);
}

function B(e) {
  return null != e && (delete b[e], D.delete(e), !0);
}

function F() {
  L.clear(), D.clear(), b = {};
}

function V(e, t, n) {
  if (null == n || e.has(n))
return;
  let r = m.Z.getChannel(n);
  if (!!(null == r ? void 0 : r.isGuildStageVoice()))
t.add(n), e.add(n);
}

function H(e) {
  let {
user: t
  } = e;
  return k(t.id);
}

function Z(e) {
  let {
relationship: t
  } = e;
  return k(t.id);
}

function Y(e) {
  let {
guild: t
  } = e;
  ! function(e) {
for (let t of D.values(e))
  D.delete(t.id), delete b[t.id];
L.delete(e);
  }(t.id);
}

function j(e) {
  let {
streamKey: t
  } = e, {
channelId: n,
guildId: r,
ownerId: i
  } = (0, f.my)(t);
  return !!(null != r && L.has(r)) && k(i, [n]);
}
let W = [];
class K extends(r = d.ZP.Store) {
  initialize() {
this.waitFor(p.default, A.default, m.Z, S.Z, N.Z, T.Z, v.ZP, I.Z, R.ZP, g.Z, C.Z, h.Z);
  }
  getParticipantsVersion(e) {
var t, n;
return null == e ? -1 : null !== (n = null === (t = U(e)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : -1;
  }
  getMutableParticipants(e, t) {
var n, r;
return null == e ? W : null !== (r = null === (n = U(e)) || void 0 === n ? void 0 : n.toArray(t)) && void 0 !== r ? r : W;
  }
  getMutableRequestToSpeakParticipants(e) {
var t, n;
return null !== (n = null === (t = U(e)) || void 0 === t ? void 0 : t.getRequestToSpeakParticipants()) && void 0 !== n ? n : W;
  }
  getRequestToSpeakParticipantsVersion(e) {
var t, n;
return null !== (n = null === (t = U(e)) || void 0 === t ? void 0 : t.requestToSpeakVersion) && void 0 !== n ? n : -1;
  }
  getParticipantCount(e, t) {
var n, r;
return null !== (r = null === (n = U(e)) || void 0 === n ? void 0 : n.size(t)) && void 0 !== r ? r : 0;
  }
  getChannels(e) {
return P(null != e ? e : y), D.values(null != e ? e : y);
  }
  getChannelsVersion() {
return D.version;
  }
  getParticipant(e, t) {
var n, r;
return null !== (r = null === (n = U(e)) || void 0 === n ? void 0 : n.getParticipant(t)) && void 0 !== r ? r : null;
  }
}
s = 'StageChannelParticipantStore', (a = 'displayName') in(i = K) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new K(E.Z, {
  CONNECTION_OPEN: F,
  OVERLAY_INITIALIZE: F,
  VOICE_STATE_UPDATES: function(e) {
let {
  voiceStates: t
} = e, n = new Set();
return t.reduce((e, t) => {
  if (null == t.guildId || !L.has(t.guildId))
    return e;
  let r = new Set();
  return (V(n, r, t.oldChannelId), V(n, r, t.channelId), 0 === r.size) ? e : k(t.userId, Array.from(r)) || e;
}, !1);
  },
  CHANNEL_DELETE: function(e) {
let {
  channel: {
    id: t
  }
} = e;
return B(t);
  },
  GUILD_MEMBERS_CHUNK_BATCH: function(e) {
let {
  chunks: t
} = e, n = !1;
for (let e of t)
  for (let t of e.members)
    n = k(t.user.id) || n;
return n;
  },
  USER_UPDATE: H,
  GUILD_MEMBER_REMOVE: H,
  GUILD_MEMBER_UPDATE: H,
  CHANNEL_UPDATES: function(e) {
let {
  channels: t
} = e, n = t.reduce((e, t) => {
  if (!t.isGuildStageVoice() || !L.has(t.guild_id))
    return e;
  let n = D.get(t.id);
  return null == n || l()(t.permissionOverwrites, n.permissionOverwrites) ? e : (e.push(t.id), D.set(t.id, t), e);
}, []);
return G(e => e.rebuild(), n), n.length > 0;
  },
  GUILD_ROLE_UPDATE: function(e) {
let {
  guildId: t
} = e;
if (L.has(t))
  return G(e => e.rebuild(), M(t));
  },
  RTC_CONNECTION_VIDEO: function(e) {
let {
  channelId: t,
  guildId: n,
  userId: r
} = e;
return !!(null != n && L.has(n)) && k(r, [t]);
  },
  STREAM_CLOSE: j,
  STREAM_DELETE: j,
  RELATIONSHIP_ADD: Z,
  RELATIONSHIP_REMOVE: Z,
  GUILD_CREATE: Y,
  GUILD_DELETE: Y,
  PASSIVE_UPDATE_V2: function(e) {
let t = !1;
for (let n of M(e.guildId))
  t = w(n).rebuild() || t;
return t;
  }
});