"use strict";
t.r(n);
var a = t("735250");
t("470079");
var l = t("481060"),
  u = t("239091"),
  r = t("108843"),
  d = t("100527"),
  i = t("299206"),
  s = t("895563"),
  o = t("32750"),
  f = t("109764"),
  c = t("323597"),
  h = t("461535"),
  M = t("915639"),
  v = t("438536"),
  m = t("251746"),
  p = t("193987"),
  C = t("933793"),
  _ = t("13736"),
  F = t("732393"),
  T = t("214906"),
  A = t("612856"),
  I = t("137591"),
  E = t("689938");
n.default = (0, r.default)(function(e) {
  let {
    channel: n,
    onSelect: t
  } = e, r = (0, f.default)(n), d = (0, h.default)(n), x = (0, T.default)(n), R = (0, o.default)(n), G = (0, p.default)(n), g = (0, c.default)(n), j = (0, i.default)({
    id: n.id,
    label: E.default.Messages.COPY_ID_THREAD
  }), O = (0, v.default)(n, "Context Menu"), U = (0, C.default)(n), y = (0, A.default)(n), D = (0, _.default)(n), N = (0, F.default)(n.id), b = (0, m.default)(n), L = (0, I.default)(n), S = (0, M.default)(n, {
    hoist: !0
  }), k = (0, s.useAddToFavoritesItem)(n), V = (0, s.useRemoveFromFavoritesItem)(n);
  return (0, a.jsxs)(l.Menu, {
    navId: "thread-context",
    onClose: u.closeContextMenu,
    "aria-label": E.default.Messages.THREAD_ACTIONS_MENU_LABEL,
    onSelect: t,
    children: [(0, a.jsxs)(l.MenuGroup, {
      children: [d, k]
    }, "mark-as-read-or-favorite"), (0, a.jsxs)(l.MenuGroup, {
      children: [O, b, R, G, D, N, r]
    }, "thread-actions"), (0, a.jsxs)(l.MenuGroup, {
      children: [x, y]
    }, "notifications"), (0, a.jsx)(l.MenuGroup, {
      children: V
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [L, S, U, g]
    }, "admin-actions"), (0, a.jsx)(l.MenuGroup, {
      children: j
    }, "developer-actions")]
  })
}, [d.default.CONTEXT_MENU, d.default.CHANNEL_LIST_THREAD_MENU])