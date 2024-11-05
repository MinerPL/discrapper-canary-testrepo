n.d(t, {
    Z: function () {
        return M;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(399606),
    s = n(481060),
    o = n(493683),
    c = n(906732),
    d = n(979264),
    u = n(69882),
    h = n(251794),
    p = n(386696),
    m = n(910693),
    f = n(314897),
    g = n(271383),
    C = n(430824),
    x = n(496675),
    v = n(158776),
    _ = n(885110),
    I = n(594174),
    E = n(572004),
    b = n(5192),
    N = n(51144),
    Z = n(981631),
    T = n(308083),
    S = n(388032),
    j = n(354418);
function A(e) {
    let { user: t, guildId: n, onClose: l } = e,
        a = t.id,
        o = (0, r.e7)([_.Z, v.Z, f.default], () => (a === f.default.getId() ? _.Z.getStatus() : v.Z.getStatus(a, n)), [a, n]);
    return (0, i.jsxs)('div', {
        className: j.topRow,
        children: [
            (0, i.jsxs)('div', {
                className: j.memberNameContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: j.memberAvatar,
                        children: (0, i.jsx)(s.Avatar, {
                            src: t.getAvatarURL(n, 48),
                            'aria-label': t.username,
                            size: s.AvatarSizes.SIZE_48,
                            status: o
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: j.memberNameAndTagContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: j.memberNameTextContainer,
                                children: [
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-lg/medium',
                                        children: (0, i.jsx)(s.NameWithRole, {
                                            name: b.ZP.getName(n, null, t),
                                            color: s.tokens.colors.HEADER_PRIMARY.css
                                        })
                                    }),
                                    (0, i.jsx)(d.ZP, {
                                        clan: null == t ? void 0 : t.clan,
                                        userId: null == t ? void 0 : t.id,
                                        contextGuildId: n,
                                        badgeSize: T.NC.SIZE_16,
                                        textVariant: 'heading-md/semibold',
                                        className: j.memberClanTag,
                                        containerClassName: j.memberClanTagContainer
                                    })
                                ]
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-md/medium',
                                color: 'text-normal',
                                children: N.ZP.getUserTag(t)
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-md/medium',
                color: 'text-normal',
                children: (0, i.jsx)(s.Clickable, {
                    className: j.closeAction,
                    onClick: l,
                    children: (0, i.jsx)(s.XSmallIcon, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })
            })
        ]
    });
}
function y(e) {
    let { tag: t = 'div', disabled: n, children: l, onClick: r, ...o } = e;
    return (0, i.jsx)(s.Clickable, {
        ...o,
        tag: t,
        className: a()(j.bottomRowAction, { [j.bottomRowActionDisabled]: n }),
        onClick: n ? void 0 : r,
        children: (0, i.jsx)('div', {
            className: j.innerBottomRowAction,
            children: l
        })
    });
}
function P(e) {
    let { user: t, member: l, guildId: a } = e,
        d = (0, r.e7)([C.Z], () => C.Z.getGuild(a)),
        {
            canKickUser: g,
            canBanUser: v,
            canModerateMembers: _
        } = (0, r.cj)(
            [x.Z, I.default, C.Z],
            () => ({
                canKickUser: null != d && x.Z.canManageUser(Z.Plq.KICK_MEMBERS, t, d),
                canBanUser: null != d && x.Z.canManageUser(Z.Plq.BAN_MEMBERS, t, d),
                canModerateMembers: null != d && (0, p.F)(d.id, t.id, [I.default, C.Z, x.Z])
            }),
            [t, d]
        ),
        b = (0, u.b)(l),
        { analyticsLocations: N, newestAnalyticsLocation: T } = (0, c.ZP)(),
        A = (0, m.sE)(a, {
            targetUserId: t.id,
            location: T,
            locations: N
        }),
        P = (0, r.e7)([f.default], () => f.default.getId() === (null == t ? void 0 : t.id));
    return (0, i.jsxs)('div', {
        className: j.bottomRow,
        children: [
            (0, i.jsxs)(y, {
                disabled: P,
                'aria-label': S.intl.string(S.t['g33r/P']),
                onClick: () => {
                    o.Z.openPrivateChannel(t.id);
                },
                children: [
                    (0, i.jsx)(s.ChatIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 22,
                        height: 22
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        children: S.intl.string(S.t['g33r/P'])
                    })
                ]
            }),
            (0, i.jsxs)(y, {
                disabled: !g,
                'aria-label': S.intl.string(S.t['3glT6e']),
                onClick: () => {
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await n.e('5454').then(n.bind(n, 854360));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                location: T,
                                guildId: a,
                                user: t
                            });
                    });
                },
                children: [
                    (0, i.jsx)(s.UserMinusIcon, {
                        size: 'custom',
                        width: 22,
                        height: 22,
                        color: s.tokens.colors.TEXT_NORMAL.css
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        children: S.intl.string(S.t['3glT6e'])
                    })
                ]
            }),
            (0, i.jsxs)(y, {
                disabled: !v,
                'aria-label': S.intl.string(S.t['5MBJ5O']),
                onClick: () => {
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await n.e('43350').then(n.bind(n, 98746));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                location: T,
                                guildId: a,
                                user: t
                            });
                    });
                },
                children: [
                    (0, i.jsx)(s.HammerIcon, {
                        size: 'custom',
                        width: 22,
                        height: 22,
                        color: s.tokens.colors.TEXT_NORMAL.css
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        children: S.intl.string(S.t['5MBJ5O'])
                    })
                ]
            }),
            (0, i.jsxs)(y, {
                disabled: !_,
                'aria-label': S.intl.string(S.t.kTlLr6),
                onClick: () => {
                    b
                        ? (0, h.q)({
                              guildId: l.guildId,
                              userId: l.userId,
                              anaylticsLocations: N
                          })
                        : (0, h.z)({
                              guildId: l.guildId,
                              userId: l.userId,
                              anaylticsLocations: N
                          });
                },
                children: [
                    (0, i.jsx)(s.ClockWarningIcon, {
                        size: 'custom',
                        width: 22,
                        height: 22,
                        color: s.tokens.colors.TEXT_NORMAL.css
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        children: b ? S.intl.string(S.t.N86XcH) : S.intl.string(S.t.kTlLr6)
                    })
                ]
            }),
            (0, i.jsxs)(y, {
                'aria-label': S.intl.string(S.t.IHTjzM),
                onClick: () => {
                    A(m.jQ.COPY_ID), (0, E.JG)(t.id);
                },
                disabled: !E.wS,
                children: [
                    (0, i.jsx)(s.IdIcon, {
                        size: 'custom',
                        width: 22,
                        height: 22,
                        color: s.tokens.colors.TEXT_NORMAL.css
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        children: S.intl.string(S.t.IHTjzM)
                    })
                ]
            })
        ]
    });
}
function M(e) {
    let { userId: t, guildId: n, onClose: l } = e,
        a = (0, r.e7)([I.default], () => I.default.getUser(t), [t]),
        s = (0, r.e7)([g.ZP], () => g.ZP.getMember(n, t), [n, t]);
    return null == a || null == s
        ? null
        : (0, i.jsxs)('div', {
              className: j.container,
              children: [
                  (0, i.jsx)(A, {
                      user: a,
                      guildId: n,
                      onClose: l
                  }),
                  (0, i.jsx)(P, {
                      user: a,
                      member: s,
                      guildId: n
                  })
              ]
          });
}
