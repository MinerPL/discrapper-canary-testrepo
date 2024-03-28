"use strict";
l.r(t);
var a = l("735250");
l("470079");
var n = l("481060"),
  u = l("239091"),
  d = l("883385"),
  s = l("108843"),
  r = l("911969"),
  i = l("947440"),
  o = l("100527"),
  f = l("299206"),
  c = l("976192"),
  m = l("819403"),
  M = l("777658"),
  E = l("858488"),
  S = l("185457"),
  _ = l("570870"),
  g = l("389052"),
  I = l("24311"),
  C = l("710631"),
  R = l("297047"),
  N = l("88966"),
  A = l("712301"),
  T = l("520063"),
  v = l("725119"),
  h = l("931617"),
  O = l("332031"),
  x = l("981631"),
  p = l("689938");
t.default = (0, s.default)((0, d.default)(function(e) {
  let {
    user: t,
    guildId: l,
    channel: d,
    context: s,
    onSelect: o,
    onHeightUpdate: F
  } = e, b = (0, v.default)(t.id, l), U = (0, R.default)(t, l, s), L = (0, N.default)(t.id, s), j = (0, O.default)(t.id), P = (0, I.default)(t, s), y = (0, S.default)({
    user: t,
    guildId: l,
    context: s
  }), D = (0, E.default)(t), G = (0, c.default)({
    guildId: l,
    userId: t.id,
    analyticsLocation: {
      page: x.AnalyticsPages.GUILD_CHANNEL,
      section: x.AnalyticsSections.CHAT_USERNAME,
      object: x.AnalyticsObjects.CONTEXT_MENU_ITEM
    },
    context: s
  }), k = (0, C.default)(t, l), V = (0, i.default)(null, t), B = (0, M.default)(t), K = (0, g.default)(t), H = (0, T.default)(t, l, d.id), w = (0, h.default)(t.id, l), Y = (0, A.default)(t, l), z = (0, f.default)({
    id: t.id,
    label: p.default.Messages.COPY_ID_USER
  }), q = (0, m.default)(t), W = (0, _.default)({
    commandType: r.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: d,
    guildId: l,
    onHeightUpdate: F
  }), X = t.isNonUserBot();
  return (0, a.jsxs)(n.Menu, {
    navId: "user-context",
    onClose: u.closeContextMenu,
    "aria-label": p.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: o,
    children: [!X && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(n.MenuGroup, {
        children: q
      }), (0, a.jsxs)(n.MenuGroup, {
        children: [b, U, L, P, y, D, j]
      }), (0, a.jsx)(n.MenuGroup, {
        children: V
      }), (0, a.jsxs)(n.MenuGroup, {
        children: [G, W, k, B, K]
      }), (0, a.jsx)(n.MenuGroup, {
        children: H
      }), (0, a.jsxs)(n.MenuGroup, {
        children: [w, Y]
      })]
    }), (0, a.jsx)(n.MenuGroup, {
      children: z
    })]
  })
}, {
  object: x.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.THREAD_USER_MENU])