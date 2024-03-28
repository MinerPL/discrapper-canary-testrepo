"use strict";
l.r(t), l.d(t, {
  default: function() {
    return d
  },
  useHasGuildRoleItems: function() {
    return o
  }
});
var n = l("735250");
l("470079");
var a = l("481060"),
  s = l("239091"),
  i = l("241635"),
  r = l("689938");

function o(e, t) {
  return (0, i.default)(e, t).length > 0
}

function d(e) {
  let {
    role: t,
    guild: l,
    onSelect: o
  } = e, d = (0, i.default)(l, t);
  return 0 === d.length ? null : (0, n.jsx)(a.Menu, {
    navId: "guild-settings-role-context",
    "aria-label": r.default.Messages.GUILD_ROLE_ACTIONS_MENU_LABEL,
    onClose: s.closeContextMenu,
    onSelect: o,
    children: d
  })
}