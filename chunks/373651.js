"use strict";
n.r(t);
var i = n("735250");
n("470079");
var r = n("481060"),
  a = n("239091"),
  l = n("883385"),
  u = n("108843"),
  o = n("947440"),
  s = n("100527"),
  d = n("299206"),
  c = n("457490"),
  f = n("895563"),
  h = n("212205"),
  p = n("478035"),
  m = n("62420"),
  x = n("423589"),
  v = n("398048"),
  g = n("109764"),
  C = n("3689"),
  E = n("323597"),
  b = n("852245"),
  S = n("367722"),
  y = n("461535"),
  I = n("776568"),
  M = n("218035"),
  O = n("775666"),
  N = n("593589"),
  _ = n("442754"),
  L = n("981631"),
  w = n("689938");

function A(e) {
  let {
    channel: t,
    onSelect: n
  } = e, l = (0, y.default)(t), u = (0, g.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), v = (0, h.default)(t), C = (0, p.default)(t), E = (0, m.default)(t), S = (0, I.default)(t), N = (0, M.default)(t), _ = (0, b.default)(t), L = (0, d.default)({
    id: t.id,
    label: w.default.Messages.COPY_ID_CHANNEL
  }), A = (0, o.default)(t), j = (0, O.default)(t), P = (0, x.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
  return (0, i.jsxs)(r.Menu, {
    navId: "channel-context",
    onClose: a.closeContextMenu,
    "aria-label": w.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, i.jsx)(r.MenuGroup, {
      children: l
    }), (0, i.jsxs)(r.MenuGroup, {
      children: [C, E, v, s]
    }), (0, i.jsxs)(r.MenuGroup, {
      children: [S, P ? j : N]
    }), (0, i.jsx)(r.MenuGroup, {
      children: _
    }), (0, i.jsx)(r.MenuGroup, {
      children: A
    }), (0, i.jsx)(r.MenuGroup, {
      children: c
    }), (0, i.jsx)(r.MenuGroup, {
      children: u
    }), (0, i.jsx)(r.MenuGroup, {
      children: L
    })]
  })
}

function j(e) {
  let {
    channel: t,
    guild: n,
    onSelect: l
  } = e, u = (0, y.default)(t), o = (0, g.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), h = (0, _.default)(t), p = (0, I.default)(t), m = (0, b.default)(t), L = (0, S.default)(t, n), A = (0, v.default)(t, n), j = (0, C.default)(t, n), P = (0, E.default)(t), T = (0, d.default)({
    id: t.id,
    label: w.default.Messages.COPY_ID_CHANNEL
  }), U = (0, N.default)(t, "list_text_channel_context_menu"), G = (0, M.default)(t), R = (0, O.default)(t), D = (0, x.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
  return (0, i.jsxs)(r.Menu, {
    navId: "channel-context",
    onClose: a.closeContextMenu,
    "aria-label": w.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: l,
    children: [(0, i.jsxs)(r.MenuGroup, {
      children: [u, s]
    }, "mark-as-read-or-favorite"), (0, i.jsxs)(r.MenuGroup, {
      children: [L, h, o, U]
    }, "channel-actions"), (0, i.jsxs)(r.MenuGroup, {
      children: [p, D ? R : G]
    }, "notifications"), (0, i.jsxs)(r.MenuGroup, {
      children: [m, A, j, P]
    }, "admin-actions"), (0, i.jsx)(r.MenuGroup, {
      children: c
    }), (0, i.jsx)(r.MenuGroup, {
      children: T
    }, "developer-actions")]
  })
}
t.default = (0, u.default)((0, l.default)(function(e) {
  return (0, c.default)() ? (0, i.jsx)(A, {
    ...e
  }) : (0, i.jsx)(j, {
    ...e
  })
}, {
  object: L.AnalyticsObjects.CONTEXT_MENU
}), [s.default.CONTEXT_MENU, s.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])