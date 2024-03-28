"use strict";
n.r(t), n.d(t, {
  GoLiveButton: function() {
    return e_
  },
  handleToggleVideo: function() {
    return eS
  }
}), n("47120");
var a, l, s = n("735250"),
  i = n("470079"),
  r = n("803997"),
  o = n.n(r),
  u = n("512722"),
  d = n.n(u),
  c = n("718017"),
  f = n("442837"),
  h = n("481060"),
  m = n("846027"),
  p = n("287734"),
  E = n("872810"),
  C = n("410575"),
  g = n("40851"),
  S = n("317381"),
  _ = n("596040"),
  T = n("100527"),
  I = n("906732"),
  A = n("67212"),
  v = n("757454"),
  N = n("158631"),
  x = n("709369"),
  M = n("552740"),
  R = n("358221"),
  L = n("887012"),
  y = n("659580"),
  O = n("793865"),
  j = n("575175"),
  P = n("258609"),
  D = n("446226"),
  b = n("594190"),
  U = n("569545"),
  F = n("74299"),
  w = n("989941"),
  k = n("803647"),
  H = n("554747"),
  B = n("95764"),
  G = n("459502"),
  V = n("618158"),
  W = n("390322"),
  Y = n("791592"),
  z = n("136995"),
  Z = n("402113"),
  K = n("197016"),
  X = n("386000"),
  q = n("698877"),
  Q = n("25827"),
  J = n("199902"),
  $ = n("523746"),
  ee = n("131951"),
  et = n("944486"),
  en = n("594174"),
  ea = n("449224"),
  el = n("700785"),
  es = n("923973"),
  ei = n("829750"),
  er = n("189771"),
  eo = n("294629"),
  eu = n("304745"),
  ed = n("985370"),
  ec = n("544384"),
  ef = n("560688"),
  eh = n("127608"),
  em = n("76021"),
  ep = n("173507"),
  eE = n("981631"),
  eC = n("354459"),
  eg = n("984324");

function eS(e, t) {
  if (ee.default.isVideoEnabled() === e) return;
  let n = () => m.default.setVideoEnabled(e);
  e ? (0, ep.default)(n, t) : n()
}

function e_(e) {
  let {
    channel: t,
    currentUser: n,
    exitFullScreen: a,
    canGoLive: l,
    hasPermission: r,
    disabled: o
  } = e, u = (0, g.useAppContext)(), d = (0, f.useStateFromStoresArray)([J.default], () => J.default.getAllActiveStreams()).find(e => e.ownerId === n.id), c = t.getGuildId(), m = i.useCallback(() => {
    if (null == a || a(), !l) return (0, eh.default)();
    (0, em.default)(c, t.id, eE.AnalyticsPages.GUILD_CHANNEL)
  }, [c, t.id, l, a]), p = (0, f.useStateFromStores)([b.default, ea.default], () => (0, w.default)(b.default, ea.default)), C = (0, N.default)(), S = (0, v.default)() && null != p, _ = () => {
    S && (null == d ? (0, E.createBroadcastChannelOrStartStream)({
      channelId: t.id,
      pid: null == p ? void 0 : p.pid
    }) : (0, A.startBroadcastForStream)((0, U.encodeStreamKey)(d), null == p ? void 0 : p.pid))
  }, T = () => {
    if (S) {
      (0, M.openStartBroadcastConfirmModal)(_);
      return
    }
    if (l) {
      m();
      return
    }(0, eh.default)()
  }, I = () => {
    if (C) {
      (0, M.openStopBroadcastConfirmModal)(() => (0, k.default)(d));
      return
    }(0, k.default)(d)
  }, x = (e, t) => {
    let {
      onClick: n,
      ...a
    } = null != e ? e : {
      onClick: void 0
    }, l = null != d && !C;
    return (0, s.jsx)(q.StreamButton, {
      ...a,
      centerButton: !0,
      disabled: o || !r,
      className: eg.controlButton,
      hasPermission: r,
      streamActive: null != d,
      isSelfStream: !0,
      onPopoutClick: l ? n : null,
      popoutOpen: t,
      shouldShowTooltip: !t,
      onClick: null != d ? I : T
    })
  };
  return C ? x() : (0, s.jsx)(V.default, {
    children: (0, s.jsx)(h.Popout, {
      renderPopout: e => {
        let {
          closePopout: a
        } = e;
        return (0, s.jsx)(W.default, {
          children: (0, s.jsx)(ec.default, {
            channel: t,
            currentUser: n,
            activeStreams: null != d ? [d] : [],
            handleGoLive: m,
            onClose: a,
            appContext: u
          })
        })
      },
      position: "top",
      align: "center",
      animation: h.Popout.Animation.FADE,
      children: (e, t) => {
        let {
          ...n
        } = e, {
          isShown: a
        } = t;
        return (0, s.jsx)("div", {
          children: x(n, a)
        })
      }
    })
  })
}

