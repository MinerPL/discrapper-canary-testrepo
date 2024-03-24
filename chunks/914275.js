"use strict";
n.r(t), n.d(t, {
  ALL_PERMISSIONS: function() {
    return f
  },
  MOD_PERMISSIONS: function() {
    return p
  },
  ELEVATED_PERMISSIONS: function() {
    return E
  },
  isOwnerRole: function() {
    return g
  },
  useUserPermissionsAndRoles: function() {
    return S
  }
}), n("222007"), n("70102"), n("424973");
var a = n("316693"),
  l = n("65597"),
  s = n("26989"),
  i = n("305961"),
  r = n("697218"),
  u = n("991170"),
  o = n("49111"),
  d = n("69741");
let c = [o.Permissions.USE_CLYDE_AI],
  f = Object.keys(o.Permissions).filter(e => !c.includes(o.Permissions[e])),
  h = [...d.MODERATOR_PERMISSIONS, ...o.ElevatedPermissionsList, o.Permissions.ADMINISTRATOR, o.Permissions.KICK_MEMBERS, o.Permissions.BAN_MEMBERS, o.Permissions.MANAGE_GUILD, o.Permissions.MANAGE_CHANNELS, o.Permissions.MANAGE_ROLES, o.Permissions.MANAGE_MESSAGES, o.Permissions.MANAGE_THREADS, o.Permissions.MANAGE_GUILD_EXPRESSIONS, o.Permissions.CREATE_GUILD_EXPRESSIONS, o.Permissions.MANAGE_EVENTS, o.Permissions.CREATE_EVENTS, o.Permissions.MODERATE_MEMBERS, o.Permissions.MENTION_EVERYONE, o.Permissions.MANAGE_WEBHOOKS],
  m = new Set(h),
  p = Array.from(m).map(e => {
    let t = f.find(t => o.Permissions[t] === e);
    if (null == t) throw Error("Permission ".concat(e, " not found in Permissions"));
    return t
  }),
  E = new Set(o.ElevatedPermissionsList);

function g(e, t) {
  return e === t
}

function S(e, t, n) {
  let d = (0, l.useStateFromStores)([i.default], () => i.default.getGuild(t), [t]);
  return (0, l.useStateFromStores)([s.default, r.default, i.default], () => {
    let l = {},
      c = s.default.getMember(t, e),
      f = r.default.getUser(e);
    if (null == d || null == c || null == f) return l;
    let h = i.default.getRole(d.id, d.getEveryoneRoleId()),
      m = u.computePermissions({
        user: f,
        context: d
      });
    for (let e of n) {
      let t = o.Permissions[e];
      if (a.has(m, t)) {
        for (let n of (l[e] = [], c.roles)) {
          let s = i.default.getRole(d.id, n);
          if (null == s) continue;
          let r = a.has(s.permissions, o.Permissions.ADMINISTRATOR);
          (r || a.hasAny(s.permissions, t)) && l[e].push(s.id)
        }
        if (null != h) {
          let n = a.has(h.permissions, o.Permissions.ADMINISTRATOR);
          (n || a.hasAny(h.permissions, t)) && l[e].push(h.id)
        }
        d.isOwner(f) && l[e].push(f.id)
      }
    }
    return l
  }, [d, t, n, e])
}