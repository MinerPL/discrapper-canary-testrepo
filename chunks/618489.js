"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eK
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("627445"),
  o = n.n(r),
  u = n("90915"),
  d = n("446674"),
  c = n("84972"),
  f = n("607837"),
  E = n("881913"),
  h = n("352968"),
  _ = n("77078"),
  C = n("629109"),
  S = n("272030"),
  I = n("406189"),
  m = n("32296"),
  p = n("412026"),
  T = n("86621"),
  g = n("997289"),
  A = n("244201"),
  N = n("191225"),
  R = n("372610"),
  O = n("380691"),
  v = n("943349"),
  L = n("702173"),
  M = n("10524"),
  P = n("478272"),
  y = n("812204"),
  D = n("685665"),
  x = n("754493"),
  b = n("458685"),
  U = n("679653"),
  G = n("76393"),
  j = n("261552"),
  w = n("167715"),
  k = n("479788"),
  F = n("16916"),
  B = n("597517"),
  H = n("269596"),
  V = n("38654"),
  Y = n("393414"),
  W = n("245463"),
  K = n("486185"),
  z = n("488464"),
  q = n("998716"),
  Q = n("819450"),
  Z = n("111542"),
  X = n("924872"),
  J = n("274438"),
  $ = n("808422"),
  ee = n("845579"),
  et = n("999180"),
  en = n("830210"),
  ea = n("289180"),
  es = n("951691"),
  el = n("19065"),
  ei = n("977347"),
  er = n("799808"),
  eo = n("727284"),
  eu = n("116439"),
  ed = n("373469"),
  ec = n("271938"),
  ef = n("42203"),
  eE = n("305961"),
  eh = n("778588"),
  e_ = n("42887"),
  eC = n("957255"),
  eS = n("945956"),
  eI = n("27618"),
  em = n("697218"),
  ep = n("800762"),
  eT = n("316133"),
  eg = n("145131"),
  eA = n("220075"),
  eN = n("394640"),
  eR = n("343571"),
  eO = n("962541"),
  ev = n("762489"),
  eL = n("599110"),
  eM = n("701909"),
  eP = n("158998"),
  ey = n("452469"),
  eD = n("997769"),
  ex = n("49111"),
  eb = n("533613"),
  eU = n("782340"),
  eG = n("194416"),
  ej = n("890957");

function ew(e) {
  let t = e.currentTarget;
  eL.default.track(ex.AnalyticEvents.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      section: ex.AnalyticsSections.NOISE_CANCELLATION_POPOUT
    }
  })
}

function ek() {
  let e = s.useRef(null);
  (0, _.useFocusLock)(e), s.useEffect(() => {
    eL.default.track(ex.AnalyticEvents.OPEN_POPOUT, {
      type: ex.AnalyticsSections.NOISE_CANCELLATION_POPOUT
    })
  }, []);
  let t = (0, d.useStateFromStores)([e_.default], () => e_.default.getNoiseCancellation());
  return (0, a.jsxs)("div", {
    ref: e,
    className: eG.noiseCancellationPopout,
    children: [(0, a.jsx)(_.FormSwitch, {
      hideBorder: !0,
      className: ej.marginBottom4,
      value: t,
      onChange: () => C.default.setNoiseCancellation(!t, {
        section: ex.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      }),
      note: eU.default.Messages.NOISE_CANCELLATION_POPOUT_DESCRIPTION,
      children: eU.default.Messages.NOISE_CANCELLATION_POPOUT_HEADER
    }), (0, a.jsx)(m.default, {
      title: eU.default.Messages.NOISE_CANCELLATION_POPOUT_MIC_TEST_TITLE,
      notchBackground: m.NotchBackground.BLACK,
      buttonTest: eU.default.Messages.NOISE_CANCELLATION_POPOUT_TEST,
      buttonStop: eU.default.Messages.NOISE_CANCELLATION_POPOUT_STOP,
      buttonClassName: eG.micTestButton,
      buttonColor: _.Button.Colors.PRIMARY,
      location: {
        section: ex.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      }
    }), (0, a.jsx)(_.FormTitle, {
      tag: _.FormTitleTags.H5,
      className: i(ej.marginBottom8, ej.marginTop20),
      children: eU.default.Messages.NOISE_CANCELLATION_POPOUT_FOOTER
    }), (0, a.jsxs)(eg.default, {
      justify: eg.default.Justify.BETWEEN,
      className: eG.footer,
      children: [(0, a.jsx)(_.Anchor, {
        href: ex.MarketingURLs.KRISP,
        onClick: e => ew(e),
        children: (0, a.jsx)("div", {
          className: eG.krispLogo
        })
      }), (0, a.jsx)(_.Anchor, {
        href: eM.default.getArticleURL(ex.HelpdeskArticles.NOISE_SUPPRESSION),
        className: eG.krispLink,
        onClick: e => ew(e),
        children: eU.default.Messages.LEARN_MORE
      })]
    })]
  })
}

