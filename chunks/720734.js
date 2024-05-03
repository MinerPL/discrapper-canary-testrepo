"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ez
  }
}), n("47120"), n("653041");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
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
  S = n("481060"),
  m = n("355467"),
  p = n("239091"),
  I = n("230711"),
  T = n("255952"),
  g = n("410575"),
  A = n("941129"),
  N = n("83200"),
  v = n("634894"),
  R = n("586902"),
  L = n("1585"),
  O = n("304761"),
  M = n("865427"),
  P = n("571250"),
  y = n("628581"),
  x = n("55311"),
  D = n("575175"),
  b = n("64220"),
  U = n("377171"),
  j = n("676035"),
  G = n("427217"),
  w = n("605236"),
  k = n("243778"),
  F = n("730417"),
  B = n("524347"),
  H = n("853197"),
  V = n("810280"),
  Y = n("60762"),
  W = n("258609"),
  K = n("278464"),
  z = n("917112"),
  q = n("331541"),
  Q = n("332473"),
  Z = n("240504"),
  X = n("637906"),
  J = n("39370"),
  $ = n("19199"),
  ee = n("111653"),
  et = n("212704"),
  en = n("14357"),
  ea = n("393333"),
  es = n("763296"),
  el = n("640806"),
  ei = n("484459"),
  er = n("584427"),
  eo = n("52538"),
  eu = n("331187"),
  ed = n("879815"),
  ec = n("294629"),
  ef = n("314897"),
  eE = n("592125"),
  eh = n("819640"),
  e_ = n("131951"),
  eC = n("19780"),
  eS = n("885110"),
  em = n("246946"),
  ep = n("594174"),
  eI = n("78839"),
  eT = n("285952"),
  eg = n("546591"),
  eA = n("86813"),
  eN = n("826026"),
  ev = n("937482"),
  eR = n("87888"),
  eL = n("976401"),
  eO = n("333454"),
  eM = n("864441"),
  eP = n("26290"),
  ey = n("626135"),
  ex = n("768581"),
  eD = n("572004"),
  eb = n("70956"),
  eU = n("374023"),
  ej = n("51144"),
  eG = n("998502"),
  ew = n("981631"),
  ek = n("215023"),
  eF = n("702512"),
  eB = n("689938"),
  eH = n("823020");

