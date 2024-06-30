n.d(t, {
    Z: function () {
        return R;
    }
}), n(47120), n(653041);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(954955), o = n.n(r), c = n(399606), u = n(481060), d = n(605436), h = n(79712), p = n(285173), m = n(434404), _ = n(422559), f = n(271383), E = n(430824), C = n(496675), g = n(594174), I = n(233608), x = n(370595), T = n(991570), N = n(351127), v = n(981631), S = n(689938), Z = n(332513), A = n(210712);
function M(e) {
    var t, n, l, r;
    let {
            permission: o,
            roleIds: f,
            guild: g,
            specMap: I,
            categoryTitle: x
        } = e, T = (0, c.e7)([E.Z], () => E.Z.getRoles(g.id)), Z = v.Plq[o], M = null !== (l = null === (t = I[Z.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== l ? l : (0, _.wt)(Z), b = null !== (r = null === (n = I[Z.toString()]) || void 0 === n ? void 0 : n.description) && void 0 !== r ? r : '', R = N._o.has(Z), j = N.Qn.includes(o), L = f.length, P = (0, c.e7)([C.Z], () => C.Z.can(v.Plq.MANAGE_ROLES, g), [g]), O = a.useCallback(async e => {
            if (!!P)
                await m.Z.open(g.id, v.pNK.ROLES), await m.Z.selectRole(e);
        }, [
            P,
            g.id
        ]);
    return (0, i.jsxs)('div', {
        className: s()(A.permissionItemContainer, { [A.elevatedPermission]: R }),
        children: [
            (0, i.jsxs)('div', {
                className: s()(A.permissionItemHeader),
                children: [
                    (0, i.jsxs)('div', {
                        className: A.permissionTitle,
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: M
                            }),
                            null != x && (0, i.jsxs)('div', {
                                className: A.permissionItemSubheader,
                                children: [
                                    (0, i.jsx)(u.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-muted',
                                        children: x
                                    }),
                                    R && (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(h.Z, {
                                                height: 4,
                                                width: 4,
                                                'aria-hidden': 'true',
                                                color: u.tokens.colors.INTERACTIVE_MUTED.css
                                            }),
                                            (0, i.jsx)(u.Tooltip, {
                                                text: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION_TOOLTIP,
                                                children: e => (0, i.jsxs)(u.Clickable, {
                                                    className: A.elevatedPermissionContainer,
                                                    ...e,
                                                    children: [
                                                        (0, i.jsx)(u.ShieldLockIcon, {
                                                            size: 'custom',
                                                            width: 12,
                                                            height: 12,
                                                            color: u.tokens.colors.TEXT_BRAND
                                                        }),
                                                        (0, i.jsx)(u.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'text-brand',
                                                            children: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    !R && j && (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(h.Z, {
                                                height: 4,
                                                width: 4,
                                                'aria-hidden': 'true',
                                                color: u.tokens.colors.INTERACTIVE_MUTED.css
                                            }),
                                            (0, i.jsx)('div', {
                                                className: A.elevatedPermissionContainer,
                                                children: (0, i.jsx)(u.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-muted',
                                                    children: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMISSION
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(u.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        children: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLE_COUNT.format({ roleCount: L })
                    })
                ]
            }),
            null != b && (0, i.jsx)('div', {
                className: A.permissionItemDescription,
                children: (0, i.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: b
                })
            }),
            (0, i.jsx)('div', {
                className: A.permissionItemRoleContainer,
                children: f.map(e => (0, i.jsx)(u.Clickable, {
                    className: s()(A.roleTooltipItem, { [A.editable]: P && !(0, d.pM)(g.id, e) && !(0, N.Ov)(e, g.id) }),
                    onClick: () => O(e),
                    children: (0, N.Ov)(e, g.id) ? (0, i.jsx)('div', {
                        className: A.roleChiplet,
                        children: (0, i.jsx)(u.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-normal',
                            children: S.Z.Messages.GUILD_OWNER
                        })
                    }) : (0, i.jsx)(p.Z, {
                        role: T[e],
                        guildId: g.id,
                        className: A.roleChiplet
                    })
                }, e))
            })
        ]
    });
}
function b(e, t) {
    return t.toLowerCase().includes(e.toLowerCase());
}
function R(e) {
    let {
            userId: t,
            guildId: n,
            location: l,
            className: r,
            onNavigate: d
        } = e, h = (0, c.e7)([g.default], () => g.default.getUser(t), [t]), p = (0, c.e7)([E.Z], () => E.Z.getGuild(n), [n]), m = (0, c.e7)([f.ZP], () => f.ZP.getMember(n, t), [
            n,
            t
        ]), C = (0, T.f)(t, n), R = (0, N.B2)(t, n, N.pd), j = Object.keys(R).length, L = a.useMemo(() => null != p ? I.Z.getGuildPermissionSpecMap(p) : null, [p]), P = a.useMemo(() => null != p ? I.Z.generateGuildPermissionSpec(p) : null, [p]), [O, y] = a.useState(''), [D, k] = a.useState(''), U = a.useCallback(o()(k, 300), []), w = a.useCallback(e => {
            y(e), U(e);
        }, [U]), B = a.useCallback(() => {
            y(''), k('');
        }, []), H = a.useMemo(() => {
            if (null == p || null == L || null == m)
                return null;
            if (0 === j)
                return (0, i.jsx)('div', {
                    className: s()(A.__invalid_permissionChiplet, A.__invalid_noModPerms),
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-positive',
                        children: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_NO_MOD_PERMS_FOUND
                    })
                });
            let e = [];
            return null == P || P.forEach(t => {
                t.permissions.forEach(n => {
                    let a = n.flag, l = N.pd.find(e => v.Plq[e] === a);
                    if (null == l)
                        return;
                    let s = R[l];
                    if (null != s) {
                        if (D.length > 0) {
                            var r, o, c, u, d;
                            let e = null !== (u = null === (r = L[a.toString()]) || void 0 === r ? void 0 : r.title) && void 0 !== u ? u : (0, _.wt)(a), n = null !== (d = null === (c = L[a.toString()]) || void 0 === c ? void 0 : null === (o = c.description) || void 0 === o ? void 0 : o.toString()) && void 0 !== d ? d : '', i = t.title, s = N._o.has(a), h = N.Qn.includes(l), p = s ? S.Z.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION : h ? S.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMISSION : null, m = b(D, e), f = b(D, n), E = b(D, i), C = null != p && b(D, p);
                            if (!m && !f && !E && !C)
                                return;
                        }
                        e.push((0, i.jsx)(M, {
                            permission: l,
                            roleIds: s,
                            guild: p,
                            specMap: L,
                            categoryTitle: t.title
                        }, l));
                    }
                });
            }), e;
        }, [
            p,
            L,
            m,
            j,
            P,
            R,
            D
        ]);
    return null == h || null == m ? null : (0, i.jsxs)('div', {
        className: s()(Z.container, r),
        style: { backgroundColor: C },
        children: [
            (0, i.jsx)(x.Z, {
                guildId: n,
                userId: t,
                onNavigate: d
            }),
            (0, i.jsx)(u.Scroller, {
                className: A.permissionsGroupContainer,
                children: (0, i.jsx)(u.FormItem, {
                    title: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMSSISONS_PANEL_TITLE,
                    titleClassName: A.__invalid_infoTitle,
                    children: (0, i.jsxs)('div', {
                        className: A.permissionsItemContainer,
                        children: [
                            (0, i.jsx)(u.SearchBar, {
                                className: A.searchBar,
                                query: O,
                                placeholder: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSIONS_SEARCH_PLACEHOLDER,
                                onChange: w,
                                onClear: B,
                                autoComplete: 'off',
                                inputProps: {
                                    autoCapitalize: 'none',
                                    autoCorrect: 'off',
                                    spellCheck: 'false'
                                }
                            }),
                            H
                        ]
                    })
                })
            })
        ]
    });
}
