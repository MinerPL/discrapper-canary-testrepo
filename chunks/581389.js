"use strict";
n.r(t), n.d(t, {
  handleToggleVideo: function() {
    return eC
  },
  GoLiveButton: function() {
    return e_
  },
  default: function() {
    return ex
  }
}), n("222007");
var a, l, s = n("37983"),
  i = n("884691"),
  r = n("414456"),
  u = n.n(r),
  o = n("627445"),
  d = n.n(o),
  c = n("146606"),
  f = n("446674"),
  h = n("77078"),
  m = n("629109"),
  p = n("987317"),
  E = n("990766"),
  g = n("901582"),
  S = n("244201"),
  C = n("191225"),
  _ = n("372610"),
  I = n("812204"),
  T = n("685665"),
  v = n("713726"),
  x = n("705565"),
  N = n("754493"),
  A = n("234755"),
  M = n("858944"),
  R = n("191145"),
  j = n("598785"),
  L = n("266392"),
  y = n("458685"),
  O = n("338677"),
  P = n("76393"),
  D = n("261552"),
  b = n("161454"),
  U = n("374014"),
  w = n("479788"),
  F = n("375202"),
  V = n("16916"),
  k = n("534222"),
  H = n("147257"),
  B = n("109526"),
  G = n("550410"),
  W = n("124824"),
  Y = n("213943"),
  z = n("742683"),
  K = n("576242"),
  Z = n("54727"),
  X = n("785344"),
  Q = n("719874"),
  q = n("116439"),
  J = n("373469"),
  $ = n("950104"),
  ee = n("42887"),
  et = n("18494"),
  en = n("697218"),
  ea = n("703370"),
  el = n("991170"),
  es = n("999180"),
  ei = n("830210"),
  er = n("289180"),
  eu = n("244390"),
  eo = n("252234"),
  ed = n("696405"),
  ec = n("951691"),
  ef = n("19065"),
  eh = n("977347"),
  em = n("799808"),
  ep = n("727284"),
  eE = n("49111"),
  eg = n("99795"),
  eS = n("983127");

