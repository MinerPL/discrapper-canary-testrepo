n.d(t, {
    Z: function () {
        return eb;
    }
}),
    n(47120),
    n(653041);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(704215),
    c = n(846519),
    d = n(400354),
    u = n(652844),
    _ = n(789639),
    E = n(481060),
    h = n(355467),
    m = n(239091),
    I = n(230711),
    p = n(410575),
    g = n(941129),
    T = n(634894),
    f = n(586902),
    S = n(570928),
    C = n(100527),
    N = n(906732),
    A = n(676742),
    v = n(1585),
    Z = n(304761),
    L = n(865427),
    R = n(571250),
    O = n(628581),
    x = n(55311),
    b = n(575175),
    M = n(64220),
    P = n(377171),
    D = n(600164),
    y = n(676035),
    j = n(427217),
    U = n(605236),
    G = n(243778),
    w = n(258609),
    k = n(331541),
    B = n(332473),
    V = n(240504),
    H = n(637906),
    F = n(39370),
    Y = n(19199),
    z = n(111653),
    W = n(866483),
    K = n(14357),
    q = n(393333),
    Q = n(763296),
    X = n(640806),
    J = n(184301),
    $ = n(52538),
    ee = n(879815),
    et = n(294629),
    en = n(314897),
    ei = n(592125),
    ea = n(819640),
    es = n(131951),
    er = n(19780),
    el = n(885110),
    eo = n(246946),
    ec = n(594174),
    ed = n(78839),
    eu = n(626135),
    e_ = n(768581),
    eE = n(572004),
    eh = n(70956),
    em = n(74538),
    eI = n(374023),
    ep = n(51144),
    eg = n(998502),
    eT = n(870569),
    ef = n(345243),
    eS = n(115530),
    eC = n(981631),
    eN = n(215023),
    eA = n(689938),
    ev = n(59923);
