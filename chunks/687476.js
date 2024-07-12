n(47120);
var r, i, a, o, s = n(149765),
  l = n(442837),
  u = n(570140),
  c = n(271383),
  d = n(430824),
  _ = n(594174),
  E = n(973542),
  f = n(981631);
let h = new Set(),
  p = new Map(),
  m = new Map(),
  I = new Map(),
  T = new Map(),
  g = null;

function S(e) {
  let t = _.default.getCurrentUser(),
n = d.Z.getGuild(e);
  if (null == n || null == t)
return !1;
  let r = new Set(),
i = new Set(),
a = new Set();
  if (T.set(e, n.isOwner(t)), n.hasFeature(f.oNc.ROLE_SUBSCRIPTIONS_ENABLED)) {
var o, l;
let u = c.ZP.getMember(e, t.id),
  _ = new Set(null !== (o = null == u ? void 0 : u.roles) && void 0 !== o ? o : []),
  h = d.Z.getRoles(n.id);
for (let t in h) {
  ;
  let n = h[t];
  if ((0, E.Z)(n) && (r.add(t), (0, E.h)(n) && (i.add(t), _.has(t) && a.add(t))), _.has(t) && (l = n, s.e$(l.permissions, f.Plq.ADMINISTRATOR)))
    T.set(e, !0);
}
  }
  return p.set(e, r), I.set(e, a), m.set(e, i), !0;
}

function A() {
  p.clear(), I.clear(), m.clear(), T.clear(), g = null;
}

function N(e) {
  let {
guild: {
  id: t
}
  } = e;
  if (null == g)
return !1;
  let n = d.Z.getGuild(t);
  if (null == n)
return !1;
  let r = n.hasFeature(f.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
  if (r && !g.has(t)) {
let e = new Set(g);
return e.add(t), g = e, !0;
  }
  if (!r && g.has(t)) {
let e = new Set(g);
return e.delete(t), g = e, !0;
  }
  return !1;
}

function v(e) {
  let {
guildId: t
  } = e;
  return !!p.has(t) && S(t);
}
class O extends(r = l.ZP.Store) {
  initialize() {
this.waitFor(d.Z);
  }
  getGuildIdsWithPurchasableRoles() {
return null == g ? function() {
  let e = d.Z.getGuilds(),
    t = new Set();
  for (let n in e)
    e[n].hasFeature(f.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n);
  return g = t, t;
}() : g;
  }
  buildRoles(e) {
!p.has(e) && S(e);
  }
  getSubscriptionRoles(e) {
var t;
return this.buildRoles(e), null !== (t = p.get(e)) && void 0 !== t ? t : h;
  }
  getPurchasableSubscriptionRoles(e) {
var t;
return this.buildRoles(e), null !== (t = m.get(e)) && void 0 !== t ? t : h;
  }
  getUserSubscriptionRoles(e) {
var t;
return this.buildRoles(e), null !== (t = I.get(e)) && void 0 !== t ? t : h;
  }
  getUserIsAdmin(e) {
var t;
return this.buildRoles(e), null !== (t = T.get(e)) && void 0 !== t && t;
  }
}
o = 'SubscriptionRoleStore', (a = 'displayName') in(i = O) ? Object.defineProperty(i, a, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = o, t.Z = new O(u.Z, {
  CONNECTION_OPEN: A,
  LOGOUT: A,
  GUILD_CREATE: N,
  GUILD_DELETE: function(e) {
let {
  guild: {
    id: t
  }
} = e;
if ((null == g ? void 0 : g.has(t)) !== !0)
  return !1;
let n = new Set(g);
n.delete(t), g = n;
  },
  GUILD_UPDATE: N,
  GUILD_ROLE_CREATE: v,
  GUILD_ROLE_UPDATE: v,
  GUILD_ROLE_DELETE: v,
  GUILD_MEMBER_UPDATE: function(e) {
let {
  guildId: t,
  user: n
} = e, r = _.default.getCurrentUser();
return !!(n.id === (null == r ? void 0 : r.id) && p.has(t)) && S(t);
  }
});