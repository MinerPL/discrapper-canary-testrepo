n.d(t, {
    Z: function () {
        return k;
    }
});
var i,
    a,
    s = n(735250),
    l = n(470079),
    r = n(120356),
    o = n.n(r),
    c = n(512722),
    d = n.n(c),
    u = n(913527),
    _ = n.n(u),
    E = n(481060),
    I = n(911969),
    m = n(595519),
    T = n(566620),
    N = n(403404),
    h = n(100527),
    C = n(906732),
    p = n(783097),
    f = n(581364),
    g = n(592180),
    A = n(347475),
    S = n(598077),
    M = n(768581),
    x = n(585483),
    O = n(55935),
    R = n(739566),
    v = n(421399),
    L = n(310423),
    Z = n(223021),
    P = n(981631),
    D = n(689938),
    b = n(825193);
function j(e) {
    let { width: t = 6, height: n = 10, color: i = 'currentColor', className: a, foreground: l } = e;
    return (0, s.jsx)('svg', {
        className: a,
        width: t,
        height: n,
        viewBox: '0 0 6 10',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: (0, s.jsx)('path', {
            d: 'M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z',
            className: l,
            fill: i
        })
    });
}
((i = a || (a = {}))[(i.InteractionUser = 0)] = 'InteractionUser'), (i[(i.InteractionTarget = 1)] = 'InteractionTarget');
function U(e, t, n, i, a) {
    var l, r, c;
    let { message: d, compact: u, channel: _, isInteractionUserBlocked: I, showAvatarPopout: m, showTargetAvatarPopout: T, onClickAvatar: N, onUserContextMenu: h, onClickTargetAvatar: C, onTargetUserContextMenu: p, onPopoutRequestClose: f } = e;
    if (u && 1 === n) return null;
    if ((u && null == d.activityInstance) || I)
        return (0, s.jsx)('div', {
            className: b.replyBadge,
            children: (0, s.jsx)(j, { className: b.commandIcon })
        });
    let g =
            null !==
                (c = M.ZP.getGuildMemberAvatarURL({
                    avatar: null !== (l = i.guildMemberAvatar) && void 0 !== l ? l : void 0,
                    userId: t.id,
                    guildId: null !== (r = null == _ ? void 0 : _.guild_id) && void 0 !== r ? r : ''
                })) && void 0 !== c
                ? c
                : void 0,
        A = () =>
            (function (e) {
                let { user: t, guildId: n, guildAvatar: i, onClick: a, onContextMenu: l, onMouseDown: r } = e;
                return (0, s.jsx)('img', {
                    alt: '',
                    src: null != i ? i : t.getAvatarURL(n, 16),
                    onClick: a,
                    onContextMenu: l,
                    onMouseDown: r,
                    className: o()({
                        [b.executedCommandAvatar]: !0,
                        [b.clickable]: null != a
                    })
                });
            })({
                user: t,
                guildId: _.guild_id,
                guildAvatar: g,
                onClick: 1 === n ? C : N,
                onContextMenu: 1 === n ? p : h
            }),
        S = 1 === n ? T : m;
    return null != a && null != S
        ? (0, s.jsx)(E.Popout, {
              renderPopout: a,
              shouldShow: S,
              position: 'right',
              onRequestClose: f,
              children: A
          })
        : A();
}
function y(e, t, n, i, a) {
    let { message: l, channel: r, showUsernamePopout: o, showTargetUsernamePopout: c, onClickUsername: d, onUserContextMenu: u, onClickTargetUsername: _, onTargetUserContextMenu: E, onPopoutRequestClose: I } = e;
    return (0, s.jsx)(v.Z, {
        className: 1 === n ? b.targetUsername : '',
        compact: !0,
        author: i,
        message: l,
        channel: r,
        userOverride: t,
        showPopout: 1 === n ? c : o,
        renderPopout: a,
        onClick: 1 === n ? _ : d,
        onContextMenu: 1 === n ? E : u,
        onPopoutRequestClose: I
    });
}
let B = () =>
    (0, s.jsx)(E.ChevronSmallRightIcon, {
        size: 'xxs',
        color: 'currentColor',
        className: b.executedCommandSeparator
    });
