"use strict";
u.r(t);
var a = u("735250");
u("470079");
var l = u("481060"),
  d = u("239091"),
  n = u("883385"),
  s = u("108843"),
  i = u("911969"),
  r = u("947440"),
  o = u("100527"),
  f = u("441061"),
  c = u("167675"),
  S = u("737013"),
  E = u("299206"),
  _ = u("976192"),
  M = u("819403"),
  T = u("286694"),
  A = u("777658"),
  C = u("858488"),
  N = u("185457"),
  U = u("933409"),
  p = u("570870"),
  I = u("389052"),
  g = u("24311"),
  m = u("332576"),
  h = u("710631"),
  v = u("297047"),
  R = u("88966"),
  j = u("712301"),
  G = u("991307"),
  O = u("725119"),
  x = u("931617"),
  F = u("700994"),
  L = u("332031"),
  P = u("981631"),
  b = u("689938");
t.default = (0, s.default)((0, n.default)(function(e) {
  let {
    user: t,
    guildId: u,
    channel: n,
    showMediaItems: s = !1,
    showChatItems: o = !0,
    showChannelCallItems: k = !1,
    showModalItems: y = !0,
    showStageChannelItems: H = !1,
    context: D,
    onSelect: V,
    onHeightUpdate: K
  } = e, q = {
    page: P.AnalyticsPages.GUILD_CHANNEL,
    section: P.AnalyticsSections.CHAT_USERNAME,
    object: P.AnalyticsObjects.CONTEXT_MENU_ITEM
  }, B = (0, O.default)(t.id, u, n.id), X = (0, v.default)(t, u, D), Y = (0, R.default)(t.id, D), w = (0, L.default)(t.id), W = (0, g.default)(t, D), Q = (0, N.default)({
    user: t,
    guildId: u,
    context: D
  }), z = (0, C.default)({
    user: t
  }), J = (0, F.default)(t.id), Z = (0, G.default)(t.id), $ = (0, _.default)({
    guildId: u,
    userId: t.id,
    analyticsLocation: q,
    context: D
  }), ee = (0, h.default)({
    user: t,
    guildId: u
  }), et = (0, r.default)(null, t), eu = (0, A.default)(t), ea = (0, I.default)({
    user: t
  }), el = (0, U.default)(t, u, n.id), ed = (0, x.default)(t.id, u), en = (0, j.default)(t, u), es = (0, E.default)({
    id: t.id,
    label: b.default.Messages.COPY_ID_USER
  }), ei = (0, m.default)(t.id, n.id), er = (0, c.default)(t.id), eo = (0, f.default)(n.id), ef = (0, M.default)(t), ec = (0, T.default)(t, u, n.id), eS = (0, p.default)({
    commandType: i.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: n,
    guildId: u,
    onHeightUpdate: K,
    context: D
  }), eE = (0, S.default)(t.id), e_ = t.isNonUserBot();
  return (0, a.jsxs)(l.Menu, {
    navId: "user-context",
    onClose: d.closeContextMenu,
    "aria-label": b.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: V,
    children: [!e_ && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(l.MenuGroup, {
        children: [ef, H && ec]
      }), (0, a.jsxs)(l.MenuGroup, {
        children: [y && B, o && X, Y, W, y && Q, y && z, w]
      }), s && (0, a.jsx)(l.MenuGroup, {
        children: J
      }), (0, a.jsx)(l.MenuGroup, {
        children: y && et
      }), (0, a.jsxs)(l.MenuGroup, {
        children: [s && Z, s && ei, y && $, eS, y && ee, eu, y && ea, k && eE]
      }), (0, a.jsx)(l.MenuGroup, {
        children: el
      }), (0, a.jsxs)(l.MenuGroup, {
        children: [ed, en]
      }), k && (0, a.jsxs)(l.MenuGroup, {
        children: [eo, er]
      })]
    }), (0, a.jsx)(l.MenuGroup, {
      children: es
    })]
  })
}, {
  object: P.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.GUILD_CHANNEL_USER_MENU])