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
  c = n("441061"),
  f = n("167675"),
  S = n("737013"),
  _ = n("702321"),
  M = n("461535"),
  E = n("776568"),
  I = n("299206"),
  m = n("895563"),
  T = n("212205"),
  C = n("62420"),
  g = n("455395"),
  N = n("581052"),
  A = n("875252"),
  p = n("122074"),
  v = n("819403"),
  h = n("777658"),
  O = n("858488"),
  x = n("185457"),
  U = n("570870"),
  R = n("389052"),
  F = n("24311"),
  D = n("794973"),
  b = n("332576"),
  G = n("710631"),
  j = n("558924"),
  y = n("991307"),
  L = n("725119"),
  P = n("700994"),
  V = n("332031"),
  k = n("981631"),
  B = n("689938");
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
    onSelect: q,
    onHeightUpdate: H
  } = e, z = (0, L.default)(t.id, null), Q = (0, F.default)(t, K), X = (0, x.default)({
    user: t,
    context: K
  }), Z = (0, O.default)({
    user: t
  }), J = (0, V.default)(t.id), $ = (0, D.default)(n.id, i), ee = (0, G.default)({
    user: t
  }), et = (0, d.default)(null, t), en = (0, P.default)(t.id), ea = (0, j.default)(t.id, n.id), eu = (0, h.default)(t), el = (0, y.default)(t.id), ei = (0, b.default)(t.id, n.id), es = (0, R.default)({
    user: t
  }), er = (0, E.default)(n), ed = (0, p.useCustomNotificationSoundDMContextMenuItem)(k.ZERO_STRING_GUILD_ID, n.id, "trailing"), eo = (0, I.default)({
    id: t.id,
    label: B.default.Messages.COPY_ID_USER
  }), ec = (0, I.default)({
    id: n.id,
    label: B.default.Messages.COPY_ID_CHANNEL
  }), ef = (0, M.default)(n), eS = (0, f.default)(t.id), e_ = (0, c.default)(n.id), eM = (0, v.default)(t), eE = (0, S.default)(t.id), eI = (0, U.default)({
    commandType: r.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: n,
    guildId: void 0,
    onHeightUpdate: H
  }), em = (0, m.useAddToFavoritesItem)(n), eT = (0, m.useRemoveFromFavoritesItem)(n), eC = (0, T.default)(n), eg = (0, C.default)(n), eN = (0, N.useMessageRequestItem)(n), eA = (0, g.useInappropriateConversationItem)(n), ep = (0, A.useSafetyWarningsItem)(n), ev = n.isManaged(), eh = t.isNonUserBot();
  return (0, a.jsxs)(u.Menu, {
    navId: "user-context",
    onClose: l.closeContextMenu,
    "aria-label": B.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: q,
    children: [(0, a.jsx)(u.MenuGroup, {
      children: !(eh && !(0, _.default)(n.id)) && ef
    }), (0, a.jsx)(u.MenuGroup, {
      children: eN
    }), (0, a.jsx)(u.MenuGroup, {
      children: ep
    }), (0, a.jsx)(u.MenuGroup, {
      children: eA
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [em, eC, eg]
    }), (0, a.jsx)(u.MenuGroup, {
      children: !eh && eM
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [!eh && (0, a.jsxs)(a.Fragment, {
        children: [w && z, Q, !ev && ea, w && X, w && Z, J]
      }), $]
    }), !eh && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.MenuGroup, {
        children: o && en
      }), (0, a.jsx)(u.MenuGroup, {
        children: w && et
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [o && el, o && ei, eI, w && ee, eu, w && es, o && eE]
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [s && er, ed]
      }), W && (0, a.jsxs)(u.MenuGroup, {
        children: [e_, eS]
      })]
    }), (0, _.default)(n.id) && (0, a.jsxs)(u.MenuGroup, {
      children: [s && er, ed]
    }), (0, a.jsx)(u.MenuGroup, {
      children: eT
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [eo, !Y && ec]
    })]
  })
}, {
  object: k.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.DM_USER_MENU])