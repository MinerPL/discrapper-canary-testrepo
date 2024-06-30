n.d(t, {
    XX: function () {
        return k;
    },
    ul: function () {
        return U;
    }
}), n(47120);
var i, a = n(735250), l = n(470079), s = n(120356), r = n.n(s), o = n(149765), c = n(846519), u = n(481060), d = n(475179), h = n(239091), p = n(287734), m = n(872810), _ = n(888651), f = n(100527), E = n(258609), C = n(257115), g = n(569545), I = n(382182), x = n(525925), T = n(701362), N = n(224184), v = n(484459), S = n(103575), Z = n(314897), A = n(430824), M = n(496675), b = n(979651), R = n(805009), j = n(981631), L = n(927923), P = n(70722), O = n(689938), y = n(492787);
function D(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
function k(e) {
    let {numUsers: t} = e;
    return (0, a.jsx)('div', {
        className: y.moreContainer,
        children: (0, a.jsxs)(u.Text, {
            color: 'text-muted',
            variant: 'text-sm/medium',
            children: [
                '+',
                t
            ]
        })
    });
}
function U(e) {
    let {
            numAudience: t,
            collapsed: n
        } = e, i = n ? t : O.Z.Messages.LISTENING_COUNT.format({ count: t });
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
class w extends (i = l.PureComponent) {
    get canWatchStream() {
        let {
            channel: e,
            isStreaming: t
        } = this.props;
        return t && (0, I.p9)(e, b.Z, A.Z, M.Z, E.Z)[0];
    }
    render() {
        let {userPopoutOpen: e} = this.state, {
                connectUserDragSource: t,
                canDrag: n,
                isSelfOnOtherClient: i,
                user: l,
                channel: s
            } = this.props, r = (0, a.jsx)('div', {
                className: y.draggable,
                'data-dnd-name': s.name,
                onMouseEnter: i ? void 0 : this.handleMouseEnter,
                onMouseLeave: i ? void 0 : this.handleHidePreview,
                children: (0, a.jsx)(u.Popout, {
                    preload: () => (0, v.W)(l.id, l.getAvatarURL(s.guild_id, 80), {
                        guildId: s.guild_id,
                        channelId: s.id
                    }),
                    position: 'right',
                    renderPopout: this.renderUserPopout,
                    shouldShow: e,
                    onRequestClose: this.handleCloseUserPopout,
                    children: e => this.renderUser(e)
                })
            });
        return n ? t(r) : r;
    }
    constructor(...e) {
        super(...e), D(this, 'domElementRef', l.createRef()), D(this, 'state', {
            userPopoutOpen: !1,
            isHoveringHangStatus: !1
        }), D(this, 'setIsHoveringHangStatusDelayed', new c.sW(500, () => {
            this.setState({ isHoveringHangStatus: !0 });
        })), D(this, 'handleClickUser', () => {
            this.setState({ userPopoutOpen: !this.state.userPopoutOpen });
        }), D(this, 'handleCloseUserPopout', () => {
            this.setState({ userPopoutOpen: !1 });
        }), D(this, 'handleHidePreview', () => {
            let {
                hidePreview: e,
                isStreaming: t,
                user: n,
                showHangStatus: i
            } = this.props;
            (t || i) && (null == e || e(n.id)), this.setState({ isHoveringHangStatus: !1 });
        }), D(this, 'handleMouseEnter', () => {
            let {
                user: e,
                showPreview: t,
                isStreaming: n,
                showHangStatus: i
            } = this.props;
            (n || i) && !this.state.userPopoutOpen && (null == t || t(e.id));
        }), D(this, 'handleHoverHangStatus', e => {
            let {previewIsOpen: t} = this.props;
            e && t ? this.setIsHoveringHangStatusDelayed.delay() : !e && this.setIsHoveringHangStatusDelayed.isDelayed() && this.setIsHoveringHangStatusDelayed.cancel();
        }), D(this, 'handleHoverIcons', e => {
            e && (this.setIsHoveringHangStatusDelayed.cancel(), this.setState({ isHoveringHangStatus: !1 }));
        }), D(this, 'handleWatchStream', () => {
            let {
                user: e,
                channel: t,
                isWatching: n,
                hidePreview: i
            } = this.props;
            if (!this.canWatchStream)
                return;
            let a = {
                streamType: P.lo.GUILD,
                ownerId: e.id,
                channelId: t.id,
                guildId: t.guild_id
            };
            Z.default.getId() !== e.id && p.default.selectVoiceChannel(t.id), n ? ((0, x.Z)(a), d.Z.selectParticipant(a.channelId, (0, g.V9)(a))) : (0, m.iV)(a), null == i || i(e.id);
        }), D(this, 'handleJoinVoice', () => {
            let {
                user: e,
                channel: t,
                hidePreview: n
            } = this.props;
            M.Z.can(o.$e(j.Plq.CONNECT, j.Plq.VIEW_CHANNEL), t) && (p.default.selectVoiceChannel(t.id), null == n || n(e.id));
        }), D(this, 'handleUserContextMenu', e => {
            let {
                channel: t,
                user: i
            } = this.props;
            (0, h.jW)(e, async () => {
                let {default: e} = await Promise.all([
                    n.e('79695'),
                    n.e('17400'),
                    n.e('12435'),
                    n.e('47195')
                ]).then(n.bind(n, 757387));
                return n => (0, a.jsx)(e, {
                    ...n,
                    user: i,
                    guildId: t.guild_id,
                    channel: t,
                    showMediaItems: !0,
                    showStageChannelItems: t.isGuildStageVoice()
                });
            });
        }), D(this, 'renderUserPopout', e => {
            let {
                    channel: t,
                    user: n
                } = this.props, i = t.getGuildId();
            return (0, a.jsx)(S.Z, {
                location: 'VoiceUser',
                userId: n.id,
                guildId: null != i ? i : void 0,
                channelId: t.id,
                newAnalyticsLocations: [f.Z.VOICE_USER],
                ...e
            });
        }), D(this, 'renderStreamPopout', () => {
            let {
                user: e,
                channel: t,
                previewIsOpen: n,
                location: i
            } = this.props;
            return (0, a.jsx)(T.Z, {
                user: e,
                channel: t,
                onWatch: this.handleWatchStream,
                previewIsOpen: n,
                location: i
            });
        }), D(this, 'renderHangStatusPopout', () => {
            let {
                hangStatusActivity: e,
                previewIsOpen: t,
                user: n,
                channel: i
            } = this.props;
            return (0, a.jsx)(N.Z, {
                userId: n.id,
                channel: i,
                hangStatusActivity: e,
                previewIsOpen: t
            });
        }), D(this, 'renderUser', e => {
            let {
                    isSelfOnOtherClient: t,
                    otherClientSessionType: n,
                    voicePlatform: i,
                    shouldShowPreview: l,
                    mute: s,
                    localMute: o,
                    localVideoDisabled: c,
                    speaking: d,
                    disconnected: h,
                    user: p,
                    deaf: m,
                    priority: _,
                    collapsed: f,
                    isStreaming: E,
                    isGuest: g,
                    nick: I,
                    video: x,
                    serverMute: T,
                    serverDeaf: N,
                    tabIndex: v,
                    embeddedApplication: S,
                    channel: Z,
                    hangStatusActivity: A,
                    showHangStatus: M,
                    isSelf: b,
                    application: j
                } = this.props, {
                    userPopoutOpen: P,
                    isHoveringHangStatus: D
                } = this.state, k = L.al.has(null != n ? n : ''), U = {
                    user: p,
                    speaking: d,
                    disconnected: h,
                    mute: s,
                    localMute: o,
                    localVideoDisabled: c,
                    isStreaming: E,
                    isGuest: g,
                    video: x,
                    priority: _,
                    deaf: m,
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
                    guildId: Z.guild_id,
                    hangStatusActivity: A,
                    showHangStatus: M,
                    isSelf: b,
                    application: j,
                    channelId: Z.id
                };
            if (t) {
                var w;
                return (0, a.jsx)(u.Tooltip, {
                    text: null !== (w = (0, C.Z)(n)) && void 0 !== w ? w : O.Z.Messages.CONNECTED_ON_ANOTHER_CLIENT,
                    children: e => {
                        let {
                            onClick: t,
                            onContextMenu: n,
                            ...i
                        } = e;
                        return (0, a.jsx)(R.Z, {
                            ...U,
                            ...i
                        });
                    }
                });
            }
            return (0, a.jsx)(u.Popout, {
                position: 'right',
                renderPopout: M && D || !E ? this.renderHangStatusPopout : this.renderStreamPopout,
                shouldShow: l && !P,
                onRequestClose: this.handleHidePreview,
                spacing: 0,
                children: () => (0, a.jsx)(R.Z, {
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
D(w, 'defaultProps', { isSelfOnOtherClient: !1 }), t.ZP = (0, _.$)(w);
