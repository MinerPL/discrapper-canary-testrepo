"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
});
var i = n("37983");
n("884691");
var r = n("77078"),
  a = n("272030"),
  l = n("838446"),
  u = n("158534"),
  o = n("846883"),
  s = n("812204"),
  d = n("861370"),
  c = n("20209"),
  f = n("972701"),
  h = n("390008"),
  p = n("41205"),
  m = n("936947"),
  x = n("47495"),
  v = n("715243"),
  g = n("458574"),
  C = n("963150"),
  E = n("308798"),
  b = n("47006"),
  S = n("878526"),
  y = n("44141"),
  I = n("531674"),
  M = n("619436"),
  O = n("625399"),
  N = n("731390"),
  _ = n("339876"),
  L = n("49111"),
  w = n("782340");

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
var P = (0, u.default)((0, l.default)(function(e) {
  let t = (0, c.default)();
  return t ? (0, i.jsx)(A, {
    ...e
  }) : (0, i.jsx)(j, {
    ...e
  })
}, {
  object: L.AnalyticsObjects.CONTEXT_MENU
}), [s.default.CONTEXT_MENU, s.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])