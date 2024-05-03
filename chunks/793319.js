"use strict";
n.r(t), n.d(t, {
  GoLiveButton: function() {
    return eN
  },
  handleToggleVideo: function() {
    return eA
  }
}), n("47120");
var a, l, s = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("512722"),
  d = n.n(u),
  c = n("718017"),
  f = n("848246"),
  h = n("442837"),
  m = n("481060"),
  p = n("846027"),
  E = n("287734"),
  C = n("872810"),
  g = n("410575"),
  S = n("40851"),
  _ = n("317381"),
  T = n("596040"),
  I = n("100527"),
  A = n("906732"),
  N = n("67212"),
  v = n("757454"),
  x = n("158631"),
  M = n("709369"),
  R = n("552740"),
  L = n("358221"),
  y = n("887012"),
  O = n("659580"),
  j = n("793865"),
  P = n("575175"),
  D = n("258609"),
  b = n("446226"),
  U = n("594190"),
  F = n("569545"),
  w = n("74299"),
  k = n("989941"),
  H = n("803647"),
  B = n("554747"),
  G = n("95764"),
  V = n("459502"),
  W = n("386542"),
  Y = n("485731"),
  z = n("611845"),
  K = n("618158"),
  Z = n("390322"),
  q = n("791592"),
  X = n("136995"),
  Q = n("402113"),
  J = n("197016"),
  $ = n("386000"),
  ee = n("698877"),
  et = n("25827"),
  en = n("199902"),
  ea = n("523746"),
  el = n("131951"),
  es = n("944486"),
  ei = n("594174"),
  er = n("449224"),
  eo = n("700785"),
  eu = n("923973"),
  ed = n("829750"),
  ec = n("189771"),
  ef = n("294629"),
  eh = n("304745"),
  em = n("985370"),
  ep = n("544384"),
  eE = n("560688"),
  eC = n("127608"),
  eg = n("76021"),
  eS = n("173507"),
  e_ = n("981631"),
  eT = n("354459"),
  eI = n("308004");

function eA(e, t) {
  if (el.default.isVideoEnabled() === e) return;
  let n = () => p.default.setVideoEnabled(e);
  e ? (0, eS.default)(n, t) : n()
}

function eN(e) {
  let {
    channel: t,
    currentUser: n,
    exitFullScreen: a,
    canGoLive: l,
    hasPermission: r,
    disabled: o
  } = e, u = (0, S.useAppContext)(), d = (0, h.useStateFromStoresArray)([en.default], () => en.default.getAllActiveStreams()).find(e => e.ownerId === n.id), {
    available: c,
    activated: p,
    hqStreamingState: E
  } = (0, W.usePerksDemo)(f.EntitlementFeatureNames.STREAM_HIGH_QUALITY), g = null != d && c && p, _ = i.useRef(null), T = t.getGuildId(), I = i.useCallback(() => {
    if (null == a || a(), !l) return (0, eC.default)();
    (0, eg.default)(T, t.id, e_.AnalyticsPages.GUILD_CHANNEL)
  }, [T, t.id, l, a]), A = (0, h.useStateFromStores)([U.default, er.default], () => (0, k.default)(U.default, er.default)), M = (0, x.default)(), L = (0, v.default)() && null != A, y = () => {
    L && (null == d ? (0, C.createBroadcastChannelOrStartStream)({
      channelId: t.id,
      pid: null == A ? void 0 : A.pid
    }) : (0, N.startBroadcastForStream)((0, F.encodeStreamKey)(d), null == A ? void 0 : A.pid))
  }, O = () => {
    if (L) {
      (0, R.openStartBroadcastConfirmModal)(y);
      return
    }
    if (l) {
      I();
      return
    }(0, eC.default)()
  }, j = () => {
    if (M) {
      (0, R.openStopBroadcastConfirmModal)(() => (0, H.default)(d));
      return
    }(0, H.default)(d)
  }, P = (e, t) => {
    let {
      onClick: n,
      ...a
    } = null != e ? e : {
      onClick: void 0
    }, l = null != d && !M;
    return (0, s.jsx)(ee.StreamButton, {
      ...a,
      centerButton: !0,
      disabled: o || !r,
      className: eI.controlButton,
      hasPermission: r,
      streamActive: null != d,
      isSelfStream: !0,
      onPopoutClick: l ? function(e) {
        E.hqStreamingIsEnabled && !E.hqStreamingPopoutDismissed && (0, Y.hqStreamingPopoutDismissed)(!0), null == n || n(e)
      } : null,
      popoutOpen: t,
      shouldShowTooltip: !t,
      premiumGlow: g && E.hqStreamingIsEnabled,
      buttonRef: _,
      onClick: null != d ? j : O
    })
  };
  return M ? P() : (0, s.jsxs)(s.Fragment, {
    children: [g && E.hqStreamingIsEnabled ? (0, s.jsx)(z.StreamButtonDemoPopout, {
      buttonRef: _,
      dismissed: E.hqStreamingPopoutDismissed,
      onDismiss: () => {
        (0, Y.hqStreamingPopoutDismissed)(!0)
      }
    }) : null, (0, s.jsx)(K.default, {
      children: (0, s.jsx)(m.Popout, {
        renderPopout: e => {
          let {
            closePopout: a
          } = e;
          return (0, s.jsx)(Z.default, {
            children: (0, s.jsx)(ep.default, {
              channel: t,
              currentUser: n,
              activeStreams: null != d ? [d] : [],
              handleGoLive: I,
              onClose: a,
              appContext: u
            })
          })
        },
        position: "top",
        align: "center",
        animation: m.Popout.Animation.FADE,
        children: (e, t) => {
          let {
            ...n
          } = e, {
            isShown: a
          } = t;
          return (0, s.jsx)("div", {
            children: P(n, a)
          })
        }
      })
    })]
  })
}

