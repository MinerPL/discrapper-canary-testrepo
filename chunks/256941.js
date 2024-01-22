"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var i = n("316693"),
  s = n("446674"),
  r = n("913144"),
  a = n("26989"),
  o = n("305961"),
  l = n("697218"),
  u = n("828674"),
  d = n("49111");
let c = new Set,
  f = new Map,
  _ = new Map,
  h = new Map,
  g = new Map,
  m = null;

function E(e) {
  let t = l.default.getCurrentUser(),
    n = o.default.getGuild(e);
  if (null == n || null == t) return !1;
  let s = new Set,
    r = new Set,
    c = new Set;
  if (g.set(e, n.isOwner(t)), n.hasFeature(d.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) {
    var m, E;
    let o = a.default.getMember(e, t.id),
      l = new Set(null !== (m = null == o ? void 0 : o.roles) && void 0 !== m ? m : []);
    for (let t in n.roles) {
      ;
      let a = n.roles[t];
      if ((0, u.isSubscriptionRole)(a) && (s.add(t), (0, u.isSubscriptionRoleAvailableForPurchase)(a) && (r.add(t), l.has(t) && c.add(t))), l.has(t) && (E = a, i.default.has(E.permissions, d.Permissions.ADMINISTRATOR))) g.set(e, !0)
    }
  }
  return f.set(e, s), h.set(e, c), _.set(e, r), !0
}

function p() {
  f.clear(), h.clear(), _.clear(), g.clear(), m = null
}

function v(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  if (null == m) return !1;
  let n = o.default.getGuild(t);
  if (null == n) return !1;
  let i = n.hasFeature(d.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
  if (i && !m.has(t)) {
    let e = new Set(m);
    return e.add(t), m = e, !0
  }
  if (!i && m.has(t)) {
    let e = new Set(m);
    return e.delete(t), m = e, !0
  }
  return !1
}

function S(e) {
  let {
    guildId: t
  } = e;
  return !!f.has(t) && E(t)
}
class T extends s.default.Store {
  initialize() {
    this.waitFor(o.default)
  }
  getGuildIdsWithPurchasableRoles() {
    return null == m ? function() {
      let e = o.default.getGuilds(),
        t = new Set;
      for (let n in e) e[n].hasFeature(d.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n);
      return m = t, t
    }() : m
  }
  buildRoles(e) {
    !f.has(e) && E(e)
  }
  getSubscriptionRoles(e) {
    var t;
    return this.buildRoles(e), null !== (t = f.get(e)) && void 0 !== t ? t : c
  }
  getPurchasableSubscriptionRoles(e) {
    var t;
    return this.buildRoles(e), null !== (t = _.get(e)) && void 0 !== t ? t : c
  }
  getUserSubscriptionRoles(e) {
    var t;
    return this.buildRoles(e), null !== (t = h.get(e)) && void 0 !== t ? t : c
  }
  getUserIsAdmin(e) {
    var t;
    return this.buildRoles(e), null !== (t = g.get(e)) && void 0 !== t && t
  }
}
T.displayName = "SubscriptionRoleStore";
var I = new T(r.default, {
  CONNECTION_OPEN: p,
  LOGOUT: p,
  GUILD_CREATE: v,
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t
      }
    } = e;
    if ((null == m ? void 0 : m.has(t)) !== !0) return !1;
    let n = new Set(m);
    n.delete(t), m = n
  },
  GUILD_UPDATE: v,
  GUILD_ROLE_CREATE: S,
  GUILD_ROLE_UPDATE: S,
  GUILD_ROLE_DELETE: S,
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: t,
      user: n
    } = e, i = l.default.getCurrentUser();
    return !!(n.id === (null == i ? void 0 : i.id) && f.has(t)) && E(t)
  }
})