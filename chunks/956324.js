"use strict";
i.r(t), i.d(t, {
  default: function() {
    return l
  }
});
var s = i("442837"),
  n = i("496675"),
  a = i("981631");

function l(e) {
  let {
    canManageGuild: t,
    canManageRoles: i,
    canBanMembers: l,
    canManageNicknames: u,
    canCreateEmojisAndStickers: o,
    canManageEmojisAndStickers: d,
    canManageWebhooks: r,
    canViewAuditLog: c
  } = (0, s.useStateFromStoresObject)([n.default], () => ({
    canManageGuild: n.default.can(a.Permissions.MANAGE_GUILD, e),
    canManageRoles: n.default.can(a.Permissions.MANAGE_ROLES, e),
    canBanMembers: n.default.can(a.Permissions.BAN_MEMBERS, e),
    canManageNicknames: n.default.can(a.Permissions.MANAGE_NICKNAMES, e),
    canCreateEmojisAndStickers: n.default.can(a.Permissions.CREATE_GUILD_EXPRESSIONS, e),
    canManageEmojisAndStickers: n.default.can(a.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
    canManageWebhooks: n.default.can(a.Permissions.MANAGE_WEBHOOKS, e),
    canViewAuditLog: n.default.can(a.Permissions.VIEW_AUDIT_LOG, e)
  }), [e]);
  return t || i || l || u || o || d || r || c
}