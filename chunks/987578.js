"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("735250");
a("470079");
var i = a("481060"),
  l = a("239091"),
  u = a("560067"),
  d = a("675999"),
  s = a("689938");

function o(e) {
  let {
    onSelect: t
  } = e;
  return (0, n.jsxs)(i.Menu, {
    navId: "guild-context",
    "aria-label": s.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onClose: l.closeContextMenu,
    onSelect: t,
    children: [(0, n.jsx)(i.MenuItem, {
      id: "join",
      label: s.default.Messages.JOIN_SERVER_BUTTON_CTA,
      action: () => u.default.openCreateGuildModal({
        initialSlide: d.CreateGuildSlideTypes.JOIN_GUILD,
        location: "Guild List - ContextMenu"
      })
    }), (0, n.jsx)(i.MenuItem, {
      id: "create",
      label: s.default.Messages.CREATE_SERVER_BUTTON_CTA,
      action: () => u.default.openCreateGuildModal({
        location: "Guild List - ContextMenu"
      })
    })]
  })
}