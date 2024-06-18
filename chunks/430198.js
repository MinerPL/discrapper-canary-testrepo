"use strict";
n(47120);
var i, r, s, o, a = n(149765),
  l = n(442837),
  u = n(570140),
  _ = n(223892),
  d = n(738774),
  c = n(644542),
  E = n(923726),
  I = n(973542),
  T = n(790285),
  h = n(160404),
  S = n(592125),
  f = n(271383),
  N = n(430824),
  A = n(594174),
  m = n(981631);
let O = {},
  R = new Set;

function C(e) {
  let {
    guildId: t,
    role: n,
    isPreviewingRoles: i
  } = e;
  return !!(0, I.Z)(n) && (!!(i || (0, I.h)(null != n ? n : void 0) || function(e, t) {
    if (null == e) return !1;
    let n = A.default.getCurrentUser();
    if (null == n) return !1;
    let i = f.ZP.getMember(t, n.id);
    return null != i && i.roles.includes(e.id)
  }(n, t)) || !1)
}

function p(e, t) {
  if (!t.hasFeature(m.oNc.CREATOR_MONETIZABLE) && !t.hasFeature(m.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) return !1;
  let n = h.Z.isViewingServerShop(t.id);
  for (let i of Object.keys(e.permissionOverwrites)) {
    let r = N.Z.getRole(t.id, i);
    if (!C({
        guildId: t.id,
        role: r,
        isPreviewingRoles: n
      })) continue;
    let s = e.permissionOverwrites[i];
    if ((0, T.TG)(e, s)) return !0
  }
  let i = N.Z.getRole(t.id, t.getEveryoneRoleId()),
    r = null != i && !a.e$(i.permissions, m.Plq.VIEW_CHANNEL),
    s = (0, T.wB)(e, e.permissionOverwrites[t.id]);
  if (r && !s) {
    for (let e of Object.values(N.Z.getRoles(t.id)))
      if (C({
          guildId: t.id,
          role: e,
          isPreviewingRoles: n
        }) && (0, T.MT)(e)) return !0
  }
  return !1
}

function g(e, t) {
  let n = O[e];
  if (null == n) return !1;
  let i = S.Z.getChannel(t);
  if (null == i) return !1;
  let r = N.Z.getGuild(i.getGuildId());
  if (null == r) return !1;
  let s = n.has(t),
    o = p(i, r);
  return s !== o && (o ? n.add(t) : n.delete(t), !0)
}

function L() {
  O = {}, R.clear()
}

function v(e) {
  let {
    guild: t
  } = e;
  delete O[t.id]
}

function D(e) {
  let {
    guildId: t
  } = e;
  delete O[t]
}

function M(e) {
  let {
    channel: t
  } = e;
  return null != t.guild_id && g(t.guild_id, t.id)
}
class P extends(i = l.ZP.Store) {
  initialize() {
    this.waitFor(N.Z, S.Z, h.Z), c.Zo.subscribe({
      location: "1"
    }, () => L())
  }
  isChannelGated(e, t) {
    if (null == e) return !1;
    let n = O[e];
    return null == n && (! function(e) {
      let t = N.Z.getGuild(e);
      if (null == t) return;
      let n = O[e] = new Set;
      if (!t.hasFeature(m.oNc.ROLE_SUBSCRIPTIONS_ENABLED) || !(0, E.kT)(e) && !(0, _.Rw)(t)) return;
      let i = S.Z.getMutableGuildChannelsForGuild(e);
      for (let e in i) {
        let r = i[e];
        p(r, t) && n.add(r.id)
      }
    }(e), n = O[e]), null != n && n.has(t)
  }
  isChannelGatedAndVisible(e, t) {
    return null != e && this.isChannelGated(e, t) && !R.has(e)
  }
}
o = "GatedChannelStore", (s = "displayName") in(r = P) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new P(u.Z, {
  CONNECTION_OPEN: L,
  OVERLAY_INITIALIZE: L,
  CACHE_LOADED_LAZY: L,
  GUILD_CREATE: v,
  GUILD_UPDATE: v,
  GUILD_DELETE: v,
  GUILD_ROLE_CREATE: D,
  GUILD_ROLE_UPDATE: D,
  GUILD_ROLE_DELETE: D,
  IMPERSONATE_UPDATE: D,
  IMPERSONATE_STOP: D,
  CHANNEL_CREATE: M,
  CHANNEL_DELETE: M,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    for (let e of t) {
      if (null != e.guild_id) g(e.guild_id, e.id) && (n = !0)
    }
    return n
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function(e) {
    let {
      guildId: t,
      restrictions: n
    } = e;
    (0, d.uq)(n) ? R.add(t): R.delete(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function(e) {
    let {
      guildId: t
    } = e;
    R.add(t)
  }
})