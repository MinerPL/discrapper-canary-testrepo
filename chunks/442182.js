n.d(t, {
    ZP: function () {
        return U;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    i = n(120356),
    r = n.n(i),
    l = n(442837),
    o = n(481060),
    c = n(239091),
    d = n(479531),
    u = n(58540),
    _ = n(100527),
    I = n(906732),
    E = n(184301),
    T = n(347475),
    m = n(594174),
    N = n(626135),
    S = n(243730),
    h = n(434404),
    g = n(946724),
    C = n(130341),
    x = n(95242),
    p = n(420966),
    R = n(566476),
    f = n(203377),
    L = n(981631),
    O = n(689938),
    A = n(540284),
    M = n(151365);
async function D(e, t, n) {
    let a = e.roles.filter((e) => e !== n);
    try {
        await h.Z.updateMemberRoles(t, e.id, a, [], [n]);
    } catch (t) {
        let e = new d.Z(t);
        (0, o.openModal)((t) =>
            (0, s.jsx)(o.ConfirmModal, {
                ...t,
                header: O.Z.Messages.ERROR_GENERIC_TITLE,
                confirmText: O.Z.Messages.OKAY,
                confirmButtonColor: o.Button.Colors.BRAND,
                children: (0, s.jsx)(o.Text, {
                    color: 'text-normal',
                    variant: 'text-md/normal',
                    children: e.getAnyErrorMessage()
                })
            })
        );
    }
}
function v(e) {
    let { member: t, guildId: i, roleId: l, locked: d } = e,
        _ = a.useMemo(() => ({ [i]: [t.id] }), [i, t.id]);
    function I(e) {
        if ((e.stopPropagation(), !d)) {
            if (e.shiftKey) {
                D(t, i, l);
                return;
            }
            !(function (e, t, n) {
                let a = g.Z.getRole(n);
                (0, o.openModal)((i) =>
                    (0, s.jsxs)(o.ConfirmModal, {
                        ...i,
                        header: O.Z.Messages.ROLE_REMOVE_MEMBER_CONFIRM_TITLE,
                        confirmText: O.Z.Messages.REMOVE,
                        cancelText: O.Z.Messages.CANCEL,
                        onConfirm: () => D(e, t, n),
                        children: [
                            (0, s.jsx)(o.Text, {
                                color: 'text-normal',
                                variant: 'text-md/normal',
                                children: O.Z.Messages.ROLE_REMOVE_MEMBER_CONFIRM_BODY.format({
                                    username: e.name,
                                    roleName: null == a ? void 0 : a.name
                                })
                            }),
                            (0, s.jsx)(o.Text, {
                                className: A.removeTip,
                                color: 'text-muted',
                                variant: 'text-md/normal',
                                children: O.Z.Messages.ROLE_REMOVE_MEMBER_CONFIRM_TIP
                            })
                        ]
                    })
                );
            })(t, i, l);
        }
    }
    function N(e) {
        let a = m.default.getUser(t.id);
        if (null != a)
            (0, c.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('12435'), n.e('90578')]).then(n.bind(n, 48211));
                return (t) =>
                    (0, s.jsx)(e, {
                        ...t,
                        user: a,
                        guildId: i,
                        showChatItems: !1
                    });
            });
    }
    return (
        (0, u.$)(_),
        (0, s.jsx)('div', {
            className: M.contentWidth,
            children: (0, s.jsx)(o.Popout, {
                renderPopout: (e) =>
                    (0, s.jsx)(T.Z, {
                        guildId: i,
                        userId: t.id,
                        roleId: l,
                        ...e
                    }),
                position: 'left',
                preload: () => (0, E.Z)(t.id, t.avatarURL, { guildId: i }),
                children: (e) =>
                    (0, s.jsxs)(o.Clickable, {
                        ...e,
                        className: A.memberRow,
                        onContextMenu: N,
                        children: [
                            (0, s.jsx)(R.Z, {
                                className: A.memberDetails,
                                avatarURL: t.avatarURL,
                                name: t.name,
                                bot: t.bot,
                                verifiedBot: t.verifiedBot,
                                userTag: t.userTag
                            }),
                            (0, s.jsx)('div', {
                                className: A.removeButtonContainer,
                                children: (0, s.jsx)(o.Tooltip, {
                                    text: d ? O.Z.Messages.ROLE_REMOVE_MEMBER_MANAGED : O.Z.Messages.ROLE_REMOVE_MEMBER_CONFIRM_TITLE,
                                    position: 'top',
                                    children: (e) =>
                                        (0, s.jsx)(o.Clickable, {
                                            ...e,
                                            className: r()(A.removeButton, { [A.removeButtonDisabled]: d }),
                                            onClick: I,
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
        })
    );
}
function j(e) {
    let { handleAddClick: t, locked: n } = e;
    return (0, s.jsx)('div', {
        className: M.contentWidth,
        children: (0, s.jsxs)('div', {
            className: r()(A.memberRow, A.emptyRowContainer),
            children: [
                (0, s.jsx)(o.GroupIcon, {
                    size: 'md',
                    color: 'currentColor'
                }),
                (0, s.jsx)(o.Text, {
                    className: A.emptyRowText,
                    variant: 'text-sm/semibold',
                    color: 'text-muted',
                    children: O.Z.Messages.ROLE_EDIT_MEMBERS_NO_SEARCH_RESULTS.format({
                        addMembersHook: function (e, a) {
                            return n
                                ? null
                                : (0, s.jsx)(
                                      o.Anchor,
                                      {
                                          onClick: t,
                                          children: e
                                      },
                                      a
                                  );
                        }
                    })
                })
            ]
        })
    });
}
function Z(e) {
    let { guildId: t, roleId: n, query: i, headerHeight: r, locked: l, onScroll: c, roleMembers: d, handleAddClick: u } = e,
        { analyticsLocations: E } = (0, I.ZP)(_.Z.MEMBER_LIST),
        T = a.useMemo(() => i.trim().toLowerCase(), [i]);
    (0, C.rY)(t, T);
    let m = a.useMemo(() => d.filter((e) => (0, C.eg)(T, e)), [d, T]),
        N = a.useMemo(() => m.sort((e, t) => e.name.localeCompare(t.name)), [m]);
    return (0, s.jsx)(I.Gt, {
        value: E,
        children: (0, s.jsx)(o.ListAuto, {
            className: A.list,
            sections: [Math.max(m.length, 1)],
            sectionHeight: r,
            renderSection: () => (0, s.jsx)('div', { style: { height: r } }, 'section'),
            style: { scrollPaddingTop: r },
            rowHeight: 40,
            renderRow: function (e) {
                let { row: a } = e;
                if (0 === N.length)
                    return (0, s.jsx)(
                        j,
                        {
                            handleAddClick: u,
                            locked: l
                        },
                        'empty'
                    );
                let i = N[a];
                return (0, s.jsx)(
                    v,
                    {
                        member: i,
                        guildId: t,
                        roleId: n,
                        locked: l
                    },
                    i.id
                );
            },
            onScroll: c
        })
    });
}
function b(e) {
    let { query: t, setQuery: n, locked: a, handleAddClick: i } = e;
    return (0, s.jsxs)('div', {
        className: A.searchContainer,
        children: [
            (0, s.jsx)(o.SearchBar, {
                size: o.SearchBar.Sizes.MEDIUM,
                query: t,
                onChange: n,
                onClear: () => n(''),
                placeholder: O.Z.Messages.SEARCH_MEMBERS,
                'aria-label': O.Z.Messages.SEARCH_MEMBERS
            }),
            (0, s.jsx)(o.Button, {
                className: A.addButton,
                size: o.Button.Sizes.SMALL,
                onClick: i,
                disabled: a,
                children: O.Z.Messages.ROLE_ADD_MEMBERS_BUTTON
            })
        ]
    });
}
function U(e) {
    let { guild: t, role: i, locked: c, setSelectedSection: d } = e,
        [u, _] = a.useState(''),
        { headerHeight: I, headerRef: E } = (0, x.Z)(0),
        { scrolledToTop: T, handleScroll: m } = (0, p.V)(),
        h = i.managed || c,
        g = (0, C.e)(t.id, i.id),
        R =
            (0, l.e7)([S.Z], () => {
                var e, n;
                return null !== (n = null === (e = S.Z.getRoleMemberCount(t.id)) || void 0 === e ? void 0 : e[i.id]) && void 0 !== n ? n : 0;
            }) > g.length,
        D = () => {
            N.default.track(L.rMx.OPEN_MODAL, {
                type: 'Add Role Members',
                location_page: 'Role Settings',
                location_section: 'Members'
            }),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('7590'), n.e('35321')]).then(n.bind(n, 24722));
                    return (n) =>
                        (0, s.jsx)(e, {
                            ...n,
                            roleId: i.id,
                            guildId: t.id
                        });
                });
        };
    return (0, s.jsxs)('div', {
        className: A.container,
        children: [
            (0, s.jsx)('div', {
                className: A.headerContainer,
                ref: E,
                children: (0, s.jsx)('div', {
                    className: M.contentWidth,
                    children: (0, s.jsxs)('div', {
                        className: r()(M.header, { [M.stickyHeaderElevated]: !T }),
                        children: [
                            (0, s.jsx)(p.Z, {
                                guild: t,
                                role: i,
                                selectedSection: f.ZI.MEMBERS,
                                setSelectedSection: d
                            }),
                            (0, s.jsx)(b, {
                                query: u,
                                setQuery: _,
                                locked: h,
                                handleAddClick: D
                            }),
                            R
                                ? (0, s.jsx)(o.HelpMessage, {
                                      className: A.searchWarning,
                                      messageType: o.HelpMessageTypes.INFO,
                                      children: O.Z.Messages.ROLE_EDIT_MEMBERS_MISSING
                                  })
                                : null
                        ]
                    })
                })
            }),
            (0, s.jsx)(Z, {
                headerHeight: I + 8,
                query: u,
                guildId: t.id,
                roleId: i.id,
                locked: h,
                onScroll: m,
                roleMembers: g,
                handleAddClick: D
            })
        ]
    });
}
