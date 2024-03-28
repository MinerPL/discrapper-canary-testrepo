"use strict";
a.r(n);
var t = a("735250");
a("470079");
var s = a("481060"),
  u = a("239091"),
  l = a("108843"),
  c = a("100527"),
  r = a("299206"),
  i = a("852245"),
  d = a("689938");
n.default = (0, l.default)(function(e) {
  let {
    channel: n,
    onSelect: a
  } = e, l = (0, i.default)(n), c = (0, r.default)({
    id: n.id,
    label: d.default.Messages.COPY_ID_CHANNEL
  });
  return (0, t.jsxs)(s.Menu, {
    navId: "channel-context",
    onClose: u.closeContextMenu,
    "aria-label": d.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: a,
    children: [(0, t.jsx)(s.MenuGroup, {
      children: l
    }), (0, t.jsx)(s.MenuGroup, {
      children: c
    })]
  })
}, [c.default.CONTEXT_MENU, c.default.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU])