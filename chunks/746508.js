"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("512722"),
  o = n.n(r),
  u = n("613828"),
  d = n("442837"),
  c = n("592471"),
  f = n("864094"),
  E = n("75735"),
  h = n("382600"),
  _ = n("481060"),
  C = n("846027"),
  S = n("239091"),
  m = n("925549"),
  p = n("284056"),
  I = n("324315"),
  T = n("730749"),
  g = n("2052"),
  A = n("40851"),
  N = n("317381"),
  v = n("596040"),
  R = n("588580"),
  L = n("374065"),
  O = n("451576"),
  M = n("938655"),
  P = n("403404"),
  y = n("100527"),
  x = n("906732"),
  D = n("158631"),
  b = n("793865"),
  U = n("933557"),
  j = n("258609"),
  G = n("446226"),
  w = n("935261"),
  k = n("74299"),
  F = n("803647"),
  B = n("142497"),
  H = n("810788"),
  V = n("160404"),
  Y = n("703656"),
  W = n("641015"),
  K = n("848543"),
  z = n("565799"),
  q = n("501655"),
  Q = n("71275"),
  Z = n("600518"),
  X = n("485287"),
  J = n("754277"),
  $ = n("590415"),
  ee = n("695346"),
  et = n("923973"),
  en = n("829750"),
  ea = n("189771"),
  es = n("544384"),
  el = n("560688"),
  ei = n("127608"),
  er = n("76021"),
  eo = n("173507"),
  eu = n("25827"),
  ed = n("199902"),
  ec = n("314897"),
  ef = n("592125"),
  eE = n("430824"),
  eh = n("819640"),
  e_ = n("131951"),
  eC = n("496675"),
  eS = n("19780"),
  em = n("699516"),
  ep = n("594174"),
  eI = n("979651"),
  eT = n("938475"),
  eg = n("285952"),
  eA = n("762854"),
  eN = n("250183"),
  ev = n("87128"),
  eR = n("976401"),
  eL = n("333454"),
  eO = n("626135"),
  eM = n("63063"),
  eP = n("51144"),
  ey = n("594117"),
  ex = n("226323"),
  eD = n("981631"),
  eb = n("190378"),
  eU = n("689938"),
  ej = n("594078"),
  eG = n("949086");

function ew(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function ek(e) {
  let t = e.currentTarget;
  eO.default.track(eD.AnalyticEvents.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      section: eD.AnalyticsSections.NOISE_CANCELLATION_POPOUT
    }
  })
}

function eF() {
  let e = s.useRef(null);
  (0, _.useFocusLock)(e), s.useEffect(() => {
    eO.default.track(eD.AnalyticEvents.OPEN_POPOUT, {
      type: eD.AnalyticsSections.NOISE_CANCELLATION_POPOUT
    })
  }, []);
  let t = (0, d.useStateFromStores)([e_.default], () => e_.default.getNoiseCancellation());
  return (0, a.jsxs)("div", {
    ref: e,
    className: ej.noiseCancellationPopout,
    children: [(0, a.jsx)(_.FormSwitch, {
      hideBorder: !0,
      className: eG.marginBottom4,
      value: t,
      onChange: () => C.default.setNoiseCancellation(!t, {
        section: eD.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      }),
      note: eU.default.Messages.NOISE_CANCELLATION_POPOUT_DESCRIPTION,
      children: eU.default.Messages.NOISE_CANCELLATION_POPOUT_HEADER
    }), (0, a.jsx)(p.default, {
      title: eU.default.Messages.NOISE_CANCELLATION_POPOUT_MIC_TEST_TITLE,
      notchBackground: p.NotchBackground.BLACK,
      buttonTest: eU.default.Messages.NOISE_CANCELLATION_POPOUT_TEST,
      buttonStop: eU.default.Messages.NOISE_CANCELLATION_POPOUT_STOP,
      buttonClassName: ej.micTestButton,
      buttonColor: _.Button.Colors.PRIMARY,
      location: {
        section: eD.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      }
    }), (0, a.jsx)(_.FormTitle, {
      tag: _.FormTitleTags.H5,
      className: i()(eG.marginBottom8, eG.marginTop20),
      children: eU.default.Messages.NOISE_CANCELLATION_POPOUT_FOOTER
    }), (0, a.jsxs)(eg.default, {
      justify: eg.default.Justify.BETWEEN,
      className: ej.__invalid_footer,
      children: [(0, a.jsx)(_.Anchor, {
        href: eD.MarketingURLs.KRISP,
        onClick: e => ek(e),
        children: (0, a.jsx)("div", {
          className: ej.krispLogo
        })
      }), (0, a.jsx)(_.Anchor, {
        href: eM.default.getArticleURL(eD.HelpdeskArticles.NOISE_SUPPRESSION),
        className: ej.krispLink,
        onClick: e => ek(e),
        children: eU.default.Messages.LEARN_MORE
      })]
    })]
  })
}

