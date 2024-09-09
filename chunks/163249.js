n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    i = n(120356),
    r = n.n(i),
    l = n(442837),
    o = n(481060),
    c = n(749210),
    d = n(493544),
    u = n(607070),
    _ = n(714939),
    I = n(981631),
    E = n(689938),
    T = n(329349);
function m(e) {
    let { color: t, children: n } = e;
    return (0, s.jsxs)('div', {
        className: T.roleTag,
        children: [
            (0, s.jsx)(o.RoleCircle, {
                className: T.roleDot,
                color: t
            }),
            (0, s.jsx)('span', {
                className: T.roleText,
                children: n
            })
        ]
    });
}
function N(e) {
    let { guild: t, display: n } = e;
    return (0, s.jsxs)('div', {
        className: r()(T.banner, t.backgroundClass, { [T.bannerOut]: !n }),
        children: [
            (0, s.jsx)('div', {
                className: T.roles,
                children: t.roles.map((e, t) =>
                    (0, s.jsx)(
                        'div',
                        {
                            className: T.rolesRow,
                            children: e.map((e) =>
                                (0, s.jsx)(
                                    m,
                                    {
                                        color: e.color,
                                        children: e.name
                                    },
                                    e.name
                                )
                            )
                        },
                        t
                    )
                )
            }),
            (0, s.jsx)('div', {
                className: T.profileCard,
                children: (0, s.jsxs)('div', {
                    className: T.avatarContainer,
                    children: [
                        (0, s.jsx)(o.Avatar, {
                            size: o.AvatarSizes.SIZE_56,
                            'aria-hidden': !0,
                            status: I.Skl.ONLINE,
                            src: t.avatar
                        }),
                        (0, s.jsx)(o.Text, {
                            color: 'header-primary',
                            variant: 'text-md/bold',
                            className: T.avatarName,
                            children: t.username
                        })
                    ]
                })
            })
        ]
    });
}
function S() {
    let e = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        t = a.useMemo(
            () => [
                {
                    backgroundClass: T.bannerClubs,
                    username: 'Wumpus#0000',
                    avatar: n(91055),
                    roles: [
                        [
                            {
                                name: E.Z.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_1,
                                color: '#7e00fc'
                            },
                            {
                                name: E.Z.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_2,
                                color: '#faa61a'
                            },
                            {
                                name: E.Z.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_3,
                                color: '#f06ea8'
                            }
                        ],
                        [
                            {
                                name: E.Z.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_4,
                                color: '#45ddc0'
                            },
                            {
                                name: E.Z.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_5,
                                color: '#00b0f4'
                            },
                            {
                                name: E.Z.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_6,
                                color: '#ba1616'
                            }
                        ]
                    ]
                },
                {
                    backgroundClass: T.bannerGaming,
                    username: 'Graggle#0000',
                    avatar: n(507003),
                    roles: [
                        [
                            {
                                name: E.Z.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_1,
                                color: '#4a76e6'
                            },
                            {
                                name: E.Z.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_2,
                                color: '#ad87ff'
                            },
                            {
                                name: E.Z.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_3,
                                color: '#6defcf'
                            }
                        ],
                        [
                            {
                                name: E.Z.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_4,
                                color: '#ff73fa'
                            },
                            {
                                name: E.Z.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_5,
                                color: '#3ba55c'
                            },
                            {
                                name: E.Z.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_6,
                                color: '#ff1b66'
                            }
                        ]
                    ]
                },
                {
                    backgroundClass: T.bannerHobbies,
                    username: 'Mallow#0000',
                    avatar: n(552557),
                    roles: [
                        [
                            {
                                name: E.Z.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_1,
                                color: '#20d6b8'
                            },
                            {
                                name: E.Z.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_2,
                                color: '#236136'
                            },
                            {
                                name: E.Z.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_3,
                                color: '#ff9a15'
                            }
                        ],
                        [
                            {
                                name: E.Z.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_4,
                                color: '#ff78b9'
                            },
                            {
                                name: E.Z.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_5,
                                color: '#00b0f4'
                            },
                            {
                                name: E.Z.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_6,
                                color: '#6f52e4'
                            }
                        ]
                    ]
                }
            ],
            []
        ),
        [i, r] = a.useState(0);
    return (
        a.useEffect(() => {
            if (e) return;
            let n = setTimeout(() => r((i + 1) % t.length), 6332);
            return () => clearTimeout(n);
        }, [i]),
        (0, s.jsx)('div', {
            className: T.bannerContainer,
            'aria-hidden': !0,
            children: t.map((e, t) =>
                (0, s.jsx)(
                    N,
                    {
                        guild: e,
                        display: t === i
                    },
                    t
                )
            )
        })
    );
}
function h(e) {
    let { guild: t, everyoneRole: n, setEditRoleId: i } = e,
        [r, l] = a.useState(!1),
        u = async () => {
            l(!0), await c.Z.createRole(t.id), l(!1);
        },
        I = a.useCallback(() => {
            i(n.id);
        }, [i, n.id]);
    return (0, s.jsx)(d.NM, {
        children: (0, s.jsxs)(o.FormSection, {
            className: T.section,
            title: E.Z.Messages.ROLES,
            tag: o.FormTitleTags.H2,
            children: [
                (0, s.jsxs)('div', {
                    className: T.container,
                    children: [
                        (0, s.jsx)(S, {}),
                        (0, s.jsx)(o.Heading, {
                            variant: 'heading-xl/semibold',
                            children: E.Z.Messages.ROLE_OVERVIEW_EMPTY_SUBHEADER
                        }),
                        (0, s.jsx)(o.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: T.introBody,
                            children: E.Z.Messages.ROLE_OVERVIEW_DESCRIPTION
                        }),
                        (0, s.jsx)(o.Button, {
                            className: T.button,
                            size: o.Button.Sizes.MEDIUM,
                            onClick: u,
                            submitting: r,
                            children: E.Z.Messages.ROLE_CREATE_CTA
                        })
                    ]
                }),
                (0, s.jsx)(o.FormDivider, { className: T.divider }),
                (0, s.jsx)(_.Z, {
                    role: n,
                    onClick: I
                })
            ]
        })
    });
}
