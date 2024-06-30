var i = n(735250), a = n(470079), l = n(873546), s = n(442837), r = n(481060), o = n(194359), c = n(333984), u = n(486622), d = n(922409), h = n(86203), p = n(6025), m = n(621853), _ = n(171368), f = n(433355), E = n(699516), C = n(594174), g = n(806519), I = n(768581), x = n(525541), T = n(981631), N = n(377668), v = n(228168), S = n(689938), Z = n(713049);
let A = e => {
        let {
                userId: t,
                channelId: n
            } = e, l = (0, s.e7)([m.Z], () => m.Z.getMutualGuilds(t), [t]), o = a.useMemo(() => null != l ? l.slice(0, 3).map((e, t) => {
                let {guild: n} = e, a = null != n ? I.ZP.getGuildIconURL({
                        id: n.id,
                        icon: n.icon,
                        size: 24
                    }) : null;
                if (null == a)
                    return null;
                let s = t === (l.length > 3 ? 3 : l.length) - 1, r = (0, i.jsx)('img', {
                        src: a,
                        alt: '',
                        className: Z.avatar
                    }, t);
                return s ? r : (0, i.jsx)(g.ZP, {
                    className: Z.avatarMask,
                    mask: g.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                    width: 24,
                    height: 24,
                    children: r
                }, t);
            }).filter(e => null != e) : [], [l]);
        return null == l || 0 === l.length ? (0, i.jsx)(r.Text, {
            color: 'header-secondary',
            variant: 'text-sm/normal',
            children: S.Z.Messages.NO_MUTUAL_GUILDS
        }) : (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: Z.avatarContainer,
                    children: o
                }),
                (0, i.jsx)(r.Clickable, {
                    onClick: () => {
                        (0, _.openUserProfileModal)({
                            userId: t,
                            channelId: n,
                            section: v.oh.MUTUAL_GUILDS,
                            analyticsLocation: { section: T.jXE.DIRECT_MESSAGE }
                        });
                    },
                    children: (0, i.jsx)(r.Text, {
                        className: Z.mutualGuilds,
                        variant: 'text-sm/normal',
                        children: S.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({ count: l.length })
                    })
                })
            ]
        });
    }, M = e => {
        var t;
        let {
                relationshipType: n,
                userId: a,
                showingBanner: l
            } = e, s = null === (t = C.default.getUser(a)) || void 0 === t ? void 0 : t.bot, c = () => {
                o.Z.addRelationship({
                    userId: a,
                    context: { location: T.ZY5.DM_CHANNEL }
                });
            }, u = (0, i.jsx)(r.Button, {
                className: Z.action,
                size: r.Button.Sizes.TINY,
                color: r.Button.Colors.PRIMARY,
                onClick: () => {
                    o.Z.addRelationship({
                        userId: a,
                        context: { location: T.ZY5.DM_CHANNEL },
                        type: T.OGo.BLOCKED
                    });
                },
                children: S.Z.Messages.BLOCK
            });
        switch (n) {
        case T.OGo.NONE:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    !s && !l && (0, i.jsx)(r.Button, {
                        className: Z.action,
                        size: r.Button.Sizes.TINY,
                        onClick: c,
                        children: S.Z.Messages.ADD_FRIEND
                    }),
                    u
                ]
            });
        case T.OGo.FRIEND:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(r.Button, {
                        className: Z.action,
                        size: r.Button.Sizes.TINY,
                        onClick: () => {
                            o.Z.removeFriend(a, { location: T.ZY5.DM_CHANNEL });
                        },
                        color: r.Button.Colors.PRIMARY,
                        children: S.Z.Messages.REMOVE_FRIEND
                    }),
                    u
                ]
            });
        case T.OGo.BLOCKED:
            return (0, i.jsx)(r.Button, {
                className: Z.action,
                size: r.Button.Sizes.TINY,
                onClick: () => {
                    o.Z.unblockUser(a, { location: T.ZY5.DM_CHANNEL });
                },
                color: r.Button.Colors.PRIMARY,
                children: S.Z.Messages.UNBLOCK
            });
        case T.OGo.PENDING_INCOMING:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(r.Text, {
                        className: Z.action,
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: S.Z.Messages.FRIEND_REQUEST_RECEIVED
                    }),
                    (0, i.jsx)(r.Button, {
                        className: Z.action,
                        size: r.Button.Sizes.TINY,
                        onClick: c,
                        children: S.Z.Messages.FRIEND_REQUEST_ACCEPT
                    }),
                    (0, i.jsx)(r.Button, {
                        className: Z.action,
                        size: r.Button.Sizes.TINY,
                        color: r.Button.Colors.PRIMARY,
                        onClick: () => {
                            o.Z.cancelFriendRequest(a, { location: T.ZY5.DM_CHANNEL });
                        },
                        children: S.Z.Messages.FRIEND_REQUEST_IGNORE
                    }),
                    u
                ]
            });
        case T.OGo.PENDING_OUTGOING:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(r.Button, {
                        className: Z.action,
                        size: r.Button.Sizes.TINY,
                        disabled: !0,
                        children: S.Z.Messages.ADD_FRIEND_BUTTON_AFTER
                    }),
                    u
                ]
            });
        default:
            return null;
        }
    }, b = e => {
        let {
                channelId: t,
                otherUserId: n
            } = e, l = a.useCallback(() => {
                (0, r.showToast)((0, r.createToast)(S.Z.Messages.MESSAGE_REQUESTS_SPAM_REQUEST_ERROR_ALERT_TITLE, r.ToastType.FAILURE));
            }, []), s = a.useCallback(() => {
                p.Z.closeChannelSidebar(f.uZ);
            }, []), o = a.useCallback(() => {
                p.Z.closeChannelSidebar(f.uZ);
            }, []), {
                acceptMessageRequest: c,
                rejectMessageRequest: d,
                isAcceptLoading: h,
                isRejectLoading: m,
                isOptimisticAccepted: _,
                isOptimisticRejected: E
            } = (0, u.m)({
                user: C.default.getUser(n),
                onError: l,
                onAcceptSuccess: o,
                onRejectSuccess: s
            }), g = h || m || _ || E;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(r.Button, {
                    className: Z.action,
                    size: r.Button.Sizes.TINY,
                    onClick: () => c(t),
                    disabled: g,
                    submitting: h,
                    children: S.Z.Messages.MESSAGE_REQUEST_ACCEPT
                }),
                (0, i.jsx)(r.Button, {
                    className: Z.action,
                    size: r.Button.Sizes.TINY,
                    onClick: () => d(t),
                    color: r.Button.Colors.PRIMARY,
                    disabled: g,
                    submitting: m,
                    children: S.Z.Messages.MESSAGE_REQUEST_IGNORE
                })
            ]
        });
    };
