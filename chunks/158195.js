e.r(t);
var u = e(735250);
e(470079);
var i = e(481060),
  r = e(239091),
  l = e(883385),
  o = e(108843),
  a = e(100527),
  c = e(584836),
  d = e(544642),
  s = e(965244),
  f = e(981631),
  _ = e(689938);
t.default = (0, o.Z)((0, l.Z)(function(n) {
  let {
guildId: t,
context: e,
onSelect: l
  } = n, o = (0, d.Z)(t, e), a = (0, s.Z)(t, e), f = (0, c.Z)(t, e);
  return (0, u.jsxs)(i.Menu, {
navId: 'moderation-raid-context',
onClose: r.Zy,
'aria-label': _.Z.Messages.USER_ACTIONS_MENU_LABEL,
onSelect: l,
children: [
  (0, u.jsx)(i.MenuGroup, {
    children: a
  }),
  (0, u.jsxs)(i.MenuGroup, {
    children: [
      f,
      o
    ]
  })
]
  });
}, {
  object: f.qAy.CONTEXT_MENU
}), [
  a.Z.CONTEXT_MENU,
  a.Z.GUILD_MODERATION_RAID_MENU
]);