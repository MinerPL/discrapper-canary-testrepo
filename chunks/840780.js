n(47120);
var i = n(735250), l = n(470079), r = n(120356), a = n.n(r), s = n(512722), o = n.n(s), c = n(442837), u = n(704215), d = n(692547), h = n(481060), p = n(988298), _ = n(475179), f = n(925549), m = n(872810), g = n(438139), C = n(730749), I = n(607070), E = n(566620), N = n(317381), x = n(620662), S = n(835473), Z = n(67212), v = n(757454), T = n(552740), L = n(933557), A = n(311352), b = n(730417), M = n(524347), R = n(853197), y = n(616360), O = n(858064), P = n(594190), j = n(569545), D = n(382182), U = n(74299), G = n(914923), w = n(165393), k = n(989941), B = n(803647), V = n(231664), H = n(759198), F = n(131704), W = n(199902), Y = n(314897), z = n(592125), K = n(984933), q = n(430824), Q = n(131951), J = n(496675), X = n(158776), $ = n(699516), ee = n(944486), et = n(885110), en = n(594174), ei = n(449224), el = n(366695), er = n(672752), ea = n(499150), es = n(976401), eo = n(333454), ec = n(864441), eu = n(368666), ed = n(626135), eh = n(358085), ep = n(793224), e_ = n(978769), ef = n(981631), em = n(918559), eg = n(702512), eC = n(689938), eI = n(488320);
function eE(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let eN = (0, g.Z)(function (e) {
    let {message: t} = e;
    return (0, i.jsx)(eo.Z, { children: t });
});
class ex extends l.PureComponent {
    componentDidUpdate(e) {
        !e.dropsActivityPanelExperienceBlocked && this.props.dropsActivityPanelExperienceBlocked && this.setState({ isDropsActivityPanelTooltipOpen: !1 });
    }
    isJoinableActivity() {
        let {
            application: e,
            activity: t,
            embeddedActivity: n
        } = this.props;
        return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === ef.IIU.PLAYING && (0, x.Z)(t, ef.xjy.JOIN));
    }
    renderGoLiveButton() {
        let e, t, n, l;
        let {
            canGoLive: r,
            guildId: a,
            isStreaming: s,
            channel: o,
            canStream: c,
            runningGame: u,
            embeddedActivity: d
        } = this.props;
        return (null != u || null == d) && (s || r && null != u) ? (s ? (e = !1, t = this.handleClickStopStreamingButton, n = h.ScreenXIcon, l = eC.Z.Messages.STOP_STREAMING) : c ? (e = !1, t = this.handleClickGoLiveButton, n = h.ScreenArrowIcon, l = null != u ? eC.Z.Messages.ACTIVITY_PANEL_GO_LIVE_STREAM_GAME.format({ game: u.name }) : eC.Z.Messages.ACTIVITY_PANEL_GO_LIVE) : (e = !0, t = null, n = h.ScreenArrowIcon, l = null != o && (0, F.vd)(o.type) ? eC.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE : null != a ? eC.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_GUILD : eC.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NOT_IN_GUILD), (0, i.jsx)('div', {
            className: eI.panelButtonContainer,
            children: (0, i.jsx)(es.Z, {
                tooltipText: l,
                disabled: e,
                onClick: t,
                icon: n
            })
        })) : null;
    }
    renderInviteButton() {
        let {embeddedActivity: e} = this.props;
        return this.isJoinableActivity() && null == e ? (0, i.jsx)(es.Z, {
            tooltipText: eC.Z.Messages.INVITE_EMBED_INVITE_TO_JOIN,
            onClick: this.handleClickInviteButton,
            icon: h.GroupPlusIcon,
            iconForeground: eI.__invalid_actionIcon
        }) : null;
    }
    renderDropsButton() {
        let {
            dropsTooltipAction: e,
            dropsPartnerGame: t
        } = this.props;
        if (null == t)
            return null;
        let n = this.state.isDropsActivityPanelTooltipOpen, l = () => this.setState({ isDropsActivityPanelTooltipOpen: !1 });
        return (0, i.jsx)(h.Popout, {
            shouldShow: n,
            position: 'top',
            align: 'center',
            onRequestClose: l,
            renderPopout: () => (0, i.jsx)(O.Z, {
                partnerGame: t,
                tooltipAction: e,
                onClose: l
            }),
            children: () => (0, i.jsxs)(i.Fragment, {
                children: [
                    this.state.showDropsSparkles && this.renderSparkles(),
                    (0, i.jsx)(es.Z, {
                        'aria-label': eC.Z.Messages.DROPS_ENABLED,
                        tooltipText: n ? null : eC.Z.Messages.DROPS_ENABLED,
                        onClick: this.handleClickDropsButton,
                        icon: y.Z
                    })
                ]
            })
        });
    }
    renderLeaveEmbeddedActivityButton() {
        let {
            embeddedActivity: e,
            channel: t
        } = this.props;
        return null == e || null == t ? null : (0, i.jsx)(es.Z, {
            tooltipText: eC.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
            onClick: this.handleClickLeaveEmbeddedActivityButton(e.applicationId, t),
            icon: h.DoorExitIcon,
            iconForeground: eI.__invalid_actionIcon
        });
    }
    renderBroadcastButton() {
        let {channel: e} = this.props;
        return null != e && (0, F.vd)(e.type) ? null : (0, i.jsx)(ep.Z, {});
    }
    renderBroadcastSettingsButton() {
        let {broadcast: e} = this.props;
        return null == e ? null : (0, i.jsx)(e_.Z, {});
    }
    renderSparkles() {
        let {useReducedMotion: e} = this.props;
        async function t() {
            let {default: e} = await n.e('5217').then(n.t.bind(n, 801048, 19));
            return e;
        }
        return (0, i.jsx)('div', {
            className: eI.sparkleContainer,
            children: (0, i.jsx)(h.LottieAnimation, {
                importData: t,
                shouldAnimate: !e,
                className: eI.sparkles
            })
        });
    }
    renderActions() {
        let e = this.renderGoLiveButton(), t = this.renderDropsButton(), n = this.renderInviteButton(), l = this.renderLeaveEmbeddedActivityButton(), r = this.renderClipsButton(), a = this.renderBroadcastButton(), s = this.renderBroadcastSettingsButton();
        return null == e && null == n && null == l ? null : (0, i.jsxs)('div', {
            className: eI.actions,
            children: [
                a,
                e,
                s,
                n,
                null == e ? l : r,
                t
            ]
        });
    }
    getGameName() {
        let {
            runningGame: e,
            application: t
        } = this.props;
        return null != t ? t.name : null != e ? e.name : eC.Z.Messages.STATUS_UNKNOWN;
    }
    renderGame() {
        let {
                isStreaming: e,
                dropsPartnerGame: t,
                application: n,
                runningGame: l
            } = this.props, r = this.getGameName();
        return (0, i.jsxs)('div', {
            className: a()(eI.gameWrapper, { [eI.clickableGameWrapper]: null != n }),
            children: [
                (0, i.jsxs)('div', {
                    className: eI.gameIconWrapper,
                    children: [
                        (0, i.jsx)(el.Z, {
                            className: eI.gameIcon,
                            game: n,
                            pid: null == l ? void 0 : l.pid
                        }),
                        e ? (0, i.jsx)(h.VideoIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: eI.liveBadge
                        }) : null
                    ]
                }),
                (0, i.jsx)('div', {
                    className: a()(eI.info, { [eI.infoWithDrops]: null != t }),
                    children: null != r ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(ec.Z, { children: r }),
                            null != t && (0, i.jsx)('div', {
                                className: eI.dropsBadgeWrapper,
                                children: (0, i.jsx)(h.TextBadge, {
                                    text: eC.Z.Messages.DROPS_AVAILABLE,
                                    color: d.Z.unsafe_rawColors.BRAND_500.css,
                                    className: eI.dropsBadge
                                })
                            })
                        ]
                    }) : null
                })
            ]
        });
    }
    renderScreenshare() {
        let {
                isStreaming: e,
                dropsPartnerGame: t,
                streamMetadata: n,
                streamQualityIndicator: l
            } = this.props, {
                title: r,
                sanitizedTitle: s
            } = (0, G.Z)(n);
        return (0, i.jsxs)('div', {
            className: eI.gameWrapper,
            children: [
                e ? (0, i.jsx)(w.Z, { title: s }) : (0, i.jsx)(eu.ZP, {
                    look: eu.ZP.Looks.GRAY,
                    size: eu.ZP.Sizes.SMALL,
                    className: eI.liveIndicator
                }),
                (0, i.jsxs)('div', {
                    className: a()(eI.info, { [eI.infoWithDrops]: null != t }),
                    children: [
                        (0, i.jsx)(ec.Z, { children: r }),
                        null != l && (0, i.jsxs)('div', {
                            className: eI.perksDemoContainer,
                            children: [
                                (0, i.jsx)(h.NitroWheelIcon, {
                                    size: 'xxs',
                                    color: er.JX.PREMIUM_TIER_2
                                }),
                                (0, i.jsx)(H.Z, {
                                    className: eI.perksDemoText,
                                    variant: 'text-xxs/semibold',
                                    children: l
                                })
                            ]
                        }),
                        null != t && (0, i.jsx)('div', {
                            className: eI.dropsBadgeWrapper,
                            children: (0, i.jsx)(h.TextBadge, {
                                text: eC.Z.Messages.DROPS_AVAILABLE,
                                color: d.Z.unsafe_rawColors.BRAND_500.css,
                                className: eI.dropsBadge
                            })
                        })
                    ]
                })
            ]
        });
    }
    renderEmbeddedActivity() {
        let e;
        let {
            application: t,
            embeddedActivity: n,
            channel: l,
            channelName: r,
            guildForConnectedChannel: a
        } = this.props;
        if (null == n || null == l || null == t)
            return null;
        let s = { start: n.connectedSince }, o = r;
        null != a ? (e = ef.Z5c.CHANNEL(a.id, l.id), o = ''.concat(o, ' / ').concat(a.name)) : e = ef.Z5c.CHANNEL(ef.ME, l.id);
        let c = (0, i.jsx)(ea.Z, {
            href: e,
            onClick: this.handleApplicationLinkClick,
            children: (0, i.jsx)(eo.Z, {
                className: eI.channel,
                children: o
            })
        });
        return (0, i.jsxs)('div', {
            className: eI.gameWrapper,
            children: [
                (0, i.jsx)(el.Z, {
                    className: eI.gameIcon,
                    game: t,
                    size: el.Z.Sizes.SMALL
                }),
                (0, i.jsxs)('div', {
                    className: eI.info,
                    children: [
                        (0, i.jsx)(ea.Z, {
                            href: e,
                            onClick: this.handleApplicationLinkClick,
                            children: (0, i.jsx)(ec.Z, {
                                className: eI.activityName,
                                children: t.name
                            })
                        }),
                        (0, F.Qm)(l.type) ? c : (0, i.jsx)(eN, { timestamps: s })
                    ]
                })
            ]
        });
    }
    render() {
        let {
            canGoLive: e,
            embeddedActivity: t,
            runningGame: n,
            isStreaming: l,
            streamMetadata: r,
            className: s
        } = this.props;
        return l || (this.isJoinableActivity() || e) && (null != n || null != t) ? (0, i.jsx)('div', {
            className: a()(eI.panel, s),
            children: (0, i.jsxs)('div', {
                className: eI.body,
                children: [
                    (() => null == n || l && (null == r ? void 0 : r.pid) == null ? null != t ? this.renderEmbeddedActivity() : this.renderScreenshare() : this.renderGame())(),
                    this.renderActions()
                ]
            })
        }) : null;
    }
    constructor(...e) {
        super(...e), eE(this, 'modalKey', void 0), eE(this, 'state', {
            isDropsActivityPanelTooltipOpen: !1,
            showDropsSparkles: this.props.showDropsSparkles
        }), eE(this, 'startBroadcast', () => {
            let {
                    stream: e,
                    channel: t,
                    runningGame: n
                } = this.props, i = null != t && (0, F.vd)(t.type) ? t : null;
            null != i && null != n && (null == e ? (0, m.tE)({
                channelId: i.id,
                pid: n.pid
            }) : (0, Z.v$)((0, j.V9)(e), n.pid));
        }), eE(this, 'handleClickGoLiveButton', () => {
            let {
                    guildId: e,
                    channel: t,
                    canStartBroadcast: l
                } = this.props, r = null != t && (0, F.vd)(t.type) ? t : null, a = null != r ? r.getGuildId() : e;
            if ((null == r ? void 0 : r.isBroadcastChannel()) && l) {
                (0, T.D)(this.startBroadcast);
                return;
            }
            (0, h.openModalLazy)(async () => {
                let {default: e} = await Promise.all([
                    n.e('79477'),
                    n.e('44217')
                ]).then(n.bind(n, 60594));
                return t => (0, i.jsx)(e, {
                    ...t,
                    selectSource: !1,
                    guildId: a,
                    analyticsLocation: ef.Sbl.ACTIVITY_PANEL
                });
            }).then(e => {
                null != e && (this.modalKey = e);
            });
        }), eE(this, 'handleClickStopStreamingButton', () => {
            let {
                    stream: e,
                    channel: t,
                    userId: n
                } = this.props, i = null != t && (0, F.vd)(t.type) ? t : null;
            if ((null == i ? void 0 : i.isBroadcastChannel()) && (null == i ? void 0 : i.isOwner(n))) {
                (0, T.Z)(() => (0, B.Z)(e));
                return;
            }
            (0, B.Z)(e);
        }), eE(this, 'handleClickInviteButton', () => {
            let {
                activity: e,
                analyticsContext: t
            } = this.props;
            o()(null != e, 'Received null activity'), ed.default.track(ef.rMx.OPEN_MODAL, {
                type: 'Send Join Invite',
                application_id: e.application_id,
                location: t.location
            }), (0, p.h7)(e, !1);
        }), eE(this, 'handleClickDropsButton', () => {
            let {
                dropsPartnerGame: e,
                dropsTooltipAction: t,
                userId: n
            } = this.props;
            if (null == e)
                return;
            let i = (0, R.BS)(e);
            null != i && (ed.default.track(ef.rMx.DROPS_ACTIVITY_PANEL_BUTTON_CLICK, {
                user_id: n,
                drops_quest_id: i.dropsQuestId,
                game_id: i.dropsGameId,
                game_name: i.title.toLowerCase(),
                show_sparkles: this.state.showDropsSparkles,
                tooltip_action: t
            }), this.setState({
                isDropsActivityPanelTooltipOpen: !this.state.isDropsActivityPanelTooltipOpen,
                showDropsSparkles: !1
            }));
        }), eE(this, 'handleClickLeaveEmbeddedActivityButton', (e, t) => () => {
            (0, E.mW)({
                channelId: t.id,
                applicationId: e
            });
        }), eE(this, 'renderClipsButton', () => {
            let {stream: e} = this.props;
            return null == e ? null : (0, i.jsx)(A.Z, {});
        }), eE(this, 'handleApplicationLinkClick', () => {
            var e;
            let {
                channel: t,
                embeddedActivity: n
            } = this.props;
            o()(null != t, 'Channel is null during navigation click'), o()(null != n, 'Activity null during navigation click'), (0, F.vd)(t.type) && _.Z.selectParticipant(t.id, n.applicationId), f.Z.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : ef.ME, t.id), (0, F.Qm)(t.type) && (0, E.tg)(em.Ez.PANEL);
        });
    }
}
t.Z = (0, C.Z)(function (e) {
    var t;
    let {
            guildId: n,
            ...l
        } = e, r = (0, c.e7)([Y.default], () => Y.default.getId()), a = (0, c.e7)([
            P.ZP,
            ei.Z
        ], () => (0, k.Z)(P.ZP, ei.Z)), s = (0, c.e7)([
            ee.Z,
            z.Z
        ], () => z.Z.getChannel(ee.Z.getVoiceChannelId())), o = (0, c.e7)([N.ZP], () => N.ZP.getConnectedActivityChannelId()), d = (0, c.e7)([z.Z], () => z.Z.getChannel(o)), h = (0, c.e7)([q.Z], () => q.Z.getGuild(null == d ? void 0 : d.guild_id)), [p, _] = (0, c.Wu)([W.Z], () => [
            W.Z.getCurrentUserActiveStream(),
            W.Z.getStreamerActiveStreamMetadata()
        ]), f = (0, c.e7)([I.Z], () => I.Z.useReducedMotion), m = (0, c.e7)([M.Z], () => M.Z.getActivityPanelTooltipAction()), {
            partnerGame: g,
            dropsActivityPanelExperienceBlocked: C,
            showDropsSparkles: E
        } = (0, b.c)(eg.X2.FORTNITE, a, u.z.QUEST_2_ENROLLMENT_TOOLTIP, u.z.QUEST_2_COMPLETION_TOOLTIP), x = (0, c.e7)([N.ZP], () => null != d ? N.ZP.getSelfEmbeddedActivityForChannel(d.id) : null), Z = (0, c.e7)([
            q.Z,
            J.Z,
            K.ZP
        ], () => null != s ? D.JL(s, q.Z, J.Z, !1) : null != n && D.h_(K.ZP.getChannels(n), q.Z, J.Z).length > 0), [T] = (0, S.Z)([null !== (t = function () {
                if (null != _ && null != _.id)
                    return _.id;
                if (null != a && null != a.id)
                    return a.id;
                if (null != x)
                    return x.applicationId;
            }()) && void 0 !== t ? t : '']), A = (0, c.e7)([Q.Z], () => (0, U.Z)(Q.Z) && (0, eh.isWindows)()), R = (0, c.e7)([X.Z], () => null != r ? X.Z.findActivity(r, e => e.type === ef.IIU.PLAYING) : null), y = null != p && p.ownerId === r && p.state !== ef.jm8.ENDED, O = (0, c.e7)([et.Z], () => et.Z.getBroadcast()), j = (0, v.Z)() && null != a, G = (0, c.e7)([
            en.default,
            $.Z
        ], () => null != d ? (0, L.F6)(d, en.default, $.Z) : void 0), w = (0, V.Z)(null == s ? void 0 : s.id, r);
    return (0, i.jsx)(ex, {
        ...l,
        guildId: n,
        canGoLive: A,
        activity: R,
        embeddedActivity: x,
        showDropsSparkles: E,
        dropsPartnerGame: g,
        dropsActivityPanelExperienceBlocked: C,
        userId: r,
        runningGame: a,
        application: T,
        useReducedMotion: f,
        isStreaming: y,
        channel: d,
        canStream: Z,
        dropsTooltipAction: m,
        stream: p,
        streamMetadata: _,
        broadcast: O,
        canStartBroadcast: j,
        channelName: G,
        guildForConnectedChannel: h,
        streamQualityIndicator: w
    });
});
