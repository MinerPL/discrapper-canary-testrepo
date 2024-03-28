"use strict";
n.r(t);
var l = n("735250");
n("470079");
var i = n("481060"),
  a = n("239091"),
  d = n("883385"),
  u = n("108843"),
  s = n("947440"),
  r = n("100527"),
  o = n("299206"),
  c = n("976192"),
  p = n("276022"),
  E = n("777658"),
  f = n("858488"),
  I = n("185457"),
  S = n("933409"),
  M = n("389052"),
  _ = n("24311"),
  A = n("710631"),
  N = n("297047"),
  T = n("88966"),
  v = n("712301"),
  b = n("991307"),
  h = n("725119"),
  O = n("931617"),
  m = n("700994"),
  G = n("332031"),
  y = n("981631"),
  g = n("689938");
t.default = (0, u.default)((0, d.default)(function(e) {
  let {
    user: t,
    guildId: n,
    showModalItems: d = !0,
    showMediaItems: u = !1,
    showChatItems: r = !0,
    context: C,
    onSelect: R
  } = e, P = {
    page: y.AnalyticsPages.GUILD_CHANNEL,
    section: y.AnalyticsSections.CHAT_USERNAME,
    object: y.AnalyticsObjects.CONTEXT_MENU_ITEM
  }, U = (0, h.default)(t.id, n), V = (0, N.default)(t, n, C), D = (0, T.default)(t.id, C), L = (0, G.default)(t.id), j = (0, _.default)(t, C), x = (0, I.default)({
    user: t,
    guildId: n,
    context: C
  }), w = (0, f.default)(t), H = (0, m.default)(t.id), W = (0, b.default)(t.id), B = (0, c.default)({
    guildId: n,
    userId: t.id,
    analyticsLocation: P,
    context: C
  }), F = (0, p.default)({
    user: t,
    guildId: n
  }), k = (0, A.default)(t, n), Y = (0, s.default)(null, t), z = (0, E.default)(t), K = (0, M.default)(t), X = (0, S.default)(t, n), J = (0, O.default)(t.id, n), Q = (0, v.default)(t, n), Z = (0, o.default)({
    id: t.id,
    label: g.default.Messages.COPY_ID_USER
  }), q = t.isNonUserBot();
  return (0, l.jsxs)(i.Menu, {
    navId: "user-context",
    onClose: a.closeContextMenu,
    "aria-label": g.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: R,
    children: [!q && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(i.MenuGroup, {
        children: [d && U, r && V, D, j, d && x, d && w, L]
      }), u && (0, l.jsx)(i.MenuGroup, {
        children: H
      }), (0, l.jsx)(i.MenuGroup, {
        children: d && Y
      }), (0, l.jsxs)(i.MenuGroup, {
        children: [u && W, d && B, d && k, z, F, d && K]
      }), (0, l.jsx)(i.MenuGroup, {
        children: X
      }), (0, l.jsxs)(i.MenuGroup, {
        children: [J, Q]
      })]
    }), (0, l.jsx)(i.MenuGroup, {
      children: Z
    })]
  })
}, {
  object: y.AnalyticsObjects.CONTEXT_MENU
}), [r.default.CONTEXT_MENU, r.default.GUILD_USER_MENU])