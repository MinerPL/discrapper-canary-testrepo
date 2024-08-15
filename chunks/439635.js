t.r(n);
var a = t(735250);
t(470079);
var i = t(481060),
  l = t(239091),
  u = t(108843),
  o = t(100527),
  r = t(299206),
  s = t(423589),
  c = t(398048),
  d = t(315732),
  _ = t(3689),
  E = t(323597),
  N = t(852245),
  Z = t(367722),
  p = t(776568),
  M = t(218035),
  C = t(775666),
  I = t(593589),
  T = t(442754),
  f = t(981631),
  h = t(689938);
n.default = (0, u.Z)(function(e) {
  let {
channel: n,
guild: t,
includeTopic: u = !1,
onSelect: o
  } = e, A = (0, T.Z)(n), P = (0, p.ZP)(n), g = (0, M.Z)(n), O = (0, d.Z)(n), x = (0, N.Z)(n), L = (0, Z.Z)(n, t), j = (0, c.Z)(n, t), b = (0, _.Z)(n, t, f.d4z.GUILD_TEXT), v = (0, _.Z)(n, t, f.d4z.GUILD_VOICE), G = (0, E.Z)(n), m = (0, r.Z)({
id: n.id,
label: h.Z.Messages.COPY_ID_CHANNEL
  }), H = (0, I.Z)(n, 'title_context_menu'), y = (0, s.Mn)('ChannelTitleContextMenu'), U = (0, C.ZP)(n);
  return (0, a.jsxs)(i.Menu, {
navId: 'channel-context',
onClose: l.Zy,
'aria-label': h.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
onSelect: o,
children: [
  (0, a.jsx)(i.MenuGroup, {
    children: A
  }),
  (0, a.jsx)(i.MenuGroup, {
    children: P
  }),
  (0, a.jsxs)(i.MenuGroup, {
    children: [
      u ? O : y ? U : g,
      x
    ]
  }),
  (0, a.jsxs)(i.MenuGroup, {
    children: [
      L,
      j,
      b,
      v
    ]
  }),
  (0, a.jsx)(i.MenuGroup, {
    children: H
  }),
  (0, a.jsx)(i.MenuGroup, {
    children: G
  }),
  (0, a.jsx)(i.MenuGroup, {
    children: m
  })
]
  });
}, [
  o.Z.CONTEXT_MENU,
  o.Z.CHANNEL_TITLE_MENU
]);