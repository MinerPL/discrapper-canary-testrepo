"use strict";
a.r(t);
var n = a("735250");
a("470079");
var l = a("481060"),
  u = a("239091"),
  s = a("108843"),
  d = a("100527"),
  r = a("299206"),
  i = a("457490"),
  o = a("697229"),
  c = a("212205"),
  f = a("423589"),
  _ = a("411567"),
  E = a("672824"),
  C = a("3689"),
  M = a("323597"),
  A = a("852245"),
  h = a("461535"),
  N = a("776568"),
  g = a("218035"),
  T = a("775666"),
  p = a("442754"),
  I = a("623483"),
  O = a("689938");

function m(e) {
  let {
    channel: t,
    onSelect: a
  } = e, s = (0, h.default)(t), d = (0, N.default)(t), i = (0, g.default)(t), C = (0, E.default)(t), M = (0, _.default)(t), A = (0, c.default)(t), p = (0, o.default)(t), m = (0, I.default)(t), S = (0, r.default)({
    id: t.id,
    label: O.default.Messages.COPY_ID_CHANNEL
  }), L = (0, f.useShouldUseNewNotificationSystem)("ChannelCategoryFavoritesMenu"), x = (0, T.default)(t);
  return (0, n.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: u.closeContextMenu,
    "aria-label": O.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: a,
    children: [(0, n.jsxs)(l.MenuGroup, {
      children: [s, p, A]
    }), (0, n.jsxs)(l.MenuGroup, {
      children: [d, L ? x : i]
    }), (0, n.jsxs)(l.MenuGroup, {
      children: [C, M]
    }), (0, n.jsx)(l.MenuGroup, {
      children: m
    }), (0, n.jsx)(l.MenuGroup, {
      children: S
    })]
  })
}

function S(e) {
  let {
    channel: t,
    guild: a,
    onSelect: s
  } = e, d = (0, h.default)(t), i = (0, N.default)(t), o = (0, g.default)(t), I = (0, E.default)(t), m = (0, _.default)(t), S = (0, A.default)(t), L = (0, c.default)(t), x = (0, C.default)(t, a), G = (0, M.default)(t), v = (0, r.default)({
    id: t.id,
    label: O.default.Messages.COPY_ID_CHANNEL
  }), y = (0, p.default)(t), R = (0, f.useShouldUseNewNotificationSystem)("ChannelCategoryNormalMenu"), j = (0, T.default)(t);
  return (0, n.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: u.closeContextMenu,
    "aria-label": O.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, n.jsx)(l.MenuGroup, {
      children: d
    }, "mark-as-read"), (0, n.jsxs)(l.MenuGroup, {
      children: [y, I, m]
    }, "channel-actions"), (0, n.jsxs)(l.MenuGroup, {
      children: [i, R ? j : o]
    }, "notifications"), (0, n.jsxs)(l.MenuGroup, {
      children: [S, L, x, G]
    }, "admin-actions"), (0, n.jsx)(l.MenuGroup, {
      children: v
    }, "developer-actions")]
  })
}
t.default = (0, s.default)(function(e) {
  return (0, i.default)() ? (0, n.jsx)(m, {
    ...e
  }) : (0, n.jsx)(S, {
    ...e
  })
}, [d.default.CONTEXT_MENU, d.default.CHANNEL_CATEGORY_MENU])