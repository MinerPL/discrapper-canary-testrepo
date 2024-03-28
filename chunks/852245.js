"use strict";
t.r(n), t.d(n, {
  default: function() {
    return d
  }
});
var a = t("735250");
t("470079");
var u = t("442837"),
  l = t("481060"),
  s = t("787014"),
  r = t("496675"),
  i = t("981631"),
  o = t("689938");

function d(e) {
  let {
    canManageChannels: n,
    canManageRoles: t,
    canManageWebhooks: d,
    canAccessChannel: c
  } = (0, u.useStateFromStoresObject)([r.default], () => ({
    canManageChannels: r.default.can(i.Permissions.MANAGE_CHANNELS, e),
    canManageRoles: r.default.can(i.Permissions.MANAGE_ROLES, e),
    canManageWebhooks: r.default.can(i.Permissions.MANAGE_WEBHOOKS, e),
    canAccessChannel: r.default.can(e.accessPermissions, e)
  }), [e]);
  return !__OVERLAY__ && c && (n || t || d) ? (0, a.jsx)(l.MenuItem, {
    id: "edit-channel",
    label: e.type === i.ChannelTypes.GUILD_CATEGORY ? o.default.Messages.EDIT_CATEGORY : o.default.Messages.EDIT_CHANNEL,
    action: () => s.default.open(e.id)
  }) : null
}