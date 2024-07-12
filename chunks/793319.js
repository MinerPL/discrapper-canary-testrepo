n.d(t, {
  NZ: function() {
return eS;
  },
  r: function() {
return eN;
  }
}), n(47120);
var i, a, l = n(735250),
  s = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(512722),
  d = n.n(c),
  u = n(338545),
  h = n(848246),
  p = n(442837),
  m = n(481060),
  _ = n(846027),
  f = n(287734),
  E = n(872810),
  C = n(410575),
  g = n(40851),
  I = n(317381),
  x = n(596040),
  T = n(100527),
  v = n(906732),
  N = n(67212),
  S = n(757454),
  Z = n(158631),
  A = n(709369),
  M = n(552740),
  b = n(358221),
  R = n(887012),
  j = n(659580),
  L = n(793865),
  P = n(575175),
  O = n(258609),
  y = n(446226),
  D = n(594190),
  k = n(569545),
  U = n(74299),
  w = n(989941),
  B = n(803647),
  H = n(554747),
  G = n(95764),
  V = n(459502),
  F = n(386542),
  W = n(485731),
  z = n(455961),
  Y = n(611845),
  K = n(618158),
  q = n(390322),
  X = n(791592),
  Q = n(136995),
  J = n(402113),
  $ = n(197016),
  ee = n(386000),
  et = n(698877),
  en = n(25827),
  ei = n(199902),
  ea = n(523746),
  el = n(131951),
  es = n(944486),
  er = n(594174),
  eo = n(449224),
  ec = n(700785),
  ed = n(923973),
  eu = n(829750),
  eh = n(189771),
  ep = n(294629),
  em = n(304745),
  e_ = n(985370),
  ef = n(544384),
  eE = n(560688),
  eC = n(127608),
  eg = n(76021),
  eI = n(173507),
  ex = n(981631),
  eT = n(354459),
  ev = n(269794);

function eN(e, t) {
  if (el.Z.isVideoEnabled() === e)
return;
  let n = () => _.Z.setVideoEnabled(e);
  e ? (0, eI.Z)(n, t) : n();
}

function eS(e) {
  let {
channel: t,
currentUser: n,
exitFullScreen: i,
canGoLive: a,
hasPermission: r,
disabled: o
  } = e, c = (0, g.bp)(), d = (0, p.Wu)([ei.Z], () => ei.Z.getAllActiveStreams()).find(e => e.ownerId === n.id), {
available: u,
activated: _,
hqStreamingState: f
  } = (0, F.k)(h.q.STREAM_HIGH_QUALITY), C = null != d && u && _, I = s.useRef(null), x = t.getGuildId(), T = s.useCallback(() => {
if (null == i || i(), !a)
  return (0, eC.Z)();
(0, eg.Z)(x, t.id, ex.ZY5.GUILD_CHANNEL);
  }, [
x,
t.id,
a,
i
  ]), v = (0, p.e7)([
D.ZP,
eo.Z
  ], () => (0, w.Z)(D.ZP, eo.Z)), A = (0, Z.ZP)(), b = (0, S.Z)() && null != v, R = () => {
b && (null == d ? (0, E.tE)({
  channelId: t.id,
  pid: null == v ? void 0 : v.pid
}) : (0, N.v$)((0, k.V9)(d), null == v ? void 0 : v.pid));
  }, j = () => {
if (b) {
  (0, M.D)(R);
  return;
}
if (a) {
  T();
  return;
}
(0, eC.Z)();
  }, L = () => {
if (A) {
  (0, M.Z)(() => (0, B.Z)(d));
  return;
}
(0, B.Z)(d);
  }, P = (e, t) => {
let {
  onClick: n,
  ...i
} = null != e ? e : {
  onClick: void 0
}, a = null != d && !A;
return (0, l.jsx)(et.O, {
  ...i,
  centerButton: !0,
  disabled: o || !r,
  className: ev.controlButton,
  hasPermission: r,
  streamActive: null != d,
  isSelfStream: !0,
  onPopoutClick: a ? function(e) {
    f.hqStreamingIsEnabled && !f.hqStreamingPopoutDismissed && (0, W.pM)(!0), null == n || n(e);
  } : null,
  popoutOpen: t,
  shouldShowTooltip: !t,
  premiumGlow: C && f.hqStreamingIsEnabled,
  buttonRef: I,
  onClick: null != d ? L : j
});
  };
  return A ? P() : (0, l.jsxs)(l.Fragment, {
children: [
  C && f.hqStreamingIsEnabled ? (0, l.jsx)(Y.$, {
    buttonRef: I,
    dismissed: f.hqStreamingPopoutDismissed,
    onDismiss: () => {
      (0, W.pM)(!0);
    }
  }) : (0, l.jsx)(z.be, {
    channel: t,
    buttonRef: I,
    dismissed: f.hqStreamingOptInPopoutDismissed,
    onDismiss: () => {
      (0, W.qA)(!0);
    }
  }),
  (0, l.jsx)(K.Z, {
    children: (0, l.jsx)(m.Popout, {
      renderPopout: e => {
        let {
          closePopout: i
        } = e;
        return (0, l.jsx)(q.Z, {
          children: (0, l.jsx)(ef.Z, {
            channel: t,
            currentUser: n,
            activeStreams: null != d ? [d] : [],
            handleGoLive: T,
            onClose: i,
            appContext: c
          })
        });
      },
      position: 'top',
      align: 'center',
      animation: m.Popout.Animation.FADE,
      children: (e, t) => {
        let {
          ...n
        } = e, {
          isShown: i
        } = t;
        return (0, l.jsx)('div', {
          children: P(n, i)
        });
      }
    })
  })
]
  });
}

