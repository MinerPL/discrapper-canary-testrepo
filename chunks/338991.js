"use strict";
t.r(u), t.d(u, {
  default: function() {
    return d
  }
});
var n = t("735250");
t("470079");
var a = t("481060"),
  l = t("239091"),
  s = t("714447"),
  r = t("439827"),
  o = t("689938");

function d(e) {
  let {
    guildId: u,
    onSelect: t,
    onPickerClose: d
  } = e, i = (0, r.default)(u, d), c = (0, s.default)();
  return (0, n.jsx)(a.Menu, {
    navId: "user-context",
    onClose: l.closeContextMenu,
    "aria-label": o.default.Messages.USER_ACTIONS_MENU_LABEL,
    className: "context-menu",
    onSelect: t,
    children: (0, n.jsxs)(a.MenuGroup, {
      children: [c, i]
    })
  })
}