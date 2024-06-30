n(653041);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(399606), o = n(481060), c = n(285173), u = n(422559), d = n(430824), h = n(233608), p = n(776767), m = n(351127), _ = n(50493), f = n(981631), E = n(689938), C = n(926452);
function g(e) {
    var t, n;
    let {
            permission: a,
            roleIds: l,
            guild: h,
            specMap: p
        } = e, _ = f.Plq[a], g = null !== (n = null === (t = p[_.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== n ? n : (0, u.wt)(_), I = m._o.has(_), x = (0, r.e7)([d.Z], () => d.Z.getRoles(h.id));
    return (0, i.jsx)(o.Tooltip, {
        'aria-label': E.Z.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY_ARIA_LABEL,
        tooltipClassName: C.roleTooltipContainer,
        tooltipContentClassName: C.roleTooltipContentContainer,
        allowOverflow: !0,
        text: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    children: I ? E.Z.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION_GRANTED_BY : E.Z.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY
                }),
                l.map(e => (0, i.jsx)('div', {
                    className: s()(C.roleTooltipItem),
                    children: (0, i.jsx)(c.Z, {
                        role: x[e],
                        guildId: h.id
                    })
                }, e))
            ]
        }),
        children: e => {
            let {
                onMouseEnter: t,
                onMouseLeave: n
            } = e;
            return (0, i.jsxs)(o.Clickable, {
                className: s()(C.permissionChiplet, { [C.elevatedPermission]: I }),
                onMouseEnter: t,
                onMouseLeave: n,
                children: [
                    I && (0, i.jsx)(o.ShieldLockIcon, {
                        size: 'custom',
                        width: 16,
                        height: 16,
                        color: o.tokens.colors.TEXT_BRAND
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'interactive-normal',
                        children: g
                    })
                ]
            });
        }
    });
}
t.Z = a.memo(function (e) {
    let {
            member: t,
            onNavigate: n
        } = e, l = (0, r.e7)([d.Z], () => d.Z.getGuild(t.guildId), [t.guildId]), c = (0, m.B2)(t.userId, t.guildId, m.Qn), u = (0, m.B2)(t.userId, t.guildId, m.pd), I = Object.keys(c).length, x = Object.keys(u).length, T = a.useMemo(() => null != l ? h.Z.getGuildPermissionSpecMap(l) : null, [l]), N = a.useMemo(() => null != l ? h.Z.generateGuildPermissionSpec(l) : null, [l]), v = a.useMemo(() => {
            if (null == l || null == T)
                return null;
            if (0 === I)
                return (0, i.jsx)('div', {
                    className: s()(C.permissionChiplet, C.noModPerms),
                    children: (0, i.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-positive',
                        children: E.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_NO_MOD_PERMS_FOUND
                    })
                });
            let e = [];
            return null == N || N.forEach(t => {
                t.permissions.forEach(t => {
                    let n = t.flag, a = m.pd.find(e => f.Plq[e] === n);
                    if (null == a)
                        return;
                    let s = c[a];
                    if (null != s)
                        e.push((0, i.jsx)(g, {
                            permission: a,
                            roleIds: s,
                            guild: l,
                            specMap: T
                        }, a));
                });
            }), e;
        }, [
            l,
            I,
            c,
            N,
            T
        ]);
    return null == l ? null : (0, i.jsx)(o.FormItem, {
        title: (0, i.jsxs)('div', {
            className: C.headerContainer,
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'eyebrow',
                    color: 'header-secondary',
                    children: E.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMSSISONS_TITLE
                }),
                (0, i.jsxs)(o.Clickable, {
                    className: C.viewAllPermissions,
                    onClick: () => n(_.k.PERMISSIONS),
                    children: [
                        (0, i.jsx)(o.Text, {
                            variant: 'eyebrow',
                            color: 'interactive-normal',
                            children: E.Z.Messages.GUILD_MEMBER_MOD_VIEW_VIEW_ALL_PERMISSIONS.format({ count: x })
                        }),
                        (0, i.jsx)(o.ChevronSmallRightIcon, {
                            size: 'custom',
                            width: 16,
                            height: 16
                        })
                    ]
                })
            ]
        }),
        titleClassName: C.__invalid_infoTitle,
        children: (0, i.jsx)(p.WM, {
            children: (0, i.jsx)(p._2, {
                description: (0, i.jsx)('div', {
                    className: C.permissionsContainer,
                    children: v
                })
            })
        })
    });
});