t.Z = e => {
    let {
            userId: t,
            channel: n,
            showingBanner: a
        } = e, {channelId: r} = (0, d._)(), o = (0, s.e7)([c.Z], () => null != r && c.Z.isSpam(r), [r]), u = (0, s.e7)([E.Z], () => E.Z.getRelationshipType(t), [t]), p = n.id === r;
    return t === N.fL ? null : o || p ? (0, i.jsxs)('div', {
        className: Z.mobileContainer,
        children: [
            (0, i.jsx)('div', {
                className: Z.mobileMutualGuilds,
                children: (0, i.jsx)(A, {
                    userId: t,
                    channelId: n.id
                })
            }),
            (0, i.jsxs)('div', {
                className: Z.mobileButtons,
                children: [
                    (0, i.jsx)(b, {
                        channelId: n.id,
                        otherUserId: t
                    }),
                    (0, i.jsx)(h.Z, { channel: n })
                ]
            })
        ]
    }) : !0 === l.tq || p ? (0, i.jsxs)('div', {
        className: Z.mobileContainer,
        children: [
            (0, i.jsx)('div', {
                className: Z.mobileMutualGuilds,
                children: (0, i.jsx)(A, {
                    userId: t,
                    channelId: n.id
                })
            }),
            (0, i.jsxs)('div', {
                className: Z.mobileButtons,
                children: [
                    (0, i.jsx)(M, {
                        relationshipType: u,
                        userId: t,
                        showingBanner: a
                    }),
                    !a && (0, i.jsx)(x.Z, {
                        otherUserId: t,
                        channel: n,
                        navigateAwayOnReportSuccess: !1
                    })
                ]
            })
        ]
    }) : (0, i.jsxs)('div', {
        className: Z.container,
        children: [
            (0, i.jsx)(A, {
                userId: t,
                channelId: n.id
            }),
            (0, i.jsx)('div', { className: Z.divider }),
            (0, i.jsx)(M, {
                relationshipType: u,
                userId: t,
                showingBanner: a
            }),
            !a && (0, i.jsx)(x.Z, {
                otherUserId: t,
                channel: n
            })
        ]
    });
};
