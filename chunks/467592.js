"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  i = n("272030"),
  u = n("773336"),
  o = n("447651"),
  s = n("26051"),
  c = n("782340");

function r(e) {
  let {
    src: t,
    onSelect: n
  } = e, r = (0, o.default)(t), d = (0, s.default)(t, null);
  return u.isPlatformEmbedded ? (0, a.jsxs)(l.Menu, {
    navId: "image-context",
    onClose: i.closeContextMenu,
    "aria-label": c.default.Messages.IMAGE_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: r
    }), (0, a.jsx)(l.MenuGroup, {
      children: d
    })]
  }) : null
}