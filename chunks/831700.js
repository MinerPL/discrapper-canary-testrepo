n.d(t, {
    Z: function () {
        return X;
    }
}),
    n(47120),
    n(411104);
var i = n(735250);
n(470079);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    s = n(846519),
    o = n(481060),
    c = n(475179),
    u = n(239091),
    d = n(146773),
    h = n(888651),
    p = n(619915),
    _ = n(339340),
    f = n(201895),
    g = n(718589),
    m = n(933557),
    C = n(557135),
    I = n(873696),
    E = n(446226),
    N = n(305325),
    x = n(281956),
    S = n(66999),
    v = n(554747),
    Z = n(506936),
    T = n(574176),
    L = n(359110),
    A = n(155409),
    b = n(695346),
    M = n(592125),
    R = n(430824),
    O = n(607744),
    P = n(496675),
    y = n(306680),
    j = n(9156),
    D = n(979651),
    w = n(934415),
    U = n(98597),
    G = n(648501),
    k = n(473403),
    B = n(830993),
    H = n(653577),
    V = n(207055),
    F = n(981631),
    W = n(647086),
    z = n(689938),
    Y = n(391463);
function K(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class q extends U.ZP {
    componentWillUnmount() {
        this.activitiesHideTimeout.stop();
    }
    getVoiceStatesCount() {
        var e;
        let { voiceStates: t } = this.props;
        return null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, w.rY)(e, D.Z, R.Z);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return Y.containerUserOver;
        if (null != t) return e > t ? Y.containerDragAfter : Y.containerDragBefore;
        return Y.containerDefault;
    }
    renderSubtitle() {
        var e;
        let { channel: t, connected: n, enableHangStatus: l, allowChannelTopic: r } = this.props,
            a = null === (e = (0, I.D)(this.props.subtitle)) || void 0 === e ? void 0 : e.subtitle,
            { hovered: s } = this.state;
        return (0, i.jsx)(H.Z, {
            onClick: this.handleVoiceStatusClick,
            channel: t,
            connected: n,
            subtitle: a,
            hovered: s,
            enableHangStatus: l,
            allowChannelTopic: r
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: r } = this.props;
        return (0, i.jsx)(V.Z, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: l,
            tabIndex: r,
            location: F.Sbl.GUILD_CHANNEL_LIST
        });
    }
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e
            ? null
            : (0, i.jsx)('div', {
                  className: Y.channelInfo,
                  children: e
              });
    }
    render() {
        let { channel: e, selected: t, connected: n, unread: l, resolvedUnreadSetting: a, mentionCount: s, locked: c, sorting: u, isUserOver: d, connectChannelDropTarget: h, connectChannelDragSource: p, connectUserDropTarget: _, connectDragPreview: m, canReorderChannel: C, canMoveMembers: I, showTutorial: E, hasActiveEvent: N, embeddedApps: x, isSubscriptionGated: S, isFavoriteSuggestion: v, withGuildIcon: Z } = this.props,
            { shouldShowActivities: T, shouldShowGuildVerificationPopout: L } = this.state,
            b = this.getVoiceStatesCount(),
            M = (0, i.jsxs)('li', {
                className: r()(this.getModeClass(), { [Y.disabled]: this.isDisabled() }),
                'data-dnd-name': e.name,
                children: [
                    (0, i.jsx)('div', {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, i.jsx)(o.Popout, {
                            position: 'right',
                            renderPopout: this.renderPopout,
                            spacing: 0,
                            onRequestClose: this.closeGuildVerificationPopout,
                            shouldShow: (T && !u && !d && !L) || L,
                            children: () =>
                                (0, i.jsx)(o.Tooltip, {
                                    text: this.getTooltipText(),
                                    children: (o) => {
                                        let { onClick: u, onContextMenu: d, ...h } = o;
                                        return (0, i.jsxs)(k.Z, {
                                            className: Y.iconVisibility,
                                            iconClassName: r()({ [Y.iconLive]: N }),
                                            channel: e,
                                            selected: !v && t,
                                            connected: n,
                                            unread: n ? l : void 0,
                                            resolvedUnreadSetting: a,
                                            mentionCount: s,
                                            locked: c,
                                            subtitle: this.renderSubtitle(),
                                            onClick: () => {
                                                this.handleClick(), null == u || u();
                                            },
                                            onContextMenu: (e) => {
                                                this.handleContextMenu(e), null == d || d();
                                            },
                                            connectDragPreview: m,
                                            isFavoriteSuggestion: v,
                                            'aria-label': (0, f.ZP)({
                                                channel: e,
                                                unread: l,
                                                mentionCount: s,
                                                userCount: b,
                                                embeddedActivitiesCount: x.length,
                                                isSubscriptionGated: S
                                            }),
                                            'aria-describedby': (0, g.Z)({
                                                channel: e,
                                                embeddedApps: x
                                            }),
                                            withGuildIcon: Z,
                                            ...h,
                                            children: [v && this.renderAcceptSuggestionButton(), v && this.renderRemoveSuggestionButton(), !v && this.renderOpenChatButton(), !v && this.renderInviteButton(), !v && this.renderEditButton(), !v && this.renderChannelInfo()]
                                        });
                                    }
                                })
                        })
                    }),
                    this.renderVoiceUsers()
                ]
            });
        return (
            I && (M = _(M)),
            C && (M = h(p(M))),
            E &&
                (M = (0, i.jsx)(A.Z, {
                    tutorialId: 'voice-conversations',
                    position: 'right',
                    offsetX: -20,
                    children: M
                })),
            M
        );
    }
    constructor(...e) {
        super(...e),
            K(this, 'state', {
                shouldShowActivities: !1,
                shouldShowGuildVerificationPopout: !1,
                hovered: !1
            }),
            K(this, 'activitiesHideTimeout', new s.V7()),
            K(this, 'closeGuildVerificationPopout', () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            K(this, 'handleVoiceConnect', () => {
                let { locked: e, connected: t, channel: n, unverifiedAccount: i, needSubscriptionToAccess: l } = this.props;
                i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                    C.Z.handleVoiceConnect({
                        channel: n,
                        connected: t,
                        needSubscriptionToAccess: l,
                        locked: e
                    });
            }),
            K(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    l = R.Z.getGuild(t.getGuildId());
                null != l &&
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331')]).then(n.bind(n, 213202));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                channel: t,
                                guild: l
                            });
                    });
            }),
            K(this, 'handleMouseEnter', () => {
                this.activitiesHideTimeout.stop(),
                    this.setState({
                        shouldShowActivities: !0,
                        hovered: !0
                    });
            }),
            K(this, 'handleMouseLeave', () => {
                this.activitiesHideTimeout.start(100, () =>
                    this.setState({
                        shouldShowActivities: !1,
                        hovered: !1
                    })
                );
            }),
            K(this, 'closePopout', () => {
                this.activitiesHideTimeout.stop(), this.setState({ shouldShowActivities: !1 });
            }),
            K(this, 'handleClick', () => {
                let { channel: e } = this.props,
                    t = e.getGuildId();
                null != t && (0, x.n)(t) && (0, N.hk)(t), this.handleVoiceConnect();
            }),
            K(this, 'handleVoiceStatusClick', (e) => {
                let { connected: t, channel: l } = this.props;
                t &&
                    (e.stopPropagation(),
                    (0, o.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 339340));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    channel: l,
                                    ...t
                                });
                        },
                        { modalKey: _.VOICE_CHANNEL_STATUS_MODAL_KEY }
                    ));
            }),
            K(this, 'renderPopout', () => {
                let { channel: e, voiceStates: t, sorting: n, isUserOver: l, selected: r, guild: a } = this.props,
                    { shouldShowActivities: s, shouldShowGuildVerificationPopout: o } = this.state;
                if (s && !n && !l && !o) {
                    let n = b.SE.getSetting().includes(a.id);
                    return (0, i.jsx)(B.Z, {
                        onAction: this.closePopout,
                        guild: a,
                        channel: e,
                        voiceStates: t,
                        isChannelSelected: r,
                        shouldShowSettingNudge: n
                    });
                }
                if (o)
                    return (0, i.jsx)(Z.Z, {
                        type: Z.R.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout
                    });
                throw Error('VoiceChannel.renderPopout: There must always be something to render');
            }),
            K(this, 'renderOpenChatButton', () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, i.jsx)(o.Tooltip, {
                        text: z.Z.Messages.OPEN_CHAT,
                        children: (t) => {
                            let { onMouseEnter: l, onMouseLeave: a, onFocus: s, onBlur: u } = t;
                            return (0, i.jsx)(o.Clickable, {
                                className: r()(Y.iconItem, n ? Y.alwaysShown : null),
                                onClick: () => {
                                    c.Z.updateChatOpen(e.id, !0), (0, L.Kh)(e.id);
                                },
                                'aria-label': z.Z.Messages.OPEN_CHAT,
                                onMouseEnter: l,
                                onMouseLeave: a,
                                onFocus: s,
                                onBlur: u,
                                children: (0, i.jsx)(o.ChatIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: Y.actionIcon
                                })
                            });
                        }
                    });
            }),
            K(this, 'getTooltipText', () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? z.Z.Messages.UNABLE_TO_JOIN_CHANNEL_FULL : null;
            });
    }
}
let Q = (0, d.B)((0, h.Q)(q));
function X(e) {
    let { guild: t, channel: n, disableSorting: l, isFavoriteCategory: r, selected: s, collapsed: o, voiceStates: c } = e,
        u = (0, a.cj)([y.ZP], () => ({
            unread: y.ZP.hasUnread(n.id),
            mentionCount: y.ZP.getMentionCount(n.id)
        })),
        d = (0, a.e7)([j.ZP], () => j.ZP.resolveUnreadSetting(n)),
        h = (0, a.cj)([M.Z, O.Z, P.Z], () => {
            let e = M.Z.getChannel(n.parent_id),
                i = O.Z.getCheck(n.guild_id);
            return {
                canManageChannel: P.Z.can(F.Plq.MANAGE_CHANNELS, n),
                canReorderChannel: !0 !== l && (t.id === W._ || (null != e ? P.Z.can(F.Plq.MANAGE_CHANNELS, e) : P.Z.can(F.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: P.Z.can(F.Plq.MOVE_MEMBERS, n),
                locked: !P.Z.can(F.Plq.CONNECT, n),
                bypassLimit: P.Z.can(F.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat
            };
        }),
        _ = (0, a.e7)([D.Z], () => D.Z.hasVideo(n.id)),
        f = (0, p.ZP)(n),
        g = (0, m.ZP)(n),
        C = (0, v.qY)(n.id),
        { isSubscriptionGated: I, needSubscriptionToAccess: N } = (0, S.Z)(n.id),
        x = (0, E.Z)(),
        Z = (0, a.e7)([j.ZP], () => j.ZP.isFavorite(t.id, n.id)),
        L = e.connected || (null == x ? void 0 : x.channelId) === n.id,
        { enableHangStatus: A, allowChannelTopic: b } = T.n.useExperiment(
            {
                guildId: n.guild_id,
                location: 'VoiceChannel'
            },
            { autoTrackExposure: !1 }
        ),
        R = (0, G.Z)({
            channel: n,
            isChannelSelected: s,
            isChannelCollapsed: o,
            voiceStates: c,
            isSubscriptionGated: I,
            needSubscriptionToAccess: N,
            enableConnectedUserLimit: !0,
            enableActivities: !0
        }),
        w = L && null == R;
    return (0, i.jsx)(Q, {
        channelName: g,
        embeddedApps: f,
        embeddedActivityType: F.IIU.PLAYING,
        video: _,
        hasActiveEvent: null != C,
        isSubscriptionGated: I,
        needSubscriptionToAccess: N,
        ...u,
        ...h,
        ...e,
        connected: L,
        isFavoriteSuggestion: r && !Z,
        forceShowButtons: w,
        channelInfo: R,
        enableHangStatus: A,
        allowChannelTopic: b,
        resolvedUnreadSetting: d
    });
}
