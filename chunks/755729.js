"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eY
  }
}), n("222007"), n("424973");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("151426"),
  u = n("862337"),
  d = n("966900"),
  c = n("359902"),
  f = n("696526"),
  E = n("582601"),
  h = n("205494"),
  _ = n("135621"),
  C = n("979401"),
  S = n("77078"),
  I = n("850068"),
  m = n("272030"),
  p = n("79112"),
  T = n("146350"),
  g = n("901582"),
  A = n("415929"),
  N = n("687531"),
  R = n("875212"),
  O = n("899633"),
  v = n("606292"),
  L = n("489740"),
  M = n("355025"),
  P = n("842272"),
  y = n("14124"),
  D = n("959646"),
  x = n("338677"),
  b = n("20606"),
  U = n("225772"),
  G = n("775377"),
  j = n("10641"),
  w = n("384997"),
  k = n("243632"),
  F = n("180273"),
  B = n("579565"),
  H = n("473503"),
  V = n("257426"),
  Y = n("76393"),
  W = n("957833"),
  K = n("397009"),
  z = n("337328"),
  q = n("167209"),
  Q = n("691818"),
  Z = n("106457"),
  X = n("507917"),
  J = n("837944"),
  $ = n("374089"),
  ee = n("189726"),
  et = n("666647"),
  en = n("286914"),
  ea = n("235004"),
  es = n("696770"),
  el = n("506885"),
  ei = n("250659"),
  er = n("365114"),
  eo = n("933422"),
  eu = n("924658"),
  ed = n("244390"),
  ec = n("271938"),
  ef = n("42203"),
  eE = n("778588"),
  eh = n("42887"),
  e_ = n("945956"),
  eC = n("101125"),
  eS = n("102985"),
  eI = n("697218"),
  em = n("521012"),
  ep = n("145131"),
  eT = n("398288"),
  eg = n("837899"),
  eA = n("425190"),
  eN = n("474571"),
  eR = n("925877"),
  eO = n("962541"),
  ev = n("762489"),
  eL = n("329858"),
  eM = n("956089"),
  eP = n("599110"),
  ey = n("315102"),
  eD = n("306160"),
  ex = n("718517"),
  eb = n("197881"),
  eU = n("158998"),
  eG = n("50885"),
  ej = n("49111"),
  ew = n("411511"),
  ek = n("782340"),
  eF = n("895493");
let eB = eG.default.getEnableHardwareAcceleration() ? S.AnimatedAvatar : S.Avatar,
  eH = 30 * ex.default.Millis.DAY;
