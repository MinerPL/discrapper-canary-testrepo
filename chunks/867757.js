"use strict";
u.r(t), u.d(t, {
  default: function() {
    return o
  }
});
var n = u("735250");
u("470079");
var a = u("481060"),
  s = u("239091"),
  d = u("410575"),
  r = u("416977"),
  c = u("778123"),
  i = u("981631"),
  l = u("689938");

function o(e) {
  let {
    guildId: t,
    analyticsContext: u,
    onSelect: o
  } = e, f = (0, r.default)(t), E = (0, c.default)(t);
  return (0, n.jsx)(d.default, {
    context: u,
    object: i.AnalyticsObjects.CONTEXT_MENU,
    children: (0, n.jsxs)(a.Menu, {
      navId: "user-context",
      onClose: s.closeContextMenu,
      "aria-label": l.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: o,
      children: [(0, n.jsx)(a.MenuGroup, {
        children: f
      }), (0, n.jsx)(a.MenuGroup, {
        children: E
      })]
    })
  })
}