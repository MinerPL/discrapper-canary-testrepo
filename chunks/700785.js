n.d(t, {
  BT: function() {
return B;
  },
  Hn: function() {
return g;
  },
  Hu: function() {
return G;
  },
  I0: function() {
return function e(t) {
  let n, {
      forceRoles: r,
      context: i,
      overwrites: a,
      roles: s,
      checkElevated: o = !0,
      excludeGuildPermissions: l
    } = t,
    u = N;
  if (i instanceof _.Sf) {
    var c;
    if (i.isScheduledForDeletion())
      return g;
    if (_.Ec.has(i.type)) {
      let t = f.Z.getChannel(i.parent_id);
      return null == t ? g : M(i, e({
        forceRoles: r,
        context: t,
        overwrites: a,
        roles: s,
        checkElevated: o,
        excludeGuildPermissions: l
      }), !1);
    }
    u = null !== (c = i.computeLurkerPermissionsAllowList()) && void 0 !== c ? c : u;
    a = null != a ? {
      ...i.permissionOverwrites,
      ...a
    } : i.permissionOverwrites;
    let t = i.getGuildId();
    n = null != t ? p.Z.getGuild(t) : null;
  } else
    a = null != a ? a : {}, n = i;
  if (null == n)
    return g;
  let d = {
    userId: T.lds,
    nick: '',
    guildId: n.id,
    guildMemberAvatar: null,
    roles: I.default.keys(r),
    colorString: null,
    hoistRoleId: null,
    premiumSince: null,
    isPending: !1,
    joinedAt: new Date().toISOString(),
    communicationDisabledUntil: null
  };
  return L({
    userId: T.lds,
    member: d,
    guild: n,
    overwrites: a,
    roles: s,
    checkElevated: o,
    excludeGuildPermissions: l,
    lurkerPermissionsMask: u
  });
};
  },
  Og: function() {
return M;
  },
  TP: function() {
return A;
  },
  Uu: function() {
return F;
  },
  e9: function() {
return x;
  },
  iJ: function() {
return U;
  },
  o4: function() {
return P;
  },
  oz: function() {
return V;
  },
  r6: function() {
return w;
  },
  uB: function() {
return b;
  },
  we: function() {
return k;
  },
  ym: function() {
return C;
  }
}), n(47120);
var r = n(392711),
  i = n.n(r),
  a = n(149765),
  s = n(911969),
  o = n(715903),
  l = n(69882),
  u = n(160404),
  c = n(41776),
  d = n(569471),
  _ = n(131704),
  E = n(314897),
  f = n(592125),
  h = n(271383),
  p = n(430824),
  m = n(594174),
  I = n(709054),
  T = n(981631);
let g = a.vB(0),
  S = a.$e(...i().values(T.Plq)),
  A = a.$e(T.Plq.CREATE_INSTANT_INVITE, T.Plq.CHANGE_NICKNAME, T.Plq.VIEW_CHANNEL, T.Plq.SEND_MESSAGES, T.Plq.EMBED_LINKS, T.Plq.ATTACH_FILES, T.Plq.READ_MESSAGE_HISTORY, T.Plq.MENTION_EVERYONE, T.Plq.USE_EXTERNAL_EMOJIS, T.Plq.USE_EXTERNAL_STICKERS, T.Plq.ADD_REACTIONS, T.Plq.CREATE_PUBLIC_THREADS, T.Plq.CREATE_PRIVATE_THREADS, T.Plq.SEND_MESSAGES_IN_THREADS, T.Plq.SEND_POLLS, T.Plq.CONNECT, T.Plq.SPEAK, T.Plq.USE_VAD, T.Plq.STREAM, T.Plq.USE_EMBEDDED_ACTIVITIES, T.Plq.USE_SOUNDBOARD, T.Plq.REQUEST_TO_SPEAK, T.Plq.USE_APPLICATION_COMMANDS, T.Plq.CREATE_GUILD_EXPRESSIONS, T.Plq.CREATE_EVENTS, T.Plq.USE_EXTERNAL_APPS),
  N = a.$e(T.Plq.VIEW_CHANNEL, T.Plq.READ_MESSAGE_HISTORY),
  v = a.$e(T.Plq.VIEW_CHANNEL, T.Plq.SEND_MESSAGES, T.Plq.CONNECT, T.Plq.SPEAK, T.Plq.STREAM, T.Plq.USE_EMBEDDED_ACTIVITIES, T.Plq.USE_EXTERNAL_APPS, T.Plq.USE_EXTERNAL_EMOJIS, T.Plq.USE_EXTERNAL_SOUNDS, T.Plq.USE_EXTERNAL_STICKERS, T.Plq.USE_SOUNDBOARD, T.Plq.USE_VAD),
  O = a.$e(T.Plq.VIEW_CHANNEL, T.Plq.READ_MESSAGE_HISTORY),
  R = a.$e(T.Plq.VIEW_CHANNEL, T.Plq.READ_MESSAGE_HISTORY, T.Plq.CHANGE_NICKNAME),
  C = a.$e(T.Plq.MANAGE_GUILD, T.Plq.MANAGE_ROLES, T.Plq.ADMINISTRATOR, T.Plq.BAN_MEMBERS, T.Plq.MANAGE_NICKNAMES, T.Plq.CREATE_GUILD_EXPRESSIONS, T.Plq.MANAGE_GUILD_EXPRESSIONS, T.Plq.MANAGE_WEBHOOKS, T.Plq.VIEW_AUDIT_LOG);

