n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    l = n.n(o),
    u = n(392711),
    c = n.n(u),
    d = n(442837),
    _ = n(481060),
    E = n(846027),
    f = n(475179),
    h = n(925549),
    p = n(37234),
    I = n(519938),
    m = n(367907),
    T = n(158631),
    S = n(552740),
    g = n(358221),
    A = n(414910),
    N = n(221888),
    O = n(933557),
    R = n(569545),
    v = n(74299),
    C = n(863908),
    y = n(803647),
    L = n(266910),
    D = n(788983),
    b = n(703656),
    M = n(937995),
    P = n(618158),
    U = n(922745),
    w = n(197016),
    x = n(800965),
    G = n(445062),
    k = n(7188),
    B = n(199902),
    F = n(314897),
    V = n(131951),
    H = n(699516),
    Z = n(594174),
    Y = n(248402),
    j = n(33039),
    W = n(451478),
    K = n(626135),
    z = n(5192),
    q = n(51144),
    Q = n(534388),
    X = n(484286),
    $ = n(822296),
    J = n(916771),
    ee = n(792517),
    et = n(560688),
    en = n(127608),
    er = n(76021),
    ei = n(981631),
    ea = n(354459),
    es = n(821762),
    eo = n(256507);
function el(e, t, n) {
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
class eu extends i.PureComponent {
    get viewProperties() {
        let { participantOnScreen: e, currentUserId: t, channel: n } = this.props,
            r = (0, ea._5)(e),
            i = null != e && e.type !== ea.fO.ACTIVITY && e.user.id === t;
        return {
            canPopout: r && !i,
            canSettings: r && i,
            canStopStream: r,
            canSeeViewers: r,
            canSeeParticipantName: ((null == e ? void 0 : e.type) === ea.fO.STREAM || (null == e ? void 0 : e.type) === ea.fO.USER) && n.type !== ei.d4z.DM,
            canDisconnect: !r,
            isSelf: i
        };
    }
    get streamerPaused() {
        let { isMainWindowFocused: e, activeSelfStream: t, participantOnScreen: n } = this.props;
        return null != t && (null == n ? void 0 : n.id) === (0, R.V9)(t) && !e;
    }
    get activeStreamForSelectedParticipant() {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        return (0, ea._5)(e) ? t.find((t) => (0, R.V9)(t) === e.id) : null;
    }
    getScreenMessage() {
        let { participantOnScreen: e, currentUserId: t } = this.props;
        if (!(0, ea._5)(e)) return null;
        let n = this.activeStreamForSelectedParticipant;
        return null == n ? null : (0, C.Z)(n, e.user, e.user.id === t, this.streamerPaused);
    }
    isEmptyBroadcast() {
        var e;
        let { isSelfBroadcasting: t, channel: n } = this.props;
        return t && (null === (e = n.recipients) || void 0 === e ? void 0 : e.length) === 0;
    }
    componentDidMount() {
        let { channel: e } = this.props;
        K.default.track(ei.rMx.VIDEO_LAYOUT_TOGGLED, {
            video_layout: 'pip',
            ...(0, m.AB)(e.id)
        });
    }
    componentWillUnmount() {
        let { channel: e } = this.props;
        K.default.track(ei.rMx.VIDEO_LAYOUT_TOGGLED, {
            video_layout: g.Z.getLayout(e.id),
            ...(0, m.AB)(e.id)
        });
    }
    renderStreamState() {
        let e = this.activeStreamForSelectedParticipant,
            { participantOnScreen: t, width: n } = this.props;
        if ((null == e ? void 0 : e.state) === ei.jm8.ENDED)
            return (0, r.jsx)($.Z, {
                stream: e,
                width: n
            });
        if ((null == e ? void 0 : e.state) === ei.jm8.FAILED)
            return (0, r.jsx)(J.Z, {
                stream: e,
                width: n
            });
        if (this.isEmptyBroadcast()) return (0, r.jsx)(Q.Z, {});
        else if ((null == t ? void 0 : t.type) === ea.fO.HIDDEN_STREAM)
            return (0, r.jsx)(ee.Z, {
                participant: t,
                width: n
            });
        return null;
    }
    renderParticipantName() {
        let { channel: e, participantOnScreen: t } = this.props;
        if ((null == t ? void 0 : t.type) === ea.fO.STREAM || (null == t ? void 0 : t.type) === ea.fO.USER) {
            var n;
            let i = null !== (n = z.ZP.getNickname(e.getGuildId(), e.id, t.user)) && void 0 !== n ? n : q.ZP.getName(t.user);
            return (0, r.jsx)(_.Text, {
                variant: 'text-md/normal',
                color: 'always-white',
                className: es.participantName,
                lineClamp: 1,
                children: i
            });
        }
        return null;
    }
    render() {
        let { channel: e, streamId: t, participantOnScreen: n, isVideoEnabled: i, width: a } = this.props,
            o = (0, O.F6)(e, Z.default, H.Z),
            l = this.isEmptyBroadcast(),
            u = (null == n ? void 0 : n.id) === F.default.getId() && i,
            c = this.renderStreamState(),
            d = null;
        return (
            (null == n ? void 0 : n.type) !== ea.fO.ACTIVITY &&
                (null != c
                    ? (d = c)
                    : ((null == n ? void 0 : n.type) === ea.fO.USER || (null == n ? void 0 : n.type) === ea.fO.STREAM) &&
                      (d = (0, r.jsx)(X.Z, {
                          paused: this.streamerPaused,
                          streamId: t,
                          component: V.Z.getVideoComponent(),
                          mirror: u,
                          children: (0, r.jsx)(L.Z, {
                              size: _.AvatarSizes.SIZE_80,
                              src: null == n ? void 0 : n.user.getAvatarURL(e.guild_id, 80),
                              'aria-label': null == n ? void 0 : n.user.username
                          })
                      }))),
            (0, r.jsx)(M.ZP, {
                timeout: 1800,
                children: (e) => {
                    var t;
                    return (0, r.jsx)(U.Z, {
                        title: o,
                        backgroundKey: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : '',
                        screenMessage: null == c ? this.getScreenMessage() : null,
                        onJumpToChannel: this.handleJumpToChannel,
                        onHide: this.handleHidePIP,
                        renderBottomLeftControls: this.renderBottomLeftControls,
                        renderBottomRightControls: this.renderBottomRightControls,
                        preventIdleComponent: P.Z,
                        width: a,
                        hideControls: l,
                        className: s()(l ? es.emptyBroadcast : void 0, eo.elevationHigh),
                        innerClassName: l ? es.innerEmptyBroadcast : void 0,
                        ...e,
                        children: d
                    });
                }
            })
        );
    }
    constructor(...e) {
        super(...e),
            el(this, 'state', { screensharePopoutOpen: !1 }),
            el(this, '_ref', i.createRef()),
            el(this, 'handleVideo', (e) => {
                E.Z.setVideoEnabled(e);
            }),
            el(this, 'handleEnableVideoWhenUnavailable', () => {
                let { isVideoAvailable: e } = this.props;
                e ? this.handleVideo(!0) : (0, et.Z)();
            }),
            el(this, 'handleJumpToChannel', () => {
                var e;
                let { channel: t } = this.props;
                (0, p.Ou)();
                let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : ei.ME;
                (0, b.XU)(n, t.id), h.Z.channelListScrollTo(n, t.id);
                let r = this.activeStreamForSelectedParticipant;
                null != r && f.Z.selectParticipant(r.channelId, (0, R.V9)(r));
            }),
            el(this, 'handleStartStream', () => {
                let { canGoLive: e, channel: t } = this.props,
                    n = t.getGuildId();
                if ((l()(null != n, 'Cannot go live in non guild channel'), !e)) return (0, en.Z)();
                (0, er.Z)(n, t.id, ei.ZY5.GUILD_CHANNEL);
            }),
            el(this, 'handleStopStream', () => {
                let { participantOnScreen: e, isSelfBroadcasting: t } = this.props;
                l()((0, ea._5)(e), 'cannot stop stream for non streamer'), t ? (0, S.Z)(() => (0, y.Z)(e.stream)) : (0, y.Z)(e.stream);
            }),
            el(this, 'handleHidePIP', () => {
                let { channel: e } = this.props;
                I.Cp(e.id);
            }),
            el(this, 'handleOpenPopout', () => {
                let { channel: e } = this.props;
                D.hP(e);
            }),
            el(this, 'renderBottomLeftControls', () => {
                let { canSeeParticipantName: e } = this.viewProperties;
                return (0, r.jsx)(r.Fragment, { children: e ? this.renderParticipantName() : null });
            }),
            el(this, 'renderBottomRightControls', () => {
                let { canSettings: e, canPopout: t, canDisconnect: n, canStopStream: i, canSeeViewers: a } = this.viewProperties;
                return (0, r.jsxs)(r.Fragment, {
                    children: [a ? this.renderViewersIcon() : null, e ? this.renderSettingsIcon() : null, t ? this.renderPopoutIcon() : null, i ? this.renderStopStreamButton() : null, n ? this.renderDisconnectButton() : null]
                });
            }),
            el(this, 'renderDisconnectButton', () => {
                let { channel: e } = this.props;
                return (0, r.jsx)(w.Z, {
                    className: es.rightTrayIcon,
                    channel: e
                });
            }),
            el(this, 'renderStopStreamButton', () => {
                let { isSelf: e } = this.viewProperties;
                return (0, r.jsx)(G.Z, {
                    isSelfStream: e,
                    className: es.rightTrayIcon,
                    onClick: this.handleStopStream
                });
            }),
            el(this, 'renderViewersIcon', () => {
                let { participantOnScreen: e, channel: t } = this.props;
                return (
                    l()((0, ea._5)(e) || (null == e ? void 0 : e.type) === ea.fO.ACTIVITY, 'Cannot render participants for participant type '.concat(null == e ? void 0 : e.type)),
                    (0, r.jsx)(P.Z, {
                        children: (0, r.jsx)(N.Z, {
                            channelId: t.id,
                            guildId: t.getGuildId(),
                            className: es.rightTrayIcon,
                            participant: e,
                            compact: !0
                        })
                    })
                );
            }),
            el(this, 'renderPopoutIcon', () =>
                (0, r.jsx)(x.Z, {
                    className: es.rightTrayIcon,
                    popoutOpen: !1,
                    onOpenPopout: this.handleOpenPopout,
                    onClosePopout: ei.VqG
                })
            ),
            el(this, 'renderSettingsIcon', () => {
                let { participantOnScreen: e, activeStreams: t } = this.props;
                l()((0, ea._5)(e), 'Cannot render settings for non stream participant');
                let n = t.find((t) => (0, R.V9)(t) === e.id);
                return null == n || n.state === ei.jm8.ENDED
                    ? null
                    : (0, r.jsx)(k.Z, {
                          stream: n,
                          className: es.rightTrayIcon,
                          appContext: ei.IlC.APP
                      });
            });
    }
}
t.Z = d.ZP.connectStores([V.Z, g.Z, F.default, Y.Z, j.Z, B.Z, W.Z], (e) => {
    let { channel: t } = e,
        n = Y.Z.getSpeaker(t.id),
        r = g.Z.getParticipant(t.id, n),
        i = c()(V.Z.getVideoDevices()).values().first(),
        a = null == i || i.disabled,
        s = null != r && r.type !== ea.fO.ACTIVITY && r.type !== ea.fO.HIDDEN_STREAM ? j.Z.getStreamId(r.user.id, t.getGuildId(), (0, A.Z)(r.type)) : null,
        o = !a && V.Z.isVideoEnabled(),
        l = (0, v.Z)(V.Z),
        u = F.default.getId(),
        d = B.Z.getCurrentUserActiveStream(),
        _ = (0, T.tA)(t.id);
    return {
        channel: t,
        streamId: s,
        participantOnScreen: r,
        isVideoAvailable: !1 === a,
        isVideoEnabled: o,
        isSelfBroadcasting: _,
        canGoLive: l,
        currentUserId: u,
        activeStreams: B.Z.getAllActiveStreams(),
        activeSelfStream: d,
        isMainWindowFocused: W.Z.isFocused()
    };
})(eu);
