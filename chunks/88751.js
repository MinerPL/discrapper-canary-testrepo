"use strict";
n(47120), n(724458);
var i, r, s, o, a, l, u = n(392711),
  _ = n.n(u),
  d = n(442837),
  c = n(570140),
  E = n(592125),
  I = n(984933),
  T = n(271383),
  h = n(430824),
  S = n(594174),
  f = n(979651),
  N = n(700785),
  A = n(146085),
  m = n(590415);
(s = i || (i = {})).SPEAKER = "speaker", s.MODERATOR = "moderator";
let O = {},
  R = {
    speaker: !1,
    moderator: !1
  };

function C(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  null == O[t] && (O[t] = {});
  let i = function(e, t) {
    var n, i, r;
    let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      o = E.Z.getChannel(t),
      a = null == o ? void 0 : o.getGuildId(),
      l = h.Z.getGuild(a);
    if (null == l || null == o || !o.isGuildStageVoice()) return R;
    return {
      speaker: function(e, t) {
        let n = f.Z.getVoiceStateForChannel(t, e);
        return (0, m.gf)(n) === m.xO.ON_STAGE
      }(e, t),
      moderator: s ? (n = e, i = l, r = o, N.BT({
        permission: A.yP,
        user: n,
        context: i,
        overwrites: r.permissionOverwrites,
        roles: h.Z.getRoles(i.id)
      })) : null
    }
  }(e, t, n);
  return O[t][e] = i, i
}

function p(e) {
  let t = I.ZP.getChannels(e)[I.Zb].filter(e => {
    let {
      channel: t
    } = e;
    return t.isGuildStageVoice()
  });
  for (let {
      channel: e
    }
    of t) delete O[e.id];
  return t.length > 0
}

function g(e) {
  let {
    guildId: t,
    user: n
  } = e;
  return null != n && null != t && function(e, t) {
    for (let n in O) {
      let i = E.Z.getBasicChannel(n);
      if (null != i && i.guild_id === t) delete O[n][e]
    }
    return !0
  }(n.id, t)
}

function L(e) {
  let {
    guild: t
  } = e;
  for (let e in O) {
    let n = E.Z.getBasicChannel(e);
    (null == n || n.guild_id === t.id) && delete O[e]
  }
}
class v extends(r = d.ZP.Store) {
  initialize() {
    this.waitFor(T.ZP, E.Z, h.Z, S.default, f.Z)
  }
  isSpeaker(e, t) {
    return this.getPermissionsForUser(e, t).speaker
  }
  isModerator(e, t) {
    var n;
    return null !== (n = this.getPermissionsForUser(e, t, !0).moderator) && void 0 !== n && n
  }
  isAudienceMember(e, t) {
    let n = this.getPermissionsForUser(e, t);
    return !n.speaker && !n.moderator
  }
  getPermissionsForUser(e, t) {
    var n;
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e || null == t) return R;
    let r = null === (n = O[t]) || void 0 === n ? void 0 : n[e];
    if (null != r) return i && null == r.moderator ? C(e, t, !0) : r;
    return C(e, t, i)
  }
}
l = "StageChannelRoleStore", (a = "displayName") in(o = v) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.ZP = new v(c.Z, {
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    for (let e of t) delete O[e.id]
  },
  CONNECTION_OPEN: function() {
    O = {}
  },
  GUILD_MEMBER_REMOVE: g,
  GUILD_MEMBER_UPDATE: g,
  GUILD_ROLE_UPDATE: function(e) {
    let {
      guildId: t
    } = e;
    p(t)
  },
  PASSIVE_UPDATE_V2: function(e) {
    return p(e.guildId)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return !_().isEmpty(O) && t.reduce((e, t) => {
      let {
        userId: n,
        channelId: i
      } = t;
      return function(e, t) {
        var n;
        if (null == t) return !1;
        let i = E.Z.getChannel(t);
        return !!(null != i && i.isGuildStageVoice()) && (null === (n = O[t]) || void 0 === n || delete n[e], !0)
      }(n, i) || e
    }, !1)
  },
  GUILD_CREATE: L,
  GUILD_DELETE: L
})