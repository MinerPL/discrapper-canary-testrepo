n.d(t, {
    Z: function () {
        return eG;
    }
}), n(47120), n(653041);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(442837), o = n(704215), c = n(846519), d = n(400354), u = n(652844), _ = n(789639), E = n(481060), h = n(355467), I = n(239091), m = n(230711), p = n(410575), g = n(941129), T = n(83200), S = n(634894), C = n(586902), N = n(515550), f = n(1585), A = n(304761), Z = n(865427), L = n(571250), v = n(628581), O = n(55311), R = n(575175), x = n(64220), P = n(377171), b = n(676035), M = n(427217), D = n(605236), y = n(243778), j = n(730417), U = n(524347), G = n(853197), w = n(810280), k = n(60762), B = n(258609), H = n(278464), V = n(331541), F = n(332473), Y = n(240504), W = n(804545), z = n(637906), K = n(39370), q = n(19199), Q = n(111653), X = n(866483), J = n(14357), $ = n(393333), ee = n(763296), et = n(640806), en = n(484459), ei = n(584427), es = n(52538), ea = n(331187), er = n(879815), el = n(294629), eo = n(314897), ec = n(592125), ed = n(819640), eu = n(131951), e_ = n(19780), eE = n(885110), eh = n(246946), eI = n(594174), em = n(78839), ep = n(285952), eg = n(546591), eT = n(976401), eS = n(333454), eC = n(864441), eN = n(626135), ef = n(768581), eA = n(572004), eZ = n(70956), eL = n(374023), ev = n(51144), eO = n(998502), eR = n(981631), ex = n(215023), eP = n(702512), eb = n(689938), eM = n(812118);
function eD(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let ey = eO.ZP.getEnableHardwareAcceleration() ? E.AnimatedAvatar : E.Avatar, ej = 30 * eZ.Z.Millis.DAY;
class eU extends s.PureComponent {
    get isCopiedStreakGodlike() {
        let {copiedStreak: e} = this.state;
        return e >= 10;
    }
    componentDidUpdate(e) {
        let {
                speakingWhileMuted: t,
                occluded: n
            } = e, {
                speakingWhileMuted: i,
                occluded: s
            } = this.props;
        s !== n && this.handleOccludedChanged(), i !== t && this.handleSpeakingWhileMutedChanged();
    }
    componentWillUnmount() {
        this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop();
    }
    renderCopiedSuccess() {
        let {copiedStreak: e} = this.state, t = [
                eb.Z.Messages.COPY_SUCCESS_1,
                eb.Z.Messages.COPY_SUCCESS_2,
                eb.Z.Messages.COPY_SUCCESS_3,
                eb.Z.Messages.COPY_SUCCESS_4,
                eb.Z.Messages.COPY_SUCCESS_5,
                eb.Z.Messages.COPY_SUCCESS_6,
                eb.Z.Messages.COPY_SUCCESS_7,
                eb.Z.Messages.COPY_SUCCESS_8,
                eb.Z.Messages.COPY_SUCCESS_9,
                eb.Z.Messages.COPY_SUCCESS_10,
                eb.Z.Messages.COPY_SUCCESS_11
            ], n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, i.jsx)(E.Shaker, {
            isShaking: this.isCopiedStreakGodlike,
            children: t[n]
        });
    }
    renderNameTag() {
        let e;
        let {hovered: t} = this.state, {
                customStatusActivity: n,
                userTag: s,
                currentUser: a,
                status: r
            } = this.props;
        if (null == a)
            return null;
        let l = ev.ZP.getName(a), o = null != r && r !== eR.Skl.UNKNOWN, c = null != n;
        return (c || o && a.isPomelo()) && (e = (0, i.jsx)(eg.Z, {
            hoverText: s,
            forceHover: t,
            children: c ? (0, i.jsx)(M.Z, {
                activity: n,
                emojiClassName: eM.emoji,
                className: eM.customStatus
            }) : ev.ZP.humanizeStatus(r)
        })), (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: eM.panelTitleContainer,
                    children: (0, i.jsx)(eC.Z, { children: l })
                }),
                (0, i.jsx)('div', {
                    className: eM.panelSubtextContainer,
                    children: (0, i.jsx)(eS.Z, { children: null != e ? e : s })
                })
            ]
        });
    }
    renderAvatarWithPopout() {
        let {
            speaking: e,
            streaming: t,
            currentUser: n,
            status: s
        } = this.props;
        if (null == n)
            return null;
        let a = (0, ef.NZ)({
            avatarDecoration: n.avatarDecoration,
            size: (0, f.y9)(E.AvatarSizes.SIZE_32)
        });
        return (0, i.jsx)(p.Z, {
            object: eR.qAy.AVATAR,
            children: (0, i.jsx)(E.Popout, {
                renderPopout: e => {
                    let {
                        closePopout: t,
                        setPopoutRef: s
                    } = e;
                    return (0, i.jsx)('div', {
                        className: eM.accountProfilePopoutWrapper,
                        children: (0, i.jsx)(V.Z, {
                            currentUser: n,
                            setPopoutRef: s,
                            onClose: () => {
                                this.handleMouseLeave(), null == t || t();
                            }
                        })
                    });
                },
                position: 'top',
                align: 'left',
                animation: E.Popout.Animation.FADE,
                spacing: 14,
                fixed: !0,
                preload: () => (0, en.Z)(n.id, null == n ? void 0 : n.getAvatarURL(null, 80)),
                children: l => (0, i.jsxs)(E.Clickable, {
                    ...l,
                    'aria-label': eb.Z.Messages.SET_STATUS,
                    className: eM.avatarWrapper,
                    children: [
                        (0, i.jsx)(ey, {
                            size: E.AvatarSizes.SIZE_32,
                            src: n.getAvatarURL(void 0, 32, !1),
                            avatarDecoration: a,
                            'aria-label': n.username,
                            status: t ? eR.Skl.STREAMING : s,
                            isSpeaking: e,
                            className: eM.avatar
                        }),
                        (0, i.jsx)('div', {
                            className: r()(eM.nameTag, { [eM.canCopy]: eA.wS }),
                            children: this.renderNameTag()
                        })
                    ]
                })
            })
        });
    }
    renderNameZone() {
        let {
            currentUser: e,
            dismissibleContents: t
        } = this.props;
        return null == e ? null : (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(y.Z, {
                contentTypes: t.avatar,
                children: e => {
                    let {
                        visibleContent: t,
                        markAsDismissed: n
                    } = e;
                    if (t === o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)
                        return (0, i.jsx)(x.Z, {
                            markAsDismissed: n,
                            children: () => this.renderAvatarWithPopout()
                        });
                    return this.renderAvatarWithPopout();
                }
            })
        });
    }
    render() {
        let {
                currentUser: e,
                selfDeaf: t,
                selfMute: n,
                awaitingRemote: s,
                serverMute: a,
                serverDeaf: r,
                suppress: l,
                dismissibleContents: c
            } = this.props, {shouldShowSpeakingWhileMutedTooltip: d} = this.state;
        return null == e ? null : (0, i.jsxs)('div', {
            className: eM.container,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            children: [
                this.renderNameZone(),
                (0, i.jsxs)(ep.Z, {
                    grow: 0,
                    children: [
                        (0, i.jsx)(ek, {
                            selfMute: n,
                            serverMute: a,
                            suppress: l,
                            awaitingRemote: s,
                            tooltipText: d ? eb.Z.Messages.ACCOUNT_SPEAKING_WHILE_MUTED : (0, v.Z)(n, a, l, s),
                            tooltipColor: d ? E.TooltipColors.GREEN : void 0,
                            tooltipForceOpen: d || void 0,
                            onMouseEnter: this.handleMouseEnterMute,
                            onMouseLeave: this.handleMouseLeaveMute,
                            onClick: this.handleToggleSelfMute,
                            onContextMenu: this.handleInputAudioContextMenu
                        }),
                        (0, i.jsx)(eB, {
                            selfDeaf: t,
                            serverDeaf: r,
                            onClick: this.handleToggleSelfDeaf,
                            onContextMenu: this.handleOutputAudioContextMenu,
                            awaitingRemote: s
                        }),
                        (0, i.jsx)(y.Z, {
                            contentTypes: c.settings,
                            children: e => {
                                let {
                                    visibleContent: t,
                                    markAsDismissed: n
                                } = e;
                                switch (t) {
                                case o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2:
                                    return (0, i.jsx)(E.Popout, {
                                        position: 'top',
                                        align: 'center',
                                        shouldShow: !0,
                                        renderPopout: () => (0, i.jsx)(K.Z, {}),
                                        children: this.renderSettingsGear
                                    });
                                case o.z.QUEST_2_ENROLLMENT_TOOLTIP:
                                    return (0, i.jsx)(E.Popout, {
                                        position: 'top',
                                        align: 'center',
                                        shouldShow: !0,
                                        renderPopout: () => (0, i.jsx)(w.Z, {
                                            markAsDismissed: n,
                                            partnerGame: eP.X2.FORTNITE
                                        }),
                                        children: this.renderSettingsGear
                                    });
                                case o.z.QUEST_2_COMPLETION_TOOLTIP:
                                    return (0, i.jsx)(E.Popout, {
                                        position: 'top',
                                        align: 'center',
                                        shouldShow: !0,
                                        renderPopout: () => (0, i.jsx)(k.Z, {
                                            markAsDismissed: n,
                                            partnerGame: eP.X2.FORTNITE
                                        }),
                                        children: this.renderSettingsGear
                                    });
                                case o.z.USER_SAFETY_SAFE_DIRECT_MESSAGING:
                                    return (0, i.jsx)(E.Popout, {
                                        position: 'top',
                                        align: 'center',
                                        shouldShow: !0,
                                        renderPopout: () => (0, i.jsx)(ea.Z, { markAsDismissed: n }),
                                        children: this.renderSettingsGear
                                    });
                                case o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                                    return (0, i.jsx)(E.Popout, {
                                        position: 'top',
                                        align: 'center',
                                        shouldShow: !0,
                                        renderPopout: () => (0, i.jsx)(X.Z, { markAsDismissed: n }),
                                        children: this.renderSettingsGear
                                    });
                                case o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                                    return (0, i.jsx)(E.Popout, {
                                        position: 'top',
                                        align: 'center',
                                        shouldShow: !0,
                                        renderPopout: () => (0, i.jsx)(J.Z, { markAsDismissed: n }),
                                        children: this.renderSettingsGear
                                    });
                                case o.z.SOUNDBOARD_VOLUME_EDUCATION:
                                    return (0, i.jsx)(E.Popout, {
                                        position: 'top',
                                        align: 'center',
                                        shouldShow: !0,
                                        renderPopout: () => (0, i.jsx)(et.Z, { markAsDismissed: n }),
                                        children: this.renderSettingsGear
                                    });
                                case o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
                                    return (0, i.jsx)(E.Popout, {
                                        position: 'top',
                                        align: 'center',
                                        shouldShow: !0,
                                        renderPopout: () => (0, i.jsx)($.P, { markAsDismissed: n }),
                                        children: this.renderSettingsGear
                                    });
                                case o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                                    return (0, i.jsx)(E.Popout, {
                                        position: 'top',
                                        align: 'center',
                                        shouldShow: !0,
                                        renderPopout: () => (0, i.jsx)(es.Z, {}),
                                        children: this.renderSettingsGear
                                    });
                                case o.z.PRIDE_ICONS_COACHMARK:
                                    return (0, i.jsx)(E.Popout, {
                                        position: 'top',
                                        align: 'center',
                                        shouldShow: !0,
                                        renderPopout: () => (0, i.jsx)(N.Z, { markAsDismissed: n }),
                                        children: this.renderSettingsGear
                                    });
                                default:
                                    return this.renderSettingsGear();
                                }
                            }
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e), eD(this, 'copiedTimeout', new c.V7()), eD(this, 'copiedDecayTimeout', new c.V7()), eD(this, 'speakingWhileMutedTooltipTimeout', new c.V7()), eD(this, 'state', {
            hovered: !1,
            copiedStreak: 0,
            shouldShowNametagTooltip: !1,
            shouldShowCopiedFeedback: !1,
            shouldShowSpeakingWhileMutedTooltip: !1,
            hoveringOnMute: !1
        }), eD(this, 'handleToggleSelfMute', () => {
            let {
                serverMute: e,
                suppress: t
            } = this.props;
            (0, R.Z)(e, t);
        }), eD(this, 'handleToggleSelfDeaf', () => {
            let {serverDeaf: e} = this.props;
            (0, O.Z)(e);
        }), eD(this, 'handleOpenAccountSettings', () => {
            this.handleOpenSettings();
        }), eD(this, 'handleOpenSettings', function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.oAB.ACCOUNT, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0;
            m.Z.open(e, t, n);
        }), eD(this, 'handleOpenSettingsContextMenu', e => {
            let {currentUser: t} = this.props;
            null != t && (0, I.jW)(e, async () => {
                let {default: e} = await Promise.all([
                    n.e('96427'),
                    n.e('77298'),
                    n.e('23357'),
                    n.e('19503'),
                    n.e('15972'),
                    n.e('12013'),
                    n.e('6416'),
                    n.e('39612'),
                    n.e('32776'),
                    n.e('95900'),
                    n.e('33053'),
                    n.e('8016'),
                    n.e('50654'),
                    n.e('76540'),
                    n.e('68136'),
                    n.e('87624'),
                    n.e('22646'),
                    n.e('5528'),
                    n.e('33352'),
                    n.e('30419'),
                    n.e('18824'),
                    n.e('44371'),
                    n.e('62566')
                ]).then(n.bind(n, 923422));
                return n => (0, i.jsx)(e, {
                    ...n,
                    user: t,
                    premiumSubscription: this.props.premiumSubscription,
                    webBuildOverride: this.props.webBuildOverride
                });
            });
        }), eD(this, 'handleInputAudioContextMenu', e => {
            (0, I.jW)(e, async () => {
                let {default: e} = await Promise.resolve().then(n.bind(n, 659580));
                return () => (0, i.jsx)(e, {
                    onClose: I.Zy,
                    renderInputDevices: !0,
                    renderInputModes: !0,
                    renderInputVolume: !0
                });
            });
        }), eD(this, 'handleOutputAudioContextMenu', e => {
            (0, I.jW)(e, async () => {
                let {default: e} = await Promise.resolve().then(n.bind(n, 659580));
                return () => (0, i.jsx)(e, {
                    onClose: I.Zy,
                    renderOutputDevices: !0,
                    renderOutputVolume: !0
                });
            });
        }), eD(this, 'handleMouseEnter', () => {
            this.setState({ hovered: !0 });
        }), eD(this, 'handleMouseLeave', () => {
            this.setState({ hovered: !1 });
        }), eD(this, 'handleMouseEnterMute', () => {
            this.setState({
                hoveringOnMute: !0,
                shouldShowSpeakingWhileMutedTooltip: !1
            }), this.speakingWhileMutedTooltipTimeout.stop();
        }), eD(this, 'handleMouseLeaveMute', () => {
            this.setState({ hoveringOnMute: !1 });
        }), eD(this, 'handleCopyTag', () => {
            let {currentUser: e} = this.props, {
                    shouldShowNametagTooltip: t,
                    copiedStreak: n
                } = this.state;
            if (null == e)
                return;
            (0, eA.JG)(ev.ZP.getUserTag(e, {
                decoration: 'never',
                identifiable: 'always'
            })), eN.default.track(eR.rMx.TEXT_COPIED, { type: 'User Tag' });
            let i = {
                shouldShowCopiedFeedback: !0,
                shouldShowNametagTooltip: !0
            };
            !t && (i.copiedStreak = n + 1), this.setState(i, () => {
                this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
            });
        }), eD(this, 'handleOccludedChanged', () => {
            let {occluded: e} = this.props;
            e && this.setState({
                shouldShowNametagTooltip: !1,
                shouldShowSpeakingWhileMutedTooltip: !1
            });
        }), eD(this, 'handleSpeakingWhileMutedChanged', () => {
            let {
                    selfMute: e,
                    serverMute: t,
                    suppress: n,
                    speakingWhileMuted: i,
                    occluded: s
                } = this.props, {hoveringOnMute: a} = this.state;
            i ? !a && e && !t && !n && !s && this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                this.speakingWhileMutedTooltipTimeout.start(2000, () => this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }));
            }) : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }), this.speakingWhileMutedTooltipTimeout.stop());
        }), eD(this, 'renderSettingsGear', () => (0, i.jsx)(ew, {
            isEligibleForPomelo: this.props.isEligibleForPomelo,
            webBuildOverride: this.props.webBuildOverride,
            onClick: this.handleOpenAccountSettings,
            onContextMenu: this.handleOpenSettingsContextMenu
        }));
    }
}
function eG() {
    var e, t;
    let n = (0, l.e7)([eI.default], () => eI.default.getCurrentUser()), a = (0, j._g)(eP.X2.FORTNITE), r = (0, l.e7)([eo.default], () => eo.default.getId()), c = (0, b.a)(), {
            streaming: d,
            status: u
        } = (0, l.cj)([eE.Z], () => ({
            streaming: null != eE.Z.findActivity(e => e.type === eR.IIU.STREAMING),
            status: eE.Z.getStatus()
        })), _ = (0, C.Z)({ userId: r }), I = ev.ZP.useUserTag(n, { decoration: 'never' }), m = (0, l.e7)([eh.Z], () => eh.Z.hidePersonalInformation), p = (0, l.e7)([
            e_.Z,
            ec.Z
        ], () => {
            let e = e_.Z.getChannelId();
            return null != e ? ec.Z.getChannel(e) : null;
        }), {
            mute: N,
            selfMute: f,
            suppress: L
        } = (0, el.Z)(p), {
            selfDeaf: v,
            deaf: O
        } = (0, er.Z)(p), R = (0, l.e7)([A.C], () => {
            var e;
            return (0, Z.fD)() ? null === (e = A.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null;
        }), x = (0, l.e7)([em.ZP], () => em.ZP.getPremiumTypeSubscription()), P = (0, l.e7)([eu.Z], () => eu.Z.getEverSpeakingWhileMuted()), M = (0, l.e7)([ed.Z], () => ed.Z.hasLayers()), y = (0, E.useModalsStore)(E.hasAnyModalOpenSelector) || M || eL.s.isDisallowPopupsSet(), w = (0, F.b)(), k = (0, l.e7)([B.Z], () => null != B.Z.getAwaitingRemoteSessionInfo()), V = (0, l.e7)([U.Z], () => U.Z.isCurrentQuestCompleted), K = (0, l.e7)([U.Z], () => U.Z.currentDropQuestGameTitle), X = (0, H.n)(), J = (0, T.O)(), $ = (0, q.D)(), et = (0, g.u)(), en = (0, Q.t)(), es = (0, ei.Z)(n), ea = (null == n ? void 0 : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === ex.rL, ep = 'account';
    (0, S.j)({
        location: ep + ' auto on',
        autoTrackExposure: !0
    }), (0, S.j)({
        location: ep + ' auto off',
        autoTrackExposure: !1
    }), (0, q.o)();
    let eg = (0, l.e7)([ee.Z], () => ee.Z.hasHadOtherUserPlaySoundInSession()), eT = function () {
            let e = (0, D.wE)(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), [t, n] = (0, l.Wu)([Y.Z], () => [
                    Y.Z.hasFetchedRelevance,
                    Y.Z.profileThemesRelevanceExceeded
                ]), [i, a] = (0, l.Wu)([em.ZP], () => [
                    em.ZP.hasFetchedMostRecentPremiumTypeSubscription(),
                    em.ZP.getMostRecentPremiumTypeSubscription()
                ]), {enabled: r} = z.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }), c = s.useMemo(() => {
                    let e = new Date().getTime();
                    return null != a && (a.status === eR.O0b.ACTIVE || e - a.currentPeriodEnd.getTime() < ej);
                }, [a]);
            return s.useEffect(() => {
                (async () => {
                    if (e || null != n || !r)
                        return;
                    if (!i) {
                        await (0, h.ou)();
                        return;
                    }
                    if (!c)
                        !t && await (0, h.l0)();
                })();
            }, [
                r,
                n,
                e,
                i,
                t,
                c
            ]), !e && !!r && !c && null != n && n;
        }(), {enabled: eS} = (0, W._)({ location: 'AccountConnected' }), eC = {
            avatar: [],
            settings: []
        };
    return !y && (eT && eC.settings.push(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), a && (eC.settings.push(o.z.QUEST_2_ENROLLMENT_TOOLTIP), V && K === (null === (t = (0, G.BS)(eP.X2.FORTNITE)) || void 0 === t ? void 0 : t.title) && eC.settings.push(o.z.QUEST_2_COMPLETION_TOOLTIP)), X && J && eC.settings.push(o.z.USER_SAFETY_SAFE_DIRECT_MESSAGING), $ && (1 === et ? eC.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : eC.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), eg && eC.settings.push(o.z.SOUNDBOARD_VOLUME_EDUCATION), en && eC.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING), es && eC.settings.push(o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), eS && eC.settings.push(o.z.PRIDE_ICONS_COACHMARK), ea && eC.avatar.push(o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)), (0, i.jsx)(eU, {
        currentUser: n,
        customStatusActivity: c,
        dismissibleContents: eC,
        userTag: I,
        hidePrivateData: m,
        occluded: y,
        premiumSubscription: x,
        selfDeaf: v,
        selfMute: f,
        serverDeaf: O,
        serverMute: N,
        speaking: _,
        speakingWhileMuted: P,
        status: u,
        streaming: d,
        suppress: L,
        webBuildOverride: R,
        awaitingRemote: k,
        isEligibleForPomelo: w
    });
}
function ew(e) {
    let {
            webBuildOverride: t,
            isEligibleForPomelo: n,
            onClick: s,
            onContextMenu: a
        } = e, r = (0, E.useRedesignIconContext)().enabled, l = null, o = E.SettingsIcon, c = (0, _.i)();
    return r ? o = null != t ? E.SettingsInfoIcon : n ? E.SettingsCircleIcon : c.Component : null != t ? l = (0, i.jsx)(E.CircleInformationIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 9,
        height: 9,
        className: eM.hasBuildOverride,
        'aria-hidden': !0
    }) : n && (l = (0, i.jsx)(E.CircleBadge, {
        color: P.Z.STATUS_DANGER,
        className: eM.hasBuildOverride,
        'aria-hidden': !0
    })), (0, i.jsx)(eT.Z, {
        tooltipText: null != t ? eb.Z.Messages.USER_SETTINGS_WITH_BUILD_OVERRIDE.format({ webBuildOverride: t.id }) : eb.Z.Messages.USER_SETTINGS,
        onClick: s,
        onContextMenu: a,
        innerClassName: null != t || n ? eM.buildOverrideButton : null,
        icon: o,
        ...c.events,
        children: l
    });
}
function ek(e) {
    let {
            selfMute: t,
            serverMute: n,
            suppress: a,
            awaitingRemote: r,
            tooltipText: l,
            tooltipColor: o,
            tooltipForceOpen: c,
            onMouseEnter: d,
            onMouseLeave: _,
            onClick: h,
            onContextMenu: I
        } = e, m = t || a || n, {
            Component: p,
            play: g,
            events: T
        } = (0, u.O)(m ? 'unmute' : 'mute'), S = n || a ? E.MicrophoneDenyIcon : p;
    return s.useEffect(() => () => g(), [
        m,
        g
    ]), (0, i.jsx)(eT.Z, {
        tooltipText: l,
        tooltipColor: o,
        tooltipForceOpen: c,
        onMouseEnter: () => {
            d(), T.onMouseEnter();
        },
        onMouseLeave: () => {
            _(), T.onMouseLeave();
        },
        icon: (0, i.jsx)(S, {
            size: 'custom',
            width: 20,
            height: 20,
            color: m ? E.tokens.colors.STATUS_DANGER : 'currentColor'
        }),
        iconForeground: m ? eM.strikethrough : null,
        onClick: h,
        onContextMenu: I,
        role: 'switch',
        'aria-label': eb.Z.Messages.MUTE,
        'aria-checked': m,
        disabled: r
    });
}
function eB(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: a,
            onClick: l,
            onContextMenu: o
        } = e, c = t || n, {
            Component: u,
            play: _,
            events: {
                onMouseEnter: h,
                onMouseLeave: I
            }
        } = (0, d.l)(c ? 'undeafen' : 'deafen'), m = n ? E.HeadphonesDenyIcon : u;
    return s.useEffect(() => () => _(), [
        c,
        _
    ]), (0, i.jsx)(eT.Z, {
        tooltipText: (0, L.Z)(t, n, a),
        onMouseEnter: h,
        onMouseLeave: I,
        icon: (0, i.jsx)(m, {
            size: 'custom',
            width: 20,
            height: 20,
            color: c ? E.tokens.colors.STATUS_DANGER : 'currentColor'
        }),
        onClick: l,
        onContextMenu: o,
        innerClassName: r()({ [eM.redIcon]: n }),
        iconForeground: c ? eM.strikethrough : null,
        role: 'switch',
        'aria-label': eb.Z.Messages.DEAFEN,
        'aria-checked': c,
        disabled: a
    });
}
