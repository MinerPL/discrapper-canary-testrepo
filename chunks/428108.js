a.r(n);
var t = a(735250);
a(470079);
var l = a(481060),
  r = a(239091),
  u = a(108843),
  c = a(100527),
  i = a(299206),
  s = a(398048),
  o = a(3689),
  d = a(323597),
  E = a(852245),
  _ = a(367722),
  Z = a(689938);
n.default = (0, u.Z)(function(e) {
  let {
channel: n,
guild: a,
onSelect: u
  } = e, c = (0, E.Z)(n), N = (0, _.Z)(n, a), M = (0, s.Z)(n, a), I = (0, o.Z)(n, a), A = (0, d.Z)(n), C = (0, i.Z)({
id: n.id,
label: Z.Z.Messages.COPY_ID_CHANNEL
  });
  return (0, t.jsxs)(l.Menu, {
navId: 'channel-context',
onClose: r.Zy,
'aria-label': Z.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
onSelect: u,
children: [
  (0, t.jsx)(l.MenuGroup, {
    children: c
  }),
  (0, t.jsxs)(l.MenuGroup, {
    children: [
      N,
      M,
      I
    ]
  }),
  (0, t.jsx)(l.MenuGroup, {
    children: A
  }),
  (0, t.jsx)(l.MenuGroup, {
    children: C
  })
]
  });
}, [
  c.Z.CONTEXT_MENU,
  c.Z.CHANNEL_ACTIVITY_FEED_VOICE_MENU
]);