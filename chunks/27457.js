"use strict";
n.r(t), n.d(t, {
  CallTileFit: function() {
    return ef
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("442837"),
  o = n("692547"),
  u = n("742444"),
  d = n("498503"),
  c = n("247636"),
  f = n("278724"),
  h = n("481060"),
  m = n("846027"),
  p = n("410575"),
  E = n("812206"),
  C = n("835473"),
  g = n("414910"),
  S = n("415635"),
  _ = n("649739"),
  T = n("574176"),
  I = n("833858"),
  A = n("223135"),
  v = n("37091"),
  N = n("6572"),
  x = n("535400"),
  M = n("512384"),
  R = n("937995"),
  L = n("456631"),
  y = n("274459"),
  O = n("314897"),
  j = n("77498"),
  P = n("131951"),
  D = n("158776"),
  b = n("979651"),
  U = n("366695"),
  F = n("40300"),
  w = n("83097"),
  k = n("119828"),
  H = n("156338"),
  B = n("381238"),
  G = n("255439"),
  V = n("736921"),
  W = n("169278"),
  Y = n("808268"),
  z = n("374129"),
  Z = n("639351"),
  K = n("632184"),
  X = n("82965"),
  q = n("584729"),
  Q = n("849171"),
  J = n("607187"),
  $ = n("833519"),
  ee = n("462061"),
  et = n("623825"),
  en = n("839662"),
  ea = n("981631"),
  el = n("354459"),
  es = n("524484"),
  ei = n("65154"),
  er = n("689938"),
  eo = n("373448");
let eu = l.memo(e => {
  var t, n, s, o, u;
  let {
    participant: d,
    onDoubleClick: c,
    onContextMenu: f,
    onClick: I,
    onMouseDown: A,
    onKeyDown: U,
    className: w,
    style: H,
    channel: B,
    width: G,
    inPopout: V,
    onVideoResize: W,
    inCall: Y = !1,
    selected: z = !1,
    noBorder: Z = !1,
    noVideoRender: K = !1,
    focused: X = !1,
    blocked: et = !1,
    fit: eu = F.VideoStreamFit.CONTAIN,
    paused: ed = !1,
    pulseSpeakingIndicator: ef = !1
  } = e, eh = l.useContext(R.IdleStateContext), [em, ep] = l.useState(!1), eE = (0, r.useStateFromStores)([O.default], () => O.default.getId()), eC = d.type === el.ParticipantTypes.ACTIVITY ? null : null === (t = d.user) || void 0 === t ? void 0 : t.id, [eg] = (0, C.default)(d.type === el.ParticipantTypes.ACTIVITY ? [d.id] : []), eS = (0, r.useStateFromStores)([v.default], () => v.default.getEnabled()), e_ = (0, r.useStateFromStores)([P.default], () => null != eC && P.default.isLocalVideoDisabled(eC, (0, g.default)(d.type)), [eC, d.type]), eT = (0, r.useStateFromStores)([P.default], () => null != eC ? P.default.getVideoToggleState(eC, (0, g.default)(d.type)) : ea.VideoToggleState.NONE, [eC, d.type]), eI = eT === ea.VideoToggleState.AUTO_PROBING, {
    speaking: eA,
    ringing: ev,
    hasVideo: eN
  } = (0, en.default)(d, eE), ex = function(e, t, n) {
    var a, l, s, i;
    let o = (0, r.useStateFromStoresObject)([b.default], () => {
        var e, a, l;
        let s = b.default.getVoiceState(n, t.id);
        return {
          muted: null !== (e = null == s ? void 0 : s.mute) && void 0 !== e && e,
          deafened: null !== (a = null == s ? void 0 : s.deaf) && void 0 !== a && a,
          suppressed: null !== (l = null == s ? void 0 : s.suppress) && void 0 !== l && l,
          voiceChannelId: null == s ? void 0 : s.channelId
        }
      }),
      u = (0, r.useStateFromStoresObject)([P.default], () => {
        let n = (0, g.default)(t.type),
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
      serverMuted: o.muted,
      serverDeafened: o.deafened,
      suppressed: o.suppressed,
      localMuted: u.muted,
      muted: null !== (s = t.type === el.ParticipantTypes.USER && (null === (a = t.voiceState) || void 0 === a ? void 0 : a.isVoiceMuted())) && void 0 !== s && s,
      deafened: null !== (i = t.type === el.ParticipantTypes.USER && (null === (l = t.voiceState) || void 0 === l ? void 0 : l.isVoiceDeafened())) && void 0 !== i && i
    }
  }(eE, d, B.getGuildId()), eM = d.type === el.ParticipantTypes.STREAM && eC === eE, eR = (0, r.useStateFromStores)([L.default], () => null != eC ? L.default.getEffectForUserId(eC) : null), eL = (0, r.useStateFromStores)([b.default], () => b.default.getVoicePlatformForChannel(B.id, null != eC ? eC : ea.EMPTY_STRING_SNOWFLAKE_ID)), {
    enableHangStatus: ey
  } = T.HangStatusExperiment.useExperiment({
    guildId: B.guild_id,
    location: "VoiceUsers"
  }), {
    showGameIcon: eO
  } = _.default.useExperiment({
    location: "voice_users"
  }, {
    autoTrackExposure: !1
  }), ej = eO || ey, {
    hangStatusActivity: eP,
    gameActivity: eD
  } = (0, r.useStateFromStoresObject)([D.default], () => ({
    hangStatusActivity: ey && null != eC ? D.default.findActivity(eC, e => e.type === ea.ActivityTypes.HANG_STATUS) : null,
    gameActivity: ej && null != eC ? D.default.findActivity(eC, e => null != e.application_id && e.type === ea.ActivityTypes.PLAYING) : null
  }), [ey, eC, ej]), eb = (0, r.useStateFromStores)([j.default], () => (null == eD ? void 0 : eD.application_id) != null ? j.default.getDetectableGame(eD.application_id) : null), eU = (0, r.useStateFromStores)([E.default], () => null != eb && (null == eD ? void 0 : eD.application_id) != null ? E.default.getApplication(null == eD ? void 0 : eD.application_id) : void 0);
  l.useEffect(() => {
    ep(X)
  }, [X]);
  let eF = l.useCallback(() => {
      null != eC && m.default.toggleLocalMute(eC, ei.MediaEngineContextTypes.STREAM)
    }, [eC]),
    ew = l.useCallback(e => {
      null == I || I(d, e)
    }, [I, d]),
    ek = l.useCallback(e => {
      null == c || c(d, e)
    }, [c, d]),
    eH = l.useCallback(e => {
      null == f || f(d, e)
    }, [f, d]),
    eB = null,
    eG = null,
    eV = "";
  switch (d.type) {
    case el.ParticipantTypes.STREAM:
      eB = (0, a.jsx)($.default, {
        participant: d,
        selected: z,
        width: G,
        fit: eu,
        onVideoResize: W,
        paused: ed,
        inPopout: V,
        focused: X
      }), eG = (0, a.jsx)($.StreamTileIndicators, {
        participant: d,
        selected: z,
        width: G,
        focused: X,
        idle: eh
      }), eV = er.default.Messages.CALL_TILE_A11Y_LABEL_STREAM.format({
        streamerName: d.user.username
      });
      break;
    case el.ParticipantTypes.USER:
      eB = (0, a.jsx)(ee.default, {
        channel: B,
        inCall: Y,
        participant: d,
        fit: eu,
        onVideoResize: W,
        paused: ed,
        selected: z,
        width: G,
        blocked: et,
        noVideoRender: K || eI,
        pulseSpeakingIndicator: ef
      }), eV = er.default.Messages.CALL_TILE_A11Y_LABEL_USER.format({
        username: d.user.username
      });
      break;
    case el.ParticipantTypes.ACTIVITY:
      eB = (0, a.jsx)(Q.default, {
        interactible: X,
        participant: d,
        selected: z,
        channel: B,
        width: G
      }), eV = er.default.Messages.CALL_TILE_A11Y_LABEL_ACTIVITY.format({
        activityName: null == eg ? void 0 : eg.name
      });
      break;
    case el.ParticipantTypes.HIDDEN_STREAM:
      eB = (0, a.jsx)($.default, {
        participant: d,
        selected: z,
        width: G,
        fit: eu,
        onVideoResize: W,
        paused: ed,
        inPopout: V,
        focused: X
      })
  }
  let eW = l.useRef(null);
  return (0, a.jsx)(p.default, {
    section: ea.AnalyticsSections.VOICE_CHANNEL_TILE,
    children: (0, a.jsx)("div", {
      className: i()(eo.wrapper, {
        [eo.ringing]: ev
      }, w),
      children: (0, a.jsxs)(M.default, {
        shakeLocation: es.ShakeLocation.VOICE_USER,
        isShaking: eA,
        className: eo.tile,
        children: [(0, a.jsx)(J.default, {
          ref: eW,
          className: i()(eo.tile, {
            [eo.noBorder]: Z,
            [eo.noInteraction]: null == I,
            [eo.idle]: eh
          }),
          noBorder: Z,
          style: H,
          participantUserId: eC,
          children: (0, a.jsxs)(h.ClickableContainer, {
            "aria-label": eV,
            className: eo.tileChild,
            onDoubleClick: ek,
            onContextMenu: eH,
            onClick: ew,
            onMouseDown: A,
            onKeyDown: U,
            focusProps: {
              offset: 1
            },
            children: [d.type === el.ParticipantTypes.USER && null != eC && null != eR ? (0, a.jsx)(y.default, {
              voiceChannelEffect: eR,
              onComplete: () => (0, L.clearVoiceChannelEffectForUser)(eC),
              userId: eC
            }) : null, d.type === el.ParticipantTypes.USER ? (0, a.jsx)("div", {
              className: eo.voiceChannelEffectsContainer,
              children: (0, a.jsx)(S.default, {
                userId: eC,
                channelId: B.id,
                guildId: B.getGuildId(),
                containerDimensions: {
                  width: null !== (o = null == eW ? void 0 : null === (n = eW.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== o ? o : 0,
                  height: null !== (u = null == eW ? void 0 : null === (s = eW.current) || void 0 === s ? void 0 : s.clientHeight) && void 0 !== u ? u : 0
                }
              })
            }) : null, eB, Z ? null : (0, a.jsx)("div", {
              className: eo.indicators,
              children: eG
            }), z ? (0, a.jsx)("div", {
              className: eo.selectedScreen,
              children: (0, a.jsx)(k.default, {
                className: eo.selectedIcon
              })
            }) : null, d.type !== el.ParticipantTypes.ACTIVITY ? (0, a.jsx)(ec, {
              focused: X,
              width: G,
              inCall: Y,
              participantType: d.type,
              hasVideo: null != eN && eN,
              ...ex,
              idle: eh,
              platform: eL,
              title: (0, q.default)(B, d),
              blocked: et,
              localVideoDisabled: e_,
              videoToggleState: eT,
              hideAudioIcon: eM,
              onContextMenu: eH,
              onToggleMute: eF,
              participantUserId: eC,
              hangStatusActivity: eP,
              application: eU,
              speaking: eA
            }) : null, d.type === el.ParticipantTypes.USER && eS ? (0, a.jsx)(N.default, {
              userId: d.id,
              channelId: B.id
            }) : null, Y && !Z ? (0, a.jsx)("div", {
              className: i()(eo.border, {
                [eo.voiceChannelEffect]: !X && null != eR,
                [eo.speaking]: eA && !X
              })
            }) : null]
          })
        }), (0, a.jsx)(x.default, {
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
  if (t === el.ParticipantTypes.STREAM) return n === el.VoicePlatforms.XBOX ? (0, a.jsx)(Z.default, {
    className: l
  }) : (0, a.jsx)(W.default, {
    className: l
  });
  switch (n) {
    case el.VoicePlatforms.MOBILE:
      return (0, a.jsx)(V.default, {
        className: l
      });
    case el.VoicePlatforms.XBOX:
      return (0, a.jsx)(Z.default, {
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
eu.displayName = "CallTile";
let ec = l.memo(e => {
  let {
    muted: t,
    deafened: n,
    localMuted: l,
    serverMuted: s,
    serverDeafened: m,
    idle: p,
    title: E,
    width: C,
    hasVideo: S,
    inCall: _,
    localVideoDisabled: T,
    videoToggleState: v,
    focused: N,
    blocked: x,
    hideAudioIcon: M,
    participantType: R,
    participantUserId: L,
    onContextMenu: y,
    onToggleMute: O,
    platform: j,
    hangStatusActivity: D,
    application: b,
    speaking: F
  } = e, V = null, W = null, z = null, Z = null, q = (0, et.isVideoCompact)(C), Q = (0, et.isNamesCompact)(C), J = (0, r.useStateFromStores)([P.default], () => null != L && P.default.isLocalVideoAutoDisabled(L, (0, g.default)(R)), [L, R]), $ = (0, h.useRedesignIconContext)().enabled;
  if (!M) {
    if (l && R === el.ParticipantTypes.STREAM && S && !N) V = (0, a.jsx)(h.Tooltip, {
      text: er.default.Messages.UNMUTE,
      children: e => {
        let {
          onClick: t,
          ...n
        } = e;
        return (0, a.jsx)(h.Clickable, {
          ...n,
          onClick: e => {
            e.stopPropagation(), null == t || t(), O()
          },
          className: i()(eo.interactive, eo.toggleMute),
          children: (0, a.jsx)(X.default, {})
        })
      }
    });
    else if (l || R !== el.ParticipantTypes.STREAM || !S || q || N) {
      if ($) {
        let e;
        m ? e = u.HeadphonesDenyIcon : s ? e = c.MicrophoneDenyIcon : n ? e = d.HeadphonesSlashIcon : l ? e = c.MicrophoneDenyIcon : t && (e = f.MicrophoneSlashIcon), V = null != e ? (0, a.jsx)(e, {
          color: o.default.colors.WHITE
        }) : null
      } else if (n || t || l) {
        let e = n ? B.default : G.default;
        V = (0, a.jsx)(e, {
          foreground: i()({
            [eo.localMuteStrikethrough]: l && !n
          })
        })
      }
    } else V = (0, a.jsx)(h.Tooltip, {
      text: er.default.Messages.MUTE,
      children: e => {
        let {
          onClick: t,
          ...n
        } = e;
        return (0, a.jsx)(h.Clickable, {
          ...n,
          onClick: e => {
            e.stopPropagation(), null == t || t(), O()
          },
          className: i()(eo.interactive, eo.toggleMute),
          children: (0, a.jsx)(K.default, {})
        })
      }
    })
  }
  return _ && P.default.supports(ei.Features.VIDEO) || !S ? _ && S && T && !J && (W = (0, a.jsx)(H.default, {
    foreground: eo.localMuteStrikethrough
  })) : W = (0, a.jsx)(k.default, {}), R === el.ParticipantTypes.STREAM && !N && S && (z = (0, a.jsx)(h.Tooltip, {
    text: er.default.Messages.OPTIONS,
    children: e => {
      let {
        onClick: t,
        ...n
      } = e;
      return (0, a.jsx)(h.Clickable, {
        ...n,
        onClick: e => {
          e.stopPropagation(), null == t || t(), y(e)
        },
        className: i()(eo.status, eo.interactive),
        children: (0, a.jsx)(Y.default, {})
      })
    }
  })), R === el.ParticipantTypes.USER && null != D ? Z = (0, a.jsx)(h.Tooltip, {
    text: (0, I.getHangStatusText)(D),
    children: e => (0, a.jsx)("div", {
      ...e,
      className: i()(eo.hangStatusContainer, {
        [eo.hangStatusSmall]: C < 500
      }),
      children: (0, a.jsx)(A.default, {
        hangStatusActivity: D,
        className: eo.hangStatusIcon,
        animate: F
      })
    })
  }) : R === el.ParticipantTypes.USER && null != b && (Z = (0, a.jsx)(h.Tooltip, {
    text: er.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: b.name
    }),
    children: e => (0, a.jsx)("div", {
      ...e,
      className: i()(eo.hangStatusContainer, {
        [eo.hangStatusSmall]: C < 500
      }),
      children: (0, a.jsx)(U.default, {
        className: eo.hangStatusIcon,
        game: b,
        size: U.default.Sizes.SMALL
      })
    })
  })), (0, a.jsxs)("div", {
    className: eo.overlayContainer,
    children: [(0, a.jsx)("div", {
      className: i()(eo.overlayTop, {
        [eo.small]: C < 195
      }),
      children: J || v === ea.VideoToggleState.AUTO_PROBING ? p ? (0, a.jsx)("div", {
        className: eo.status,
        children: (0, a.jsx)(H.default, {})
      }) : (0, a.jsxs)("div", {
        className: i()(eo.overlayTitle, eo.videoDisabledTitle),
        children: [(0, a.jsx)("div", {
          className: eo.status,
          children: (0, a.jsx)(H.default, {})
        }), (0, a.jsx)(h.Text, {
          variant: "text-sm/normal",
          className: eo.overlayTitleText,
          children: er.default.Messages.UNSTABLE_CONNECTION
        })]
      }) : null
    }), (0, a.jsxs)("div", {
      className: i()(eo.overlayBottom, {
        [eo.small]: C < 195
      }),
      children: [Q ? (0, a.jsx)("div", {}) : (0, a.jsxs)(h.Text, {
        className: i()(eo.overlayTitle, {
          [eo.idle]: p
        }),
        color: "none",
        variant: "text-md/normal",
        children: [x ? (0, a.jsx)("div", {
          className: eo.blocked,
          children: (0, a.jsx)(w.default, {
            className: eo.blockedIcon,
            color: o.default.unsafe_rawColors.RED_400.css
          })
        }) : null, (0, a.jsx)(ed, {
          participantType: R,
          platform: j,
          className: eo.titleIcon
        }), null != E && "" !== E ? (0, a.jsx)("span", {
          className: eo.overlayTitleText,
          children: E
        }) : null]
      }), (0, a.jsxs)("div", {
        className: eo.statusContainer,
        children: [null != W && (0, a.jsx)("div", {
          className: eo.status,
          children: W
        }), null != V && (0, a.jsx)("div", {
          className: eo.status,
          children: V
        }), z, Z]
      })]
    })]
  })
});
ec.displayName = "CallTileOverlay";
let ef = F.VideoStreamFit;
t.default = eu