function eB() {
  let e = (0, d.useStateFromStores)([J.default], () => J.default.isMuted()),
    t = e ? eU.default.Messages.STAGE_MUSIC_UNMUTE : eU.default.Messages.STAGE_MUSIC_MUTE;
  return (0, a.jsx)(eR.default, {
    "aria-label": t,
    tooltipText: t,
    icon: e ? ev.default : eN.default,
    onClick: () => (0, Z.updateStageMusicMuted)(!e)
  })
}

function eH(e) {
  let {
    channel: t,
    enableActivities: n,
    disabled: l
  } = e, r = (0, et.default)(), o = (0, ea.default)(t), u = (0, d.useStateFromStoresObject)([N.default], () => null != N.default.getSelfEmbeddedActivityForChannel(t.id)), c = (0, W.default)(t), {
    reachedLimit: f,
    limit: h
  } = (0, en.default)(t), S = s.useCallback(() => {
    (0, el.default)()
  }, []), m = (0, A.useAppContext)(), p = s.useCallback(e => {
    if (e_.default.isVideoEnabled() === e) return;
    let n = () => {
      var n;
      C.default.setVideoEnabled(e), e && (0, Y.transitionTo)(eD.Routes.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : eD.ME, t.id))
    };
    e ? (0, eo.default)(n, m) : n()
  }, [t, m]), I = u || n || c, {
    Component: T,
    play: g,
    events: v
  } = (0, E.useVideoLottie)(r.enabled ? "disable" : "enable");
  return s.useEffect(() => () => g(), [r.enabled, g]), (0, a.jsx)(eu.VideoButtonWrapper, {
    onChange: p,
    onCameraUnavailable: S,
    hasPermission: o,
    channelLimit: h,
    channelLimitReached: f,
    ...r,
    enabled: !l && r.enabled,
    children: e => {
      let {
        unavailable: t,
        active: n,
        label: s,
        iconComponent: l,
        ...r
      } = e, o = (0, a.jsx)(T, {
        size: "custom",
        width: 20,
        height: 20,
        className: i()(ej.buttonIcon, {
          [ej.withText]: !I
        }),
        color: "currentColor"
      });
      return (0, a.jsx)(_.Popout, {
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, a.jsx)(b.default, {
            onClose: t
          })
        },
        position: "top",
        align: "center",
        animation: _.Popout.Animation.FADE,
        children: (e, l) => {
          let {
            onClick: u,
            ...d
          } = e, {
            isShown: c
          } = l;
          return (0, a.jsx)(_.Tooltip, {
            text: s,
            children: e => (0, a.jsx)(_.Button, {
              ...r,
              ...e,
              ...d,
              onClick: t => {
                var n;
                r.onClick(t), null === (n = e.onClick) || void 0 === n || n.call(e), c && u(t)
              },
              onMouseEnter: () => {
                var t, n;
                null === (t = e.onMouseEnter) || void 0 === t || t.call(e), null === (n = d.onMouseEnter) || void 0 === n || n.call(d), v.onMouseEnter()
              },
              onMouseLeave: () => {
                var t;
                null === (t = e.onMouseLeave) || void 0 === t || t.call(e), v.onMouseLeave()
              },
              onContextMenu: t => {
                var n;
                u(t), null === (n = e.onContextMenu) || void 0 === n || n.call(e)
              },
              size: _.Button.Sizes.SMALL,
              className: i()(ej.button, ej.buttonColor, {
                [ej.buttonActive]: n,
                [ej.fauxDisabled]: t,
                [ej.disabled]: r.disabled
              }),
              innerClassName: ej.buttonContents,
              wrapperClassName: ej.button,
              fullWidth: !0,
              children: I ? o : (0, a.jsxs)(eg.default, {
                align: eg.default.Align.CENTER,
                children: [o, eU.default.Messages.VIDEO]
              })
            })
          })
        }
      })
    }
  })
}

