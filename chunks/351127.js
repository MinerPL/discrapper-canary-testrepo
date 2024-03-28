"use strict";
n.r(t), n.d(t, {
  ALL_PERMISSIONS: function() {
    return f
  },
  ELEVATED_PERMISSIONS: function() {
    return p
  },
  MOD_PERMISSIONS: function() {
    return m
  },
  isOwnerRole: function() {
    return E
  },
  useUserPermissionsAndRoles: function() {
    return C
  }
}), n("47120"), n("411104"), n("653041");
var a = n("149765"),
  l = n("399606"),
  s = n("271383"),
  i = n("430824"),
  r = n("594174"),
  o = n("700785"),
  u = n("981631"),
  d = n("135899");
let c = [u.Permissions.USE_CLYDE_AI],
  f = Object.keys(u.Permissions).filter(e => !c.includes(u.Permissions[e])),
  h = [...d.MODERATOR_PERMISSIONS, ...u.ElevatedPermissionsList, u.Permissions.ADMINISTRATOR, u.Permissions.KICK_MEMBERS, u.Permissions.BAN_MEMBERS, u.Permissions.MANAGE_GUILD, u.Permissions.MANAGE_CHANNELS, u.Permissions.MANAGE_ROLES, u.Permissions.MANAGE_MESSAGES, u.Permissions.MANAGE_THREADS, u.Permissions.MANAGE_GUILD_EXPRESSIONS, u.Permissions.CREATE_GUILD_EXPRESSIONS, u.Permissions.MANAGE_EVENTS, u.Permissions.CREATE_EVENTS, u.Permissions.MODERATE_MEMBERS, u.Permissions.MENTION_EVERYONE, u.Permissions.MANAGE_WEBHOOKS],
  m = Array.from(new Set(h)).map(e => {
    let t = f.find(t => u.Permissions[t] === e);
    if (null == t) throw Error("Permission ".concat(e, " not found in Permissions"));
    return t
  }),
  p = new Set(u.ElevatedPermissionsList);

function E(e, t) {
  return e === t
}

function C(e, t, n) {
  let d = (0, l.useStateFromStores)([i.default], () => i.default.getGuild(t), [t]);
  return (0, l.useStateFromStores)([s.default, r.default, i.default], () => {
    let l = {},
      c = s.default.getMember(t, e),
      f = r.default.getUser(e);
    if (null == d || null == c || null == f) return l;
    let h = i.default.getRole(d.id, d.getEveryoneRoleId()),
      m = o.computePermissions({
        user: f,
        context: d
      });
    for (let e of n) {
      let t = u.Permissions[e];
      if (a.has(m, t)) {
        for (let n of (l[e] = [], c.roles)) {
          let s = i.default.getRole(d.id, n);
          if (null != s)(a.has(s.permissions, u.Permissions.ADMINISTRATOR) || a.hasAny(s.permissions, t)) && l[e].push(s.id)
        }
        null != h && (a.has(h.permissions, u.Permissions.ADMINISTRATOR) || a.hasAny(h.permissions, t)) && l[e].push(h.id), d.isOwner(f) && l[e].push(f.id)
      }
    }
    return l
  }, [d, t, n, e])
}