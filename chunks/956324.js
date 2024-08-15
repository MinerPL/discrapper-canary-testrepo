t.d(n, {
  Z: function() {
return l;
  }
});
var s = t(442837),
  i = t(496675),
  a = t(981631);

function l(e) {
  let {
canManageGuild: n,
canManageRoles: t,
canBanMembers: l,
canManageNicknames: u,
canCreateEmojisAndStickers: o,
canManageEmojisAndStickers: r,
canManageWebhooks: d,
canViewAuditLog: c
  } = (0, s.cj)([i.Z], () => ({
canManageGuild: i.Z.can(a.Plq.MANAGE_GUILD, e),
canManageRoles: i.Z.can(a.Plq.MANAGE_ROLES, e),
canBanMembers: i.Z.can(a.Plq.BAN_MEMBERS, e),
canManageNicknames: i.Z.can(a.Plq.MANAGE_NICKNAMES, e),
canCreateEmojisAndStickers: i.Z.can(a.Plq.CREATE_GUILD_EXPRESSIONS, e),
canManageEmojisAndStickers: i.Z.can(a.Plq.MANAGE_GUILD_EXPRESSIONS, e),
canManageWebhooks: i.Z.can(a.Plq.MANAGE_WEBHOOKS, e),
canViewAuditLog: i.Z.can(a.Plq.VIEW_AUDIT_LOG, e)
  }), [e]);
  return n || t || l || u || o || r || d || c;
}