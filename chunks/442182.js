n.d(t, {
    ZP: function () {
        return G;
    }
}), n(47120);
var s = n(735250), a = n(470079), i = n(120356), r = n.n(i), l = n(442837), o = n(481060), c = n(239091), d = n(479531), u = n(58540), _ = n(100527), E = n(906732), I = n(484459), T = n(103575), m = n(594174), N = n(474333), S = n(626135), h = n(243730), g = n(434404), C = n(946724), x = n(130341), p = n(95242), R = n(420966), f = n(566476), L = n(203377), O = n(981631), A = n(689938), M = n(980751), v = n(412200);
async function D(e, t, n) {
    let a = e.roles.filter(e => e !== n);
    try {
        await g.Z.updateMemberRoles(t, e.id, a, [], [n]);
    } catch (t) {
        let e = new d.Z(t);
        (0, o.openModal)(t => (0, s.jsx)(o.ConfirmModal, {
            ...t,
            header: A.Z.Messages.ERROR_GENERIC_TITLE,
            confirmText: A.Z.Messages.OKAY,
            confirmButtonColor: o.Button.Colors.BRAND,
            children: (0, s.jsx)(o.Text, {
                color: 'text-normal',
                variant: 'text-md/normal',
                children: e.getAnyErrorMessage()
            })
        }));
    }
}
function j(e) {
    let {
            member: t,
            guildId: i,
            roleId: l,
            locked: d
        } = e, _ = a.useMemo(() => ({ [i]: [t.id] }), [
            i,
            t.id
        ]);
    function E(e) {
        if (e.stopPropagation(), !d) {
            if (e.shiftKey) {
                D(t, i, l);
                return;
            }
            !function (e, t, n) {
                let a = C.Z.getRole(n);
                (0, o.openModal)(i => (0, s.jsxs)(o.ConfirmModal, {
                    ...i,
                    header: A.Z.Messages.ROLE_REMOVE_MEMBER_CONFIRM_TITLE,
                    confirmText: A.Z.Messages.REMOVE,
                    cancelText: A.Z.Messages.CANCEL,
                    onConfirm: () => D(e, t, n),
                    children: [
                        (0, s.jsx)(o.Text, {
                            color: 'text-normal',
                            variant: 'text-md/normal',
                            children: A.Z.Messages.ROLE_REMOVE_MEMBER_CONFIRM_BODY.format({
                                username: e.name,
                                roleName: null == a ? void 0 : a.name
                            })
                        }),
                        (0, s.jsx)(o.Text, {
                            className: M.removeTip,
                            color: 'text-muted',
                            variant: 'text-md/normal',
                            children: A.Z.Messages.ROLE_REMOVE_MEMBER_CONFIRM_TIP
                        })
                    ]
                }));
            }(t, i, l);
        }
    }
    function N(e) {
        let a = m.default.getUser(t.id);
        if (null != a)
            (0, c.jW)(e, async () => {
                let {default: e} = await Promise.all([
                    n.e('79695'),
                    n.e('17400'),
                    n.e('12435'),
                    n.e('49128')
                ]).then(n.bind(n, 415118));
                return t => (0, s.jsx)(e, {
                    ...t,
                    user: a,
                    guildId: i,
                    showChatItems: !1
                });
            });
    }
    return (0, u.$)(_), (0, s.jsx)('div', {
        className: v.contentWidth,
        children: (0, s.jsx)(o.Popout, {
            renderPopout: e => (0, s.jsx)(T.Z, {
                location: 'GuildSettingsRolesEditMembers',
                guildId: i,
                userId: t.id,
                roleId: l,
                ...e
            }),
            position: 'left',
            preload: () => (0, I.W)(t.id, t.avatarURL, { guildId: i }),
            children: e => (0, s.jsxs)(o.Clickable, {
                ...e,
                className: M.memberRow,
                onContextMenu: N,
                children: [
                    (0, s.jsx)(f.Z, {
                        className: M.memberDetails,
                        avatarURL: t.avatarURL,
                        name: t.name,
                        bot: t.bot,
                        verifiedBot: t.verifiedBot,
                        userTag: t.userTag
                    }),
                    (0, s.jsx)('div', {
                        className: M.removeButtonContainer,
                        children: (0, s.jsx)(o.Tooltip, {
                            text: d ? A.Z.Messages.ROLE_REMOVE_MEMBER_MANAGED : A.Z.Messages.ROLE_REMOVE_MEMBER_CONFIRM_TITLE,
                            position: 'top',
                            children: e => (0, s.jsx)(o.Clickable, {
                                ...e,
                                className: r()(M.removeButton, { [M.removeButtonDisabled]: d }),
                                onClick: E,
                                children: (0, s.jsx)(o.CircleXIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
}
function Z(e) {
    let {
        handleAddClick: t,
        locked: n
    } = e;
    return (0, s.jsx)('div', {
        className: v.contentWidth,
        children: (0, s.jsxs)('div', {
            className: r()(M.memberRow, M.emptyRowContainer),
            children: [
                (0, s.jsx)(o.GroupIcon, {
                    size: 'md',
                    color: 'currentColor'
                }),
                (0, s.jsx)(o.Text, {
                    className: M.emptyRowText,
                    variant: 'text-sm/semibold',
                    color: 'text-muted',
                    children: A.Z.Messages.ROLE_EDIT_MEMBERS_NO_SEARCH_RESULTS.format({
                        addMembersHook: function (e, a) {
                            return n ? null : (0, s.jsx)(o.Anchor, {
                                onClick: t,
                                children: e
                            }, a);
                        }
                    })
                })
            ]
        })
    });
}
function b(e) {
    let {
            guildId: t,
            roleId: n,
            query: i,
            headerHeight: r,
            locked: l,
            onScroll: c,
            roleMembers: d,
            handleAddClick: u
        } = e, {analyticsLocations: I} = (0, E.ZP)(_.Z.MEMBER_LIST), T = a.useMemo(() => i.trim().toLowerCase(), [i]);
    (0, x.rY)(t, T);
    let m = a.useMemo(() => d.filter(e => (0, x.eg)(T, e)), [
            d,
            T
        ]), N = a.useMemo(() => m.sort((e, t) => e.name.localeCompare(t.name)), [m]);
    return (0, s.jsx)(E.Gt, {
        value: I,
        children: (0, s.jsx)(o.ListAuto, {
            className: M.list,
            sections: [Math.max(m.length, 1)],
            sectionHeight: r,
            renderSection: () => (0, s.jsx)('div', { style: { height: r } }, 'section'),
            style: { scrollPaddingTop: r },
            rowHeight: 40,
            renderRow: function (e) {
                let {row: a} = e;
                if (0 === N.length)
                    return (0, s.jsx)(Z, {
                        handleAddClick: u,
                        locked: l
                    }, 'empty');
                let i = N[a];
                return (0, s.jsx)(j, {
                    member: i,
                    guildId: t,
                    roleId: n,
                    locked: l
                }, i.id);
            },
            onScroll: c
        })
    });
}
function U(e) {
    let {
        query: t,
        setQuery: n,
        locked: a,
        handleAddClick: i
    } = e;
    return (0, s.jsxs)('div', {
        className: M.searchContainer,
        children: [
            (0, s.jsx)(o.SearchBar, {
                size: o.SearchBar.Sizes.MEDIUM,
                query: t,
                onChange: n,
                onClear: () => n(''),
                placeholder: A.Z.Messages.SEARCH_MEMBERS,
                'aria-label': A.Z.Messages.SEARCH_MEMBERS
            }),
            (0, s.jsx)(o.Button, {
                className: M.addButton,
                size: o.Button.Sizes.SMALL,
                onClick: i,
                disabled: a,
                children: A.Z.Messages.ROLE_ADD_MEMBERS_BUTTON
            })
        ]
    });
}
function G(e) {
    let {
            guild: t,
            role: i,
            locked: c,
            setSelectedSection: d
        } = e, [u, _] = a.useState(''), {
            headerHeight: E,
            headerRef: I
        } = (0, p.Z)(0), {
            scrolledToTop: T,
            handleScroll: m
        } = (0, R.V)(), g = i.managed || c, C = (0, x.e)(t.id, i.id), f = (0, l.e7)([h.Z], () => {
            var e, n;
            return null !== (n = null === (e = h.Z.getRoleMemberCount(t.id)) || void 0 === e ? void 0 : e[i.id]) && void 0 !== n ? n : 0;
        }) > C.length, D = () => {
            S.default.track(O.rMx.OPEN_MODAL, {
                type: 'Add Role Members',
                location_page: 'Role Settings',
                location_section: 'Members'
            }), (0, o.openModalLazy)(async () => {
                let {default: e} = await Promise.all([
                    n.e('7590'),
                    n.e('90591')
                ]).then(n.bind(n, 24722));
                return n => (0, s.jsx)(e, {
                    ...n,
                    roleId: i.id,
                    guildId: t.id
                });
            });
        };
    return (0, s.jsxs)('div', {
        className: M.container,
        children: [
            (0, s.jsx)('div', {
                className: M.headerContainer,
                ref: I,
                children: (0, s.jsx)('div', {
                    className: v.contentWidth,
                    children: (0, s.jsxs)('div', {
                        className: r()(v.header, { [v.stickyHeaderElevated]: !T }),
                        children: [
                            (0, s.jsx)(R.Z, {
                                guild: t,
                                role: i,
                                selectedSection: L.ZI.MEMBERS,
                                setSelectedSection: d
                            }),
                            (0, s.jsx)(U, {
                                query: u,
                                setQuery: _,
                                locked: g,
                                handleAddClick: D
                            }),
                            f ? (0, s.jsx)(N.Z, {
                                className: M.searchWarning,
                                messageType: N.Q.INFO,
                                children: A.Z.Messages.ROLE_EDIT_MEMBERS_MISSING
                            }) : null
                        ]
                    })
                })
            }),
            (0, s.jsx)(b, {
                headerHeight: E + 8,
                query: u,
                guildId: t.id,
                roleId: i.id,
                locked: g,
                onScroll: m,
                roleMembers: C,
                handleAddClick: D
            })
        ]
    });
}
