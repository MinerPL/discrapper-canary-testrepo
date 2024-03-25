"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  s = n("820542"),
  u = n("870691"),
  r = n("782340");

function o(e) {
  let t = (0, i.useStateFromStores)([u.default], () => u.default.isCollapsed(e.id), [e.id]);
  return (0, a.jsx)(l.MenuCheckboxItem, {
    id: "collapse-category",
    label: r.default.Messages.COLLAPSE_CATEGORY,
    action: () => t ? (0, s.categoryExpand)(e.id) : (0, s.categoryCollapse)(e.id),
    checked: t
  })
}