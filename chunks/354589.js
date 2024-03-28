"use strict";
a.r(t);
var u = a("735250");
a("470079");
var l = a("481060"),
  n = a("239091"),
  s = a("883385"),
  d = a("108843"),
  r = a("911969"),
  i = a("947440"),
  o = a("100527"),
  f = a("581364"),
  c = a("441061"),
  m = a("167675"),
  S = a("737013"),
  M = a("299206"),
  g = a("819403"),
  p = a("777658"),
  h = a("858488"),
  _ = a("185457"),
  v = a("570870"),
  E = a("389052"),
  x = a("24311"),
  I = a("915193"),
  C = a("332576"),
  N = a("710631"),
  j = a("297047"),
  R = a("88966"),
  A = a("397616"),
  T = a("558924"),
  U = a("991307"),
  O = a("725119"),
  P = a("700994"),
  F = a("332031"),
  G = a("981631"),
  k = a("689938");
t.default = (0, d.default)((0, s.default)(function(e) {
  var t;
  let {
    user: a,
    channel: s,
    context: d,
    showChatItems: o = !0,
    showMediaItems: G = !1,
    showChannelCallItems: L = !1,
    showModalItems: b = !0,
    onSelect: w,
    onHeightUpdate: y
  } = e, D = (0, O.default)(a.id, null), z = (0, j.default)(a, null, d), H = (0, T.default)(a.id, s.id), W = (0, R.default)(a.id, d), K = (0, x.default)(a, d), V = (0, _.default)({
    user: a,
    context: d
  }), B = (0, h.default)(a), Y = (0, P.default)(a.id), q = (0, A.default)(a.id, s.id), Z = (0, U.default)(a.id), X = (0, C.default)(a.id, s.id), Q = (0, N.default)(a), J = (0, i.default)(null, a), $ = (0, p.default)(a), ee = (0, E.default)(a), et = (0, M.default)({
    id: a.id,
    label: k.default.Messages.COPY_ID_USER
  }), ea = (0, F.default)(a.id), eu = (0, m.default)(a.id), el = (0, c.default)(s.id), en = (0, g.default)(a), es = (0, S.default)(a.id), ed = (0, v.default)({
    commandType: r.ApplicationCommandType.USER,
    commandTargetId: a.id,
    channel: s,
    guildId: void 0,
    onHeightUpdate: y
  }), er = (0, I.default)(a, s), ei = (0, f.useIsUserInUserAppExperiment)({
    location: "GroupDMUserContextMenu"
  }), eo = a.isNonUserBot(), ef = s.isManaged(), ec = null === (t = s.recipients) || void 0 === t ? void 0 : t.includes(a.id);
  return (0, u.jsxs)(l.Menu, {
    navId: "user-context",
    onClose: n.closeContextMenu,
    "aria-label": k.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: w,
    children: [!eo && (0, u.jsxs)(u.Fragment, {
      children: [(0, u.jsx)(l.MenuGroup, {
        children: en
      }), (0, u.jsxs)(l.MenuGroup, {
        children: [b && D, o && z, W, K, !ef && H, b && V, b && B, ea]
      }), G && (0, u.jsx)(l.MenuGroup, {
        children: Y
      }), ec && (0, u.jsxs)(l.MenuGroup, {
        children: [!ef && q, er]
      }), (0, u.jsx)(l.MenuGroup, {
        children: b && J
      }), (0, u.jsxs)(l.MenuGroup, {
        children: [G && Z, G && X, ei && ed, b && Q, $, b && ee, G && es]
      }), L && (0, u.jsxs)(l.MenuGroup, {
        children: [el, eu]
      })]
    }), (0, u.jsx)(l.MenuGroup, {
      children: et
    })]
  })
}, {
  object: G.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.GROUP_DM_USER_MENU])