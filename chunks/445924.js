var r = n(735250);
n(470079);
var i = n(481060),
  s = n(689938);
t.Z = e => {
  let {
onChangeAvatar: t,
onChangeAvatarDecoration: n,
onClose: l,
className: o
  } = e;
  return (0, r.jsxs)(i.Menu, {
className: o,
onClose: l,
onSelect: void 0,
navId: 'user-settings-change-avatar',
'aria-label': s.Z.Messages.AVATAR_ACTIONS_MENU_LABEL,
children: [
  (0, r.jsx)(i.MenuItem, {
    id: 'change-avatar',
    action: t,
    label: s.Z.Messages.USER_SETTINGS_CHANGE_AVATAR
  }),
  (0, r.jsx)(i.MenuItem, {
    id: 'change-avatar-decoration',
    action: n,
    label: s.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
  })
]
  });
};