function eT(e) {
  let {
    channel: t
  } = e, n = t.getGuildId();
  return (0, _.default)(n, t.id) ? (0, s.jsx)("div", {
    className: eg.buttonContainer,
    children: (0, s.jsx)(eu.CenterControlTrayActivityButton, {
      channel: t
    })
  }) : null
}(l = a || (a = {})).ACTIVITY = "ACTIVITY", l.STREAM = "STREAM", l.CALL = "CALL", l.EVENT = "EVENT", l.BROADCAST = "BROADCAST";
let eI = i.memo(function(e) {
  let {
    connectedActivityApplicationId: t,
    currentUser: n,
    onDisconnectCall: a,
    channel: l
  } = e, r = (0, f.useStateFromStores)([R.default], () => R.default.getSelectedParticipant(l.id)), {
    reducedMotion: o
  } = i.useContext(h.AccessibilityPreferencesContext), [u, d] = i.useState(!1), m = null == r ? void 0 : r.id, C = (0, f.useStateFromStores)([J.default], () => null != m ? J.default.getActiveStreamForStreamKey(m) : null, [m]), g = (null == r ? void 0 : r.type) === eC.ParticipantTypes.STREAM && null != C && C.ownerId !== (null == n ? void 0 : n.id), S = (0, f.useStateFromStoresArray)([J.default], () => J.default.getAllActiveStreamsForChannel(l.id).filter(e => {
    let {
      ownerId: t
    } = e;
    return t !== (null == n ? void 0 : n.id)
  })), _ = (0, H.useActiveEvent)(l.id), T = (0, N.useIsBroadcastingInChannel)(l.id), I = i.useCallback(() => {
    if ((null == r ? void 0 : r.type) === eC.ParticipantTypes.ACTIVITY && r.id === t) return "ACTIVITY";
    if (g) return "STREAM";
    if (null != _) return "EVENT";
    return "CALL"
  }, [r, t, g, _]), [A, v] = i.useState(I()), M = (0, c.useSpring)({
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
      v(I()), d(!1)
    }
  });
  i.useEffect(() => {
    I() !== A && d(!0)
  }, [A, I]);
  let L = i.useCallback(() => {
      if (null != C)(0, E.stopStream)((0, U.encodeStreamKey)(C));
      else
        for (let e of S)(0, E.stopStream)((0, U.encodeStreamKey)(e))
    }, [S, C]),
    y = (e, t) => {
      let i = {
        centerButton: !0,
        className: eg.controlButton,
        popoutOpen: e
      };
      switch (A) {
        case "ACTIVITY":
          if (null == r || null == n) return;
          return (0, s.jsx)(Z.default, {
            ...i,
            applicationId: r.id,
            color: "red",
            channelId: l.id,
            onPopoutClick: S.length > 0 ? t : null
          });
        case "STREAM":
          return (0, s.jsx)(q.StreamButton, {
            ...i,
            hasPermission: !0,
            streamActive: !0,
            color: "red",
            onClick: L,
            onPopoutClick: S.length > 1 ? t : null,
            isSelfStream: !1
          });
        case "CALL":
          return (0, s.jsx)(K.default, {
            ...i,
            color: "red",
            onClick: () => null == a ? void 0 : a(),
            onPopoutClick: S.length > 0 ? t : null,
            channel: l
          });
        case "EVENT":
          return (0, s.jsx)(B.default, {
            channelId: l.id,
            onClick: () => {
              p.default.disconnect(), null == a || a()
            }
          })
      }
    };
  return (0, s.jsx)(h.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return T ? (0, s.jsx)(x.default, {
        onClose: t
      }) : (0, s.jsx)(ec.default, {
        channel: l,
        currentUser: n,
        activeStreams: S,
        handleGoLive: eE.NOOP_NULL,
        hideSelfOptions: !0,
        onClose: t
      })
    },
    position: "top",
    align: "center",
    animation: h.Popout.Animation.FADE,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: a
      } = t;
      return (0, s.jsx)(c.animated.div, {
        style: M,
        children: y(a, n)
      })
    }
  })
});

