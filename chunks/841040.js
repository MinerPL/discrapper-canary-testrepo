n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250);
n(470079);
var i = n(481060), a = n(300284), o = n(785717), s = n(981631), l = n(689938), u = n(711983);
let c = {
        page: s.ZY5.GUILD_CHANNEL,
        section: s.jXE.PROFILE_POPOUT,
        object: s.qAy.EDIT_PER_SERVER_IDENTITY
    }, d = {
        page: s.ZY5.USER_POPOUT,
        section: s.jXE.PROFILE_POPOUT
    };
function _(e) {
    let {
            onSelect: t,
            onClose: n,
            guild: s
        } = e, _ = (0, a.Z)({
            guild: s,
            analyticsLocation: c
        }), E = (0, a.Z)({ analyticsLocation: d }), {trackUserProfileAction: f} = (0, o.KZ)();
    return (0, r.jsxs)(i.Menu, {
        className: u.popoutMenu,
        onSelect: t,
        navId: 'edit-profile-popout',
        onClose: n,
        'aria-label': l.Z.Messages.PROFILE_ACTIONS_MENU_LABEL,
        children: [
            (0, r.jsx)(i.MenuItem, {
                id: 'edit-server-profile',
                label: l.Z.Messages.CHANGE_IDENTITY,
                subtext: l.Z.Messages.CHANGE_IDENTITY_SERVER_PROFILE_MENU_HELP,
                action: () => {
                    f({ action: 'EDIT_GUILD_PROFILE' }), _();
                }
            }),
            (0, r.jsx)(i.MenuItem, {
                id: 'edit-main-profile',
                label: l.Z.Messages.EDIT_MAIN_PROFILE,
                subtext: l.Z.Messages.USER_PROFILE_MENU_HELP,
                action: () => {
                    f({ action: 'EDIT_PROFILE' }), E();
                }
            })
        ]
    });
}
