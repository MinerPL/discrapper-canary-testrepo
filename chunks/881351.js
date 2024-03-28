"use strict";
n.r(t);
var u = n("735250");
n("470079");
var l = n("481060"),
  a = n("239091"),
  i = n("883385"),
  s = n("108843"),
  r = n("947440"),
  d = n("100527"),
  o = n("299206"),
  c = n("819403"),
  f = n("777658"),
  _ = n("858488"),
  E = n("185457"),
  S = n("389052"),
  T = n("24311"),
  p = n("710631"),
  g = n("88966"),
  h = n("991307"),
  I = n("725119"),
  A = n("700994"),
  v = n("332031"),
  M = n("981631"),
  R = n("689938");
t.default = (0, s.default)((0, i.default)(function(e) {
  let {
    user: t,
    showMediaItems: n = !1,
    mediaEngineContext: i,
    onSelect: s
  } = e, d = (0, I.default)(t.id), M = (0, g.default)(t.id), C = (0, T.default)(t), O = (0, E.default)({
    user: t
  }), N = (0, _.default)(t), P = (0, v.default)(t.id), m = (0, A.default)(t.id), y = (0, h.default)(t.id, i), U = (0, p.default)(t), w = (0, r.default)(null, t), H = (0, f.default)(t), V = (0, S.default)(t), b = (0, o.default)({
    id: t.id,
    label: R.default.Messages.COPY_ID_USER
  }), G = (0, c.default)(t), k = t.isNonUserBot();
  return (0, u.jsxs)(l.Menu, {
    navId: "user-context",
    onClose: a.closeContextMenu,
    "aria-label": R.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [!k && (0, u.jsxs)(u.Fragment, {
      children: [(0, u.jsx)(l.MenuGroup, {
        children: G
      }), (0, u.jsxs)(l.MenuGroup, {
        children: [d, M, C, O, N, P]
      }), n && (0, u.jsx)(l.MenuGroup, {
        children: m
      }), (0, u.jsx)(l.MenuGroup, {
        children: w
      }), (0, u.jsxs)(l.MenuGroup, {
        children: [n && y, U, H, V]
      })]
    }), (0, u.jsx)(l.MenuGroup, {
      children: b
    })]
  })
}, {
  object: M.AnalyticsObjects.CONTEXT_MENU
}), [d.default.CONTEXT_MENU, d.default.USER_GENERIC_MENU])