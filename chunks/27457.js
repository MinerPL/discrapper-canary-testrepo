n.d(t, {
  BP: function() {
return el;
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
  v = n(535400),
  S = n(512384),
  Z = n(6242),
  A = n(757692),
  M = n(485731),
  b = n(614011),
  R = n(210975),
  j = n(937995),
  L = n(456631),
  P = n(274459),
  O = n(314897),
  y = n(77498),
  D = n(131951),
  k = n(158776),
  U = n(594174),
  w = n(979651),
  B = n(40300),
  H = n(374129),
  G = n(639351),
  V = n(74538),
  F = n(584729),
  W = n(849171),
  z = n(607187),
  Y = n(833519),
  K = n(462061),
  q = n(623825),
  X = n(839662),
  Q = n(981631),
  J = n(354459),
  $ = n(524484),
  ee = n(65154),
  et = n(689938),
  en = n(26864);
let ei = a.memo(e => {
  var t, n, s, c, E;
  let {
participant: I,
onDoubleClick: x,
onContextMenu: H,
onClick: G,
onMouseDown: q,
onKeyDown: ei,
className: ea,
style: el,
channel: er,
width: eo,
inPopout: ec,
onVideoResize: eu,
inCall: ed = !1,
selected: eh = !1,
noBorder: ep = !1,
noVideoRender: em = !1,
focused: e_ = !1,
blocked: ef = !1,
fit: eE = B.L.CONTAIN,
paused: eg = !1,
pulseSpeakingIndicator: eC = !1
  } = e, eI = a.useContext(j.h9), [ex, eT] = a.useState(!1), eN = (0, o.e7)([O.default], () => O.default.getId()), ev = (0, o.e7)([U.default], () => U.default.getCurrentUser()), eS = I.type === J.fO.ACTIVITY ? null : null === (t = I.user) || void 0 === t ? void 0 : t.id, [eZ] = (0, m.Z)(I.type === J.fO.ACTIVITY ? [I.id] : []), eA = (0, o.e7)([T.Z], () => T.Z.getEnabled()), eM = (0, o.e7)([D.Z], () => null != eS && D.Z.isLocalVideoDisabled(eS, (0, _.Z)(I.type)), [
eS,
I.type
  ]), eb = (0, o.e7)([D.Z], () => null != eS ? D.Z.getVideoToggleState(eS, (0, _.Z)(I.type)) : Q.ZUi.NONE, [
eS,
I.type
  ]), eR = eb === Q.ZUi.AUTO_PROBING, {
speaking: ej,
ringing: eL,
hasVideo: eP
  } = (0, X.Z)(I, eN), eO = function(e, t, n) {
var i, a, s, l;
let r = (0, o.cj)([w.Z], () => {
    var e, i, a;
    let s = w.Z.getVoiceState(n, t.id);
    return {
      muted: null !== (e = null == s ? void 0 : s.mute) && void 0 !== e && e,
      deafened: null !== (i = null == s ? void 0 : s.deaf) && void 0 !== i && i,
      suppressed: null !== (a = null == s ? void 0 : s.suppress) && void 0 !== a && a,
      voiceChannelId: null == s ? void 0 : s.channelId
    };
  }),
  c = (0, o.cj)([D.Z], () => {
    let n = (0, _.Z)(t.type),
      i = t.type !== J.fO.ACTIVITY ? t.user.id : t.id;
    return e === i ? {
      muted: !1,
      deafened: !1
    } : {
      muted: D.Z.isLocalMute(i, n),
      localVideoDisabled: D.Z.isLocalVideoDisabled(i, n),
      localVideoAutoDisabled: D.Z.isLocalVideoAutoDisabled(i, n)
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
  muted: null !== (s = t.type === J.fO.USER && (null === (i = t.voiceState) || void 0 === i ? void 0 : i.isVoiceMuted())) && void 0 !== s && s,
  deafened: null !== (l = t.type === J.fO.USER && (null === (a = t.voiceState) || void 0 === a ? void 0 : a.isVoiceDeafened())) && void 0 !== l && l
};
  }(eN, I, er.getGuildId()), ey = I.type === J.fO.STREAM && eS === eN, eD = (0, V.So)(r.q.STREAM_HIGH_QUALITY), ek = (0, M.j$)(), eU = eD && ey, ew = (0, A.o)(I, ev), eB = (0, Z.lL)('CallTile', !0, ev, ew), eH = eB.persistentQualityIndicator && eB.enabled, eG = (0, o.e7)([L.Z], () => null != eS ? L.Z.getEffectForUserId(eS) : null), eV = (0, o.e7)([w.Z], () => w.Z.getVoicePlatformForChannel(er.id, null != eS ? eS : Q.lds)), {
enableHangStatus: eF
  } = C.n.useExperiment({
guildId: er.guild_id,
location: 'VoiceUsers'
  }), {
showGameIcon: eW
  } = g.ZP.useExperiment({
location: 'voice_users'
  }, {
autoTrackExposure: !1
  }), ez = eW || eF, {
hangStatusActivity: eY,
gameActivity: eK
  } = (0, o.cj)([k.Z], () => ({
hangStatusActivity: eF && null != eS ? k.Z.findActivity(eS, e => e.type === Q.IIU.HANG_STATUS) : null,
gameActivity: ez && null != eS ? k.Z.findActivity(eS, e => null != e.application_id && e.type === Q.IIU.PLAYING) : null
  }), [
eF,
eS,
ez
  ]), eq = (0, o.e7)([y.Z], () => (null == eK ? void 0 : eK.application_id) != null ? y.Z.getDetectableGame(eK.application_id) : null), eX = (0, o.e7)([p.Z], () => null != eq && (null == eK ? void 0 : eK.application_id) != null ? p.Z.getApplication(null == eK ? void 0 : eK.application_id) : void 0), eQ = (0, R.wV)({
userId: eS,
channelId: er.id,
location: 'CallTile'
  });
  a.useEffect(() => {
eT(e_);
  }, [e_]);
  let eJ = a.useCallback(() => {
  null != eS && d.Z.toggleLocalMute(eS, ee.Yn.STREAM);
}, [eS]),
e$ = a.useCallback(() => {
  (0, M.hP)(!0);
}, []),
e0 = a.useCallback(e => {
  null == G || G(I, e);
}, [
  G,
  I
]),
e1 = a.useCallback(e => {
  null == x || x(I, e);
}, [
  x,
  I
]),
e2 = a.useCallback(e => {
  null == H || H(I, e);
}, [
  H,
  I
]),
e7 = eI;
  (eU || eH) && (e7 = !1);
  let e4 = null,
e3 = null,
e5 = '';
  switch (I.type) {
case J.fO.STREAM:
  e4 = (0, i.jsx)(Y.Z, {
    participant: I,
    selected: eh,
    width: eo,
    fit: eE,
    onVideoResize: eu,
    paused: eg,
    inPopout: ec,
    focused: e_
  }), e3 = (0, i.jsx)(Y._, {
    participant: I,
    selected: eh,
    width: eo,
    focused: e_,
    idle: e7,
    premiumIndicator: eU || eB.enabled
  }), e5 = et.Z.Messages.CALL_TILE_A11Y_LABEL_STREAM.format({
    streamerName: I.user.username
  });
  break;
case J.fO.USER:
  e4 = (0, i.jsx)(K.Z, {
    channel: er,
    inCall: ed,
    participant: I,
    fit: eE,
    onVideoResize: eu,
    paused: eg,
    selected: eh,
    width: eo,
    blocked: ef,
    noVideoRender: em || eR,
    pulseSpeakingIndicator: eC
  }), e3 = (0, i.jsx)(K.T, {
    userId: I.user.id,
    channelId: er.id
  }), e5 = et.Z.Messages.CALL_TILE_A11Y_LABEL_USER.format({
    username: I.user.username
  });
  break;
case J.fO.ACTIVITY:
  e4 = (0, i.jsx)(W.ZP, {
    interactible: e_,
    participant: I,
    selected: eh,
    channel: er,
    width: eo
  }), e5 = et.Z.Messages.CALL_TILE_A11Y_LABEL_ACTIVITY.format({
    activityName: null == eZ ? void 0 : eZ.name
  });
  break;
case J.fO.HIDDEN_STREAM:
  e4 = (0, i.jsx)(Y.Z, {
    participant: I,
    selected: eh,
    width: eo,
    fit: eE,
    onVideoResize: eu,
    paused: eg,
    inPopout: ec,
    focused: e_
  });
  }
  let e6 = a.useRef(null),
e9 = I.type === J.fO.STREAM ? u.ScreenIcon : u.VideoIcon;
  return (0, i.jsx)(h.Z, {
section: Q.jXE.VOICE_CHANNEL_TILE,
children: (0, i.jsx)('div', {
  className: l()(en.wrapper, {
    [en.ringing]: eL
  }, ea),
  children: (0, i.jsxs)(S.Z, {
    shakeLocation: $.oZ.VOICE_USER,
    isShaking: ej,
    className: en.tile,
    children: [
      (0, i.jsx)(z.Z, {
        ref: e6,
        className: l()(en.tile, {
          [en.noBorder]: ep,
          [en.noInteraction]: null == G,
          [en.idle]: eI
        }),
        noBorder: ep,
        style: el,
        participantUserId: eS,
        children: (0, i.jsxs)(u.ClickableContainer, {
          'aria-label': e5,
          className: en.tileChild,
          onDoubleClick: e1,
          onContextMenu: e2,
          onClick: e0,
          onMouseDown: q,
          onKeyDown: ei,
          focusProps: {
            offset: 1
          },
          children: [
            I.type === J.fO.USER && null != eS && null != eG ? (0, i.jsx)(P.Z, {
              voiceChannelEffect: eG,
              onComplete: () => (0, L.H)(eS),
              userId: eS
            }) : null,
            I.type === J.fO.USER ? (0, i.jsx)('div', {
              className: en.voiceChannelEffectsContainer,
              children: (0, i.jsx)(f.Z, {
                userId: eS,
                channelId: er.id,
                guildId: er.getGuildId(),
                containerDimensions: {
                  width: null !== (c = null == e6 ? void 0 : null === (n = e6.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== c ? c : 0,
                  height: null !== (E = null == e6 ? void 0 : null === (s = e6.current) || void 0 === s ? void 0 : s.clientHeight) && void 0 !== E ? E : 0
                }
              })
            }) : null,
            e4,
            eU ? (0, i.jsx)(b.W, {
              onPlayed: e$,
              played: ek.hqStreamingFrameAnimationPlayed
            }) : null,
            ep ? null : (0, i.jsx)('div', {
              className: en.indicators,
              children: e3
            }),
            eh ? (0, i.jsx)('div', {
              className: en.selectedScreen,
              children: (0, i.jsx)(e9, {
                size: 'md',
                color: 'currentColor',
                className: en.selectedIcon
              })
            }) : null,
            I.type !== J.fO.ACTIVITY ? (0, i.jsx)(es, {
              focused: e_,
              width: eo,
              inCall: ed,
              participantType: I.type,
              hasVideo: null != eP && eP,
              ...eO,
              idle: eI,
              platform: eV,
              title: (0, F.Z)(er, I),
              blocked: ef,
              localVideoDisabled: eM,
              videoToggleState: eb,
              hideAudioIcon: ey,
              onContextMenu: e2,
              onToggleMute: eJ,
              participantUserId: eS,
              hangStatusActivity: eY,
              application: eX,
              speaking: ej,
              secureFramesVerified: eQ
            }) : null,
            I.type === J.fO.USER && eA ? (0, i.jsx)(N.Z, {
              userId: I.id,
              channelId: er.id
            }) : null,
            ed && !ep ? (0, i.jsx)('div', {
              className: l()(en.border, {
                [en.voiceChannelEffect]: !e_ && null != eG,
                [en.speaking]: ej && !e_
              })
            }) : null
          ]
        })
      }),
      (0, i.jsx)(v.Z, {
        isFiring: ex,
        callTileRef: e6.current
      })
    ]
  })
})
  });
});

function ea(e) {
  let {
participantType: t,
platform: n,
className: a
  } = e;
  if (t === J.fO.STREAM)
return n === J.wR.XBOX ? (0, i.jsx)(G.Z, {
  className: a
}) : (0, i.jsx)(u.ScreenIcon, {
  size: 'md',
  color: 'currentColor',
  className: a
});
  switch (n) {
case J.wR.MOBILE:
  return (0, i.jsx)(u.MobilePhoneIcon, {
    size: 'xs',
    color: 'currentColor',
    className: a
  });
case J.wR.XBOX:
  return (0, i.jsx)(G.Z, {
    className: a
  });
case J.wR.PLAYSTATION:
  return (0, i.jsx)(H.Z, {
    className: a
  });
default:
  return null;
  }
}
ei.displayName = 'CallTile';
let es = a.memo(e => {
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
  } = e, O = null, y = null, k = null, U = null, w = (0, q.K)(p), B = (0, q.N)(p), H = (0, o.e7)([D.Z], () => null != Z && D.Z.isLocalVideoAutoDisabled(Z, (0, _.Z)(S)), [
Z,
S
  ]), G = (0, u.useRedesignIconContext)().enabled;
  if (!v) {
if (a && S === J.fO.STREAM && m && !T)
  O = (0, i.jsx)(u.Tooltip, {
    text: et.Z.Messages.UNMUTE,
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
        className: l()(en.interactive, en.toggleMute),
        children: (0, i.jsx)(u.VoiceXIcon, {
          size: 'md',
          color: 'currentColor'
        })
      });
    }
  });
else if (a || S !== J.fO.STREAM || !m || w || T) {
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
    text: et.Z.Messages.MUTE,
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
        className: l()(en.interactive, en.toggleMute),
        children: (0, i.jsx)(u.VoiceNormalIcon, {
          size: 'md',
          color: 'currentColor'
        })
      });
    }
  });
  }
  return f && D.Z.supports(ee.AN.VIDEO) || !m ? f && m && g && !H && (y = (0, i.jsx)(u.VideoSlashIcon, {
size: 'md',
color: 'currentColor',
colorClass: en.localMuteStrikethrough
  })) : y = (0, i.jsx)(u.VideoIcon, {
size: 'md',
color: 'currentColor'
  }), S === J.fO.STREAM && !T && m && (k = (0, i.jsx)(u.Tooltip, {
text: et.Z.Messages.OPTIONS,
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
    className: l()(en.status, en.interactive),
    children: (0, i.jsx)(u.MoreHorizontalIcon, {
      size: 'md',
      color: 'currentColor'
    })
  });
}
  })), S === J.fO.USER && null != R ? U = (0, i.jsx)(u.Tooltip, {
text: (0, I.O8)(R),
children: e => (0, i.jsx)('div', {
  ...e,
  className: l()(en.hangStatusContainer, {
    [en.hangStatusSmall]: p < 500
  }),
  children: (0, i.jsx)(x.Z, {
    hangStatusActivity: R,
    className: en.hangStatusIcon,
    animate: L
  })
})
  }) : S === J.fO.USER && null != j && (U = (0, i.jsx)(u.Tooltip, {
text: et.Z.Messages.UNFORMATTED_PLAYING_GAME.format({
  game: j.name
}),
children: e => (0, i.jsx)('div', {
  ...e,
  className: l()(en.hangStatusContainer, {
    [en.hangStatusSmall]: p < 500
  }),
  children: (0, i.jsx)(E.Z, {
    className: en.hangStatusIcon,
    game: j,
    size: E.Z.Sizes.SMALL
  })
})
  })), (0, i.jsxs)('div', {
className: en.overlayContainer,
children: [
  (0, i.jsx)('div', {
    className: l()(en.overlayTop, {
      [en.small]: p < 195
    }),
    children: H || C === Q.ZUi.AUTO_PROBING ? d ? (0, i.jsx)('div', {
      className: en.status,
      children: (0, i.jsx)(u.VideoSlashIcon, {
        size: 'md',
        color: 'currentColor'
      })
    }) : (0, i.jsxs)('div', {
      className: l()(en.overlayTitle, en.videoDisabledTitle),
      children: [
        (0, i.jsx)('div', {
          className: en.status,
          children: (0, i.jsx)(u.VideoSlashIcon, {
            size: 'md',
            color: 'currentColor'
          })
        }),
        (0, i.jsx)(u.Text, {
          variant: 'text-sm/normal',
          className: en.overlayTitleText,
          children: et.Z.Messages.UNSTABLE_CONNECTION
        })
      ]
    }) : null
  }),
  (0, i.jsxs)('div', {
    className: l()(en.overlayBottom, {
      [en.small]: p < 195
    }),
    children: [
      B ? (0, i.jsx)('div', {}) : (0, i.jsxs)(u.Text, {
        className: l()(en.overlayTitle, {
          [en.idle]: d
        }),
        color: 'none',
        variant: 'text-md/normal',
        children: [
          N ? (0, i.jsx)('div', {
            className: en.blocked,
            children: (0, i.jsx)(u.DenyIcon, {
              size: 'lg',
              className: en.blockedIcon,
              color: c.Z.unsafe_rawColors.RED_400.css
            })
          }) : null,
          (0, i.jsx)(ea, {
            participantType: S,
            platform: b,
            className: en.titleIcon
          }),
          null != h && '' !== h ? (0, i.jsx)('span', {
            className: en.overlayTitleText,
            children: h
          }) : null,
          P && (0, i.jsx)(u.ShieldLockIcon, {
            className: en.secureFramesIcon,
            size: 'xxs',
            color: c.Z.colors.HEADER_PRIMARY,
            'aria-label': et.Z.Messages.E2EE_USER_VERIFIED_A11Y
          })
        ]
      }),
      (0, i.jsxs)('div', {
        className: en.statusContainer,
        children: [
          null != y && (0, i.jsx)('div', {
            className: en.status,
            children: y
          }),
          null != O && (0, i.jsx)('div', {
            className: en.status,
            children: O
          }),
          k,
          U
        ]
      })
    ]
  })
]
  });
});
es.displayName = 'CallTileOverlay';
let el = B.L;
t.ZP = ei;