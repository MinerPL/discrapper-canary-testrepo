"use strict";
n.r(e), n.d(e, {
  default: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var u = n("481060"),
  d = n("239091"),
  i = n("294299"),
  r = n("689938");

function c(t) {
  let {
    libraryApplication: e,
    onPlay: n,
    onSelect: c
  } = t, l = (0, i.default)(e, n);
  return (0, a.jsx)(u.Menu, {
    navId: "launch-context",
    onClose: d.closeContextMenu,
    "aria-label": r.default.Messages.APPLICATION_ACTIONS_MENU_LABEL,
    onSelect: c,
    children: l
  })
}