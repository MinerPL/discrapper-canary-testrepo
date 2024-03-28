"use strict";
a.r(t), a.d(t, {
  default: function() {
    return i
  }
});
var n = a("735250");
a("470079");
var s = a("481060"),
  u = a("239091"),
  o = a("13245"),
  r = a("145597"),
  l = a("689938");

function i(e) {
  let {
    onSelect: t
  } = e;
  return (0, n.jsx)(s.Menu, {
    navId: "overlay",
    onClose: u.closeContextMenu,
    "aria-label": l.default.Messages.OVERLAY_ACTIONS_MENU_LABEL,
    onSelect: t,
    children: (0, n.jsx)(s.MenuItem, {
      id: "reset",
      label: l.default.Messages.OVERLAY_RESET_DEFAULT_LAYOUT,
      action: e => {
        e.stopPropagation(), o.default.resetDefaultLayout(r.OVERLAY_LAYOUT_ID)
      }
    })
  })
}