function y(e, t, n) {
  let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
  if (r && t.mfaLevel === T.BpS.ELEVATED && n === E.default.getId()) {
var i;
!(null === (i = m.default.getCurrentUser()) || void 0 === i ? void 0 : i.mfaEnabled) && (e = a.Od(e, T.TC2));
  }
  return e;
}

function D(e, t, n, r) {
  let i = r[e];
  if (null != i && (n = a.Od(n, i.deny), n = a.IH(n, i.allow)), null != t) {
let e = g,
  i = g;
for (let n = 0; n < t.roles.length; n++) {
  let s = r[t.roles[n]];
  null != s && (e = a.IH(e, s.allow), i = a.IH(i, s.deny));
}
n = a.Od(n, i), n = a.IH(n, e);
let s = r[t.userId];
null != s && (n = a.Od(n, s.deny), n = a.IH(n, s.allow));
let u = a.e$(n, T.Plq.ADMINISTRATOR);
(0, o.EY)(t) && !u && (n = a.hX(n, R)), (0, l.b)(t) && !u && (n = a.hX(n, O));
  }
  return n;
}

function L(e) {
  let {
userId: t,
member: n,
guild: r,
overwrites: i,
roles: s,
checkElevated: o = !0,
excludeGuildPermissions: l = !1,
lurkerPermissionsMask: u = N
  } = e;
  if (l)
return D(r.id, n, g, i);
  let d = (s = null != s ? {
  ...p.Z.getRoles(r.id),
  ...s
} : p.Z.getRoles(r.id))[r.getEveryoneRoleId()],
_ = null != d ? d.permissions : A;
  if (null != n)
for (let e = 0; e < n.roles.length; e++) {
  let t = s[n.roles[e]];
  void 0 !== t && (_ = a.IH(_, t.permissions));
}
  return _ = a.e$(_, T.Plq.ADMINISTRATOR) ? S : D(r.id, n, _, i), (c.Z.isLurking(r.id) || (null == n ? void 0 : n.isPending)) && (_ = a.hX(_, u)), h.ZP.isCurrentUserGuest(r.id) && (_ = a.hX(_, v)), y(_, r, t, o);
}

