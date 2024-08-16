n.d(t, {
    Z: function () {
        return M;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(913527),
    u = n.n(c),
    d = n(481060),
    _ = n(595519),
    E = n(566620),
    I = n(403404),
    m = n(100527),
    T = n(906732),
    h = n(103575),
    N = n(768581),
    f = n(55935),
    C = n(739566),
    p = n(421399),
    g = n(310423),
    S = n(223021),
    A = n(981631),
    R = n(689938),
    x = n(438379);
function O(e) {
    let { width: t = 6, height: n = 10, color: a = 'currentColor', className: s, foreground: r } = e;
    return (0, i.jsx)('svg', {
        className: s,
        width: t,
        height: n,
        viewBox: '0 0 6 10',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: (0, i.jsx)('path', {
            d: 'M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z',
            className: r,
            fill: a
        })
    });
}
function M(e) {
    var t;
    let n;
    let { message: s, channel: l } = e,
        { analyticsLocations: c } = (0, T.ZP)(m.Z.EXECUTED_COMMAND),
        M = a.useMemo(
            () => (e, t, n) => (
                o()(null != l && null != t, 'ExecuteCommand: user and channel cannot be undefined'),
                (0, i.jsx)(h.Z, {
                    ...e,
                    location: 'ExecutedCommand',
                    channelId: l.id,
                    messageId: s.id,
                    guildId: l.guild_id,
                    userId: t.id,
                    newAnalyticsLocations: n
                })
            ),
            [l, s.id]
        ),
        v = a.useMemo(
            () => (e) => (
                o()(null != l, 'ExecutedCommand: channel cannot be null'),
                (0, i.jsx)(g.Z, {
                    ...e,
                    channel: l,
                    messageId: s.id,
                    interactionData: s.interactionData
                })
            ),
            [l, s.id, s.interactionData]
        ),
        L = (0, C.Sw)(null === (t = s.interaction) || void 0 === t ? void 0 : t.user, l),
        Z = a.useMemo(() => (e.compact ? (0, S.Z)((0, f.vc)(u()(), 'LT')) : null), [e.compact]),
        P = (0, _.NX)(l.id, !0),
        b = s.interaction;
    if (null == b || null == L) return null;
    let D = () => {
        let t = (function (e, t) {
                let n,
                    { message: a, compact: s, channel: l, isInteractionUserBlocked: o, showAvatarPopout: c, onClickAvatar: u, onUserContextMenu: _, onPopoutRequestClose: E } = e;
                if ((s && null == a.activityInstance) || o)
                    return (0, i.jsx)('div', {
                        className: x.replyBadge,
                        children: (0, i.jsx)(O, { className: x.commandIcon })
                    });
                if (null != a.interaction) {
                    var I, m, T;
                    let e = (0, C.ij)(a.interaction.user, l);
                    n =
                        null !==
                            (T = N.ZP.getGuildMemberAvatarURL({
                                avatar: null !== (I = e.guildMemberAvatar) && void 0 !== I ? I : void 0,
                                userId: a.interaction.user.id,
                                guildId: null !== (m = null == l ? void 0 : l.guild_id) && void 0 !== m ? m : ''
                            })) && void 0 !== T
                            ? T
                            : void 0;
                }
                let h = () =>
                    null != a.interaction &&
                    (function (e) {
                        let { user: t, guildId: n, guildAvatar: a, onClick: s, onContextMenu: l, onMouseDown: o } = e;
                        return (0, i.jsx)('img', {
                            alt: '',
                            src: null != a ? a : t.getAvatarURL(n, 16),
                            onClick: s,
                            onContextMenu: l,
                            onMouseDown: o,
                            className: r()({
                                [x.executedCommandAvatar]: !0,
                                [x.clickable]: null != s
                            })
                        });
                    })({
                        user: a.interaction.user,
                        guildId: l.guild_id,
                        guildAvatar: n,
                        onClick: u,
                        onContextMenu: _
                    });
                return null != t && null != c
                    ? (0, i.jsx)(d.Popout, {
                          renderPopout: t,
                          shouldShow: c,
                          position: 'right',
                          onRequestClose: E,
                          children: h
                      })
                    : h();
            })(e, (e) => M(e, b.user, [m.Z.AVATAR])),
            n = (function (e, t, n) {
                var a;
                let { message: s, channel: r, showUsernamePopout: l, onClickUsername: o, onUserContextMenu: c, onPopoutRequestClose: u } = e;
                return (0, i.jsx)(p.Z, {
                    compact: !0,
                    author: t,
                    message: s,
                    channel: r,
                    userOverride: null === (a = s.interaction) || void 0 === a ? void 0 : a.user,
                    showPopout: l,
                    renderPopout: n,
                    onClick: o,
                    onContextMenu: c,
                    onPopoutRequestClose: u
                });
            })(e, L, (e) => M(e, b.user));
        return (0, i.jsxs)(
            a.Fragment,
            {
                children: [t, n]
            },
            'user'
        );
    };
    if ((null == s ? void 0 : s.activityInstance) !== null) {
        let e = () => {
            (0, I.Z)({
                channel: l,
                guildId: l.guild_id,
                locationObject: {
                    page: l.isPrivate() ? A.ZY5.DM_CHANNEL : A.ZY5.GUILD_CHANNEL,
                    section: A.jXE.CHANNEL_TEXT_AREA,
                    object: A.qAy.APP_COMMAND,
                    objectType: A.Qqv.ACTIVITY
                },
                openInPopout: !1,
                enableSelectedTextChannelInvite: !0,
                analyticsLocations: c
            }),
                (0, E.w1)({ guildId: l.guild_id });
        };
        n = P
            ? R.Z.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED.format({
                  userHook: D,
                  activityHook: () =>
                      (0, i.jsx)(d.Clickable, {
                          tag: 'span',
                          onClick: e,
                          children: (0, i.jsx)('div', {
                              className: r()(x.commandName, x.clickable),
                              children: R.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY
                          })
                      })
              })
            : R.Z.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED_CANNOT_LAUNCH.format({ userHook: D });
    } else
        n = R.Z.Messages.APPLICATION_COMMAND_USED_SHORT.format({
            userHook: D,
            commandHook: () => {
                let t = (function (e, t) {
                    let { showDataPopout: n, message: a, onClickCommand: s, onPopoutRequestClose: l } = e,
                        o = a.interaction.displayName;
                    return (0, i.jsx)(d.Popout, {
                        renderPopout: t,
                        shouldShow: n,
                        position: 'top',
                        align: 'center',
                        onRequestClose: l,
                        animation: d.Popout.Animation.FADE,
                        positionKey: null != a.interactionData ? 'ready' : 'loading',
                        children: (e) => {
                            let { onClick: t, ...n } = e;
                            return a.type === A.uaV.CHAT_INPUT_COMMAND || a.type === A.uaV.INTERACTION_PREMIUM_UPSELL
                                ? (0, i.jsx)(d.Clickable, {
                                      ...n,
                                      tag: 'span',
                                      onClick: s,
                                      children: (0, i.jsxs)('div', {
                                          className: r()(x.appLauncherOnboardingCommandName, x.clickable),
                                          children: [
                                              (0, i.jsx)(d.AppsIcon, {
                                                  size: 'custom',
                                                  color: 'currentColor',
                                                  height: 10,
                                                  width: 10,
                                                  className: x.appsIcon
                                              }),
                                              o
                                          ]
                                      })
                                  })
                                : (0, i.jsx)('div', {
                                      className: x.commandName,
                                      children: o
                                  });
                        }
                    });
                })(e, v);
                return (0, i.jsx)(a.Fragment, { children: t }, 'command');
            }
        });
    return (0, i.jsx)(T.Gt, {
        value: c,
        children: (0, i.jsx)('div', {
            className: r()(x.repliedMessage, x.executedCommand, Z),
            'aria-hidden': !e.compact,
            children: n
        })
    });
}
