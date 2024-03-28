"use strict";
t.r(n), t.d(n, {
  default: function() {
    return r
  }
});
var l = t("735250");
t("470079");
var a = t("481060"),
  u = t("239091"),
  o = t("358085"),
  s = t("998502"),
  c = t("89013"),
  d = t("689938");

function r(e) {
  let {
    text: n,
    onSelect: t
  } = e, r = (0, c.default)(n);
  return o.isPlatformEmbedded ? (0, l.jsxs)(a.Menu, {
    navId: "text-context",
    onClose: u.closeContextMenu,
    "aria-label": d.default.Messages.TEXT_ACTIONS_MENU_LABEL,
    onSelect: t,
    children: [(0, l.jsx)(a.MenuGroup, {
      children: r
    }), (0, l.jsx)(a.MenuGroup, {
      children: (0, l.jsx)(a.MenuItem, {
        id: "copy",
        label: d.default.Messages.COPY,
        action: () => s.default.copy(n)
      })
    })]
  }) : null
}