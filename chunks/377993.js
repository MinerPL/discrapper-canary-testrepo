n.d(t, {
    Z: function () {
        return w;
    }
}), n(47120), n(653041);
var i = n(735250), a = n(470079), l = n(873546), s = n(442837), r = n(481060), o = n(239091), c = n(144144), u = n(100527), d = n(906732), h = n(556084), p = n(280234), m = n(484459), _ = n(103575), f = n(158776), E = n(699516), C = n(111583), g = n(594174), I = n(467679), x = n(360048), T = n(151827), N = n(626135), v = n(768581), S = n(585483), Z = n(233870), A = n(51144), M = n(998502), b = n(276264), R = n(981631), j = n(689938), L = n(328000), P = n(279691);
let O = [], y = M.ZP.getEnableHardwareAcceleration();
function D(e) {
    let {
            user: t,
            channel: a,
            status: u,
            activities: d,
            lastOnlineTimestamp: h
        } = e, p = (0, s.e7)([C.Z], () => null != C.Z.getTypingUsers(a.id)[t.id]), I = (0, s.e7)([g.default], () => g.default.getCurrentUser()), x = (0, s.e7)([f.Z], () => f.Z.isMobileOnline(t.id)), T = (0, s.e7)([E.Z], () => E.Z.getNickname(t.id)), N = e => {
            (0, o.jW)(e, async () => {
                let {default: e} = await Promise.all([
                    n.e('79695'),
                    n.e('17400'),
                    n.e('60677'),
                    n.e('84979')
                ]).then(n.bind(n, 354589));
                return n => (0, i.jsx)(e, {
                    ...n,
                    user: t,
                    channel: a
                });
            });
        };
    return (0, i.jsx)(r.Popout, {
        preload: () => (0, m.W)(t, { channelId: a.id }),
        renderPopout: e => (0, i.jsx)(_.Z, {
            ...e,
            location: 'PrivateChannelRecipients',
            userId: t.id,
            channelId: a.id
        }),
        position: l.tq ? 'window_center' : 'left',
        spacing: 16,
        onShiftClick: () => {
            let e = '@'.concat(A.ZP.getUserTag(t, { decoration: 'never' })), n = '<@'.concat(t.id, '>');
            S.S.dispatchToLastSubscribed(R.CkL.INSERT_TEXT, {
                plainText: e,
                rawText: n
            }), c.Z.startTyping(a.id);
        },
        children: e => (0, i.jsx)(b.Z, {
            user: t,
            currentUser: I,
            isOwner: t.id === a.ownerId,
            ownerTooltipText: j.Z.Messages.GROUP_OWNER,
            shouldAnimateStatus: y,
            isTyping: p,
            status: u,
            activities: d,
            lastOnlineTimestamp: h,
            channel: a,
            onContextMenu: N,
            isMobile: x,
            nick: T,
            ...e
        }, t.id)
    });
}
function k(e) {
    var t;
    let {
            integration: s,
            channel: c
        } = e, u = a.useCallback(e => {
            (0, o.jW)(e, async () => {
                let {default: e} = await n.e('37969').then(n.bind(n, 496281));
                return t => (0, i.jsx)(e, {
                    ...t,
                    channel: c,
                    integration: s
                });
            });
        }, [
            s,
            c
        ]), d = s.application.bot, h = v.ZP.getApplicationIconURL({
            id: s.application.id,
            icon: s.application.icon,
            bot: null === (t = s.application) || void 0 === t ? void 0 : t.bot,
            botIconFirst: !0
        });
    return null != d ? (0, i.jsx)(r.Popout, {
        preload: () => (0, m.W)(d.id, h, { channelId: c.id }),
        renderPopout: e => (0, i.jsx)(_.Z, {
            ...e,
            location: 'PrivateChannelRecipients',
            userId: d.id,
            channelId: c.id
        }),
        position: l.tq ? 'window_center' : 'left',
        spacing: 16,
        children: e => (0, i.jsx)(x.Z, {
            onContextMenu: u,
            className: L.member,
            name: (0, i.jsx)('span', {
                className: L.username,
                children: s.application.name
            }),
            avatar: (0, i.jsx)(r.Avatar, {
                size: r.AvatarSizes.SIZE_32,
                src: h,
                'aria-label': s.application.name,
                statusTooltip: !0
            }),
            decorators: (0, i.jsx)(I.Z, {
                className: L.botTag,
                verified: null == d ? void 0 : d.isVerifiedBot()
            }),
            id: s.application.id,
            focusProps: {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: 4,
                    right: 4
                }
            },
            ...e
        })
    }) : null;
}
function U(e, t) {
    if (e.shouldTrackRecentlyOnlineExposure !== t.shouldTrackRecentlyOnlineExposure || e.listItems.length !== t.listItems.length)
        return !1;
    for (let n = 0; n < e.listItems.length; n++) {
        let i = e.listItems[n], a = t.listItems[n];
        if (i.user !== a.user || i.status !== a.status || i.activities !== a.activities || i.lastOnlineTimestamp !== a.lastOnlineTimestamp)
            return !1;
    }
    return !0;
}
function w(e) {
    let {channel: t} = e, l = g.default.getCurrentUser(), o = null == l ? void 0 : l.isStaff(), {analyticsLocations: c} = (0, d.ZP)(u.Z.MEMBER_LIST), {
            shouldTrackRecentlyOnlineExposure: _,
            listItems: C
        } = function (e) {
            let {isRecentlyOnlineEnabled: t} = p.Z.useExperiment({ location: 'n/a' }, { autoTrackExposure: !1 });
            return (0, s.e7)([
                E.Z,
                g.default,
                f.Z
            ], () => {
                let n = !1, i = (0, Z.T)(e.recipients, g.default), a = {};
                for (let e of i) {
                    var l, s, r;
                    if (E.Z.isFriend(e.id) || e.id === (null === (l = g.default.getCurrentUser()) || void 0 === l ? void 0 : l.id)) {
                        let t = f.Z.getLastOnlineTimestamp(e.id), {
                                isRecentlyOnlineShowable: i,
                                isRecentlyOnlineTrackable: l
                            } = (0, p.$)(t);
                        a[e.id] = {
                            status: null !== (s = f.Z.getStatus(e.id)) && void 0 !== s ? s : R.Skl.OFFLINE,
                            activities: null !== (r = f.Z.getActivities(e.id)) && void 0 !== r ? r : O,
                            lastOnlineTimestamp: i ? t : void 0
                        }, l && (n = !0);
                    } else
                        a[e.id] = {
                            status: R.Skl.OFFLINE,
                            activities: O
                        };
                }
                let o = [];
                for (let e of i) {
                    let t = {
                        user: e,
                        status: a[e.id].status,
                        activities: a[e.id].activities,
                        lastOnlineTimestamp: a[e.id].lastOnlineTimestamp
                    };
                    o.push(t);
                }
                if (!t)
                    return {
                        shouldTrackRecentlyOnlineExposure: n,
                        listItems: o
                    };
                let c = [
                        R.Skl.OFFLINE,
                        R.Skl.INVISIBLE,
                        null,
                        void 0
                    ], u = [], d = [], h = [];
                return o.forEach(e => {
                    c.includes(e.status) ? null != e.lastOnlineTimestamp ? d.push(e) : h.push(e) : u.push(e);
                }), {
                    shouldTrackRecentlyOnlineExposure: n,
                    listItems: [
                        ...u,
                        ...d,
                        ...h
                    ]
                };
            }, [
                e,
                t
            ], U);
        }(t);
    _ && p.Z.trackExposure({ location: 'private_channel_recipients' });
    let {
        installedIntegrations: v,
        applicationsShelf: S,
        fetched: A,
        appsInGDMEnabled: M,
        availableApplications: b
    } = (0, h.j)({ channelId: t.id });
    a.useEffect(() => {
        if (o)
            for (let e of C)
                (0, m.W)(e.user, {
                    dispatchWait: !0,
                    channelId: t.id
                });
    }, [
        o,
        C,
        t.id
    ]), a.useEffect(() => {
        N.default.track(R.rMx.MEMBER_LIST_VIEWED, {
            channel_id: t.id,
            channel_type: t.type,
            guild_id: t.guild_id
        });
    }, [
        t.guild_id,
        t.id,
        t.type
    ]);
    let y = o && C.every(e => e.user.isStaff());
    return (0, i.jsx)(d.Gt, {
        value: c,
        children: (0, i.jsx)('div', {
            className: P.membersWrap,
            children: (0, i.jsxs)(r.Scroller, {
                className: P.members,
                fade: !0,
                children: [
                    (0, i.jsxs)(T.Z, {
                        className: P.membersGroup,
                        children: [
                            ''.concat(j.Z.Messages.MEMBERS, '\u2014').concat(C.length, ' '),
                            y ? (0, i.jsx)(I.Z, {
                                className: P.__invalid_decorator,
                                type: I.Z.Types.STAFF_ONLY_DM
                            }) : null
                        ]
                    }),
                    C.map(e => (0, i.jsx)(D, {
                        user: e.user,
                        status: e.status,
                        activities: e.activities,
                        lastOnlineTimestamp: e.lastOnlineTimestamp,
                        channel: t
                    }, e.user.id)),
                    M && (v.length > 0 || A && S.length > 0) && (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(T.Z, {
                                className: P.membersGroup,
                                children: ''.concat(j.Z.Messages.APPS, '\u2014').concat(v.length)
                            }),
                            v.map(e => (0, i.jsx)(k, {
                                integration: e,
                                channel: t
                            }, e.application.id)),
                            b.length > 0 && (0, i.jsx)(x.Z, {
                                className: L.member,
                                onClick: () => {
                                    (0, r.openModalLazy)(async () => {
                                        let {default: e} = await n.e('4536').then(n.bind(n, 422677));
                                        return n => (0, i.jsx)(e, {
                                            ...n,
                                            channelId: t.id
                                        });
                                    });
                                },
                                avatar: (0, i.jsx)('div', {
                                    className: P.appIconWrapper,
                                    children: (0, i.jsx)(r.PlusSmallIcon, {
                                        size: 'sm',
                                        color: 'currentColor'
                                    })
                                }),
                                name: j.Z.Messages.PRIVATE_CHANNEL_ADD_APPS
                            })
                        ]
                    })
                ]
            })
        })
    });
}