function k(e) {
    var t;
    let n;
    let { message: i, channel: a } = e,
        { analyticsLocations: r } = (0, C.ZP)(h.Z.EXECUTED_COMMAND),
        c = l.useMemo(
            () => (e, t, n) => (
                d()(null != a && null != t, 'ExecuteCommand: user and channel cannot be undefined'),
                (0, s.jsx)(A.Z, {
                    ...e,
                    channelId: a.id,
                    messageId: i.id,
                    guildId: a.guild_id,
                    userId: t.id,
                    newAnalyticsLocations: n
                })
            ),
            [a, i.id]
        ),
        u = l.useMemo(
            () => (e) => (
                d()(null != a, 'ExecutedCommand: channel cannot be null'),
                (0, s.jsx)(L.Z, {
                    ...e,
                    channel: a,
                    messageId: i.id,
                    interactionData: i.interactionData
                })
            ),
            [a, i.id, i.interactionData]
        ),
        M = (0, f.t0)(i),
        v = (null == M ? void 0 : M.type) === I.B8.APPLICATION_COMMAND && null != M.target_user ? new S.Z(M.target_user) : null,
        j = (null == M ? void 0 : M.type) === I.B8.APPLICATION_COMMAND && null != i.messageReference && null != e.renderTargetMessage,
        k = (0, R.Sw)(null === (t = i.interaction) || void 0 === t ? void 0 : t.user, a),
        G = (0, R.Sw)(v, a),
        F = l.useMemo(() => (e.compact ? (0, Z.Z)((0, O.vc)(_()(), 'LT')) : null), [e.compact]),
        w = (0, m.NX)(a.id),
        V = i.interaction;
    if (null == V || null == k) return null;
    let H = () => {
        let t = U(e, V.user, 0, k, (e) => c(e, V.user, [h.Z.AVATAR])),
            n = y(e, V.user, 0, k, (e) => c(e, V.user));
        return (0, s.jsxs)(
            l.Fragment,
            {
                children: [t, n]
            },
            'user'
        );
    };
    if ((null == i ? void 0 : i.activityInstance) === null || (0, g.g)(i))
        (n = D.Z.Messages.APPLICATION_COMMAND_USED_SHORT.format({
            userHook: H,
            commandHook: () => {
                let t = (function (e, t) {
                    let { showDataPopout: n, message: i, onClickCommand: a, onPopoutRequestClose: l } = e,
                        r = i.interaction.displayName;
                    return (0, s.jsx)(E.Popout, {
                        renderPopout: t,
                        shouldShow: n,
                        position: 'top',
                        align: 'center',
                        onRequestClose: l,
                        animation: E.Popout.Animation.FADE,
                        positionKey: null != i.interactionData ? 'ready' : 'loading',
                        children: (e) => {
                            let { onClick: t, ...n } = e;
                            if (i.type === P.uaV.CHAT_INPUT_COMMAND || i.type === P.uaV.INTERACTION_PREMIUM_UPSELL)
                                return (0, s.jsx)(E.Clickable, {
                                    ...n,
                                    tag: 'span',
                                    onClick: a,
                                    children: (0, s.jsxs)('div', {
                                        className: o()(b.appLauncherOnboardingCommandName, b.clickable),
                                        children: [
                                            (0, s.jsx)(E.AppsIcon, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                height: 10,
                                                width: 10,
                                                className: b.appsIcon
                                            }),
                                            r
                                        ]
                                    })
                                });
                            if (!(0, g.g)(i))
                                return (0, s.jsx)('div', {
                                    className: b.commandName,
                                    children: r
                                });
                            {
                                let e = (0, p.XZ)(r);
                                return (0, s.jsx)(E.Clickable, {
                                    ...n,
                                    tag: 'span',
                                    onClick: () => {
                                        x.S.dispatchToLastSubscribed(P.CkL.OPEN_APP_LAUNCHER, { applicationId: i.applicationId });
                                    },
                                    children: (0, s.jsxs)('div', {
                                        className: o()(b.appLauncherOnboardingCommandName, b.clickable),
                                        children: [
                                            (0, s.jsx)(E.AppsIcon, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                height: 10,
                                                width: 10,
                                                className: b.appsIcon
                                            }),
                                            e
                                        ]
                                    })
                                });
                            }
                        }
                    });
                })(e, u);
                return (0, s.jsx)(l.Fragment, { children: t }, 'command');
            }
        })),
            j && null != e.renderTargetMessage
                ? (n = (0, s.jsxs)(s.Fragment, {
                      children: [n, (0, s.jsx)(B, {}), e.renderTargetMessage()]
                  }))
                : null != v &&
                  (n = (0, s.jsxs)(s.Fragment, {
                      children: [
                          n,
                          (0, s.jsx)(B, {}),
                          (0, s.jsx)(() => {
                              if (null == v) return null;
                              let t = U(e, v, 1, G, (e) => c(e, v, [h.Z.AVATAR])),
                                  n = y(e, v, 1, G, (e) => c(e, v));
                              return (0, s.jsxs)(
                                  l.Fragment,
                                  {
                                      children: [t, n]
                                  },
                                  'target'
                              );
                          }, {})
                      ]
                  }));
    else {
        let e = () => {
            (0, N.Z)({
                channel: a,
                guildId: a.guild_id,
                locationObject: {
                    page: a.isPrivate() ? P.ZY5.DM_CHANNEL : P.ZY5.GUILD_CHANNEL,
                    section: P.jXE.CHANNEL_TEXT_AREA,
                    object: P.qAy.APP_COMMAND,
                    objectType: P.Qqv.ACTIVITY
                },
                openInPopout: !1,
                enableSelectedTextChannelInvite: !0,
                analyticsLocations: r
            }),
                (0, T.w1)({ guildId: a.guild_id });
        };
        n = w
            ? D.Z.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED.format({
                  userHook: H,
                  activityHook: () =>
                      (0, s.jsx)(E.Clickable, {
                          tag: 'span',
                          onClick: e,
                          children: (0, s.jsx)('div', {
                              className: o()(b.commandName, b.clickable),
                              children: D.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY
                          })
                      })
              })
            : D.Z.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED_CANNOT_LAUNCH.format({ userHook: H });
    }
    return (0, s.jsx)(C.Gt, {
        value: r,
        children: (0, s.jsx)('div', {
            className: o()(b.repliedMessage, b.messageSpine, b.executedCommand, F),
            'aria-hidden': !e.compact,
            children: n
        })
    });
}
