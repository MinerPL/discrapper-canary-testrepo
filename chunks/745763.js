t.r(n), t.d(n, {
    default: function () {
        return d;
    }
});
var l = t(735250);
t(470079);
var o = t(481060), a = t(239091), c = t(358085), s = t(998502), u = t(89013), r = t(689938);
function d(e) {
    let {
            text: n,
            onSelect: t
        } = e, d = (0, u.Z)(n);
    return c.isPlatformEmbedded ? (0, l.jsxs)(o.Menu, {
        navId: 'text-context',
        onClose: a.Zy,
        'aria-label': r.Z.Messages.TEXT_ACTIONS_MENU_LABEL,
        onSelect: t,
        children: [
            (0, l.jsx)(o.MenuGroup, { children: d }),
            (0, l.jsx)(o.MenuGroup, {
                children: (0, l.jsx)(o.MenuItem, {
                    id: 'copy',
                    label: r.Z.Messages.COPY,
                    action: () => s.ZP.copy(n)
                })
            })
        ]
    }) : null;
}
