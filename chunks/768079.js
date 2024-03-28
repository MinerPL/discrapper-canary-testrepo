"use strict";
n.r(t);
var u = n("735250");
n("470079");
var a = n("481060"),
  l = n("239091"),
  s = n("410575"),
  i = n("108843"),
  o = n("100527"),
  r = n("299206"),
  d = n("88966"),
  c = n("725119"),
  f = n("981631"),
  p = n("689938");
t.default = (0, i.default)(function(e) {
  let {
    user: t,
    analyticsContext: n,
    onSelect: i
  } = e, o = (0, c.default)(t.id), E = (0, r.default)({
    id: t.id,
    label: p.default.Messages.COPY_ID_USER
  }), M = (0, d.default)(t.id), h = t.isNonUserBot();
  return (0, u.jsx)(s.default, {
    context: n,
    object: f.AnalyticsObjects.CONTEXT_MENU,
    children: (0, u.jsxs)(a.Menu, {
      navId: "user-context",
      onClose: l.closeContextMenu,
      "aria-label": p.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: i,
      children: [(0, u.jsxs)(a.MenuGroup, {
        children: [!h && o, !h && M]
      }), (0, u.jsx)(a.MenuGroup, {
        children: E
      })]
    })
  })
}, [o.default.CONTEXT_MENU, o.default.BANNED_USER_MENU])