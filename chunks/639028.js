"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var i = l("37983");
l("884691");
var a = l("77078"),
  n = l("272030"),
  s = l("861370"),
  r = l("782340");

function o(e) {
  let {
    application: t,
    onSelect: l
  } = e, o = (0, s.default)({
    id: t.id,
    label: r.default.Messages.COPY_ID
  });
  return (0, i.jsx)(a.Menu, {
    navId: "activity-shelf-item-context",
    onClose: n.closeContextMenu,
    "aria-label": r.default.Messages.ACTIVITY_SHELF_ITEM_ACTIONS_MENU_LABEL,
    onSelect: l,
    children: (0, i.jsx)(a.MenuGroup, {
      children: o
    }, "developer-actions")
  })
}