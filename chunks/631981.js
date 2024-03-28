"use strict";
r.r(t);
var n = r("735250");
r("470079");
var u = r("442837"),
  a = r("481060"),
  c = r("239091"),
  o = r("883385"),
  s = r("853856"),
  i = r("117984"),
  d = r("981631"),
  l = r("689938");
t.default = (0, o.default)(function(e) {
  let {
    onSelect: t
  } = e, r = (0, u.useStateFromStores)([s.default], () => s.default.favoriteServerMuted);
  return (0, n.jsx)(a.Menu, {
    navId: "favorite-server-context",
    onClose: c.closeContextMenu,
    "aria-label": l.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: t,
    children: (0, n.jsx)(a.MenuGroup, {
      children: (0, n.jsx)(a.MenuCheckboxItem, {
        id: "mute-server",
        label: l.default.Messages.MUTE_SERVER,
        action: () => (0, i.toggleFavoriteServerMuted)(),
        checked: r
      })
    })
  })
}, {
  object: d.AnalyticsObjects.CONTEXT_MENU
})