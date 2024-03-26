"use strict";
n.r(t), n.d(t, {
  CallTileFit: function() {
    return ef
  },
  default: function() {
    return eh
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("669491"),
  o = n("966900"),
  d = n("838048"),
  c = n("359902"),
  f = n("780624"),
  h = n("77078"),
  m = n("629109"),
  p = n("901582"),
  E = n("299285"),
  g = n("442939"),
  S = n("161306"),
  C = n("397443"),
  _ = n("774539"),
  I = n("699209"),
  T = n("808742"),
  v = n("342845"),
  x = n("170152"),
  N = n("431923"),
  A = n("719761"),
  M = n("835040"),
  R = n("908583"),
  j = n("568088"),
  L = n("560289"),
  y = n("271938"),
  O = n("546463"),
  P = n("42887"),
  D = n("824563"),
  b = n("800762"),
  U = n("953109"),
  w = n("512264"),
  F = n("328275"),
  V = n("437825"),
  H = n("142303"),
  k = n("200639"),
  B = n("97347"),
  G = n("216947"),
  W = n("267675"),
  Y = n("433487"),
  z = n("998564"),
  K = n("420145"),
  Z = n("368121"),
  X = n("570511"),
  Q = n("491519"),
  q = n("395763"),
  J = n("784981"),
  $ = n("729185"),
  ee = n("715764"),
  et = n("144565"),
  en = n("85208"),
  ea = n("49111"),
  el = n("99795"),
  es = n("39141"),
  ei = n("353927"),
  er = n("782340"),
  eu = n("532351");
let eo = l.memo(e => {
  var t, n, s, u, o;
  let {
    participant: d,
    onDoubleClick: c,
    onContextMenu: f,
    onClick: T,
    onMouseDown: v,
    onKeyDown: U,
    className: F,
    style: H,
    channel: k,
    width: B,
    inPopout: G,
    onVideoResize: W,
    inCall: Y = !1,
    selected: z = !1,
    noBorder: K = !1,
    noVideoRender: Z = !1,
    focused: X = !1,
    blocked: et = !1,
    fit: eo = w.VideoStreamFit.CONTAIN,
    paused: ed = !1,
    pulseSpeakingIndicator: ef = !1
  } = e, eh = l.useContext(R.IdleStateContext), [em, ep] = l.useState(!1), eE = (0, r.useStateFromStores)([y.default], () => y.default.getId()), eg = d.type === el.ParticipantTypes.ACTIVITY ? null : null === (t = d.user) || void 0 === t ? void 0 : t.id, [eS] = (0, g.default)(d.type === el.ParticipantTypes.ACTIVITY ? [d.id] : []), eC = (0, r.useStateFromStores)([x.default], () => x.default.getEnabled()), e_ = (0, r.useStateFromStores)([P.default], () => null != eg && P.default.isLocalVideoDisabled(eg, (0, S.default)(d.type)), [eg, d.type]), eI = (0, r.useStateFromStores)([P.default], () => null != eg ? P.default.getVideoToggleState(eg, (0, S.default)(d.type)) : ea.VideoToggleState.NONE, [eg, d.type]), eT = eI === ea.VideoToggleState.AUTO_PROBING, {
    speaking: ev,
    ringing: ex,
    hasVideo: eN
  } = (0, en.default)(d, eE), eA = function(e, t, n) {
    var a, l, s, i;
    let u = (0, r.useStateFromStoresObject)([b.default], () => {
        var e, a, l;
        let s = b.default.getVoiceState(n, t.id);
        return {
          muted: null !== (e = null == s ? void 0 : s.mute) && void 0 !== e && e,
          deafened: null !== (a = null == s ? void 0 : s.deaf) && void 0 !== a && a,
          suppressed: null !== (l = null == s ? void 0 : s.suppress) && void 0 !== l && l,
          voiceChannelId: null == s ? void 0 : s.channelId
        }
      }),
      o = (0, r.useStateFromStoresObject)([P.default], () => {
        let n = (0, S.default)(t.type),
          a = t.type !== el.ParticipantTypes.ACTIVITY ? t.user.id : t.id;
        return e === a ? {
          muted: !1,
          deafened: !1
        } : {
          muted: P.default.isLocalMute(a, n),
          localVideoDisabled: P.default.isLocalVideoDisabled(a, n),
          localVideoAutoDisabled: P.default.isLocalVideoAutoDisabled(a, n)
        }
      }, [e, t]);
    return {
      serverMuted: u.muted,
      serverDeafened: u.deafened,
      suppressed: u.suppressed,
      localMuted: o.muted,
      muted: null !== (s = t.type === el.ParticipantTypes.USER && (null === (a = t.voiceState) || void 0 === a ? void 0 : a.isVoiceMuted())) && void 0 !== s && s,
      deafened: null !== (i = t.type === el.ParticipantTypes.USER && (null === (l = t.voiceState) || void 0 === l ? void 0 : l.isVoiceDeafened())) && void 0 !== i && i
    }
  }(eE, d, k.getGuildId()), eM = d.type === el.ParticipantTypes.STREAM && eg === eE, eR = (0, r.useStateFromStores)([j.default], () => null != eg ? j.default.getEffectForUserId(eg) : null), ej = (0, r.useStateFromStores)([b.default], () => b.default.getVoicePlatformForChannel(k.id, null != eg ? eg : ea.EMPTY_STRING_SNOWFLAKE_ID)), {
    enableHangStatus: eL
  } = I.HangStatusExperiment.useExperiment({
    guildId: k.guild_id,
    location: "VoiceUsers"
  }), {
    showGameIcon: ey
  } = _.default.useExperiment({
    location: "voice_users"
  }, {
    autoTrackExposure: !1
  }), eO = ey || eL, {
    hangStatusActivity: eP,
    gameActivity: eD
  } = (0, r.useStateFromStoresObject)([D.default], () => ({
    hangStatusActivity: eL && null != eg ? D.default.findActivity(eg, e => e.type === ea.ActivityTypes.HANG_STATUS) : null,
    gameActivity: eO && null != eg ? D.default.findActivity(eg, e => null != e.application_id && e.type === ea.ActivityTypes.PLAYING) : null
  }), [eL, eg, eO]), eb = (0, r.useStateFromStores)([O.default], () => (null == eD ? void 0 : eD.application_id) != null ? O.default.getDetectableGame(eD.application_id) : null), eU = (0, r.useStateFromStores)([E.default], () => null != eb && (null == eD ? void 0 : eD.application_id) != null ? E.default.getApplication(null == eD ? void 0 : eD.application_id) : void 0);
  l.useEffect(() => {
    ep(X)
  }, [X]);
  let ew = l.useCallback(() => {
      null != eg && m.default.toggleLocalMute(eg, ei.MediaEngineContextTypes.STREAM)
    }, [eg]),
    eF = l.useCallback(e => {
      null == T || T(d, e)
    }, [T, d]),
    eV = l.useCallback(e => {
      null == c || c(d, e)
    }, [c, d]),
    eH = l.useCallback(e => {
      null == f || f(d, e)
    }, [f, d]),
    ek = null,
    eB = null,
    eG = "";
  switch (d.type) {
    case el.ParticipantTypes.STREAM:
      ek = (0, a.jsx)($.default, {
        participant: d,
        selected: z,
        width: B,
        fit: eo,
        onVideoResize: W,
        paused: ed,
        inPopout: G,
        focused: X
      }), eB = (0, a.jsx)($.StreamTileIndicators, {
        participant: d,
        selected: z,
        width: B,
        focused: X,
        idle: eh
      }), eG = er.default.Messages.CALL_TILE_A11Y_LABEL_STREAM.format({
        streamerName: d.user.username
      });
      break;
    case el.ParticipantTypes.USER:
      ek = (0, a.jsx)(ee.default, {
        channel: k,
        inCall: Y,
        participant: d,
        fit: eo,
        onVideoResize: W,
        paused: ed,
        selected: z,
        width: B,
        blocked: et,
        noVideoRender: Z || eT,
        pulseSpeakingIndicator: ef
      }), eG = er.default.Messages.CALL_TILE_A11Y_LABEL_USER.format({
        username: d.user.username
      });
      break;
    case el.ParticipantTypes.ACTIVITY:
      ek = (0, a.jsx)(q.default, {
        interactible: X,
        participant: d,
        selected: z,
        channel: k,
        width: B
      }), eG = er.default.Messages.CALL_TILE_A11Y_LABEL_ACTIVITY.format({
        activityName: null == eS ? void 0 : eS.name
      });
      break;
    case el.ParticipantTypes.HIDDEN_STREAM:
      ek = (0, a.jsx)($.default, {
        participant: d,
        selected: z,
        width: B,
        fit: eo,
        onVideoResize: W,
        paused: ed,
        inPopout: G,
        focused: X
      })
  }
  let eW = l.useRef(null);
  return (0, a.jsx)(p.default, {
    section: ea.AnalyticsSections.VOICE_CHANNEL_TILE,
    children: (0, a.jsx)("div", {
      className: i(eu.wrapper, {
        [eu.ringing]: ex
      }, F),
      children: (0, a.jsxs)(M.default, {
        shakeLocation: es.ShakeLocation.VOICE_USER,
        isShaking: ev,
        className: eu.tile,
        children: [(0, a.jsx)(J.default, {
          ref: eW,
          className: i(eu.tile, {
            [eu.noBorder]: K,
            [eu.noInteraction]: null == T,
            [eu.idle]: eh
          }),
          noBorder: K,
          style: H,
          participantUserId: eg,
          children: (0, a.jsxs)(h.ClickableContainer, {
            "aria-label": eG,
            className: eu.tileChild,
            onDoubleClick: eV,
            onContextMenu: eH,
            onClick: eF,
            onMouseDown: v,
            onKeyDown: U,
            focusProps: {
              offset: 1
            },
            children: [d.type === el.ParticipantTypes.USER && null != eg && null != eR ? (0, a.jsx)(L.default, {
              voiceChannelEffect: eR,
              onComplete: () => (0, j.clearVoiceChannelEffectForUser)(eg),
              userId: eg
            }) : null, d.type === el.ParticipantTypes.USER ? (0, a.jsx)("div", {
              className: eu.voiceChannelEffectsContainer,
              children: (0, a.jsx)(C.default, {
                userId: eg,
                channelId: k.id,
                guildId: k.getGuildId(),
                containerDimensions: {
                  width: null !== (u = null == eW ? void 0 : null === (n = eW.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== u ? u : 0,
                  height: null !== (o = null == eW ? void 0 : null === (s = eW.current) || void 0 === s ? void 0 : s.clientHeight) && void 0 !== o ? o : 0
                }
              })
            }) : null, ek, K ? null : (0, a.jsx)("div", {
              className: eu.indicators,
              children: eB
            }), z ? (0, a.jsx)("div", {
              className: eu.selectedScreen,
              children: (0, a.jsx)(V.default, {
                className: eu.selectedIcon
              })
            }) : null, d.type !== el.ParticipantTypes.ACTIVITY ? (0, a.jsx)(ec, {
              focused: X,
              width: B,
              inCall: Y,
              participantType: d.type,
              hasVideo: null != eN && eN,
              ...eA,
              idle: eh,
              platform: ej,
              title: (0, Q.default)(k, d),
              blocked: et,
              localVideoDisabled: e_,
              videoToggleState: eI,
              hideAudioIcon: eM,
              onContextMenu: eH,
              onToggleMute: ew,
              participantUserId: eg,
              hangStatusActivity: eP,
              application: eU,
              speaking: ev
            }) : null, d.type === el.ParticipantTypes.USER && eC ? (0, a.jsx)(N.default, {
              userId: d.id,
              channelId: k.id
            }) : null, Y && !K ? (0, a.jsx)("div", {
              className: i(eu.border, {
                [eu.voiceChannelEffect]: !X && null != eR,
                [eu.speaking]: ev && !X
              })
            }) : null]
          })
        }), (0, a.jsx)(A.default, {
          isFiring: em,
          callTileRef: eW.current
        })]
      })
    })
  })
});

function ed(e) {
  let {
    participantType: t,
    platform: n,
    className: l
  } = e;
  if (t === el.ParticipantTypes.STREAM) return n === el.VoicePlatforms.XBOX ? (0, a.jsx)(K.default, {
    className: l
  }) : (0, a.jsx)(W.default, {
    className: l
  });
  switch (n) {
    case el.VoicePlatforms.MOBILE:
      return (0, a.jsx)(G.default, {
        className: l
      });
    case el.VoicePlatforms.XBOX:
      return (0, a.jsx)(K.default, {
        className: l
      });
    case el.VoicePlatforms.PLAYSTATION:
      return (0, a.jsx)(z.default, {
        className: l
      });
    default:
      return null
  }
}
eo.displayName = "CallTile";
let ec = l.memo(e => {
  let {
    muted: t,
    deafened: n,
    localMuted: l,
    serverMuted: s,
    serverDeafened: m,
    idle: p,
    title: E,
    width: g,
    hasVideo: C,
    inCall: _,
    localVideoDisabled: I,
    videoToggleState: x,
    focused: N,
    blocked: A,
    hideAudioIcon: M,
    participantType: R,
    participantUserId: j,
    onContextMenu: L,
    onToggleMute: y,
    platform: O,
    hangStatusActivity: D,
    application: b,
    speaking: w
  } = e, G = null, W = null, z = null, K = null, Q = (0, et.isVideoCompact)(g), q = (0, et.isNamesCompact)(g), J = (0, r.useStateFromStores)([P.default], () => null != j && P.default.isLocalVideoAutoDisabled(j, (0, S.default)(R)), [j, R]), $ = (0, h.useRedesignIconContext)().enabled;
  if (!M) {
    if (l && R === el.ParticipantTypes.STREAM && C && !N) G = (0, a.jsx)(h.Tooltip, {
      text: er.default.Messages.UNMUTE,
      children: e => {
        let {
          onClick: t,
          ...n
        } = e;
        return (0, a.jsx)(h.Clickable, {
          ...n,
          onClick: e => {
            e.stopPropagation(), null == t || t(), y()
          },
          className: i(eu.interactive, eu.toggleMute),
          children: (0, a.jsx)(X.default, {})
        })
      }
    });
    else if (l || R !== el.ParticipantTypes.STREAM || !C || Q || N) {
      if ($) {
        let e;
        m ? e = o.HeadphonesDenyIcon : s ? e = c.MicrophoneDenyIcon : n ? e = d.HeadphonesSlashIcon : l ? e = c.MicrophoneDenyIcon : t && (e = f.MicrophoneSlashIcon), G = null != e ? (0, a.jsx)(e, {
          color: u.default.colors.WHITE
        }) : null
      } else if (n || t || l) {
        let e = n ? k.default : B.default;
        G = (0, a.jsx)(e, {
          foreground: i({
            [eu.localMuteStrikethrough]: l && !n
          })
        })
      }
    } else G = (0, a.jsx)(h.Tooltip, {
      text: er.default.Messages.MUTE,
      children: e => {
        let {
          onClick: t,
          ...n
        } = e;
        return (0, a.jsx)(h.Clickable, {
          ...n,
          onClick: e => {
            e.stopPropagation(), null == t || t(), y()
          },
          className: i(eu.interactive, eu.toggleMute),
          children: (0, a.jsx)(Z.default, {})
        })
      }
    })
  }
  return _ && P.default.supports(ei.Features.VIDEO) || !C ? _ && C && I && !J && (W = (0, a.jsx)(H.default, {
    foreground: eu.localMuteStrikethrough
  })) : W = (0, a.jsx)(V.default, {}), R === el.ParticipantTypes.STREAM && !N && C && (z = (0, a.jsx)(h.Tooltip, {
    text: er.default.Messages.OPTIONS,
    children: e => {
      let {
        onClick: t,
        ...n
      } = e;
      return (0, a.jsx)(h.Clickable, {
        ...n,
        onClick: e => {
          e.stopPropagation(), null == t || t(), L(e)
        },
        className: i(eu.status, eu.interactive),
        children: (0, a.jsx)(Y.default, {})
      })
    }
  })), R === el.ParticipantTypes.USER && null != D ? K = (0, a.jsx)(h.Tooltip, {
    text: (0, T.getHangStatusText)(D),
    children: e => (0, a.jsx)("div", {
      ...e,
      className: i(eu.hangStatusContainer, {
        [eu.hangStatusSmall]: g < 500
      }),
      children: (0, a.jsx)(v.default, {
        hangStatusActivity: D,
        className: eu.hangStatusIcon,
        animate: w
      })
    })
  }) : R === el.ParticipantTypes.USER && null != b && (K = (0, a.jsx)(h.Tooltip, {
    text: er.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: b.name
    }),
    children: e => (0, a.jsx)("div", {
      ...e,
      className: i(eu.hangStatusContainer, {
        [eu.hangStatusSmall]: g < 500
      }),
      children: (0, a.jsx)(U.default, {
        className: eu.hangStatusIcon,
        game: b,
        size: U.default.Sizes.SMALL
      })
    })
  })), (0, a.jsxs)("div", {
    className: eu.overlayContainer,
    children: [(0, a.jsx)("div", {
      className: i(eu.overlayTop, {
        [eu.small]: g < 195
      }),
      children: J || x === ea.VideoToggleState.AUTO_PROBING ? p ? (0, a.jsx)("div", {
        className: eu.status,
        children: (0, a.jsx)(H.default, {})
      }) : (0, a.jsxs)("div", {
        className: i(eu.overlayTitle, eu.videoDisabledTitle),
        children: [(0, a.jsx)("div", {
          className: eu.status,
          children: (0, a.jsx)(H.default, {})
        }), (0, a.jsx)(h.Text, {
          variant: "text-sm/normal",
          className: eu.overlayTitleText,
          children: er.default.Messages.UNSTABLE_CONNECTION
        })]
      }) : null
    }), (0, a.jsxs)("div", {
      className: i(eu.overlayBottom, {
        [eu.small]: g < 195
      }),
      children: [q ? (0, a.jsx)("div", {}) : (0, a.jsxs)(h.Text, {
        className: i(eu.overlayTitle, {
          [eu.idle]: p
        }),
        color: "none",
        variant: "text-md/normal",
        children: [A ? (0, a.jsx)("div", {
          className: eu.blocked,
          children: (0, a.jsx)(F.default, {
            className: eu.blockedIcon,
            color: u.default.unsafe_rawColors.RED_400.css
          })
        }) : null, (0, a.jsx)(ed, {
          participantType: R,
          platform: O,
          className: eu.titleIcon
        }), null != E && "" !== E ? (0, a.jsx)("span", {
          className: eu.overlayTitleText,
          children: E
        }) : null]
      }), (0, a.jsxs)("div", {
        className: eu.statusContainer,
        children: [null != W && (0, a.jsx)("div", {
          className: eu.status,
          children: W
        }), null != G && (0, a.jsx)("div", {
          className: eu.status,
          children: G
        }), z, K]
      })]
    })]
  })
});
ec.displayName = "CallTileOverlay";
let ef = w.VideoStreamFit;
var eh = eo