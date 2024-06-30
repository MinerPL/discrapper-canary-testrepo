i.d(n, {
    Z: function () {
        return S;
    }
});
var t = i(735250);
i(470079);
var o = i(120356), s = i.n(o), l = i(442837), a = i(481060), r = i(493683), c = i(194359), d = i(906732), u = i(740492), I = i(785717), E = i(993409), _ = i(765365), f = i(981631), Z = i(689938), m = i(333355);
function S(e) {
    let {
            isCurrentUser: n,
            user: o,
            relationshipType: S,
            friendToken: v,
            originalFriendingEnabled: x = !1,
            improvedFriendingEnabled: h = !1,
            persistentCallCtaEnabled: N = !1,
            activeInviteToCallCtaEnabled: g = !1,
            onClose: C
        } = e, {newestAnalyticsLocation: p} = (0, d.ZP)(), {trackUserProfileAction: R} = (0, I.KZ)(), T = (0, l.e7)([u.ZP], () => !u.ZP.disableCallUserConfirmationPrompt), M = (0, _.Z)({
            user: o,
            onClose: C
        });
    if (n || S === f.OGo.BLOCKED)
        return null;
    let j = () => {
            R({ action: 'SEND_MESSAGE' }), r.Z.openPrivateChannel(o.id, !1, !1, p), C();
        }, A = () => {
            R({ action: 'VOICE_CALL' }), r.Z.openPrivateChannel(o.id, !0), C();
        }, P = N ? (0, t.jsx)(E.Z, {
            variant: 'icon',
            text: Z.Z.Messages.CALL,
            icon: a.PhoneCallIcon,
            color: s()(a.Button.Colors.PRIMARY, m.color),
            onClick: T ? () => {
                (0, a.openModalLazy)(async () => {
                    let {default: e} = await i.e('27157').then(i.bind(i, 736454));
                    return n => (0, t.jsx)(e, {
                        onSubmit: A,
                        ...n
                    });
                });
            } : A,
            className: m.iconButton
        }) : null;
    if (h) {
        if (S === f.OGo.FRIEND && g && null != M)
            return (0, t.jsxs)('div', {
                className: m.multipleButtons,
                children: [
                    (0, t.jsx)(E.Z, {
                        variant: 'icon',
                        text: Z.Z.Messages.SEND_DM,
                        icon: a.ChatIcon,
                        className: m.iconButton,
                        color: s()(a.Button.Colors.PRIMARY, m.color),
                        onClick: j
                    }),
                    M
                ]
            });
        if (S === f.OGo.FRIEND || o.bot)
            return (0, t.jsxs)('div', {
                className: m.multipleButtons,
                children: [
                    P,
                    (0, t.jsx)(E.Z, {
                        variant: 'text',
                        text: Z.Z.Messages.SEND_DM,
                        icon: a.ChatIcon,
                        color: s()(a.Button.Colors.PRIMARY, m.color),
                        onClick: j
                    })
                ]
            });
        if (S === f.OGo.PENDING_OUTGOING)
            return g && null != M ? (0, t.jsxs)('div', {
                className: m.multipleButtons,
                children: [
                    (0, t.jsx)(E.Z, {
                        variant: 'icon',
                        text: Z.Z.Messages.FRIENDS_SECTION_PENDING,
                        icon: a.UserClockIcon,
                        className: m.iconButton,
                        color: s()(a.Button.Colors.PRIMARY, m.color),
                        disabled: !0
                    }),
                    (0, t.jsx)(E.Z, {
                        variant: 'icon',
                        text: Z.Z.Messages.SEND_DM,
                        icon: a.ChatIcon,
                        className: m.iconButton,
                        color: s()(a.Button.Colors.PRIMARY, m.color),
                        onClick: j
                    }),
                    M
                ]
            }) : (0, t.jsxs)('div', {
                className: m.multipleButtons,
                children: [
                    (0, t.jsx)(E.Z, {
                        variant: 'icon',
                        text: Z.Z.Messages.FRIENDS_SECTION_PENDING,
                        icon: a.UserClockIcon,
                        className: m.iconButton,
                        color: s()(a.Button.Colors.PRIMARY, m.color),
                        disabled: !0
                    }),
                    P,
                    (0, t.jsx)(E.Z, {
                        variant: 'text',
                        text: Z.Z.Messages.SEND_DM,
                        icon: a.ChatIcon,
                        color: s()(a.Button.Colors.PRIMARY, m.color),
                        onClick: j
                    })
                ]
            });
        if (S === f.OGo.PENDING_INCOMING)
            return g && null != M ? (0, t.jsxs)('div', {
                className: m.multipleButtons,
                children: [
                    (0, t.jsx)(E.Z, {
                        variant: 'icon',
                        text: Z.Z.Messages.FRIENDS_SECTION_PENDING,
                        icon: a.UserClockIcon,
                        className: m.iconButton,
                        color: s()(a.Button.Colors.PRIMARY, m.color),
                        disabled: !0
                    }),
                    (0, t.jsx)(E.Z, {
                        variant: 'icon',
                        text: Z.Z.Messages.SEND_DM,
                        icon: a.ChatIcon,
                        className: m.iconButton,
                        color: s()(a.Button.Colors.PRIMARY, m.color),
                        onClick: j
                    }),
                    M
                ]
            }) : (0, t.jsxs)('div', {
                className: m.multipleButtons,
                children: [
                    (0, t.jsx)(E.Z, {
                        variant: 'icon',
                        text: Z.Z.Messages.FRIENDS_SECTION_PENDING,
                        icon: a.UserClockIcon,
                        className: m.iconButton,
                        color: s()(a.Button.Colors.PRIMARY, m.color),
                        disabled: !0
                    }),
                    P,
                    (0, t.jsx)(E.Z, {
                        variant: 'text',
                        text: Z.Z.Messages.SEND_DM,
                        icon: a.ChatIcon,
                        className: m.iconButton,
                        color: s()(a.Button.Colors.PRIMARY, m.color),
                        onClick: j
                    })
                ]
            });
        return g && null != M ? (0, t.jsxs)('div', {
            className: m.multipleButtons,
            children: [
                (0, t.jsx)(E.Z, {
                    variant: 'icon',
                    text: Z.Z.Messages.USER_PROFILE_ADD_FRIEND,
                    className: m.iconButton,
                    icon: a.UserPlusIcon,
                    color: s()(a.Button.Colors.PRIMARY, m.color),
                    onClick: () => {
                        R({ action: 'SEND_FRIEND_REQUEST' }), c.Z.addRelationship({
                            userId: o.id,
                            context: { location: p },
                            friendToken: v
                        });
                    }
                }),
                (0, t.jsx)(E.Z, {
                    variant: 'icon',
                    text: Z.Z.Messages.SEND_DM,
                    icon: a.ChatIcon,
                    className: m.iconButton,
                    color: s()(a.Button.Colors.PRIMARY, m.color),
                    onClick: j
                }),
                M
            ]
        }) : (0, t.jsxs)('div', {
            className: m.multipleButtons,
            children: [
                P,
                (0, t.jsx)(E.Z, {
                    variant: 'icon',
                    text: Z.Z.Messages.SEND_DM,
                    icon: a.ChatIcon,
                    className: m.iconButton,
                    color: s()(a.Button.Colors.PRIMARY, m.color),
                    onClick: j
                }),
                (0, t.jsx)(E.Z, {
                    variant: 'text',
                    text: Z.Z.Messages.USER_PROFILE_ADD_FRIEND,
                    icon: a.UserPlusIcon,
                    color: s()(a.Button.Colors.BRAND, m.color),
                    onClick: () => {
                        R({ action: 'SEND_FRIEND_REQUEST' }), c.Z.addRelationship({
                            userId: o.id,
                            context: { location: p },
                            friendToken: v
                        });
                    }
                })
            ]
        });
    }
    if (S === f.OGo.FRIEND || o.bot)
        return x ? (0, t.jsx)(E.Z, {
            variant: 'text',
            text: Z.Z.Messages.SEND_DM,
            color: s()(a.Button.Colors.PRIMARY, m.color),
            onClick: j
        }) : (0, t.jsx)(E.Z, {
            variant: 'text',
            text: Z.Z.Messages.SEND_MESSAGE,
            color: a.Button.Colors.GREEN,
            onClick: j
        });
    if (S === f.OGo.PENDING_OUTGOING)
        return (0, t.jsx)(E.Z, {
            variant: 'text',
            text: Z.Z.Messages.ADD_FRIEND_BUTTON_AFTER,
            color: a.Button.Colors.GREEN,
            disabled: !0
        });
    if (S === f.OGo.PENDING_INCOMING)
        return x ? (0, t.jsx)(E.Z, {
            variant: 'text',
            text: Z.Z.Messages.SEND_DM,
            color: s()(a.Button.Colors.PRIMARY, m.color),
            onClick: j
        }) : (0, t.jsxs)('div', {
            className: m.pendingIncoming,
            children: [
                (0, t.jsx)(E.Z, {
                    variant: 'text',
                    text: Z.Z.Messages.FRIEND_REQUEST_ACCEPT,
                    color: a.Button.Colors.GREEN,
                    onClick: () => {
                        R({ action: 'ACCEPT_FRIEND_REQUEST' }), c.Z.addRelationship({
                            userId: o.id,
                            context: { location: p },
                            friendToken: v
                        });
                    }
                }),
                (0, t.jsx)(E.Z, {
                    variant: 'text',
                    text: Z.Z.Messages.FRIEND_REQUEST_IGNORE,
                    color: a.Button.Colors.PRIMARY,
                    onClick: () => {
                        R({ action: 'IGNORE_FRIEND_REQUEST' }), c.Z.cancelFriendRequest(o.id, { location: p });
                    },
                    className: m.actionRightButton
                })
            ]
        });
    return (0, t.jsx)(E.Z, {
        variant: 'text',
        text: Z.Z.Messages.ADD_FRIEND_BUTTON,
        color: a.Button.Colors.GREEN,
        onClick: () => {
            R({ action: 'SEND_FRIEND_REQUEST' }), c.Z.addRelationship({
                userId: o.id,
                context: { location: p },
                friendToken: v
            });
        }
    });
}