function eZ(e, t, n) {
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
let eL = eg.ZP.getEnableHardwareAcceleration() ? E.AnimatedAvatar : E.Avatar,
    eR = 30 * eh.Z.Millis.DAY;
function eO(e) {
    let { speaking: t, streaming: n, currentUser: a, status: s, handleMouseLeave: l, renderNameTag: o } = e,
        c = (0, A.Z)(null == a ? void 0 : a.avatarDecoration),
        d = (0, e_.NZ)({
            avatarDecoration: c,
            size: (0, v.y9)(E.AvatarSizes.SIZE_32)
        });
    return null == a
        ? null
        : (0, i.jsx)(p.Z, {
              object: eC.qAy.AVATAR,
              children: (0, i.jsx)(E.Popout, {
                  renderPopout: (e) => {
                      let { closePopout: t, setPopoutRef: n } = e;
                      return (0, i.jsx)('div', {
                          className: ev.accountProfilePopoutWrapper,
                          children: (0, i.jsx)(k.Z, {
                              currentUser: a,
                              setPopoutRef: n,
                              onClose: () => {
                                  l(), null == t || t();
                              }
                          })
                      });
                  },
                  position: 'top',
                  align: 'left',
                  animation: E.Popout.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  preload: () =>
                      (0, J.Z)(a, void 0, {
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  children: (e) =>
                      (0, i.jsxs)(E.Clickable, {
                          ...e,
                          'aria-label': eA.Z.Messages.SET_STATUS,
                          className: ev.avatarWrapper,
                          children: [
                              (0, i.jsx)(eL, {
                                  size: E.AvatarSizes.SIZE_32,
                                  src: a.getAvatarURL(void 0, 32, !1),
                                  avatarDecoration: d,
                                  'aria-label': a.username,
                                  status: n ? eC.Skl.STREAMING : s,
                                  isSpeaking: t,
                                  className: ev.avatar
                              }),
                              (0, i.jsx)('div', {
                                  className: r()(ev.nameTag, { [ev.canCopy]: eE.wS }),
                                  children: o()
                              })
                          ]
                      })
              })
          });
}
class ex extends a.PureComponent {
    get isCopiedStreakGodlike() {
        let { copiedStreak: e } = this.state;
        return e >= 10;
    }
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, occluded: n } = e,
            { speakingWhileMuted: i, occluded: a } = this.props;
        a !== n && this.handleOccludedChanged(), i !== t && this.handleSpeakingWhileMutedChanged();
    }
    componentWillUnmount() {
        this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop();
    }
    renderCopiedSuccess() {
        let { copiedStreak: e } = this.state,
            t = [eA.Z.Messages.COPY_SUCCESS_1, eA.Z.Messages.COPY_SUCCESS_2, eA.Z.Messages.COPY_SUCCESS_3, eA.Z.Messages.COPY_SUCCESS_4, eA.Z.Messages.COPY_SUCCESS_5, eA.Z.Messages.COPY_SUCCESS_6, eA.Z.Messages.COPY_SUCCESS_7, eA.Z.Messages.COPY_SUCCESS_8, eA.Z.Messages.COPY_SUCCESS_9, eA.Z.Messages.COPY_SUCCESS_10, eA.Z.Messages.COPY_SUCCESS_11],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, i.jsx)(E.Shaker, {
            isShaking: this.isCopiedStreakGodlike,
            children: t[n]
        });
    }
    renderNameTag() {
        let e;
        let { hovered: t } = this.state,
            { customStatusActivity: n, userTag: a, currentUser: s, status: r } = this.props;
        if (null == s) return null;
        let l = ep.ZP.getName(s),
            o = null != r && r !== eC.Skl.UNKNOWN,
            c = null != n;
        return (
            (c || (o && s.isPomelo())) &&
                (e = (0, i.jsx)(S.Z, {
                    hoverText: a,
                    forceHover: t,
                    children: c
                        ? (0, i.jsx)(j.Z, {
                              activity: n,
                              emojiClassName: ev.emoji,
                              className: ev.customStatus
                          })
                        : ep.ZP.humanizeStatus(r)
                })),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        className: ev.panelTitleContainer,
                        children: (0, i.jsx)(eS.Z, { children: l })
                    }),
                    (0, i.jsx)('div', {
                        className: ev.panelSubtextContainer,
                        children: (0, i.jsx)(ef.Z, { children: null != e ? e : a })
                    })
                ]
            })
        );
    }
    renderAvatarWithPopout() {
        return (0, i.jsx)(eO, {
            ...this.props,
            handleMouseLeave: this.handleMouseLeave,
            renderNameTag: () => this.renderNameTag()
        });
    }
    renderNameZone() {
        let { currentUser: e, dismissibleContents: t } = this.props;
        return null == e
            ? null
            : (0, i.jsx)(i.Fragment, {
                  children: (0, i.jsx)(G.ZP, {
                      contentTypes: t.avatar,
                      children: (e) => {
                          let { visibleContent: t, markAsDismissed: n } = e;
                          if (t === o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)
                              return (0, i.jsx)(M.Z, {
                                  markAsDismissed: n,
                                  children: () => this.renderAvatarWithPopout()
                              });
                          return this.renderAvatarWithPopout();
                      }
                  })
              });
    }
    render() {
        let { currentUser: e, selfDeaf: t, selfMute: n, awaitingRemote: a, serverMute: s, serverDeaf: r, suppress: l, dismissibleContents: c } = this.props,
            { shouldShowSpeakingWhileMutedTooltip: d } = this.state;
        return null == e
            ? null
            : (0, i.jsxs)('div', {
                  className: ev.container,
                  onMouseEnter: this.handleMouseEnter,
                  onMouseLeave: this.handleMouseLeave,
                  children: [
                      this.renderNameZone(),
                      (0, i.jsxs)(D.Z, {
                          grow: 0,
                          className: ev.buttons,
                          children: [
                              (0, i.jsx)(eP, {
                                  selfMute: n,
                                  serverMute: s,
                                  suppress: l,
                                  awaitingRemote: a,
                                  tooltipText: d ? eA.Z.Messages.ACCOUNT_SPEAKING_WHILE_MUTED : (0, O.Z)(n, s, l, a),
                                  tooltipColor: d ? E.TooltipColors.GREEN : void 0,
                                  tooltipForceOpen: d || void 0,
                                  onMouseEnter: this.handleMouseEnterMute,
                                  onMouseLeave: this.handleMouseLeaveMute,
                                  onClick: this.handleToggleSelfMute,
                                  onContextMenu: this.handleInputAudioContextMenu
                              }),
                              (0, i.jsx)(eD, {
                                  selfDeaf: t,
                                  serverDeaf: r,
                                  onClick: this.handleToggleSelfDeaf,
                                  onContextMenu: this.handleOutputAudioContextMenu,
                                  awaitingRemote: a
                              }),
                              (0, i.jsx)(G.ZP, {
                                  contentTypes: c.settings,
                                  children: (e) => {
                                      let { visibleContent: t, markAsDismissed: n } = e;
                                      switch (t) {
                                          case o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2:
                                              return (0, i.jsx)(E.Popout, {
                                                  position: 'top',
                                                  align: 'center',
                                                  shouldShow: !0,
                                                  renderPopout: () => (0, i.jsx)(F.Z, {}),
                                                  children: this.renderSettingsGear
                                              });
                                          case o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                                              return (0, i.jsx)(E.Popout, {
                                                  position: 'top',
                                                  align: 'center',
                                                  shouldShow: !0,
                                                  renderPopout: () => (0, i.jsx)(W.Z, { markAsDismissed: n }),
                                                  children: this.renderSettingsGear
                                              });
                                          case o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                                              return (0, i.jsx)(E.Popout, {
                                                  position: 'top',
                                                  align: 'center',
                                                  shouldShow: !0,
                                                  renderPopout: () => (0, i.jsx)(K.Z, { markAsDismissed: n }),
                                                  children: this.renderSettingsGear
                                              });
                                          case o.z.SOUNDBOARD_VOLUME_EDUCATION:
                                              return (0, i.jsx)(E.Popout, {
                                                  position: 'top',
                                                  align: 'center',
                                                  shouldShow: !0,
                                                  renderPopout: () => (0, i.jsx)(X.Z, { markAsDismissed: n }),
                                                  children: this.renderSettingsGear
                                              });
                                          case o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
                                              return (0, i.jsx)(E.Popout, {
                                                  position: 'top',
                                                  align: 'center',
                                                  shouldShow: !0,
                                                  renderPopout: () => (0, i.jsx)(q.P, { markAsDismissed: n }),
                                                  children: this.renderSettingsGear
                                              });
                                          case o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                                              return (0, i.jsx)(E.Popout, {
                                                  position: 'top',
                                                  align: 'center',
                                                  shouldShow: !0,
                                                  renderPopout: () => (0, i.jsx)($.Z, {}),
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
        super(...e),
            eZ(this, 'copiedTimeout', new c.V7()),
            eZ(this, 'copiedDecayTimeout', new c.V7()),
            eZ(this, 'speakingWhileMutedTooltipTimeout', new c.V7()),
            eZ(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            eZ(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t } = this.props;
                (0, b.Z)(e, t, eC.jXE.ACCOUNT_PANEL);
            }),
            eZ(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e } = this.props;
                (0, x.Z)(e);
            }),
            eZ(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            eZ(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eC.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                I.Z.open(e, t, n);
            }),
            eZ(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, m.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('96427'), n.e('81039'), n.e('52249'), n.e('54803'), n.e('15685'), n.e('72652'), n.e('32776'), n.e('79915'), n.e('33053'), n.e('8016'), n.e('37581'), n.e('76540'), n.e('68136'), n.e('87624'), n.e('22646'), n.e('25183'), n.e('57674'), n.e('30419'), n.e('48923'), n.e('18824'), n.e('52619'), n.e('8821'), n.e('18815'), n.e('25908')]).then(n.bind(n, 923422));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                user: t,
                                premiumSubscription: this.props.premiumSubscription,
                                webBuildOverride: this.props.webBuildOverride
                            });
                    });
            }),
            eZ(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, m.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(N.Gt, {
                            value: t,
                            children: (0, i.jsx)(e, {
                                onClose: m.Zy,
                                renderInputDevices: !0,
                                renderInputModes: !0,
                                renderInputVolume: !0
                            })
                        });
                });
            }),
            eZ(this, 'handleOutputAudioContextMenu', (e, t) => {
                (0, m.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(N.Gt, {
                            value: t,
                            children: (0, i.jsx)(e, {
                                onClose: m.Zy,
                                renderOutputDevices: !0,
                                renderOutputVolume: !0
                            })
                        });
                });
            }),
            eZ(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            eZ(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            eZ(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            eZ(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            eZ(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eE.JG)(
                    ep.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eu.default.track(eC.rMx.TEXT_COPIED, { type: 'User Tag' });
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                !t && (i.copiedStreak = n + 1),
                    this.setState(i, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            eZ(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            eZ(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: i, occluded: a } = this.props,
                    { hoveringOnMute: s } = this.state;
                i
                    ? !s &&
                      e &&
                      !t &&
                      !n &&
                      !a &&
                      this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                          this.speakingWhileMutedTooltipTimeout.start(2000, () => this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }));
                      })
                    : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }), this.speakingWhileMutedTooltipTimeout.stop());
            }),
            eZ(this, 'renderSettingsGear', () =>
                (0, i.jsx)(eM, {
                    isEligibleForPomelo: this.props.isEligibleForPomelo,
                    webBuildOverride: this.props.webBuildOverride,
                    onClick: this.handleOpenAccountSettings,
                    onContextMenu: this.handleOpenSettingsContextMenu
                })
            );
    }
}
function eb() {
    var e;
    let t = (0, l.e7)([ec.default], () => ec.default.getCurrentUser()),
        n = (0, l.e7)([en.default], () => en.default.getId()),
        s = (0, y.a)(),
        { streaming: r, status: c } = (0, l.cj)([el.Z], () => ({
            streaming: null != el.Z.findActivity((e) => e.type === eC.IIU.STREAMING),
            status: el.Z.getStatus()
        })),
        d = (0, f.Z)({ userId: n }),
        u = ep.ZP.useUserTag(t, { decoration: 'never' }),
        _ = (0, l.e7)([eo.Z], () => eo.Z.hidePersonalInformation),
        m = (0, l.e7)([er.Z, ei.Z], () => {
            let e = er.Z.getChannelId();
            return null != e ? ei.Z.getChannel(e) : null;
        }),
        { mute: I, selfMute: p, suppress: S } = (0, et.Z)(m),
        { selfDeaf: A, deaf: v } = (0, ee.Z)(m),
        R = (0, l.e7)([Z.C], () => {
            var e;
            return (0, L.fD)() ? (null === (e = Z.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        O = (0, l.e7)([ed.ZP], () => ed.ZP.getPremiumTypeSubscription()),
        x = (0, l.e7)([es.Z], () => es.Z.getEverSpeakingWhileMuted()),
        b = (0, l.e7)([ea.Z], () => ea.Z.hasLayers()),
        M = (0, E.useModalsStore)(E.hasAnyModalOpenSelector) || b || eI.s.isDisallowPopupsSet(),
        P = (0, B.b)(),
        D = (0, l.e7)([w.Z], () => null != w.Z.getAwaitingRemoteSessionInfo()),
        j = (0, Y.D)(),
        G = (0, g.u)(),
        k = (0, z.t)(),
        F = em.ZP.canUsePremiumGuildMemberProfile(t),
        W = (null == t ? void 0 : null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eN.rL,
        K = 'account';
    (0, T.j)({
        location: K + ' auto on',
        autoTrackExposure: !0
    }),
        (0, T.j)({
            location: K + ' auto off',
            autoTrackExposure: !1
        });
    let q = (0, l.e7)([Q.Z], () => Q.Z.hasHadOtherUserPlaySoundInSession()),
        X = (function () {
            let e = (0, U.wE)(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, l.Wu)([V.Z], () => [V.Z.hasFetchedRelevance, V.Z.profileThemesRelevanceExceeded]),
                [i, s] = (0, l.Wu)([ed.ZP], () => [ed.ZP.hasFetchedMostRecentPremiumTypeSubscription(), ed.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: r } = H.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                c = a.useMemo(() => {
                    let e = new Date().getTime();
                    return null != s && (s.status === eC.O0b.ACTIVE || e - s.currentPeriodEnd.getTime() < eR);
                }, [s]);
            return (
                a.useEffect(() => {
                    (async () => {
                        if (e || null != n || !r) return;
                        if (!i) {
                            await (0, h.ou)();
                            return;
                        }
                        if (!c) !t && (await (0, h.l0)());
                    })();
                }, [r, n, e, i, t, c]),
                !e && !!r && !c && null != n && n
            );
        })(),
        { analyticsLocations: J } = (0, N.ZP)(C.Z.ACCOUNT),
        $ = {
            avatar: [],
            settings: []
        };
    return (
        !M && (X && $.settings.push(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), j && (1 === G ? $.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : $.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), q && $.settings.push(o.z.SOUNDBOARD_VOLUME_EDUCATION), k && $.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING), F && $.settings.push(o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), W && $.avatar.push(o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)),
        (0, i.jsx)(N.Gt, {
            value: J,
            children: (0, i.jsx)(ex, {
                currentUser: t,
                customStatusActivity: s,
                dismissibleContents: $,
                userTag: u,
                hidePrivateData: _,
                occluded: M,
                premiumSubscription: O,
                selfDeaf: A,
                selfMute: p,
                serverDeaf: v,
                serverMute: I,
                speaking: d,
                speakingWhileMuted: x,
                status: c,
                streaming: r,
                suppress: S,
                webBuildOverride: R,
                awaitingRemote: D,
                isEligibleForPomelo: P
            })
        })
    );
}
function eM(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: a, onContextMenu: s } = e,
        r = (0, E.useRedesignIconContext)().enabled,
        l = null,
        o = E.SettingsIcon,
        c = (0, _.i)();
    return (
        r
            ? (o = null != t ? E.SettingsInfoIcon : n ? E.SettingsCircleIcon : c.Component)
            : null != t
              ? (l = (0, i.jsx)(E.CircleInformationIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 9,
                    height: 9,
                    className: ev.hasBuildOverride,
                    'aria-hidden': !0
                }))
              : n &&
                (l = (0, i.jsx)(E.CircleBadge, {
                    color: P.Z.STATUS_DANGER,
                    className: ev.hasBuildOverride,
                    'aria-hidden': !0
                })),
        (0, i.jsx)(eT.Z, {
            tooltipText: null != t ? eA.Z.Messages.USER_SETTINGS_WITH_BUILD_OVERRIDE.format({ webBuildOverride: t.id }) : eA.Z.Messages.USER_SETTINGS,
            onClick: a,
            onContextMenu: s,
            innerClassName: null != t || n ? ev.buildOverrideButton : null,
            icon: o,
            ...c.events,
            children: l
        })
    );
}
function eP(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: r, tooltipText: l, tooltipColor: o, tooltipForceOpen: c, onMouseEnter: d, onMouseLeave: _, onClick: h, onContextMenu: m } = e,
        I = t || s || n,
        { Component: p, play: g, events: T } = (0, u.O)(I ? 'unmute' : 'mute'),
        f = n || s ? E.MicrophoneDenyIcon : p,
        { analyticsLocations: S } = (0, N.ZP)(C.Z.AUDIO_INPUT_BUTTON);
    a.useEffect(() => () => g(), [I, g]);
    let A = a.useCallback(
        (e) => {
            m(e, S);
        },
        [m, S]
    );
    return (0, i.jsx)(N.Gt, {
        value: S,
        children: (0, i.jsx)(eT.Z, {
            tooltipText: l,
            tooltipColor: o,
            tooltipForceOpen: c,
            onMouseEnter: () => {
                d(), T.onMouseEnter();
            },
            onMouseLeave: () => {
                _(), T.onMouseLeave();
            },
            icon: (0, i.jsx)(f, {
                size: 'custom',
                width: 20,
                height: 20,
                color: I ? E.tokens.colors.STATUS_DANGER : 'currentColor'
            }),
            iconForeground: I ? ev.strikethrough : null,
            onClick: h,
            onContextMenu: A,
            role: 'switch',
            'aria-label': eA.Z.Messages.MUTE,
            'aria-checked': I,
            disabled: r
        })
    });
}
function eD(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: l, onContextMenu: o } = e,
        c = t || n,
        {
            Component: u,
            play: _,
            events: { onMouseEnter: h, onMouseLeave: m }
        } = (0, d.l)(c ? 'undeafen' : 'deafen'),
        I = n ? E.HeadphonesDenyIcon : u,
        { analyticsLocations: p } = (0, N.ZP)(C.Z.AUDIO_OUTPUT_BUTTON);
    a.useEffect(() => () => _(), [c, _]);
    let g = a.useCallback(
        (e) => {
            o(e, p);
        },
        [o, p]
    );
    return (0, i.jsx)(N.Gt, {
        value: p,
        children: (0, i.jsx)(eT.Z, {
            tooltipText: (0, R.Z)(t, n, s),
            onMouseEnter: h,
            onMouseLeave: m,
            icon: (0, i.jsx)(I, {
                size: 'custom',
                width: 20,
                height: 20,
                color: c ? E.tokens.colors.STATUS_DANGER : 'currentColor'
            }),
            onClick: l,
            onContextMenu: g,
            innerClassName: r()({ [ev.redIcon]: n }),
            iconForeground: c ? ev.strikethrough : null,
            role: 'switch',
            'aria-label': eA.Z.Messages.DEAFEN,
            'aria-checked': c,
            disabled: s
        })
    });
}
