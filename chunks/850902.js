o.r(n), o.d(n, {
    default: function () {
        return a;
    }
});
var r = o(735250);
o(470079);
var s = o(481060), c = o(239091), t = o(689938);
function a(e) {
    let {
        roleId: n,
        onLeaveRole: o,
        onSelect: a
    } = e;
    return (0, r.jsx)(s.Menu, {
        navId: 'guild-role-connections-context',
        'aria-label': t.Z.Messages.CONNECTIONS_ROLES_CHANNEL_LEAVE_VERIFIED_ROLE,
        onClose: c.Zy,
        onSelect: a,
        children: (0, r.jsx)(s.MenuGroup, {
            children: (0, r.jsx)(s.MenuItem, {
                id: 'guild-role-connections-leave-role',
                label: t.Z.Messages.CONNECTIONS_ROLES_CHANNEL_LEAVE_VERIFIED_ROLE,
                action: o,
                color: 'danger'
            }, n)
        })
    }, n);
}
