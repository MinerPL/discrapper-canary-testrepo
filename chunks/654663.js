"use strict";
l.r(t);
var a = l("735250");
l("470079");
var u = l("481060"),
  n = l("239091"),
  d = l("883385"),
  s = l("108843"),
  r = l("911969"),
  i = l("947440"),
  o = l("100527"),
  f = l("299206"),
  c = l("976192"),
  E = l("819403"),
  m = l("777658"),
  M = l("858488"),
  S = l("185457"),
  _ = l("570870"),
  g = l("389052"),
  I = l("24311"),
  R = l("710631"),
  C = l("297047"),
  A = l("88966"),
  T = l("712301"),
  N = l("520063"),
  h = l("725119"),
  v = l("931617"),
  O = l("332031"),
  p = l("981631"),
  x = l("689938");
t.default = (0, s.default)((0, d.default)(function(e) {
  let {
    user: t,
    guildId: l,
    channel: d,
    context: s,
    onSelect: o,
    onHeightUpdate: b
  } = e, U = (0, h.default)(t.id, l), F = (0, C.default)(t, l, s), P = (0, A.default)(t.id, s), j = (0, O.default)(t.id), L = (0, I.default)(t, s), y = (0, S.default)({
    user: t,
    guildId: l,
    context: s
  }), G = (0, M.default)({
    user: t
  }), D = (0, c.default)({
    guildId: l,
    userId: t.id,
    analyticsLocation: {
      page: p.AnalyticsPages.GUILD_CHANNEL,
      section: p.AnalyticsSections.CHAT_USERNAME,
      object: p.AnalyticsObjects.CONTEXT_MENU_ITEM
    },
    context: s
  }), V = (0, R.default)({
    user: t,
    guildId: l
  }), k = (0, i.default)(null, t), H = (0, m.default)(t), B = (0, g.default)({
    user: t
  }), K = (0, N.default)(t, l, d.id), w = (0, v.default)(t.id, l), Y = (0, T.default)(t, l), q = (0, f.default)({
    id: t.id,
    label: x.default.Messages.COPY_ID_USER
  }), z = (0, E.default)(t), W = (0, _.default)({
    commandType: r.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: d,
    guildId: l,
    onHeightUpdate: b
  }), X = t.isNonUserBot();
  return (0, a.jsxs)(u.Menu, {
    navId: "user-context",
    onClose: n.closeContextMenu,
    "aria-label": x.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: o,
    children: [!X && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.MenuGroup, {
        children: z
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [U, F, P, L, y, G, j]
      }), (0, a.jsx)(u.MenuGroup, {
        children: k
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [D, W, V, H, B]
      }), (0, a.jsx)(u.MenuGroup, {
        children: K
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [w, Y]
      })]
    }), (0, a.jsx)(u.MenuGroup, {
      children: q
    })]
  })
}, {
  object: p.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.THREAD_USER_MENU])