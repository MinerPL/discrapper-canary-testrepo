n.d(t, {
  BP: function() {
return er;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(848246),
  o = n(442837),
  c = n(692547),
  u = n(481060),
  d = n(846027),
  h = n(410575),
  p = n(812206),
  m = n(835473),
  _ = n(414910),
  f = n(415635),
  E = n(925329),
  g = n(649739),
  C = n(574176),
  I = n(833858),
  x = n(223135),
  T = n(37091),
  N = n(6572),
  v = n(352978),
  S = n(535400),
  Z = n(512384),
  A = n(6242),
  M = n(757692),
  b = n(746599),
  R = n(485731),
  j = n(614011),
  L = n(210975),
  P = n(937995),
  O = n(456631),
  y = n(274459),
  D = n(314897),
  k = n(77498),
  U = n(131951),
  w = n(158776),
  B = n(594174),
  H = n(979651),
  G = n(374129),
  V = n(639351),
  F = n(74538),
  W = n(584729),
  z = n(849171),
  Y = n(607187),
  K = n(833519),
  q = n(462061),
  X = n(623825),
  Q = n(839662),
  J = n(981631),
  $ = n(354459),
  ee = n(524484),
  et = n(65154),
  en = n(689938),
  ei = n(26864);
let ea = a.memo(e => {
  var t, n, s, c, E;
  let {
participant: I,
onDoubleClick: x,
onContextMenu: G,
onClick: V,
onMouseDown: X,
onKeyDown: ea,
className: es,
style: er,
channel: eo,
width: ec,
inPopout: eu,
onVideoResize: ed,
inCall: eh = !1,
selected: ep = !1,
noBorder: em = !1,
noVideoRender: e_ = !1,
focused: ef = !1,
blocked: eE = !1,
fit: eg = v.L.CONTAIN,
paused: eC = !1,
pulseSpeakingIndicator: eI = !1
  } = e, ex = a.useContext(P.h9), [eT, eN] = a.useState(!1), ev = (0, o.e7)([D.default], () => D.default.getId()), eS = (0, o.e7)([B.default], () => B.default.getCurrentUser()), eZ = I.type === $.fO.ACTIVITY ? null : null === (t = I.user) || void 0 === t ? void 0 : t.id, [eA] = (0, m.Z)(I.type === $.fO.ACTIVITY ? [I.id] : []), eM = (0, o.e7)([T.Z], () => T.Z.getEnabled()), eb = (0, o.e7)([U.Z], () => null != eZ && U.Z.isLocalVideoDisabled(eZ, (0, _.Z)(I.type)), [
eZ,
I.type
  ]), eR = (0, o.e7)([U.Z], () => null != eZ ? U.Z.getVideoToggleState(eZ, (0, _.Z)(I.type)) : J.ZUi.NONE, [
eZ,
I.type
  ]), ej = eR === J.ZUi.AUTO_PROBING, {
speaking: eL,
ringing: eP,
hasVideo: eO
  } = (0, Q.Z)(I, ev), ey = function(e, t, n) {
var i, a, s, l;
let r = (0, o.cj)([H.Z], () => {
    var e, i, a;
    let s = H.Z.getVoiceState(n, t.id);
    return {
      muted: null !== (e = null == s ? void 0 : s.mute) && void 0 !== e && e,
      deafened: null !== (i = null == s ? void 0 : s.deaf) && void 0 !== i && i,
      suppressed: null !== (a = null == s ? void 0 : s.suppress) && void 0 !== a && a,
      voiceChannelId: null == s ? void 0 : s.channelId
    };
  }),
  c = (0, o.cj)([U.Z], () => {
    let n = (0, _.Z)(t.type),
      i = t.type !== $.fO.ACTIVITY ? t.user.id : t.id;
    return e === i ? {
      muted: !1,
      deafened: !1
    } : {
      muted: U.Z.isLocalMute(i, n),
      localVideoDisabled: U.Z.isLocalVideoDisabled(i, n),
      localVideoAutoDisabled: U.Z.isLocalVideoAutoDisabled(i, n)
    };
  }, [
    e,
    t
  ]);
return {
  serverMuted: r.muted,
  serverDeafened: r.deafened,
  suppressed: r.suppressed,
  localMuted: c.muted,
  muted: null !== (s = t.type === $.fO.USER && (null === (i = t.voiceState) || void 0 === i ? void 0 : i.isVoiceMuted())) && void 0 !== s && s,
  deafened: null !== (l = t.type === $.fO.USER && (null === (a = t.voiceState) || void 0 === a ? void 0 : a.isVoiceDeafened())) && void 0 !== l && l
};
  }(ev, I, eo.getGuildId()), eD = I.type === $.fO.STREAM && eZ === ev, ek = (0, F.So)(r.q.STREAM_HIGH_QUALITY), eU = (0, o.e7)([R.Z], () => R.Z.getState()), ew = ek && eD, eB = (0, M.o)(I, eS), eH = (0, A.lL)('CallTile', !0, eS, eB), eG = eH.persistentQualityIndicator && eH.enabled, eV = (0, o.e7)([O.Z], () => null != eZ ? O.Z.getEffectForUserId(eZ) : null), eF = (0, o.e7)([H.Z], () => H.Z.getVoicePlatformForChannel(eo.id, null != eZ ? eZ : J.lds)), {
enableHangStatus: eW
  } = C.n.useExperiment({
guildId: eo.guild_id,
location: 'VoiceUsers'
  }), {
showGameIcon: ez
  } = g.ZP.useExperiment({
location: 'voice_users'
  }, {
autoTrackExposure: !1
  }), eY = ez || eW, {
hangStatusActivity: eK,
gameActivity: eq
  } = (0, o.cj)([w.Z], () => ({
hangStatusActivity: eW && null != eZ ? w.Z.findActivity(eZ, e => e.type === J.IIU.HANG_STATUS) : null,
gameActivity: eY && null != eZ ? w.Z.findActivity(eZ, e => null != e.application_id && e.type === J.IIU.PLAYING) : null
  }), [
eW,
eZ,
eY
  ]), eX = (0, o.e7)([k.Z], () => (null == eq ? void 0 : eq.application_id) != null ? k.Z.getDetectableGame(eq.application_id) : null), eQ = (0, o.e7)([p.Z], () => null != eX && (null == eq ? void 0 : eq.application_id) != null ? p.Z.getApplication(null == eq ? void 0 : eq.application_id) : void 0), eJ = (0, L.wV)({
userId: eZ,
channelId: eo.id,
location: 'CallTile'
  });
  a.useEffect(() => {
eN(ef);
  }, [ef]);
  let e$ = a.useCallback(() => {
  null != eZ && d.Z.toggleLocalMute(eZ, et.Yn.STREAM);
}, [eZ]),
e0 = a.useCallback(() => {
  (0, b.hP)(!0);
}, []),
e1 = a.useCallback(e => {
  null == V || V(I, e);
}, [
  V,
  I
]),
e2 = a.useCallback(e => {
  null == x || x(I, e);
}, [
  x,
  I
]),
e7 = a.useCallback(e => {
  null == G || G(I, e);
}, [
  G,
  I
]),
e4 = ex;
  (ew || eG) && (e4 = !1);
  let e3 = null,
e5 = null,
e6 = '';
  switch (I.type) {
case $.fO.STREAM:
  e3 = (0, i.jsx)(K.Z, {
    participant: I,
    selected: ep,
    width: ec,
    fit: eg,
    onVideoResize: ed,
    paused: eC,
    inPopout: eu,
    focused: ef
  }), e5 = (0, i.jsx)(K._, {
    participant: I,
    selected: ep,
    width: ec,
    focused: ef,
    idle: e4,
    premiumIndicator: ew || eH.enabled
  }), e6 = en.Z.Messages.CALL_TILE_A11Y_LABEL_STREAM.format({
    streamerName: I.user.username
  });
  break;
case $.fO.USER:
  e3 = (0, i.jsx)(q.Z, {
    channel: eo,
    inCall: eh,
    participant: I,
    fit: eg,
    onVideoResize: ed,
    paused: eC,
    selected: ep,
    width: ec,
    blocked: eE,
    noVideoRender: e_ || ej,
    pulseSpeakingIndicator: eI
  }), e5 = (0, i.jsx)(q.T, {
    userId: I.user.id,
    channelId: eo.id
  }), e6 = en.Z.Messages.CALL_TILE_A11Y_LABEL_USER.format({
    username: I.user.username
  });
  break;
case $.fO.ACTIVITY:
  e3 = (0, i.jsx)(z.ZP, {
    interactible: ef,
    participant: I,
    selected: ep,
    channel: eo,
    width: ec
  }), e6 = en.Z.Messages.CALL_TILE_A11Y_LABEL_ACTIVITY.format({
    activityName: null == eA ? void 0 : eA.name
  });
  break;
case $.fO.HIDDEN_STREAM:
  e3 = (0, i.jsx)(K.Z, {
    participant: I,
    selected: ep,
    width: ec,
    fit: eg,
    onVideoResize: ed,
    paused: eC,
    inPopout: eu,
    focused: ef
  });
  }
  let e9 = a.useRef(null),
e8 = I.type === $.fO.STREAM ? u.ScreenIcon : u.VideoIcon;
  return (0, i.jsx)(h.Z, {
section: J.jXE.VOICE_CHANNEL_TILE,
children: (0, i.jsx)('div', {
  className: l()(ei.wrapper, {
    [ei.ringing]: eP
  }, es),
  children: (0, i.jsxs)(Z.Z, {
    shakeLocation: ee.oZ.VOICE_USER,
    isShaking: eL,
    className: ei.tile,
    children: [
      (0, i.jsx)(Y.Z, {
        ref: e9,
        className: l()(ei.tile, {
          [ei.noBorder]: em,
          [ei.noInteraction]: null == V,
          [ei.idle]: ex
        }),
        noBorder: em,
        style: er,
        participantUserId: eZ,
        children: (0, i.jsxs)(u.ClickableContainer, {
          'aria-label': e6,
          className: ei.tileChild,
          onDoubleClick: e2,
          onContextMenu: e7,
          onClick: e1,
          onMouseDown: X,
          onKeyDown: ea,
          focusProps: {
            offset: 1
          },
          children: [
            I.type === $.fO.USER && null != eZ && null != eV ? (0, i.jsx)(y.Z, {
              voiceChannelEffect: eV,
              onComplete: () => (0, O.H)(eZ),
              userId: eZ
            }) : null,
            I.type === $.fO.USER ? (0, i.jsx)('div', {
              className: ei.voiceChannelEffectsContainer,
              children: (0, i.jsx)(f.Z, {
                userId: eZ,
                channelId: eo.id,
                guildId: eo.getGuildId(),
                containerDimensions: {
                  width: null !== (c = null == e9 ? void 0 : null === (n = e9.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== c ? c : 0,
                  height: null !== (E = null == e9 ? void 0 : null === (s = e9.current) || void 0 === s ? void 0 : s.clientHeight) && void 0 !== E ? E : 0
                }
              })
            }) : null,
            e3,
            ew ? (0, i.jsx)(j.W, {
              onPlayed: e0,
              played: eU.hqStreamingFrameAnimationPlayed
            }) : null,
            em ? null : (0, i.jsx)('div', {
              className: ei.indicators,
              children: e5
            }),
            ep ? (0, i.jsx)('div', {
              className: ei.selectedScreen,
              children: (0, i.jsx)(e8, {
                size: 'md',
                color: 'currentColor',
                className: ei.selectedIcon
              })
            }) : null,
            I.type !== $.fO.ACTIVITY ? (0, i.jsx)(el, {
              focused: ef,
              width: ec,
              inCall: eh,
              participantType: I.type,
              hasVideo: null != eO && eO,
              ...ey,
              idle: ex,
              platform: eF,
              title: (0, W.Z)(eo, I),
              blocked: eE,
              localVideoDisabled: eb,
              videoToggleState: eR,
              hideAudioIcon: eD,
              onContextMenu: e7,
              onToggleMute: e$,
              participantUserId: eZ,
              hangStatusActivity: eK,
              application: eQ,
              speaking: eL,
              secureFramesVerified: eJ
            }) : null,
            I.type === $.fO.USER && eM ? (0, i.jsx)(N.Z, {
              userId: I.id,
              channelId: eo.id
            }) : null,
            eh && !em ? (0, i.jsx)('div', {
              className: l()(ei.border, {
                [ei.voiceChannelEffect]: !ef && null != eV,
                [ei.speaking]: eL && !ef
              })
            }) : null
          ]
        })
      }),
      (0, i.jsx)(S.Z, {
        isFiring: eT,
        callTileRef: e9.current
      })
    ]
  })
})
  });
});

function es(e) {
  let {
participantType: t,
platform: n,
className: a
  } = e;
  if (t === $.fO.STREAM)
return n === $.wR.XBOX ? (0, i.jsx)(V.Z, {
  className: a
}) : (0, i.jsx)(u.ScreenIcon, {
  size: 'md',
  color: 'currentColor',
  className: a
});
  switch (n) {
case $.wR.MOBILE:
  return (0, i.jsx)(u.MobilePhoneIcon, {
    size: 'xs',
    color: 'currentColor',
    className: a
  });
case $.wR.XBOX:
  return (0, i.jsx)(V.Z, {
    className: a
  });
case $.wR.PLAYSTATION:
  return (0, i.jsx)(G.Z, {
    className: a
  });
default:
  return null;
  }
}
ea.displayName = 'CallTile';
let el = a.memo(e => {
  let {
muted: t,
deafened: n,
localMuted: a,
serverMuted: s,
serverDeafened: r,
idle: d,
title: h,
width: p,
hasVideo: m,
inCall: f,
localVideoDisabled: g,
videoToggleState: C,
focused: T,
blocked: N,
hideAudioIcon: v,
participantType: S,
participantUserId: Z,
onContextMenu: A,
onToggleMute: M,
platform: b,
hangStatusActivity: R,
application: j,
speaking: L,
secureFramesVerified: P
  } = e, O = null, y = null, D = null, k = null, w = (0, X.K)(p), B = (0, X.N)(p), H = (0, o.e7)([U.Z], () => null != Z && U.Z.isLocalVideoAutoDisabled(Z, (0, _.Z)(S)), [
Z,
S
  ]), G = (0, u.useRedesignIconContext)().enabled;
  if (!v) {
if (a && S === $.fO.STREAM && m && !T)
  O = (0, i.jsx)(u.Tooltip, {
    text: en.Z.Messages.UNMUTE,
    children: e => {
      let {
        onClick: t,
        ...n
      } = e;
      return (0, i.jsx)(u.Clickable, {
        ...n,
        onClick: e => {
          e.stopPropagation(), null == t || t(), M();
        },
        className: l()(ei.interactive, ei.toggleMute),
        children: (0, i.jsx)(u.VoiceXIcon, {
          size: 'md',
          color: 'currentColor'
        })
      });
    }
  });
else if (a || S !== $.fO.STREAM || !m || w || T) {
  if (G) {
    let e;
    r ? e = u.HeadphonesDenyIcon : s ? e = u.MicrophoneDenyIcon : n ? e = u.HeadphonesSlashIcon : a ? e = u.MicrophoneDenyIcon : t && (e = u.MicrophoneSlashIcon), O = null != e ? (0, i.jsx)(e, {
      color: c.Z.colors.WHITE
    }) : null;
  } else if (n || t || a) {
    let e = n ? u.HeadphonesSlashIcon : u.MicrophoneSlashIcon;
    O = (0, i.jsx)(e, {
      color: 'currentColor'
    });
  }
} else
  O = (0, i.jsx)(u.Tooltip, {
    text: en.Z.Messages.MUTE,
    children: e => {
      let {
        onClick: t,
        ...n
      } = e;
      return (0, i.jsx)(u.Clickable, {
        ...n,
        onClick: e => {
          e.stopPropagation(), null == t || t(), M();
        },
        className: l()(ei.interactive, ei.toggleMute),
        children: (0, i.jsx)(u.VoiceNormalIcon, {
          size: 'md',
          color: 'currentColor'
        })
      });
    }
  });
  }
  return f && U.Z.supports(et.AN.VIDEO) || !m ? f && m && g && !H && (y = (0, i.jsx)(u.VideoSlashIcon, {
size: 'md',
color: 'currentColor',
colorClass: ei.localMuteStrikethrough
  })) : y = (0, i.jsx)(u.VideoIcon, {
size: 'md',
color: 'currentColor'
  }), S === $.fO.STREAM && !T && m && (D = (0, i.jsx)(u.Tooltip, {
text: en.Z.Messages.OPTIONS,
children: e => {
  let {
    onClick: t,
    ...n
  } = e;
  return (0, i.jsx)(u.Clickable, {
    ...n,
    onClick: e => {
      e.stopPropagation(), null == t || t(), A(e);
    },
    className: l()(ei.status, ei.interactive),
    children: (0, i.jsx)(u.MoreHorizontalIcon, {
      size: 'md',
      color: 'currentColor'
    })
  });
}
  })), S === $.fO.USER && null != R ? k = (0, i.jsx)(u.Tooltip, {
text: (0, I.O8)(R),
children: e => (0, i.jsx)('div', {
  ...e,
  className: l()(ei.hangStatusContainer, {
    [ei.hangStatusSmall]: p < 500
  }),
  children: (0, i.jsx)(x.Z, {
    hangStatusActivity: R,
    className: ei.hangStatusIcon,
    animate: L
  })
})
  }) : S === $.fO.USER && null != j && (k = (0, i.jsx)(u.Tooltip, {
text: en.Z.Messages.UNFORMATTED_PLAYING_GAME.format({
  game: j.name
}),
children: e => (0, i.jsx)('div', {
  ...e,
  className: l()(ei.hangStatusContainer, {
    [ei.hangStatusSmall]: p < 500
  }),
  children: (0, i.jsx)(E.Z, {
    className: ei.hangStatusIcon,
    game: j,
    size: E.Z.Sizes.SMALL
  })
})
  })), (0, i.jsxs)('div', {
className: ei.overlayContainer,
children: [
  (0, i.jsx)('div', {
    className: l()(ei.overlayTop, {
      [ei.small]: p < 195
    }),
    children: H || C === J.ZUi.AUTO_PROBING ? d ? (0, i.jsx)('div', {
      className: ei.status,
      children: (0, i.jsx)(u.VideoSlashIcon, {
        size: 'md',
        color: 'currentColor'
      })
    }) : (0, i.jsxs)('div', {
      className: l()(ei.overlayTitle, ei.videoDisabledTitle),
      children: [
        (0, i.jsx)('div', {
          className: ei.status,
          children: (0, i.jsx)(u.VideoSlashIcon, {
            size: 'md',
            color: 'currentColor'
          })
        }),
        (0, i.jsx)(u.Text, {
          variant: 'text-sm/normal',
          className: ei.overlayTitleText,
          children: en.Z.Messages.UNSTABLE_CONNECTION
        })
      ]
    }) : null
  }),
  (0, i.jsxs)('div', {
    className: l()(ei.overlayBottom, {
      [ei.small]: p < 195
    }),
    children: [
      B ? (0, i.jsx)('div', {}) : (0, i.jsxs)(u.Text, {
        className: l()(ei.overlayTitle, {
          [ei.idle]: d
        }),
        color: 'none',
        variant: 'text-md/normal',
        children: [
          N ? (0, i.jsx)('div', {
            className: ei.blocked,
            children: (0, i.jsx)(u.DenyIcon, {
              size: 'lg',
              className: ei.blockedIcon,
              color: c.Z.unsafe_rawColors.RED_400.css
            })
          }) : null,
          (0, i.jsx)(es, {
            participantType: S,
            platform: b,
            className: ei.titleIcon
          }),
          null != h && '' !== h ? (0, i.jsx)('span', {
            className: ei.overlayTitleText,
            children: h
          }) : null,
          P && (0, i.jsx)(u.ShieldLockIcon, {
            className: ei.secureFramesIcon,
            size: 'xxs',
            color: c.Z.colors.HEADER_PRIMARY,
            'aria-label': en.Z.Messages.E2EE_USER_VERIFIED_A11Y
          })
        ]
      }),
      (0, i.jsxs)('div', {
        className: ei.statusContainer,
        children: [
          null != y && (0, i.jsx)('div', {
            className: ei.status,
            children: y
          }),
          null != O && (0, i.jsx)('div', {
            className: ei.status,
            children: O
          }),
          D,
          k
        ]
      })
    ]
  })
]
  });
});
el.displayName = 'CallTileOverlay';
let er = v.L;
t.ZP = ea;