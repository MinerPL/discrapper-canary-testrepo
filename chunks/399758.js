"use strict";
n.r(e), n.d(e, {
  default: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var i = n("77078"),
  o = n("272030"),
  a = n("773336"),
  u = n("26051"),
  c = n("782340");

function r(t) {
  let {
    href: e,
    textContent: n,
    onSelect: r
  } = t, s = (0, u.default)(e, n);
  return a.isPlatformEmbedded && null != s ? (0, l.jsx)(i.Menu, {
    navId: "image-context",
    onClose: o.closeContextMenu,
    "aria-label": c.default.Messages.IMAGE_ACTIONS_MENU_LABEL,
    onSelect: r,
    children: (0, l.jsx)(i.MenuGroup, {
      children: s
    })
  }) : null
}