"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
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
  m = n("239091"),
  S = n("925549"),
  I = n("284056"),
  p = n("324315"),
  T = n("730749"),
  g = n("2052"),
  A = n("40851"),
  N = n("317381"),
  v = n("596040"),
  O = n("588580"),
  R = n("374065"),
  L = n("451576"),
  P = n("938655"),
  M = n("403404"),
  y = n("100527"),
  D = n("906732"),
  b = n("158631"),
  x = n("793865"),
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
  em = n("19780"),
  eS = n("699516"),
  eI = n("594174"),
  ep = n("979651"),
  eT = n("938475"),
  eg = n("285952"),
  eA = n("762854"),
  eN = n("250183"),
  ev = n("87128"),
  eO = n("976401"),
  eR = n("333454"),
  eL = n("626135"),
  eP = n("63063"),
  eM = n("51144"),
  ey = n("594117"),
  eD = n("226323"),
  eb = n("981631"),
  ex = n("190378"),
  eU = n("689938"),
  ej = n("815668"),
  eG = n("794711");

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
  eL.default.track(eb.AnalyticEvents.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      section: eb.AnalyticsSections.NOISE_CANCELLATION_POPOUT
    }
  })
}

function eF() {
  let e = s.useRef(null);
  (0, _.useFocusLock)(e), s.useEffect(() => {
    eL.default.track(eb.AnalyticEvents.OPEN_POPOUT, {
      type: eb.AnalyticsSections.NOISE_CANCELLATION_POPOUT
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
        section: eb.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      }),
      note: eU.default.Messages.NOISE_CANCELLATION_POPOUT_DESCRIPTION,
      children: eU.default.Messages.NOISE_CANCELLATION_POPOUT_HEADER
    }), (0, a.jsx)(I.default, {
      title: eU.default.Messages.NOISE_CANCELLATION_POPOUT_MIC_TEST_TITLE,
      notchBackground: I.NotchBackground.BLACK,
      buttonTest: eU.default.Messages.NOISE_CANCELLATION_POPOUT_TEST,
      buttonStop: eU.default.Messages.NOISE_CANCELLATION_POPOUT_STOP,
      buttonClassName: ej.micTestButton,
      buttonColor: _.Button.Colors.PRIMARY,
      location: {
        section: eb.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      }
    }), (0, a.jsx)(_.FormTitle, {
      tag: _.FormTitleTags.H5,
      className: i()(eG.marginBottom8, eG.marginTop20),
      children: eU.default.Messages.NOISE_CANCELLATION_POPOUT_FOOTER
    }), (0, a.jsxs)(eg.default, {
      justify: eg.default.Justify.BETWEEN,
      className: ej.__invalid_footer,
      children: [(0, a.jsx)(_.Anchor, {
        href: eb.MarketingURLs.KRISP,
        onClick: e => ek(e),
        children: (0, a.jsx)("div", {
          className: ej.krispLogo
        })
      }), (0, a.jsx)(_.Anchor, {
        href: eP.default.getArticleURL(eb.HelpdeskArticles.NOISE_SUPPRESSION),
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
  return (0, a.jsx)(eO.default, {
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
  } = (0, en.default)(t), m = s.useCallback(() => {
    (0, el.default)()
  }, []), S = (0, A.useAppContext)(), I = s.useCallback(e => {
    if (e_.default.isVideoEnabled() === e) return;
    let n = () => {
      var n;
      C.default.setVideoEnabled(e), e && (0, Y.transitionTo)(eb.Routes.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : eb.ME, t.id))
    };
    e ? (0, eo.default)(n, S) : n()
  }, [t, S]), p = u || n || c, {
    Component: T,
    play: g,
    events: v
  } = (0, E.useVideoLottie)(r.enabled ? "disable" : "enable");
  return s.useEffect(() => () => g(), [r.enabled, g]), (0, a.jsx)(eu.VideoButtonWrapper, {
    onChange: I,
    onCameraUnavailable: m,
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
          [ej.withText]: !p
        }),
        color: "currentColor"
      });
      return (0, a.jsx)(_.Popout, {
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, a.jsx)(x.default, {
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
              children: p ? o : (0, a.jsxs)(eg.default, {
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
  } = (0, D.default)(), r = s === eb.AppContext.POPOUT, o = (0, R.useEmbeddedActivityLaunchability)(t.id), u = (0, R.getEmbeddedActivityLaunchabilityLabel)(o), [f] = (0, d.useStateFromStores)([N.default], () => null != t.id && "" !== t.id ? N.default.getEmbeddedActivitiesForChannel(t.id) : N.NO_ACTIVITIES), {
    userInActivity: E
  } = (0, d.useStateFromStoresObject)([N.default], () => ({
    userInActivity: null != N.default.getSelfEmbeddedActivityForChannel(t.id)
  })), h = (0, g.useAnalyticsContext)(), C = (0, O.useShowActivityIndicator)(), m = o !== R.EmbeddedActivityLaunchability.CAN_LAUNCH, {
    Component: S,
    events: I
  } = (0, c.useActivityLottie)();
  return n ? (0, a.jsx)(_.Tooltip, {
    text: u,
    children: e => (0, a.jsxs)(_.Button, {
      ...e,
      fullWidth: !0,
      size: _.Button.Sizes.SMALL,
      ...I,
      onClick: () => {
        var n;
        I.onClick(), (0, M.default)({
          channel: t,
          guildId: t.guild_id,
          locationObject: h.location,
          openInPopout: r,
          analyticsLocations: l
        }), null === (n = e.onClick) || void 0 === n || n.call(e)
      },
      disabled: m,
      className: i()(ej.button, ej.buttonColor, {
        [ej.buttonActive]: E || null != f,
        [ej.disabled]: m
      }),
      innerClassName: ej.buttonContents,
      wrapperClassName: ej.button,
      children: [C ? (0, a.jsx)(P.FreeActivityIndicatorDot, {
        top: -1,
        right: -1
      }) : null, (0, a.jsx)(S, {
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
    u = (0, d.useStateFromStores)([eI.default], () => eI.default.getCurrentUser()),
    c = (0, d.useStateFromStoresArray)([ed.default], () => ed.default.getAllActiveStreams()),
    E = (0, ea.default)(n),
    h = n.getGuildId(),
    C = (0, d.useStateFromStoresObject)([N.default], () => null != N.default.getSelfEmbeddedActivityForChannel(n.id)),
    m = (0, W.default)(n),
    S = s.useCallback(() => {
      (0, er.default)(h, n.id, eb.AnalyticsSections.ACTIVITY_PANEL)
    }, [h, n.id]),
    I = c.find(e => e.ownerId === (null == u ? void 0 : u.id)),
    p = (0, es.useOtherStreams)(n, u, c);
  t = null == I ? l ? S : ei.default : () => (0, F.default)(I);
  let T = null != I || p.length > 0,
    g = E ? eU.default.Messages.SHARE_YOUR_SCREEN : eU.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE,
    A = C || r || m,
    v = null != I,
    {
      Component: O,
      events: R,
      play: L
    } = (0, f.useScreenshareLottie)(v ? "disable" : "enable");
  s.useEffect(() => () => L(), [L, v]);
  let P = (0, a.jsx)(O, {
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
        handleGoLive: l ? S : ei.default
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
            [ej.buttonActive]: null != I,
            [ej.disabled]: !E || o
          }),
          ...T ? l : null,
          onMouseEnter: () => {
            null == s || s(), R.onMouseEnter()
          },
          onMouseLeave: () => {
            R.onMouseLeave()
          },
          innerClassName: ej.buttonContents,
          wrapperClassName: ej.button,
          children: A ? P : (0, a.jsxs)(eg.default, {
            align: eg.default.Align.CENTER,
            children: [P, eU.default.Messages.GO_LIVE_SHARE_SCREEN]
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
    let d = (0, U.computeChannelName)(t, eI.default, eS.default);
    return null != n ? (e = eb.Routes.CHANNEL(n.id, t.id), d = "".concat(d, " / ").concat(n.name)) : e = eb.Routes.CHANNEL(eb.ME, t.id), o && t.isBroadcastChannel() && (d = eU.default.Messages.BROADCASTING), (0, a.jsx)(p.default, {
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
          children: (0, a.jsx)(eR.default, {
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
        return (0, a.jsx)(eO.default, {
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
    return null != e && n && 0 !== t.length ? (0, a.jsx)(eD.default, {
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
        section: eb.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      })
    }), ew(this, "handleGoLive", () => {
      let {
        guild: e,
        channel: t
      } = this.props, n = null != t ? t.getGuildId() : null != e ? e.id : null;
      null != n && (0, er.default)(n, t.id, eb.AnalyticsLocations.VOICE_PANEL)
    }), ew(this, "handleChannelLinkClick", e => {
      var t;
      let {
        guild: n,
        channel: a
      } = this.props;
      o()(null != a, "Channel is null during navigation click"), e.stopPropagation(), S.default.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eb.ME, a.id)
    }), ew(this, "handleChannelLinkContextMenu", e => {
      let {
        channel: t
      } = this.props;
      (0, m.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.e("56944").then(n.bind(n, "600830"));
        return n => (0, a.jsx)(e, {
          ...n,
          channel: t
        })
      })
    }), ew(this, "handleCloseVoicePanelIntroduction", () => {
      B.hideHotspot(ex.HotspotLocations.VOICE_PANEL_INTRODUCTION)
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
  return s.useEffect(() => () => i(), [l, i]), (0, a.jsx)(eO.default, {
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
    l = (0, d.useStateFromStores)([eI.default], () => eI.default.getCurrentUser()),
    {
      channelId: i,
      ...r
    } = (0, d.useStateFromStoresObject)([em.default], () => null != t ? {
      channelId: t.channelId,
      rtcConnectionQuality: eb.RTCConnectionQuality.FINE,
      rtcConnectionState: eb.RTCConnectionStates.RTC_CONNECTED,
      rtcConnectionLastPing: 0
    } : {
      channelId: em.default.getChannelId(),
      rtcConnectionQuality: em.default.getQuality(),
      rtcConnectionState: em.default.getState(),
      rtcConnectionLastPing: em.default.getLastPing()
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
    E = (0, d.useStateFromStores)([e_.default, H.default], () => H.default.hasHotspot(ex.HotspotLocations.VOICE_PANEL_INTRODUCTION) && (0, eM.isNewUser)(l) && !e_.default.isInteractionRequired() && !(null == o ? void 0 : o.isGuildStageVoice())),
    h = (0, d.useStateFromStores)([ep.default], () => null != i && ep.default.hasVideo(i), [i]),
    C = (0, d.useStateFromStores)([ed.default], () => ed.default.getCurrentUserActiveStream()),
    m = (0, d.useStateFromStores)([eh.default], () => eh.default.hasLayers()),
    S = (0, d.useStateFromStores)([V.default], () => V.default.isViewingRoles(u)),
    I = (0, d.useStateFromStores)([eC.default], () => S && !eC.default.can(eb.Permissions.VIEW_CHANNEL, o), [S, o]),
    p = ee.RtcPanelShowVoiceStates.useSetting(),
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
    [O, R] = s.useState(!1);
  s.useEffect(() => {
    (S || I) && R(!1)
  }, [S, I, R]);
  let {
    analyticsLocations: P
  } = (0, D.default)(y.default.RTC_PANEL), M = (0, v.default)(null != u ? u : eb.EMPTY_STRING_SNOWFLAKE_ID, null == o ? void 0 : o.id), x = (0, L.default)(null == o ? void 0 : o.id), U = (0, b.default)();
  return (0, a.jsx)(D.AnalyticsLocationProvider, {
    value: P,
    children: (0, a.jsxs)("div", {
      className: ej.wrapper,
      children: [null != t || null != n ? (0, a.jsx)(w.default, {
        voiceState: t,
        awaitingRemoteSessionInfo: n
      }) : null, (0, a.jsx)(eW, {
        ...e,
        ...f,
        ...r,
        enableActivities: M,
        remoteVoiceState: t,
        guild: c,
        channel: o,
        hasVideo: h,
        selfStream: C,
        hasLayers: m,
        voiceStates: N,
        showVoiceStates: p,
        shouldShowVoicePanelIntroduction: E,
        isPrivateChannelWithEnabledActivities: x,
        isBroadcasting: U
      }), !O && S && null != u ? (0, a.jsxs)("div", {
        className: ej.viewAsRolesWarning,
        children: [(0, a.jsx)(_.Text, {
          variant: "text-sm/normal",
          className: ej.viewAsRolesWarningText,
          children: I ? eU.default.Messages.VIEW_AS_ROLES_HIDDEN_VC_WARNING : eU.default.Messages.VIEW_AS_ROLES_VOICE_WARNING
        }), (0, a.jsx)(_.Button, {
          className: ej.viewAsRolesWarningButton,
          size: _.Button.Sizes.MIN,
          onClick: () => {
            R(!0)
          },
          children: eU.default.Messages.DISMISS
        })]
      }) : null]
    })
  })
})