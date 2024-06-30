var r = n(735250);
n(470079);
var s = n(481060), i = n(689938);
t.Z = e => {
    let {
        onChangeAvatar: t,
        onChangeAvatarDecoration: n,
        onClose: l,
        className: o
    } = e;
    return (0, r.jsxs)(s.Menu, {
        className: o,
        onClose: l,
        onSelect: void 0,
        navId: 'user-settings-change-avatar',
        'aria-label': i.Z.Messages.AVATAR_ACTIONS_MENU_LABEL,
        children: [
            (0, r.jsx)(s.MenuItem, {
                id: 'change-avatar',
                action: t,
                label: i.Z.Messages.USER_SETTINGS_CHANGE_AVATAR
            }),
            (0, r.jsx)(s.MenuItem, {
                id: 'change-avatar-decoration',
                action: n,
                label: i.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
            })
        ]
    });
};
