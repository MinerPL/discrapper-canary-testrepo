"use strict";
t.r(n), t.d(n, {
  default: function() {
    return d
  }
});
var l = t("735250");
t("470079");
var u = t("481060"),
  a = t("239091"),
  i = t("358085"),
  r = t("905041"),
  s = t("689938");

function d(e) {
  let {
    href: n,
    textContent: t,
    onSelect: d
  } = e, o = (0, r.default)(n, t);
  return i.isPlatformEmbedded && null != o ? (0, l.jsx)(u.Menu, {
    navId: "image-context",
    onClose: a.closeContextMenu,
    "aria-label": s.default.Messages.IMAGE_ACTIONS_MENU_LABEL,
    onSelect: d,
    children: (0, l.jsx)(u.MenuGroup, {
      children: o
    })
  }) : null
}