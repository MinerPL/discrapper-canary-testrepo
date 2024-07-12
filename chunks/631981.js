n.r(t);
var r = n(735250);
n(470079);
var c = n(442837),
  o = n(481060),
  s = n(239091),
  a = n(883385),
  i = n(853856),
  u = n(117984),
  d = n(981631),
  p = n(689938);
t.default = (0, a.Z)(function(e) {
  let {
onSelect: t
  } = e, n = (0, c.e7)([i.Z], () => i.Z.favoriteServerMuted);
  return (0, r.jsx)(o.Menu, {
navId: 'favorite-server-context',
onClose: s.Zy,
'aria-label': p.Z.Messages.USER_ACTIONS_MENU_LABEL,
onSelect: t,
children: (0, r.jsx)(o.MenuGroup, {
  children: (0, r.jsx)(o.MenuCheckboxItem, {
    id: 'mute-server',
    label: p.Z.Messages.MUTE_SERVER,
    action: () => (0, u._Z)(),
    checked: n
  })
})
  });
}, {
  object: d.qAy.CONTEXT_MENU
});