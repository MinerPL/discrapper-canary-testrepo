n.d(t, {
    Z: function () {
        return Y;
    }
});
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(913527), o = n.n(r), c = n(722770), d = n(320285), u = n(688813), _ = n(442837), E = n(692547), m = n(481060), I = n(256638), T = n(528011), h = n(666657), N = n(533244), f = n(825829), p = n(226192), C = n(36459), g = n(434404), S = n(348238), A = n(103575), x = n(204197), O = n(592125), R = n(271383), M = n(594174), v = n(467679), L = n(778947), Z = n(702346), P = n(787374), b = n(981631), D = n(674563), j = n(689938), U = n(923255);
function y() {
    return (0, i.jsx)('div', { className: U.dot });
}
function B(e) {
    let {
            message: t,
            compact: n
        } = e, {notificationType: a} = (0, f.FL)(t);
    switch (a) {
    case f.nj:
    case d.p.RAID:
        return (0, i.jsx)(w, {
            message: t,
            compact: n
        });
    case d.p.MENTION_RAID:
        return (0, i.jsx)(V, {
            message: t,
            compact: n
        });
    case d.p.ACTIVITY_ALERTS_ENABLED:
        return (0, i.jsx)(F, {
            message: t,
            compact: n
        });
    case d.p.INTERACTION_BLOCKED:
        return (0, i.jsx)(G, { compact: n });
    default:
        return (0, i.jsx)(k, { compact: n });
    }
}
function k(e) {
    let {compact: t} = e;
    return (0, i.jsx)(H, {
        compact: t,
        header: (0, i.jsxs)(a.Fragment, {
            children: [
                (0, i.jsx)(m.CircleExclamationPointIcon, {
                    size: 'xs',
                    color: E.Z.colors.HEADER_SECONDARY.css
                }),
                (0, i.jsx)(m.Text, {
                    variant: 'text-md/semibold',
                    color: 'header-secondary',
                    children: j.Z.Messages.GUILD_AUTOMOD_NOTFICATION_UNSUPPORTED_TITLE
                })
            ]
        }),
        content: (0, i.jsx)(m.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: j.Z.Messages.GUILD_AUTOMOD_NOTFICATION_UNSUPPORTED_DESCRIPTION
        })
    });
}
function G(e) {
    let {compact: t} = e;
    return (0, i.jsx)(H, {
        compact: t,
        header: (0, i.jsxs)(a.Fragment, {
            children: [
                (0, i.jsx)(m.CircleExclamationPointIcon, {
                    size: 'xs',
                    color: E.Z.colors.HEADER_SECONDARY.css
                }),
                (0, i.jsx)(m.Text, {
                    variant: 'text-md/semibold',
                    color: 'header-secondary',
                    children: j.Z.Messages.GUILD_AUTOMOD_NOTFICATION_APP_INTERACTION_BLOCKED_TITLE
                })
            ]
        }),
        content: (0, i.jsx)(m.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: j.Z.Messages.GUILD_AUTOMOD_NOTFICATION_APP_INTERACTION_BLOCKED_DESCRIPTION
        })
    });
}
function F(e) {
    var t;
    let {
            message: n,
            compact: s
        } = e, l = M.default.getUser((0, f.Sw)(n)), r = null === (t = O.Z.getBasicChannel(n.channel_id)) || void 0 === t ? void 0 : t.guild_id, c = null != r && null != l ? R.ZP.getMember(r, l.id) : null, {
            avatarSrc: d,
            avatarDecorationSrc: u,
            eventHandlers: _
        } = (0, x.Z)({
            user: l,
            guildId: r,
            size: 12
        });
    return (0, i.jsx)(H, {
        compact: s,
        header: (0, i.jsxs)(a.Fragment, {
            children: [
                (0, i.jsx)(m.SettingsInfoIcon, {
                    size: 'xs',
                    color: E.Z.colors.TEXT_POSITIVE.css
                }),
                (0, i.jsx)(m.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-positive',
                    children: j.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_TITLE
                })
            ]
        }),
        subheader: (0, i.jsxs)('div', {
            className: U.dotSeparatedRow,
            children: [
                (0, i.jsx)('div', {
                    className: U.alertsEnabledSubHeader,
                    children: null != c && null != l && (0, i.jsxs)(a.Fragment, {
                        children: [
                            (0, i.jsx)(m.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-normal',
                                children: j.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_BY_PREFIX
                            }),
                            (0, i.jsx)(m.Popout, {
                                renderPopout: function (e) {
                                    return null == l ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsx)(A.Z, {
                                        ...e,
                                        location: 'AutomodNotification',
                                        userId: l.id,
                                        user: l,
                                        guildId: r,
                                        channelId: n.channel_id,
                                        messageId: n.id
                                    });
                                },
                                children: e => (0, i.jsxs)(m.Clickable, {
                                    className: U.alertsEnabledSubHeaderAvatarUsername,
                                    ...e,
                                    children: [
                                        (0, i.jsx)('div', {
                                            ..._,
                                            children: (0, i.jsx)(m.Avatar, {
                                                src: d,
                                                avatarDecoration: u,
                                                size: m.AvatarSizes.SIZE_16,
                                                'aria-label': 'TODO'
                                            })
                                        }),
                                        (0, i.jsxs)(m.Text, {
                                            variant: 'text-xs/medium',
                                            style: { color: null != c.colorString ? c.colorString : E.Z.colors.TEXT_NORMAL.css },
                                            children: [
                                                ' ',
                                                '@',
                                                l.username
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                (0, i.jsx)(y, {}),
                (0, i.jsx)(m.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: o()(n.timestamp).fromNow()
                })
            ]
        }),
        content: (0, i.jsx)(m.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: j.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_DESCRIPTION
        })
    });
}
function w(e) {
    var t;
    let {
            message: s,
            compact: l
        } = e, {
            joinAttempts: r,
            raidDatetime: d,
            dmsSent: I,
            raidType: C,
            resolvedReason: g
        } = (0, f.FL)(s), A = (0, _.e7)([O.Z], () => O.Z.getChannel(s.channel_id), [s.channel_id]), x = null !== (t = null == A ? void 0 : A.guild_id) && void 0 !== t ? t : null, {
            incidentData: R,
            shouldShowIncidentActions: M
        } = (0, T.mI)(x), v = (0, S.sR)(s.author.id, s.channel_id), L = a.useCallback(() => {
            let e = null == A ? void 0 : A.guild_id;
            null != e && (0, p.kW)(s.id, e);
        }, [
            s.id,
            A
        ]), Z = C === u.$.DM_RAID, P = Z ? m.CircleExclamationPointIcon : m.ChatAlertIcon;
    return (0, i.jsx)(H, {
        compact: l,
        header: (0, i.jsxs)(a.Fragment, {
            children: [
                (0, i.jsx)(P, {
                    size: 'xs',
                    color: E.Z.colors.TEXT_DANGER.css
                }),
                (0, i.jsx)(m.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-danger',
                    children: Z ? j.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_DM_RAID_TITLE : j.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_TITLE
                })
            ]
        }),
        subheader: (0, i.jsxs)('div', {
            className: U.dotSeparatedRow,
            children: [
                null != r && (0, i.jsx)(m.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: j.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_JOINS.format({ joinCount: r })
                }),
                null != I && (0, i.jsx)(m.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: j.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_DMS.format({ dmsSent: I })
                }),
                null != d && (0, i.jsxs)(a.Fragment, {
                    children: [
                        (0, i.jsx)(y, {}),
                        (0, i.jsx)(m.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-normal',
                            children: o()(d).fromNow()
                        })
                    ]
                })
            ]
        }),
        content: null != d ? (0, i.jsx)(m.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: j.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_ACTION_DESCRIPTION.format({ dateTime: d.toLocaleString(j.Z.getLocale(), N.pQ) })
        }) : null,
        footerButtons: (0, i.jsxs)('div', {
            className: U.dotSeparatedRow,
            children: [
                (0, i.jsx)(m.Button, {
                    onClick: e => {
                        if (null != x && M) {
                            let e = {
                                source: h.Zu.MESSAGE,
                                messageId: s.id,
                                alertType: (0, N.T1)(R)
                            };
                            (0, m.openModalLazy)(async () => {
                                let {default: t} = await n.e('58175').then(n.bind(n, 664452));
                                return n => (0, i.jsx)(t, {
                                    ...n,
                                    guildId: x,
                                    analyticsData: e
                                });
                            });
                        } else
                            v(e);
                    },
                    color: m.Button.Colors.LINK,
                    look: m.Button.Looks.LINK,
                    size: m.Button.Sizes.SMALL,
                    className: U.buttonStyle,
                    children: (0, i.jsx)('div', {
                        className: U.footerAction,
                        children: M ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(m.LockIcon, {
                                    size: 'xs',
                                    color: c.Z.BLUE_345,
                                    className: U.footerIcon
                                }),
                                (0, i.jsx)(m.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-link',
                                    children: j.Z.Messages.GUILD_ANTIRAID_NAGBAR_ACTION
                                })
                            ]
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(m.ShieldIcon, {
                                    size: 'xs',
                                    color: c.Z.BLUE_345,
                                    className: U.footerIcon
                                }),
                                (0, i.jsx)(m.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-link',
                                    children: j.Z.Messages.ACTIONS
                                })
                            ]
                        })
                    })
                }),
                (0, i.jsx)(y, {}),
                (0, i.jsx)(m.Button, {
                    onClick: L,
                    color: m.Button.Colors.LINK,
                    look: m.Button.Looks.LINK,
                    size: m.Button.Sizes.SMALL,
                    className: U.buttonStyle,
                    children: (0, i.jsx)('div', {
                        className: U.footerAction,
                        children: (0, i.jsx)(m.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-link',
                            children: (0, f.ge)(g)
                        })
                    })
                })
            ]
        })
    });
}
function V(e) {
    var t;
    let {
            message: n,
            compact: s
        } = e, l = null === (t = O.Z.getBasicChannel(n.channel_id)) || void 0 === t ? void 0 : t.guild_id, {
            raidDatetime: r,
            decisionId: c,
            suspiciousMentionActivityUntil: d
        } = (0, f.FL)(n);
    return (0, i.jsx)(H, {
        compact: s,
        header: (0, i.jsxs)(a.Fragment, {
            children: [
                (0, i.jsx)(m.CircleExclamationPointIcon, {
                    size: 'xs',
                    color: E.Z.colors.TEXT_DANGER.css
                }),
                (0, i.jsx)(m.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-danger',
                    children: j.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_MENTION_RAID_TITLE
                })
            ]
        }),
        subheader: (0, i.jsx)('div', {
            className: U.dotSeparatedRow,
            children: null != r && (0, i.jsx)(m.Text, {
                variant: 'text-xs/medium',
                color: 'text-normal',
                children: o()(r).fromNow()
            })
        }),
        content: (0, i.jsx)(m.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: j.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_MENTION_RAID_DESCRIPTION
        }),
        footerButtons: (0, i.jsxs)('div', {
            className: U.dotSeparatedRow,
            children: [
                (0, i.jsx)(m.Button, {
                    onClick: function () {
                        null != l && null != c && (0, C.UE)(l, c, () => {
                            (0, I.c)(d), (0, C.T9)(l);
                        });
                    },
                    color: m.Button.Colors.LINK,
                    look: m.Button.Looks.LINK,
                    size: m.Button.Sizes.SMALL,
                    className: U.buttonStyle,
                    children: (0, i.jsx)('div', {
                        className: U.footerAction,
                        children: (0, i.jsx)(m.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-link',
                            children: j.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_REMOVE_RESTRICTION
                        })
                    })
                }),
                (0, i.jsx)(y, {}),
                (0, i.jsx)(m.Button, {
                    onClick: function () {
                        null != l && g.Z.open(l, b.pNK.GUILD_AUTOMOD, void 0, b.KsC.AUTOMOD_MENTION_SPAM);
                    },
                    color: m.Button.Colors.LINK,
                    look: m.Button.Looks.LINK,
                    size: m.Button.Sizes.SMALL,
                    className: U.buttonStyle,
                    children: (0, i.jsx)('div', {
                        className: U.footerAction,
                        children: (0, i.jsx)(m.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-link',
                            children: j.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_CONFIGURE_SETTINGS
                        })
                    })
                })
            ]
        })
    });
}
function H(e) {
    let {
        compact: t,
        header: n,
        subheader: a,
        content: s,
        footerButtons: r
    } = e;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: l()(U.embedCard, { [U.compact]: t }),
            children: [
                (0, i.jsxs)('div', {
                    className: U.cardContent,
                    children: [
                        (0, i.jsxs)('div', {
                            className: U.cardHeaderContianer,
                            children: [
                                (0, i.jsx)('div', {
                                    className: U.cardHeader,
                                    children: n
                                }),
                                null != a && (0, i.jsx)('div', {
                                    className: U.subheader,
                                    children: a
                                })
                            ]
                        }),
                        s
                    ]
                }),
                null != r && (0, i.jsx)('div', {
                    className: l()(U.centeredRowContainer, U.cardFooter, { [U.compact]: t }),
                    children: r
                })
            ]
        })
    });
}
function Y(e) {
    let {
            id: t,
            compact: n,
            message: a,
            channel: s
        } = e, {
            avatarSrc: r,
            eventHandlers: {
                onMouseEnter: o,
                onMouseLeave: c
            }
        } = (0, P.m)(!0), {notificationType: u} = (0, f.FL)(a), _ = null == u || u === d.p.RAID;
    return (0, i.jsx)('div', {
        onMouseEnter: o,
        onMouseLeave: c,
        children: (0, i.jsx)(Z.Z, {
            className: l()(U.mainContainer, { [U.compact]: n }),
            iconNode: n ? null : (0, i.jsx)(P.S, { src: r }),
            iconContainerClassName: U.iconContainer,
            compact: n,
            children: (0, i.jsxs)('div', {
                className: l()(U.content, { [U.compact]: n }),
                children: [
                    (0, i.jsx)(L.nD, {
                        message: a,
                        messageClassname: U.spanCorrection,
                        className: l()(U.usernameContainer, U.spanCorrection, { [U.compact]: n }),
                        username: (0, i.jsxs)('div', {
                            className: U.spanCorrection,
                            children: [
                                (0, i.jsx)(m.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: U.username,
                                    children: j.Z.Messages.GUILD_AUTOMOD_USERNAME
                                }),
                                (0, i.jsx)(v.Z, {
                                    type: D.Hb.SYSTEM_DM,
                                    className: U.systemTag
                                }),
                                _ && (0, i.jsx)(m.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-primary',
                                    tag: 'span',
                                    className: U.spanCorrection,
                                    children: j.Z.Messages.GUILD_AUTOMOD_NOTFICATION_ALERT_TITLE
                                })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', { className: U.flexLineBreak }),
                    (0, i.jsx)(B, {
                        message: a,
                        compact: n
                    })
                ]
            })
        })
    });
}
