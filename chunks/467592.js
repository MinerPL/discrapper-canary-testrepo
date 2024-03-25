"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  i = n("272030"),
  u = n("773336"),
  o = n("447651"),
  s = n("26051"),
  r = n("782340");

function c(e) {
  let {
    src: t,
    onSelect: n
  } = e, c = (0, o.default)(t), d = (0, s.default)(t, null);
  return u.isPlatformEmbedded ? (0, a.jsxs)(l.Menu, {
    navId: "image-context",
    onClose: i.closeContextMenu,
    "aria-label": r.default.Messages.IMAGE_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: c
    }), (0, a.jsx)(l.MenuGroup, {
      children: d
    })]
  }) : null
}