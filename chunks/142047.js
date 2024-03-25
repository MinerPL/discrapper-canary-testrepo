"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var a = n("37983");
n("884691");
var i = n("77078"),
  l = n("272030"),
  s = n("158534"),
  u = n("812204"),
  r = n("861370"),
  o = n("20209"),
  d = n("393522"),
  f = n("390008"),
  c = n("47495"),
  E = n("178261"),
  _ = n("852275"),
  N = n("963150"),
  S = n("308798"),
  C = n("47006"),
  T = n("44141"),
  g = n("531674"),
  A = n("619436"),
  h = n("625399"),
  M = n("339876"),
  I = n("295189"),
  L = n("782340");

function p(e) {
  let {
    channel: t,
    onSelect: n
  } = e, s = (0, T.default)(t), u = (0, g.default)(t), o = (0, A.default)(t), N = (0, _.default)(t), S = (0, E.default)(t), C = (0, f.default)(t), M = (0, d.default)(t), p = (0, I.default)(t), v = (0, r.default)({
    id: t.id,
    label: L.default.Messages.COPY_ID_CHANNEL
  }), O = (0, c.useShouldUseNewNotificationSystem)("ChannelCategoryFavoritesMenu"), m = (0, h.default)(t);
  return (0, a.jsxs)(i.Menu, {
    navId: "channel-context",
    onClose: l.closeContextMenu,
    "aria-label": L.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, a.jsxs)(i.MenuGroup, {
      children: [s, M, C]
    }), (0, a.jsxs)(i.MenuGroup, {
      children: [u, O ? m : o]
    }), (0, a.jsxs)(i.MenuGroup, {
      children: [N, S]
    }), (0, a.jsx)(i.MenuGroup, {
      children: p
    }), (0, a.jsx)(i.MenuGroup, {
      children: v
    })]
  })
}

function v(e) {
  let {
    channel: t,
    guild: n,
    onSelect: s
  } = e, u = (0, T.default)(t), o = (0, g.default)(t), d = (0, A.default)(t), I = (0, _.default)(t), p = (0, E.default)(t), v = (0, C.default)(t), O = (0, f.default)(t), m = (0, N.default)(t, n), U = (0, S.default)(t), y = (0, r.default)({
    id: t.id,
    label: L.default.Messages.COPY_ID_CHANNEL
  }), R = (0, M.default)(t), G = (0, c.useShouldUseNewNotificationSystem)("ChannelCategoryNormalMenu"), F = (0, h.default)(t);
  return (0, a.jsxs)(i.Menu, {
    navId: "channel-context",
    onClose: l.closeContextMenu,
    "aria-label": L.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, a.jsx)(i.MenuGroup, {
      children: u
    }, "mark-as-read"), (0, a.jsxs)(i.MenuGroup, {
      children: [R, I, p]
    }, "channel-actions"), (0, a.jsxs)(i.MenuGroup, {
      children: [o, G ? F : d]
    }, "notifications"), (0, a.jsxs)(i.MenuGroup, {
      children: [v, O, m, U]
    }, "admin-actions"), (0, a.jsx)(i.MenuGroup, {
      children: y
    }, "developer-actions")]
  })
}
var O = (0, s.default)(function(e) {
  let t = (0, o.default)();
  return t ? (0, a.jsx)(p, {
    ...e
  }) : (0, a.jsx)(v, {
    ...e
  })
}, [u.default.CONTEXT_MENU, u.default.CHANNEL_CATEGORY_MENU])