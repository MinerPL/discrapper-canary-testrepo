"use strict";
t.r(n), t.d(n, {
  default: function() {
    return r
  }
}), t("653041");
var l = t("735250");
t("470079");
var s = t("481060"),
  u = t("239091"),
  i = t("299206"),
  a = t("867108"),
  d = t("981631"),
  o = t("689938");

function r(e) {
  let {
    role: n,
    guild: t,
    onSelect: r
  } = e, c = [], p = (0, a.default)(t, n, d.GuildSettingsSections.INTEGRATIONS);
  null != p && c.push(p);
  let h = (0, i.default)({
    id: n.id,
    label: o.default.Messages.COPY_ID_ROLE
  });
  return (null != h && c.push(h), 0 === c.length) ? null : (0, l.jsx)(s.Menu, {
    navId: "guild-integrations-permission-role-context",
    "aria-label": o.default.Messages.GUILD_ROLE_ACTIONS_MENU_LABEL,
    onClose: u.closeContextMenu,
    onSelect: r,
    children: c
  })
}