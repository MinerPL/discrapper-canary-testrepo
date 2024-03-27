"use strict";
i.r(t), i.d(t, {
  default: function() {
    return u
  }
});
var r = i("37983");
i("884691");
var n = i("77078"),
  s = i("272030"),
  a = i("702495"),
  o = i("782340");

function u(e) {
  let {
    target: t,
    onSelect: i
  } = e, u = (0, a.default)({
    type: t.getAttribute("data-type"),
    id: t.getAttribute("data-id"),
    name: t.getAttribute("data-name"),
    isInExpressionPicker: !0
  });
  return (0, r.jsx)(n.Menu, {
    navId: "expression-picker",
    onClose: s.closeContextMenu,
    "aria-label": o.default.Messages.EXPRESSION_PICKER_ACTIONS_MENU_LABEL,
    onSelect: i,
    className: "context-menu",
    children: (0, r.jsx)(n.MenuGroup, {
      children: u
    })
  })
}