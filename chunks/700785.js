"use strict";
n.d(t, {
  BT: function() {
    return x
  },
  Hn: function() {
    return A
  },
  Hu: function() {
    return k
  },
  I0: function() {
    return function e(t) {
      let n, {
          forceRoles: i,
          context: r,
          overwrites: s,
          roles: o,
          checkElevated: a = !0,
          excludeGuildPermissions: l
        } = t,
        u = R;
      if (r instanceof c.Sf) {
        var _;
        if (r.isScheduledForDeletion()) return A;
        if (c.Ec.has(r.type)) {
          let t = I.Z.getChannel(r.parent_id);
          return null == t ? A : y(r, e({
            forceRoles: i,
            context: t,
            overwrites: s,
            roles: o,
            checkElevated: a,
            excludeGuildPermissions: l
          }), !1)
        }
        u = null !== (_ = r.computeLurkerPermissionsAllowList()) && void 0 !== _ ? _ : u;
        s = null != s ? {
          ...r.permissionOverwrites,
          ...s
        } : r.permissionOverwrites;
        let t = r.getGuildId();
        n = null != t ? h.Z.getGuild(t) : null
      } else s = null != s ? s : {}, n = r;
      if (null == n) return A;
      let d = {
        userId: N.lds,
        nick: "",
        guildId: n.id,
        guildMemberAvatar: null,
        roles: f.default.keys(i),
        colorString: null,
        hoistRoleId: null,
        premiumSince: null,
        isPending: !1,
        joinedAt: new Date().toISOString(),
        communicationDisabledUntil: null
      };
      return M({
        userId: N.lds,
        member: d,
        guild: n,
        overwrites: s,
        roles: o,
        checkElevated: a,
        excludeGuildPermissions: l,
        lurkerPermissionsMask: u
      })
    }
  },
  Og: function() {
    return y
  },
  TP: function() {
    return O
  },
  Uu: function() {
    return V
  },
  e9: function() {
    return w
  },
  iJ: function() {
    return b
  },
  o4: function() {
    return U
  },
  oz: function() {
    return Z
  },
  r6: function() {
    return G
  },
  uB: function() {
    return P
  },
  we: function() {
    return B
  },
  ym: function() {
    return L
  }
}), n(47120);
var i = n(392711),
  r = n.n(i),
  s = n(149765),
  o = n(911969),
  a = n(715903),
  l = n(69882),
  u = n(160404),
  _ = n(41776),
  d = n(569471),
  c = n(131704),
  E = n(314897),
  I = n(592125),
  T = n(271383),
  h = n(430824),
  S = n(594174),
  f = n(709054),
  N = n(981631);
let A = s.vB(0),
  m = s.$e(...r().values(N.Plq)),
  O = s.$e(N.Plq.CREATE_INSTANT_INVITE, N.Plq.CHANGE_NICKNAME, N.Plq.VIEW_CHANNEL, N.Plq.SEND_MESSAGES, N.Plq.EMBED_LINKS, N.Plq.ATTACH_FILES, N.Plq.READ_MESSAGE_HISTORY, N.Plq.MENTION_EVERYONE, N.Plq.USE_EXTERNAL_EMOJIS, N.Plq.USE_EXTERNAL_STICKERS, N.Plq.ADD_REACTIONS, N.Plq.CREATE_PUBLIC_THREADS, N.Plq.CREATE_PRIVATE_THREADS, N.Plq.SEND_MESSAGES_IN_THREADS, N.Plq.SEND_POLLS, N.Plq.CONNECT, N.Plq.SPEAK, N.Plq.USE_VAD, N.Plq.STREAM, N.Plq.USE_EMBEDDED_ACTIVITIES, N.Plq.USE_SOUNDBOARD, N.Plq.REQUEST_TO_SPEAK, N.Plq.USE_APPLICATION_COMMANDS, N.Plq.CREATE_GUILD_EXPRESSIONS, N.Plq.CREATE_EVENTS, N.Plq.USE_EXTERNAL_APPS),
  R = s.$e(N.Plq.VIEW_CHANNEL, N.Plq.READ_MESSAGE_HISTORY),
  C = s.$e(N.Plq.VIEW_CHANNEL, N.Plq.SEND_MESSAGES, N.Plq.CONNECT, N.Plq.SPEAK, N.Plq.STREAM, N.Plq.USE_EMBEDDED_ACTIVITIES, N.Plq.USE_EXTERNAL_APPS, N.Plq.USE_EXTERNAL_EMOJIS, N.Plq.USE_EXTERNAL_SOUNDS, N.Plq.USE_EXTERNAL_STICKERS, N.Plq.USE_SOUNDBOARD, N.Plq.USE_VAD),
  p = s.$e(N.Plq.VIEW_CHANNEL, N.Plq.READ_MESSAGE_HISTORY),
  g = s.$e(N.Plq.VIEW_CHANNEL, N.Plq.READ_MESSAGE_HISTORY, N.Plq.CHANGE_NICKNAME),
  L = s.$e(N.Plq.MANAGE_GUILD, N.Plq.MANAGE_ROLES, N.Plq.ADMINISTRATOR, N.Plq.BAN_MEMBERS, N.Plq.MANAGE_NICKNAMES, N.Plq.CREATE_GUILD_EXPRESSIONS, N.Plq.MANAGE_GUILD_EXPRESSIONS, N.Plq.MANAGE_WEBHOOKS, N.Plq.VIEW_AUDIT_LOG);

