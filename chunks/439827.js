"use strict";
t.r(u), t.d(u, {
  default: function() {
    return c
  }
});
var n = t("735250");
t("470079");
var a = t("442837"),
  l = t("481060"),
  s = t("434404"),
  r = t("889161"),
  o = t("430824"),
  d = t("981631"),
  i = t("689938");

function c(e, u) {
  let t = (0, a.useStateFromStores)([o.default], () => null != e ? o.default.getGuild(e) : null),
    {
      canCreateExpressions: c,
      canManageAllExpressions: S
    } = (0, r.useManageResourcePermissions)(t);
  return null != e && c && S ? (0, n.jsx)(l.MenuItem, {
    id: i.default.Messages.SERVER_SETTINGS,
    label: i.default.Messages.SERVER_SETTINGS,
    action: () => {
      s.default.open(e, d.GuildSettingsSections.SOUNDBOARD), null == u || u()
    }
  }) : null
}