"use strict";
n.d(t, {
  Zb: function() {
    return v
  },
  sH: function() {
    return L
  }
}), n(653041), n(47120), n(724458);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(149765),
  _ = n(442837),
  d = n(570140),
  c = n(430198),
  E = n(933557),
  I = n(853856),
  T = n(846787),
  h = n(131704),
  S = n(700785),
  f = n(314897),
  N = n(592125),
  A = n(271383),
  m = n(430824),
  O = n(496675),
  R = n(699516),
  C = n(594174),
  p = n(981631),
  g = n(689938);
let L = "SELECTABLE",
  v = "VOCAL",
  D = null,
  M = {},
  P = {},
  y = {},
  U = null,
  b = {},
  G = {
    comparator: -1,
    channel: (0, h.kt)({
      id: p.Sc2,
      type: p.d4z.GUILD_CATEGORY,
      name: g.Z.Messages.UNCATEGORIZED
    })
  },
  w = x(p.kod),
  k = [],
  B = {};

function x(e) {
  return {
    id: e,
    [L]: [],
    [v]: [],
    [p.d4z.GUILD_CATEGORY]: [G],
    count: 0
  }
}

function V(e, t) {
  let {
    comparator: n
  } = e, {
    comparator: i
  } = t;
  return n - i
}

function Z() {
  M = {}, b = {}, P = {}, y = {}, null != D && H(D)
}

function H(e) {
  var t;
  let n = x(e);
  return M[e] = n, b[e] = [], ! function(e) {
      let {
        id: t
      } = e, n = function(e) {
        if (e === p.I_8) return function() {
          let e = {},
            t = I.Z.getFavoriteChannels();
          for (let n in t) {
            let i = N.Z.getChannel(n);
            if (null == i) continue;
            let r = t[n],
              s = (0, T.r)(t, r, i);
            e[n] = {
              channel: s,
              comparator: s.position
            }
          }
          return e
        }();
        let t = {},
          n = N.Z.getMutableGuildChannelsForGuild(e);
        for (let e in n) t[e] = {
          channel: n[e],
          comparator: n[e].position
        };
        return t
      }(t);
      l().forEach(n, n => {
        var i;
        let r = n.channel;
        if (e.count += 1, h.zS.has(r.type) && !O.Z.can(p.Plq.VIEW_CHANNEL, r) && !c.Z.isChannelGated(r.guild_id, r.id) && r.id !== U) return;
        let s = (i = r.type, (0, h.r8)(i) ? L : (0, h.bw)(i) ? v : i);
        r.type === p.d4z.GUILD_DIRECTORY && (null == b[t] && (b[t] = []), b[t].push(n)), null != e[s] && e[s].push(n)
      })
    }(n), (t = n)[L].sort(V), t[v].sort(V), t[p.d4z.GUILD_CATEGORY].sort(V),
    function(e) {
      let t = P[e.id] = {},
        n = {};
      e[L].forEach(e => {
        let {
          channel: i
        } = e, r = (0, E.F6)(i, C.default, R.Z), s = Object.prototype.hasOwnProperty.call(n, r) ? n[r] : null;
        null == s ? n[r] = 1 : (n[r] = s + 1, r += "~".concat(s)), t[i.id] = {
          id: i.id,
          name: r
        }
      })
    }(n),
    function(e) {
      (function(e, t) {
        let n = m.Z.getGuild(t);
        if (null != n && W(e, n)) return !0;
        let i = M[t];
        null == i && (i = H(t));
        let {
          [L]: r, [v]: s
        } = i;
        for (let {
            channel: t
          }
          of r)
          if (W(e, t)) return !0;
        for (let {
            channel: t
          }
          of s)
          if (W(e, t)) return !0;
        return !1
      })(C.default.getCurrentUser(), e) ? y[e] = !0: delete y[e]
    }(e), n
}

function F(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  if (null == t) return !1;
  M[t] = void 0, D === t && H(t)
}

function Y(e) {
  let {
    channel: {
      guild_id: t
    }
  } = e;
  if (null == t) return !1;
  M[t] = void 0, t === D && H(t)
}

function j(e) {
  let {
    guildId: t
  } = e;
  M[t] = void 0, t === D && H(t)
}

function W(e, t) {
  return u.Db(S.uB({
    user: e,
    context: t,
    checkElevated: !1
  }), p.TC2)
}

