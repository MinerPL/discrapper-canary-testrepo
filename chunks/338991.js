u.r(n), u.d(n, {
    default: function () {
        return i;
    }
});
var a = u(735250);
u(470079);
var l = u(481060), r = u(239091), t = u(714447), s = u(439827), o = u(689938);
function i(e) {
    let {
            guildId: n,
            onSelect: u,
            onPickerClose: i
        } = e, c = (0, s.Z)(n, i), S = (0, t.Z)();
    return (0, a.jsx)(l.Menu, {
        navId: 'user-context',
        onClose: r.Zy,
        'aria-label': o.Z.Messages.USER_ACTIONS_MENU_LABEL,
        className: 'context-menu',
        onSelect: u,
        children: (0, a.jsxs)(l.MenuGroup, {
            children: [
                S,
                c
            ]
        })
    });
}