function eC(e, t) {
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
    disabled: u
  } = e, o = (0, S.useAppContext)(), d = (0, f.useStateFromStoresArray)([J.default], () => J.default.getAllActiveStreams()), c = d.find(e => e.ownerId === n.id), m = t.getGuildId(), p = i.useCallback(() => {
    if (null == a || a(), !l) return (0, eh.default)();
    (0, em.default)(m, t.id, eE.AnalyticsPages.GUILD_CHANNEL)
  }, [m, t.id, l, a]), g = (0, f.useStateFromStores)([b.default, ea.default], () => (0, F.default)(b.default, ea.default)), C = (0, N.default)(), _ = (0, x.default)() && null != g, I = () => {
    _ && (null == c ? (0, E.createBroadcastChannelOrStartStream)({
      channelId: t.id,
      pid: null == g ? void 0 : g.pid
    }) : (0, v.startBroadcastForStream)((0, U.encodeStreamKey)(c), null == g ? void 0 : g.pid))
  }, T = () => {
    if (_) {
      (0, M.openStartBroadcastConfirmModal)(I);
      return
    }
    if (l) {
      p();
      return
    }(0, eh.default)()
  }, A = () => {
    if (C) {
      (0, M.openStopBroadcastConfirmModal)(() => (0, V.default)(c));
      return
    }(0, V.default)(c)
  }, R = (e, t) => {
    let {
      onClick: n,
      ...a
    } = null != e ? e : {
      onClick: void 0
    }, l = null != c && !C;
    return (0, s.jsx)(Q.StreamButton, {
      ...a,
      centerButton: !0,
      disabled: u || !r,
      className: eS.controlButton,
      hasPermission: r,
      streamActive: null != c,
      isSelfStream: !0,
      onPopoutClick: l ? n : null,
      popoutOpen: t,
      shouldShowTooltip: !t,
      onClick: null != c ? A : T
    })
  };
  return C ? R() : (0, s.jsx)(G.default, {
    children: (0, s.jsx)(h.Popout, {
      renderPopout: e => {
        let {
          closePopout: a
        } = e;
        return (0, s.jsx)(W.default, {
          children: (0, s.jsx)(ec.default, {
            channel: t,
            currentUser: n,
            activeStreams: null != c ? [c] : [],
            handleGoLive: p,
            onClose: a,
            appContext: o
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
          children: R(n, a)
        })
      }
    })
  })
}

function eI(e) {
  let {
    channel: t
  } = e, n = t.getGuildId(), a = (0, _.default)(n, t.id);
  return a ? (0, s.jsx)("div", {
    className: eS.buttonContainer,
    children: (0, s.jsx)(eo.CenterControlTrayActivityButton, {
      channel: t
    })
  }) : null
}(l = a || (a = {})).ACTIVITY = "ACTIVITY", l.STREAM = "STREAM", l.CALL = "CALL", l.EVENT = "EVENT", l.BROADCAST = "BROADCAST";
let eT = i.memo(function(e) {
  let {
    connectedActivityApplicationId: t,
    currentUser: n,
    onDisconnectCall: a,
    channel: l
  } = e, r = (0, f.useStateFromStores)([R.default], () => R.default.getSelectedParticipant(l.id)), {
    reducedMotion: u
  } = i.useContext(h.AccessibilityPreferencesContext), [o, d] = i.useState(!1), m = null == r ? void 0 : r.id, g = (0, f.useStateFromStores)([J.default], () => null != m ? J.default.getActiveStreamForStreamKey(m) : null, [m]), S = (null == r ? void 0 : r.type) === eg.ParticipantTypes.STREAM && null != g && g.ownerId !== (null == n ? void 0 : n.id), C = (0, f.useStateFromStoresArray)([J.default], () => J.default.getAllActiveStreamsForChannel(l.id).filter(e => {
    let {
      ownerId: t
    } = e;
    return t !== (null == n ? void 0 : n.id)
  })), _ = (0, k.useActiveEvent)(l.id), I = (0, N.useIsBroadcastingInChannel)(l.id), T = i.useCallback(() => {
    if ((null == r ? void 0 : r.type) === eg.ParticipantTypes.ACTIVITY && r.id === t) return "ACTIVITY";
    if (S) return "STREAM";
    if (null != _) return "EVENT";
    return "CALL"
  }, [r, t, S, _]), [v, x] = i.useState(T()), M = (0, c.useSpring)({
    opacity: o ? .2 : 1,
    transform: o && !u.enabled ? "scale(0.7)" : "scale(1)",
    config: {
      mass: 2,
      tension: o ? 600 : 1e3,
      friction: 45,
      precision: .01,
      clamp: o
    },
    onRest: () => {
      x(T()), d(!1)
    }
  });
  i.useEffect(() => {
    let e = T();
    e !== v && d(!0)
  }, [v, T]);
  let j = i.useCallback(() => {
      if (null != g)(0, E.stopStream)((0, U.encodeStreamKey)(g));
      else
        for (let e of C)(0, E.stopStream)((0, U.encodeStreamKey)(e))
    }, [C, g]),
    L = (e, t) => {
      let i = {
        centerButton: !0,
        className: eS.controlButton,
        popoutOpen: e
      };
      switch (v) {
        case "ACTIVITY":
          if (null == r || null == n) return;
          return (0, s.jsx)(K.default, {
            ...i,
            applicationId: r.id,
            color: "red",
            channelId: l.id,
            onPopoutClick: C.length > 0 ? t : null
          });
        case "STREAM":
          return (0, s.jsx)(Q.StreamButton, {
            ...i,
            hasPermission: !0,
            streamActive: !0,
            color: "red",
            onClick: j,
            onPopoutClick: C.length > 1 ? t : null,
            isSelfStream: !1
          });
        case "CALL":
          return (0, s.jsx)(Z.default, {
            ...i,
            color: "red",
            onClick: () => null == a ? void 0 : a(),
            onPopoutClick: C.length > 0 ? t : null,
            channel: l
          });
        case "EVENT":
          return (0, s.jsx)(H.default, {
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
      return I ? (0, s.jsx)(A.default, {
        onClose: t
      }) : (0, s.jsx)(ec.default, {
        channel: l,
        currentUser: n,
        activeStreams: C,
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
        children: L(a, n)
      })
    }
  })
});

function ev(e) {
  let {
    channel: t,
    cameraUnavailable: n,
    hasCameraPermission: a,
    currentUser: l
  } = e, r = (0, S.useAppContext)(), {
    reachedLimit: o,
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
    children: [(0, s.jsx)(q.default, {
      enabled: !0,
      centerButton: !0,
      join: !0,
      color: "green",
      channelLimitReached: o,
      channelLimit: d,
      channel: t,
      cameraUnavailable: n,
      hasPermission: a,
      onCameraUnavailable: h,
      className: eS.controlButton,
      iconClassName: eS.joinIcon,
      onChange: c
    }), (0, s.jsx)(z.default, {
      centerButton: !0,
      color: "green",
      channel: t,
      className: u(eS.controlButton, eS.lastButton)
    }), m ? (0, s.jsx)(Y.default, {
      color: "red",
      channel: t,
      className: eS.controlButton
    }) : null]
  })
}
var ex = function(e) {
  let {
    channel: t,
    className: n,
    onDisconnectCall: a,
    exitFullScreen: l
  } = e, i = (0, f.useStateFromStores)([en.default], () => {
    let e = en.default.getCurrentUser();
    return d(null != e, "CenterControlTray: currentUser cannot be undefined"), e
  }), {
    cameraUnavailable: r,
    enabled: o
  } = (0, es.default)(), c = (0, er.default)(t), {
    suppress: m,
    selfMute: p,
    mute: E
  } = (0, eu.default)(t), {
    canGoLive: S
  } = (0, f.useStateFromStoresObject)([ee.default], () => ({
    canGoLive: (0, w.default)(ee.default)
  })), _ = (0, D.default)(), v = (0, f.useStateFromStores)([P.default], () => null != P.default.getAwaitingRemoteSessionInfo()), x = null != _, N = (0, f.useStateFromStores)([et.default], () => {
    var e;
    return (null !== (e = null == _ ? void 0 : _.channelId) && void 0 !== e ? e : et.default.getVoiceChannelId()) === t.id
  }), A = (0, j.default)(t, !0), M = (0, f.useStateFromStores)([C.default], () => {
    let e = C.default.getSelfEmbeddedActivityForChannel(t.id);
    return null != e ? e.applicationId : null
  }), {
    reachedLimit: R,
    limit: b
  } = (0, ei.default)(t), {
    AnalyticsLocationProvider: U
  } = (0, T.default)(I.default.VOICE_CONTROL_TRAY);
  if (!N) return (0, s.jsx)(U, {
    children: (0, s.jsx)(ev, {
      channel: t,
      cameraUnavailable: r,
      hasCameraPermission: c,
      currentUser: i
    })
  });
  let F = el.can({
    permission: eE.Permissions.ADD_REACTIONS,
    user: i,
    context: t
  }) && !t.isPrivate() && !A;
  return (0, s.jsx)(U, {
    children: (0, s.jsxs)(g.default, {
      section: eE.AnalyticsSections.VOICE_CONTROL_TRAY,
      children: [(0, s.jsx)("div", {
        className: eS.eventPromptsContainer,
        children: (0, s.jsx)(B.default, {
          channelId: t.id
        })
      }), (0, s.jsxs)("div", {
        className: u(eS.wrapper, n),
        children: [!x && (0, s.jsx)(h.Popout, {
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, s.jsx)(W.default, {
              children: (0, s.jsx)(y.default, {
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
            return (0, s.jsx)(q.default, {
              centerButton: !0,
              hasPermission: c,
              className: eS.controlButton,
              enabled: o,
              cameraUnavailable: r,
              onChange: eC,
              onCameraUnavailable: ef.default,
              channelLimitReached: R,
              channelLimit: b,
              popoutOpen: a,
              onPopoutClick: n
            })
          }
        }), !x && (0, s.jsx)(eI, {
          channel: t
        }), !x && (0, s.jsx)(e_, {
          channel: t,
          currentUser: i,
          exitFullScreen: l,
          canGoLive: S,
          hasPermission: c
        }), (0, s.jsx)(h.Popout, {
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, s.jsx)(W.default, {
              children: (0, s.jsx)(L.default, {
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
              onPopoutClick: x ? null : n,
              className: eS.controlButton,
              selfMute: p,
              serverMute: E,
              suppress: m,
              popoutOpen: a,
              awaitingRemote: v,
              onClick: () => (0, O.default)(E, m)
            })
          }
        }), F && !x ? (0, s.jsx)("div", {
          className: eS.buttonContainer,
          children: (0, s.jsx)(ed.default, {
            channel: t
          })
        }) : null, (0, s.jsx)(eT, {
          connectedActivityApplicationId: M,
          currentUser: i,
          channel: t,
          onDisconnectCall: a
        })]
      })]
    })
  })
}