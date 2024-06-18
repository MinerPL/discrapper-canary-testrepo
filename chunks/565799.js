"use strict";
n(47120), n(724458), n(653041);
var i, r, s, o, a = n(348327),
  l = n.n(a),
  u = n(392711),
  _ = n.n(u),
  d = n(442837),
  c = n(759174),
  E = n(570140),
  I = n(569545),
  T = n(199902),
  h = n(314897),
  S = n(592125),
  f = n(430824),
  N = n(496675),
  A = n(699516),
  m = n(606304),
  O = n(594174),
  R = n(979651),
  C = n(938475),
  p = n(501655),
  g = n(88751),
  L = n(427679);
let v = "NO_GUILD",
  D = new c.h(e => [function(e) {
    var t;
    return null !== (t = e.getGuildId()) && void 0 !== t ? t : v
  }(e)], e => e.id),
  M = new Set,
  P = {};

function y(e) {
  return D.values(null != e ? e : void 0, !0).map(e => {
    let {
      id: t
    } = e;
    return t
  })
}

function U(e) {
  !M.has(e) && (M.add(e), _()(S.Z.getMutableGuildChannelsForGuild(e)).values().forEach(e => {
    w(e) && D.set(e.id, e)
  }))
}

function b(e) {
  let t = P[e];
  if (null != t) return t;
  let n = S.Z.getChannel(e);
  return null != n && n.isGuildStageVoice() ? (U(n.guild_id), w(n)) ? G(e) : null : null
}

function G(e) {
  let t = P[e];
  return null == t && (t = new p.ZP(e), P[e] = t, t.rebuild()), t
}

function w(e) {
  return null != e && e.isGuildStageVoice() && C.ZP.countVoiceStatesForChannel(e.id) > 0
}

function k(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y();
  return t.reduce((t, n) => {
    let i = G(n);
    return e(i) ? (! function(e, t) {
      let n = S.Z.getChannel(e);
      null != n && n.isGuildStageVoice() ? 0 === t.size() ? x(n.id) : null == D.get(n.id) && D.set(n.id, n) : x(e)
    }(n, i), !0) : t
  }, !1)
}

function B(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y();
  return k(t => t.updateParticipant(e), t)
}

function x(e) {
  return null != e && (delete P[e], D.delete(e), !0)
}

function V() {
  M.clear(), D.clear(), P = {}
}

function Z(e, t, n) {
  if (null == n || e.has(n)) return;
  let i = S.Z.getChannel(n);
  if (!!(null == i ? void 0 : i.isGuildStageVoice())) t.add(n), e.add(n)
}

function H(e) {
  let {
    user: t
  } = e;
  return B(t.id)
}

function F(e) {
  let {
    relationship: t
  } = e;
  return B(t.id)
}

function Y(e) {
  let {
    guild: t
  } = e;
  ! function(e) {
    for (let t of D.values(e)) D.delete(t.id), delete P[t.id];
    M.delete(e)
  }(t.id)
}

function j(e) {
  let {
    streamKey: t
  } = e, {
    channelId: n,
    guildId: i,
    ownerId: r
  } = (0, I.my)(t);
  return !!(null != i && M.has(i)) && B(r, [n])
}
let W = [];
class K extends(i = d.ZP.Store) {
  initialize() {
    this.waitFor(h.default, O.default, S.Z, m.Z, R.Z, N.Z, C.ZP, f.Z, g.ZP, A.Z, L.Z, T.Z)
  }
  getParticipantsVersion(e) {
    var t, n;
    return null == e ? -1 : null !== (n = null === (t = b(e)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : -1
  }
  getMutableParticipants(e, t) {
    var n, i;
    return null == e ? W : null !== (i = null === (n = b(e)) || void 0 === n ? void 0 : n.toArray(t)) && void 0 !== i ? i : W
  }
  getMutableRequestToSpeakParticipants(e) {
    var t, n;
    return null !== (n = null === (t = b(e)) || void 0 === t ? void 0 : t.getRequestToSpeakParticipants()) && void 0 !== n ? n : W
  }
  getRequestToSpeakParticipantsVersion(e) {
    var t, n;
    return null !== (n = null === (t = b(e)) || void 0 === t ? void 0 : t.requestToSpeakVersion) && void 0 !== n ? n : -1
  }
  getParticipantCount(e, t) {
    var n, i;
    return null !== (i = null === (n = b(e)) || void 0 === n ? void 0 : n.size(t)) && void 0 !== i ? i : 0
  }
  getChannels(e) {
    return U(null != e ? e : v), D.values(null != e ? e : v)
  }
  getChannelsVersion() {
    return D.version
  }
  getParticipant(e, t) {
    var n, i;
    return null !== (i = null === (n = b(e)) || void 0 === n ? void 0 : n.getParticipant(t)) && void 0 !== i ? i : null
  }
}
o = "StageChannelParticipantStore", (s = "displayName") in(r = K) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new K(E.Z, {
  CONNECTION_OPEN: V,
  OVERLAY_INITIALIZE: V,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e, n = new Set;
    return t.reduce((e, t) => {
      if (null == t.guildId || !M.has(t.guildId)) return e;
      let i = new Set;
      return (Z(n, i, t.oldChannelId), Z(n, i, t.channelId), 0 === i.size) ? e : B(t.userId, Array.from(i)) || e
    }, !1)
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e;
    return x(t)
  },
  GUILD_MEMBERS_CHUNK_BATCH: function(e) {
    let {
      chunks: t
    } = e, n = !1;
    for (let e of t)
      for (let t of e.members) n = B(t.user.id) || n;
    return n
  },
  USER_UPDATE: H,
  GUILD_MEMBER_REMOVE: H,
  GUILD_MEMBER_UPDATE: H,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = t.reduce((e, t) => {
      if (!t.isGuildStageVoice() || !M.has(t.guild_id)) return e;
      let n = D.get(t.id);
      return null == n || l()(t.permissionOverwrites, n.permissionOverwrites) ? e : (e.push(t.id), D.set(t.id, t), e)
    }, []);
    return k(e => e.rebuild(), n), n.length > 0
  },
  GUILD_ROLE_UPDATE: function(e) {
    let {
      guildId: t
    } = e;
    if (M.has(t)) return k(e => e.rebuild(), y(t))
  },
  RTC_CONNECTION_VIDEO: function(e) {
    let {
      channelId: t,
      guildId: n,
      userId: i
    } = e;
    return !!(null != n && M.has(n)) && B(i, [t])
  },
  STREAM_CLOSE: j,
  STREAM_DELETE: j,
  RELATIONSHIP_ADD: F,
  RELATIONSHIP_REMOVE: F,
  GUILD_CREATE: Y,
  GUILD_DELETE: Y,
  PASSIVE_UPDATE_V2: function(e) {
    let t = !1;
    for (let n of y(e.guildId)) t = G(n).rebuild() || t;
    return t
  }
})