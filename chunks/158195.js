t.r(n);
var l = t(735250);
t(470079);
var a = t(481060),
  i = t(239091),
  r = t(883385),
  o = t(108843),
  u = t(100527),
  s = t(584836),
  d = t(896680),
  c = t(544642),
  _ = t(981631),
  I = t(689938);
n.default = (0, o.Z)((0, r.Z)(function(e) {
  let {
guildId: n,
context: t,
onSelect: r
  } = e, o = (0, c.Z)(n, t), u = (0, d.Z)(n, t), _ = (0, s.Z)(n, t);
  return (0, l.jsxs)(a.Menu, {
navId: 'moderation-raid-context',
onClose: i.Zy,
'aria-label': I.Z.Messages.USER_ACTIONS_MENU_LABEL,
onSelect: r,
children: [
  (0, l.jsx)(a.MenuGroup, {
    children: u
  }),
  (0, l.jsxs)(a.MenuGroup, {
    children: [
      _,
      o
    ]
  })
]
  });
}, {
  object: _.qAy.CONTEXT_MENU
}), [
  u.Z.CONTEXT_MENU,
  u.Z.GUILD_MODERATION_RAID_MENU
]);