function eV(e) {
  let {
    channel: t,
    enableActivities: n
  } = e, s = (0, A.useAppContext)(), {
    analyticsLocations: l
  } = (0, x.default)(), r = s === eD.AppContext.POPOUT, o = (0, L.useEmbeddedActivityLaunchability)(t.id), u = (0, L.getEmbeddedActivityLaunchabilityLabel)(o), [f] = (0, d.useStateFromStores)([N.default], () => null != t.id && "" !== t.id ? N.default.getEmbeddedActivitiesForChannel(t.id) : N.NO_ACTIVITIES), {
    userInActivity: E
  } = (0, d.useStateFromStoresObject)([N.default], () => ({
    userInActivity: null != N.default.getSelfEmbeddedActivityForChannel(t.id)
  })), h = (0, g.useAnalyticsContext)(), C = (0, R.useShowActivityIndicator)(), S = o !== L.EmbeddedActivityLaunchability.CAN_LAUNCH, {
    Component: m,
    events: p
  } = (0, c.useActivityLottie)();
  return n ? (0, a.jsx)(_.Tooltip, {
    text: u,
    children: e => (0, a.jsxs)(_.Button, {
      ...e,
      fullWidth: !0,
      size: _.Button.Sizes.SMALL,
      ...p,
      onClick: () => {
        var n;
        p.onClick(), (0, P.default)({
          channel: t,
          guildId: t.guild_id,
          locationObject: h.location,
          openInPopout: r,
          analyticsLocations: l
        }), null === (n = e.onClick) || void 0 === n || n.call(e)
      },
      onMouseEnter: () => {
        var t;
        p.onMouseEnter(), null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
      },
      onMouseLeave: () => {
        var t;
        p.onMouseLeave(), null == e || null === (t = e.onMouseLeave) || void 0 === t || t.call(e)
      },
      disabled: S,
      className: i()(ej.button, ej.buttonColor, {
        [ej.buttonActive]: E || null != f,
        [ej.disabled]: S
      }),
      innerClassName: ej.buttonContents,
      wrapperClassName: ej.button,
      children: [C ? (0, a.jsx)(M.FreeActivityIndicatorDot, {
        top: -1,
        right: -1
      }) : null, (0, a.jsx)(m, {
        size: "sm",
        color: "currentColor",
        className: ej.buttonIcon
      })]
    })
  }) : null
}