function v(e, t, n) {
  let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
  if (i && t.mfaLevel === N.BpS.ELEVATED && n === E.default.getId()) {
    var r;
    !(null === (r = S.default.getCurrentUser()) || void 0 === r ? void 0 : r.mfaEnabled) && (e = s.Od(e, N.TC2))
  }
  return e
}

function D(e, t, n, i) {
  let r = i[e];
  if (null != r && (n = s.Od(n, r.deny), n = s.IH(n, r.allow)), null != t) {
    let e = A,
      r = A;
    for (let n = 0; n < t.roles.length; n++) {
      let o = i[t.roles[n]];
      null != o && (e = s.IH(e, o.allow), r = s.IH(r, o.deny))
    }
    n = s.Od(n, r), n = s.IH(n, e);
    let o = i[t.userId];
    null != o && (n = s.Od(n, o.deny), n = s.IH(n, o.allow));
    let u = s.e$(n, N.Plq.ADMINISTRATOR);
    (0, a.EY)(t) && !u && (n = s.hX(n, g)), (0, l.b)(t) && !u && (n = s.hX(n, p))
  }
  return n
}

function M(e) {
  let {
    userId: t,
    member: n,
    guild: i,
    overwrites: r,
    roles: o,
    checkElevated: a = !0,
    excludeGuildPermissions: l = !1,
    lurkerPermissionsMask: u = R
  } = e;
  if (l) return D(i.id, n, A, r);
  let d = (o = null != o ? {
      ...h.Z.getRoles(i.id),
      ...o
    } : h.Z.getRoles(i.id))[i.getEveryoneRoleId()],
    c = null != d ? d.permissions : O;
  if (null != n)
    for (let e = 0; e < n.roles.length; e++) {
      let t = o[n.roles[e]];
      void 0 !== t && (c = s.IH(c, t.permissions))
    }
  return c = s.e$(c, N.Plq.ADMINISTRATOR) ? m : D(i.id, n, c, r), (_.Z.isLurking(i.id) || (null == n ? void 0 : n.isPending)) && (c = s.hX(c, u)), T.ZP.isCurrentUserGuest(i.id) && (c = s.hX(c, C)), v(c, i, t, a)
}

