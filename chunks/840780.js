n(47120);
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(512722),
    o = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(988298),
    h = n(475179),
    p = n(925549),
    f = n(438139),
    _ = n(730749),
    m = n(607070),
    g = n(566620),
    C = n(317381),
    I = n(620662),
    E = n(513202),
    N = n(835473),
    S = n(933557),
    x = n(194082),
    v = n(311352),
    T = n(436774),
    Z = n(594190),
    A = n(925329),
    b = n(810568),
    R = n(168524),
    M = n(382182),
    L = n(74299),
    P = n(914923),
    O = n(165393),
    y = n(989941),
    D = n(803647),
    j = n(690221),
    w = n(231664),
    U = n(759198),
    G = n(131704),
    k = n(199902),
    B = n(314897),
    V = n(592125),
    H = n(984933),
    F = n(430824),
    W = n(131951),
    z = n(496675),
    Y = n(158776),
    K = n(699516),
    q = n(944486),
    Q = n(594174),
    X = n(449224),
    J = n(626135),
    $ = n(358085),
    ee = n(870569),
    et = n(345243),
    en = n(115530),
    ei = n(981631),
    el = n(918559),
    er = n(689938),
    ea = n(168851);
function es(e, t, n) {
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
let eo = (0, f.Z)(function (e) {
    let { message: t } = e;
    return (0, i.jsx)(et.Z, { children: t });
});
class ec extends l.PureComponent {
    isJoinableActivity() {
        let { application: e, activity: t, embeddedActivity: n } = this.props;
        return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === ei.IIU.PLAYING && (0, I.Z)(t, ei.xjy.JOIN));
    }
    renderGoLiveButton() {
        let e, t, n, l;
        let { canGoLive: r, guildId: a, isStreaming: s, channel: o, canStream: c, runningGame: d, embeddedActivity: h } = this.props;
        return (null != d || null == h) && (s || (r && null != d))
            ? (s ? ((e = !1), (t = this.handleClickStopStreamingButton), (n = u.ScreenXIcon), (l = er.Z.Messages.STOP_STREAMING)) : c ? ((e = !1), (t = this.handleClickGoLiveButton), (n = u.ScreenArrowIcon), (l = null != d ? er.Z.Messages.ACTIVITY_PANEL_GO_LIVE_STREAM_GAME.format({ game: d.name }) : er.Z.Messages.ACTIVITY_PANEL_GO_LIVE)) : ((e = !0), (t = null), (n = u.ScreenArrowIcon), (l = null != o && (0, G.vd)(o.type) ? er.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE : null != a ? er.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_GUILD : er.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NOT_IN_GUILD)),
              (0, i.jsx)('div', {
                  className: ea.panelButtonContainer,
                  children: (0, i.jsx)(ee.Z, {
                      tooltipText: l,
                      disabled: e,
                      onClick: t,
                      icon: n
                  })
              }))
            : null;
    }
    renderInviteButton() {
        let { embeddedActivity: e } = this.props;
        return this.isJoinableActivity() && null == e
            ? (0, i.jsx)(ee.Z, {
                  tooltipText: er.Z.Messages.INVITE_EMBED_INVITE_TO_JOIN,
                  onClick: this.handleClickInviteButton,
                  icon: u.GroupPlusIcon,
                  iconForeground: ea.__invalid_actionIcon
              })
            : null;
    }
    renderLeaveEmbeddedActivityButton() {
        let { embeddedActivity: e, channel: t } = this.props;
        return null == e || null == t
            ? null
            : (0, i.jsx)(ee.Z, {
                  tooltipText: er.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
                  onClick: this.handleClickLeaveEmbeddedActivityButton(e.applicationId, t),
                  icon: u.DoorExitIcon,
                  iconForeground: ea.__invalid_actionIcon
              });
    }
    renderSparkles() {
        let { useReducedMotion: e } = this.props;
        async function t() {
            let { default: e } = await n.e('5217').then(n.t.bind(n, 801048, 19));
            return e;
        }
        return (0, i.jsx)('div', {
            className: ea.sparkleContainer,
            children: (0, i.jsx)(u.LottieAnimation, {
                importData: t,
                shouldAnimate: !e,
                className: ea.sparkles
            })
        });
    }
    renderActions() {
        let e = this.renderGoLiveButton(),
            t = this.renderInviteButton(),
            n = this.renderLeaveEmbeddedActivityButton(),
            l = this.renderClipsButton();
        return null == e && null == t && null == n
            ? null
            : (0, i.jsxs)('div', {
                  className: ea.actions,
                  children: [e, t, null == e ? n : l]
              });
    }
    getGameName() {
        let { runningGame: e, application: t } = this.props;
        return null != t ? t.name : null != e ? e.name : er.Z.Messages.STATUS_UNKNOWN;
    }
    renderGame() {
        let { isStreaming: e, application: t, runningGame: n } = this.props,
            l = this.getGameName();
        return (0, i.jsxs)('div', {
            className: ea.gameWrapper,
            children: [
                (0, i.jsxs)('div', {
                    className: ea.gameIconWrapper,
                    children: [
                        (0, i.jsx)(A.Z, {
                            className: ea.gameIcon,
                            game: t,
                            pid: null == n ? void 0 : n.pid
                        }),
                        e
                            ? (0, i.jsx)(u.VideoIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: ea.liveBadge
                              })
                            : null
                    ]
                }),
                (0, i.jsx)('div', {
                    className: ea.info,
                    children:
                        null != l
                            ? (0, i.jsx)(i.Fragment, {
                                  children: (0, i.jsx)(eu, {
                                      name: l,
                                      applicationId: null == t ? void 0 : t.id
                                  })
                              })
                            : null
                })
            ]
        });
    }
    renderScreenshare() {
        let { isStreaming: e, streamMetadata: t, streamQualityIndicator: n } = this.props,
            { title: l, sanitizedTitle: r } = (0, P.Z)(t);
        return (0, i.jsxs)('div', {
            className: ea.gameWrapper,
            children: [
                e
                    ? (0, i.jsx)(O.Z, { title: r })
                    : (0, i.jsx)(x.ZP, {
                          look: x.ZP.Looks.GRAY,
                          size: x.ZP.Sizes.SMALL,
                          className: ea.liveIndicator
                      }),
                (0, i.jsxs)('div', {
                    className: ea.info,
                    children: [
                        (0, i.jsx)(en.Z, { children: l }),
                        null != n &&
                            (0, i.jsxs)('div', {
                                className: ea.perksDemoContainer,
                                children: [
                                    (0, i.jsx)(u.NitroWheelIcon, {
                                        size: 'xxs',
                                        color: T.JX.PREMIUM_TIER_2
                                    }),
                                    (0, i.jsx)(U.Z, {
                                        className: ea.perksDemoText,
                                        variant: 'text-xxs/semibold',
                                        children: n
                                    })
                                ]
                            })
                    ]
                })
            ]
        });
    }
    renderEmbeddedActivity() {
        let e;
        let { application: t, embeddedActivity: n, channel: l, channelName: r, guildForConnectedChannel: a } = this.props;
        if (null == n || null == l || null == t) return null;
        let s = { start: n.connectedSince },
            o = r;
        null != a ? ((e = ei.Z5c.CHANNEL(a.id, l.id)), (o = ''.concat(o, ' / ').concat(a.name))) : (e = ei.Z5c.CHANNEL(ei.ME, l.id));
        let c = (0, i.jsx)(j.Z, {
            href: e,
            onClick: this.handleApplicationLinkClick,
            children: (0, i.jsx)(et.Z, {
                className: ea.channel,
                children: o
            })
        });
        return (0, i.jsxs)('div', {
            className: ea.gameWrapper,
            children: [
                (0, i.jsx)(A.Z, {
                    className: ea.gameIcon,
                    game: t,
                    size: A.Z.Sizes.SMALL
                }),
                (0, i.jsxs)('div', {
                    className: ea.info,
                    children: [
                        (0, i.jsx)(j.Z, {
                            href: e,
                            onClick: this.handleApplicationLinkClick,
                            children: (0, i.jsx)(en.Z, {
                                className: ea.activityName,
                                children: t.name
                            })
                        }),
                        (0, G.Qm)(l.type) ? c : (0, i.jsx)(eo, { timestamps: s })
                    ]
                })
            ]
        });
    }
    render() {
        let { canGoLive: e, embeddedActivity: t, runningGame: n, isStreaming: l, streamMetadata: r, className: s } = this.props;
        return l || ((this.isJoinableActivity() || e) && (null != n || null != t))
            ? (0, i.jsx)('div', {
                  className: a()(ea.panel, s),
                  children: (0, i.jsxs)('div', {
                      className: ea.body,
                      children: [(() => (null == n || (l && (null == r ? void 0 : r.pid) == null) ? (null != t ? this.renderEmbeddedActivity() : this.renderScreenshare()) : this.renderGame()))(), this.renderActions()]
                  })
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            es(this, 'modalKey', void 0),
            es(this, 'handleClickGoLiveButton', () => {
                let { guildId: e, channel: t } = this.props,
                    l = null != t && (0, G.vd)(t.type) ? t : null,
                    r = null != l ? l.getGuildId() : e;
                (0, u.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('46746'), n.e('33641')]).then(n.bind(n, 60594));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            selectSource: !1,
                            guildId: r,
                            analyticsLocation: ei.Sbl.ACTIVITY_PANEL
                        });
                }).then((e) => {
                    null != e && (this.modalKey = e);
                });
            }),
            es(this, 'handleClickStopStreamingButton', () => {
                let { stream: e } = this.props;
                (0, D.Z)(e);
            }),
            es(this, 'handleClickInviteButton', () => {
                let { activity: e, analyticsContext: t } = this.props;
                o()(null != e, 'Received null activity'),
                    J.default.track(ei.rMx.OPEN_MODAL, {
                        type: 'Send Join Invite',
                        application_id: e.application_id,
                        location: t.location
                    }),
                    (0, d.h7)(e, !1);
            }),
            es(this, 'handleClickLeaveEmbeddedActivityButton', (e, t) => () => {
                E.Z.leaveActivity({
                    channelId: t.id,
                    applicationId: e,
                    showFeedback: !0
                });
            }),
            es(this, 'renderClipsButton', () => {
                let { stream: e } = this.props;
                return null == e ? null : (0, i.jsx)(v.Z, {});
            }),
            es(this, 'handleApplicationLinkClick', () => {
                var e;
                let { channel: t, embeddedActivity: n } = this.props;
                o()(null != t, 'Channel is null during navigation click'), o()(null != n, 'Activity null during navigation click'), (0, G.vd)(t.type) && h.Z.selectParticipant(t.id, n.applicationId), p.Z.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : ei.ME, t.id), (0, G.Qm)(t.type) && (0, g.tg)(el.Ez.PANEL);
            });
    }
}
function eu(e) {
    let { name: t, applicationId: n } = e,
        l = (0, R.Z)({
            location: 'ActivityPanelGameCard',
            applicationId: n,
            source: b.m1.RtcPanel,
            trackEntryPointImpression: !0
        });
    return (0, i.jsx)(u.Clickable, {
        onClick: l,
        className: a()(null != l && ea.clickableGameName),
        children: (0, i.jsx)(en.Z, {
            className: ea.gameName,
            children: t
        })
    });
}
t.Z = (0, _.Z)(function (e) {
    var t;
    let { guildId: n, ...l } = e,
        r = (0, c.e7)([B.default], () => B.default.getId()),
        a = (0, c.e7)([Z.ZP, X.Z], () => (0, y.Z)(Z.ZP, X.Z)),
        s = (0, c.e7)([q.Z, V.Z], () => V.Z.getChannel(q.Z.getVoiceChannelId())),
        o = (0, c.e7)([C.ZP], () => C.ZP.getConnectedActivityChannelId()),
        u = (0, c.e7)([V.Z], () => V.Z.getChannel(o)),
        d = (0, c.e7)([F.Z], () => F.Z.getGuild(null == u ? void 0 : u.guild_id)),
        [h, p] = (0, c.Wu)([k.Z], () => [k.Z.getCurrentUserActiveStream(), k.Z.getStreamerActiveStreamMetadata()]),
        f = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
        _ = (0, c.e7)([C.ZP], () => (null != u ? C.ZP.getSelfEmbeddedActivityForChannel(u.id) : null)),
        g = (0, c.e7)([F.Z, z.Z, H.ZP], () => (null != s ? M.JL(s, F.Z, z.Z, !1) : null != n && M.h_(H.ZP.getChannels(n), F.Z, z.Z).length > 0)),
        [I] = (0, N.Z)([
            null !==
                (t = (function () {
                    if (null != p && null != p.id) return p.id;
                    if (null != a && null != a.id) return a.id;
                    if (null != _) return _.applicationId;
                })()) && void 0 !== t
                ? t
                : ''
        ]),
        E = (0, c.e7)([W.Z], () => (0, L.Z)(W.Z) && (0, $.isWindows)()),
        x = (0, c.e7)([Y.Z], () => (null != r ? Y.Z.findActivity(r, (e) => e.type === ei.IIU.PLAYING) : null)),
        v = null != h && h.ownerId === r && h.state !== ei.jm8.ENDED,
        T = (0, c.e7)([Q.default, K.Z], () => (null != u ? (0, S.F6)(u, Q.default, K.Z) : void 0)),
        A = (0, w.Z)();
    return (0, i.jsx)(ec, {
        ...l,
        guildId: n,
        canGoLive: E,
        activity: x,
        embeddedActivity: _,
        userId: r,
        runningGame: a,
        application: I,
        useReducedMotion: f,
        isStreaming: v,
        channel: u,
        canStream: g,
        stream: h,
        streamMetadata: p,
        channelName: T,
        guildForConnectedChannel: d,
        streamQualityIndicator: A
    });
});
