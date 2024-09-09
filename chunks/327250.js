n.d(t, {
    Z: function () {
        return j;
    }
});
var i = n(735250);
n(470079);
var s = n(120356),
    a = n.n(s),
    l = n(399606),
    r = n(481060),
    o = n(493683),
    c = n(906732),
    u = n(979264),
    d = n(69882),
    h = n(251794),
    m = n(386696),
    p = n(910693),
    _ = n(314897),
    f = n(271383),
    E = n(430824),
    g = n(496675),
    C = n(158776),
    I = n(885110),
    x = n(594174),
    T = n(572004),
    v = n(5192),
    S = n(51144),
    N = n(981631),
    A = n(308083),
    Z = n(689938),
    M = n(181861);
function b(e) {
    let { user: t, guildId: n, onClose: s } = e,
        a = t.id,
        o = (0, l.e7)([I.Z, C.Z, _.default], () => (a === _.default.getId() ? I.Z.getStatus() : C.Z.getStatus(a, n)), [a, n]);
    return (0, i.jsxs)('div', {
        className: M.topRow,
        children: [
            (0, i.jsxs)('div', {
                className: M.memberNameContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: M.memberAvatar,
                        children: (0, i.jsx)(r.Avatar, {
                            src: t.getAvatarURL(n, 48),
                            'aria-label': t.username,
                            size: r.AvatarSizes.SIZE_48,
                            status: o
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: M.memberNameAndTagContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: M.memberNameTextContainer,
                                children: [
                                    (0, i.jsx)(r.Text, {
                                        variant: 'text-lg/medium',
                                        children: (0, i.jsx)(r.NameWithRole, {
                                            name: v.ZP.getName(n, null, t),
                                            color: r.tokens.colors.HEADER_PRIMARY.css
                                        })
                                    }),
                                    (0, i.jsx)(u.ZP, {
                                        clan: null == t ? void 0 : t.clan,
                                        userId: null == t ? void 0 : t.id,
                                        contextGuildId: n,
                                        badgeSize: A.NC.SIZE_16,
                                        textVariant: 'heading-md/semibold',
                                        className: M.memberClanTag,
                                        containerClassName: M.memberClanTagContainer
                                    })
                                ]
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: 'text-md/medium',
                                color: 'text-normal',
                                children: S.ZP.getUserTag(t)
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-md/medium',
                color: 'text-normal',
                children: (0, i.jsx)(r.Clickable, {
                    className: M.closeAction,
                    onClick: s,
                    children: (0, i.jsx)(r.XSmallIcon, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })
            })
        ]
    });
}
function R(e) {
    let { tag: t = 'div', disabled: n, children: s, onClick: l, ...o } = e;
    return (0, i.jsx)(r.Clickable, {
        ...o,
        tag: t,
        className: a()(M.bottomRowAction, { [M.bottomRowActionDisabled]: n }),
        onClick: n ? void 0 : l,
        children: (0, i.jsx)('div', {
            className: M.innerBottomRowAction,
            children: s
        })
    });
}
function L(e) {
    let { user: t, member: s, guildId: a } = e,
        u = (0, l.e7)([E.Z], () => E.Z.getGuild(a)),
        {
            canKickUser: f,
            canBanUser: C,
            canModerateMembers: I
        } = (0, l.cj)(
            [g.Z, x.default, E.Z],
            () => ({
                canKickUser: null != u && g.Z.canManageUser(N.Plq.KICK_MEMBERS, t, u),
                canBanUser: null != u && g.Z.canManageUser(N.Plq.BAN_MEMBERS, t, u),
                canModerateMembers: null != u && (0, m.F)(u.id, t.id, [x.default, E.Z, g.Z])
            }),
            [t, u]
        ),
        v = (0, d.b)(s),
        { analyticsLocations: S, newestAnalyticsLocation: A } = (0, c.ZP)(),
        b = (0, p.sE)(a, {
            targetUserId: t.id,
            location: A,
            locations: S
        }),
        L = (0, l.e7)([_.default], () => _.default.getId() === (null == t ? void 0 : t.id));
    return (0, i.jsxs)('div', {
        className: M.bottomRow,
        children: [
            (0, i.jsxs)(R, {
                disabled: L,
                'aria-label': Z.Z.Messages.SEND_DM,
                onClick: () => {
                    o.Z.openPrivateChannel(t.id);
                },
                children: [
                    (0, i.jsx)(r.ChatIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 22,
                        height: 22
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        children: Z.Z.Messages.SEND_DM
                    })
                ]
            }),
            (0, i.jsxs)(R, {
                disabled: !f,
                'aria-label': Z.Z.Messages.KICK,
                onClick: () => {
                    (0, r.openModalLazy)(async () => {
                        let { default: e } = await n.e('5454').then(n.bind(n, 854360));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                location: A,
                                guildId: a,
                                user: t
                            });
                    });
                },
                children: [
                    (0, i.jsx)(r.UserMinusIcon, {
                        size: 'custom',
                        width: 22,
                        height: 22,
                        color: r.tokens.colors.TEXT_NORMAL.css
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        children: Z.Z.Messages.KICK
                    })
                ]
            }),
            (0, i.jsxs)(R, {
                disabled: !C,
                'aria-label': Z.Z.Messages.BAN,
                onClick: () => {
                    (0, r.openModalLazy)(async () => {
                        let { default: e } = await n.e('43350').then(n.bind(n, 98746));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                location: A,
                                guildId: a,
                                user: t
                            });
                    });
                },
                children: [
                    (0, i.jsx)(r.HammerIcon, {
                        size: 'custom',
                        width: 22,
                        height: 22,
                        color: r.tokens.colors.TEXT_NORMAL.css
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        children: Z.Z.Messages.BAN
                    })
                ]
            }),
            (0, i.jsxs)(R, {
                disabled: !I,
                'aria-label': Z.Z.Messages.TIMEOUT_USER,
                onClick: () => {
                    v ? (0, h.q)(s.guildId, s.userId, S) : (0, h.z)(s.guildId, s.userId, S);
                },
                children: [
                    (0, i.jsx)(r.ClockWarningIcon, {
                        size: 'custom',
                        width: 22,
                        height: 22,
                        color: r.tokens.colors.TEXT_NORMAL.css
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        children: v ? Z.Z.Messages.REMOVE : Z.Z.Messages.TIMEOUT_USER
                    })
                ]
            }),
            (0, i.jsxs)(R, {
                'aria-label': Z.Z.Messages.COPY_ID,
                onClick: () => {
                    b(p.jQ.COPY_ID), (0, T.JG)(t.id);
                },
                disabled: !T.wS,
                children: [
                    (0, i.jsx)(r.IdIcon, {
                        size: 'custom',
                        width: 22,
                        height: 22,
                        color: r.tokens.colors.TEXT_NORMAL.css
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        children: Z.Z.Messages.COPY_ID
                    })
                ]
            })
        ]
    });
}
function j(e) {
    let { userId: t, guildId: n, onClose: s } = e,
        a = (0, l.e7)([x.default], () => x.default.getUser(t), [t]),
        r = (0, l.e7)([f.ZP], () => f.ZP.getMember(n, t), [n, t]);
    return null == a || null == r
        ? null
        : (0, i.jsxs)('div', {
              className: M.container,
              children: [
                  (0, i.jsx)(b, {
                      user: a,
                      guildId: n,
                      onClose: s
                  }),
                  (0, i.jsx)(L, {
                      user: a,
                      member: r,
                      guildId: n
                  })
              ]
          });
}
