"use strict";
n.r(t), n.d(t, {
  default: function() {
    return er
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  u = n("446674"),
  o = n("95410"),
  d = n("77078"),
  c = n("913144"),
  f = n("731898"),
  h = n("244201"),
  m = n("812204"),
  p = n("685665"),
  E = n("191145"),
  g = n("161306"),
  S = n("412090"),
  C = n("452027"),
  _ = n("383294"),
  I = n("292687"),
  T = n("393414"),
  v = n("486030"),
  x = n("115531"),
  N = n("620592"),
  A = n("336971"),
  M = n("555038"),
  R = n("634472"),
  j = n("271938"),
  L = n("712234"),
  y = n("305961"),
  O = n("957255"),
  P = n("18494"),
  D = n("773336"),
  b = n("439932"),
  U = n("50885"),
  w = n("716214"),
  F = n("567469"),
  V = n("998716"),
  k = n("834052"),
  H = n("534471"),
  G = n("145635"),
  B = n("277354"),
  W = n("100082"),
  Y = n("598050"),
  z = n("977026"),
  K = n("679703"),
  Z = n("92447"),
  X = n("96151"),
  Q = n("49111"),
  q = n("99795"),
  J = n("782340"),
  $ = n("716208");
let ee = "HasBeenInStageChannel",
  et = (e, t) => () => {
    let n = e.getGuildId();
    null != n && null != t && (0, T.transitionToGuild)(n, t), _.openChannelCallPopout(e)
  },
  en = () => {
    c.default.wait(() => _.close(Q.PopoutWindowKeys.CHANNEL_CALL_POPOUT))
  },
  ea = e => {
    _.setAlwaysOnTop(Q.PopoutWindowKeys.CHANNEL_CALL_POPOUT, e)
  };

function el(e) {
  let {
    channel: t,
    appContext: n,
    popoutOpen: s,
    popoutWindow: i,
    popoutWindowAlwaysOnTop: r,
    selectedParticipant: o
  } = e, d = t.getGuildId(), c = (0, u.useStateFromStores)([P.default], () => P.default.getMostRecentSelectedTextChannelId(d), [d]), f = j.default.getId(), h = (0, u.useStateFromStores)([E.default], () => E.default.isFullscreenInContext(n)), m = !h && (!D.isPlatformEmbedded || D.isPlatformEmbedded && U.default.supportsFeature(Q.NativeFeatures.POPOUT_WINDOWS)), p = null != o && o.type !== q.ParticipantTypes.ACTIVITY && o.user.id !== f, S = l.useMemo(() => {
    var e;
    return null !== (e = null == i ? void 0 : i.window) && void 0 !== e ? e : window
  }, [i]), C = (0, Z.default)({
    channel: t,
    appContext: n,
    popoutOpen: s,
    popoutWindow: i,
    currentWindow: S
  }), _ = n === Q.AppContext.POPOUT && D.isPlatformEmbedded && U.default.supportsFeature(Q.NativeFeatures.POPOUT_WINDOWS);
  return (0, a.jsxs)(a.Fragment, {
    children: [p ? (0, a.jsx)(R.default, {
      context: (0, g.default)(o.type),
      userId: o.user.id,
      currentWindow: S,
      sliderClassName: $.volumeSlider
    }) : null, _ ? (0, a.jsx)(M.default, {
      className: $.rightTrayIcon,
      popoutWindowAlwaysOnTop: r,
      onToggleStayOnTop: ea
    }) : null, m ? (0, a.jsx)(A.default, {
      className: $.rightTrayIcon,
      popoutOpen: s,
      onOpenPopout: et(t, c),
      onClosePopout: en
    }) : null, C]
  })
}

function es(e) {
  let {
    channel: t
  } = e, n = (0, h.useAppContext)(), l = (0, u.useStateFromStores)([O.default], () => O.default.can(Q.Permissions.CREATE_INSTANT_INVITE, t)), s = (0, u.useStateFromStores)([y.default], () => y.default.getGuild(t.guild_id)), i = (0, u.useStateFromStores)([k.default], () => k.default.getStageInstanceByChannel(t.id)), r = l || (null == i ? void 0 : i.invite_code) != null;
  return null != s && r ? (0, a.jsx)(v.default, {
    channel: t,
    appContext: n,
    className: $.leftTrayIcon,
    analyticsLocation: Q.AnalyticsPages.GUILD_CHANNEL
  }) : null
}

function ei(e) {
  let t, {
      channel: n,
      toggleRequestToSpeakSidebar: s,
      showRequestToSpeakSidebar: o,
      popoutWindow: d,
      popoutWindowAlwaysOnTop: c,
      popoutOpen: f,
      chatOpen: m
    } = e,
    p = (0, h.useAppContext)(),
    g = (0, u.useStateFromStores)([P.default], () => P.default.getVoiceChannelId() === n.id, [n.id]),
    C = (0, u.useStateFromStores)([O.default], () => O.default.can(Q.Permissions.CONNECT, n)),
    _ = (0, F.useStageParticipants)(n.id, V.StageChannelParticipantNamedIndex.SPEAKER),
    I = (0, u.useStateFromStores)([E.default], () => E.default.getSelectedParticipant(n.id)),
    T = f && p !== Q.AppContext.POPOUT,
    [v, A] = l.useState(0),
    {
      isOnStartStageScreen: M
    } = (0, H.default)();
  (0, H.useUpdateIsOnStartStageScreenEffect)(n);
  let R = (0, u.useStateFromStores)([L.default], () => L.default.getToastsEnabled(n.id)),
    j = (0, X.default)(n),
    y = j ? null != I ? "84px" : "124px" : null != I ? "0px" : "48px";
  return t = M ? (0, a.jsx)(K.default, {
    channel: n,
    onContinueClick: () => {
      (0, H.setIsOnStartStageScreen)(!1), !g && (0, w.connectToStage)(n)
    }
  }) : g ? (0, a.jsx)(Y.default, {
    channel: n,
    onScroll: e => {
      let {
        scrollTop: t
      } = e.target;
      (0, r.debounce)(() => A(t), 1e3, {
        leading: !0
      })()
    }
  }) : (0, a.jsx)(B.default, {
    participants: _,
    channel: n,
    hasConnectPermission: C
  }), (0, a.jsx)(N.default, {
    style: {
      height: "calc(100% - ".concat(y, ")"),
      paddingTop: y
    },
    disableGradients: 0 === v && N.DisableGradient.TOP,
    renderBottomLeft: () => (0, a.jsx)(es, {
      channel: n
    }),
    renderBottomCenter: () => g ? (0, a.jsx)(z.default, {
      channel: n,
      isOnStartStageScreen: M
    }) : null,
    renderBottomRight: () => g ? (0, a.jsx)(el, {
      channel: n,
      appContext: p,
      popoutOpen: f,
      popoutWindow: d,
      popoutWindowAlwaysOnTop: c,
      selectedParticipant: I
    }) : null,
    renderHeader: () => (0, a.jsx)(W.default, {
      inPopout: p === Q.AppContext.POPOUT,
      toggleRequestToSpeakSidebar: s,
      showRequestToSpeakSidebar: o,
      channel: n
    }),
    renderChatToasts: () => !R || m || T ? null : (0, a.jsx)(S.default, {
      children: (0, a.jsx)(x.default, {
        className: i($.chatToasts, {
          [$.rtsSidebarOpen]: o
        }),
        channelId: n.id
      })
    }),
    onActive: () => {},
    onPreventIdle: () => {},
    onAllowIdle: () => {},
    onForceIdle: () => {},
    screenMessage: T ? {
      mainText: J.default.Messages.POPOUT_PLAYER_OPENED
    } : null,
    idle: !1,
    children: !T && t
  })
}

function er(e) {
  let {
    channel: t
  } = e, [s, r] = l.useState(!1), c = l.useCallback(() => {
    r(!s)
  }, [s, r]), {
    popoutWindow: g,
    popoutWindowAlwaysOnTop: _
  } = (0, u.useStateFromStoresObject)([I.default], () => ({
    popoutWindow: I.default.getWindow(Q.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
    popoutWindowAlwaysOnTop: I.default.getIsAlwaysOnTop(Q.PopoutWindowKeys.CHANNEL_CALL_POPOUT)
  })), T = null != g && !g.closed, {
    analyticsLocations: v
  } = (0, p.default)(m.default.STAGE_CHANNEL_CALL), x = (0, h.useAppContext)(), N = (0, u.useStateFromStores)([E.default], () => E.default.getChatOpen(t.id), [t.id]), A = (0, u.useStateFromStores)([y.default], () => y.default.getGuild(t.guild_id), [t.guild_id]);
  l.useEffect(() => {
    null == o.Storage.get(ee) && ((0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("108838").then(n.bind(n, "108838"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    }), o.Storage.set(ee, Date.now()))
  }, []);
  let {
    width: M = 0,
    ref: R
  } = (0, f.default)();
  return (0, a.jsx)(p.AnalyticsLocationProvider, {
    value: v,
    children: (0, a.jsxs)(S.ChannelCallChatLayerProvider, {
      children: [(0, a.jsxs)("div", {
        className: $.container,
        ref: R,
        children: [(0, a.jsx)("div", {
          className: i($.callContainer, (0, b.getThemeClass)(Q.ThemeTypes.DARK), {
            [$.sidebarVisible]: s,
            [$.sidebarOrChatVisible]: s || N
          }),
          children: (0, a.jsx)(ei, {
            channel: t,
            toggleRequestToSpeakSidebar: c,
            showRequestToSpeakSidebar: s,
            popoutWindow: g,
            popoutWindowAlwaysOnTop: _,
            popoutOpen: T,
            chatOpen: N
          })
        }), s ? (0, a.jsx)(G.default, {
          channel: t,
          toggleRequestToSpeakSidebar: c,
          chatOpen: N
        }) : null, (0, a.jsx)("div", {
          className: $.channelChatWrapper,
          children: N && (!T || T && x === Q.AppContext.POPOUT) && (0, a.jsx)(C.default, {
            channel: t,
            guild: A,
            maxWidth: M - 550
          })
        })]
      }), (0, a.jsx)(S.ChannelCallChatLayerContainer, {})]
    })
  })
}