class eV extends s.PureComponent {
  get isCopiedStreakGodlike() {
    let {
      copiedStreak: e
    } = this.state;
    return e >= 10
  }
  componentDidUpdate(e) {
    let {
      speakingWhileMuted: t,
      occluded: n
    } = e, {
      speakingWhileMuted: a,
      occluded: s
    } = this.props;
    s !== n && this.handleOccludedChanged(), a !== t && this.handleSpeakingWhileMutedChanged()
  }
  componentWillUnmount() {
    this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop()
  }
  renderCopiedSuccess() {
    let {
      copiedStreak: e
    } = this.state, t = [ek.default.Messages.COPY_SUCCESS_1, ek.default.Messages.COPY_SUCCESS_2, ek.default.Messages.COPY_SUCCESS_3, ek.default.Messages.COPY_SUCCESS_4, ek.default.Messages.COPY_SUCCESS_5, ek.default.Messages.COPY_SUCCESS_6, ek.default.Messages.COPY_SUCCESS_7, ek.default.Messages.COPY_SUCCESS_8, ek.default.Messages.COPY_SUCCESS_9, ek.default.Messages.COPY_SUCCESS_10, ek.default.Messages.COPY_SUCCESS_11], n = Math.min(Math.max(0, e - 1), t.length - 1);
    return (0, a.jsx)(S.Shaker, {
      isShaking: this.isCopiedStreakGodlike,
      children: t[n]
    })
  }
  renderNameTag() {
    let e;
    let {
      hovered: t
    } = this.state, {
      customStatusActivity: n,
      userTag: s,
      currentUser: l,
      status: i
    } = this.props;
    if (null == l) return null;
    let r = eU.default.getName(l),
      o = null != i && i !== ej.StatusTypes.UNKNOWN,
      u = null != n;
    return (u || o && l.isPomelo()) && (e = (0, a.jsx)(eT.default, {
      hoverText: s,
      forceHover: t,
      children: u ? (0, a.jsx)(G.default, {
        activity: n,
        emojiClassName: eF.emoji,
        className: eF.customStatus
      }) : eU.default.humanizeStatus(i)
    })), (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: eF.panelTitleContainer,
        children: (0, a.jsx)(eL.default, {
          children: r
        })
      }), (0, a.jsx)("div", {
        className: eF.panelSubtextContainer,
        children: (0, a.jsx)(ev.default, {
          children: null != e ? e : s
        })
      })]
    })
  }
  renderCopiableNameTag() {
    let {
      currentUser: e
    } = this.props, {
      shouldShowNametagTooltip: t,
      shouldShowCopiedFeedback: n
    } = this.state;
    if (null == e) return null;
    let s = null,
      l = S.TooltipColors.PRIMARY;
    return eD.SUPPORTS_COPY && (s = ek.default.Messages.ACCOUNT_CLICK_TO_COPY, n && (s = this.renderCopiedSuccess(), l = this.isCopiedStreakGodlike ? S.TooltipColors.RED : S.TooltipColors.GREEN)), (0, a.jsx)(S.Tooltip, {
      text: s,
      forceOpen: t,
      "aria-label": !!eD.SUPPORTS_COPY && ek.default.Messages.ACCOUNT_CLICK_TO_COPY,
      color: l,
      delay: 500,
      onAnimationRest: (e, a) => {
        n && !t && a.phase === ej.SpringTransitionPhases.LEAVE && this.setState({
          shouldShowCopiedFeedback: !1
        })
      },
      children: e => {
        let {
          onClick: t,
          onMouseEnter: s,
          ...l
        } = e;
        return (0, a.jsx)(S.Clickable, {
          ...l,
          onMouseEnter: () => {
            n ? (this.copiedTimeout.stop(), this.setState({
              shouldShowNametagTooltip: !1
            }, s)) : null == s || s()
          },
          onClick: () => {
            null == t || t(), this.handleCopyTag()
          },
          className: i(eF.nameTag, {
            [eF.canCopy]: eD.SUPPORTS_COPY
          }),
          children: this.renderNameTag()
        })
      }
    })
  }
  renderAvatarWithPopout() {
    let {
      speaking: e,
      streaming: t,
      currentUser: n,
      status: s,
      showTagAsButton: l,
      showTaglessAccountPanel: r
    } = this.props;
    if (null == n) return null;
    let o = (0, ey.getAvatarDecorationURL)({
      avatarDecoration: n.avatarDecoration,
      size: (0, v.getDecorationSizeForAvatarSize)(S.AvatarSizes.SIZE_32)
    });
    return (0, a.jsx)(g.default, {
      object: ej.AnalyticsObjects.AVATAR,
      children: (0, a.jsx)(S.Popout, {
        renderPopout: this.renderStatusPickerPopout,
        position: "top",
        align: "left",
        animation: S.Popout.Animation.FADE,
        spacing: 14,
        fixed: !0,
        preload: () => (0, el.default)(n.id, null == n ? void 0 : n.getAvatarURL(null, 80)),
        children: (u, d) => (0, a.jsxs)(S.Clickable, {
          ...u,
          "aria-label": ek.default.Messages.SET_STATUS,
          className: i(eF.avatarWrapper, {
            [eF.withTagAsButton]: l,
            [eF.withTagless]: r
          }),
          children: [(0, a.jsx)(eB, {
            size: S.AvatarSizes.SIZE_32,
            src: n.getAvatarURL(void 0, 32, !1),
            avatarDecoration: o,
            "aria-label": n.username,
            status: t ? ej.StatusTypes.STREAMING : s,
            isSpeaking: e,
            className: eF.avatar
          }), l || r ? (0, a.jsx)("div", {
            className: i(eF.nameTag, {
              [eF.canCopy]: eD.SUPPORTS_COPY
            }),
            children: r ? (0, a.jsx)(eO.default, {
              tooltipText: null,
              icon: d.isShown ? eg.default : eA.default,
              role: "switch",
              "aria-label": ek.default.Messages.SET_STATUS
            }) : this.renderNameTag()
          }) : null]
        })
      })
    })
  }
  renderNameZone() {
    let {
      currentUser: e,
      dismissibleContents: t
    } = this.props, {
      showTagAsButton: n,
      showTaglessAccountPanel: s
    } = this.props;
    return null == e ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(w.default, {
        contentTypes: t.avatar,
        children: e => {
          let {
            visibleContent: t
          } = e;
          return this.renderAvatarWithPopout()
        }
      }), n || s ? null : this.renderCopiableNameTag()]
    })
  }
  render() {
    let {
      currentUser: e,
      selfDeaf: t,
      selfMute: n,
      awaitingRemote: s,
      serverMute: l,
      serverDeaf: i,
      suppress: r,
      dismissibleContents: u
    } = this.props, {
      shouldShowSpeakingWhileMutedTooltip: d
    } = this.state;
    return null == e ? null : (0, a.jsxs)("div", {
      className: eF.container,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [this.renderNameZone(), (0, a.jsxs)(ep.default, {
        grow: 0,
        children: [(0, a.jsx)(eK, {
          selfMute: n,
          serverMute: l,
          suppress: r,
          awaitingRemote: s,
          tooltipText: d ? ek.default.Messages.ACCOUNT_SPEAKING_WHILE_MUTED : (0, y.default)(n, l, r, s),
          tooltipColor: d ? S.TooltipColors.GREEN : void 0,
          tooltipForceOpen: d || void 0,
          onMouseEnter: this.handleMouseEnterMute,
          onMouseLeave: this.handleMouseLeaveMute,
          onClick: this.handleToggleSelfMute,
          onContextMenu: this.handleInputAudioContextMenu
        }), (0, a.jsx)(ez, {
          selfDeaf: t,
          serverDeaf: i,
          onClick: this.handleToggleSelfDeaf,
          onContextMenu: this.handleOutputAudioContextMenu,
          awaitingRemote: s
        }), (0, a.jsx)(w.default, {
          contentTypes: u.settings,
          children: e => {
            let {
              visibleContent: t,
              markAsDismissed: n
            } = e;
            switch (t) {
              case o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(X.default, {}),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(H.default, {
                    markAsDismissed: n,
                    partnerGame: ew.PartnerGame.FORTNITE
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(V.default, {
                    markAsDismissed: n,
                    partnerGame: ew.PartnerGame.FORTNITE
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_SAFE_DIRECT_MESSAGING:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(eo.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(ee.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(et.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.SOUNDBOARD_VOLUME_EDUCATION:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(es.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(en.UserSafetyEducationReportingCoachmark, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(er.default, {}),
                  children: this.renderSettingsGear
                });
              default:
                return this.renderSettingsGear()
            }
          }
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), this.copiedTimeout = new u.Timeout, this.copiedDecayTimeout = new u.Timeout, this.speakingWhileMutedTooltipTimeout = new u.Timeout, this.state = {
      hovered: !1,
      copiedStreak: 0,
      shouldShowNametagTooltip: !1,
      shouldShowCopiedFeedback: !1,
      shouldShowSpeakingWhileMutedTooltip: !1,
      hoveringOnMute: !1
    }, this.handleToggleSelfMute = () => {
      let {
        serverMute: e,
        suppress: t
      } = this.props;
      (0, x.default)(e, t)
    }, this.handleToggleSelfDeaf = () => {
      let {
        serverDeaf: e
      } = this.props;
      (0, D.default)(e)
    }, this.handleOpenAccountSettings = () => {
      this.handleOpenSettings()
    }, this.handleOpenSettings = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.UserSettingsSections.ACCOUNT,
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0;
      p.default.open(e, t, n)
    }, this.handleOpenSettingsContextMenu = e => {
      let {
        currentUser: t
      } = this.props;
      null != t && (0, m.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("727212").then(n.bind(n, "727212"));
        return n => (0, a.jsx)(e, {
          ...n,
          user: t,
          premiumSubscription: this.props.premiumSubscription,
          webBuildOverride: this.props.webBuildOverride
        })
      })
    }, this.handleInputAudioContextMenu = e => {
      (0, m.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("266392").then(n.bind(n, "266392"));
        return () => (0, a.jsx)(e, {
          onClose: m.closeContextMenu,
          renderInputDevices: !0,
          renderInputModes: !0,
          renderInputVolume: !0
        })
      })
    }, this.handleOutputAudioContextMenu = e => {
      (0, m.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("266392").then(n.bind(n, "266392"));
        return () => (0, a.jsx)(e, {
          onClose: m.closeContextMenu,
          renderOutputDevices: !0,
          renderOutputVolume: !0
        })
      })
    }, this.handleMouseEnter = () => {
      this.setState({
        hovered: !0
      })
    }, this.handleMouseLeave = () => {
      this.setState({
        hovered: !1
      })
    }, this.handleMouseEnterMute = () => {
      this.setState({
        hoveringOnMute: !0,
        shouldShowSpeakingWhileMutedTooltip: !1
      }), this.speakingWhileMutedTooltipTimeout.stop()
    }, this.handleMouseLeaveMute = () => {
      this.setState({
        hoveringOnMute: !1
      })
    }, this.handleCopyTag = () => {
      let {
        currentUser: e
      } = this.props, {
        shouldShowNametagTooltip: t,
        copiedStreak: n
      } = this.state;
      if (null == e) return;
      (0, eD.copy)(eU.default.getUserTag(e, {
        decoration: "never",
        identifiable: "always"
      })), eP.default.track(ej.AnalyticEvents.TEXT_COPIED, {
        type: "User Tag"
      });
      let a = {
        shouldShowCopiedFeedback: !0,
        shouldShowNametagTooltip: !0
      };
      !t && (a.copiedStreak = n + 1), this.setState(a, () => {
        this.copiedTimeout.start(1e3, () => this.setState({
          shouldShowNametagTooltip: !1
        })), this.copiedDecayTimeout.start(2e3, () => this.setState({
          copiedStreak: 0
        }))
      })
    }, this.handleOccludedChanged = () => {
      let {
        occluded: e
      } = this.props;
      e && this.setState({
        shouldShowNametagTooltip: !1,
        shouldShowSpeakingWhileMutedTooltip: !1
      })
    }, this.handleSpeakingWhileMutedChanged = () => {
      let {
        selfMute: e,
        serverMute: t,
        suppress: n,
        speakingWhileMuted: a,
        occluded: s
      } = this.props, {
        hoveringOnMute: l
      } = this.state;
      a ? !l && e && !t && !n && !s && this.setState({
        shouldShowSpeakingWhileMutedTooltip: !0
      }, () => {
        this.speakingWhileMutedTooltipTimeout.start(2e3, () => this.setState({
          shouldShowSpeakingWhileMutedTooltip: !1
        }))
      }) : (this.setState({
        shouldShowSpeakingWhileMutedTooltip: !1
      }), this.speakingWhileMutedTooltipTimeout.stop())
    }, this.renderStatusPickerPopout = e => {
      let {
        closePopout: t
      } = e, {
        showRichProfilePopup: n,
        currentUser: s
      } = this.props;
      if (n) {
        let e = {
          userId: null == s ? void 0 : s.id,
          user: s,
          onClose: () => {
            this.handleMouseLeave(), null == t || t()
          }
        };
        return (0, a.jsx)("div", {
          className: eF.accountProfilePopoutWrapper,
          children: (0, a.jsx)(z.default, {
            ...e
          })
        })
      }
      return (0, a.jsx)(T.default, {
        onClose: () => {
          this.handleMouseLeave(), null == t || t()
        }
      })
    }, this.renderSettingsGear = () => (0, a.jsx)(eW, {
      isEligibleForPomelo: this.props.isEligibleForPomelo,
      webBuildOverride: this.props.webBuildOverride,
      onClick: this.handleOpenAccountSettings,
      onContextMenu: this.handleOpenSettingsContextMenu
    })
  }
}

function eY() {
  let e = (0, r.useStateFromStores)([eI.default], () => eI.default.getCurrentUser()),
    t = (0, k.useShowEligibilityEnrollmentTooltip)(ew.PartnerGame.FORTNITE),
    n = (0, r.useStateFromStores)([ec.default], () => ec.default.getId()),
    l = (0, U.useCustomStatusActivity)(),
    {
      streaming: i,
      status: u
    } = (0, r.useStateFromStoresObject)([eC.default], () => ({
      streaming: null != eC.default.findActivity(e => e.type === ej.ActivityTypes.STREAMING),
      status: eC.default.getStatus()
    })),
    d = (0, O.default)({
      userId: n
    }),
    c = eU.default.useUserTag(e, {
      decoration: "never"
    }),
    f = (0, r.useStateFromStores)([eS.default], () => eS.default.hidePersonalInformation),
    E = (0, r.useStateFromStores)([e_.default, ef.default], () => {
      let e = e_.default.getChannelId();
      return null != e ? ef.default.getChannel(e) : null
    }),
    {
      mute: h,
      selfMute: _,
      suppress: C
    } = (0, ed.default)(E),
    {
      selfDeaf: m,
      deaf: p
    } = (0, eu.default)(E),
    T = (0, r.useStateFromStores)([L.default], () => {
      var e;
      return (0, M.probablyHasBuildOverride)() ? null === (e = L.default.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
    }),
    g = (0, r.useStateFromStores)([em.default], () => em.default.getPremiumTypeSubscription()),
    v = (0, r.useStateFromStores)([eh.default], () => eh.default.getEverSpeakingWhileMuted()),
    P = (0, r.useStateFromStores)([eE.default], () => eE.default.hasLayers()),
    y = (0, S.useModalsStore)(S.hasAnyModalOpenSelector),
    D = y || P || eb.ProcessArgs.isDisallowPopupsSet(),
    x = (0, q.useIsEligibleForPomelo)();
  s.useEffect(() => {
    K.default.trackExposure({
      location: "08bd40_3"
    })
  });
  let b = (0, r.useStateFromStores)([Y.default], () => null != Y.default.getAwaitingRemoteSessionInfo()),
    {
      isPopupEnabled: G,
      isJoinedTagButtonEnabled: w,
      isTaglessAccountPanelEnabled: H
    } = K.default.useExperiment({
      location: "08bd40_4"
    }, {
      autoTrackExposure: !1
    }),
    V = (0, r.useStateFromStores)([F.default], () => F.default.isCurrentQuestCompleted),
    z = (0, r.useStateFromStores)([F.default], () => F.default.currentDropQuestGameTitle),
    X = (0, W.useIsHomeSelected)(),
    ee = (0, N.useIsDmSpamFilterCoachmarkEnabled)(),
    et = (0, J.useCanSeeSafetyEducationBlockMuteCoachmark)(),
    en = (0, A.useIsSafetyConsumerEducationBlockMuteBucket)(),
    es = (0, $.useCanSeeSafetyEducationReportingCoachmark)(),
    el = (0, ei.default)(e),
    er = "account";
  (0, R.useTriggerDebuggingAA)({
    location: er + " auto on",
    autoTrackExposure: !0
  }), (0, R.useTriggerDebuggingAA)({
    location: er + " auto off",
    autoTrackExposure: !1
  }), (0, J.useSafetyEducationAATriggerPoint)();
  let eo = (0, r.useStateFromStores)([ea.default], () => ea.default.hasHadOtherUserPlaySoundInSession()),
    ep = function() {
      let e = (0, j.useIsDismissibleContentDismissed)(o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
        [t, n] = (0, r.useStateFromStoresArray)([Q.default], () => [Q.default.hasFetchedRelevance, Q.default.profileThemesRelevanceExceeded]),
        [a, l] = (0, r.useStateFromStoresArray)([em.default], () => [em.default.hasFetchedMostRecentPremiumTypeSubscription(), em.default.getMostRecentPremiumTypeSubscription()]),
        {
          enabled: i
        } = Z.default.useExperiment({
          location: "08bd40_1"
        }, {
          autoTrackExposure: !0
        }),
        u = s.useMemo(() => {
          let e = new Date().getTime();
          return null != l && (l.status === ej.SubscriptionStatusTypes.ACTIVE || e - l.currentPeriodEnd.getTime() < eH)
        }, [l]);
      return s.useEffect(() => {
        let s = async () => {
          if (!e && null == n && !!i) {
            if (!a) {
              await (0, I.fetchMostRecentSubscription)();
              return
            }!u && !t && await (0, I.getPerksRelevance)()
          }
        };
        s()
      }, [i, n, e, a, t, u]), !e && !!i && !u && null != n && n
    }(),
    eT = {
      avatar: [],
      settings: []
    };
  if (!D) {
    if (ep && eT.settings.push(o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), t) {
      var eg;
      eT.settings.push(o.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP), V && z === (null === (eg = (0, B.getDrop)(ew.PartnerGame.FORTNITE)) || void 0 === eg ? void 0 : eg.title) && eT.settings.push(o.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP)
    }
    X && ee && eT.settings.push(o.DismissibleContent.USER_SAFETY_SAFE_DIRECT_MESSAGING), et && (1 === en ? eT.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : eT.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), eo && eT.settings.push(o.DismissibleContent.SOUNDBOARD_VOLUME_EDUCATION), es && eT.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_REPORTING), el && eT.settings.push(o.DismissibleContent.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK)
  }
  return (0, a.jsx)(eV, {
    currentUser: e,
    customStatusActivity: l,
    dismissibleContents: eT,
    userTag: c,
    hidePrivateData: f,
    occluded: D,
    premiumSubscription: g,
    selfDeaf: m,
    selfMute: _,
    serverDeaf: p,
    serverMute: h,
    showRichProfilePopup: G,
    showTagAsButton: w,
    showTaglessAccountPanel: H,
    speaking: d,
    speakingWhileMuted: v,
    status: u,
    streaming: i,
    suppress: C,
    webBuildOverride: T,
    awaitingRemote: b,
    isEligibleForPomelo: x
  })
}

function eW(e) {
  let {
    webBuildOverride: t,
    isEligibleForPomelo: n,
    onClick: s,
    onContextMenu: l
  } = e, i = (0, S.useRedesignIconContext)().enabled, r = null, o = eN.default, u = (0, C.useSettingsLottie)();
  return i ? o = null != t ? E.SettingsInfoIcon : n ? f.SettingsCircleIcon : u.Component : null != t ? r = (0, a.jsx)(eR.default, {
    width: 9,
    height: 9,
    className: eF.hasBuildOverride,
    "aria-hidden": !0
  }) : n && (r = (0, a.jsx)(eM.CircleBadge, {
    color: b.default.STATUS_DANGER,
    className: eF.hasBuildOverride,
    "aria-hidden": !0
  })), (0, a.jsx)(eO.default, {
    tooltipText: null != t ? ek.default.Messages.USER_SETTINGS_WITH_BUILD_OVERRIDE.format({
      webBuildOverride: t.id
    }) : ek.default.Messages.USER_SETTINGS,
    onClick: s,
    onContextMenu: l,
    innerClassName: null != t || n ? eF.buildOverrideButton : null,
    icon: o,
    ...u.events,
    children: r
  })
}

function eK(e) {
  let {
    selfMute: t,
    serverMute: n,
    suppress: l,
    awaitingRemote: i,
    tooltipText: r,
    tooltipColor: o,
    tooltipForceOpen: u,
    onMouseEnter: d,
    onMouseLeave: f,
    onClick: E,
    onContextMenu: h
  } = e, C = t || l || n, {
    Component: I,
    play: m,
    events: p
  } = (0, _.useMicrophoneLottie)(C ? "unmute" : "mute"), T = n || l ? c.MicrophoneDenyIcon : I;
  return s.useEffect(() => () => m(), [C, m]), (0, a.jsx)(eO.default, {
    tooltipText: r,
    tooltipColor: o,
    tooltipForceOpen: u,
    onMouseEnter: () => {
      d(), p.onMouseEnter()
    },
    onMouseLeave: () => {
      f(), p.onMouseLeave()
    },
    icon: (0, a.jsx)(T, {
      size: "custom",
      width: 20,
      height: 20,
      color: C ? S.tokens.colors.STATUS_DANGER : "currentColor"
    }),
    iconForeground: C ? eF.strikethrough : null,
    onClick: E,
    onContextMenu: h,
    role: "switch",
    "aria-label": ek.default.Messages.MUTE,
    "aria-checked": C,
    disabled: i
  })
}

function ez(e) {
  let {
    selfDeaf: t,
    serverDeaf: n,
    awaitingRemote: l,
    onClick: r,
    onContextMenu: o
  } = e, u = t || n, {
    Component: c,
    play: f,
    events: {
      onMouseEnter: E,
      onMouseLeave: _
    }
  } = (0, h.useHeadphonesLottie)(u ? "undeafen" : "deafen"), C = n ? d.HeadphonesDenyIcon : c;
  return s.useEffect(() => () => f(), [u, f]), (0, a.jsx)(eO.default, {
    tooltipText: (0, P.default)(t, n, l),
    onMouseEnter: E,
    onMouseLeave: _,
    icon: (0, a.jsx)(C, {
      size: "custom",
      width: 20,
      height: 20,
      color: u ? S.tokens.colors.STATUS_DANGER : "currentColor"
    }),
    onClick: r,
    onContextMenu: o,
    innerClassName: i({
      [eF.redIcon]: n
    }),
    iconForeground: u ? eF.strikethrough : null,
    role: "switch",
    "aria-label": ek.default.Messages.DEAFEN,
    "aria-checked": u,
    disabled: l
  })
}