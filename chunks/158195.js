t.r(n);
var l = t(735250);
t(470079);
var a = t(481060),
  i = t(239091),
  r = t(883385),
  u = t(108843),
  o = t(100527),
  s = t(584836),
  d = t(896680),
  c = t(544642),
  I = t(981631),
  _ = t(689938);
n.default = (0, u.Z)((0, r.Z)(function(e) {
  let {
guildId: n,
context: t,
onSelect: r
  } = e, u = (0, c.Z)(n, t), o = (0, d.Z)(n, t), I = (0, s.Z)(n, t);
  return (0, l.jsxs)(a.Menu, {
navId: 'moderation-raid-context',
onClose: i.Zy,
'aria-label': _.Z.Messages.USER_ACTIONS_MENU_LABEL,
onSelect: r,
children: [
  (0, l.jsx)(a.MenuGroup, {
    children: o
  }),
  (0, l.jsxs)(a.MenuGroup, {
    children: [
      I,
      u
    ]
  })
]
  });
}, {
  object: I.qAy.CONTEXT_MENU
}), [
  o.Z.CONTEXT_MENU,
  o.Z.GUILD_MODERATION_RAID_MENU
]);