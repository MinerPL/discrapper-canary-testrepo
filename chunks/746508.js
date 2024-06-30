n(47120);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(512722), o = n.n(l), c = n(613828), d = n(442837), u = n(592471), _ = n(864094), E = n(75735), h = n(382600), I = n(481060), m = n(846027), p = n(239091), g = n(925549), T = n(284056), S = n(730749), C = n(2052), N = n(40851), f = n(317381), A = n(596040), Z = n(588580), L = n(374065), v = n(451576), O = n(938655), R = n(403404), x = n(100527), P = n(906732), b = n(158631), M = n(793865), D = n(933557), y = n(258609), j = n(446226), U = n(935261), G = n(74299), w = n(803647), k = n(142497), B = n(810788), H = n(160404), V = n(703656), F = n(917405), Y = n(641015), W = n(848543), z = n(565799), K = n(501655), q = n(71275), Q = n(600518), X = n(485287), J = n(754277), $ = n(590415), ee = n(695346), et = n(923973), en = n(829750), ei = n(189771), es = n(544384), ea = n(560688), er = n(127608), el = n(76021), eo = n(173507), ec = n(25827), ed = n(199902), eu = n(314897), e_ = n(592125), eE = n(430824), eh = n(819640), eI = n(131951), em = n(496675), ep = n(19780), eg = n(699516), eT = n(594174), eS = n(979651), eC = n(938475), eN = n(285952), ef = n(976401), eA = n(333454), eZ = n(626135), eL = n(63063), ev = n(51144), eO = n(594117), eR = n(226323), ex = n(981631), eP = n(190378), eb = n(689938), eM = n(707747), eD = n(331651);
function ey(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
function ej(e) {
    let t = e.currentTarget;
    eZ.default.track(ex.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: ex.jXE.NOISE_CANCELLATION_POPOUT }
    });
}
function eU() {
    let e = s.useRef(null);
    (0, I.useFocusLock)(e), s.useEffect(() => {
        eZ.default.track(ex.rMx.OPEN_POPOUT, { type: ex.jXE.NOISE_CANCELLATION_POPOUT });
    }, []);
    let t = (0, d.e7)([eI.Z], () => eI.Z.getNoiseCancellation());
    return (0, i.jsxs)('div', {
        ref: e,
        className: eM.noiseCancellationPopout,
        children: [
            (0, i.jsx)(I.FormSwitch, {
                hideBorder: !0,
                className: eD.marginBottom4,
                value: t,
                onChange: () => m.Z.setNoiseCancellation(!t, { section: ex.jXE.NOISE_CANCELLATION_POPOUT }),
                note: eb.Z.Messages.NOISE_CANCELLATION_POPOUT_DESCRIPTION,
                children: eb.Z.Messages.NOISE_CANCELLATION_POPOUT_HEADER
            }),
            (0, i.jsx)(T.Z, {
                title: eb.Z.Messages.NOISE_CANCELLATION_POPOUT_MIC_TEST_TITLE,
                notchBackground: T._.BLACK,
                buttonTest: eb.Z.Messages.NOISE_CANCELLATION_POPOUT_TEST,
                buttonStop: eb.Z.Messages.NOISE_CANCELLATION_POPOUT_STOP,
                buttonClassName: eM.micTestButton,
                buttonColor: I.Button.Colors.PRIMARY,
                location: { section: ex.jXE.NOISE_CANCELLATION_POPOUT }
            }),
            (0, i.jsx)(I.FormTitle, {
                tag: I.FormTitleTags.H5,
                className: r()(eD.marginBottom8, eD.marginTop20),
                children: eb.Z.Messages.NOISE_CANCELLATION_POPOUT_FOOTER
            }),
            (0, i.jsxs)(eN.Z, {
                justify: eN.Z.Justify.BETWEEN,
                className: eM.__invalid_footer,
                children: [
                    (0, i.jsx)(I.Anchor, {
                        href: ex.EYA.KRISP,
                        onClick: e => ej(e),
                        children: (0, i.jsx)('div', { className: eM.krispLogo })
                    }),
                    (0, i.jsx)(I.Anchor, {
                        href: eL.Z.getArticleURL(ex.BhN.NOISE_SUPPRESSION),
                        className: eM.krispLink,
                        onClick: e => ej(e),
                        children: eb.Z.Messages.LEARN_MORE
                    })
                ]
            })
        ]
    });
}
function eG() {
    let e = (0, d.e7)([J.Z], () => J.Z.isMuted()), t = e ? eb.Z.Messages.STAGE_MUSIC_UNMUTE : eb.Z.Messages.STAGE_MUSIC_MUTE;
    return (0, i.jsx)(ef.Z, {
        'aria-label': t,
        tooltipText: t,
        icon: e ? I.MusicSlashIcon : I.MusicIcon,
        onClick: () => (0, Q.v)(!e)
    });
}
function ew(e) {
    let {
            channel: t,
            enableActivities: n,
            disabled: a
        } = e, l = (0, et.Z)(), o = (0, ei.Z)(t), c = (0, d.cj)([f.ZP], () => null != f.ZP.getSelfEmbeddedActivityForChannel(t.id)), u = (0, Y.Z)(t), {
            reachedLimit: _,
            limit: h
        } = (0, en.Z)(t), p = s.useCallback(() => {
            (0, ea.Z)();
        }, []), g = (0, N.bp)(), T = s.useCallback(e => {
            if (eI.Z.isVideoEnabled() === e)
                return;
            let n = () => {
                var n;
                m.Z.setVideoEnabled(e), e && (0, V.uL)(ex.Z5c.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : ex.ME, t.id));
            };
            e ? (0, eo.Z)(n, g) : n();
        }, [
            t,
            g
        ]), S = c || n || u, {
            Component: C,
            play: A,
            events: Z
        } = (0, E.o)(l.enabled ? 'disable' : 'enable');
    return s.useEffect(() => () => A(), [
        l.enabled,
        A
    ]), (0, i.jsx)(ec.Z, {
        onChange: T,
        onCameraUnavailable: p,
        hasPermission: o,
        channelLimit: h,
        channelLimitReached: _,
        ...l,
        enabled: !a && l.enabled,
        children: e => {
            let {
                    unavailable: t,
                    active: n,
                    label: s,
                    iconComponent: a,
                    ...l
                } = e, o = (0, i.jsx)(C, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: r()(eM.buttonIcon, { [eM.withText]: !S }),
                    color: 'currentColor'
                });
            return (0, i.jsx)(I.Popout, {
                renderPopout: e => {
                    let {closePopout: t} = e;
                    return (0, i.jsx)(M.Z, { onClose: t });
                },
                position: 'top',
                align: 'center',
                animation: I.Popout.Animation.FADE,
                children: (e, a) => {
                    let {
                            onClick: c,
                            ...d
                        } = e, {isShown: u} = a;
                    return (0, i.jsx)(I.Tooltip, {
                        text: s,
                        children: e => (0, i.jsx)(I.Button, {
                            ...l,
                            ...e,
                            ...d,
                            onClick: t => {
                                var n;
                                l.onClick(t), null === (n = e.onClick) || void 0 === n || n.call(e), u && c(t);
                            },
                            onMouseEnter: () => {
                                var t, n;
                                null === (t = e.onMouseEnter) || void 0 === t || t.call(e), null === (n = d.onMouseEnter) || void 0 === n || n.call(d), Z.onMouseEnter();
                            },
                            onMouseLeave: () => {
                                var t;
                                null === (t = e.onMouseLeave) || void 0 === t || t.call(e), Z.onMouseLeave();
                            },
                            onContextMenu: t => {
                                var n;
                                c(t), null === (n = e.onContextMenu) || void 0 === n || n.call(e);
                            },
                            size: I.Button.Sizes.SMALL,
                            className: r()(eM.button, eM.buttonColor, {
                                [eM.buttonActive]: n,
                                [eM.fauxDisabled]: t,
                                [eM.disabled]: l.disabled
                            }),
                            innerClassName: eM.buttonContents,
                            wrapperClassName: eM.button,
                            fullWidth: !0,
                            children: S ? o : (0, i.jsxs)(eN.Z, {
                                align: eN.Z.Align.CENTER,
                                children: [
                                    o,
                                    eb.Z.Messages.VIDEO
                                ]
                            })
                        })
                    });
                }
            });
        }
    });
}
function ek(e) {
    let {
            channel: t,
            enableActivities: n
        } = e, s = (0, N.bp)(), {analyticsLocations: a} = (0, P.ZP)(), l = s === ex.IlC.POPOUT, o = (0, L.KF)(t.id), c = (0, L.g5)(o), [_] = (0, d.e7)([f.ZP], () => null != t.id && '' !== t.id ? f.ZP.getEmbeddedActivitiesForChannel(t.id) : f.i6), {userInActivity: E} = (0, d.cj)([f.ZP], () => ({ userInActivity: null != f.ZP.getSelfEmbeddedActivityForChannel(t.id) })), h = (0, C.O)(), m = (0, Z.a)(), p = o !== L.jy.CAN_LAUNCH, {
            Component: g,
            events: T
        } = (0, u.s)();
    return n ? (0, i.jsx)(I.Tooltip, {
        text: c,
        children: e => (0, i.jsxs)(I.Button, {
            ...e,
            fullWidth: !0,
            size: I.Button.Sizes.SMALL,
            ...T,
            onClick: () => {
                var n;
                T.onClick(), (0, R.Z)({
                    channel: t,
                    guildId: t.guild_id,
                    locationObject: h.location,
                    openInPopout: l,
                    analyticsLocations: a,
                    opensAppLauncherModal: !0
                }), null === (n = e.onClick) || void 0 === n || n.call(e);
            },
            onMouseEnter: () => {
                var t;
                T.onMouseEnter(), null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
            },
            onMouseLeave: () => {
                var t;
                T.onMouseLeave(), null == e || null === (t = e.onMouseLeave) || void 0 === t || t.call(e);
            },
            disabled: p,
            className: r()(eM.button, eM.buttonColor, {
                [eM.buttonActive]: E || null != _,
                [eM.disabled]: p
            }),
            innerClassName: eM.buttonContents,
            wrapperClassName: eM.button,
            children: [
                m ? (0, i.jsx)(O.A, {
                    top: -1,
                    right: -1
                }) : null,
                (0, i.jsx)(g, {
                    size: 'sm',
                    color: 'currentColor',
                    className: eM.buttonIcon
                })
            ]
        })
    }) : null;
}
function eB(e) {
    let t, {
            channel: n,
            canGoLive: a,
            enableActivities: l,
            disabled: o
        } = e, c = (0, d.e7)([eT.default], () => eT.default.getCurrentUser()), u = (0, d.Wu)([ed.Z], () => ed.Z.getAllActiveStreams()), E = (0, ei.Z)(n), h = n.getGuildId(), m = (0, d.cj)([f.ZP], () => null != f.ZP.getSelfEmbeddedActivityForChannel(n.id)), p = (0, Y.Z)(n), g = s.useCallback(() => {
            (0, el.Z)(h, n.id, ex.jXE.ACTIVITY_PANEL);
        }, [
            h,
            n.id
        ]), T = u.find(e => e.ownerId === (null == c ? void 0 : c.id)), S = (0, es.E)(n, c, u);
    t = null == T ? a ? g : er.Z : () => (0, w.Z)(T);
    let C = null != T || S.length > 0, N = E ? eb.Z.Messages.SHARE_YOUR_SCREEN : eb.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE, A = m || l || p, Z = null != T, {
            Component: L,
            events: v,
            play: O
        } = (0, _.P)(Z ? 'disable' : 'enable');
    s.useEffect(() => () => O(), [
        O,
        Z
    ]);
    let R = (0, i.jsx)(L, {
        color: 'currentColor',
        className: r()(eM.buttonIcon, { [eM.withText]: !A })
    });
    return (0, i.jsx)(I.Popout, {
        renderPopout: e => {
            let {closePopout: t} = e;
            return (0, i.jsx)(es.Z, {
                channel: n,
                currentUser: c,
                activeStreams: u,
                onClose: t,
                handleGoLive: a ? g : er.Z
            });
        },
        position: 'top',
        align: 'center',
        animation: I.Popout.Animation.FADE,
        children: e => {
            let {
                onClick: n,
                onMouseEnter: s,
                ...a
            } = e;
            return (0, i.jsx)(I.Tooltip, {
                text: N,
                children: e => (0, i.jsx)(I.Button, {
                    ...e,
                    size: I.Button.Sizes.SMALL,
                    onClick: i => {
                        var s;
                        C ? n(i) : t(), null === (s = e.onClick) || void 0 === s || s.call(e);
                    },
                    disabled: !E || o,
                    className: r()(eM.button, eM.buttonColor, {
                        [eM.buttonActive]: null != T,
                        [eM.disabled]: !E || o
                    }),
                    ...C ? a : null,
                    onMouseEnter: () => {
                        var t;
                        null == s || s(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e), v.onMouseEnter();
                    },
                    onMouseLeave: () => {
                        var t;
                        null === (t = e.onMouseLeave) || void 0 === t || t.call(e), v.onMouseLeave();
                    },
                    innerClassName: eM.buttonContents,
                    wrapperClassName: eM.button,
                    children: A ? R : (0, i.jsxs)(eN.Z, {
                        align: eN.Z.Align.CENTER,
                        children: [
                            R,
                            eb.Z.Messages.GO_LIVE_SHARE_SCREEN
                        ]
                    })
                })
            });
        }
    });
}
class eH extends s.PureComponent {
    renderConnectionStatus() {
        let e;
        let {
            channel: t,
            guild: n,
            rtcConnectionQuality: s,
            rtcConnectionState: a,
            rtcConnectionLastPing: r,
            hasVideo: l,
            isBroadcasting: o
        } = this.props;
        if (null == t)
            return null;
        let d = (0, D.F6)(t, eT.default, eg.Z);
        return null != n ? (e = ex.Z5c.CHANNEL(n.id, t.id), d = ''.concat(d, ' / ').concat(n.name)) : e = ex.Z5c.CHANNEL(ex.ME, t.id), o && t.isBroadcastChannel() && (d = eb.Z.Messages.BROADCASTING), (0, i.jsx)(F.Z, {
            channelId: t.id,
            quality: s,
            state: a,
            lastPing: r,
            hasVideo: l,
            children: (0, i.jsx)(I.FocusRing, {
                children: (0, i.jsx)(c.rU, {
                    to: e,
                    onClick: this.handleChannelLinkClick,
                    onContextMenu: this.handleChannelLinkContextMenu,
                    children: (0, i.jsx)(eA.Z, {
                        className: eM.channel,
                        children: d
                    })
                })
            })
        });
    }
    renderNoiseCancellation() {
        let {
            noiseCancellationActive: e,
            noiseCancellationError: t,
            hasLayers: n,
            remoteVoiceState: s,
            channel: a,
            voiceStates: r
        } = this.props;
        return null != s ? null : (null == a ? void 0 : a.isGuildStageVoice()) && !(null != r.find(e => e.user.id === eu.default.getId() && (0, $.gf)(e.voiceState) === $.xO.ON_STAGE)) && (0, X.U5)(a.id) ? (0, i.jsx)(eG, {}) : !n && t ? (0, i.jsx)(I.Tooltip, {
            text: eb.Z.Messages.NOISE_CANCELLATION_CPU_OVERUSE,
            tooltipClassName: eM.noiseCancellationTooltip,
            forceOpen: !0,
            children: e => {
                let {'aria-label': t} = e;
                return (0, i.jsx)(ef.Z, {
                    'aria-label': t,
                    tooltipText: null,
                    disabled: !0,
                    icon: I.WaveformSlashIcon
                });
            }
        }) : (0, i.jsx)(I.Popout, {
            position: 'top',
            align: 'center',
            renderPopout: () => (0, i.jsx)(eU, {}),
            children: (t, n) => {
                let {isShown: s} = n;
                return (0, i.jsx)(eV, {
                    popoutProps: t,
                    isShown: s,
                    noiseCancellationActive: e
                });
            }
        }, 'krisp-popout');
    }
    renderVoiceStates() {
        let {
            channel: e,
            voiceStates: t,
            showVoiceStates: n
        } = this.props;
        return null != e && n && 0 !== t.length ? (0, i.jsx)(eR.Z, {
            voiceStates: t,
            channel: e,
            className: eM.voiceUsers
        }) : null;
    }
    renderChannelButtons() {
        let {
            channel: e,
            canGoLive: t,
            remoteVoiceState: n,
            enableActivities: s,
            voiceStates: a,
            selfStream: l,
            isPrivateChannelWithEnabledActivities: o
        } = this.props;
        if (null == e || null != n)
            return null;
        let c = eu.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, q.tu)(e.guild_id) || !t)
                return null;
            let n = a.find(e => e.user.id === c);
            if (null == n || n.voiceState.suppress)
                return null;
        }
        let d = (e.isGuildVoice() || o) && s, {reachedLimit: u} = (0, en.t)(e), _ = (0, q.xJ)(e.id);
        return (0, i.jsxs)('div', {
            className: eM.actionButtons,
            children: [
                (0, i.jsx)(ew, {
                    channel: e,
                    enableActivities: d,
                    disabled: !_ && u
                }),
                (0, i.jsx)(eB, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: d,
                    disabled: e.isGuildStageVoice() && (_ && null == l || !_ && u)
                }),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        d ? (0, i.jsx)(ek, {
                            channel: e,
                            enableActivities: s
                        }) : null,
                        (0, Y.Z)(e) ? (0, i.jsx)(W.Z, {
                            className: r()(eM.button, eM.buttonColor),
                            innerClassName: eM.buttonContents,
                            iconClassName: eM.buttonIcon,
                            channel: e
                        }) : null
                    ]
                })
            ]
        });
    }
    render() {
        let {
            channel: e,
            noiseCancellationSupported: t,
            shouldShowVoicePanelIntroduction: n
        } = this.props;
        return null == e ? null : (0, i.jsx)(I.Popout, {
            renderPopout: this.renderVoicePanelIntroduction,
            position: 'top',
            align: 'center',
            animation: I.Popout.Animation.TRANSLATE,
            shouldShow: n,
            children: () => (0, i.jsxs)('div', {
                className: eM.container,
                children: [
                    (0, i.jsxs)(eN.Z, {
                        className: eM.connection,
                        align: eN.Z.Align.CENTER,
                        children: [
                            (0, i.jsx)('div', {
                                className: eM.inner,
                                children: this.renderConnectionStatus()
                            }),
                            (0, i.jsxs)(eN.Z, {
                                grow: 0,
                                shrink: 0,
                                children: [
                                    t ? this.renderNoiseCancellation() : null,
                                    (0, i.jsx)(eO.Z, { channel: e })
                                ]
                            })
                        ]
                    }),
                    this.renderVoiceStates(),
                    this.renderChannelButtons()
                ]
            })
        });
    }
    constructor(...e) {
        super(...e), ey(this, 'canScreenshare', () => {
            let {
                channel: e,
                canGoLive: t
            } = this.props;
            return t && null != e && null != e.getGuildId();
        }), ey(this, 'handleNoiseCancellationClicked', () => {
            let {noiseCancellationActive: e} = this.props;
            m.Z.setNoiseCancellation(!e, { section: ex.jXE.NOISE_CANCELLATION_POPOUT });
        }), ey(this, 'handleGoLive', () => {
            let {
                    guild: e,
                    channel: t
                } = this.props, n = null != t ? t.getGuildId() : null != e ? e.id : null;
            if (null != n)
                (0, el.Z)(n, t.id, ex.Sbl.VOICE_PANEL);
        }), ey(this, 'handleChannelLinkClick', e => {
            var t;
            let {
                guild: n,
                channel: i
            } = this.props;
            o()(null != i, 'Channel is null during navigation click'), e.stopPropagation(), g.Z.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : ex.ME, i.id);
        }), ey(this, 'handleChannelLinkContextMenu', e => {
            let {channel: t} = this.props;
            (0, p.jW)(e, async () => {
                let {default: e} = await n.e('56944').then(n.bind(n, 600830));
                return n => (0, i.jsx)(e, {
                    ...n,
                    channel: t
                });
            });
        }), ey(this, 'handleCloseVoicePanelIntroduction', () => {
            k.Kw(eP.v.VOICE_PANEL_INTRODUCTION);
        }), ey(this, 'renderVoicePanelIntroduction', () => (0, i.jsxs)('div', {
            className: r()(eM.voicePanelIntroductionWrapper, 'theme-light'),
            children: [
                (0, i.jsx)(I.Heading, {
                    className: eM.voicePanelIntroductionHeader,
                    variant: 'heading-md/semibold',
                    children: eb.Z.Messages.VOICE_PANEL_INTRODUCTION_HEADER
                }),
                (0, i.jsx)(I.Text, {
                    className: eM.voicePanelIntroductionText,
                    variant: 'text-sm/normal',
                    children: eb.Z.Messages.VOICE_PANEL_INTRODUCTION_TEXT
                }),
                (0, i.jsx)(I.Button, {
                    className: eM.voicePanelIntroductionButton,
                    color: I.Button.Colors.BRAND,
                    onClick: this.handleCloseVoicePanelIntroduction,
                    children: eb.Z.Messages.VOICE_PANEL_INTRODUCTION_CLOSE
                })
            ]
        }));
    }
}
function eV(e) {
    let {
            popoutProps: t,
            isShown: n,
            noiseCancellationActive: a
        } = e, {
            play: r,
            Component: l,
            events: o
        } = (0, h.P)(a ? 'disable' : 'enable');
    return s.useEffect(() => () => r(), [
        a,
        r
    ]), (0, i.jsx)(ef.Z, {
        ...t,
        onMouseEnter: () => {
            var e;
            null === (e = t.onMouseEnter) || void 0 === e || e.call(t), o.onMouseEnter();
        },
        onMouseLeave: () => {
            o.onMouseLeave();
        },
        tooltipClassName: eM.noiseCancellationTooltip,
        tooltipText: n ? null : eb.Z.Messages.NOISE_CANCELLATION_TOOLTIP,
        icon: l
    });
}
t.Z = (0, S.Z)(function (e) {
    let t = (0, j.Z)(), n = (0, d.e7)([y.Z], () => y.Z.getAwaitingRemoteSessionInfo()), a = (0, d.e7)([eT.default], () => eT.default.getCurrentUser()), {
            channelId: r,
            ...l
        } = (0, d.cj)([ep.Z], () => null != t ? {
            channelId: t.channelId,
            rtcConnectionQuality: ex.IE4.FINE,
            rtcConnectionState: ex.hes.RTC_CONNECTED,
            rtcConnectionLastPing: 0
        } : {
            channelId: ep.Z.getChannelId(),
            rtcConnectionQuality: ep.Z.getQuality(),
            rtcConnectionState: ep.Z.getState(),
            rtcConnectionLastPing: ep.Z.getLastPing()
        }), o = (0, d.e7)([e_.Z], () => e_.Z.getChannel(r), [r]), c = null == o ? void 0 : o.getGuildId(), u = (0, d.e7)([eE.Z], () => eE.Z.getGuild(c), [c]), _ = (0, d.cj)([eI.Z], () => ({
            noiseCancellationSupported: eI.Z.isNoiseCancellationSupported(),
            noiseCancellationActive: eI.Z.getNoiseCancellation(),
            noiseCancellationError: eI.Z.isNoiseCancellationError(),
            canGoLive: (0, G.Z)(eI.Z)
        })), E = (0, d.e7)([
            eI.Z,
            B.Z
        ], () => B.Z.hasHotspot(eP.v.VOICE_PANEL_INTRODUCTION) && (0, ev.EO)(a) && !eI.Z.isInteractionRequired() && !(null == o ? void 0 : o.isGuildStageVoice())), h = (0, d.e7)([eS.Z], () => null != r && eS.Z.hasVideo(r), [r]), m = (0, d.e7)([ed.Z], () => ed.Z.getCurrentUserActiveStream()), p = (0, d.e7)([eh.Z], () => eh.Z.hasLayers()), g = (0, d.e7)([H.Z], () => H.Z.isViewingRoles(c)), T = (0, d.e7)([em.Z], () => g && !em.Z.can(ex.Plq.VIEW_CHANNEL, o), [
            g,
            o
        ]), S = ee.Fg.useSetting(), [C, N, f] = (0, d.Wu)([
            eC.ZP,
            z.Z
        ], () => (null == o ? void 0 : o.isGuildStageVoice()) ? [
            z.Z.getMutableParticipants(o.id, K.pV.SPEAKER),
            z.Z.getParticipantsVersion(o.id),
            null
        ] : [
            null,
            null,
            null != o ? eC.ZP.getVoiceStatesForChannel(o) : null
        ], [o]), Z = s.useMemo(() => {
            var e, t;
            return null !== (t = null !== (e = null == C ? void 0 : C.map(e => {
                let {
                    user: t,
                    userNick: n,
                    voiceState: i
                } = e;
                return {
                    user: t,
                    nick: n,
                    voiceState: i
                };
            })) && void 0 !== e ? e : f) && void 0 !== t ? t : [];
        }, [
            C,
            N,
            f
        ]), [L, O] = s.useState(!1);
    s.useEffect(() => {
        (g || T) && O(!1);
    }, [
        g,
        T,
        O
    ]);
    let {analyticsLocations: R} = (0, P.ZP)(x.Z.RTC_PANEL), M = (0, A.Z)(null != c ? c : ex.lds, null == o ? void 0 : o.id), D = (0, v.Z)(null == o ? void 0 : o.id), w = (0, b.ZP)();
    return (0, i.jsx)(P.Gt, {
        value: R,
        children: (0, i.jsxs)('div', {
            className: eM.wrapper,
            children: [
                null != t || null != n ? (0, i.jsx)(U.Z, {
                    voiceState: t,
                    awaitingRemoteSessionInfo: n
                }) : null,
                (0, i.jsx)(eH, {
                    ...e,
                    ..._,
                    ...l,
                    enableActivities: M,
                    remoteVoiceState: t,
                    guild: u,
                    channel: o,
                    hasVideo: h,
                    selfStream: m,
                    hasLayers: p,
                    voiceStates: Z,
                    showVoiceStates: S,
                    shouldShowVoicePanelIntroduction: E,
                    isPrivateChannelWithEnabledActivities: D,
                    isBroadcasting: w
                }),
                !L && g && null != c ? (0, i.jsxs)('div', {
                    className: eM.viewAsRolesWarning,
                    children: [
                        (0, i.jsx)(I.Text, {
                            variant: 'text-sm/normal',
                            className: eM.viewAsRolesWarningText,
                            children: T ? eb.Z.Messages.VIEW_AS_ROLES_HIDDEN_VC_WARNING : eb.Z.Messages.VIEW_AS_ROLES_VOICE_WARNING
                        }),
                        (0, i.jsx)(I.Button, {
                            className: eM.viewAsRolesWarningButton,
                            size: I.Button.Sizes.MIN,
                            onClick: () => {
                                O(!0);
                            },
                            children: eb.Z.Messages.DISMISS
                        })
                    ]
                }) : null
            ]
        })
    });
});
