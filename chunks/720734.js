"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eW
  }
}), n("47120"), n("653041");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("442837"),
  o = n("524437"),
  u = n("846519"),
  d = n("742444"),
  c = n("247636"),
  f = n("128951"),
  E = n("952826"),
  h = n("400354"),
  _ = n("652844"),
  C = n("789639"),
  m = n("481060"),
  S = n("355467"),
  I = n("239091"),
  p = n("230711"),
  T = n("255952"),
  g = n("410575"),
  A = n("941129"),
  N = n("83200"),
  v = n("634894"),
  O = n("586902"),
  R = n("1585"),
  L = n("304761"),
  P = n("865427"),
  M = n("571250"),
  y = n("628581"),
  D = n("55311"),
  b = n("575175"),
  x = n("377171"),
  U = n("676035"),
  j = n("427217"),
  G = n("605236"),
  w = n("243778"),
  k = n("730417"),
  F = n("524347"),
  B = n("853197"),
  H = n("810280"),
  V = n("60762"),
  Y = n("258609"),
  W = n("278464"),
  K = n("917112"),
  z = n("331541"),
  q = n("332473"),
  Q = n("240504"),
  Z = n("637906"),
  X = n("39370"),
  J = n("19199"),
  $ = n("111653"),
  ee = n("866483"),
  et = n("14357"),
  en = n("393333"),
  ea = n("763296"),
  es = n("640806"),
  el = n("484459"),
  ei = n("584427"),
  er = n("52538"),
  eo = n("331187"),
  eu = n("879815"),
  ed = n("294629"),
  ec = n("314897"),
  ef = n("592125"),
  eE = n("819640"),
  eh = n("131951"),
  e_ = n("19780"),
  eC = n("885110"),
  em = n("246946"),
  eS = n("594174"),
  eI = n("78839"),
  ep = n("285952"),
  eT = n("546591"),
  eg = n("86813"),
  eA = n("826026"),
  eN = n("937482"),
  ev = n("87888"),
  eO = n("976401"),
  eR = n("333454"),
  eL = n("864441"),
  eP = n("26290"),
  eM = n("626135"),
  ey = n("768581"),
  eD = n("572004"),
  eb = n("70956"),
  ex = n("374023"),
  eU = n("51144"),
  ej = n("998502"),
  eG = n("981631"),
  ew = n("702512"),
  ek = n("689938"),
  eF = n("610276");

