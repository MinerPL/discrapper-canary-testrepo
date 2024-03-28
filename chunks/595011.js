"use strict";
l.r(t);
var n = l("735250");
l("470079");
var u = l("481060"),
  i = l("239091"),
  o = l("410575"),
  r = l("108843"),
  a = l("100527"),
  d = l("299206"),
  s = l("88966"),
  c = l("725119"),
  f = l("931617"),
  M = l("981631"),
  O = l("689938");
t.default = (0, r.default)(function(e) {
  let {
    user: t,
    guildId: l,
    analyticsContext: r,
    onSelect: a
  } = e, h = (0, c.default)(t.id), E = (0, f.default)(t.id, l), R = (0, d.default)({
    id: t.id,
    label: O.default.Messages.COPY_ID_USER
  }), p = (0, s.default)(t.id), v = t.isNonUserBot();
  return (0, n.jsx)(o.default, {
    context: r,
    object: M.AnalyticsObjects.CONTEXT_MENU,
    children: (0, n.jsxs)(u.Menu, {
      navId: "user-context",
      onClose: i.closeContextMenu,
      "aria-label": O.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: a,
      children: [(0, n.jsxs)(u.MenuGroup, {
        children: [!v && h, !v && p]
      }), (0, n.jsx)(u.MenuGroup, {
        children: !v && E
      }), (0, n.jsx)(u.MenuGroup, {
        children: R
      })]
    })
  })
}, [a.default.CONTEXT_MENU, a.default.AUDIT_LOG_USER_MENU])