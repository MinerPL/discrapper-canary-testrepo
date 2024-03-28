"use strict";
t.r(n), t.d(n, {
  default: function() {
    return o
  }
});
var u = t("735250");
t("470079");
var i = t("481060"),
  s = t("434404"),
  r = t("144507"),
  a = t("981631"),
  l = t("689938");

function o(e) {
  return (0, r.useCanManageGuildRoleSubscriptions)(e) ? (0, u.jsx)(i.MenuItem, {
    id: "role-subscription-settings",
    label: l.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_EDIT_SETTINGS,
    action: () => {
      s.default.open(e.id, a.GuildSettingsSections.ROLE_SUBSCRIPTIONS)
    }
  }) : null
}