"use strict";
t.r(n);
var a = t("735250");
t("470079");
var u = t("481060"),
  l = t("239091"),
  s = t("108843"),
  r = t("100527"),
  i = t("299206"),
  o = t("323597"),
  d = t("852245"),
  c = t("367722"),
  f = t("689938");
n.default = (0, s.default)(function(e) {
  let {
    channel: n,
    guild: t,
    onSelect: s
  } = e, r = (0, d.default)(n), E = (0, c.default)(n, t), _ = (0, o.default)(n), I = (0, i.default)({
    id: n.id,
    label: f.default.Messages.COPY_ID_CHANNEL
  });
  return (0, a.jsxs)(u.Menu, {
    navId: "channel-context",
    onClose: l.closeContextMenu,
    "aria-label": f.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, a.jsx)(u.MenuGroup, {
      children: r
    }), (0, a.jsx)(u.MenuGroup, {
      children: E
    }), (0, a.jsx)(u.MenuGroup, {
      children: _
    }), (0, a.jsx)(u.MenuGroup, {
      children: I
    })]
  })
}, [r.default.CONTEXT_MENU, r.default.CHANNEL_LIST_STORE_CHANNEL_MENU])