function K(e, t) {
  var n;
  U = t;
  let i = null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : null;
  if (null == i) return !1;
  M[i] = void 0, i === D && H(i)
}

function z() {
  H(p.I_8)
}
class q extends(i = _.ZP.Store) {
  initialize() {
    this.waitFor(m.Z, A.ZP, N.Z, O.Z, f.default, c.Z, I.Z), this.syncWith([I.Z], z)
  }
  getAllGuilds() {
    return M
  }
  getChannels(e) {
    var t;
    let n;
    return null != e ? (null == (n = M[t = e]) && (n = H(t)), n) : w
  }
  getFirstChannelOfType(e, t, n) {
    let i = this.getChannels(e)[n].find(t);
    return null != i ? i.channel : null
  }
  getFirstChannel(e, t) {
    var n;
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null !== (n = this.getFirstChannelOfType(e, t, L)) && void 0 !== n ? n : i ? this.getFirstChannelOfType(e, t, v) : null
  }
  getDefaultChannel(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.Plq.VIEW_CHANNEL;
    return this.getFirstChannel(e, e => O.Z.can(n, e.channel), t)
  }
  getSFWDefaultChannel(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.Plq.VIEW_CHANNEL;
    return this.getFirstChannel(e, e => O.Z.can(n, e.channel) && !e.channel.nsfw, t)
  }
  getSelectableChannelIds(e) {
    return this.getChannels(e)[L].map(e => {
      let {
        channel: t
      } = e;
      return t.id
    })
  }
  getSelectableChannels(e) {
    return this.getChannels(e)[L]
  }
  getVocalChannelIds(e) {
    return this.getChannels(e)[v].map(e => {
      let {
        channel: t
      } = e;
      return t.id
    })
  }
  getDirectoryChannelIds(e) {
    var t, n;
    return null !== (n = null === (t = b[e]) || void 0 === t ? void 0 : t.map(e => {
      let {
        channel: t
      } = e;
      return t.id
    })) && void 0 !== n ? n : k
  }
  hasSelectableChannel(e, t) {
    return this.getSelectableChannelIds(e).includes(t)
  }
  hasElevatedPermissions(e) {
    return y[e] || !1
  }
  hasChannels(e) {
    return this.getChannels(e).count > 0
  }
  hasCategories(e) {
    return this.getChannels(e)[p.d4z.GUILD_CATEGORY].length > 1
  }
  getTextChannelNameDisambiguations(e) {
    var t;
    return null != e && null !== (t = P[e]) && void 0 !== t ? t : B
  }
}
o = "GuildChannelStore", (s = "displayName") in(r = q) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.ZP = new q(d.Z, {
  BACKGROUND_SYNC: Z,
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t
    } = e;
    if (D = null != t ? t : null, null == t || null != M[t]) return !1;
    H(t)
  },
  CONNECTION_OPEN: Z,
  OVERLAY_INITIALIZE: Z,
  CACHE_LOADED_LAZY: Z,
  GUILD_CREATE: F,
  GUILD_UPDATE: F,
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t
      }
    } = e;
    return delete M[t], delete P[t], delete y[t], delete b[t], !0
  },
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    if (f.default.getId() !== n.id) return !1;
    M[t] = void 0, t === D && H(t)
  },
  CHANNEL_CREATE: Y,
  CHANNEL_DELETE: Y,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    for (let e of t) {
      let {
        guild_id: t
      } = e;
      if (null != t) M[t] = void 0, n = !0, D === t && H(t)
    }
    return n
  },
  GUILD_ROLE_CREATE: j,
  GUILD_ROLE_UPDATE: j,
  GUILD_ROLE_DELETE: j,
  IMPERSONATE_UPDATE: j,
  IMPERSONATE_STOP: j,
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null == t && null != U ? K(N.Z.getChannel(U), null) : K(N.Z.getChannel(t), t)
  },
  VOICE_CHANNEL_STATUS_UPDATE: function(e) {
    let t = N.Z.getBasicChannel(e.id);
    null != t && null != t.guild_id && H(t.guild_id)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      let {
        channelId: n,
        sessionId: i
      } = t;
      return f.default.getSessionId() !== i ? e : K(N.Z.getChannel(n), n) || e
    }, !1)
  }
})