function ev(e) {
  let {
    channel: t
  } = e, n = t.getGuildId();
  return (0, T.default)(n, t.id) ? (0, s.jsx)("div", {
    className: eI.buttonContainer,
    children: (0, s.jsx)(eh.CenterControlTrayActivityButton, {
      channel: t
    })
  }) : null
}(l = a || (a = {})).ACTIVITY = "ACTIVITY", l.STREAM = "STREAM", l.CALL = "CALL", l.EVENT = "EVENT", l.BROADCAST = "BROADCAST";
let ex = i.memo(function(e) {
  let {
    connectedActivityApplicationId: t,
    currentUser: n,
    onDisconnectCall: a,
    channel: l
  } = e, r = (0, h.useStateFromStores)([L.default], () => L.default.getSelectedParticipant(l.id)), {
    reducedMotion: o
  } = i.useContext(m.AccessibilityPreferencesContext), [u, d] = i.useState(!1), f = null == r ? void 0 : r.id, p = (0, h.useStateFromStores)([en.default], () => null != f ? en.default.getActiveStreamForStreamKey(f) : null, [f]), g = (null == r ? void 0 : r.type) === eT.ParticipantTypes.STREAM && null != p && p.ownerId !== (null == n ? void 0 : n.id), S = (0, h.useStateFromStoresArray)([en.default], () => en.default.getAllActiveStreamsForChannel(l.id).filter(e => {
    let {
      ownerId: t
    } = e;
    return t !== (null == n ? void 0 : n.id)
  })), _ = (0, B.useActiveEvent)(l.id), T = (0, x.useIsBroadcastingInChannel)(l.id), I = i.useCallback(() => {
    if ((null == r ? void 0 : r.type) === eT.ParticipantTypes.ACTIVITY && r.id === t) return "ACTIVITY";
    if (g) return "STREAM";
    if (null != _) return "EVENT";
    return "CALL"
  }, [r, t, g, _]), [A, N] = i.useState(I()), v = (0, c.useSpring)({
    opacity: u ? .2 : 1,
    transform: u && !o.enabled ? "scale(0.7)" : "scale(1)",
    config: {
      mass: 2,
      tension: u ? 600 : 1e3,
      friction: 45,
      precision: .01,
      clamp: u
    },
    onRest: () => {
      N(I()), d(!1)
    }
  });
  i.useEffect(() => {
    I() !== A && d(!0)
  }, [A, I]);
  let R = i.useCallback(() => {
      if (null != p)(0, C.stopStream)((0, F.encodeStreamKey)(p));
      else
        for (let e of S)(0, C.stopStream)((0, F.encodeStreamKey)(e))
    }, [S, p]),
    y = (e, t) => {
      let i = {
        centerButton: !0,
        className: eI.controlButton,
        popoutOpen: e
      };
      switch (A) {
        case "ACTIVITY":
          if (null == r || null == n) return;
          return (0, s.jsx)(Q.default, {
            ...i,
            applicationId: r.id,
            color: "red",
            channelId: l.id,
            onPopoutClick: S.length > 0 ? t : null
          });
        case "STREAM":
          return (0, s.jsx)(ee.StreamButton, {
            ...i,
            hasPermission: !0,
            streamActive: !0,
            color: "red",
            onClick: R,
            onPopoutClick: S.length > 1 ? t : null,
            isSelfStream: !1
          });
        case "CALL":
          return (0, s.jsx)(J.default, {
            ...i,
            color: "red",
            onClick: () => null == a ? void 0 : a(),
            onPopoutClick: S.length > 0 ? t : null,
            channel: l
          });
        case "EVENT":
          return (0, s.jsx)(G.default, {
            channelId: l.id,
            onClick: () => {
              E.default.disconnect(), null == a || a()
            }
          })
      }
    };
  return (0, s.jsx)(m.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return T ? (0, s.jsx)(M.default, {
        onClose: t
      }) : (0, s.jsx)(ep.default, {
        channel: l,
        currentUser: n,
        activeStreams: S,
        handleGoLive: e_.NOOP_NULL,
        hideSelfOptions: !0,
        onClose: t
      })
    },
    position: "top",
    align: "center",
    animation: m.Popout.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: a
      } = t;
      return (0, s.jsx)(c.animated.div, {
        style: v,
        children: y(a, n)
      })
    }
  })
});

