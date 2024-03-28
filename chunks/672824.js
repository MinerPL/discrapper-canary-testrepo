"use strict";
a.r(t), a.d(t, {
  default: function() {
    return i
  }
});
var n = a("735250");
a("470079");
var l = a("442837"),
  u = a("481060"),
  s = a("211739"),
  d = a("680089"),
  r = a("689938");

function i(e) {
  let t = (0, l.useStateFromStores)([d.default], () => d.default.isCollapsed(e.id), [e.id]);
  return (0, n.jsx)(u.MenuCheckboxItem, {
    id: "collapse-category",
    label: r.default.Messages.COLLAPSE_CATEGORY,
    action: () => t ? (0, s.categoryExpand)(e.id) : (0, s.categoryCollapse)(e.id),
    checked: t
  })
}