function eB(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let eH = ej.default.getEnableHardwareAcceleration() ? m.AnimatedAvatar : m.Avatar,
  eV = 30 * eb.default.Millis.DAY;
class eY extends s.PureComponent {
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
    return (0, a.jsx)(m.Shaker, {
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
      o = null != i && i !== eG.StatusTypes.UNKNOWN,
      u = null != n;
    return (u || o && l.isPomelo()) && (e = (0, a.jsx)(eT.default, {
      hoverText: s,
      forceHover: t,
      children: u ? (0, a.jsx)(j.default, {
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
        children: (0, a.jsx)(eR.default, {
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
      l = m.TooltipColors.PRIMARY;
    return eD.SUPPORTS_COPY && (s = ek.default.Messages.ACCOUNT_CLICK_TO_COPY, n && (s = this.renderCopiedSuccess(), l = this.isCopiedStreakGodlike ? m.TooltipColors.RED : m.TooltipColors.GREEN)), (0, a.jsx)(m.Tooltip, {
      text: s,
      forceOpen: t,
      "aria-label": !!eD.SUPPORTS_COPY && ek.default.Messages.ACCOUNT_CLICK_TO_COPY,
      color: l,
      delay: 500,
      onAnimationRest: (e, a) => {
        n && !t && a.phase === eG.SpringTransitionPhases.LEAVE && this.setState({
          shouldShowCopiedFeedback: !1
        })
      },
      children: e => {
        let {
          onClick: t,
          onMouseEnter: s,
          ...l
        } = e;
        return (0, a.jsx)(m.Clickable, {
          ...l,
          onMouseEnter: () => {
            n ? (this.copiedTimeout.stop(), this.setState({
              shouldShowNametagTooltip: !1
            }, s)) : null == s || s()
          },
          onClick: () => {
            null == t || t(), this.handleCopyTag()
          },
          className: i()(eF.nameTag, {
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
      size: (0, R.getDecorationSizeForAvatarSize)(m.AvatarSizes.SIZE_32)
    });
    return (0, a.jsx)(g.default, {
      object: eG.AnalyticsObjects.AVATAR,
      children: (0, a.jsx)(m.Popout, {
        renderPopout: this.renderStatusPickerPopout,
        position: "top",
        align: "left",
        animation: m.Popout.Animation.FADE,
        spacing: 14,
        fixed: !0,
        preload: () => (0, el.default)(n.id, null == n ? void 0 : n.getAvatarURL(null, 80)),
        children: (u, d) => (0, a.jsxs)(m.Clickable, {
          ...u,
          "aria-label": ek.default.Messages.SET_STATUS,
          className: i()(eF.avatarWrapper, {
            [eF.withTagAsButton]: l,
            [eF.withTagless]: r
          }),
          children: [(0, a.jsx)(eH, {
            size: m.AvatarSizes.SIZE_32,
            src: n.getAvatarURL(void 0, 32, !1),
            avatarDecoration: o,
            "aria-label": n.username,
            status: t ? eG.StatusTypes.STREAMING : s,
            isSpeaking: e,
            className: eF.avatar
          }), l || r ? (0, a.jsx)("div", {
            className: i()(eF.nameTag, {
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
        children: [(0, a.jsx)(ez, {
          selfMute: n,
          serverMute: l,
          suppress: r,
          awaitingRemote: s,
          tooltipText: d ? ek.default.Messages.ACCOUNT_SPEAKING_WHILE_MUTED : (0, y.default)(n, l, r, s),
          tooltipColor: d ? m.TooltipColors.GREEN : void 0,
          tooltipForceOpen: d || void 0,
          onMouseEnter: this.handleMouseEnterMute,
          onMouseLeave: this.handleMouseLeaveMute,
          onClick: this.handleToggleSelfMute,
          onContextMenu: this.handleInputAudioContextMenu
        }), (0, a.jsx)(eq, {
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
                return (0, a.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(X.default, {}),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP:
                return (0, a.jsx)(m.Popout, {
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
                return (0, a.jsx)(m.Popout, {
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
                return (0, a.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(eo.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                return (0, a.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(ee.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                return (0, a.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(et.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.SOUNDBOARD_VOLUME_EDUCATION:
                return (0, a.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(es.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
                return (0, a.jsx)(m.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(en.UserSafetyEducationReportingCoachmark, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                return (0, a.jsx)(m.Popout, {
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
    super(...e), eB(this, "copiedTimeout", new u.Timeout), eB(this, "copiedDecayTimeout", new u.Timeout), eB(this, "speakingWhileMutedTooltipTimeout", new u.Timeout), eB(this, "state", {
      hovered: !1,
      copiedStreak: 0,
      shouldShowNametagTooltip: !1,
      shouldShowCopiedFeedback: !1,
      shouldShowSpeakingWhileMutedTooltip: !1,
      hoveringOnMute: !1
    }), eB(this, "handleToggleSelfMute", () => {
      let {
        serverMute: e,
        suppress: t
      } = this.props;
      (0, b.default)(e, t)
    }), eB(this, "handleToggleSelfDeaf", () => {
      let {
        serverDeaf: e
      } = this.props;
      (0, D.default)(e)
    }), eB(this, "handleOpenAccountSettings", () => {
      this.handleOpenSettings()
    }), eB(this, "handleOpenSettings", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.UserSettingsSections.ACCOUNT,
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0;
      p.default.open(e, t, n)
    }), eB(this, "handleOpenSettingsContextMenu", e => {
      let {
        currentUser: t
      } = this.props;
      null != t && (0, I.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("24267"), n.e("8895"), n.e("15972"), n.e("58625"), n.e("6416"), n.e("14720"), n.e("63438"), n.e("33053"), n.e("51238"), n.e("17938"), n.e("76540"), n.e("65866"), n.e("5528"), n.e("77030"), n.e("18824"), n.e("74753"), n.e("2535")]).then(n.bind(n, "923422"));
        return n => (0, a.jsx)(e, {
          ...n,
          user: t,
          premiumSubscription: this.props.premiumSubscription,
          webBuildOverride: this.props.webBuildOverride
        })
      })
    }), eB(this, "handleInputAudioContextMenu", e => {
      (0, I.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "659580"));
        return () => (0, a.jsx)(e, {
          onClose: I.closeContextMenu,
          renderInputDevices: !0,
          renderInputModes: !0,
          renderInputVolume: !0
        })
      })
    }), eB(this, "handleOutputAudioContextMenu", e => {
      (0, I.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "659580"));
        return () => (0, a.jsx)(e, {
          onClose: I.closeContextMenu,
          renderOutputDevices: !0,
          renderOutputVolume: !0
        })
      })
    }), eB(this, "handleMouseEnter", () => {
      this.setState({
        hovered: !0
      })
    }), eB(this, "handleMouseLeave", () => {
      this.setState({
        hovered: !1
      })
    }), eB(this, "handleMouseEnterMute", () => {
      this.setState({
        hoveringOnMute: !0,
        shouldShowSpeakingWhileMutedTooltip: !1
      }), this.speakingWhileMutedTooltipTimeout.stop()
    }), eB(this, "handleMouseLeaveMute", () => {
      this.setState({
        hoveringOnMute: !1
      })
    }), eB(this, "handleCopyTag", () => {
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
      })), eM.default.track(eG.AnalyticEvents.TEXT_COPIED, {
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
    }), eB(this, "handleOccludedChanged", () => {
      let {
        occluded: e
      } = this.props;
      e && this.setState({
        shouldShowNametagTooltip: !1,
        shouldShowSpeakingWhileMutedTooltip: !1
      })
    }), eB(this, "handleSpeakingWhileMutedChanged", () => {
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
    }), eB(this, "renderStatusPickerPopout", e => {
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
    }), eB(this, "renderSettingsGear", () => (0, a.jsx)(eK, {
      isEligibleForPomelo: this.props.isEligibleForPomelo,
      webBuildOverride: this.props.webBuildOverride,
      onClick: this.handleOpenAccountSettings,
      onContextMenu: this.handleOpenSettingsContextMenu
    }))
  }
}

function eW() {
  let e = (0, r.useStateFromStores)([eS.default], () => eS.default.getCurrentUser()),
    t = (0, k.useShowEligibilityEnrollmentTooltip)(ew.PartnerGame.FORTNITE),
    n = (0, r.useStateFromStores)([ec.default], () => ec.default.getId()),
    l = (0, U.useCustomStatusActivity)(),
    {
      streaming: i,
      status: u
    } = (0, r.useStateFromStoresObject)([eC.default], () => ({
      streaming: null != eC.default.findActivity(e => e.type === eG.ActivityTypes.STREAMING),
      status: eC.default.getStatus()
    })),
    d = (0, O.default)({
      userId: n
    }),
    c = eU.default.useUserTag(e, {
      decoration: "never"
    }),
    f = (0, r.useStateFromStores)([em.default], () => em.default.hidePersonalInformation),
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
      selfDeaf: I,
      deaf: p
    } = (0, eu.default)(E),
    T = (0, r.useStateFromStores)([L.default], () => {
      var e;
      return (0, P.probablyHasBuildOverride)() ? null === (e = L.default.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
    }),
    g = (0, r.useStateFromStores)([eI.default], () => eI.default.getPremiumTypeSubscription()),
    R = (0, r.useStateFromStores)([eh.default], () => eh.default.getEverSpeakingWhileMuted()),
    M = (0, r.useStateFromStores)([eE.default], () => eE.default.hasLayers()),
    y = (0, m.useModalsStore)(m.hasAnyModalOpenSelector) || M || ex.ProcessArgs.isDisallowPopupsSet(),
    D = (0, q.useIsEligibleForPomelo)();
  s.useEffect(() => {
    K.default.trackExposure({
      location: "08bd40_3"
    })
  });
  let b = (0, r.useStateFromStores)([Y.default], () => null != Y.default.getAwaitingRemoteSessionInfo()),
    {
      isPopupEnabled: x,
      isJoinedTagButtonEnabled: j,
      isTaglessAccountPanelEnabled: w
    } = K.default.useExperiment({
      location: "08bd40_4"
    }, {
      autoTrackExposure: !1
    }),
    H = (0, r.useStateFromStores)([F.default], () => F.default.isCurrentQuestCompleted),
    V = (0, r.useStateFromStores)([F.default], () => F.default.currentDropQuestGameTitle),
    z = (0, W.useIsHomeSelected)(),
    X = (0, N.useIsDmSpamFilterCoachmarkEnabled)(),
    ee = (0, J.useCanSeeSafetyEducationBlockMuteCoachmark)(),
    et = (0, A.useIsSafetyConsumerEducationBlockMuteBucket)(),
    en = (0, $.useCanSeeSafetyEducationReportingCoachmark)(),
    es = (0, ei.default)(e),
    el = "account";
  (0, v.useTriggerDebuggingAA)({
    location: el + " auto on",
    autoTrackExposure: !0
  }), (0, v.useTriggerDebuggingAA)({
    location: el + " auto off",
    autoTrackExposure: !1
  }), (0, J.useSafetyEducationAATriggerPoint)();
  let er = (0, r.useStateFromStores)([ea.default], () => ea.default.hasHadOtherUserPlaySoundInSession()),
    eo = function() {
      let e = (0, G.useIsDismissibleContentDismissed)(o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
        [t, n] = (0, r.useStateFromStoresArray)([Q.default], () => [Q.default.hasFetchedRelevance, Q.default.profileThemesRelevanceExceeded]),
        [a, l] = (0, r.useStateFromStoresArray)([eI.default], () => [eI.default.hasFetchedMostRecentPremiumTypeSubscription(), eI.default.getMostRecentPremiumTypeSubscription()]),
        {
          enabled: i
        } = Z.default.useExperiment({
          location: "08bd40_1"
        }, {
          autoTrackExposure: !0
        }),
        u = s.useMemo(() => {
          let e = new Date().getTime();
          return null != l && (l.status === eG.SubscriptionStatusTypes.ACTIVE || e - l.currentPeriodEnd.getTime() < eV)
        }, [l]);
      return s.useEffect(() => {
        (async () => {
          if (!e && null == n && !!i) {
            if (!a) {
              await (0, S.fetchMostRecentSubscription)();
              return
            }!u && !t && await (0, S.getPerksRelevance)()
          }
        })()
      }, [i, n, e, a, t, u]), !e && !!i && !u && null != n && n
    }(),
    ep = {
      avatar: [],
      settings: []
    };
  if (!y) {
    if (eo && ep.settings.push(o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), t) {
      var eT;
      ep.settings.push(o.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP), H && V === (null === (eT = (0, B.getDrop)(ew.PartnerGame.FORTNITE)) || void 0 === eT ? void 0 : eT.title) && ep.settings.push(o.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP)
    }
    z && X && ep.settings.push(o.DismissibleContent.USER_SAFETY_SAFE_DIRECT_MESSAGING), ee && (1 === et ? ep.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : ep.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), er && ep.settings.push(o.DismissibleContent.SOUNDBOARD_VOLUME_EDUCATION), en && ep.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_REPORTING), es && ep.settings.push(o.DismissibleContent.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK)
  }
  return (0, a.jsx)(eY, {
    currentUser: e,
    customStatusActivity: l,
    dismissibleContents: ep,
    userTag: c,
    hidePrivateData: f,
    occluded: y,
    premiumSubscription: g,
    selfDeaf: I,
    selfMute: _,
    serverDeaf: p,
    serverMute: h,
    showRichProfilePopup: x,
    showTagAsButton: j,
    showTaglessAccountPanel: w,
    speaking: d,
    speakingWhileMuted: R,
    status: u,
    streaming: i,
    suppress: C,
    webBuildOverride: T,
    awaitingRemote: b,
    isEligibleForPomelo: D
  })
}

function eK(e) {
  let {
    webBuildOverride: t,
    isEligibleForPomelo: n,
    onClick: s,
    onContextMenu: l
  } = e, i = (0, m.useRedesignIconContext)().enabled, r = null, o = eN.default, u = (0, C.useSettingsLottie)();
  return i ? o = null != t ? E.SettingsInfoIcon : n ? f.SettingsCircleIcon : u.Component : null != t ? r = (0, a.jsx)(ev.default, {
    width: 9,
    height: 9,
    className: eF.hasBuildOverride,
    "aria-hidden": !0
  }) : n && (r = (0, a.jsx)(eP.CircleBadge, {
    color: x.default.STATUS_DANGER,
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

function ez(e) {
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
    Component: S,
    play: I,
    events: p
  } = (0, _.useMicrophoneLottie)(C ? "unmute" : "mute"), T = n || l ? c.MicrophoneDenyIcon : S;
  return s.useEffect(() => () => I(), [C, I]), (0, a.jsx)(eO.default, {
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
      color: C ? m.tokens.colors.STATUS_DANGER : "currentColor"
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

function eq(e) {
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
    tooltipText: (0, M.default)(t, n, l),
    onMouseEnter: E,
    onMouseLeave: _,
    icon: (0, a.jsx)(C, {
      size: "custom",
      width: 20,
      height: 20,
      color: u ? m.tokens.colors.STATUS_DANGER : "currentColor"
    }),
    onClick: r,
    onContextMenu: o,
    innerClassName: i()({
      [eF.redIcon]: n
    }),
    iconForeground: u ? eF.strikethrough : null,
    role: "switch",
    "aria-label": ek.default.Messages.DEAFEN,
    "aria-checked": u,
    disabled: l
  })
}