function eM(e) {
  let {
    channel: t,
    cameraUnavailable: n,
    hasCameraPermission: a,
    currentUser: l
  } = e, r = (0, S.useAppContext)(), {
    reachedLimit: u,
    limit: d
  } = (0, ed.default)(t), c = i.useCallback(() => {
    (0, eS.default)(() => E.default.selectVoiceChannel(t.id, !0), r)
  }, [t.id, r]), f = i.useCallback(() => {
    n ? (0, eE.default)() : c()
  }, [n, c]), m = (0, h.useStateFromStores)([ea.default], () => {
    let e = ea.default.getCall(t.id);
    return (null == e ? void 0 : e.ringing.includes(l.id)) === !0
  });
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(et.default, {
      enabled: !0,
      centerButton: !0,
      join: !0,
      color: "green",
      channelLimitReached: u,
      channelLimit: d,
      channel: t,
      cameraUnavailable: n,
      hasPermission: a,
      onCameraUnavailable: f,
      className: eI.controlButton,
      iconClassName: eI.__invalid_joinIcon,
      onChange: c
    }), (0, s.jsx)(X.default, {
      centerButton: !0,
      color: "green",
      channel: t,
      className: o()(eI.controlButton, eI.__invalid_lastButton)
    }), m ? (0, s.jsx)(q.default, {
      color: "red",
      channel: t,
      className: eI.controlButton
    }) : null]
  })
}
t.default = function(e) {
  let {
    channel: t,
    className: n,
    onDisconnectCall: a,
    exitFullScreen: l
  } = e, i = (0, h.useStateFromStores)([ei.default], () => {
    let e = ei.default.getCurrentUser();
    return d()(null != e, "CenterControlTray: currentUser cannot be undefined"), e
  }), {
    cameraUnavailable: r,
    enabled: u
  } = (0, eu.default)(), c = (0, ec.default)(t), {
    suppress: f,
    selfMute: p,
    mute: E
  } = (0, ef.default)(t), {
    canGoLive: C
  } = (0, h.useStateFromStoresObject)([el.default], () => ({
    canGoLive: (0, w.default)(el.default)
  })), S = (0, b.default)(), T = (0, h.useStateFromStores)([D.default], () => null != D.default.getAwaitingRemoteSessionInfo()), N = null != S, v = (0, h.useStateFromStores)([es.default], () => {
    var e;
    return (null !== (e = null == S ? void 0 : S.channelId) && void 0 !== e ? e : es.default.getVoiceChannelId()) === t.id
  }), x = (0, y.default)(t, !0), M = (0, h.useStateFromStores)([_.default], () => {
    let e = _.default.getSelfEmbeddedActivityForChannel(t.id);
    return null != e ? e.applicationId : null
  }), {
    reachedLimit: R,
    limit: L
  } = (0, ed.default)(t), {
    analyticsLocations: U
  } = (0, A.default)(I.default.VOICE_CONTROL_TRAY);
  if (!v) return (0, s.jsx)(A.AnalyticsLocationProvider, {
    value: U,
    children: (0, s.jsx)(eM, {
      channel: t,
      cameraUnavailable: r,
      hasCameraPermission: c,
      currentUser: i
    })
  });
  let F = eo.can({
    permission: e_.Permissions.ADD_REACTIONS,
    user: i,
    context: t
  }) && !t.isPrivate() && !x;
  return (0, s.jsx)(A.AnalyticsLocationProvider, {
    value: U,
    children: (0, s.jsxs)(g.default, {
      section: e_.AnalyticsSections.VOICE_CONTROL_TRAY,
      children: [(0, s.jsx)("div", {
        className: eI.eventPromptsContainer,
        children: (0, s.jsx)(V.default, {
          channelId: t.id
        })
      }), (0, s.jsxs)("div", {
        className: o()(eI.wrapper, n),
        children: [!N && (0, s.jsx)(m.Popout, {
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, s.jsx)(Z.default, {
              children: (0, s.jsx)(j.default, {
                onClose: t
              })
            })
          },
          position: "top",
          align: "center",
          animation: m.Popout.Animation.FADE,
          children: (e, t) => {
            let {
              onClick: n
            } = e, {
              isShown: a
            } = t;
            return (0, s.jsx)(et.default, {
              centerButton: !0,
              hasPermission: c,
              className: eI.controlButton,
              enabled: u,
              cameraUnavailable: r,
              onChange: eA,
              onCameraUnavailable: eE.default,
              channelLimitReached: R,
              channelLimit: L,
              popoutOpen: a,
              onPopoutClick: n
            })
          }
        }), !N && (0, s.jsx)(ev, {
          channel: t
        }), !N && (0, s.jsx)(eN, {
          channel: t,
          currentUser: i,
          exitFullScreen: l,
          canGoLive: C,
          hasPermission: c
        }), (0, s.jsx)(m.Popout, {
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, s.jsx)(Z.default, {
              children: (0, s.jsx)(O.default, {
                onClose: t,
                renderInputDevices: !0,
                renderOutputDevices: !0,
                renderInputModes: !0
              })
            })
          },
          align: "center",
          position: "top",
          animation: m.Popout.Animation.FADE,
          children: (e, t) => {
            let {
              onClick: n
            } = e, {
              isShown: a
            } = t;
            return (0, s.jsx)($.default, {
              centerButton: !0,
              onPopoutClick: N ? null : n,
              className: eI.controlButton,
              selfMute: p,
              serverMute: E,
              suppress: f,
              popoutOpen: a,
              awaitingRemote: T,
              onClick: () => (0, P.default)(E, f)
            })
          }
        }), F && !N ? (0, s.jsx)("div", {
          className: eI.buttonContainer,
          children: (0, s.jsx)(em.default, {
            channel: t
          })
        }) : null, (0, s.jsx)(ex, {
          connectedActivityApplicationId: M,
          currentUser: i,
          channel: t,
          onDisconnectCall: a
        })]
      })]
    })
  })
}