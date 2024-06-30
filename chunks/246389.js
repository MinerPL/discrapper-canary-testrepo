t.r(n);
var l = t(735250);
t(470079);
var i = t(481060), r = t(239091), u = t(883385), o = t(108843), c = t(100527), a = t(906732), d = t(931617), _ = t(981631), s = t(689938);
n.default = (0, o.Z)((0, u.Z)(function (e) {
    var n;
    let {
            user: t,
            guildId: u,
            onSelect: o,
            analyticsLocations: _,
            onCloseContextMenu: E
        } = e, {analyticsLocations: M} = (0, a.ZP)(c.Z.CONTEXT_MENU), f = null !== (n = null == _ ? void 0 : _[0]) && void 0 !== n ? n : M[0], R = (0, d.Z)(t.id, u, !0, f);
    return (0, l.jsx)(i.Menu, {
        navId: 'guild-moderation-roles',
        onClose: () => {
            (0, r.Zy)(), null == E || E();
        },
        'aria-label': s.Z.Messages.USER_ACTIONS_MENU_LABEL,
        onSelect: o,
        children: (0, l.jsx)(i.MenuGroup, { children: R })
    });
}, { object: _.qAy.CONTEXT_MENU }), [
    c.Z.CONTEXT_MENU,
    c.Z.GUILD_MODERATION_USER_MENU
]);
