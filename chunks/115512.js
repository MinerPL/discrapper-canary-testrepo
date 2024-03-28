"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  i = n("239091"),
  u = n("358085"),
  s = n("29264"),
  r = n("905041"),
  d = n("689938");

function o(e) {
  let {
    src: t,
    onSelect: n
  } = e, o = (0, s.default)(t), c = (0, r.default)(t, null);
  return u.isPlatformEmbedded ? (0, a.jsxs)(l.Menu, {
    navId: "image-context",
    onClose: i.closeContextMenu,
    "aria-label": d.default.Messages.IMAGE_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: o
    }), (0, a.jsx)(l.MenuGroup, {
      children: c
    })]
  }) : null
}