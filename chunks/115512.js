n.r(t), n.d(t, {
    default: function () {
        return d;
    }
});
var a = n(735250);
n(470079);
var l = n(481060), r = n(239091), i = n(358085), s = n(29264), u = n(905041), o = n(689938);
function d(e) {
    let {
            src: t,
            onSelect: n
        } = e, d = (0, s.Z)(t), c = (0, u.Z)(t, null);
    return i.isPlatformEmbedded ? (0, a.jsxs)(l.Menu, {
        navId: 'image-context',
        onClose: r.Zy,
        'aria-label': o.Z.Messages.IMAGE_ACTIONS_MENU_LABEL,
        onSelect: n,
        children: [
            (0, a.jsx)(l.MenuGroup, { children: d }),
            (0, a.jsx)(l.MenuGroup, { children: c })
        ]
    }) : null;
}
