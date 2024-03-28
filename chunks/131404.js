"use strict";
n.r(t);
var a = n("735250");
n("470079");
var u = n("481060"),
  l = n("239091"),
  r = n("883385"),
  s = n("108843"),
  i = n("911969"),
  d = n("947440"),
  o = n("100527"),
  f = n("441061"),
  c = n("167675"),
  M = n("737013"),
  _ = n("461535"),
  E = n("776568"),
  I = n("299206"),
  S = n("895563"),
  p = n("212205"),
  g = n("62420"),
  T = n("455395"),
  A = n("581052"),
  m = n("875252"),
  h = n("819403"),
  C = n("777658"),
  R = n("858488"),
  v = n("185457"),
  N = n("570870"),
  F = n("389052"),
  O = n("24311"),
  G = n("794973"),
  x = n("332576"),
  U = n("710631"),
  y = n("558924"),
  j = n("991307"),
  P = n("725119"),
  b = n("700994"),
  V = n("332031"),
  L = n("981631"),
  D = n("689938");
t.default = (0, s.default)((0, r.default)(function(e) {
  let {
    user: t,
    channel: n,
    channelSelected: r = !1,
    showMute: s = !0,
    showMediaItems: o = !1,
    showChannelCallItems: L = !1,
    showModalItems: k = !0,
    targetIsUser: W = !1,
    context: Y,
    onSelect: K,
    onHeightUpdate: q
  } = e, H = (0, P.default)(t.id, null), w = (0, O.default)(t, Y), B = (0, v.default)({
    user: t,
    context: Y
  }), X = (0, R.default)(t), z = (0, V.default)(t.id), Q = (0, G.default)(n.id, r), J = (0, U.default)(t), Z = (0, d.default)(null, t), $ = (0, b.default)(t.id), ee = (0, y.default)(t.id, n.id), et = (0, C.default)(t), en = (0, j.default)(t.id), ea = (0, x.default)(t.id, n.id), eu = (0, F.default)(t), el = (0, E.default)(n), er = (0, I.default)({
    id: t.id,
    label: D.default.Messages.COPY_ID_USER
  }), es = (0, I.default)({
    id: n.id,
    label: D.default.Messages.COPY_ID_CHANNEL
  }), ei = (0, _.default)(n), ed = (0, c.default)(t.id), eo = (0, f.default)(n.id), ef = (0, h.default)(t), ec = (0, M.default)(t.id), eM = (0, N.default)({
    commandType: i.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: n,
    guildId: void 0,
    onHeightUpdate: q
  }), e_ = (0, S.useAddToFavoritesItem)(n), eE = (0, S.useRemoveFromFavoritesItem)(n), eI = (0, p.default)(n), eS = (0, g.default)(n), ep = (0, A.useMessageRequestItem)(n), eg = (0, T.useInappropriateConversationItem)(n), eT = (0, m.useSafetyWarningsItem)(n), eA = n.isManaged(), em = t.isNonUserBot();
  return (0, a.jsxs)(u.Menu, {
    navId: "user-context",
    onClose: l.closeContextMenu,
    "aria-label": D.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: K,
    children: [(0, a.jsx)(u.MenuGroup, {
      children: !em && ei
    }), (0, a.jsx)(u.MenuGroup, {
      children: ep
    }), (0, a.jsx)(u.MenuGroup, {
      children: eT
    }), (0, a.jsx)(u.MenuGroup, {
      children: eg
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [e_, eI, eS]
    }), (0, a.jsx)(u.MenuGroup, {
      children: !em && ef
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [!em && (0, a.jsxs)(a.Fragment, {
        children: [k && H, w, !eA && ee, k && B, k && X, z]
      }), Q]
    }), !em && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.MenuGroup, {
        children: o && $
      }), (0, a.jsx)(u.MenuGroup, {
        children: k && Z
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [o && en, o && ea, eM, k && J, et, k && eu, o && ec]
      }), (0, a.jsx)(u.MenuGroup, {
        children: s && el
      }), L && (0, a.jsxs)(u.MenuGroup, {
        children: [eo, ed]
      })]
    }), (0, a.jsx)(u.MenuGroup, {
      children: eE
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [er, !W && es]
    })]
  })
}, {
  object: L.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.DM_USER_MENU])