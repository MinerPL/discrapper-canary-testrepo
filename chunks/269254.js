"use strict";
i.r(t), i.d(t, {
  default: function() {
    return s
  }
});
var a = i("735250");
i("470079");
var n = i("481060"),
  u = i("239091"),
  r = i("519110"),
  l = i("689938");

function s(e) {
  let {
    target: t,
    onSelect: i
  } = e, s = (0, r.default)({
    type: t.getAttribute("data-type"),
    id: t.getAttribute("data-id"),
    name: t.getAttribute("data-name"),
    isInExpressionPicker: !0
  });
  return (0, a.jsx)(n.Menu, {
    navId: "expression-picker",
    onClose: u.closeContextMenu,
    "aria-label": l.default.Messages.EXPRESSION_PICKER_ACTIONS_MENU_LABEL,
    onSelect: i,
    className: "context-menu",
    children: (0, a.jsx)(n.MenuGroup, {
      children: s
    })
  })
}