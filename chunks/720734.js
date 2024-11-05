n.d(t, {
    Z: function () {
        return eO;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(442837),
    o = n(704215),
    c = n(846519),
    d = n(400354),
    u = n(652844),
    h = n(789639),
    m = n(481060),
    p = n(355467),
    g = n(239091),
    f = n(230711),
    _ = n(410575),
    E = n(941129),
    I = n(634894),
    C = n(586902),
    v = n(570928),
    S = n(100527),
    N = n(906732),
    T = n(676742),
    x = n(1585),
    b = n(304761),
    A = n(865427),
    Z = n(571250),
    y = n(628581),
    L = n(55311),
    R = n(575175),
    P = n(64220),
    O = n(377171),
    j = n(600164),
    D = n(676035),
    M = n(427217),
    w = n(605236),
    k = n(243778),
    U = n(258609),
    G = n(427347),
    B = n(443669),
    H = n(332473),
    V = n(240504),
    F = n(637906),
    z = n(39370),
    Y = n(19199),
    W = n(111653),
    K = n(866483),
    q = n(14357),
    X = n(393333),
    Q = n(763296),
    J = n(640806),
    $ = n(184301),
    ee = n(52538),
    et = n(879815),
    en = n(294629),
    ei = n(314897),
    er = n(592125),
    ea = n(819640),
    el = n(131951),
    es = n(19780),
    eo = n(885110),
    ec = n(246946),
    ed = n(594174),
    eu = n(78839),
    eh = n(626135),
    em = n(768581),
    ep = n(572004),
    eg = n(70956),
    ef = n(74538),
    e_ = n(374023),
    eE = n(51144),
    eI = n(998502),
    eC = n(870569),
    ev = n(345243),
    eS = n(115530),
    eN = n(981631),
    eT = n(215023),
    ex = n(388032),
    eb = n(59923);
function eA(e, t, n) {
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
let eZ = eI.ZP.getEnableHardwareAcceleration() ? m.AnimatedAvatar : m.Avatar,
    ey = 2 * eg.Z.Millis.MINUTE,
    eL = 30 * eg.Z.Millis.DAY;
function eR(e) {
    let { speaking: t, streaming: n, currentUser: r, status: a, handleMouseLeave: s, renderNameTag: o } = e,
        c = (0, T.Z)(null == r ? void 0 : r.avatarDecoration),
        d = (0, em.NZ)({
            avatarDecoration: c,
            size: (0, x.y9)(m.AvatarSizes.SIZE_32)
        });
    return null == r
        ? null
        : (0, i.jsx)(_.Z, {
              object: eN.qAy.AVATAR,
              children: (0, i.jsx)(m.Popout, {
                  renderPopout: (e) => {
                      let { closePopout: t, setPopoutRef: n } = e;
                      return (0, i.jsx)('div', {
                          className: eb.accountProfilePopoutWrapper,
                          children: (0, i.jsx)(B.Z, {
                              currentUser: r,
                              setPopoutRef: n,
                              onClose: () => {
                                  s(), null == t || t();
                              }
                          })
                      });
                  },
                  position: 'top',
                  align: 'left',
                  animation: m.Popout.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  preload: () =>
                      (0, $.Z)(r, void 0, {
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  children: (e) =>
                      (0, i.jsxs)(m.Clickable, {
                          ...e,
                          'aria-label': ex.intl.string(ex.t['3Uj+2t']),
                          className: eb.avatarWrapper,
                          children: [
                              (0, i.jsx)(eZ, {
                                  size: m.AvatarSizes.SIZE_32,
                                  src: r.getAvatarURL(void 0, 32, !1),
                                  avatarDecoration: d,
                                  'aria-label': r.username,
                                  status: n ? eN.Skl.STREAMING : a,
                                  isSpeaking: t,
                                  className: eb.avatar
                              }),
                              (0, i.jsx)('div', {
                                  className: l()(eb.nameTag, { [eb.canCopy]: ep.wS }),
                                  children: o()
                              })
                          ]
                      })
              })
          });
}
class eP extends r.PureComponent {
    get isCopiedStreakGodlike() {
        let { copiedStreak: e } = this.state;
        return e >= 10;
    }
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, occluded: n } = e,
            { speakingWhileMuted: i, occluded: r } = this.props;
        r !== n && this.handleOccludedChanged(), i !== t && this.handleSpeakingWhileMutedChanged();
    }
    componentWillUnmount() {
        this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop();
    }
    renderCopiedSuccess() {
        let { copiedStreak: e } = this.state,
            t = [ex.intl.string(ex.t.MSaeTU), ex.intl.string(ex.t.UmrCw8), ex.intl.string(ex.t.gKE0Ji), ex.intl.string(ex.t['4DSKbm']), ex.intl.string(ex.t['+8ENdX']), ex.intl.string(ex.t.GlWHv7), ex.intl.string(ex.t.hIzxU1), ex.intl.string(ex.t['26uMPD']), ex.intl.string(ex.t.uFs7R0), ex.intl.string(ex.t.bLXdcX), ex.intl.string(ex.t.gPg9fX)],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, i.jsx)(m.Shaker, {
            isShaking: this.isCopiedStreakGodlike,
            children: t[n]
        });
    }
    renderNameTag() {
        let e;
        let { hovered: t } = this.state,
            { customStatusActivity: n, userTag: r, currentUser: a, status: l } = this.props;
        if (null == a) return null;
        let s = eE.ZP.getName(a),
            o = null != l && l !== eN.Skl.UNKNOWN,
            c = null != n;
        return (
            (c || (o && a.isPomelo())) &&
                (e = (0, i.jsx)(v.Z, {
                    hoverText: r,
                    forceHover: t,
                    children: c
                        ? (0, i.jsx)(M.Z, {
                              activity: n,
                              emojiClassName: eb.emoji,
                              className: eb.customStatus
                          })
                        : eE.ZP.humanizeStatus(l)
                })),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        className: eb.panelTitleContainer,
                        children: (0, i.jsx)(eS.Z, { children: s })
                    }),
                    (0, i.jsx)('div', {
                        className: eb.panelSubtextContainer,
                        children: (0, i.jsx)(ev.Z, { children: null != e ? e : r })
                    })
                ]
            })
        );
    }
    renderAvatarWithPopout() {
        return (0, i.jsx)(eR, {
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
                  children: (0, i.jsx)(k.ZP, {
                      contentTypes: t.avatar,
                      children: (e) => {
                          let { visibleContent: t, markAsDismissed: n } = e;
                          if (t === o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)
                              return (0, i.jsx)(P.Z, {
                                  markAsDismissed: n,
                                  children: () => this.renderAvatarWithPopout()
                              });
                          return this.renderAvatarWithPopout();
                      }
                  })
              });
    }
    render() {
        let { currentUser: e, selfDeaf: t, selfMute: n, awaitingRemote: r, serverMute: a, serverDeaf: l, suppress: s, dismissibleContents: c } = this.props,
            { shouldShowSpeakingWhileMutedTooltip: d } = this.state;
        return null == e
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)('div', {
                          className: eb.container,
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              this.renderNameZone(),
                              (0, i.jsxs)(j.Z, {
                                  grow: 0,
                                  className: eb.buttons,
                                  children: [
                                      (0, i.jsx)(eD, {
                                          selfMute: n,
                                          serverMute: a,
                                          suppress: s,
                                          awaitingRemote: r,
                                          tooltipText: d ? ex.intl.string(ex.t['29gnR0']) : (0, y.Z)(n, a, s, r),
                                          tooltipColor: d ? m.TooltipColors.GREEN : void 0,
                                          tooltipForceOpen: d || void 0,
                                          onMouseEnter: this.handleMouseEnterMute,
                                          onMouseLeave: this.handleMouseLeaveMute,
                                          onClick: this.handleToggleSelfMute,
                                          onContextMenu: this.handleInputAudioContextMenu
                                      }),
                                      (0, i.jsx)(eM, {
                                          selfDeaf: t,
                                          serverDeaf: l,
                                          onClick: this.handleToggleSelfDeaf,
                                          onContextMenu: this.handleOutputAudioContextMenu,
                                          awaitingRemote: r
                                      }),
                                      (0, i.jsx)(k.ZP, {
                                          contentTypes: c.settings,
                                          children: (e) => {
                                              let { visibleContent: t, markAsDismissed: n } = e;
                                              switch (t) {
                                                  case o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(z.Z, {}),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(K.Z, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(q.Z, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case o.z.SOUNDBOARD_VOLUME_EDUCATION:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(J.Z, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(X.P, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(ee.Z, {}),
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
                      }),
                      (0, i.jsx)(G.Z, {})
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            eA(this, 'copiedTimeout', new c.V7()),
            eA(this, 'copiedDecayTimeout', new c.V7()),
            eA(this, 'speakingWhileMutedTooltipTimeout', new c.V7()),
            eA(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            eA(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            eA(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t } = this.props;
                (0, R.Z)(e, t, eN.jXE.ACCOUNT_PANEL);
            }),
            eA(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e } = this.props;
                (0, L.Z)(e, eN.jXE.ACCOUNT_PANEL);
            }),
            eA(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            eA(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eN.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                f.Z.open(e, t, n);
            }),
            eA(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, g.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('23217'), n.e('33053'), n.e('8016'), n.e('76540'), n.e('15669'), n.e('17938'), n.e('22646'), n.e('25183'), n.e('30419'), n.e('48923'), n.e('18824'), n.e('8821'), n.e('76447'), n.e('62935')]).then(n.bind(n, 923422));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                user: t,
                                premiumSubscription: this.props.premiumSubscription,
                                webBuildOverride: this.props.webBuildOverride
                            });
                    });
            }),
            eA(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, g.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(N.Gt, {
                            value: t,
                            children: (0, i.jsx)(e, {
                                onClose: g.Zy,
                                renderInputDevices: !0,
                                renderInputModes: !0,
                                renderInputVolume: !0
                            })
                        });
                });
            }),
            eA(this, 'handleOutputAudioContextMenu', (e, t) => {
                (0, g.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(N.Gt, {
                            value: t,
                            children: (0, i.jsx)(e, {
                                onClose: g.Zy,
                                renderOutputDevices: !0,
                                renderOutputVolume: !0
                            })
                        });
                });
            }),
            eA(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            eA(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            eA(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            eA(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            eA(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, ep.JG)(
                    eE.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eh.default.track(eN.rMx.TEXT_COPIED, { type: 'User Tag' });
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                !t && (i.copiedStreak = n + 1),
                    this.setState(i, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            eA(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            eA(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: i, occluded: r } = this.props,
                    { hoveringOnMute: a } = this.state,
                    l = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > ey;
                i
                    ? !a &&
                      e &&
                      !t &&
                      !n &&
                      !r &&
                      l &&
                      this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                          (this.lastSpeakingWhileMutedNotificationTime = Date.now()), this.speakingWhileMutedTooltipTimeout.start(2000, () => this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }));
                      })
                    : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }), this.speakingWhileMutedTooltipTimeout.stop());
            }),
            eA(this, 'renderSettingsGear', () =>
                (0, i.jsx)(ej, {
                    isEligibleForPomelo: this.props.isEligibleForPomelo,
                    webBuildOverride: this.props.webBuildOverride,
                    onClick: this.handleOpenAccountSettings,
                    onContextMenu: this.handleOpenSettingsContextMenu
                })
            );
    }
}
function eO() {
    var e;
    let t = (0, s.e7)([ed.default], () => ed.default.getCurrentUser()),
        n = (0, s.e7)([ei.default], () => ei.default.getId()),
        a = (0, D.a)(),
        { streaming: l, status: c } = (0, s.cj)([eo.Z], () => ({
            streaming: null != eo.Z.findActivity((e) => e.type === eN.IIU.STREAMING),
            status: eo.Z.getStatus()
        })),
        d = (0, C.Z)({ userId: n }),
        u = eE.ZP.useUserTag(t, { decoration: 'never' }),
        h = (0, s.e7)([ec.Z], () => ec.Z.hidePersonalInformation),
        g = (0, s.e7)([es.Z, er.Z], () => {
            let e = es.Z.getChannelId();
            return null != e ? er.Z.getChannel(e) : null;
        }),
        { mute: f, selfMute: _, suppress: v } = (0, en.Z)(g),
        { selfDeaf: T, deaf: x } = (0, et.Z)(g),
        Z = (0, s.e7)([b.C], () => {
            var e;
            return (0, A.fD)() ? (null === (e = b.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        y = (0, s.e7)([eu.ZP], () => eu.ZP.getPremiumTypeSubscription()),
        L = (0, s.e7)([el.Z], () => el.Z.getSpeakingWhileMuted()),
        R = (0, s.e7)([ea.Z], () => ea.Z.hasLayers()),
        P = (0, m.useModalsStore)(m.hasAnyModalOpenSelector) || R || e_.s.isDisallowPopupsSet(),
        O = (0, H.b)(),
        j = (0, s.e7)([U.Z], () => null != U.Z.getAwaitingRemoteSessionInfo()),
        M = (0, Y.D)(),
        k = (0, E.u)(),
        G = (0, W.t)(),
        B = ef.ZP.canUsePremiumGuildMemberProfile(t),
        z = (null == t ? void 0 : null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eT.rL,
        K = 'account';
    (0, I.j)({
        location: K + ' auto on',
        autoTrackExposure: !0
    }),
        (0, I.j)({
            location: K + ' auto off',
            autoTrackExposure: !1
        });
    let q = (0, s.e7)([Q.Z], () => Q.Z.hasHadOtherUserPlaySoundInSession()),
        X = (function () {
            let e = (0, w.wE)(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, s.Wu)([V.Z], () => [V.Z.hasFetchedRelevance, V.Z.profileThemesRelevanceExceeded]),
                [i, a] = (0, s.Wu)([eu.ZP], () => [eu.ZP.hasFetchedMostRecentPremiumTypeSubscription(), eu.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: l } = F.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                c = r.useMemo(() => {
                    let e = new Date().getTime();
                    return null != a && (a.status === eN.O0b.ACTIVE || e - a.currentPeriodEnd.getTime() < eL);
                }, [a]);
            return (
                r.useEffect(() => {
                    (async () => {
                        if (e || null != n || !l) return;
                        if (!i) {
                            await (0, p.ou)();
                            return;
                        }
                        if (!c) !t && (await (0, p.l0)());
                    })();
                }, [l, n, e, i, t, c]),
                !e && !!l && !c && null != n && n
            );
        })(),
        { analyticsLocations: J } = (0, N.ZP)(S.Z.ACCOUNT),
        $ = {
            avatar: [],
            settings: []
        };
    return (
        !P && (X && $.settings.push(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), M && (1 === k ? $.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : $.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), q && $.settings.push(o.z.SOUNDBOARD_VOLUME_EDUCATION), G && $.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING), B && $.settings.push(o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), z && $.avatar.push(o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)),
        (0, i.jsx)(N.Gt, {
            value: J,
            children: (0, i.jsx)(eP, {
                currentUser: t,
                customStatusActivity: a,
                dismissibleContents: $,
                userTag: u,
                hidePrivateData: h,
                occluded: P,
                premiumSubscription: y,
                selfDeaf: T,
                selfMute: _,
                serverDeaf: x,
                serverMute: f,
                speaking: d,
                speakingWhileMuted: L,
                status: c,
                streaming: l,
                suppress: v,
                webBuildOverride: Z,
                awaitingRemote: j,
                isEligibleForPomelo: O
            })
        })
    );
}
function ej(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: r, onContextMenu: a } = e,
        l = (0, m.useRedesignIconContext)().enabled,
        s = null,
        o = m.SettingsIcon,
        c = (0, h.i)();
    return (
        l
            ? (o = null != t ? m.SettingsInfoIcon : n ? m.SettingsCircleIcon : c.Component)
            : null != t
              ? (s = (0, i.jsx)(m.CircleInformationIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 9,
                    height: 9,
                    className: eb.hasBuildOverride,
                    'aria-hidden': !0
                }))
              : n &&
                (s = (0, i.jsx)(m.CircleBadge, {
                    color: O.Z.STATUS_DANGER,
                    className: eb.hasBuildOverride,
                    'aria-hidden': !0
                })),
        (0, i.jsx)(eC.Z, {
            tooltipText: null != t ? ex.intl.formatToPlainString(ex.t.Gzh6ZG, { webBuildOverride: t.id }) : ex.intl.string(ex.t.cduTBA),
            onClick: r,
            onContextMenu: a,
            innerClassName: null != t || n ? eb.buildOverrideButton : null,
            icon: o,
            ...c.events,
            children: s
        })
    );
}
function eD(e) {
    let { selfMute: t, serverMute: n, suppress: a, awaitingRemote: l, tooltipText: s, tooltipColor: o, tooltipForceOpen: c, onMouseEnter: d, onMouseLeave: h, onClick: p, onContextMenu: g } = e,
        f = t || a || n,
        { Component: _, play: E, events: I } = (0, u.O)(f ? 'unmute' : 'mute'),
        C = n || a ? m.MicrophoneDenyIcon : _,
        { analyticsLocations: v } = (0, N.ZP)(S.Z.AUDIO_INPUT_BUTTON);
    r.useEffect(() => () => E(), [f, E]);
    let T = r.useCallback(
        (e) => {
            g(e, v);
        },
        [g, v]
    );
    return (0, i.jsx)(N.Gt, {
        value: v,
        children: (0, i.jsx)(eC.Z, {
            tooltipText: s,
            tooltipColor: o,
            tooltipForceOpen: c,
            onMouseEnter: () => {
                d(), I.onMouseEnter();
            },
            onMouseLeave: () => {
                h(), I.onMouseLeave();
            },
            icon: (0, i.jsx)(C, {
                size: 'custom',
                width: 20,
                height: 20,
                color: f ? m.tokens.colors.STATUS_DANGER : 'currentColor'
            }),
            iconForeground: f ? eb.strikethrough : null,
            onClick: p,
            onContextMenu: T,
            role: 'switch',
            'aria-label': ex.intl.string(ex.t['w4m94+']),
            'aria-checked': f,
            disabled: l
        })
    });
}
function eM(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: a, onClick: s, onContextMenu: o } = e,
        c = t || n,
        {
            Component: u,
            play: h,
            events: { onMouseEnter: p, onMouseLeave: g }
        } = (0, d.l)(c ? 'undeafen' : 'deafen'),
        f = n ? m.HeadphonesDenyIcon : u,
        { analyticsLocations: _ } = (0, N.ZP)(S.Z.AUDIO_OUTPUT_BUTTON);
    r.useEffect(() => () => h(), [c, h]);
    let E = r.useCallback(
        (e) => {
            o(e, _);
        },
        [o, _]
    );
    return (0, i.jsx)(N.Gt, {
        value: _,
        children: (0, i.jsx)(eC.Z, {
            tooltipText: (0, Z.Z)(t, n, a),
            onMouseEnter: p,
            onMouseLeave: g,
            icon: (0, i.jsx)(f, {
                size: 'custom',
                width: 20,
                height: 20,
                color: c ? m.tokens.colors.STATUS_DANGER : 'currentColor'
            }),
            onClick: s,
            onContextMenu: E,
            innerClassName: l()({ [eb.redIcon]: n }),
            iconForeground: c ? eb.strikethrough : null,
            role: 'switch',
            'aria-label': ex.intl.string(ex.t.wjcRFR),
            'aria-checked': c,
            disabled: a
        })
    });
}
