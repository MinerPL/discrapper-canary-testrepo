a.r(e);
var t = a(735250);
a(470079);
var l = a(481060),
  u = a(239091),
  r = a(108843),
  c = a(100527),
  s = a(299206),
  i = a(323597),
  o = a(852245),
  E = a(367722),
  d = a(689938);
e.default = (0, r.Z)(function(n) {
  let {
channel: e,
guild: a,
onSelect: r
  } = n, c = (0, o.Z)(e), _ = (0, E.Z)(e, a), Z = (0, i.Z)(e), N = (0, s.Z)({
id: e.id,
label: d.Z.Messages.COPY_ID_CHANNEL
  });
  return (0, t.jsxs)(l.Menu, {
navId: 'channel-context',
onClose: u.Zy,
'aria-label': d.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
onSelect: r,
children: [
  (0, t.jsx)(l.MenuGroup, {
    children: c
  }),
  (0, t.jsx)(l.MenuGroup, {
    children: _
  }),
  (0, t.jsx)(l.MenuGroup, {
    children: Z
  }),
  (0, t.jsx)(l.MenuGroup, {
    children: N
  })
]
  });
}, [
  c.Z.CONTEXT_MENU,
  c.Z.CHANNEL_LIST_STORE_CHANNEL_MENU
]);