t.r(n), t.d(n, {
    default: function () {
        return c;
    },
    useHasGuildRoleItems: function () {
        return r;
    }
});
var i = t(735250);
t(470079);
var a = t(481060), s = t(239091), l = t(241635), o = t(689938);
function r(e, n) {
    return (0, l.Z)(e, n).length > 0;
}
function c(e) {
    let {
            role: n,
            guild: t,
            onSelect: r
        } = e, c = (0, l.Z)(t, n);
    return 0 === c.length ? null : (0, i.jsx)(a.Menu, {
        navId: 'guild-settings-role-context',
        'aria-label': o.Z.Messages.GUILD_ROLE_ACTIONS_MENU_LABEL,
        onClose: s.Zy,
        onSelect: r,
        children: c
    });
}
