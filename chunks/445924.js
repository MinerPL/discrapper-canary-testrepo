"use strict";
s.r(a);
var t = s("735250");
s("470079");
var n = s("481060"),
  c = s("239091"),
  l = s("689938");
a.default = e => {
  let {
    changeAvatarAction: a,
    changeDecorationAction: s
  } = e;
  return (0, t.jsxs)(n.Menu, {
    onClose: c.closeContextMenu,
    onSelect: c.closeContextMenu,
    navId: "user-settings-change-avatar",
    "aria-label": l.default.Messages.USER_SETTINGS_CHANGE_AVATAR,
    children: [(0, t.jsx)(n.MenuItem, {
      action: a,
      id: "change-avatar",
      label: l.default.Messages.USER_SETTINGS_CHANGE_AVATAR
    }), (0, t.jsx)(n.MenuItem, {
      action: s,
      id: "change-avatar-decoration",
      label: l.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
    })]
  })
}