n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(693789),
    s = n(235874),
    o = n(481060),
    l = n(944613),
    u = n(607070),
    c = n(605436),
    d = n(496675),
    _ = n(475413),
    E = n(981631),
    f = n(689938),
    h = n(113166);
function p(e) {
    let { guild: t, guildMember: n, numRoles: p, highestRole: m, onAddRole: I, buttonRef: T } = e,
        g = (0, i.e7)([u.Z], () => u.Z.roleStyle);
    if (!(0, i.e7)([d.Z], () => d.Z.can(E.Plq.MANAGE_ROLES, t))) return null;
    let S = (e) => (0, c.Gy)(t.id, e.id) && !e.managed && d.Z.isRoleHigher(t, m, e) && -1 === n.roles.indexOf(e.id);
    return (0, r.jsx)(s.y, {
        position: 'bottom',
        align: 'center',
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(l.Z, {
                guild: t,
                roleStyle: g,
                roleFilter: S,
                onSelect: I,
                onClose: n
            });
        },
        children: (e) =>
            (0, r.jsx)(o.TooltipContainer, {
                text: f.Z.Messages.USER_PROFILE_ADD_ROLE,
                'aria-label': !1,
                shouldShow: p > 0,
                children: (0, r.jsxs)(_.kF, {
                    className: h.button,
                    color: a.zx.Colors.CUSTOM,
                    themeColor: 'none',
                    size: a.zx.Sizes.NONE,
                    grow: !1,
                    'aria-label': f.Z.Messages.USER_PROFILE_ADD_ROLE,
                    buttonRef: T,
                    ...e,
                    children: [
                        (0, r.jsx)(o.PlusSmallIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        0 === p &&
                            (0, r.jsx)(o.Text, {
                                variant: 'text-xs/normal',
                                color: 'none',
                                children: f.Z.Messages.USER_PROFILE_ADD_ROLE
                            })
                    ]
                })
            })
    });
}
