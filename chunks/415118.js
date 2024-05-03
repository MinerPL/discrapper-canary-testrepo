"use strict";
t.r(n);
var l = t("735250");
t("470079");
var u = t("481060"),
  i = t("239091"),
  a = t("883385"),
  d = t("108843"),
  s = t("947440"),
  o = t("100527"),
  r = t("299206"),
  c = t("976192"),
  f = t("276022"),
  p = t("777658"),
  v = t("858488"),
  A = t("185457"),
  I = t("933409"),
  M = t("389052"),
  E = t("24311"),
  N = t("710631"),
  _ = t("297047"),
  S = t("88966"),
  T = t("712301"),
  U = t("991307"),
  g = t("725119"),
  h = t("931617"),
  C = t("700994"),
  b = t("332031"),
  j = t("981631"),
  m = t("689938");
n.default = (0, d.default)((0, a.default)(function(e) {
  let {
    user: n,
    guildId: t,
    showModalItems: a = !0,
    showMediaItems: d = !1,
    showChatItems: o = !0,
    context: x,
    onSelect: G
  } = e, O = {
    page: j.AnalyticsPages.GUILD_CHANNEL,
    section: j.AnalyticsSections.CHAT_USERNAME,
    object: j.AnalyticsObjects.CONTEXT_MENU_ITEM
  }, P = (0, g.default)(n.id, t), L = (0, _.default)(n, t, x), y = (0, S.default)(n.id, x), R = (0, b.default)(n.id), D = (0, E.default)(n, x), k = (0, A.default)({
    user: n,
    guildId: t,
    context: x
  }), w = (0, v.default)({
    user: n
  }), z = (0, C.default)(n.id), H = (0, U.default)(n.id), X = (0, c.default)({
    guildId: t,
    userId: n.id,
    analyticsLocation: O,
    context: x
  }), B = (0, f.default)({
    user: n,
    guildId: t
  }), F = (0, N.default)({
    user: n,
    guildId: t
  }), V = (0, s.default)(null, n), Z = (0, p.default)(n), Y = (0, M.default)({
    user: n
  }), q = (0, I.default)(n, t), J = (0, h.default)(n.id, t), K = (0, T.default)(n, t), Q = (0, r.default)({
    id: n.id,
    label: m.default.Messages.COPY_ID_USER
  }), W = n.isNonUserBot();
  return (0, l.jsxs)(u.Menu, {
    navId: "user-context",
    onClose: i.closeContextMenu,
    "aria-label": m.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: G,
    children: [!W && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(u.MenuGroup, {
        children: [a && P, o && L, y, D, a && k, a && w, R]
      }), d && (0, l.jsx)(u.MenuGroup, {
        children: z
      }), (0, l.jsx)(u.MenuGroup, {
        children: a && V
      }), (0, l.jsxs)(u.MenuGroup, {
        children: [d && H, a && X, a && F, Z, B, a && Y]
      }), (0, l.jsx)(u.MenuGroup, {
        children: q
      }), (0, l.jsxs)(u.MenuGroup, {
        children: [J, K]
      })]
    }), (0, l.jsx)(u.MenuGroup, {
      children: Q
    })]
  })
}, {
  object: j.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.GUILD_USER_MENU])