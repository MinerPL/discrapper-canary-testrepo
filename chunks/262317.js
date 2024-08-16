n.d(t, {
    XX: function () {
        return k;
    },
    ul: function () {
        return U;
    }
}),
    n(47120);
var i,
    a = n(735250),
    s = n(470079),
    l = n(120356),
    r = n.n(l),
    o = n(149765),
    c = n(846519),
    u = n(481060),
    d = n(475179),
    h = n(239091),
    m = n(287734),
    p = n(872810),
    _ = n(888651),
    f = n(100527),
    E = n(258609),
    g = n(257115),
    C = n(569545),
    I = n(382182),
    x = n(525925),
    T = n(701362),
    N = n(224184),
    v = n(184301),
    S = n(103575),
    Z = n(597998),
    A = n(314897),
    M = n(430824),
    b = n(496675),
    R = n(979651),
    j = n(981631),
    L = n(927923),
    P = n(70722),
    O = n(689938),
    y = n(884535);
function D(e, t, n) {
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
function k(e) {
    let { numUsers: t } = e;
    return (0, a.jsx)('div', {
        className: y.moreContainer,
        children: (0, a.jsxs)(u.Text, {
            color: 'text-muted',
            variant: 'text-sm/medium',
            children: ['+', t]
        })
    });
}
function U(e) {
    let { numAudience: t, collapsed: n } = e,
        i = n ? t : O.Z.Messages.LISTENING_COUNT.format({ count: t });
    return (0, a.jsxs)('div', {
        className: r()(y.audienceContainer, { [y.audienceContainerCollapsed]: n }),
        children: [
            (0, a.jsx)('div', {
                className: y.audienceIconContainer,
                children: (0, a.jsx)(u.HeadphonesIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: y.audienceIcon
                })
            }),
            (0, a.jsx)(u.Text, {
                color: 'text-muted',
                variant: 'text-sm/medium',
                children: i
            })
        ]
    });
}
class w extends (i = s.PureComponent) {
    get canWatchStream() {
        let { channel: e, isStreaming: t } = this.props;
        return t && (0, I.p9)(e, R.Z, M.Z, b.Z, E.Z)[0];
    }
    render() {
        let { userPopoutOpen: e } = this.state,
            { connectUserDragSource: t, canDrag: n, isSelfOnOtherClient: i, user: s, channel: l } = this.props,
            r = (0, a.jsx)('div', {
                className: y.draggable,
                'data-dnd-name': l.name,
                onMouseEnter: i ? void 0 : this.handleMouseEnter,
                onMouseLeave: i ? void 0 : this.handleHidePreview,
                children: (0, a.jsx)(u.Popout, {
                    preload: () =>
                        (0, v.Z)(s.id, s.getAvatarURL(l.guild_id, 80), {
                            guildId: l.guild_id,
                            channelId: l.id
                        }),
                    position: 'right',
                    renderPopout: this.renderUserPopout,
                    shouldShow: e,
                    onRequestClose: this.handleCloseUserPopout,
                    children: (e) => this.renderUser(e)
                })
            });
        return n ? t(r) : r;
    }
    constructor(...e) {
        super(...e),
            D(this, 'domElementRef', s.createRef()),
            D(this, 'state', {
                userPopoutOpen: !1,
                isHoveringHangStatus: !1
            }),
            D(
                this,
                'setIsHoveringHangStatusDelayed',
                new c.sW(500, () => {
                    this.setState({ isHoveringHangStatus: !0 });
                })
            ),
            D(this, 'handleClickUser', () => {
                this.setState({ userPopoutOpen: !this.state.userPopoutOpen });
            }),
            D(this, 'handleCloseUserPopout', () => {
                this.setState({ userPopoutOpen: !1 });
            }),
            D(this, 'handleHidePreview', () => {
                let { hidePreview: e, isStreaming: t, user: n, showHangStatus: i } = this.props;
                (t || i) && (null == e || e(n.id)), this.setState({ isHoveringHangStatus: !1 });
            }),
            D(this, 'handleMouseEnter', () => {
                let { user: e, showPreview: t, isStreaming: n, showHangStatus: i } = this.props;
                (n || i) && !this.state.userPopoutOpen && (null == t || t(e.id));
            }),
            D(this, 'handleHoverHangStatus', (e) => {
                let { previewIsOpen: t } = this.props;
                e && t ? this.setIsHoveringHangStatusDelayed.delay() : !e && this.setIsHoveringHangStatusDelayed.isDelayed() && this.setIsHoveringHangStatusDelayed.cancel();
            }),
            D(this, 'handleHoverIcons', (e) => {
                e && (this.setIsHoveringHangStatusDelayed.cancel(), this.setState({ isHoveringHangStatus: !1 }));
            }),
            D(this, 'handleWatchStream', () => {
                let { user: e, channel: t, isWatching: n, hidePreview: i } = this.props;
                if (!this.canWatchStream) return;
                let a = {
                    streamType: P.lo.GUILD,
                    ownerId: e.id,
                    channelId: t.id,
                    guildId: t.guild_id
                };
                A.default.getId() !== e.id && m.default.selectVoiceChannel(t.id), n ? ((0, x.Z)(a), d.Z.selectParticipant(a.channelId, (0, C.V9)(a))) : (0, p.iV)(a), null == i || i(e.id);
            }),
            D(this, 'handleJoinVoice', () => {
                let { user: e, channel: t, hidePreview: n } = this.props;
                b.Z.can(o.$e(j.Plq.CONNECT, j.Plq.VIEW_CHANNEL), t) && (m.default.selectVoiceChannel(t.id), null == n || n(e.id));
            }),
            D(this, 'handleUserContextMenu', (e) => {
                let { channel: t, user: i } = this.props;
                (0, h.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('70474'), n.e('12435'), n.e('46563')]).then(n.bind(n, 757387));
                    return (n) =>
                        (0, a.jsx)(e, {
                            ...n,
                            user: i,
                            guildId: t.guild_id,
                            channel: t,
                            showMediaItems: !0,
                            showStageChannelItems: t.isGuildStageVoice()
                        });
                });
            }),
            D(this, 'renderUserPopout', (e) => {
                let { channel: t, user: n } = this.props,
                    i = t.getGuildId();
                return (0, a.jsx)(S.Z, {
                    location: 'VoiceUser',
                    userId: n.id,
                    guildId: null != i ? i : void 0,
                    channelId: t.id,
                    newAnalyticsLocations: [f.Z.VOICE_USER],
                    ...e
                });
            }),
            D(this, 'renderStreamPopout', () => {
                let { user: e, channel: t, previewIsOpen: n, location: i } = this.props;
                return (0, a.jsx)(T.Z, {
                    user: e,
                    channel: t,
                    onWatch: this.handleWatchStream,
                    previewIsOpen: n,
                    location: i
                });
            }),
            D(this, 'renderHangStatusPopout', () => {
                let { hangStatusActivity: e, previewIsOpen: t, user: n, channel: i } = this.props;
                return (0, a.jsx)(N.Z, {
                    userId: n.id,
                    channel: i,
                    hangStatusActivity: e,
                    previewIsOpen: t
                });
            }),
            D(this, 'renderUser', (e) => {
                let { isSelfOnOtherClient: t, otherClientSessionType: n, voicePlatform: i, shouldShowPreview: s, mute: l, localMute: o, localVideoDisabled: c, speaking: d, disconnected: h, user: m, deaf: p, priority: _, collapsed: f, isStreaming: E, isGuest: C, nick: I, video: x, serverMute: T, serverDeaf: N, tabIndex: v, embeddedApplication: S, channel: A, hangStatusActivity: M, showHangStatus: b, isSelf: R, application: j } = this.props,
                    { userPopoutOpen: P, isHoveringHangStatus: D } = this.state,
                    k = L.al.has(null != n ? n : ''),
                    U = {
                        user: m,
                        speaking: d,
                        disconnected: h,
                        mute: l,
                        localMute: o,
                        localVideoDisabled: c,
                        isStreaming: E,
                        isGuest: C,
                        video: x,
                        priority: _,
                        deaf: p,
                        nick: I,
                        collapsed: f,
                        overlap: f,
                        serverMute: T,
                        serverDeaf: N,
                        tabIndex: v,
                        otherClientSessionType: n,
                        voicePlatform: i,
                        embeddedApplication: S,
                        avatarContainerClass: r()({ [y.userAvatar]: !0 }),
                        disabled: t && !k,
                        selected: P,
                        onClick: k ? void 0 : this.handleClickUser,
                        onDoubleClick: this.handleWatchStream,
                        onContextMenu: this.handleUserContextMenu,
                        guildId: A.guild_id,
                        hangStatusActivity: M,
                        showHangStatus: b,
                        isSelf: R,
                        application: j,
                        channelId: A.id
                    };
                if (t) {
                    var w;
                    return (0, a.jsx)(u.Tooltip, {
                        text: null !== (w = (0, g.Z)(n)) && void 0 !== w ? w : O.Z.Messages.CONNECTED_ON_ANOTHER_CLIENT,
                        children: (e) => {
                            let { onClick: t, onContextMenu: n, ...i } = e;
                            return (0, a.jsx)(Z.Z, {
                                ...U,
                                ...i
                            });
                        }
                    });
                }
                return (0, a.jsx)(u.Popout, {
                    position: 'right',
                    renderPopout: (b && D) || !E ? this.renderHangStatusPopout : this.renderStreamPopout,
                    shouldShow: s && !P,
                    onRequestClose: this.handleHidePreview,
                    spacing: 0,
                    children: () =>
                        (0, a.jsx)(Z.Z, {
                            ...U,
                            onMouseDown: e.onMouseDown,
                            onKeyDown: e.onKeyDown,
                            handleHoverHangStatus: this.handleHoverHangStatus,
                            handleHoverIcons: this.handleHoverIcons
                        })
                });
            });
    }
}
D(w, 'defaultProps', { isSelfOnOtherClient: !1 }), (t.ZP = (0, _.$)(w));
