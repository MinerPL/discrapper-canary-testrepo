n.d(t, {
    Z: function () {
        return M;
    }
});
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(512722), o = n.n(r), c = n(913527), d = n.n(c), u = n(481060), _ = n(867176), E = n(566620), m = n(403404), I = n(100527), T = n(906732), h = n(739566), N = n(223021), f = n(103575), p = n(768581), C = n(55935), g = n(671219), S = n(750858), A = n(981631), x = n(689938), O = n(250050);
function R(e) {
    let {
        width: t = 6,
        height: n = 10,
        color: a = 'currentColor',
        className: s,
        foreground: l
    } = e;
    return (0, i.jsx)('svg', {
        className: s,
        width: t,
        height: n,
        viewBox: '0 0 6 10',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: (0, i.jsx)('path', {
            d: 'M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z',
            className: l,
            fill: a
        })
    });
}
function M(e) {
    var t;
    let n;
    let {
            message: s,
            channel: r
        } = e, {analyticsLocations: c} = (0, T.ZP)(I.Z.EXECUTED_COMMAND), M = a.useMemo(() => (e, t, n) => (o()(null != r && null != t, 'ExecuteCommand: user and channel cannot be undefined'), (0, i.jsx)(f.Z, {
            ...e,
            location: 'ExecutedCommand',
            channelId: r.id,
            messageId: s.id,
            guildId: r.guild_id,
            userId: t.id,
            newAnalyticsLocations: n
        })), [
            r,
            s.id
        ]), v = a.useMemo(() => e => (o()(null != r, 'ExecutedCommand: channel cannot be null'), (0, i.jsx)(g.Z, {
            ...e,
            channel: r,
            messageId: s.id,
            interactionData: s.interactionData
        })), [
            r,
            s.id,
            s.interactionData
        ]), L = (0, h.Sw)(null === (t = s.interaction) || void 0 === t ? void 0 : t.user, r), Z = a.useMemo(() => e.compact ? (0, N.Z)((0, C.vc)(d()(), 'LT')) : null, [e.compact]), P = (0, _.NX)(r.id, !0, 'ExecutedCommand'), b = s.interaction;
    if (null == b || null == L)
        return null;
    let D = () => {
        let t = function (e, t) {
                let n, {
                        message: a,
                        compact: s,
                        channel: r,
                        isInteractionUserBlocked: o,
                        showAvatarPopout: c,
                        onClickAvatar: d,
                        onUserContextMenu: _,
                        onPopoutRequestClose: E
                    } = e;
                if (s && null == a.activityInstance || o)
                    return (0, i.jsx)('div', {
                        className: O.replyBadge,
                        children: (0, i.jsx)(R, { className: O.commandIcon })
                    });
                if (null != a.interaction) {
                    var m, I, T;
                    let e = (0, h.ij)(a.interaction.user, r);
                    n = null !== (T = p.ZP.getGuildMemberAvatarURL({
                        avatar: null !== (m = e.guildMemberAvatar) && void 0 !== m ? m : void 0,
                        userId: a.interaction.user.id,
                        guildId: null !== (I = null == r ? void 0 : r.guild_id) && void 0 !== I ? I : ''
                    })) && void 0 !== T ? T : void 0;
                }
                let N = () => null != a.interaction && function (e) {
                    let {
                        user: t,
                        guildId: n,
                        guildAvatar: a,
                        onClick: s,
                        onContextMenu: r,
                        onMouseDown: o
                    } = e;
                    return (0, i.jsx)('img', {
                        alt: '',
                        src: null != a ? a : t.getAvatarURL(n, 16),
                        onClick: s,
                        onContextMenu: r,
                        onMouseDown: o,
                        className: l()({
                            [O.executedCommandAvatar]: !0,
                            [O.clickable]: null != s
                        })
                    });
                }({
                    user: a.interaction.user,
                    guildId: r.guild_id,
                    guildAvatar: n,
                    onClick: d,
                    onContextMenu: _
                });
                return null != t && null != c ? (0, i.jsx)(u.Popout, {
                    renderPopout: t,
                    shouldShow: c,
                    position: 'right',
                    onRequestClose: E,
                    children: N
                }) : N();
            }(e, e => M(e, b.user, [I.Z.AVATAR])), n = function (e, t, n) {
                var a;
                let {
                    message: s,
                    channel: l,
                    showUsernamePopout: r,
                    onClickUsername: o,
                    onUserContextMenu: c,
                    onPopoutRequestClose: d
                } = e;
                return (0, i.jsx)(S.Z, {
                    compact: !0,
                    author: t,
                    message: s,
                    channel: l,
                    userOverride: null === (a = s.interaction) || void 0 === a ? void 0 : a.user,
                    showPopout: r,
                    renderPopout: n,
                    onClick: o,
                    onContextMenu: c,
                    onPopoutRequestClose: d
                });
            }(e, L, e => M(e, b.user));
        return (0, i.jsxs)(a.Fragment, {
            children: [
                t,
                n
            ]
        }, 'user');
    };
    if ((null == s ? void 0 : s.activityInstance) !== null) {
        let e = () => {
            (0, m.Z)({
                channel: r,
                guildId: r.guild_id,
                locationObject: {
                    page: r.isPrivate() ? A.ZY5.DM_CHANNEL : A.ZY5.GUILD_CHANNEL,
                    section: A.jXE.CHANNEL_TEXT_AREA,
                    object: A.qAy.APP_COMMAND,
                    objectType: A.Qqv.ACTIVITY
                },
                openInPopout: !1,
                enableSelectedTextChannelInvite: !0,
                analyticsLocations: c
            }), (0, E.w1)({ guildId: r.guild_id });
        };
        n = P ? x.Z.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED.format({
            userHook: D,
            activityHook: () => (0, i.jsx)(u.Clickable, {
                tag: 'span',
                onClick: e,
                children: (0, i.jsx)('div', {
                    className: l()(O.commandName, O.clickable),
                    children: x.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY
                })
            })
        }) : x.Z.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED_CANNOT_LAUNCH.format({ userHook: D });
    } else
        n = x.Z.Messages.APPLICATION_COMMAND_USED_SHORT.format({
            userHook: D,
            commandHook: () => {
                let t = function (e, t) {
                    let {
                            showDataPopout: n,
                            message: a,
                            onClickCommand: s,
                            onPopoutRequestClose: r
                        } = e, o = a.interaction.displayName;
                    return (0, i.jsx)(u.Popout, {
                        renderPopout: t,
                        shouldShow: n,
                        position: 'top',
                        align: 'center',
                        onRequestClose: r,
                        animation: u.Popout.Animation.FADE,
                        positionKey: null != a.interactionData ? 'ready' : 'loading',
                        children: e => {
                            let {
                                onClick: t,
                                ...n
                            } = e;
                            return a.type === A.uaV.CHAT_INPUT_COMMAND || a.type === A.uaV.INTERACTION_PREMIUM_UPSELL ? (0, i.jsx)(u.Clickable, {
                                ...n,
                                tag: 'span',
                                onClick: s,
                                children: (0, i.jsxs)('div', {
                                    className: l()(O.appLauncherOnboardingCommandName, O.clickable),
                                    children: [
                                        (0, i.jsx)(u.AppsIcon, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            height: 10,
                                            width: 10,
                                            className: O.appsIcon
                                        }),
                                        o
                                    ]
                                })
                            }) : (0, i.jsx)('div', {
                                className: O.commandName,
                                children: o
                            });
                        }
                    });
                }(e, v);
                return (0, i.jsx)(a.Fragment, { children: t }, 'command');
            }
        });
    return (0, i.jsx)(T.Gt, {
        value: c,
        children: (0, i.jsx)('div', {
            className: l()(O.repliedMessage, O.executedCommand, Z),
            'aria-hidden': !e.compact,
            children: n
        })
    });
}