function eY(e) {
  let t, {
      channel: n,
      canGoLive: l,
      enableActivities: r,
      disabled: o
    } = e,
    u = (0, d.useStateFromStores)([ep.default], () => ep.default.getCurrentUser()),
    c = (0, d.useStateFromStoresArray)([ed.default], () => ed.default.getAllActiveStreams()),
    E = (0, ea.default)(n),
    h = n.getGuildId(),
    C = (0, d.useStateFromStoresObject)([N.default], () => null != N.default.getSelfEmbeddedActivityForChannel(n.id)),
    S = (0, W.default)(n),
    m = s.useCallback(() => {
      (0, er.default)(h, n.id, eD.AnalyticsSections.ACTIVITY_PANEL)
    }, [h, n.id]),
    p = c.find(e => e.ownerId === (null == u ? void 0 : u.id)),
    I = (0, es.useOtherStreams)(n, u, c);
  t = null == p ? l ? m : ei.default : () => (0, F.default)(p);
  let T = null != p || I.length > 0,
    g = E ? eU.default.Messages.SHARE_YOUR_SCREEN : eU.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE,
    A = C || r || S,
    v = null != p,
    {
      Component: R,
      events: L,
      play: O
    } = (0, f.useScreenshareLottie)(v ? "disable" : "enable");
  s.useEffect(() => () => O(), [O, v]);
  let M = (0, a.jsx)(R, {
    color: "currentColor",
    className: i()(ej.buttonIcon, {
      [ej.withText]: !A
    })
  });
  return (0, a.jsx)(_.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(es.default, {
        channel: n,
        currentUser: u,
        activeStreams: c,
        onClose: t,
        handleGoLive: l ? m : ei.default
      })
    },
    position: "top",
    align: "center",
    animation: _.Popout.Animation.FADE,
    children: e => {
      let {
        onClick: n,
        onMouseEnter: s,
        ...l
      } = e;
      return (0, a.jsx)(_.Tooltip, {
        text: g,
        children: e => (0, a.jsx)(_.Button, {
          ...e,
          size: _.Button.Sizes.SMALL,
          onClick: a => {
            var s;
            T ? n(a) : t(), null === (s = e.onClick) || void 0 === s || s.call(e)
          },
          disabled: !E || o,
          className: i()(ej.button, ej.buttonColor, {
            [ej.buttonActive]: null != p,
            [ej.disabled]: !E || o
          }),
          ...T ? l : null,
          onMouseEnter: () => {
            var t;
            null == s || s(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e), L.onMouseEnter()
          },
          onMouseLeave: () => {
            var t;
            null === (t = e.onMouseLeave) || void 0 === t || t.call(e), L.onMouseLeave()
          },
          innerClassName: ej.buttonContents,
          wrapperClassName: ej.button,
          children: A ? M : (0, a.jsxs)(eg.default, {
            align: eg.default.Align.CENTER,
            children: [M, eU.default.Messages.GO_LIVE_SHARE_SCREEN]
          })
        })
      })
    }
  })
}
class eW extends s.PureComponent {
  renderConnectionStatus() {
    let e;
    let {
      channel: t,
      guild: n,
      rtcConnectionQuality: s,
      rtcConnectionState: l,
      rtcConnectionLastPing: i,
      hasVideo: r,
      isBroadcasting: o
    } = this.props;
    if (null == t) return null;
    let d = (0, U.computeChannelName)(t, ep.default, em.default);
    return null != n ? (e = eD.Routes.CHANNEL(n.id, t.id), d = "".concat(d, " / ").concat(n.name)) : e = eD.Routes.CHANNEL(eD.ME, t.id), o && t.isBroadcastChannel() && (d = eU.default.Messages.BROADCASTING), (0, a.jsx)(I.default, {
      statusTextClassName: ej.statusWithPopout,
      quality: s,
      state: l,
      lastPing: i,
      hasVideo: r,
      children: (0, a.jsx)(_.FocusRing, {
        children: (0, a.jsx)(u.Link, {
          to: e,
          onClick: this.handleChannelLinkClick,
          onContextMenu: this.handleChannelLinkContextMenu,
          children: (0, a.jsx)(eL.default, {
            className: ej.channel,
            children: d
          })
        })
      })
    })
  }
  renderNoiseCancellation() {
    let {
      noiseCancellationActive: e,
      noiseCancellationError: t,
      hasLayers: n,
      remoteVoiceState: s,
      channel: l,
      voiceStates: i
    } = this.props;
    return null != s ? null : (null == l ? void 0 : l.isGuildStageVoice()) && !(null != i.find(e => e.user.id === ec.default.getId() && (0, $.getAudienceRequestToSpeakState)(e.voiceState) === $.RequestToSpeakStates.ON_STAGE)) && (0, X.shouldShowStageMusicMuteButton)(l.id) ? (0, a.jsx)(eB, {}) : !n && t ? (0, a.jsx)(_.Tooltip, {
      text: eU.default.Messages.NOISE_CANCELLATION_CPU_OVERUSE,
      tooltipClassName: ej.noiseCancellationTooltip,
      forceOpen: !0,
      children: e => {
        let {
          "aria-label": t
        } = e;
        return (0, a.jsx)(eR.default, {
          "aria-label": t,
          tooltipText: null,
          disabled: !0,
          icon: eA.default
        })
      }
    }) : (0, a.jsx)(_.Popout, {
      position: "top",
      align: "center",
      renderPopout: () => (0, a.jsx)(eF, {}),
      children: (t, n) => {
        let {
          isShown: s
        } = n;
        return (0, a.jsx)(eK, {
          popoutProps: t,
          isShown: s,
          noiseCancellationActive: e
        })
      }
    }, "krisp-popout")
  }
  renderVoiceStates() {
    let {
      channel: e,
      voiceStates: t,
      showVoiceStates: n
    } = this.props;
    return null != e && n && 0 !== t.length ? (0, a.jsx)(ex.default, {
      voiceStates: t,
      channel: e,
      className: ej.voiceUsers
    }) : null
  }
  renderChannelButtons() {
    let {
      channel: e,
      canGoLive: t,
      remoteVoiceState: n,
      enableActivities: s,
      voiceStates: l,
      selfStream: r,
      isPrivateChannelWithEnabledActivities: o
    } = this.props;
    if (null == e || null != n) return null;
    let u = ec.default.getId();
    if (e.isGuildStageVoice()) {
      if (!(0, Q.isStageVideoEnabled)(e.guild_id) || !t) return null;
      let n = l.find(e => e.user.id === u);
      if (null == n || n.voiceState.suppress) return null
    }
    let d = (e.isGuildVoice() || o) && s,
      {
        reachedLimit: c
      } = (0, en.getChannelVideoLimit)(e),
      f = (0, Q.getStageHasMedia)(e.id);
    return (0, a.jsxs)("div", {
      className: ej.actionButtons,
      children: [(0, a.jsx)(eH, {
        channel: e,
        enableActivities: d,
        disabled: !f && c
      }), (0, a.jsx)(eY, {
        channel: e,
        canGoLive: t,
        enableActivities: d,
        disabled: e.isGuildStageVoice() && (f && null == r || !f && c)
      }), (0, a.jsxs)(a.Fragment, {
        children: [d ? (0, a.jsx)(eV, {
          channel: e,
          enableActivities: s
        }) : null, (0, W.default)(e) ? (0, a.jsx)(K.default, {
          className: i()(ej.button, ej.buttonColor),
          innerClassName: ej.buttonContents,
          iconClassName: ej.buttonIcon,
          channel: e
        }) : null]
      })]
    })
  }
  render() {
    let {
      channel: e,
      noiseCancellationSupported: t,
      shouldShowVoicePanelIntroduction: n
    } = this.props;
    return null == e ? null : (0, a.jsx)(_.Popout, {
      renderPopout: this.renderVoicePanelIntroduction,
      position: "top",
      align: "center",
      animation: _.Popout.Animation.TRANSLATE,
      shouldShow: n,
      children: () => (0, a.jsxs)("div", {
        className: ej.container,
        children: [(0, a.jsxs)(eg.default, {
          className: ej.connection,
          align: eg.default.Align.CENTER,
          children: [(0, a.jsx)("div", {
            className: ej.inner,
            children: this.renderConnectionStatus()
          }), (0, a.jsxs)(eg.default, {
            grow: 0,
            shrink: 0,
            children: [t ? this.renderNoiseCancellation() : null, (0, a.jsx)(ey.default, {
              channel: e
            })]
          })]
        }), this.renderVoiceStates(), this.renderChannelButtons()]
      })
    })
  }
  constructor(...e) {
    super(...e), ew(this, "canScreenshare", () => {
      let {
        channel: e,
        canGoLive: t
      } = this.props;
      return t && null != e && null != e.getGuildId()
    }), ew(this, "handleNoiseCancellationClicked", () => {
      let {
        noiseCancellationActive: e
      } = this.props;
      C.default.setNoiseCancellation(!e, {
        section: eD.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      })
    }), ew(this, "handleGoLive", () => {
      let {
        guild: e,
        channel: t
      } = this.props, n = null != t ? t.getGuildId() : null != e ? e.id : null;
      null != n && (0, er.default)(n, t.id, eD.AnalyticsLocations.VOICE_PANEL)
    }), ew(this, "handleChannelLinkClick", e => {
      var t;
      let {
        guild: n,
        channel: a
      } = this.props;
      o()(null != a, "Channel is null during navigation click"), e.stopPropagation(), m.default.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eD.ME, a.id)
    }), ew(this, "handleChannelLinkContextMenu", e => {
      let {
        channel: t
      } = this.props;
      (0, S.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.e("56944").then(n.bind(n, "600830"));
        return n => (0, a.jsx)(e, {
          ...n,
          channel: t
        })
      })
    }), ew(this, "handleCloseVoicePanelIntroduction", () => {
      B.hideHotspot(eb.HotspotLocations.VOICE_PANEL_INTRODUCTION)
    }), ew(this, "renderVoicePanelIntroduction", () => (0, a.jsxs)("div", {
      className: i()(ej.voicePanelIntroductionWrapper, "theme-light"),
      children: [(0, a.jsx)(_.Heading, {
        className: ej.voicePanelIntroductionHeader,
        variant: "heading-md/semibold",
        children: eU.default.Messages.VOICE_PANEL_INTRODUCTION_HEADER
      }), (0, a.jsx)(_.Text, {
        className: ej.voicePanelIntroductionText,
        variant: "text-sm/normal",
        children: eU.default.Messages.VOICE_PANEL_INTRODUCTION_TEXT
      }), (0, a.jsx)(_.Button, {
        className: ej.voicePanelIntroductionButton,
        color: _.Button.Colors.BRAND,
        onClick: this.handleCloseVoicePanelIntroduction,
        children: eU.default.Messages.VOICE_PANEL_INTRODUCTION_CLOSE
      })]
    }))
  }
}

