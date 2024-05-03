"use strict";
n.r(t);
var a = n("735250");
n("470079");
var u = n("481060"),
  l = n("239091"),
  i = n("883385"),
  s = n("108843"),
  r = n("911969"),
  d = n("947440"),
  o = n("100527"),
  f = n("441061"),
  c = n("167675"),
  S = n("737013"),
  _ = n("461535"),
  I = n("776568"),
  M = n("299206"),
  E = n("895563"),
  T = n("212205"),
  m = n("62420"),
  C = n("455395"),
  p = n("581052"),
  N = n("875252"),
  A = n("122074"),
  g = n("819403"),
  h = n("777658"),
  v = n("858488"),
  R = n("185457"),
  O = n("570870"),
  x = n("389052"),
  U = n("24311"),
  F = n("794973"),
  G = n("332576"),
  y = n("710631"),
  j = n("558924"),
  P = n("991307"),
  b = n("725119"),
  D = n("700994"),
  L = n("332031"),
  k = n("981631"),
  V = n("689938");
t.default = (0, s.default)((0, i.default)(function(e) {
  let {
    user: t,
    channel: n,
    channelSelected: i = !1,
    showMute: s = !0,
    showMediaItems: o = !1,
    showChannelCallItems: W = !1,
    showModalItems: w = !0,
    targetIsUser: Y = !1,
    context: K,
    onSelect: B,
    onHeightUpdate: q
  } = e, H = (0, b.default)(t.id, null), Q = (0, U.default)(t, K), X = (0, R.default)({
    user: t,
    context: K
  }), z = (0, v.default)({
    user: t
  }), J = (0, L.default)(t.id), Z = (0, F.default)(n.id, i), $ = (0, y.default)({
    user: t
  }), ee = (0, d.default)(null, t), et = (0, D.default)(t.id), en = (0, j.default)(t.id, n.id), ea = (0, h.default)(t), eu = (0, P.default)(t.id), el = (0, G.default)(t.id, n.id), ei = (0, x.default)({
    user: t
  }), es = (0, I.default)(n), er = (0, A.default)(k.ZERO_STRING_GUILD_ID, n.id), ed = (0, M.default)({
    id: t.id,
    label: V.default.Messages.COPY_ID_USER
  }), eo = (0, M.default)({
    id: n.id,
    label: V.default.Messages.COPY_ID_CHANNEL
  }), ef = (0, _.default)(n), ec = (0, c.default)(t.id), eS = (0, f.default)(n.id), e_ = (0, g.default)(t), eI = (0, S.default)(t.id), eM = (0, O.default)({
    commandType: r.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: n,
    guildId: void 0,
    onHeightUpdate: q
  }), eE = (0, E.useAddToFavoritesItem)(n), eT = (0, E.useRemoveFromFavoritesItem)(n), em = (0, T.default)(n), eC = (0, m.default)(n), ep = (0, p.useMessageRequestItem)(n), eN = (0, C.useInappropriateConversationItem)(n), eA = (0, N.useSafetyWarningsItem)(n), eg = n.isManaged(), eh = t.isNonUserBot();
  return (0, a.jsxs)(u.Menu, {
    navId: "user-context",
    onClose: l.closeContextMenu,
    "aria-label": V.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: B,
    children: [(0, a.jsx)(u.MenuGroup, {
      children: !eh && ef
    }), (0, a.jsx)(u.MenuGroup, {
      children: ep
    }), (0, a.jsx)(u.MenuGroup, {
      children: eA
    }), (0, a.jsx)(u.MenuGroup, {
      children: eN
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [eE, em, eC]
    }), (0, a.jsx)(u.MenuGroup, {
      children: !eh && e_
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [!eh && (0, a.jsxs)(a.Fragment, {
        children: [w && H, Q, !eg && en, w && X, w && z, J]
      }), Z]
    }), !eh && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.MenuGroup, {
        children: o && et
      }), (0, a.jsx)(u.MenuGroup, {
        children: w && ee
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [o && eu, o && el, eM, w && $, ea, w && ei, o && eI]
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [s && es, er]
      }), W && (0, a.jsxs)(u.MenuGroup, {
        children: [eS, ec]
      })]
    }), (0, a.jsx)(u.MenuGroup, {
      children: eT
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [ed, !Y && eo]
    })]
  })
}, {
  object: k.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.DM_USER_MENU])