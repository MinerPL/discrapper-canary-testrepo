n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(399606), o = n(481060), c = n(893966), u = n(472596), d = n(285173), h = n(430824), p = n(496675), m = n(776767), _ = n(981631), f = n(689938), E = n(332513);
function C(e) {
    let {member: t} = e, n = (0, r.e7)([h.Z], () => h.Z.getGuild(t.guildId)), l = (0, r.e7)([h.Z], () => h.Z.getRoles(t.guildId)), C = a.useMemo(() => null == n ? [] : null == t.highestRoleId ? t.roles : t.roles.filter(e => null != e && e !== t.highestRoleId).sort((e, t) => {
            var n, i, a, s;
            return null !== (s = null !== (a = null === (n = l[t]) || void 0 === n ? void 0 : n.position) && void 0 !== a ? a : 0 - (null === (i = l[e]) || void 0 === i ? void 0 : i.position)) && void 0 !== s ? s : 0;
        }), [
            t.roles,
            t.highestRoleId,
            n,
            l
        ]), g = (0, r.e7)([c.Z], () => c.Z.getEnhancedMember(t.guildId, t.userId), [
            t.guildId,
            t.userId
        ]), I = (0, u.zq)(g), x = (0, u.qr)(t), T = (0, r.e7)([p.Z], () => p.Z.can(_.Plq.MANAGE_ROLES, n), [n]);
    return null == n ? null : (0, i.jsx)(o.FormItem, {
        title: f.Z.Messages.ROLES,
        titleClassName: E.infoTitle,
        children: (0, i.jsx)(m.WM, {
            children: (0, i.jsx)(m._2, {
                description: (0, i.jsxs)('div', {
                    className: E.roleContainer,
                    children: [
                        (0, i.jsx)(o.Tooltip, {
                            'aria-label': f.Z.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY_ARIA_LABEL,
                            tooltipContentClassName: E.__invalid_permissionTooltip,
                            allowOverflow: !0,
                            text: f.Z.Messages.GUILD_MEMBER_MOD_VIEW_HIGHEST_ROLE,
                            children: e => {
                                let {
                                    onMouseEnter: n,
                                    onMouseLeave: a
                                } = e;
                                return (0, i.jsx)(o.Clickable, {
                                    onMouseEnter: n,
                                    onMouseLeave: a,
                                    children: (0, i.jsx)(d.Z, {
                                        className: s()(E.roleTooltipItem, E.highestRole),
                                        role: I,
                                        guildId: t.guildId
                                    })
                                });
                            }
                        }),
                        C.map(e => (0, i.jsx)(d.Z, {
                            className: s()(E.roleTooltipItem),
                            role: l[e],
                            guildId: t.guildId
                        }, e)),
                        T && (0, i.jsx)(o.Tooltip, {
                            'aria-label': f.Z.Messages.ADD_ROLE_A11Y_LABEL,
                            tooltipContentClassName: E.__invalid_permissionTooltip,
                            allowOverflow: !0,
                            text: f.Z.Messages.ADD_ROLE_A11Y_LABEL,
                            children: e => {
                                let {
                                    onMouseEnter: t,
                                    onMouseLeave: n
                                } = e;
                                return (0, i.jsx)(o.Clickable, {
                                    className: s()(E.addRoleContainer),
                                    onClick: x,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    children: (0, i.jsx)(o.CirclePlusIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: s()(E.addRoleIcon),
                                        width: 20,
                                        height: 20
                                    })
                                });
                            }
                        })
                    ]
                })
            })
        })
    });
}
