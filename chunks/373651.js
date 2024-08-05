t.r(n);
var l = t(735250);
t(470079);
var i = t(481060),
  a = t(239091),
  r = t(883385),
  s = t(108843),
  o = t(947440),
  u = t(100527),
  c = t(299206),
  d = t(916069),
  p = t(895563),
  m = t(212205),
  h = t(478035),
  f = t(62420),
  x = t(423589),
  _ = t(398048),
  g = t(109764),
  N = t(3689),
  v = t(323597),
  E = t(852245),
  Z = t(367722),
  I = t(461535),
  T = t(776568),
  S = t(218035),
  C = t(775666),
  j = t(593589),
  b = t(442754),
  L = t(981631),
  O = t(689938);

function A(e) {
  let {
channel: n,
onSelect: t
  } = e, r = (0, I.Z)(n), s = (0, g.Z)(n), u = (0, p.l)(n), d = (0, p.P)(n), _ = (0, m.Z)(n), N = (0, h.Z)(n), v = (0, f.Z)(n), Z = (0, T.ZP)(n), j = (0, S.Z)(n), b = (0, E.Z)(n), L = (0, c.Z)({
id: n.id,
label: O.Z.Messages.COPY_ID_CHANNEL
  }), A = (0, o.Z)(n), M = (0, C.ZP)(n), P = (0, x.Mn)('ChannelContextFavoritesMenu');
  return (0, l.jsxs)(i.Menu, {
navId: 'channel-context',
onClose: a.Zy,
'aria-label': O.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
onSelect: t,
children: [
  (0, l.jsx)(i.MenuGroup, {
    children: r
  }),
  (0, l.jsxs)(i.MenuGroup, {
    children: [
      N,
      v,
      _,
      u
    ]
  }),
  (0, l.jsxs)(i.MenuGroup, {
    children: [
      Z,
      P ? M : j
    ]
  }),
  (0, l.jsx)(i.MenuGroup, {
    children: b
  }),
  (0, l.jsx)(i.MenuGroup, {
    children: A
  }),
  (0, l.jsx)(i.MenuGroup, {
    children: d
  }),
  (0, l.jsx)(i.MenuGroup, {
    children: s
  }),
  (0, l.jsx)(i.MenuGroup, {
    children: L
  })
]
  });
}

function M(e) {
  let {
channel: n,
guild: t,
onSelect: r
  } = e, s = (0, I.Z)(n), o = (0, g.Z)(n), u = (0, p.l)(n), d = (0, p.P)(n), m = (0, b.Z)(n), h = (0, T.ZP)(n), f = (0, E.Z)(n), L = (0, Z.Z)(n, t), A = (0, _.Z)(n, t), M = (0, N.Z)(n, t), P = (0, v.Z)(n), y = (0, c.Z)({
id: n.id,
label: O.Z.Messages.COPY_ID_CHANNEL
  }), U = (0, j.Z)(n, 'list_text_channel_context_menu'), R = (0, S.Z)(n), G = (0, C.ZP)(n), w = (0, x.Mn)('ChannelContextMenuNormal');
  return (0, l.jsxs)(i.Menu, {
navId: 'channel-context',
onClose: a.Zy,
'aria-label': O.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
onSelect: r,
children: [
  (0, l.jsxs)(i.MenuGroup, {
    children: [
      s,
      u
    ]
  }, 'mark-as-read-or-favorite'),
  (0, l.jsxs)(i.MenuGroup, {
    children: [
      L,
      m,
      o,
      U
    ]
  }, 'channel-actions'),
  (0, l.jsxs)(i.MenuGroup, {
    children: [
      h,
      w ? G : R
    ]
  }, 'notifications'),
  (0, l.jsxs)(i.MenuGroup, {
    children: [
      f,
      A,
      M,
      P
    ]
  }, 'admin-actions'),
  (0, l.jsx)(i.MenuGroup, {
    children: d
  }),
  (0, l.jsx)(i.MenuGroup, {
    children: y
  }, 'developer-actions')
]
  });
}
n.default = (0, s.Z)((0, r.Z)(function(e) {
  return (0, d.Z)() ? (0, l.jsx)(A, {
...e
  }) : (0, l.jsx)(M, {
...e
  });
}, {
  object: L.qAy.CONTEXT_MENU
}), [
  u.Z.CONTEXT_MENU,
  u.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU
]);