function eK(e) {
  let {
    popoutProps: t,
    isShown: n,
    noiseCancellationActive: l
  } = e, {
    play: i,
    Component: r,
    events: o
  } = (0, h.useWaveformLottie)(l ? "disable" : "enable");
  return s.useEffect(() => () => i(), [l, i]), (0, a.jsx)(eR.default, {
    ...t,
    onMouseEnter: () => {
      var e;
      null === (e = t.onMouseEnter) || void 0 === e || e.call(t), o.onMouseEnter()
    },
    onMouseLeave: () => {
      o.onMouseLeave()
    },
    tooltipClassName: ej.noiseCancellationTooltip,
    tooltipText: n ? null : eU.default.Messages.NOISE_CANCELLATION_TOOLTIP,
    icon: r
  })
}
t.default = (0, T.default)(function(e) {
  let t = (0, G.default)(),
    n = (0, d.useStateFromStores)([j.default], () => j.default.getAwaitingRemoteSessionInfo()),
    l = (0, d.useStateFromStores)([ep.default], () => ep.default.getCurrentUser()),
    {
      channelId: i,
      ...r
    } = (0, d.useStateFromStoresObject)([eS.default], () => null != t ? {
      channelId: t.channelId,
      rtcConnectionQuality: eD.RTCConnectionQuality.FINE,
      rtcConnectionState: eD.RTCConnectionStates.RTC_CONNECTED,
      rtcConnectionLastPing: 0
    } : {
      channelId: eS.default.getChannelId(),
      rtcConnectionQuality: eS.default.getQuality(),
      rtcConnectionState: eS.default.getState(),
      rtcConnectionLastPing: eS.default.getLastPing()
    }),
    o = (0, d.useStateFromStores)([ef.default], () => ef.default.getChannel(i), [i]),
    u = null == o ? void 0 : o.getGuildId(),
    c = (0, d.useStateFromStores)([eE.default], () => eE.default.getGuild(u), [u]),
    f = (0, d.useStateFromStoresObject)([e_.default], () => ({
      noiseCancellationSupported: e_.default.isNoiseCancellationSupported(),
      noiseCancellationActive: e_.default.getNoiseCancellation(),
      noiseCancellationError: e_.default.isNoiseCancellationError(),
      canGoLive: (0, k.default)(e_.default)
    })),
    E = (0, d.useStateFromStores)([e_.default, H.default], () => H.default.hasHotspot(eb.HotspotLocations.VOICE_PANEL_INTRODUCTION) && (0, eP.isNewUser)(l) && !e_.default.isInteractionRequired() && !(null == o ? void 0 : o.isGuildStageVoice())),
    h = (0, d.useStateFromStores)([eI.default], () => null != i && eI.default.hasVideo(i), [i]),
    C = (0, d.useStateFromStores)([ed.default], () => ed.default.getCurrentUserActiveStream()),
    S = (0, d.useStateFromStores)([eh.default], () => eh.default.hasLayers()),
    m = (0, d.useStateFromStores)([V.default], () => V.default.isViewingRoles(u)),
    p = (0, d.useStateFromStores)([eC.default], () => m && !eC.default.can(eD.Permissions.VIEW_CHANNEL, o), [m, o]),
    I = ee.RtcPanelShowVoiceStates.useSetting(),
    [T, g, A] = (0, d.useStateFromStoresArray)([eT.default, z.default], () => (null == o ? void 0 : o.isGuildStageVoice()) ? [z.default.getMutableParticipants(o.id, q.StageChannelParticipantNamedIndex.SPEAKER), z.default.getParticipantsVersion(o.id), null] : [null, null, null != o ? eT.default.getVoiceStatesForChannel(o) : null], [o]),
    N = s.useMemo(() => {
      var e, t;
      return null !== (t = null !== (e = null == T ? void 0 : T.map(e => {
        let {
          user: t,
          userNick: n,
          voiceState: a
        } = e;
        return {
          user: t,
          nick: n,
          voiceState: a
        }
      })) && void 0 !== e ? e : A) && void 0 !== t ? t : []
    }, [T, g, A]),
    [R, L] = s.useState(!1);
  s.useEffect(() => {
    (m || p) && L(!1)
  }, [m, p, L]);
  let {
    analyticsLocations: M
  } = (0, x.default)(y.default.RTC_PANEL), P = (0, v.default)(null != u ? u : eD.EMPTY_STRING_SNOWFLAKE_ID, null == o ? void 0 : o.id), b = (0, O.default)(null == o ? void 0 : o.id), U = (0, D.default)();
  return (0, a.jsx)(x.AnalyticsLocationProvider, {
    value: M,
    children: (0, a.jsxs)("div", {
      className: ej.wrapper,
      children: [null != t || null != n ? (0, a.jsx)(w.default, {
        voiceState: t,
        awaitingRemoteSessionInfo: n
      }) : null, (0, a.jsx)(eW, {
        ...e,
        ...f,
        ...r,
        enableActivities: P,
        remoteVoiceState: t,
        guild: c,
        channel: o,
        hasVideo: h,
        selfStream: C,
        hasLayers: S,
        voiceStates: N,
        showVoiceStates: I,
        shouldShowVoicePanelIntroduction: E,
        isPrivateChannelWithEnabledActivities: b,
        isBroadcasting: U
      }), !R && m && null != u ? (0, a.jsxs)("div", {
        className: ej.viewAsRolesWarning,
        children: [(0, a.jsx)(_.Text, {
          variant: "text-sm/normal",
          className: ej.viewAsRolesWarningText,
          children: p ? eU.default.Messages.VIEW_AS_ROLES_HIDDEN_VC_WARNING : eU.default.Messages.VIEW_AS_ROLES_VOICE_WARNING
        }), (0, a.jsx)(_.Button, {
          className: ej.viewAsRolesWarningButton,
          size: _.Button.Sizes.MIN,
          onClick: () => {
            L(!0)
          },
          children: eU.default.Messages.DISMISS
        })]
      }) : null]
    })
  })
})