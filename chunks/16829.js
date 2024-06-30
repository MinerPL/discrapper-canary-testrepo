var s = E(735250), T = E(470079), I = E(120356), n = E.n(I), A = E(442837), t = E(481060), a = E(749210), r = E(700582), N = E(484459), L = E(271383), S = E(246946), D = E(594174), l = E(669405), U = E(5192), G = E(893966), O = E(527379), i = E(327999), M = E(689938), R = E(160190);
let o = T.memo(function () {
        return (0, s.jsx)(t.Tooltip, {
            text: M.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN_TOOLTIP,
            children: e => (0, s.jsx)(t.Text, {
                ...e,
                variant: 'text-sm/medium',
                color: 'text-muted',
                className: R.unknownInvite,
                children: M.Z.Messages.MEMBERS_SAFETY_UNKNOWN_INVITE_CODE
            })
        });
    }), u = T.memo(function () {
        return (0, s.jsx)(t.Tooltip, {
            text: M.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_HIDDEN_TOOLTIP,
            children: e => (0, s.jsx)(t.Text, {
                ...e,
                variant: 'text-sm/medium',
                color: 'text-muted',
                className: R.unknownInvite,
                children: M.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_HIDDEN
            })
        });
    }), c = {
        [i.gq.UNSPECIFIED]: {
            type: i.gq.UNSPECIFIED,
            getJoinTypeLabel: () => M.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN,
            icon: null,
            hasTooltip: !1
        },
        [i.gq.BOT]: {
            type: i.gq.BOT,
            getJoinTypeLabel: () => M.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT,
            icon: (0, s.jsx)(t.RobotIcon, {
                size: 'custom',
                color: 'currentColor',
                className: R.robot,
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [i.gq.INTEGRATION]: {
            type: i.gq.INTEGRATION,
            getJoinTypeLabel: () => M.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION,
            icon: (0, s.jsx)(t.WebhookIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [i.gq.DISCOVERY]: {
            type: i.gq.DISCOVERY,
            getJoinTypeLabel: () => M.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY,
            icon: (0, s.jsx)(t.CompassIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [i.gq.HUB]: {
            type: i.gq.HUB,
            getJoinTypeLabel: () => M.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB,
            icon: (0, s.jsx)(t.HubIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [i.gq.INVITE]: {
            type: i.gq.INVITE,
            getJoinTypeLabel: e => e,
            icon: (0, s.jsx)(t.LinkIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !0
        },
        [i.gq.VANITY_URL]: {
            type: i.gq.VANITY_URL,
            getJoinTypeLabel: e => e,
            icon: (0, s.jsx)(t.LinkIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        },
        [i.gq.MANUAL_MEMBER_VERIFICATION]: {
            type: i.gq.MANUAL_MEMBER_VERIFICATION,
            getJoinTypeLabel: e => null != e ? M.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_MANUAL_VERIFICATION_CODE.format({ code: e }) : M.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_MANUAL_VERIFICATION,
            icon: (0, s.jsx)(l.Z, {
                height: 12,
                width: 12
            }),
            hasTooltip: !1
        }
    };
function C(e) {
    var _;
    let {
            guildId: E,
            inviterUser: I,
            joinSourceType: a,
            className: N,
            onClickInviter: S
        } = e, D = (0, A.e7)([L.ZP], () => null == I ? null : L.ZP.getMember(E, I.id), [
            I,
            E
        ]), l = T.useCallback(e => {
            e.stopPropagation(), e.preventDefault(), null != I && (null == S || S(I));
        }, [
            I,
            S
        ]);
    return null == I ? null : (0, s.jsxs)('div', {
        className: n()(R.inviterTooltipContainer, N),
        children: [
            (0, s.jsx)(t.Text, {
                variant: 'text-xs/medium',
                children: a !== i.gq.BOT ? M.Z.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : M.Z.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP
            }),
            (0, s.jsxs)(t.Clickable, {
                className: n()(R.inviterUserContainer, null != S && R.clickable),
                onClick: l,
                children: [
                    (0, s.jsx)(r.Z, {
                        user: I,
                        size: t.AvatarSizes.SIZE_16
                    }),
                    (0, s.jsx)(t.Text, {
                        variant: 'text-xs/medium',
                        children: (0, s.jsx)(t.NameWithRole, {
                            name: U.ZP.getName(E, null, I),
                            color: null !== (_ = null == D ? void 0 : D.colorString) && void 0 !== _ ? _ : void 0
                        })
                    })
                ]
            })
        ]
    });
}
function g(e) {
    let {
        children: _,
        hasTooltip: E,
        guildId: T,
        inviterUser: I,
        joinSourceType: n
    } = e;
    return E && null != I ? (0, s.jsx)(t.Tooltip, {
        'aria-label': n !== i.gq.BOT ? M.Z.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : M.Z.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP,
        allowOverflow: !0,
        text: (0, s.jsx)(C, {
            guildId: T,
            inviterUser: I,
            joinSourceType: n
        }),
        children: e => (0, s.jsx)(s.Fragment, { children: _(e) })
    }) : (0, s.jsx)(s.Fragment, { children: _({}) });
}
function d(e) {
    let {type: _} = e, E = (0, i.Ph)(_);
    return null == E ? null : (0, s.jsx)('div', {
        className: R.integrationIcon,
        style: {
            width: 12,
            height: 12,
            backgroundImage: E
        }
    });
}
function f(e) {
    let {
            sourceInviteCode: _,
            joinSourceType: E,
            integrationType: I,
            showInviterAsFooter: A,
            guildId: a,
            inviterUser: r,
            onClickInviter: N,
            ...L
        } = e, S = null != E ? c[E] : null, D = E === i.gq.INTEGRATION && null != I, l = T.useCallback(e => {
            switch (e.stopPropagation(), e.preventDefault(), !0) {
            case null == _ && null == E:
            case null == E:
                return;
            case E === i.gq.INVITE && null != _:
                var s;
                (0, O.Dr)(a, {
                    selectedSourceInviteCode: null !== (s = null == _ ? void 0 : _.trim()) && void 0 !== s ? s : void 0,
                    selectedJoinSourceType: E
                });
                return;
            default:
                (0, O.Dr)(a, {
                    selectedSourceInviteCode: null,
                    selectedJoinSourceType: null != E ? E : void 0
                });
                return;
            }
        }, [
            a,
            E,
            _
        ]);
    switch (!0) {
    case null == S:
    case null == E:
    case E === i.gq.UNSPECIFIED:
        return (0, s.jsx)(o, { ...L });
    case null != I && D:
        return (0, s.jsxs)(t.Clickable, {
            className: R.inviteContainer,
            ...L,
            'aria-label': (0, i.MS)(I),
            role: 'button',
            tabIndex: 0,
            onClick: l,
            children: [
                (0, s.jsx)(d, { type: I }),
                (0, s.jsx)(t.Text, {
                    variant: 'text-sm/medium',
                    children: (0, i.MS)(I)
                })
            ]
        });
    case null != S:
        return (0, s.jsxs)('div', {
            className: n()(A && R.footerAlignment),
            children: [
                (0, s.jsxs)(t.Clickable, {
                    className: R.inviteContainer,
                    ...L,
                    'aria-label': null == S ? void 0 : S.getJoinTypeLabel(null != _ ? _ : void 0),
                    role: 'button',
                    tabIndex: 0,
                    onClick: l,
                    children: [
                        null == S ? void 0 : S.icon,
                        (0, s.jsx)(t.Text, {
                            variant: 'text-sm/medium',
                            children: null == S ? void 0 : S.getJoinTypeLabel(null != _ ? _ : void 0)
                        })
                    ]
                }),
                A && (0, s.jsx)(C, {
                    guildId: a,
                    inviterUser: r,
                    joinSourceType: E,
                    className: R.inviterFooter,
                    onClickInviter: N
                })
            ]
        });
    default:
        return (0, s.jsx)(o, { ...L });
    }
}
_.ZP = T.memo(function (e) {
    var _, E;
    let {
            userId: I,
            guildId: n,
            showInviterAsFooter: t,
            onClickInviter: r
        } = e, L = (0, A.e7)([G.Z], () => G.Z.getEnhancedMember(n, I), [
            n,
            I
        ]), l = null !== (_ = null == L ? void 0 : L.inviterId) && void 0 !== _ ? _ : null, U = (0, A.e7)([D.default], () => D.default.getUser(l), [l]);
    T.useEffect(() => {
        null != l && (a.Z.requestMembersById(n, [l]), (0, N.Z)(l, void 0, { guildId: n }));
    }, [
        n,
        l
    ]);
    let O = (0, A.e7)([S.Z], () => S.Z.hideInstantInvites, []);
    if (null == L)
        return (0, s.jsx)(o, {});
    let {
            sourceInviteCode: M,
            joinSourceType: R,
            integrationType: C
        } = L, d = null != R ? c[R] : null, Z = null !== (E = null == d ? void 0 : d.hasTooltip) && void 0 !== E && E;
    return (R === i.gq.INVITE || R === i.gq.VANITY_URL || R === i.gq.MANUAL_MEMBER_VERIFICATION && null != M) && O ? (0, s.jsx)(u, {}) : (0, s.jsx)(g, {
        hasTooltip: Z && !t,
        inviterUser: null != U ? U : null,
        guildId: n,
        joinSourceType: R,
        children: e => (0, s.jsx)(f, {
            sourceInviteCode: M,
            joinSourceType: R,
            integrationType: C,
            showInviterAsFooter: t,
            inviterUser: null != U ? U : null,
            guildId: n,
            onClickInviter: r,
            ...e
        })
    });
});