function eF() {
  let e = (0, d.useStateFromStores)([J.default], () => J.default.isMuted()),
    t = e ? eU.default.Messages.STAGE_MUSIC_UNMUTE : eU.default.Messages.STAGE_MUSIC_MUTE;
  return (0, a.jsx)(eO.default, {
    "aria-label": t,
    tooltipText: t,
    icon: e ? eR.default : eN.default,
    onClick: () => (0, Z.updateStageMusicMuted)(!e)
  })
}

function eB(e) {
  let {
    channel: t,
    enableActivities: n,
    disabled: l
  } = e, r = (0, et.default)(), o = (0, ea.default)(t), u = (0, d.useStateFromStoresObject)([N.default], () => null != N.default.getSelfEmbeddedActivityForChannel(t.id)), c = (0, W.default)(t), {
    reachedLimit: f,
    limit: h
  } = (0, en.default)(t), S = s.useCallback(() => {
    (0, el.default)()
  }, []), I = (0, A.useAppContext)(), m = s.useCallback(e => {
    if (e_.default.isVideoEnabled() === e) return;
    let n = () => {
      var n;
      C.default.setVideoEnabled(e), e && (0, Y.transitionTo)(ex.Routes.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : ex.ME, t.id))
    };
    e ? (0, eo.default)(n, I) : n()
  }, [t, I]), p = u || n || c, {
    Component: T,
    play: g,
    events: R
  } = (0, E.useVideoLottie)(r.enabled ? "mute" : "unmute");
  return s.useEffect(() => () => g(), [r.enabled, g]), (0, a.jsx)(eu.VideoButtonWrapper, {
    onChange: m,
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
        className: i(eG.buttonIcon, {
          [eG.withText]: !p
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
                null === (t = e.onMouseEnter) || void 0 === t || t.call(e), null === (n = d.onMouseEnter) || void 0 === n || n.call(d), R.onMouseEnter()
              },
              onMouseLeave: () => {
                var t;
                null === (t = e.onMouseLeave) || void 0 === t || t.call(e), R.onMouseLeave()
              },
              onContextMenu: t => {
                var n;
                u(t), null === (n = e.onContextMenu) || void 0 === n || n.call(e)
              },
              size: _.Button.Sizes.SMALL,
              className: i(eG.button, eG.buttonColor, {
                [eG.buttonActive]: n,
                [eG.fauxDisabled]: t,
                [eG.disabled]: r.disabled
              }),
              innerClassName: eG.buttonContents,
              wrapperClassName: eG.button,
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

function eH(e) {
  let {
    channel: t,
    enableActivities: n
  } = e, s = (0, A.useAppContext)(), {
    analyticsLocations: l
  } = (0, D.default)(), r = s === ex.AppContext.POPOUT, o = (0, v.useEmbeddedActivityLaunchability)(t.id), u = (0, v.getEmbeddedActivityLaunchabilityLabel)(o), [f] = (0, d.useStateFromStores)([N.default], () => null != t.id && "" !== t.id ? N.default.getEmbeddedActivitiesForChannel(t.id) : N.NO_ACTIVITIES), {
    userInActivity: E
  } = (0, d.useStateFromStoresObject)([N.default], () => ({
    userInActivity: null != N.default.getSelfEmbeddedActivityForChannel(t.id)
  })), h = (0, g.useAnalyticsContext)(), C = (0, O.useShowActivityIndicator)(), S = o !== v.EmbeddedActivityLaunchability.CAN_LAUNCH, {
    Component: I,
    events: m
  } = (0, c.useActivityLottie)();
  return n ? (0, a.jsx)(_.Tooltip, {
    text: u,
    children: e => (0, a.jsxs)(_.Button, {
      ...e,
      fullWidth: !0,
      size: _.Button.Sizes.SMALL,
      ...m,
      onClick: () => {
        var n;
        m.onClick(), (0, P.default)({
          channel: t,
          guildId: t.guild_id,
          locationObject: h.location,
          openInPopout: r,
          analyticsLocations: l
        }), null === (n = e.onClick) || void 0 === n || n.call(e)
      },
      disabled: S,
      className: i(eG.button, eG.buttonColor, {
        [eG.buttonActive]: E || null != f,
        [eG.disabled]: S
      }),
      innerClassName: eG.buttonContents,
      wrapperClassName: eG.button,
      children: [C ? (0, a.jsx)(M.FreeActivityIndicatorDot, {
        top: -1,
        right: -1
      }) : null, (0, a.jsx)(I, {
        size: "sm",
        color: "currentColor",
        className: eG.buttonIcon
      })]
    })
  }) : null
}

function eV(e) {
  let t, {
      channel: n,
      canGoLive: l,
      enableActivities: r,
      disabled: o
    } = e,
    u = (0, d.useStateFromStores)([em.default], () => em.default.getCurrentUser()),
    c = (0, d.useStateFromStoresArray)([ed.default], () => ed.default.getAllActiveStreams()),
    E = (0, ea.default)(n),
    h = n.getGuildId(),
    C = (0, d.useStateFromStoresObject)([N.default], () => null != N.default.getSelfEmbeddedActivityForChannel(n.id)),
    S = (0, W.default)(n),
    I = s.useCallback(() => {
      (0, er.default)(h, n.id, ex.AnalyticsSections.ACTIVITY_PANEL)
    }, [h, n.id]),
    m = c.find(e => e.ownerId === (null == u ? void 0 : u.id)),
    p = (0, es.useOtherStreams)(n, u, c);
  t = null == m ? l ? I : ei.default : () => (0, F.default)(m);
  let T = null != m || p.length > 0,
    g = E ? eU.default.Messages.SHARE_YOUR_SCREEN : eU.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE,
    A = C || r || S,
    R = null != m,
    {
      Component: O,
      events: v,
      play: L
    } = (0, f.useScreenshareLottie)(R ? "off" : "on");
  s.useEffect(() => () => L(), [L, R]);
  let M = (0, a.jsx)(O, {
    color: "currentColor",
    className: i(eG.buttonIcon, {
      [eG.withText]: !A
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
        handleGoLive: l ? I : ei.default
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
          className: i(eG.button, eG.buttonColor, {
            [eG.buttonActive]: null != m,
            [eG.disabled]: !E || o
          }),
          ...T ? l : null,
          onMouseEnter: () => {
            null == s || s(), v.onMouseEnter()
          },
          onMouseLeave: () => {
            v.onMouseLeave()
          },
          innerClassName: eG.buttonContents,
          wrapperClassName: eG.button,
          children: A ? M : (0, a.jsxs)(eg.default, {
            align: eg.default.Align.CENTER,
            children: [M, eU.default.Messages.GO_LIVE_SHARE_SCREEN]
          })
        })
      })
    }
  })
}
class eY extends s.PureComponent {
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
    let d = (0, U.computeChannelName)(t, em.default, eI.default);
    return null != n ? (e = ex.Routes.CHANNEL(n.id, t.id), d = "".concat(d, " / ").concat(n.name)) : e = ex.Routes.CHANNEL(ex.ME, t.id), o && t.isBroadcastChannel() && (d = eU.default.Messages.BROADCASTING), (0, a.jsx)(p.default, {
      statusTextClassName: eG.statusWithPopout,
      quality: s,
      state: l,
      lastPing: i,
      hasVideo: r,
      children: (0, a.jsx)(_.FocusRing, {
        children: (0, a.jsx)(u.Link, {
          to: e,
          onClick: this.handleChannelLinkClick,
          onContextMenu: this.handleChannelLinkContextMenu,
          children: (0, a.jsx)(ev.default, {
            className: eG.channel,
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
    if (null != s) return null;
    if (null == l ? void 0 : l.isGuildStageVoice()) {
      let e = null != i.find(e => e.user.id === ec.default.getId() && (0, $.getAudienceRequestToSpeakState)(e.voiceState) === $.RequestToSpeakStates.ON_STAGE);
      if (!e && (0, X.shouldShowStageMusicMuteButton)(l.id)) return (0, a.jsx)(eF, {})
    }
    return !n && t ? (0, a.jsx)(_.Tooltip, {
      text: eU.default.Messages.NOISE_CANCELLATION_CPU_OVERUSE,
      tooltipClassName: eG.noiseCancellationTooltip,
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
      renderPopout: () => (0, a.jsx)(ek, {}),
      children: (t, n) => {
        let {
          isShown: s
        } = n;
        return (0, a.jsx)(eW, {
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
      className: eG.voiceUsers
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
      className: eG.actionButtons,
      children: [(0, a.jsx)(eB, {
        channel: e,
        enableActivities: d,
        disabled: !f && c
      }), (0, a.jsx)(eV, {
        channel: e,
        canGoLive: t,
        enableActivities: d,
        disabled: e.isGuildStageVoice() && (f && null == r || !f && c)
      }), (0, a.jsxs)(a.Fragment, {
        children: [d ? (0, a.jsx)(eH, {
          channel: e,
          enableActivities: s
        }) : null, (0, W.default)(e) ? (0, a.jsx)(K.default, {
          className: i(eG.button, eG.buttonColor),
          innerClassName: eG.buttonContents,
          iconClassName: eG.buttonIcon,
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
        className: eG.container,
        children: [(0, a.jsxs)(eg.default, {
          className: eG.connection,
          align: eg.default.Align.CENTER,
          children: [(0, a.jsx)("div", {
            className: eG.inner,
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
    super(...e), this.canScreenshare = () => {
      let {
        channel: e,
        canGoLive: t
      } = this.props;
      return t && null != e && null != e.getGuildId()
    }, this.handleNoiseCancellationClicked = () => {
      let {
        noiseCancellationActive: e
      } = this.props;
      C.default.setNoiseCancellation(!e, {
        section: ex.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      })
    }, this.handleGoLive = () => {
      let {
        guild: e,
        channel: t
      } = this.props, n = null != t ? t.getGuildId() : null != e ? e.id : null;
      null != n && (0, er.default)(n, t.id, ex.AnalyticsLocations.VOICE_PANEL)
    }, this.handleChannelLinkClick = e => {
      var t;
      let {
        guild: n,
        channel: a
      } = this.props;
      o(null != a, "Channel is null during navigation click"), e.stopPropagation(), I.default.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : ex.ME, a.id)
    }, this.handleChannelLinkContextMenu = e => {
      let {
        channel: t
      } = this.props;
      (0, S.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("19577").then(n.bind(n, "19577"));
        return n => (0, a.jsx)(e, {
          ...n,
          channel: t
        })
      })
    }, this.handleCloseVoicePanelIntroduction = () => {
      B.hideHotspot(eb.HotspotLocations.VOICE_PANEL_INTRODUCTION)
    }, this.renderVoicePanelIntroduction = () => (0, a.jsxs)("div", {
      className: i(eG.voicePanelIntroductionWrapper, "theme-light"),
      children: [(0, a.jsx)(_.Heading, {
        className: eG.voicePanelIntroductionHeader,
        variant: "heading-md/semibold",
        children: eU.default.Messages.VOICE_PANEL_INTRODUCTION_HEADER
      }), (0, a.jsx)(_.Text, {
        className: eG.voicePanelIntroductionText,
        variant: "text-sm/normal",
        children: eU.default.Messages.VOICE_PANEL_INTRODUCTION_TEXT
      }), (0, a.jsx)(_.Button, {
        className: eG.voicePanelIntroductionButton,
        color: _.Button.Colors.BRAND,
        onClick: this.handleCloseVoicePanelIntroduction,
        children: eU.default.Messages.VOICE_PANEL_INTRODUCTION_CLOSE
      })]
    })
  }
}

function eW(e) {
  let {
    popoutProps: t,
    isShown: n,
    noiseCancellationActive: l
  } = e, {
    play: i,
    Component: r,
    events: o
  } = (0, h.useWaveformLottie)(l ? "mute" : "unmute");
  return s.useEffect(() => () => i(), [l, i]), (0, a.jsx)(eO.default, {
    ...t,
    onMouseEnter: () => {
      var e;
      null === (e = t.onMouseEnter) || void 0 === e || e.call(t), o.onMouseEnter()
    },
    onMouseLeave: () => {
      o.onMouseLeave()
    },
    tooltipClassName: eG.noiseCancellationTooltip,
    tooltipText: n ? null : eU.default.Messages.NOISE_CANCELLATION_TOOLTIP,
    icon: r
  })
}
var eK = (0, T.default)(function(e) {
  let t = (0, j.default)(),
    n = (0, d.useStateFromStores)([G.default], () => G.default.getAwaitingRemoteSessionInfo()),
    l = (0, d.useStateFromStores)([em.default], () => em.default.getCurrentUser()),
    {
      channelId: i,
      ...r
    } = (0, d.useStateFromStoresObject)([eS.default], () => null != t ? {
      channelId: t.channelId,
      rtcConnectionQuality: ex.RTCConnectionQuality.FINE,
      rtcConnectionState: ex.RTCConnectionStates.RTC_CONNECTED,
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
    h = (0, d.useStateFromStores)([ep.default], () => null != i && ep.default.hasVideo(i), [i]),
    C = (0, d.useStateFromStores)([ed.default], () => ed.default.getCurrentUserActiveStream()),
    S = (0, d.useStateFromStores)([eh.default], () => eh.default.hasLayers()),
    I = (0, d.useStateFromStores)([V.default], () => V.default.isViewingRoles(u)),
    m = (0, d.useStateFromStores)([eC.default], () => I && !eC.default.can(ex.Permissions.VIEW_CHANNEL, o), [I, o]),
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
    [O, v] = s.useState(!1);
  s.useEffect(() => {
    (I || m) && v(!1)
  }, [I, m, v]);
  let {
    analyticsLocations: M
  } = (0, D.default)(y.default.RTC_PANEL), P = (0, R.default)(null != u ? u : ex.EMPTY_STRING_SNOWFLAKE_ID, null == o ? void 0 : o.id), b = (0, L.default)(null == o ? void 0 : o.id), U = (0, x.default)();
  return (0, a.jsx)(D.AnalyticsLocationProvider, {
    value: M,
    children: (0, a.jsxs)("div", {
      className: eG.wrapper,
      children: [null != t || null != n ? (0, a.jsx)(w.default, {
        voiceState: t,
        awaitingRemoteSessionInfo: n
      }) : null, (0, a.jsx)(eY, {
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
        showVoiceStates: p,
        shouldShowVoicePanelIntroduction: E,
        isPrivateChannelWithEnabledActivities: b,
        isBroadcasting: U
      }), !O && I && null != u ? (0, a.jsxs)("div", {
        className: eG.viewAsRolesWarning,
        children: [(0, a.jsx)(_.Text, {
          variant: "text-sm/normal",
          className: eG.viewAsRolesWarningText,
          children: m ? eU.default.Messages.VIEW_AS_ROLES_HIDDEN_VC_WARNING : eU.default.Messages.VIEW_AS_ROLES_VOICE_WARNING
        }), (0, a.jsx)(_.Button, {
          className: eG.viewAsRolesWarningButton,
          size: _.Button.Sizes.MIN,
          onClick: () => {
            v(!0)
          },
          children: eU.default.Messages.DISMISS
        })]
      }) : null]
    })
  })
})