function P(e) {
  var t, n, i;
  let r, {
    user: s,
    context: o,
    overwrites: a,
    roles: l,
    checkElevated: _ = !0,
    excludeGuildPermissions: E = !1
  } = e;
  if (null == s) return A;
  let f = "string" == typeof s ? s : s.id,
    N = R;
  if (o instanceof c.Sf) {
    if (o.isScheduledForDeletion()) return A;
    if (c.Ec.has(o.type)) {
      let e = I.Z.getChannel(o.parent_id);
      if (null == e || e.isScheduledForDeletion()) return A;
      let t = f === (null === (n = S.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && d.Z.hasJoined(o.id);
      return y(o, P({
        user: s,
        context: e,
        overwrites: a,
        roles: l,
        checkElevated: _,
        excludeGuildPermissions: E
      }), t)
    }
    N = null !== (i = o.computeLurkerPermissionsAllowList()) && void 0 !== i ? i : N;
    a = null != a ? {
      ...o.permissionOverwrites,
      ...a
    } : o.permissionOverwrites;
    let e = o.getGuildId();
    r = null != e ? h.Z.getGuild(e) : null
  } else a = null != a ? a : {}, r = o;
  if (null == r) return A;
  if (!(f === (null === (t = S.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && u.Z.isViewingRoles(r.id)) && r.isOwner(f)) return v(m, r, f, _);
  let O = T.ZP.getMember(r.id, f);
  return M({
    userId: f,
    member: O,
    guild: r,
    overwrites: a,
    roles: l,
    checkElevated: _,
    excludeGuildPermissions: E,
    lurkerPermissionsMask: N
  })
}

function y(e, t, n) {
  return e.type !== N.d4z.PRIVATE_THREAD || n || s.e$(t, N.Plq.MANAGE_THREADS) ? s.e$(t, N.Plq.SEND_MESSAGES_IN_THREADS) ? e.isLockedThread() && !s.e$(t, N.Plq.MANAGE_THREADS) ? s.Od(t, N.Plq.SEND_MESSAGES) : s.$e(t, N.Plq.SEND_MESSAGES) : s.Od(t, N.Plq.SEND_MESSAGES) : A
}

function U(e, t) {
  if (c.Ec.has(e.type)) return !0;
  let {
    guild_id: n
  } = e;
  if (null == t || null == n || n !== t.guild_id) return !1;
  let i = {
      ...e.permissionOverwrites
    },
    r = {
      ...t.permissionOverwrites
    };
  return null == i[n] && (i[n] = B(n)), null == r[n] && (r[n] = B(n)), Object.keys(i).length === Object.keys(r).length && !Object.keys(i).some(e => {
    let t = i[e],
      n = r[e];
    return !(null != n && s.fS(n.deny, t.deny) && s.fS(n.allow, t.allow)) && !0
  })
}

function b(e) {
  var t;
  return r().some(h.Z.getRoles(e.id), e => e.hoist && s.e$(e.permissions, N.Plq.ADMINISTRATOR)) ? void 0 : null !== (t = e.ownerId) && void 0 !== t ? t : void 0
}

function G(e, t, n, i) {
  if (null != t && e.isOwner(t)) return !0;
  if (null == n) return !1;
  let s = r()(h.Z.getRoles(e.id)).sortBy(e => e.position).map(e => e.id).value();
  return s.indexOf(n.id) > (null != i ? s.indexOf(i.id) : -1)
}

function w(e, t) {
  let n = T.ZP.getMember(e.id, t);
  if (null != n) return r()(h.Z.getRoles(e.id)).filter(e => -1 !== n.roles.indexOf(e.id)).sortBy(e => -e.position).first()
}

function k(e, t) {
  return null == t.hoistRoleId ? null : h.Z.getRole(e.id, t.hoistRoleId)
}

function B(e) {
  return {
    id: e,
    type: o.BN.ROLE,
    allow: A,
    deny: A
  }
}

function x(e) {
  let {
    permission: t,
    user: n,
    context: i,
    overwrites: r,
    roles: o,
    excludeGuildPermissions: a
  } = e;
  return s.e$(P({
    user: n,
    context: i,
    overwrites: r,
    roles: o,
    checkElevated: !0,
    excludeGuildPermissions: a
  }), t)
}

function V(e, t) {
  let n;
  let i = {};
  if (t instanceof c.Sf) {
    if (t.type === N.d4z.PRIVATE_THREAD || c.Ec.has(t.type) && null == (t = I.Z.getChannel(t.parent_id))) return !1;
    i = t.permissionOverwrites;
    let e = t.getGuildId();
    n = null != e ? h.Z.getGuild(e) : null
  } else n = t;
  if (null == n) return !1;
  let r = h.Z.getRole(n.id, n.getEveryoneRoleId());
  if (null == r) return !1;
  let o = r.permissions,
    a = i[n.id];
  return null != a && (o = s.Od(o, a.deny), o = s.IH(o, a.allow)), s.e$(o, e)
}

function Z(e, t) {
  let n;
  let i = {};
  if (t instanceof c.Sf) {
    if (t.type === N.d4z.PRIVATE_THREAD || c.Ec.has(t.type) && null == (t = I.Z.getChannel(t.parent_id))) return !1;
    i = t.permissionOverwrites;
    let e = t.getGuildId();
    n = null != e ? h.Z.getGuild(e) : null
  } else n = t;
  if (null == n) return !1;
  let o = h.Z.getRole(n.id, n.getEveryoneRoleId());
  return !(null == o || !s.e$(o.permissions, e) || r().some(i, t => s.e$(t.deny, e))) && !0
}