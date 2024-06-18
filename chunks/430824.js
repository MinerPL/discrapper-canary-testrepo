"use strict";
let i;
n(47120);
var r, s, o, a, l = n(442837),
  u = n(902704),
  _ = n(570140),
  d = n(601964),
  c = n(411198),
  E = n(625137),
  I = n(709054),
  T = n(314897),
  h = n(981631),
  S = n(647086);
let f = {},
  N = {},
  A = !1,
  m = [];

function O(e) {
  for (let t of (N = {}, f = {}, i = 0, e)) i++, N[t.id] = c.cL(t), f[t.id] = t.roles
}

function R(e) {
  let {
    guildId: t,
    role: n
  } = e, i = f[t], r = E.CL(n), s = null == i ? void 0 : i[r.id];
  if (null != s && (0, u.Z)(r, s)) return !1;
  i = {
    ...i,
    [n.id]: E.CL(n)
  }, i = E.iw(t, Object.values(i)), f[t] = i
}
let C = Object.freeze({});
class p extends(r = l.ZP.Store) {
  getGuild(e) {
    return null == e ? void 0 : e === h.I_8 ? S.g : N[e]
  }
  getGuilds() {
    return N
  }
  getGuildIds() {
    return I.default.keys(N)
  }
  getGuildCount() {
    return i
  }
  isLoaded() {
    return A
  }
  getGeoRestrictedGuilds() {
    return m
  }
  getAllGuildsRoles() {
    return f
  }
  getRoles(e) {
    var t;
    return null !== (t = f[e]) && void 0 !== t ? t : C
  }
  getRole(e, t) {
    var n;
    return null === (n = f[e]) || void 0 === n ? void 0 : n[t]
  }
}
a = "GuildStore", (o = "displayName") in(s = p) ? Object.defineProperty(s, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = a, t.Z = new p(_.Z, {
  BACKGROUND_SYNC: function(e) {
    for (let n of e.guilds) {
      var t;
      let e = N[n.id];
      if (null == e || "unavailable" === n.data_mode) return;
      N[n.id] = c.sp(n, e), f[n.id] = "partial" === n.data_mode ? c.EO(n.id, null !== (t = f[n.id]) && void 0 !== t ? t : C, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : E.C5(n.id, n.roles)
    }
    i = Object.keys(N).length
  },
  CONNECTION_OPEN: function(e) {
    A = !0;
    let t = N;
    N = {}, f = {}, i = 0, e.guilds.forEach(e => {
      i++, N[e.id] = c.wD(e, t[e.id]), f[e.id] = e.roles instanceof Array ? E.C5(e.id, e.roles) : e.roles
    });
    let n = !1;
    if (m.length !== e.geoRestrictedGuilds.length) n = !0;
    else
      for (let t = 0; t < e.geoRestrictedGuilds.length; t++)
        if (!(0, u.Z)(m[t], e.geoRestrictedGuilds[t])) {
          n = !0;
          break
        } n && (m = e.geoRestrictedGuilds)
  },
  OVERLAY_INITIALIZE: function(e) {
    var t;
    N = {}, f = {}, i = 0, null === (t = e.guilds) || void 0 === t || t.forEach(e => {
      i++, N[e.id] = new d.ZP(e)
    }), f = e.allGuildsRoles
  },
  CACHE_LOADED: function(e) {
    O(e.guilds)
  },
  CACHE_LOADED_LAZY: function(e) {
    if (0 === e.guilds.length) return !1;
    O(e.guilds)
  },
  GUILD_CREATE: function(e) {
    let t = c.wD(e.guild, N[e.guild.id]);
    null == N[t.id] && i++, N = {
      ...N,
      [t.id]: t
    }, f[t.id] = e.guild.roles instanceof Array ? E.C5(t.id, e.guild.roles) : e.guild.roles
  },
  GUILD_UPDATE: function(e) {
    let t = c.di(e.guild, N[e.guild.id]);
    null == N[t.id] && i++, N = {
      ...N,
      [t.id]: t
    }, f[t.id] = E.C5(t.id, e.guild.roles)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e, n = m.findIndex(e => e.id === t.id);
    if (-1 !== n) {
      m.splice(n, 1), m = [...m];
      return
    }
    if (null == N[t.id] || t.unavailable) return !1;
    N = {
      ...N
    }, delete N[t.id], f[t.id] = void 0, i--
  },
  GUILD_ROLE_CREATE: R,
  GUILD_ROLE_UPDATE: R,
  GUILD_ROLE_DELETE: function(e) {
    let {
      guildId: t,
      roleId: n
    } = e, i = f[t];
    if (null == i) return !1;
    i = {
      ...i
    }, delete i[n], f[t] = i
  },
  GUILD_MEMBER_ADD: function(e) {
    let {
      guildId: t,
      joinedAt: n,
      user: i
    } = e, r = T.default.getId(), s = N[t];
    if (r !== i.id || null == s) return !1;
    let o = "string" == typeof n ? new Date(n) : n;
    if (o === s.joinedAt || null == o) return !1;
    N = {
      ...N,
      [t]: s.updateJoinedAt(o)
    }
  },
  GUILD_SETTINGS_SUBMIT_SUCCESS: function() {
    return !0
  },
  GUILD_GEO_RESTRICTED: function(e) {
    m = [...m, {
      id: e.guildId,
      name: e.name,
      icon: e.icon,
      unavailable: !0,
      geo_restricted: !0
    }]
  }
})