"use strict";
let i;
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var s = n("917351"),
  r = n.n(s),
  a = n("446674"),
  o = n("913144"),
  l = n("813006"),
  u = n("665618"),
  d = n("605136"),
  c = n("271938"),
  f = n("49111"),
  _ = n("695838");
let h = {},
  g = !1,
  m = [];

function E(e) {
  h = {}, i = 0, null != e.guilds && r.forEach(e.guilds, e => {
    i++, h[e.id] = u.fromSerializedGuildRecord(e)
  })
}

function p(e) {
  let {
    guildId: t,
    role: n
  } = e, i = h[t];
  null != i && (h = {
    ...h,
    [i.id]: i.upsertRole(d.fromServerRole(n))
  })
}
class v extends a.default.Store {
  getGuild(e) {
    if (null != e) return e === f.FAVORITES ? _.FAVORITES_GUILD_RECORD : h[e]
  }
  getGuilds() {
    return h
  }
  getGuildIds() {
    return Object.keys(h)
  }
  getGuildCount() {
    return i
  }
  isLoaded() {
    return g
  }
  getGeoRestrictedGuilds() {
    return m
  }
}
v.displayName = "GuildStore";
var S = new v(o.default, {
  BACKGROUND_SYNC: function(e) {
    for (let t of e.guilds) {
      let e = h[t.id];
      if (null == e || "unavailable" === t.data_mode) return;
      h[t.id] = u.fromBackgroundSync(t, e)
    }
    i = Object.keys(h).length
  },
  CONNECTION_OPEN: function(e) {
    g = !0, h = {}, i = 0, e.guilds.forEach(e => {
      i++, h[e.id] = u.fromServer(e)
    }), m = e.geoRestrictedGuilds
  },
  OVERLAY_INITIALIZE: function(e) {
    var t;
    h = {}, i = 0, null === (t = e.guilds) || void 0 === t || t.forEach(e => {
      i++, h[e.id] = new l.default(e)
    })
  },
  CACHE_LOADED: E,
  CACHE_LOADED_LAZY: E,
  GUILD_CREATE: function(e) {
    let t = u.fromServer(e.guild, h[e.guild.id]);
    null == h[t.id] && i++, h = {
      ...h,
      [t.id]: t
    }
  },
  GUILD_UPDATE: function(e) {
    let t = u.fromServerUpdate(e.guild, h[e.guild.id]);
    null == h[t.id] && i++, h = {
      ...h,
      [t.id]: t
    }
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e, n = m.findIndex(e => e.id === t.id);
    if (-1 !== n) {
      m.splice(n, 1), m = [...m];
      return
    }
    if (null == h[t.id] || t.unavailable) return !1;
    h = {
      ...h
    }, delete h[t.id], i--
  },
  GUILD_ROLE_CREATE: p,
  GUILD_ROLE_UPDATE: p,
  GUILD_ROLE_DELETE: function(e) {
    let {
      guildId: t,
      roleId: n
    } = e, i = h[t];
    null != i && (h = {
      ...h,
      [t]: i.deleteRole(n)
    })
  },
  GUILD_MEMBER_ADD: function(e) {
    let {
      guildId: t,
      joinedAt: n,
      user: i
    } = e, s = c.default.getId(), r = h[t];
    if (s !== i.id || null == r) return !1;
    let a = "string" == typeof n ? new Date(n) : n;
    if (a === r.joinedAt || null == a) return !1;
    h = {
      ...h,
      [t]: r.updateJoinedAt(a)
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