"use strict";
t.r(n);
var a = t("735250");
t("470079");
var l = t("481060"),
  u = t("239091"),
  s = t("108843"),
  r = t("100527"),
  i = t("299206"),
  d = t("398048"),
  o = t("3689"),
  c = t("323597"),
  f = t("852245"),
  E = t("367722"),
  _ = t("689938");
n.default = (0, s.default)(function(e) {
  let {
    channel: n,
    guild: t,
    onSelect: s
  } = e, r = (0, f.default)(n), I = (0, E.default)(n, t), N = (0, d.default)(n, t), M = (0, o.default)(n, t), A = (0, c.default)(n), C = (0, i.default)({
    id: n.id,
    label: _.default.Messages.COPY_ID_CHANNEL
  });
  return (0, a.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: u.closeContextMenu,
    "aria-label": _.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: r
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [I, N, M]
    }), (0, a.jsx)(l.MenuGroup, {
      children: A
    }), (0, a.jsx)(l.MenuGroup, {
      children: C
    })]
  })
}, [r.default.CONTEXT_MENU, r.default.CHANNEL_ACTIVITY_FEED_VOICE_MENU])