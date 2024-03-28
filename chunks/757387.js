"use strict";
n.r(t);
var i = n("735250");
n("470079");
var a = n("481060"),
  u = n("239091"),
  l = n("883385"),
  d = n("108843"),
  r = n("911969"),
  s = n("947440"),
  o = n("100527"),
  c = n("441061"),
  E = n("167675"),
  f = n("737013"),
  T = n("299206"),
  _ = n("976192"),
  I = n("819403"),
  S = n("286694"),
  p = n("777658"),
  N = n("858488"),
  A = n("185457"),
  M = n("933409"),
  O = n("570870"),
  m = n("389052"),
  h = n("24311"),
  C = n("332576"),
  G = n("710631"),
  y = n("297047"),
  R = n("88966"),
  g = n("712301"),
  v = n("991307"),
  P = n("725119"),
  b = n("931617"),
  U = n("700994"),
  D = n("332031"),
  L = n("981631"),
  H = n("689938");
t.default = (0, d.default)((0, l.default)(function(e) {
  let {
    user: t,
    guildId: n,
    channel: l,
    showMediaItems: d = !1,
    showChatItems: o = !0,
    showChannelCallItems: V = !1,
    showModalItems: F = !0,
    showStageChannelItems: w = !1,
    context: B,
    onSelect: x,
    onHeightUpdate: W
  } = e, k = {
    page: L.AnalyticsPages.GUILD_CHANNEL,
    section: L.AnalyticsSections.CHAT_USERNAME,
    object: L.AnalyticsObjects.CONTEXT_MENU_ITEM
  }, j = (0, P.default)(t.id, n, l.id), K = (0, y.default)(t, n, B), Y = (0, R.default)(t.id, B), Z = (0, D.default)(t.id), q = (0, h.default)(t, B), z = (0, A.default)({
    user: t,
    guildId: n,
    context: B
  }), Q = (0, N.default)(t), X = (0, U.default)(t.id), J = (0, v.default)(t.id), $ = (0, _.default)({
    guildId: n,
    userId: t.id,
    analyticsLocation: k,
    context: B
  }), ee = (0, G.default)(t, n), et = (0, s.default)(null, t), en = (0, p.default)(t), ei = (0, m.default)(t), ea = (0, M.default)(t, n, l.id), eu = (0, b.default)(t.id, n), el = (0, g.default)(t, n), ed = (0, T.default)({
    id: t.id,
    label: H.default.Messages.COPY_ID_USER
  }), er = (0, C.default)(t.id, l.id), es = (0, E.default)(t.id), eo = (0, c.default)(l.id), ec = (0, I.default)(t), eE = (0, S.default)(t, n, l.id), ef = (0, O.default)({
    commandType: r.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: l,
    guildId: n,
    onHeightUpdate: W,
    context: B
  }), eT = (0, f.default)(t.id), e_ = t.isNonUserBot();
  return (0, i.jsxs)(a.Menu, {
    navId: "user-context",
    onClose: u.closeContextMenu,
    "aria-label": H.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: x,
    children: [!e_ && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(a.MenuGroup, {
        children: [ec, w && eE]
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [F && j, o && K, Y, q, F && z, F && Q, Z]
      }), d && (0, i.jsx)(a.MenuGroup, {
        children: X
      }), (0, i.jsx)(a.MenuGroup, {
        children: F && et
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [d && J, d && er, F && $, ef, F && ee, en, F && ei, V && eT]
      }), (0, i.jsx)(a.MenuGroup, {
        children: ea
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [eu, el]
      }), V && (0, i.jsxs)(a.MenuGroup, {
        children: [eo, es]
      })]
    }), (0, i.jsx)(a.MenuGroup, {
      children: ed
    })]
  })
}, {
  object: L.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.GUILD_CHANNEL_USER_MENU])