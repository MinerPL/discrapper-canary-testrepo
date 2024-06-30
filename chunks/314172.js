n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(735250);
n(470079);
var i = n(442837), a = n(693789), o = n(235874), s = n(481060), l = n(944613), u = n(607070), c = n(605436), d = n(496675), _ = n(993409), E = n(689938), f = n(552046);
function h(e) {
    let {
            guild: t,
            guildMember: n,
            highestRole: h,
            onAddRole: p,
            ...m
        } = e, I = (0, i.e7)([u.Z], () => u.Z.roleStyle), T = e => (0, c.Gy)(t.id, e.id) && !e.managed && d.Z.isRoleHigher(t, h, e) && -1 === n.roles.indexOf(e.id);
    return (0, r.jsx)(o.y, {
        position: 'bottom',
        align: 'center',
        renderPopout: e => {
            let {closePopout: n} = e;
            return (0, r.jsx)(l.Z, {
                guild: t,
                roleStyle: I,
                roleFilter: T,
                onSelect: p,
                onClose: n
            });
        },
        children: e => (0, r.jsx)(_.Z, {
            className: f.button,
            text: E.Z.Messages.USER_PROFILE_ADD_ROLE,
            icon: s.PlusSmallIcon,
            color: a.zx.Colors.CUSTOM,
            size: a.zx.Sizes.NONE,
            grow: !1,
            ...e,
            ...m
        })
    });
}