function eZ(e) {
  let {
channel: t
  } = e, n = t.getGuildId();
  return (0, x.Z)(n, t.id) ? (0, l.jsx)('div', {
className: ev.buttonContainer,
children: (0, l.jsx)(em.M, {
  channel: t
})
  }) : null;
}
(a = i || (i = {})).ACTIVITY = 'ACTIVITY', a.STREAM = 'STREAM', a.CALL = 'CALL', a.EVENT = 'EVENT', a.BROADCAST = 'BROADCAST';
let eA = s.memo(function(e) {
  let {
connectedActivityApplicationId: t,
currentUser: n,
onDisconnectCall: i,
channel: a
  } = e, r = (0, p.e7)([b.Z], () => b.Z.getSelectedParticipant(a.id)), {
reducedMotion: o
  } = s.useContext(m.AccessibilityPreferencesContext), [c, d] = s.useState(!1), h = null == r ? void 0 : r.id, _ = (0, p.e7)([ei.Z], () => null != h ? ei.Z.getActiveStreamForStreamKey(h) : null, [h]), C = (null == r ? void 0 : r.type) === eT.fO.STREAM && null != _ && _.ownerId !== (null == n ? void 0 : n.id), g = (0, p.Wu)([ei.Z], () => ei.Z.getAllActiveStreamsForChannel(a.id).filter(e => {
let {
  ownerId: t
} = e;
return t !== (null == n ? void 0 : n.id);
  })), I = (0, H.qY)(a.id), x = (0, Z.zW)(a.id), T = s.useCallback(() => {
if ((null == r ? void 0 : r.type) === eT.fO.ACTIVITY && r.id === t)
  return 'ACTIVITY';
if (C)
  return 'STREAM';
if (null != I)
  return 'EVENT';
return 'CALL';
  }, [
r,
t,
C,
I
  ]), [v, N] = s.useState(T()), S = (0, u.useSpring)({
opacity: c ? 0.2 : 1,
transform: c && !o.enabled ? 'scale(0.7)' : 'scale(1)',
config: {
  mass: 2,
  tension: c ? 600 : 1000,
  friction: 45,
  precision: 0.01,
  clamp: c
},
onRest: () => {
  N(T()), d(!1);
}
  });
  s.useEffect(() => {
T() !== v && d(!0);
  }, [
v,
T
  ]);
  let M = s.useCallback(() => {
  if (null != _)
    (0, E.g)((0, k.V9)(_));
  else
    for (let e of g)
      (0, E.g)((0, k.V9)(e));
}, [
  g,
  _
]),
R = (e, t) => {
  let s = {
    centerButton: !0,
    className: ev.controlButton,
    popoutOpen: e
  };
  switch (v) {
    case 'ACTIVITY':
      if (null == r || null == n)
        return;
      return (0, l.jsx)(J.Z, {
        ...s,
        applicationId: r.id,
        color: 'red',
        channelId: a.id,
        onPopoutClick: g.length > 0 ? t : null
      });
    case 'STREAM':
      return (0, l.jsx)(et.O, {
        ...s,
        hasPermission: !0,
        streamActive: !0,
        color: 'red',
        onClick: M,
        onPopoutClick: g.length > 1 ? t : null,
        isSelfStream: !1
      });
    case 'CALL':
      return (0, l.jsx)($.Z, {
        ...s,
        color: 'red',
        onClick: () => null == i ? void 0 : i(),
        onPopoutClick: g.length > 0 ? t : null,
        channel: a
      });
    case 'EVENT':
      return (0, l.jsx)(G.Z, {
        channelId: a.id,
        onClick: () => {
          f.default.disconnect(), null == i || i();
        }
      });
  }
};
  return (0, l.jsx)(m.Popout, {
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return x ? (0, l.jsx)(A.Z, {
    onClose: t
  }) : (0, l.jsx)(ef.Z, {
    channel: a,
    currentUser: n,
    activeStreams: g,
    handleGoLive: ex.VqG,
    hideSelfOptions: !0,
    onClose: t
  });
},
position: 'top',
align: 'center',
animation: m.Popout.Animation.FADE,
children: (e, t) => {
  let {
    onClick: n
  } = e, {
    isShown: i
  } = t;
  return (0, l.jsx)(u.animated.div, {
    style: S,
    children: R(i, n)
  });
}
  });
});

