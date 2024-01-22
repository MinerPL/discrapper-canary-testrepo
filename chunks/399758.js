"use strict";
e.r(t), e.d(t, {
  default: function() {
    return r
  }
});
var l = e("37983");
e("884691");
var i = e("77078"),
  o = e("272030"),
  a = e("773336"),
  u = e("26051"),
  c = e("782340");

function r(n) {
  let {
    href: t,
    textContent: e,
    onSelect: r
  } = n, s = (0, u.default)(t, e);
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