function eA(e) {
  let {
    channel: t,
    cameraUnavailable: n,
    hasCameraPermission: a,
    currentUser: l
  } = e, r = (0, g.useAppContext)(), {
    reachedLimit: u,
    limit: d
  } = (0, ei.default)(t), c = i.useCallback(() => {
    (0, ep.default)(() => p.default.selectVoiceChannel(t.id, !0), r)
  }, [t.id, r]), h = i.useCallback(() => {
    n ? (0, ef.default)() : c()
  }, [n, c]), m = (0, f.useStateFromStores)([$.default], () => {
    let e = $.default.getCall(t.id);
    return (null == e ? void 0 : e.ringing.includes(l.id)) === !0
  });
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(Q.default, {
      enabled: !0,
      centerButton: !0,
      join: !0,
      color: "green",
      channelLimitReached: u,
      channelLimit: d,
      channel: t,
      cameraUnavailable: n,
      hasPermission: a,
      onCameraUnavailable: h,
      className: eg.controlButton,
      iconClassName: eg.__invalid_joinIcon,
      onChange: c
    }), (0, s.jsx)(z.default, {
      centerButton: !0,
      color: "green",
      channel: t,
      className: o()(eg.controlButton, eg.__invalid_lastButton)
    }), m ? (0, s.jsx)(Y.default, {
      color: "red",
      channel: t,
      className: eg.controlButton
    }) : null]
  })
}
t.default = function(e) {
  let {
    channel: t,
    className: n,
    onDisconnectCall: a,
    exitFullScreen: l
  } = e, i = (0, f.useStateFromStores)([en.default], () => {
    let e = en.default.getCurrentUser();
    return d()(null != e, "CenterControlTray: currentUser cannot be undefined"), e
  }), {
    cameraUnavailable: r,
    enabled: u
  } = (0, es.default)(), c = (0, er.default)(t), {
    suppress: m,
    selfMute: p,
    mute: E
  } = (0, eo.default)(t), {
    canGoLive: g
  } = (0, f.useStateFromStoresObject)([ee.default], () => ({
    canGoLive: (0, F.default)(ee.default)
  })), _ = (0, D.default)(), A = (0, f.useStateFromStores)([P.default], () => null != P.default.getAwaitingRemoteSessionInfo()), v = null != _, N = (0, f.useStateFromStores)([et.default], () => {
    var e;
    return (null !== (e = null == _ ? void 0 : _.channelId) && void 0 !== e ? e : et.default.getVoiceChannelId()) === t.id
  }), x = (0, L.default)(t, !0), M = (0, f.useStateFromStores)([S.default], () => {
    let e = S.default.getSelfEmbeddedActivityForChannel(t.id);
    return null != e ? e.applicationId : null
  }), {
    reachedLimit: R,
    limit: b
  } = (0, ei.default)(t), {
    analyticsLocations: U
  } = (0, I.default)(T.default.VOICE_CONTROL_TRAY);
  if (!N) return (0, s.jsx)(I.AnalyticsLocationProvider, {
    value: U,
    children: (0, s.jsx)(eA, {
      channel: t,
      cameraUnavailable: r,
      hasCameraPermission: c,
      currentUser: i
    })
  });
  let w = el.can({
    permission: eE.Permissions.ADD_REACTIONS,
    user: i,
    context: t
  }) && !t.isPrivate() && !x;
  return (0, s.jsx)(I.AnalyticsLocationProvider, {
    value: U,
    children: (0, s.jsxs)(C.default, {
      section: eE.AnalyticsSections.VOICE_CONTROL_TRAY,
      children: [(0, s.jsx)("div", {
        className: eg.eventPromptsContainer,
        children: (0, s.jsx)(G.default, {
          channelId: t.id
        })
      }), (0, s.jsxs)("div", {
        className: o()(eg.wrapper, n),
        children: [!v && (0, s.jsx)(h.Popout, {
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, s.jsx)(W.default, {
              children: (0, s.jsx)(O.default, {
                onClose: t
              })
            })
          },
          position: "top",
          align: "center",
          animation: h.Popout.Animation.FADE,
          children: (e, t) => {
            let {
              onClick: n
            } = e, {
              isShown: a
            } = t;
            return (0, s.jsx)(Q.default, {
              centerButton: !0,
              hasPermission: c,
              className: eg.controlButton,
              enabled: u,
              cameraUnavailable: r,
              onChange: eS,
              onCameraUnavailable: ef.default,
              channelLimitReached: R,
              channelLimit: b,
              popoutOpen: a,
              onPopoutClick: n
            })
          }
        }), !v && (0, s.jsx)(eT, {
          channel: t
        }), !v && (0, s.jsx)(e_, {
          channel: t,
          currentUser: i,
          exitFullScreen: l,
          canGoLive: g,
          hasPermission: c
        }), (0, s.jsx)(h.Popout, {
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, s.jsx)(W.default, {
              children: (0, s.jsx)(y.default, {
                onClose: t,
                renderInputDevices: !0,
                renderOutputDevices: !0,
                renderInputModes: !0
              })
            })
          },
          align: "center",
          position: "top",
          animation: h.Popout.Animation.FADE,
          children: (e, t) => {
            let {
              onClick: n
            } = e, {
              isShown: a
            } = t;
            return (0, s.jsx)(X.default, {
              centerButton: !0,
              onPopoutClick: v ? null : n,
              className: eg.controlButton,
              selfMute: p,
              serverMute: E,
              suppress: m,
              popoutOpen: a,
              awaitingRemote: A,
              onClick: () => (0, j.default)(E, m)
            })
          }
        }), w && !v ? (0, s.jsx)("div", {
          className: eg.buttonContainer,
          children: (0, s.jsx)(ed.default, {
            channel: t
          })
        }) : null, (0, s.jsx)(eI, {
          connectedActivityApplicationId: M,
          currentUser: i,
          channel: t,
          onDisconnectCall: a
        })]
      })]
    })
  })
}