function b(e) {
  var t, n, r;
  let i, {
user: a,
context: s,
overwrites: o,
roles: l,
checkElevated: c = !0,
excludeGuildPermissions: E = !1
  } = e;
  if (null == a)
return g;
  let I = 'string' == typeof a ? a : a.id,
T = N;
  if (s instanceof _.Sf) {
if (s.isScheduledForDeletion())
  return g;
if (_.Ec.has(s.type)) {
  let e = f.Z.getChannel(s.parent_id);
  if (null == e || e.isScheduledForDeletion())
    return g;
  let t = I === (null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && d.Z.hasJoined(s.id);
  return M(s, b({
    user: a,
    context: e,
    overwrites: o,
    roles: l,
    checkElevated: c,
    excludeGuildPermissions: E
  }), t);
}
T = null !== (r = s.computeLurkerPermissionsAllowList()) && void 0 !== r ? r : T;
o = null != o ? {
  ...s.permissionOverwrites,
  ...o
} : s.permissionOverwrites;
let e = s.getGuildId();
i = null != e ? p.Z.getGuild(e) : null;
  } else
o = null != o ? o : {}, i = s;
  if (null == i)
return g;
  if (!(I === (null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && u.Z.isViewingRoles(i.id)) && i.isOwner(I))
return y(S, i, I, c);
  let A = h.ZP.getMember(i.id, I);
  return L({
userId: I,
member: A,
guild: i,
overwrites: o,
roles: l,
checkElevated: c,
excludeGuildPermissions: E,
lurkerPermissionsMask: T
  });
}

function M(e, t, n) {
  return e.type !== T.d4z.PRIVATE_THREAD || n || a.e$(t, T.Plq.MANAGE_THREADS) ? a.e$(t, T.Plq.SEND_MESSAGES_IN_THREADS) ? e.isLockedThread() && !a.e$(t, T.Plq.MANAGE_THREADS) ? a.Od(t, T.Plq.SEND_MESSAGES) : a.$e(t, T.Plq.SEND_MESSAGES) : a.Od(t, T.Plq.SEND_MESSAGES) : g;
}

function P(e, t) {
  if (_.Ec.has(e.type))
return !0;
  let {
guild_id: n
  } = e;
  if (null == t || null == n || n !== t.guild_id)
return !1;
  let r = {
  ...e.permissionOverwrites
},
i = {
  ...t.permissionOverwrites
};
  return null == r[n] && (r[n] = k(n)), null == i[n] && (i[n] = k(n)), Object.keys(r).length === Object.keys(i).length && !Object.keys(r).some(e => {
let t = r[e],
  n = i[e];
return !(null != n && a.fS(n.deny, t.deny) && a.fS(n.allow, t.allow)) && !0;
  });
}

function U(e) {
  var t;
  return i().some(p.Z.getRoles(e.id), e => e.hoist && a.e$(e.permissions, T.Plq.ADMINISTRATOR)) ? void 0 : null !== (t = e.ownerId) && void 0 !== t ? t : void 0;
}

function w(e, t, n, r) {
  if (null != t && e.isOwner(t))
return !0;
  if (null == n)
return !1;
  let a = i()(p.Z.getRoles(e.id)).sortBy(e => e.position).map(e => e.id).value();
  return a.indexOf(n.id) > (null != r ? a.indexOf(r.id) : -1);
}

function x(e, t) {
  let n = h.ZP.getMember(e.id, t);
  if (null != n)
return i()(p.Z.getRoles(e.id)).filter(e => -1 !== n.roles.indexOf(e.id)).sortBy(e => -e.position).first();
}

function G(e, t) {
  return null == t.hoistRoleId ? null : p.Z.getRole(e.id, t.hoistRoleId);
}

function k(e) {
  return {
id: e,
type: s.BN.ROLE,
allow: g,
deny: g
  };
}

function B(e) {
  let {
permission: t,
user: n,
context: r,
overwrites: i,
roles: s,
excludeGuildPermissions: o
  } = e;
  return a.e$(b({
user: n,
context: r,
overwrites: i,
roles: s,
checkElevated: !0,
excludeGuildPermissions: o
  }), t);
}

function F(e, t) {
  let n;
  let r = {};
  if (t instanceof _.Sf) {
if (t.type === T.d4z.PRIVATE_THREAD || _.Ec.has(t.type) && null == (t = f.Z.getChannel(t.parent_id)))
  return !1;
r = t.permissionOverwrites;
let e = t.getGuildId();
n = null != e ? p.Z.getGuild(e) : null;
  } else
n = t;
  if (null == n)
return !1;
  let i = p.Z.getRole(n.id, n.getEveryoneRoleId());
  if (null == i)
return !1;
  let s = i.permissions,
o = r[n.id];
  return null != o && (s = a.Od(s, o.deny), s = a.IH(s, o.allow)), a.e$(s, e);
}

function V(e, t) {
  let n;
  let r = {};
  if (t instanceof _.Sf) {
if (t.type === T.d4z.PRIVATE_THREAD || _.Ec.has(t.type) && null == (t = f.Z.getChannel(t.parent_id)))
  return !1;
r = t.permissionOverwrites;
let e = t.getGuildId();
n = null != e ? p.Z.getGuild(e) : null;
  } else
n = t;
  if (null == n)
return !1;
  let s = p.Z.getRole(n.id, n.getEveryoneRoleId());
  return !(null == s || !a.e$(s.permissions, e) || i().some(r, t => a.e$(t.deny, e))) && !0;
}