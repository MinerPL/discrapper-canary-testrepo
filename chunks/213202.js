"use strict";
u.r(t);
var a = u("735250");
u("470079");
var n = u("442837"),
  l = u("481060"),
  s = u("239091"),
  d = u("883385"),
  i = u("108843"),
  o = u("947440"),
  r = u("100527"),
  f = u("299206"),
  c = u("457490"),
  E = u("895563"),
  _ = u("212205"),
  M = u("478035"),
  S = u("62420"),
  C = u("420529"),
  N = u("554747"),
  h = u("924952"),
  T = u("423589"),
  m = u("427679"),
  v = u("398048"),
  A = u("109764"),
  x = u("3689"),
  I = u("323597"),
  g = u("852245"),
  p = u("493802"),
  L = u("367722"),
  G = u("461535"),
  j = u("776568"),
  O = u("218035"),
  V = u("775666"),
  F = u("442754"),
  D = u("333805"),
  U = u("567521"),
  P = u("917327"),
  b = u("381924"),
  H = u("601274"),
  R = u("981631"),
  y = u("689938");

function k(e) {
  let {
    channel: t,
    guild: u,
    onSelect: d
  } = e, i = t.isGuildStageVoice(), r = (0, n.useStateFromStores)([m.default], () => i ? m.default.getStageInstanceByChannel(t.id) : void 0, [i, t.id]), c = (0, A.default)(t), C = (0, N.useActiveEvent)(t.id), v = (0, h.default)(null == C ? void 0 : C.id, u, t), x = (0, U.default)(t, r), I = (0, E.useAddToFavoritesItem)(t), L = (0, E.useRemoveFromFavoritesItem)(t), G = (0, _.default)(t), j = (0, M.default)(t), F = (0, S.default)(t), P = (0, p.default)(t), b = (0, O.default)(t), R = (0, g.default)(t), k = (0, H.default)(t, u), w = (0, f.default)({
    id: t.id,
    label: y.default.Messages.COPY_ID_CHANNEL
  }), B = (0, D.default)(t), X = (0, o.default)(t), Y = (0, T.useShouldUseNewNotificationSystem)("ChannelListVoiceContextMenuFavorite"), J = (0, V.default)(t);
  return (0, a.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: s.closeContextMenu,
    "aria-label": y.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: d,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: null != C ? v : x
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [j, F, G, I]
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [P, Y ? J : b, R]
    }), (0, a.jsx)(l.MenuGroup, {
      children: X
    }), (0, a.jsx)(l.MenuGroup, {
      children: L
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [k, c]
    }), (0, a.jsx)(l.MenuGroup, {
      children: B
    }), (0, a.jsx)(l.MenuGroup, {
      children: w
    })]
  })
}

function w(e) {
  let {
    channel: t,
    guild: u,
    onSelect: d
  } = e, i = t.isGuildStageVoice(), r = (0, n.useStateFromStores)([m.default], () => i ? m.default.getStageInstanceByChannel(t.id) : void 0, [i, t.id]), c = (0, G.default)(t), _ = (0, A.default)(t), M = (0, N.useActiveEvent)(t.id), S = (0, h.default)(null == M ? void 0 : M.id, u, t), R = (0, U.default)(t, r), k = (0, E.useAddToFavoritesItem)(t), w = (0, E.useRemoveFromFavoritesItem)(t), B = (0, p.default)(t), X = (0, O.default)(t), Y = (0, g.default)(t), J = (0, L.default)(t, u, r), K = (0, H.default)(t, u), z = (0, P.default)(t, u), q = (0, b.default)(t, u.id), Q = (0, v.default)(t, u), W = (0, x.default)(t, u), Z = (0, I.default)(t), $ = (0, f.default)({
    id: t.id,
    label: y.default.Messages.COPY_ID_CHANNEL
  }), ee = (0, D.default)(t), et = (0, o.default)(t), eu = (0, F.default)(t), ea = (0, C.default)(t), en = (0, j.default)(t), el = (0, T.useShouldUseNewNotificationSystem)("ChannelListVoiceContextMenuNormal"), es = (0, V.default)(t);
  return (0, a.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: s.closeContextMenu,
    "aria-label": y.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: d,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: null != M ? S : R
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [c, k]
    }, "mark-as-read-or-favorite"), (0, a.jsxs)(l.MenuGroup, {
      children: [J, et, eu, _]
    }, "channel-actions"), (0, a.jsxs)(l.MenuGroup, {
      children: [q, K, z, B, ea, ee]
    }, "voice-actions"), (0, a.jsxs)(l.MenuGroup, {
      children: [en, el ? es : X]
    }, "notifications"), (0, a.jsx)(l.MenuGroup, {
      children: w
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [Y, Q, W, Z]
    }, "admin-actions"), (0, a.jsx)(l.MenuGroup, {
      children: $
    }, "developer-actions")]
  })
}
t.default = (0, i.default)((0, d.default)(function(e) {
  return (0, c.default)() ? (0, a.jsx)(k, {
    ...e
  }) : (0, a.jsx)(w, {
    ...e
  })
}, {
  object: R.AnalyticsObjects.CONTEXT_MENU
}), [r.default.CONTEXT_MENU, r.default.CHANNEL_LIST_VOICE_CHANNEL_MENU])