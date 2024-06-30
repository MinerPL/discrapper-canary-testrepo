n.d(t, {
    Z: function () {
        return Z;
    }
}), n(47120);
var s = n(735250), a = n(470079), i = n(120356), r = n.n(i), l = n(225857), o = n(290843), c = n(866442), d = n(442837), u = n(481060), _ = n(239091), E = n(493544), I = n(134433), T = n(646892), m = n(741247), N = n(518738), S = n(549631), h = n(496675), g = n(176278), C = n(626135), x = n(480608), p = n(243730), R = n(130341), f = n(970129), L = n(712181), O = n(203377), A = n(981631), M = n(689938), v = n(62748), D = n(292955);
let j = 'DRAGGABLE_ROLE';
function Z(e) {
    let {
            setEditRoleId: t,
            guild: n,
            everyoneRole: i,
            otherRoles: r,
            setSelectedSection: l,
            renderHeader: o,
            headerHeight: c,
            query: u
        } = e, _ = (0, d.e7)([p.Z], () => p.Z.getRoleMemberCount(n.id), [n.id]), I = (0, d.e7)([h.Z], () => h.Z.getHighestRole(n), [n]), T = u.trim();
    a.useEffect(() => {
        (0, x.E)(n.id);
    }, [n.id]);
    let m = a.useRef(!1);
    a.useEffect(() => {
        if (!m.current && '' !== u.trimStart())
            C.default.track(A.rMx.SEARCH_STARTED, { search_type: 'Roles' }), m.current = !0;
    }, [u]);
    let N = a.useMemo(() => r.filter(e => (0, R.uo)(e, T)), [
            r,
            T
        ]), S = a.useMemo(() => [
            ...r,
            i
        ], [
            r,
            i
        ]), {
            draggingId: g,
            handleDragStart: f,
            handleDragReset: O,
            handleDragComplete: M
        } = (0, L.Z)(S), v = a.useCallback(e => {
            var a;
            let {row: i} = e;
            if (0 === N.length)
                return (0, s.jsx)(b, {}, 'empty-role');
            let o = N[i];
            return (0, s.jsx)(U, {
                role: o,
                guild: n,
                highestRole: I,
                currentPosition: i,
                memberCount: null !== (a = null == _ ? void 0 : _[o.id]) && void 0 !== a ? a : 0,
                onDragStart: f,
                onDragReset: O,
                onDragComplete: M,
                disableHover: null != g,
                disableDrag: r.length !== N.length,
                setEditRoleId: t,
                setSelectedSection: l
            }, o.id);
        }, [
            N,
            n,
            I,
            _,
            f,
            O,
            M,
            g,
            r,
            t,
            l
        ]);
    return (0, s.jsx)(E.Xi, {
        sections: [Math.max(N.length, 1)],
        sectionHeight: c,
        renderSection: o,
        rowHeight: 61,
        renderRow: v
    });
}
function b() {
    return (0, s.jsxs)('div', {
        className: v.emptyRoles,
        children: [
            (0, s.jsx)('div', { className: D.dragSpacing }),
            (0, s.jsx)(u.GroupIcon, {
                size: 'md',
                color: 'currentColor'
            }),
            (0, s.jsx)(u.Text, {
                className: v.emptyRolesText,
                variant: 'text-md/semibold',
                color: 'text-muted',
                children: M.Z.Messages.ROLE_LIST_EMPTY
            })
        ]
    });
}
function U(e) {
    var t, i, c;
    let {
            role: d,
            guild: E,
            highestRole: N,
            currentPosition: h,
            memberCount: g,
            onDragStart: C,
            onDragReset: x,
            onDragComplete: p,
            disableHover: R,
            disableDrag: L,
            setEditRoleId: A,
            setSelectedSection: Z
        } = e, b = (0, f.T)(E, N, d), U = null != b, [P, B] = a.useState(!1), y = a.useMemo(() => ({
            type: j,
            item: () => (C(d.id), {
                id: d.id,
                position: h
            }),
            canDrag: () => P && !U,
            collect: e => ({ isDragging: e.isDragging() }),
            end: (e, t) => {
                let n = t.getDropResult();
                if (null == n) {
                    x();
                    return;
                }
                p(n.roleId);
            }
        }), [
            d,
            C,
            x,
            p,
            U,
            P
        ]), [{isDragging: F}, k] = (0, l.c)(y), w = a.useMemo(() => ({
            accept: j,
            canDrop: () => !U,
            collect: e => {
                let t = e.getItem();
                return null != t && e.isOver() && e.canDrop() ? { dragSourcePosition: t.position } : { dragSourcePosition: null };
            },
            drop: () => ({ roleId: d.id })
        }), [
            U,
            d
        ]), [{dragSourcePosition: H}, V] = (0, o.L)(w), Y = a.useCallback(e => {
            (0, _.jW)(e, async () => {
                let {default: e} = await Promise.resolve().then(n.bind(n, 741247));
                return t => (0, s.jsx)(e, {
                    ...t,
                    role: d,
                    guild: E
                });
            });
        }, [
            E,
            d
        ]), W = (0, m.useHasGuildRoleItems)(E, d);
    if (F)
        return (0, s.jsx)('div', {
            ref: k,
            className: r()(v.roleRow, v.roleRowDragging)
        });
    function z() {
        A(d.id);
    }
    function K() {
        z(), Z(O.ZI.MEMBERS);
    }
    return (0, s.jsxs)(u.Clickable, {
        className: r()(v.roleRow, {
            [v.roleRowDisableHover]: R,
            [v.containerDragBefore]: null != H && h < H,
            [v.containerDragAfter]: null != H && h > H
        }),
        onClick: z,
        onContextMenu: Y,
        innerRef: e => k(V(e)),
        'data-dnd-name': d.name,
        'aria-label': M.Z.Messages.ROLE_ROW_DESCRIPTION.format({
            name: d.name,
            count: ''.concat(g)
        }),
        children: [
            (0, s.jsx)('div', {
                className: r()(v.dragIcon, D.dragSpacing, { [v.dragIconHidden]: U || L }),
                onMouseEnter: () => B(!0),
                onMouseLeave: () => B(!1),
                children: (0, s.jsx)(u.DragIcon, {
                    size: 'xs',
                    color: 'currentColor'
                })
            }),
            (0, s.jsxs)('div', {
                className: r()(v.roleNameContainer, D.roleNameSpacing),
                children: [
                    (null === (t = d.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? (0, s.jsx)(I.Z, {
                        className: v.roleFlowerStar,
                        color: d.colorString,
                        size: 24
                    }) : (0, s.jsx)(G, {
                        guildId: E.id,
                        role: d,
                        size: 24,
                        className: v.roleIcon,
                        defaultIconClassName: v.shield
                    }),
                    null != b ? (0, s.jsx)(f.Z, {
                        className: v.lock,
                        tooltipText: b
                    }) : null,
                    (0, s.jsx)(u.Text, {
                        className: v.roleName,
                        color: 'header-primary',
                        variant: 'text-md/medium',
                        children: d.name
                    }),
                    (null === (i = d.tags) || void 0 === i ? void 0 : i.subscription_listing_id) != null && (0, s.jsx)(S.Z, {
                        className: v.subscriptionRoleIcon,
                        'aria-label': M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PREMIUM_ROLE_ICON_LABEL
                    }),
                    (null === (c = d.tags) || void 0 === c ? void 0 : c.is_guild_product_role) === !0 && (0, s.jsx)(T.Z, {})
                ]
            }),
            (0, s.jsx)(u.Tooltip, {
                text: M.Z.Messages.ROLE_OVERVIEW_VIEW_MEMBERS,
                'aria-label': M.Z.Messages.ROLE_ROW_VIEW_MEMBERS.format({ count: ''.concat(g) }),
                position: 'right',
                children: e => (0, s.jsxs)(u.Clickable, {
                    ...e,
                    className: r()(v.memberCountContainer, D.memberSpacing),
                    onClick: K,
                    children: [
                        (0, s.jsx)(u.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            children: g
                        }),
                        (0, s.jsx)(u.UserIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            className: v.person,
                            width: 20,
                            height: 20
                        })
                    ]
                })
            }),
            (0, s.jsxs)('div', {
                className: r()(v.buttonsContainer, D.buttonsSpacing),
                children: [
                    (0, s.jsx)(u.CircleIconButton, {
                        className: r()(v.circleButton, v.editButton),
                        tooltip: U ? M.Z.Messages.VIEW : M.Z.Messages.EDIT,
                        color: u.CircleIconButtonColors.SECONDARY,
                        size: u.CircleIconButtonSizes.SIZE_36,
                        icon: U ? (0, s.jsx)(u.EyeIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 20,
                            height: 20
                        }) : (0, s.jsx)(u.PencilIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 20,
                            height: 20
                        }),
                        onClick: z
                    }),
                    (0, s.jsx)(u.CircleIconButton, {
                        className: v.circleButton,
                        tooltip: M.Z.Messages.MORE,
                        color: u.CircleIconButtonColors.SECONDARY,
                        size: u.CircleIconButtonSizes.SIZE_36,
                        icon: (0, s.jsx)(u.MoreHorizontalIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 20,
                            height: 20
                        }),
                        onClick: Y,
                        disabled: !W
                    })
                ]
            })
        ]
    });
}
function G(e) {
    var t;
    let {
            guildId: n,
            role: a,
            size: i,
            enableTooltip: l,
            className: o,
            defaultIconClassName: d
        } = e, _ = (0, N.p9)({
            guildId: n,
            roleId: a.id,
            size: i
        });
    return null != _ ? (0, s.jsx)(g.Z, {
        ..._,
        className: o,
        enableTooltip: l
    }) : (0, s.jsx)(u.ShieldUserIcon, {
        size: 'custom',
        className: r()(o, d),
        color: null !== (t = a.colorString) && void 0 !== t ? t : (0, c.Rf)(A.p6O),
        width: i,
        height: i
    });
}
