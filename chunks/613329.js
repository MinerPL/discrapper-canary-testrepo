"use strict";
t.r(n), t.d(n, {
  default: function() {
    return o
  }
});
var u = t("735250");
t("470079");
var i = t("481060"),
  s = t("239091"),
  r = t("299660"),
  a = t("517640"),
  l = t("689938");

function o(e) {
  let {
    guild: n,
    onSelect: t
  } = e, o = (0, a.default)(n), c = (0, r.default)(n.id);
  return (0, u.jsx)(i.Menu, {
    navId: "role-subscription-context",
    "aria-label": l.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_ACTION_MENU_LABEL,
    onClose: s.closeContextMenu,
    onSelect: t,
    children: (0, u.jsxs)(i.MenuGroup, {
      children: [o, c]
    })
  })
}