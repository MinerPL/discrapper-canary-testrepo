t.r(n);
var l = t(735250);
t(470079);
var r = t(481060),
  a = t(239091),
  i = t(883385),
  s = t(108843),
  o = t(947440),
  u = t(100527),
  c = t(299206),
  d = t(916069),
  p = t(895563),
  x = t(212205),
  m = t(478035),
  h = t(62420),
  f = t(423589),
  N = t(398048),
  g = t(109764),
  j = t(3689),
  Z = t(323597),
  v = t(852245),
  I = t(367722),
  C = t(461535),
  b = t(776568),
  E = t(218035),
  T = t(775666),
  _ = t(593589),
  L = t(442754),
  M = t(981631),
  O = t(689938);

function S(e) {
  let {
channel: n,
onSelect: t
  } = e, i = (0, C.Z)(n), s = (0, g.Z)(n), u = (0, p.l)(n), d = (0, p.P)(n), N = (0, x.Z)(n), j = (0, m.Z)(n), Z = (0, h.Z)(n), I = (0, b.ZP)(n), _ = (0, E.Z)(n), L = (0, v.Z)(n), M = (0, c.Z)({
id: n.id,
label: O.Z.Messages.COPY_ID_CHANNEL
  }), S = (0, o.Z)(n), A = (0, T.ZP)(n), P = (0, f.Mn)('ChannelContextFavoritesMenu');
  return (0, l.jsxs)(r.Menu, {
navId: 'channel-context',
onClose: a.Zy,
'aria-label': O.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
onSelect: t,
children: [
  (0, l.jsx)(r.MenuGroup, {
    children: i
  }),
  (0, l.jsxs)(r.MenuGroup, {
    children: [
      j,
      Z,
      N,
      u
    ]
  }),
  (0, l.jsxs)(r.MenuGroup, {
    children: [
      I,
      P ? A : _
    ]
  }),
  (0, l.jsx)(r.MenuGroup, {
    children: L
  }),
  (0, l.jsx)(r.MenuGroup, {
    children: S
  }),
  (0, l.jsx)(r.MenuGroup, {
    children: d
  }),
  (0, l.jsx)(r.MenuGroup, {
    children: s
  }),
  (0, l.jsx)(r.MenuGroup, {
    children: M
  })
]
  });
}

function A(e) {
  let {
channel: n,
guild: t,
onSelect: i
  } = e, s = (0, C.Z)(n), o = (0, g.Z)(n), u = (0, p.l)(n), d = (0, p.P)(n), x = (0, L.Z)(n), m = (0, b.ZP)(n), h = (0, v.Z)(n), M = (0, I.Z)(n, t), S = (0, N.Z)(n, t), A = (0, j.Z)(n, t), P = (0, Z.Z)(n), U = (0, c.Z)({
id: n.id,
label: O.Z.Messages.COPY_ID_CHANNEL
  }), y = (0, _.Z)(n, 'list_text_channel_context_menu'), G = (0, E.Z)(n), B = (0, T.ZP)(n), R = (0, f.Mn)('ChannelContextMenuNormal');
  return (0, l.jsxs)(r.Menu, {
navId: 'channel-context',
onClose: a.Zy,
'aria-label': O.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
onSelect: i,
children: [
  (0, l.jsxs)(r.MenuGroup, {
    children: [
      s,
      u
    ]
  }, 'mark-as-read-or-favorite'),
  (0, l.jsxs)(r.MenuGroup, {
    children: [
      M,
      x,
      o,
      y
    ]
  }, 'channel-actions'),
  (0, l.jsxs)(r.MenuGroup, {
    children: [
      m,
      R ? B : G
    ]
  }, 'notifications'),
  (0, l.jsxs)(r.MenuGroup, {
    children: [
      h,
      S,
      A,
      P
    ]
  }, 'admin-actions'),
  (0, l.jsx)(r.MenuGroup, {
    children: d
  }),
  (0, l.jsx)(r.MenuGroup, {
    children: U
  }, 'developer-actions')
]
  });
}
n.default = (0, s.Z)((0, i.Z)(function(e) {
  return (0, d.Z)() ? (0, l.jsx)(S, {
...e
  }) : (0, l.jsx)(A, {
...e
  });
}, {
  object: M.qAy.CONTEXT_MENU
}), [
  u.Z.CONTEXT_MENU,
  u.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU
]);