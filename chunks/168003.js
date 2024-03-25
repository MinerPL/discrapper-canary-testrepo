"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  u = n("272030"),
  s = n("838446"),
  o = n("158534"),
  r = n("846883"),
  d = n("812204"),
  c = n("861370"),
  f = n("20209"),
  E = n("972701"),
  _ = n("390008"),
  S = n("41205"),
  N = n("936947"),
  T = n("379304"),
  g = n("534222"),
  C = n("601131"),
  A = n("47495"),
  M = n("834052"),
  I = n("715243"),
  h = n("458574"),
  L = n("963150"),
  p = n("308798"),
  m = n("47006"),
  v = n("809259"),
  O = n("878526"),
  U = n("44141"),
  R = n("531674"),
  y = n("619436"),
  G = n("625399"),
  b = n("339876"),
  H = n("702741"),
  V = n("782000"),
  x = n("45593"),
  D = n("604887"),
  P = n("958936"),
  F = n("49111"),
  j = n("782340");

function w(e) {
  let {
    channel: t,
    guild: n,
    onSelect: s
  } = e, o = t.isGuildStageVoice(), d = (0, i.useStateFromStores)([M.default], () => o ? M.default.getStageInstanceByChannel(t.id) : void 0, [o, t.id]), f = (0, h.default)(t), T = (0, g.useActiveEvent)(t.id), I = (0, C.default)(null == T ? void 0 : T.id, n, t), L = (0, V.default)(t, d), p = (0, E.useAddToFavoritesItem)(t), O = (0, E.useRemoveFromFavoritesItem)(t), U = (0, _.default)(t), R = (0, S.default)(t), b = (0, N.default)(t), x = (0, v.default)(t), D = (0, y.default)(t), F = (0, m.default)(t), w = (0, P.default)(t, n), B = (0, c.default)({
    id: t.id,
    label: j.default.Messages.COPY_ID_CHANNEL
  }), k = (0, H.default)(t), Y = (0, r.default)(t), W = (0, A.useShouldUseNewNotificationSystem)("ChannelListVoiceContextMenuFavorite"), q = (0, G.default)(t);
  return (0, a.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: u.closeContextMenu,
    "aria-label": j.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: null != T ? I : L
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [R, b, U, p]
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [x, W ? q : D, F]
    }), (0, a.jsx)(l.MenuGroup, {
      children: Y
    }), (0, a.jsx)(l.MenuGroup, {
      children: O
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [w, f]
    }), (0, a.jsx)(l.MenuGroup, {
      children: k
    }), (0, a.jsx)(l.MenuGroup, {
      children: B
    })]
  })
}

function B(e) {
  let {
    channel: t,
    guild: n,
    onSelect: s
  } = e, o = t.isGuildStageVoice(), d = (0, i.useStateFromStores)([M.default], () => o ? M.default.getStageInstanceByChannel(t.id) : void 0, [o, t.id]), f = (0, U.default)(t), _ = (0, h.default)(t), S = (0, g.useActiveEvent)(t.id), N = (0, C.default)(null == S ? void 0 : S.id, n, t), F = (0, V.default)(t, d), w = (0, E.useAddToFavoritesItem)(t), B = (0, E.useRemoveFromFavoritesItem)(t), k = (0, v.default)(t), Y = (0, y.default)(t), W = (0, m.default)(t), q = (0, O.default)(t, n, d), K = (0, P.default)(t, n), X = (0, x.default)(t, n), Z = (0, D.default)(t, n.id), J = (0, I.default)(t, n), Q = (0, L.default)(t, n), z = (0, p.default)(t), $ = (0, c.default)({
    id: t.id,
    label: j.default.Messages.COPY_ID_CHANNEL
  }), ee = (0, H.default)(t), et = (0, r.default)(t), en = (0, b.default)(t), ea = (0, T.default)(t), ei = (0, R.default)(t), el = (0, A.useShouldUseNewNotificationSystem)("ChannelListVoiceContextMenuNormal"), eu = (0, G.default)(t);
  return (0, a.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: u.closeContextMenu,
    "aria-label": j.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: null != S ? N : F
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [f, w]
    }, "mark-as-read-or-favorite"), (0, a.jsxs)(l.MenuGroup, {
      children: [q, et, en, _]
    }, "channel-actions"), (0, a.jsxs)(l.MenuGroup, {
      children: [Z, K, X, k, ea, ee]
    }, "voice-actions"), (0, a.jsxs)(l.MenuGroup, {
      children: [ei, el ? eu : Y]
    }, "notifications"), (0, a.jsx)(l.MenuGroup, {
      children: B
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [W, J, Q, z]
    }, "admin-actions"), (0, a.jsx)(l.MenuGroup, {
      children: $
    }, "developer-actions")]
  })
}
var k = (0, o.default)((0, s.default)(function(e) {
  let t = (0, f.default)();
  return t ? (0, a.jsx)(w, {
    ...e
  }) : (0, a.jsx)(B, {
    ...e
  })
}, {
  object: F.AnalyticsObjects.CONTEXT_MENU
}), [d.default.CONTEXT_MENU, d.default.CHANNEL_LIST_VOICE_CHANNEL_MENU])