function eM(e) {
  let {
channel: t,
cameraUnavailable: n,
hasCameraPermission: i,
currentUser: a
  } = e, r = (0, g.bp)(), {
reachedLimit: c,
limit: d
  } = (0, eu.Z)(t), u = s.useCallback(() => {
(0, eI.Z)(() => f.default.selectVoiceChannel(t.id, !0), r);
  }, [
t.id,
r
  ]), h = s.useCallback(() => {
n ? (0, eE.Z)() : u();
  }, [
n,
u
  ]), m = (0, p.e7)([ea.Z], () => {
let e = ea.Z.getCall(t.id);
return (null == e ? void 0 : e.ringing.includes(a.id)) === !0;
  });
  return (0, l.jsxs)(l.Fragment, {
children: [
  (0, l.jsx)(en.C, {
    enabled: !0,
    centerButton: !0,
    join: !0,
    color: 'green',
    channelLimitReached: c,
    channelLimit: d,
    channel: t,
    cameraUnavailable: n,
    hasPermission: i,
    onCameraUnavailable: h,
    className: ev.controlButton,
    iconClassName: ev.__invalid_joinIcon,
    onChange: u
  }),
  (0, l.jsx)(Q.Z, {
    centerButton: !0,
    color: 'green',
    channel: t,
    className: o()(ev.controlButton, ev.__invalid_lastButton)
  }),
  m ? (0, l.jsx)(X.Z, {
    color: 'red',
    channel: t,
    className: ev.controlButton
  }) : null
]
  });
}
t.ZP = function(e) {
  let {
channel: t,
className: n,
onDisconnectCall: i,
exitFullScreen: a
  } = e, s = (0, p.e7)([er.default], () => {
let e = er.default.getCurrentUser();
return d()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
  }), {
cameraUnavailable: r,
enabled: c
  } = (0, ed.Z)(), u = (0, eh.Z)(t), {
suppress: h,
selfMute: _,
mute: f
  } = (0, ep.Z)(t), {
canGoLive: E
  } = (0, p.cj)([el.Z], () => ({
canGoLive: (0, U.Z)(el.Z)
  })), g = (0, y.Z)(), x = (0, p.e7)([O.Z], () => null != O.Z.getAwaitingRemoteSessionInfo()), N = null != g, S = (0, p.e7)([es.Z], () => {
var e;
return (null !== (e = null == g ? void 0 : g.channelId) && void 0 !== e ? e : es.Z.getVoiceChannelId()) === t.id;
  }), Z = (0, R.Z)(t, !0), A = (0, p.e7)([I.ZP], () => {
let e = I.ZP.getSelfEmbeddedActivityForChannel(t.id);
return null != e ? e.applicationId : null;
  }), {
reachedLimit: M,
limit: b
  } = (0, eu.Z)(t), {
analyticsLocations: D
  } = (0, v.ZP)(T.Z.VOICE_CONTROL_TRAY);
  if (!S)
return (0, l.jsx)(v.Gt, {
  value: D,
  children: (0, l.jsx)(eM, {
    channel: t,
    cameraUnavailable: r,
    hasCameraPermission: u,
    currentUser: s
  })
});
  let k = ec.BT({
permission: ex.Plq.ADD_REACTIONS,
user: s,
context: t
  }) && !t.isPrivate() && !Z;
  return (0, l.jsx)(v.Gt, {
value: D,
children: (0, l.jsxs)(C.Z, {
  section: ex.jXE.VOICE_CONTROL_TRAY,
  children: [
    (0, l.jsx)('div', {
      className: ev.eventPromptsContainer,
      children: (0, l.jsx)(V.Z, {
        channelId: t.id
      })
    }),
    (0, l.jsxs)('div', {
      className: o()(ev.wrapper, n),
      children: [
        !N && (0, l.jsx)(m.Popout, {
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, l.jsx)(q.Z, {
              children: (0, l.jsx)(L.Z, {
                onClose: t
              })
            });
          },
          position: 'top',
          align: 'center',
          animation: m.Popout.Animation.FADE,
          children: (e, t) => {
            let {
              onClick: n
            } = e, {
              isShown: i
            } = t;
            return (0, l.jsx)(en.C, {
              centerButton: !0,
              hasPermission: u,
              className: ev.controlButton,
              enabled: c,
              cameraUnavailable: r,
              onChange: eN,
              onCameraUnavailable: eE.Z,
              channelLimitReached: M,
              channelLimit: b,
              popoutOpen: i,
              onPopoutClick: n
            });
          }
        }),
        !N && (0, l.jsx)(eZ, {
          channel: t
        }),
        !N && (0, l.jsx)(eS, {
          channel: t,
          currentUser: s,
          exitFullScreen: a,
          canGoLive: E,
          hasPermission: u
        }),
        (0, l.jsx)(m.Popout, {
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, l.jsx)(q.Z, {
              children: (0, l.jsx)(j.default, {
                onClose: t,
                renderInputDevices: !0,
                renderOutputDevices: !0,
                renderInputModes: !0
              })
            });
          },
          align: 'center',
          position: 'top',
          animation: m.Popout.Animation.FADE,
          children: (e, t) => {
            let {
              onClick: n
            } = e, {
              isShown: i
            } = t;
            return (0, l.jsx)(ee.Z, {
              centerButton: !0,
              onPopoutClick: N ? null : n,
              className: ev.controlButton,
              selfMute: _,
              serverMute: f,
              suppress: h,
              popoutOpen: i,
              awaitingRemote: x,
              onClick: () => (0, P.Z)(f, h)
            });
          }
        }),
        k && !N ? (0, l.jsx)('div', {
          className: ev.buttonContainer,
          children: (0, l.jsx)(e_.Z, {
            channel: t
          })
        }) : null,
        (0, l.jsx)(eA, {
          connectedActivityApplicationId: A,
          currentUser: s,
          channel: t,
          onDisconnectCall: i
        })
      ]
    })
  ]
})
  });
};