"use strict";
n.r(t);
var l = n("735250");
n("470079");
var u = n("481060"),
  r = n("239091"),
  c = n("883385"),
  o = n("108843"),
  i = n("100527"),
  s = n("299206"),
  a = n("981631"),
  d = n("689938");
t.default = (0, o.default)((0, c.default)(function(e) {
  let {
    userId: t,
    onSelect: n
  } = e, c = (0, s.default)({
    id: t,
    label: d.default.Messages.COPY_ID_USER,
    showWithoutDeveloperMode: !0
  });
  return (0, l.jsx)(u.Menu, {
    navId: "unknown-user-context",
    onClose: r.closeContextMenu,
    "aria-label": d.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: (0, l.jsx)(u.MenuGroup, {
      children: c
    })
  })
}, {
  object: a.AnalyticsObjects.CONTEXT_MENU
}), [i.default.CONTEXT_MENU, i.default.UNKNOWN_USER_MENU])