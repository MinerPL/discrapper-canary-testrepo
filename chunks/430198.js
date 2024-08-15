n(47120);
var r, i, a, s, o = n(149765),
  l = n(442837),
  u = n(570140),
  c = n(223892),
  d = n(738774),
  _ = n(644542),
  E = n(923726),
  f = n(973542),
  h = n(790285),
  p = n(160404),
  m = n(131704),
  I = n(592125),
  T = n(271383),
  g = n(430824),
  S = n(594174),
  A = n(981631);
let N = {},
  v = new Set();

function O(e) {
  let {
guildId: t,
role: n,
isPreviewingRoles: r
  } = e;
  return !!(0, f.Z)(n) && (!!(r || (0, f.h)(null != n ? n : void 0) || function(e, t) {
if (null == e)
  return !1;
let n = S.default.getCurrentUser();
if (null == n)
  return !1;
let r = T.ZP.getMember(t, n.id);
return null != r && r.roles.includes(e.id);
  }(n, t)) || !1);
}

function R(e, t) {
  if (!t.hasFeature(A.oNc.CREATOR_MONETIZABLE) && !t.hasFeature(A.oNc.CREATOR_MONETIZABLE_PROVISIONAL))
return !1;
  let n = p.Z.isViewingServerShop(t.id);
  for (let r of Object.keys(e.permissionOverwrites)) {
let i = g.Z.getRole(t.id, r);
if (!O({
    guildId: t.id,
    role: i,
    isPreviewingRoles: n
  }))
  continue;
let a = e.permissionOverwrites[r];
if ((0, h.TG)(e, a))
  return !0;
  }
  let r = g.Z.getRole(t.id, t.getEveryoneRoleId()),
i = null != r && !o.e$(r.permissions, A.Plq.VIEW_CHANNEL),
a = (0, h.wB)(e, e.permissionOverwrites[t.id]);
  if (i && !a) {
for (let e of Object.values(g.Z.getRoles(t.id)))
  if (O({
      guildId: t.id,
      role: e,
      isPreviewingRoles: n
    }) && (0, h.MT)(e))
    return !0;
  }
  return !1;
}

function C(e, t) {
  let n = N[e];
  if (null == n)
return !1;
  let r = I.Z.getChannel(t);
  if (null == r)
return !1;
  let i = g.Z.getGuild(r.getGuildId());
  if (null == i)
return !1;
  let a = n.has(t),
s = R(r, i);
  return a !== s && (s ? n.add(t) : n.delete(t), !0);
}

function y() {
  N = {}, v.clear();
}

function D(e) {
  let {
guild: t
  } = e;
  delete N[t.id];
}

function L(e) {
  let {
guildId: t
  } = e;
  delete N[t];
}

function b(e) {
  let {
channel: t
  } = e;
  return null != t.guild_id && C(t.guild_id, t.id);
}
class M extends(r = l.ZP.Store) {
  initialize() {
this.waitFor(g.Z, I.Z, p.Z), _.Zo.subscribe({
  location: '1'
}, () => y());
  }
  isChannelGated(e, t) {
if (null == e)
  return !1;
let n = N[e];
return null == n && (! function(e) {
  let t = g.Z.getGuild(e);
  if (null == t)
    return;
  let n = N[e] = new Set();
  if (!t.hasFeature(A.oNc.ROLE_SUBSCRIPTIONS_ENABLED) || !(0, E.kT)(e) && !(0, c.Rw)(t))
    return;
  let r = I.Z.getMutableGuildChannelsForGuild(e);
  for (let e in r) {
    let i = r[e];
    R(i, t) && n.add(i.id);
  }
}(e), n = N[e]), null != n && n.has(t);
  }
  isChannelGatedAndVisible(e, t) {
return null != e && this.isChannelGated(e, t) && !v.has(e);
  }
  isChannelOrThreadParentGated(e, t) {
if (null == e)
  return !1;
if (this.isChannelGated(e, t))
  return !0;
let n = I.Z.getChannel(t);
return !!(null != n && null != n.parent_id && m.Ec.has(null == n ? void 0 : n.type)) && this.isChannelOrThreadParentGated(e, n.parent_id);
  }
}
s = 'GatedChannelStore', (a = 'displayName') in(i = M) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new M(u.Z, {
  CONNECTION_OPEN: y,
  OVERLAY_INITIALIZE: y,
  CACHE_LOADED_LAZY: y,
  GUILD_CREATE: D,
  GUILD_UPDATE: D,
  GUILD_DELETE: D,
  GUILD_ROLE_CREATE: L,
  GUILD_ROLE_UPDATE: L,
  GUILD_ROLE_DELETE: L,
  IMPERSONATE_UPDATE: L,
  IMPERSONATE_STOP: L,
  CHANNEL_CREATE: b,
  CHANNEL_DELETE: b,
  CHANNEL_UPDATES: function(e) {
let {
  channels: t
} = e, n = !1;
for (let e of t) {
  if (null != e.guild_id)
    C(e.guild_id, e.id) && (n = !0);
}
return n;
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function(e) {
let {
  guildId: t,
  restrictions: n
} = e;
(0, d.uq)(n) ? v.add(t): v.delete(t);
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function(e) {
let {
  guildId: t
} = e;
v.add(t);
  }
});