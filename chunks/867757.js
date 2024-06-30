t.r(n), t.d(n, {
    default: function () {
        return l;
    }
});
var u = t(735250);
t(470079);
var s = t(481060), r = t(239091), c = t(410575), i = t(416977), a = t(778123), d = t(981631), o = t(689938);
function l(e) {
    let {
            guildId: n,
            analyticsContext: t,
            onSelect: l
        } = e, E = (0, i.Z)(n), _ = (0, a.Z)(n);
    return (0, u.jsx)(c.Z, {
        context: t,
        object: d.qAy.CONTEXT_MENU,
        children: (0, u.jsxs)(s.Menu, {
            navId: 'user-context',
            onClose: r.Zy,
            'aria-label': o.Z.Messages.USER_ACTIONS_MENU_LABEL,
            onSelect: l,
            children: [
                (0, u.jsx)(s.MenuGroup, { children: E }),
                (0, u.jsx)(s.MenuGroup, { children: _ })
            ]
        })
    });
}
