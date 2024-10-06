n(47120);
var r = n(735250),
    i = n(470079),
    a = n(512722),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(481060),
    d = n(846027),
    _ = n(475179),
    E = n(925549),
    f = n(37234),
    h = n(519938),
    p = n(367907),
    I = n(358221),
    m = n(414910),
    T = n(221888),
    S = n(933557),
    g = n(569545),
    A = n(74299),
    N = n(863908),
    O = n(803647),
    R = n(266910),
    v = n(788983),
    C = n(703656),
    L = n(937995),
    y = n(618158),
    D = n(922745),
    b = n(197016),
    M = n(800965),
    P = n(445062),
    U = n(7188),
    w = n(199902),
    x = n(314897),
    G = n(131951),
    k = n(699516),
    B = n(594174),
    F = n(248402),
    V = n(33039),
    H = n(451478),
    Z = n(626135),
    Y = n(5192),
    j = n(51144),
    W = n(484286),
    K = n(822296),
    z = n(916771),
    q = n(792517),
    Q = n(560688),
    X = n(127608),
    $ = n(76021),
    J = n(981631),
    ee = n(354459),
    et = n(563849),
    en = n(852401);
function er(e, t, n) {
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
class ei extends i.PureComponent {
    get viewProperties() {
        let { participantOnScreen: e, currentUserId: t, channel: n } = this.props,
            r = (0, ee._5)(e),
            i = null != e && e.type !== ee.fO.ACTIVITY && e.user.id === t;
        return {
            canPopout: r && !i,
            canSettings: r && i,
            canStopStream: r,
            canSeeViewers: r,
            canSeeParticipantName: ((null == e ? void 0 : e.type) === ee.fO.STREAM || (null == e ? void 0 : e.type) === ee.fO.USER) && n.type !== J.d4z.DM,
            canDisconnect: !r,
            isSelf: i
        };
    }
    get streamerPaused() {
        let { isMainWindowFocused: e, activeSelfStream: t, participantOnScreen: n } = this.props;
        return null != t && (null == n ? void 0 : n.id) === (0, g.V9)(t) && !e;
    }
    get activeStreamForSelectedParticipant() {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        return (0, ee._5)(e) ? t.find((t) => (0, g.V9)(t) === e.id) : null;
    }
    getScreenMessage() {
        let { participantOnScreen: e, currentUserId: t } = this.props;
        if (!(0, ee._5)(e)) return null;
        let n = this.activeStreamForSelectedParticipant;
        return null == n ? null : (0, N.Z)(n, e.user, e.user.id === t, this.streamerPaused);
    }
    componentDidMount() {
        let { channel: e } = this.props;
        Z.default.track(J.rMx.VIDEO_LAYOUT_TOGGLED, {
            video_layout: 'pip',
            ...(0, p.AB)(e.id)
        });
    }
    componentWillUnmount() {
        let { channel: e } = this.props;
        Z.default.track(J.rMx.VIDEO_LAYOUT_TOGGLED, {
            video_layout: I.Z.getLayout(e.id),
            ...(0, p.AB)(e.id)
        });
    }
    renderStreamState() {
        let e = this.activeStreamForSelectedParticipant,
            { participantOnScreen: t, width: n } = this.props;
        if ((null == e ? void 0 : e.state) === J.jm8.ENDED)
            return (0, r.jsx)(K.Z, {
                stream: e,
                width: n
            });
        if ((null == e ? void 0 : e.state) === J.jm8.FAILED)
            return (0, r.jsx)(z.Z, {
                stream: e,
                width: n
            });
        if ((null == t ? void 0 : t.type) === ee.fO.HIDDEN_STREAM)
            return (0, r.jsx)(q.Z, {
                participant: t,
                width: n
            });
        return null;
    }
    renderParticipantName() {
        let { channel: e, participantOnScreen: t } = this.props;
        if ((null == t ? void 0 : t.type) === ee.fO.STREAM || (null == t ? void 0 : t.type) === ee.fO.USER) {
            var n;
            let i = null !== (n = Y.ZP.getNickname(e.getGuildId(), e.id, t.user)) && void 0 !== n ? n : j.ZP.getName(t.user);
            return (0, r.jsx)(c.Text, {
                variant: 'text-md/normal',
                color: 'always-white',
                className: et.participantName,
                lineClamp: 1,
                children: i
            });
        }
        return null;
    }
    render() {
        let { channel: e, streamId: t, participantOnScreen: n, isVideoEnabled: i, width: a } = this.props,
            s = (0, S.F6)(e, B.default, k.Z),
            o = (null == n ? void 0 : n.id) === x.default.getId() && i,
            l = this.renderStreamState(),
            u = null;
        return (
            (null == n ? void 0 : n.type) !== ee.fO.ACTIVITY &&
                (null != l
                    ? (u = l)
                    : ((null == n ? void 0 : n.type) === ee.fO.USER || (null == n ? void 0 : n.type) === ee.fO.STREAM) &&
                      (u = (0, r.jsx)(W.Z, {
                          paused: this.streamerPaused,
                          streamId: t,
                          component: G.Z.getVideoComponent(),
                          mirror: o,
                          children: (0, r.jsx)(R.Z, {
                              size: c.AvatarSizes.SIZE_80,
                              src: null == n ? void 0 : n.user.getAvatarURL(e.guild_id, 80),
                              'aria-label': null == n ? void 0 : n.user.username
                          })
                      }))),
            (0, r.jsx)(L.ZP, {
                timeout: 1800,
                children: (e) => {
                    var t;
                    return (0, r.jsx)(D.Z, {
                        title: s,
                        backgroundKey: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : '',
                        screenMessage: null == l ? this.getScreenMessage() : null,
                        onJumpToChannel: this.handleJumpToChannel,
                        onHide: this.handleHidePIP,
                        renderBottomLeftControls: this.renderBottomLeftControls,
                        renderBottomRightControls: this.renderBottomRightControls,
                        preventIdleComponent: y.Z,
                        width: a,
                        className: en.elevationHigh,
                        ...e,
                        children: u
                    });
                }
            })
        );
    }
    constructor(...e) {
        super(...e),
            er(this, 'state', { screensharePopoutOpen: !1 }),
            er(this, '_ref', i.createRef()),
            er(this, 'handleVideo', (e) => {
                d.Z.setVideoEnabled(e);
            }),
            er(this, 'handleEnableVideoWhenUnavailable', () => {
                let { isVideoAvailable: e } = this.props;
                e ? this.handleVideo(!0) : (0, Q.Z)();
            }),
            er(this, 'handleJumpToChannel', () => {
                var e;
                let { channel: t } = this.props;
                (0, f.Ou)();
                let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : J.ME;
                (0, C.XU)(n, t.id), E.Z.channelListScrollTo(n, t.id);
                let r = this.activeStreamForSelectedParticipant;
                null != r && _.Z.selectParticipant(r.channelId, (0, g.V9)(r));
            }),
            er(this, 'handleStartStream', () => {
                let { canGoLive: e, channel: t } = this.props,
                    n = t.getGuildId();
                if ((s()(null != n, 'Cannot go live in non guild channel'), !e)) return (0, X.Z)();
                (0, $.Z)(n, t.id, J.ZY5.GUILD_CHANNEL);
            }),
            er(this, 'handleStopStream', () => {
                let { participantOnScreen: e } = this.props;
                s()((0, ee._5)(e), 'cannot stop stream for non streamer'), (0, O.Z)(e.stream);
            }),
            er(this, 'handleHidePIP', () => {
                let { channel: e } = this.props;
                h.Cp(e.id);
            }),
            er(this, 'handleOpenPopout', () => {
                let { channel: e } = this.props;
                v.hP(e);
            }),
            er(this, 'renderBottomLeftControls', () => {
                let { canSeeParticipantName: e } = this.viewProperties;
                return (0, r.jsx)(r.Fragment, { children: e ? this.renderParticipantName() : null });
            }),
            er(this, 'renderBottomRightControls', () => {
                let { canSettings: e, canPopout: t, canDisconnect: n, canStopStream: i, canSeeViewers: a } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [a ? this.renderViewersIcon() : null, e ? this.renderSettingsIcon() : null, t ? this.renderPopoutIcon() : null, i ? this.renderStopStreamButton() : null, n ? this.renderDisconnectButton() : null]
                });
            }),
            er(this, 'renderDisconnectButton', () => (0, r.jsx)(b.Z, { className: et.rightTrayIcon })),
            er(this, 'renderStopStreamButton', () => {
                let { isSelf: e } = this.viewProperties;
                return (0, r.jsx)(P.Z, {
                    isSelfStream: e,
                    className: et.rightTrayIcon,
                    onClick: this.handleStopStream
                });
            }),
            er(this, 'renderViewersIcon', () => {
                let { participantOnScreen: e, channel: t } = this.props;
                return (
                    s()((0, ee._5)(e) || (null == e ? void 0 : e.type) === ee.fO.ACTIVITY, 'Cannot render participants for participant type '.concat(null == e ? void 0 : e.type)),
                    (0, r.jsx)(y.Z, {
                        children: (0, r.jsx)(T.Z, {
                            channelId: t.id,
                            guildId: t.getGuildId(),
                            className: et.rightTrayIcon,
                            participant: e,
                            compact: !0
                        })
                    })
                );
            }),
            er(this, 'renderPopoutIcon', () =>
                (0, r.jsx)(M.Z, {
                    className: et.rightTrayIcon,
                    popoutOpen: !1,
                    onOpenPopout: this.handleOpenPopout,
                    onClosePopout: J.VqG
                })
            ),
            er(this, 'renderSettingsIcon', () => {
                let { participantOnScreen: e, activeStreams: t } = this.props;
                s()((0, ee._5)(e), 'Cannot render settings for non stream participant');
                let n = t.find((t) => (0, g.V9)(t) === e.id);
                return null == n || n.state === J.jm8.ENDED
                    ? null
                    : (0, r.jsx)(U.Z, {
                          stream: n,
                          className: et.rightTrayIcon,
                          appContext: J.IlC.APP
                      });
            });
    }
}
t.Z = u.ZP.connectStores([G.Z, I.Z, x.default, F.Z, V.Z, w.Z, H.Z], (e) => {
    let { channel: t } = e,
        n = F.Z.getSpeaker(t.id),
        r = I.Z.getParticipant(t.id, n),
        i = l()(G.Z.getVideoDevices()).values().first(),
        a = null == i || i.disabled,
        s = null != r && r.type !== ee.fO.ACTIVITY && r.type !== ee.fO.HIDDEN_STREAM ? V.Z.getStreamId(r.user.id, t.getGuildId(), (0, m.Z)(r.type)) : null,
        o = !a && G.Z.isVideoEnabled(),
        u = (0, A.Z)(G.Z),
        c = x.default.getId(),
        d = w.Z.getCurrentUserActiveStream();
    return {
        channel: t,
        streamId: s,
        participantOnScreen: r,
        isVideoAvailable: !1 === a,
        isVideoEnabled: o,
        canGoLive: u,
        currentUserId: c,
        activeStreams: w.Z.getAllActiveStreams(),
        activeSelfStream: d,
        isMainWindowFocused: H.Z.isFocused()
    };
})(ei);
