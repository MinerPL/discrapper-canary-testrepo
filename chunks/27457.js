"use strict";
n.r(t), n.d(t, {
  CallTileFit: function() {
    return eE
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("848246"),
  o = n("442837"),
  u = n("692547"),
  d = n("742444"),
  c = n("498503"),
  f = n("247636"),
  h = n("278724"),
  m = n("481060"),
  p = n("846027"),
  E = n("410575"),
  C = n("812206"),
  g = n("835473"),
  S = n("414910"),
  _ = n("415635"),
  T = n("649739"),
  I = n("574176"),
  A = n("833858"),
  N = n("223135"),
  v = n("37091"),
  x = n("6572"),
  M = n("535400"),
  R = n("512384"),
  y = n("386542"),
  L = n("485731"),
  O = n("614011"),
  j = n("937995"),
  P = n("456631"),
  D = n("274459"),
  b = n("314897"),
  U = n("77498"),
  F = n("131951"),
  w = n("158776"),
  k = n("979651"),
  B = n("366695"),
  H = n("40300"),
  G = n("83097"),
  V = n("119828"),
  W = n("156338"),
  Y = n("381238"),
  z = n("779863"),
  K = n("736921"),
  Z = n("169278"),
  q = n("808268"),
  X = n("374129"),
  Q = n("639351"),
  J = n("632184"),
  $ = n("82965"),
  ee = n("584729"),
  et = n("849171"),
  en = n("607187"),
  ea = n("833519"),
  el = n("462061"),
  es = n("623825"),
  ei = n("839662"),
  er = n("981631"),
  eo = n("354459"),
  eu = n("524484"),
  ed = n("65154"),
  ec = n("689938"),
  ef = n("61707");
let eh = l.memo(e => {
  var t, n, s, u, d;
  let {
    participant: c,
    onDoubleClick: f,
    onContextMenu: h,
    onClick: A,
    onMouseDown: N,
    onKeyDown: B,
    className: G,
    style: W,
    channel: Y,
    width: z,
    inPopout: K,
    onVideoResize: Z,
    inCall: q = !1,
    selected: X = !1,
    noBorder: Q = !1,
    noVideoRender: J = !1,
    focused: $ = !1,
    blocked: es = !1,
    fit: eh = H.VideoStreamFit.CONTAIN,
    paused: em = !1,
    pulseSpeakingIndicator: eE = !1
  } = e, eC = l.useContext(j.IdleStateContext), [eg, eS] = l.useState(!1), e_ = (0, o.useStateFromStores)([b.default], () => b.default.getId()), eT = c.type === eo.ParticipantTypes.ACTIVITY ? null : null === (t = c.user) || void 0 === t ? void 0 : t.id, [eI] = (0, g.default)(c.type === eo.ParticipantTypes.ACTIVITY ? [c.id] : []), eA = (0, o.useStateFromStores)([v.default], () => v.default.getEnabled()), eN = (0, o.useStateFromStores)([F.default], () => null != eT && F.default.isLocalVideoDisabled(eT, (0, S.default)(c.type)), [eT, c.type]), ev = (0, o.useStateFromStores)([F.default], () => null != eT ? F.default.getVideoToggleState(eT, (0, S.default)(c.type)) : er.VideoToggleState.NONE, [eT, c.type]), ex = ev === er.VideoToggleState.AUTO_PROBING, {
    speaking: eM,
    ringing: eR,
    hasVideo: ey
  } = (0, ei.default)(c, e_), eL = function(e, t, n) {
    var a, l, s, i;
    let r = (0, o.useStateFromStoresObject)([k.default], () => {
        var e, a, l;
        let s = k.default.getVoiceState(n, t.id);
        return {
          muted: null !== (e = null == s ? void 0 : s.mute) && void 0 !== e && e,
          deafened: null !== (a = null == s ? void 0 : s.deaf) && void 0 !== a && a,
          suppressed: null !== (l = null == s ? void 0 : s.suppress) && void 0 !== l && l,
          voiceChannelId: null == s ? void 0 : s.channelId
        }
      }),
      u = (0, o.useStateFromStoresObject)([F.default], () => {
        let n = (0, S.default)(t.type),
          a = t.type !== eo.ParticipantTypes.ACTIVITY ? t.user.id : t.id;
        return e === a ? {
          muted: !1,
          deafened: !1
        } : {
          muted: F.default.isLocalMute(a, n),
          localVideoDisabled: F.default.isLocalVideoDisabled(a, n),
          localVideoAutoDisabled: F.default.isLocalVideoAutoDisabled(a, n)
        }
      }, [e, t]);
    return {
      serverMuted: r.muted,
      serverDeafened: r.deafened,
      suppressed: r.suppressed,
      localMuted: u.muted,
      muted: null !== (s = t.type === eo.ParticipantTypes.USER && (null === (a = t.voiceState) || void 0 === a ? void 0 : a.isVoiceMuted())) && void 0 !== s && s,
      deafened: null !== (i = t.type === eo.ParticipantTypes.USER && (null === (l = t.voiceState) || void 0 === l ? void 0 : l.isVoiceDeafened())) && void 0 !== i && i
    }
  }(e_, c, Y.getGuildId()), eO = c.type === eo.ParticipantTypes.STREAM && eT === e_, {
    available: ej,
    activated: eP,
    hqStreamingState: eD
  } = (0, y.usePerksDemo)(r.EntitlementFeatureNames.STREAM_HIGH_QUALITY), eb = ej && eP && eD.hqStreamingIsEnabled && eO, eU = (0, o.useStateFromStores)([P.default], () => null != eT ? P.default.getEffectForUserId(eT) : null), eF = (0, o.useStateFromStores)([k.default], () => k.default.getVoicePlatformForChannel(Y.id, null != eT ? eT : er.EMPTY_STRING_SNOWFLAKE_ID)), {
    enableHangStatus: ew
  } = I.HangStatusExperiment.useExperiment({
    guildId: Y.guild_id,
    location: "VoiceUsers"
  }), {
    showGameIcon: ek
  } = T.default.useExperiment({
    location: "voice_users"
  }, {
    autoTrackExposure: !1
  }), eB = ek || ew, {
    hangStatusActivity: eH,
    gameActivity: eG
  } = (0, o.useStateFromStoresObject)([w.default], () => ({
    hangStatusActivity: ew && null != eT ? w.default.findActivity(eT, e => e.type === er.ActivityTypes.HANG_STATUS) : null,
    gameActivity: eB && null != eT ? w.default.findActivity(eT, e => null != e.application_id && e.type === er.ActivityTypes.PLAYING) : null
  }), [ew, eT, eB]), eV = (0, o.useStateFromStores)([U.default], () => (null == eG ? void 0 : eG.application_id) != null ? U.default.getDetectableGame(eG.application_id) : null), eW = (0, o.useStateFromStores)([C.default], () => null != eV && (null == eG ? void 0 : eG.application_id) != null ? C.default.getApplication(null == eG ? void 0 : eG.application_id) : void 0);
  l.useEffect(() => {
    eS($)
  }, [$]);
  let eY = l.useCallback(() => {
      null != eT && p.default.toggleLocalMute(eT, ed.MediaEngineContextTypes.STREAM)
    }, [eT]),
    ez = l.useCallback(() => {
      (0, L.hqStreamingFrameAnimationPlayed)(!0)
    }, []),
    eK = l.useCallback(e => {
      null == A || A(c, e)
    }, [A, c]),
    eZ = l.useCallback(e => {
      null == f || f(c, e)
    }, [f, c]),
    eq = l.useCallback(e => {
      null == h || h(c, e)
    }, [h, c]),
    eX = null,
    eQ = null,
    eJ = "";
  switch (c.type) {
    case eo.ParticipantTypes.STREAM:
      eX = (0, a.jsx)(ea.default, {
        participant: c,
        selected: X,
        width: z,
        fit: eh,
        onVideoResize: Z,
        paused: em,
        inPopout: K,
        focused: $
      }), eQ = (0, a.jsx)(ea.StreamTileIndicators, {
        participant: c,
        selected: X,
        width: z,
        focused: $,
        idle: eb ? !eb : eC,
        premiumIndicator: eb
      }), eJ = ec.default.Messages.CALL_TILE_A11Y_LABEL_STREAM.format({
        streamerName: c.user.username
      });
      break;
    case eo.ParticipantTypes.USER:
      eX = (0, a.jsx)(el.default, {
        channel: Y,
        inCall: q,
        participant: c,
        fit: eh,
        onVideoResize: Z,
        paused: em,
        selected: X,
        width: z,
        blocked: es,
        noVideoRender: J || ex,
        pulseSpeakingIndicator: eE
      }), eJ = ec.default.Messages.CALL_TILE_A11Y_LABEL_USER.format({
        username: c.user.username
      });
      break;
    case eo.ParticipantTypes.ACTIVITY:
      eX = (0, a.jsx)(et.default, {
        interactible: $,
        participant: c,
        selected: X,
        channel: Y,
        width: z
      }), eJ = ec.default.Messages.CALL_TILE_A11Y_LABEL_ACTIVITY.format({
        activityName: null == eI ? void 0 : eI.name
      });
      break;
    case eo.ParticipantTypes.HIDDEN_STREAM:
      eX = (0, a.jsx)(ea.default, {
        participant: c,
        selected: X,
        width: z,
        fit: eh,
        onVideoResize: Z,
        paused: em,
        inPopout: K,
        focused: $
      })
  }
  let e$ = l.useRef(null);
  return (0, a.jsx)(E.default, {
    section: er.AnalyticsSections.VOICE_CHANNEL_TILE,
    children: (0, a.jsx)("div", {
      className: i()(ef.wrapper, {
        [ef.ringing]: eR
      }, G),
      children: (0, a.jsxs)(R.default, {
        shakeLocation: eu.ShakeLocation.VOICE_USER,
        isShaking: eM,
        className: ef.tile,
        children: [(0, a.jsx)(en.default, {
          ref: e$,
          className: i()(ef.tile, {
            [ef.noBorder]: Q,
            [ef.noInteraction]: null == A,
            [ef.idle]: eC
          }),
          noBorder: Q,
          style: W,
          participantUserId: eT,
          children: (0, a.jsxs)(m.ClickableContainer, {
            "aria-label": eJ,
            className: ef.tileChild,
            onDoubleClick: eZ,
            onContextMenu: eq,
            onClick: eK,
            onMouseDown: N,
            onKeyDown: B,
            focusProps: {
              offset: 1
            },
            children: [c.type === eo.ParticipantTypes.USER && null != eT && null != eU ? (0, a.jsx)(D.default, {
              voiceChannelEffect: eU,
              onComplete: () => (0, P.clearVoiceChannelEffectForUser)(eT),
              userId: eT
            }) : null, c.type === eo.ParticipantTypes.USER ? (0, a.jsx)("div", {
              className: ef.voiceChannelEffectsContainer,
              children: (0, a.jsx)(_.default, {
                userId: eT,
                channelId: Y.id,
                guildId: Y.getGuildId(),
                containerDimensions: {
                  width: null !== (u = null == e$ ? void 0 : null === (n = e$.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== u ? u : 0,
                  height: null !== (d = null == e$ ? void 0 : null === (s = e$.current) || void 0 === s ? void 0 : s.clientHeight) && void 0 !== d ? d : 0
                }
              })
            }) : null, eX, eb ? (0, a.jsx)(O.PremiumStreamingEffectOverlay, {
              onPlayed: ez,
              played: eD.hqStreamingFrameAnimationPlayed
            }) : null, Q ? null : (0, a.jsx)("div", {
              className: ef.indicators,
              children: eQ
            }), X ? (0, a.jsx)("div", {
              className: ef.selectedScreen,
              children: (0, a.jsx)(V.default, {
                className: ef.selectedIcon
              })
            }) : null, c.type !== eo.ParticipantTypes.ACTIVITY ? (0, a.jsx)(ep, {
              focused: $,
              width: z,
              inCall: q,
              participantType: c.type,
              hasVideo: null != ey && ey,
              ...eL,
              idle: eC,
              platform: eF,
              title: (0, ee.default)(Y, c),
              blocked: es,
              localVideoDisabled: eN,
              videoToggleState: ev,
              hideAudioIcon: eO,
              onContextMenu: eq,
              onToggleMute: eY,
              participantUserId: eT,
              hangStatusActivity: eH,
              application: eW,
              speaking: eM
            }) : null, c.type === eo.ParticipantTypes.USER && eA ? (0, a.jsx)(x.default, {
              userId: c.id,
              channelId: Y.id
            }) : null, q && !Q ? (0, a.jsx)("div", {
              className: i()(ef.border, {
                [ef.voiceChannelEffect]: !$ && null != eU,
                [ef.speaking]: eM && !$
              })
            }) : null]
          })
        }), (0, a.jsx)(M.default, {
          isFiring: eg,
          callTileRef: e$.current
        })]
      })
    })
  })
});

function em(e) {
  let {
    participantType: t,
    platform: n,
    className: l
  } = e;
  if (t === eo.ParticipantTypes.STREAM) return n === eo.VoicePlatforms.XBOX ? (0, a.jsx)(Q.default, {
    className: l
  }) : (0, a.jsx)(Z.default, {
    className: l
  });
  switch (n) {
    case eo.VoicePlatforms.MOBILE:
      return (0, a.jsx)(K.default, {
        className: l
      });
    case eo.VoicePlatforms.XBOX:
      return (0, a.jsx)(Q.default, {
        className: l
      });
    case eo.VoicePlatforms.PLAYSTATION:
      return (0, a.jsx)(X.default, {
        className: l
      });
    default:
      return null
  }
}
eh.displayName = "CallTile";
let ep = l.memo(e => {
  let {
    muted: t,
    deafened: n,
    localMuted: l,
    serverMuted: s,
    serverDeafened: r,
    idle: p,
    title: E,
    width: C,
    hasVideo: g,
    inCall: _,
    localVideoDisabled: T,
    videoToggleState: I,
    focused: v,
    blocked: x,
    hideAudioIcon: M,
    participantType: R,
    participantUserId: y,
    onContextMenu: L,
    onToggleMute: O,
    platform: j,
    hangStatusActivity: P,
    application: D,
    speaking: b
  } = e, U = null, w = null, k = null, H = null, K = (0, es.isVideoCompact)(C), Z = (0, es.isNamesCompact)(C), X = (0, o.useStateFromStores)([F.default], () => null != y && F.default.isLocalVideoAutoDisabled(y, (0, S.default)(R)), [y, R]), Q = (0, m.useRedesignIconContext)().enabled;
  if (!M) {
    if (l && R === eo.ParticipantTypes.STREAM && g && !v) U = (0, a.jsx)(m.Tooltip, {
      text: ec.default.Messages.UNMUTE,
      children: e => {
        let {
          onClick: t,
          ...n
        } = e;
        return (0, a.jsx)(m.Clickable, {
          ...n,
          onClick: e => {
            e.stopPropagation(), null == t || t(), O()
          },
          className: i()(ef.interactive, ef.toggleMute),
          children: (0, a.jsx)($.default, {})
        })
      }
    });
    else if (l || R !== eo.ParticipantTypes.STREAM || !g || K || v) {
      if (Q) {
        let e;
        r ? e = d.HeadphonesDenyIcon : s ? e = f.MicrophoneDenyIcon : n ? e = c.HeadphonesSlashIcon : l ? e = f.MicrophoneDenyIcon : t && (e = h.MicrophoneSlashIcon), U = null != e ? (0, a.jsx)(e, {
          color: u.default.colors.WHITE
        }) : null
      } else if (n || t || l) {
        let e = n ? Y.default : z.default;
        U = (0, a.jsx)(e, {
          foreground: i()({
            [ef.localMuteStrikethrough]: l && !n
          })
        })
      }
    } else U = (0, a.jsx)(m.Tooltip, {
      text: ec.default.Messages.MUTE,
      children: e => {
        let {
          onClick: t,
          ...n
        } = e;
        return (0, a.jsx)(m.Clickable, {
          ...n,
          onClick: e => {
            e.stopPropagation(), null == t || t(), O()
          },
          className: i()(ef.interactive, ef.toggleMute),
          children: (0, a.jsx)(J.default, {})
        })
      }
    })
  }
  return _ && F.default.supports(ed.Features.VIDEO) || !g ? _ && g && T && !X && (w = (0, a.jsx)(W.default, {
    foreground: ef.localMuteStrikethrough
  })) : w = (0, a.jsx)(V.default, {}), R === eo.ParticipantTypes.STREAM && !v && g && (k = (0, a.jsx)(m.Tooltip, {
    text: ec.default.Messages.OPTIONS,
    children: e => {
      let {
        onClick: t,
        ...n
      } = e;
      return (0, a.jsx)(m.Clickable, {
        ...n,
        onClick: e => {
          e.stopPropagation(), null == t || t(), L(e)
        },
        className: i()(ef.status, ef.interactive),
        children: (0, a.jsx)(q.default, {})
      })
    }
  })), R === eo.ParticipantTypes.USER && null != P ? H = (0, a.jsx)(m.Tooltip, {
    text: (0, A.getHangStatusText)(P),
    children: e => (0, a.jsx)("div", {
      ...e,
      className: i()(ef.hangStatusContainer, {
        [ef.hangStatusSmall]: C < 500
      }),
      children: (0, a.jsx)(N.default, {
        hangStatusActivity: P,
        className: ef.hangStatusIcon,
        animate: b
      })
    })
  }) : R === eo.ParticipantTypes.USER && null != D && (H = (0, a.jsx)(m.Tooltip, {
    text: ec.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: D.name
    }),
    children: e => (0, a.jsx)("div", {
      ...e,
      className: i()(ef.hangStatusContainer, {
        [ef.hangStatusSmall]: C < 500
      }),
      children: (0, a.jsx)(B.default, {
        className: ef.hangStatusIcon,
        game: D,
        size: B.default.Sizes.SMALL
      })
    })
  })), (0, a.jsxs)("div", {
    className: ef.overlayContainer,
    children: [(0, a.jsx)("div", {
      className: i()(ef.overlayTop, {
        [ef.small]: C < 195
      }),
      children: X || I === er.VideoToggleState.AUTO_PROBING ? p ? (0, a.jsx)("div", {
        className: ef.status,
        children: (0, a.jsx)(W.default, {})
      }) : (0, a.jsxs)("div", {
        className: i()(ef.overlayTitle, ef.videoDisabledTitle),
        children: [(0, a.jsx)("div", {
          className: ef.status,
          children: (0, a.jsx)(W.default, {})
        }), (0, a.jsx)(m.Text, {
          variant: "text-sm/normal",
          className: ef.overlayTitleText,
          children: ec.default.Messages.UNSTABLE_CONNECTION
        })]
      }) : null
    }), (0, a.jsxs)("div", {
      className: i()(ef.overlayBottom, {
        [ef.small]: C < 195
      }),
      children: [Z ? (0, a.jsx)("div", {}) : (0, a.jsxs)(m.Text, {
        className: i()(ef.overlayTitle, {
          [ef.idle]: p
        }),
        color: "none",
        variant: "text-md/normal",
        children: [x ? (0, a.jsx)("div", {
          className: ef.blocked,
          children: (0, a.jsx)(G.default, {
            className: ef.blockedIcon,
            color: u.default.unsafe_rawColors.RED_400.css
          })
        }) : null, (0, a.jsx)(em, {
          participantType: R,
          platform: j,
          className: ef.titleIcon
        }), null != E && "" !== E ? (0, a.jsx)("span", {
          className: ef.overlayTitleText,
          children: E
        }) : null]
      }), (0, a.jsxs)("div", {
        className: ef.statusContainer,
        children: [null != w && (0, a.jsx)("div", {
          className: ef.status,
          children: w
        }), null != U && (0, a.jsx)("div", {
          className: ef.status,
          children: U
        }), k, H]
      })]
    })]
  })
});
ep.displayName = "CallTileOverlay";
let eE = H.VideoStreamFit;
t.default = eh