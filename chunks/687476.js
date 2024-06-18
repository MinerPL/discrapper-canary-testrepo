"use strict";
n(47120);
var i, r, s, o, a = n(149765),
  l = n(442837),
  u = n(570140),
  _ = n(271383),
  d = n(430824),
  c = n(594174),
  E = n(973542),
  I = n(981631);
let T = new Set,
  h = new Map,
  S = new Map,
  f = new Map,
  N = new Map,
  A = null;

function m(e) {
  let t = c.default.getCurrentUser(),
    n = d.Z.getGuild(e);
  if (null == n || null == t) return !1;
  let i = new Set,
    r = new Set,
    s = new Set;
  if (N.set(e, n.isOwner(t)), n.hasFeature(I.oNc.ROLE_SUBSCRIPTIONS_ENABLED)) {
    var o, l;
    let u = _.ZP.getMember(e, t.id),
      c = new Set(null !== (o = null == u ? void 0 : u.roles) && void 0 !== o ? o : []),
      T = d.Z.getRoles(n.id);
    for (let t in T) {
      ;
      let n = T[t];
      if ((0, E.Z)(n) && (i.add(t), (0, E.h)(n) && (r.add(t), c.has(t) && s.add(t))), c.has(t) && (l = n, a.e$(l.permissions, I.Plq.ADMINISTRATOR))) N.set(e, !0)
    }
  }
  return h.set(e, i), f.set(e, s), S.set(e, r), !0
}

function O() {
  h.clear(), f.clear(), S.clear(), N.clear(), A = null
}

function R(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  if (null == A) return !1;
  let n = d.Z.getGuild(t);
  if (null == n) return !1;
  let i = n.hasFeature(I.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
  if (i && !A.has(t)) {
    let e = new Set(A);
    return e.add(t), A = e, !0
  }
  if (!i && A.has(t)) {
    let e = new Set(A);
    return e.delete(t), A = e, !0
  }
  return !1
}

function C(e) {
  let {
    guildId: t
  } = e;
  return !!h.has(t) && m(t)
}
class p extends(i = l.ZP.Store) {
  initialize() {
    this.waitFor(d.Z)
  }
  getGuildIdsWithPurchasableRoles() {
    return null == A ? function() {
      let e = d.Z.getGuilds(),
        t = new Set;
      for (let n in e) e[n].hasFeature(I.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n);
      return A = t, t
    }() : A
  }
  buildRoles(e) {
    !h.has(e) && m(e)
  }
  getSubscriptionRoles(e) {
    var t;
    return this.buildRoles(e), null !== (t = h.get(e)) && void 0 !== t ? t : T
  }
  getPurchasableSubscriptionRoles(e) {
    var t;
    return this.buildRoles(e), null !== (t = S.get(e)) && void 0 !== t ? t : T
  }
  getUserSubscriptionRoles(e) {
    var t;
    return this.buildRoles(e), null !== (t = f.get(e)) && void 0 !== t ? t : T
  }
  getUserIsAdmin(e) {
    var t;
    return this.buildRoles(e), null !== (t = N.get(e)) && void 0 !== t && t
  }
}
o = "SubscriptionRoleStore", (s = "displayName") in(r = p) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new p(u.Z, {
  CONNECTION_OPEN: O,
  LOGOUT: O,
  GUILD_CREATE: R,
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t
      }
    } = e;
    if ((null == A ? void 0 : A.has(t)) !== !0) return !1;
    let n = new Set(A);
    n.delete(t), A = n
  },
  GUILD_UPDATE: R,
  GUILD_ROLE_CREATE: C,
  GUILD_ROLE_UPDATE: C,
  GUILD_ROLE_DELETE: C,
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: t,
      user: n
    } = e, i = c.default.getCurrentUser();
    return !!(n.id === (null == i ? void 0 : i.id) && h.has(t)) && m(t)
  }
})