function eV(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let eY = eG.default.getEnableHardwareAcceleration() ? S.AnimatedAvatar : S.Avatar,
  eW = 30 * eb.default.Millis.DAY;
class eK extends s.PureComponent {
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
    } = this.state, t = [eB.default.Messages.COPY_SUCCESS_1, eB.default.Messages.COPY_SUCCESS_2, eB.default.Messages.COPY_SUCCESS_3, eB.default.Messages.COPY_SUCCESS_4, eB.default.Messages.COPY_SUCCESS_5, eB.default.Messages.COPY_SUCCESS_6, eB.default.Messages.COPY_SUCCESS_7, eB.default.Messages.COPY_SUCCESS_8, eB.default.Messages.COPY_SUCCESS_9, eB.default.Messages.COPY_SUCCESS_10, eB.default.Messages.COPY_SUCCESS_11], n = Math.min(Math.max(0, e - 1), t.length - 1);
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
    let r = ej.default.getName(l),
      o = null != i && i !== ew.StatusTypes.UNKNOWN,
      u = null != n;
    return (u || o && l.isPomelo()) && (e = (0, a.jsx)(eg.default, {
      hoverText: s,
      forceHover: t,
      children: u ? (0, a.jsx)(G.default, {
        activity: n,
        emojiClassName: eH.emoji,
        className: eH.customStatus
      }) : ej.default.humanizeStatus(i)
    })), (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: eH.panelTitleContainer,
        children: (0, a.jsx)(eM.default, {
          children: r
        })
      }), (0, a.jsx)("div", {
        className: eH.panelSubtextContainer,
        children: (0, a.jsx)(eO.default, {
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
    return eD.SUPPORTS_COPY && (s = eB.default.Messages.ACCOUNT_CLICK_TO_COPY, n && (s = this.renderCopiedSuccess(), l = this.isCopiedStreakGodlike ? S.TooltipColors.RED : S.TooltipColors.GREEN)), (0, a.jsx)(S.Tooltip, {
      text: s,
      forceOpen: t,
      "aria-label": !!eD.SUPPORTS_COPY && eB.default.Messages.ACCOUNT_CLICK_TO_COPY,
      color: l,
      delay: 500,
      onAnimationRest: (e, a) => {
        n && !t && a.phase === ew.SpringTransitionPhases.LEAVE && this.setState({
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
          className: i()(eH.nameTag, {
            [eH.canCopy]: eD.SUPPORTS_COPY
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
    let o = (0, ex.getAvatarDecorationURL)({
      avatarDecoration: n.avatarDecoration,
      size: (0, L.getDecorationSizeForAvatarSize)(S.AvatarSizes.SIZE_32)
    });
    return (0, a.jsx)(g.default, {
      object: ew.AnalyticsObjects.AVATAR,
      children: (0, a.jsx)(S.Popout, {
        renderPopout: this.renderStatusPickerPopout,
        position: "top",
        align: "left",
        animation: S.Popout.Animation.FADE,
        spacing: 14,
        fixed: !0,
        preload: () => (0, ei.default)(n.id, null == n ? void 0 : n.getAvatarURL(null, 80)),
        children: (u, d) => (0, a.jsxs)(S.Clickable, {
          ...u,
          "aria-label": eB.default.Messages.SET_STATUS,
          className: i()(eH.avatarWrapper, {
            [eH.withTagAsButton]: l,
            [eH.withTagless]: r
          }),
          children: [(0, a.jsx)(eY, {
            size: S.AvatarSizes.SIZE_32,
            src: n.getAvatarURL(void 0, 32, !1),
            avatarDecoration: o,
            "aria-label": n.username,
            status: t ? ew.StatusTypes.STREAMING : s,
            isSpeaking: e,
            className: eH.avatar
          }), l || r ? (0, a.jsx)("div", {
            className: i()(eH.nameTag, {
              [eH.canCopy]: eD.SUPPORTS_COPY
            }),
            children: r ? (0, a.jsx)(eL.default, {
              tooltipText: null,
              icon: d.isShown ? eA.default : eN.default,
              role: "switch",
              "aria-label": eB.default.Messages.SET_STATUS
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
      children: [(0, a.jsx)(k.default, {
        contentTypes: t.avatar,
        children: e => {
          let {
            visibleContent: t,
            markAsDismissed: n
          } = e;
          if (t === o.DismissibleContent.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP) return (0, a.jsx)(b.default, {
            markAsDismissed: n,
            children: () => this.renderAvatarWithPopout()
          });
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
      className: eH.container,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [this.renderNameZone(), (0, a.jsxs)(eT.default, {
        grow: 0,
        children: [(0, a.jsx)(eQ, {
          selfMute: n,
          serverMute: l,
          suppress: r,
          awaitingRemote: s,
          tooltipText: d ? eB.default.Messages.ACCOUNT_SPEAKING_WHILE_MUTED : (0, y.default)(n, l, r, s),
          tooltipColor: d ? S.TooltipColors.GREEN : void 0,
          tooltipForceOpen: d || void 0,
          onMouseEnter: this.handleMouseEnterMute,
          onMouseLeave: this.handleMouseLeaveMute,
          onClick: this.handleToggleSelfMute,
          onContextMenu: this.handleInputAudioContextMenu
        }), (0, a.jsx)(eZ, {
          selfDeaf: t,
          serverDeaf: i,
          onClick: this.handleToggleSelfDeaf,
          onContextMenu: this.handleOutputAudioContextMenu,
          awaitingRemote: s
        }), (0, a.jsx)(k.default, {
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
                  renderPopout: () => (0, a.jsx)(J.default, {}),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(V.default, {
                    markAsDismissed: n,
                    partnerGame: eF.PartnerGame.FORTNITE
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(Y.default, {
                    markAsDismissed: n,
                    partnerGame: eF.PartnerGame.FORTNITE
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_SAFE_DIRECT_MESSAGING:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(eu.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(et.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(en.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.SOUNDBOARD_VOLUME_EDUCATION:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(el.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(ea.UserSafetyEducationReportingCoachmark, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(eo.default, {}),
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
    super(...e), eV(this, "copiedTimeout", new u.Timeout), eV(this, "copiedDecayTimeout", new u.Timeout), eV(this, "speakingWhileMutedTooltipTimeout", new u.Timeout), eV(this, "state", {
      hovered: !1,
      copiedStreak: 0,
      shouldShowNametagTooltip: !1,
      shouldShowCopiedFeedback: !1,
      shouldShowSpeakingWhileMutedTooltip: !1,
      hoveringOnMute: !1
    }), eV(this, "handleToggleSelfMute", () => {
      let {
        serverMute: e,
        suppress: t
      } = this.props;
      (0, D.default)(e, t)
    }), eV(this, "handleToggleSelfDeaf", () => {
      let {
        serverDeaf: e
      } = this.props;
      (0, x.default)(e)
    }), eV(this, "handleOpenAccountSettings", () => {
      this.handleOpenSettings()
    }), eV(this, "handleOpenSettings", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.UserSettingsSections.ACCOUNT,
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0;
      I.default.open(e, t, n)
    }), eV(this, "handleOpenSettingsContextMenu", e => {
      let {
        currentUser: t
      } = this.props;
      null != t && (0, p.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("40326"), n.e("23357"), n.e("28020"), n.e("15972"), n.e("440"), n.e("6416"), n.e("63438"), n.e("58600"), n.e("33053"), n.e("49146"), n.e("17938"), n.e("65866"), n.e("76540"), n.e("93521"), n.e("5528"), n.e("80603"), n.e("18824"), n.e("74753"), n.e("2535")]).then(n.bind(n, "923422"));
        return n => (0, a.jsx)(e, {
          ...n,
          user: t,
          premiumSubscription: this.props.premiumSubscription,
          webBuildOverride: this.props.webBuildOverride
        })
      })
    }), eV(this, "handleInputAudioContextMenu", e => {
      (0, p.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "659580"));
        return () => (0, a.jsx)(e, {
          onClose: p.closeContextMenu,
          renderInputDevices: !0,
          renderInputModes: !0,
          renderInputVolume: !0
        })
      })
    }), eV(this, "handleOutputAudioContextMenu", e => {
      (0, p.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "659580"));
        return () => (0, a.jsx)(e, {
          onClose: p.closeContextMenu,
          renderOutputDevices: !0,
          renderOutputVolume: !0
        })
      })
    }), eV(this, "handleMouseEnter", () => {
      this.setState({
        hovered: !0
      })
    }), eV(this, "handleMouseLeave", () => {
      this.setState({
        hovered: !1
      })
    }), eV(this, "handleMouseEnterMute", () => {
      this.setState({
        hoveringOnMute: !0,
        shouldShowSpeakingWhileMutedTooltip: !1
      }), this.speakingWhileMutedTooltipTimeout.stop()
    }), eV(this, "handleMouseLeaveMute", () => {
      this.setState({
        hoveringOnMute: !1
      })
    }), eV(this, "handleCopyTag", () => {
      let {
        currentUser: e
      } = this.props, {
        shouldShowNametagTooltip: t,
        copiedStreak: n
      } = this.state;
      if (null == e) return;
      (0, eD.copy)(ej.default.getUserTag(e, {
        decoration: "never",
        identifiable: "always"
      })), ey.default.track(ew.AnalyticEvents.TEXT_COPIED, {
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
    }), eV(this, "handleOccludedChanged", () => {
      let {
        occluded: e
      } = this.props;
      e && this.setState({
        shouldShowNametagTooltip: !1,
        shouldShowSpeakingWhileMutedTooltip: !1
      })
    }), eV(this, "handleSpeakingWhileMutedChanged", () => {
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
    }), eV(this, "renderStatusPickerPopout", e => {
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
          className: eH.accountProfilePopoutWrapper,
          children: (0, a.jsx)(q.default, {
            ...e
          })
        })
      }
      return (0, a.jsx)(T.default, {
        onClose: () => {
          this.handleMouseLeave(), null == t || t()
        }
      })
    }), eV(this, "renderSettingsGear", () => (0, a.jsx)(eq, {
      isEligibleForPomelo: this.props.isEligibleForPomelo,
      webBuildOverride: this.props.webBuildOverride,
      onClick: this.handleOpenAccountSettings,
      onContextMenu: this.handleOpenSettingsContextMenu
    }))
  }
}

function ez() {
  var e, t;
  let n = (0, r.useStateFromStores)([ep.default], () => ep.default.getCurrentUser()),
    l = (0, F.useShowEligibilityEnrollmentTooltip)(eF.PartnerGame.FORTNITE),
    i = (0, r.useStateFromStores)([ef.default], () => ef.default.getId()),
    u = (0, j.useCustomStatusActivity)(),
    {
      streaming: d,
      status: c
    } = (0, r.useStateFromStoresObject)([eS.default], () => ({
      streaming: null != eS.default.findActivity(e => e.type === ew.ActivityTypes.STREAMING),
      status: eS.default.getStatus()
    })),
    f = (0, R.default)({
      userId: i
    }),
    E = ej.default.useUserTag(n, {
      decoration: "never"
    }),
    h = (0, r.useStateFromStores)([em.default], () => em.default.hidePersonalInformation),
    _ = (0, r.useStateFromStores)([eC.default, eE.default], () => {
      let e = eC.default.getChannelId();
      return null != e ? eE.default.getChannel(e) : null
    }),
    {
      mute: C,
      selfMute: p,
      suppress: I
    } = (0, ec.default)(_),
    {
      selfDeaf: T,
      deaf: g
    } = (0, ed.default)(_),
    L = (0, r.useStateFromStores)([O.default], () => {
      var e;
      return (0, M.probablyHasBuildOverride)() ? null === (e = O.default.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
    }),
    P = (0, r.useStateFromStores)([eI.default], () => eI.default.getPremiumTypeSubscription()),
    y = (0, r.useStateFromStores)([e_.default], () => e_.default.getEverSpeakingWhileMuted()),
    x = (0, r.useStateFromStores)([eh.default], () => eh.default.hasLayers()),
    D = (0, S.useModalsStore)(S.hasAnyModalOpenSelector) || x || eU.ProcessArgs.isDisallowPopupsSet(),
    b = (0, Q.useIsEligibleForPomelo)();
  s.useEffect(() => {
    z.default.trackExposure({
      location: "08bd40_3"
    })
  });
  let U = (0, r.useStateFromStores)([W.default], () => null != W.default.getAwaitingRemoteSessionInfo()),
    {
      isPopupEnabled: G,
      isJoinedTagButtonEnabled: k,
      isTaglessAccountPanelEnabled: V
    } = z.default.useExperiment({
      location: "08bd40_4"
    }, {
      autoTrackExposure: !1
    }),
    Y = (0, r.useStateFromStores)([B.default], () => B.default.isCurrentQuestCompleted),
    q = (0, r.useStateFromStores)([B.default], () => B.default.currentDropQuestGameTitle),
    J = (0, K.useIsHomeSelected)(),
    et = (0, N.useIsDmSpamFilterCoachmarkEnabled)(),
    en = (0, $.useCanSeeSafetyEducationBlockMuteCoachmark)(),
    ea = (0, A.useIsSafetyConsumerEducationBlockMuteBucket)(),
    el = (0, ee.useCanSeeSafetyEducationReportingCoachmark)(),
    ei = (0, er.default)(n),
    eo = (null == n ? void 0 : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === ek.GYOIKO_SAKURA_DECO_SKU_ID,
    eu = "account";
  (0, v.useTriggerDebuggingAA)({
    location: eu + " auto on",
    autoTrackExposure: !0
  }), (0, v.useTriggerDebuggingAA)({
    location: eu + " auto off",
    autoTrackExposure: !1
  }), (0, $.useSafetyEducationAATriggerPoint)();
  let eT = (0, r.useStateFromStores)([es.default], () => es.default.hasHadOtherUserPlaySoundInSession()),
    eg = function() {
      let e = (0, w.useIsDismissibleContentDismissed)(o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
        [t, n] = (0, r.useStateFromStoresArray)([Z.default], () => [Z.default.hasFetchedRelevance, Z.default.profileThemesRelevanceExceeded]),
        [a, l] = (0, r.useStateFromStoresArray)([eI.default], () => [eI.default.hasFetchedMostRecentPremiumTypeSubscription(), eI.default.getMostRecentPremiumTypeSubscription()]),
        {
          enabled: i
        } = X.default.useExperiment({
          location: "08bd40_1"
        }, {
          autoTrackExposure: !0
        }),
        u = s.useMemo(() => {
          let e = new Date().getTime();
          return null != l && (l.status === ew.SubscriptionStatusTypes.ACTIVE || e - l.currentPeriodEnd.getTime() < eW)
        }, [l]);
      return s.useEffect(() => {
        (async () => {
          if (!e && null == n && !!i) {
            if (!a) {
              await (0, m.fetchMostRecentSubscription)();
              return
            }!u && !t && await (0, m.getPerksRelevance)()
          }
        })()
      }, [i, n, e, a, t, u]), !e && !!i && !u && null != n && n
    }(),
    eA = {
      avatar: [],
      settings: []
    };
  return !D && (eg && eA.settings.push(o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), l && (eA.settings.push(o.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP), Y && q === (null === (t = (0, H.getDrop)(eF.PartnerGame.FORTNITE)) || void 0 === t ? void 0 : t.title) && eA.settings.push(o.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP)), J && et && eA.settings.push(o.DismissibleContent.USER_SAFETY_SAFE_DIRECT_MESSAGING), en && (1 === ea ? eA.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : eA.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), eT && eA.settings.push(o.DismissibleContent.SOUNDBOARD_VOLUME_EDUCATION), el && eA.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_REPORTING), ei && eA.settings.push(o.DismissibleContent.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), eo && eA.avatar.push(o.DismissibleContent.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)), (0, a.jsx)(eK, {
    currentUser: n,
    customStatusActivity: u,
    dismissibleContents: eA,
    userTag: E,
    hidePrivateData: h,
    occluded: D,
    premiumSubscription: P,
    selfDeaf: T,
    selfMute: p,
    serverDeaf: g,
    serverMute: C,
    showRichProfilePopup: G,
    showTagAsButton: k,
    showTaglessAccountPanel: V,
    speaking: f,
    speakingWhileMuted: y,
    status: c,
    streaming: d,
    suppress: I,
    webBuildOverride: L,
    awaitingRemote: U,
    isEligibleForPomelo: b
  })
}

function eq(e) {
  let {
    webBuildOverride: t,
    isEligibleForPomelo: n,
    onClick: s,
    onContextMenu: l
  } = e, i = (0, S.useRedesignIconContext)().enabled, r = null, o = ev.default, u = (0, C.useSettingsLottie)();
  return i ? o = null != t ? E.SettingsInfoIcon : n ? f.SettingsCircleIcon : u.Component : null != t ? r = (0, a.jsx)(eR.default, {
    width: 9,
    height: 9,
    className: eH.hasBuildOverride,
    "aria-hidden": !0
  }) : n && (r = (0, a.jsx)(eP.CircleBadge, {
    color: U.default.STATUS_DANGER,
    className: eH.hasBuildOverride,
    "aria-hidden": !0
  })), (0, a.jsx)(eL.default, {
    tooltipText: null != t ? eB.default.Messages.USER_SETTINGS_WITH_BUILD_OVERRIDE.format({
      webBuildOverride: t.id
    }) : eB.default.Messages.USER_SETTINGS,
    onClick: s,
    onContextMenu: l,
    innerClassName: null != t || n ? eH.buildOverrideButton : null,
    icon: o,
    ...u.events,
    children: r
  })
}

function eQ(e) {
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
    Component: m,
    play: p,
    events: I
  } = (0, _.useMicrophoneLottie)(C ? "unmute" : "mute"), T = n || l ? c.MicrophoneDenyIcon : m;
  return s.useEffect(() => () => p(), [C, p]), (0, a.jsx)(eL.default, {
    tooltipText: r,
    tooltipColor: o,
    tooltipForceOpen: u,
    onMouseEnter: () => {
      d(), I.onMouseEnter()
    },
    onMouseLeave: () => {
      f(), I.onMouseLeave()
    },
    icon: (0, a.jsx)(T, {
      size: "custom",
      width: 20,
      height: 20,
      color: C ? S.tokens.colors.STATUS_DANGER : "currentColor"
    }),
    iconForeground: C ? eH.strikethrough : null,
    onClick: E,
    onContextMenu: h,
    role: "switch",
    "aria-label": eB.default.Messages.MUTE,
    "aria-checked": C,
    disabled: i
  })
}

function eZ(e) {
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
  return s.useEffect(() => () => f(), [u, f]), (0, a.jsx)(eL.default, {
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
    innerClassName: i()({
      [eH.redIcon]: n
    }),
    iconForeground: u ? eH.strikethrough : null,
    role: "switch",
    "aria-label": eB.default.Messages.DEAFEN,
    "aria-checked": u,
    disabled: l
  })
}