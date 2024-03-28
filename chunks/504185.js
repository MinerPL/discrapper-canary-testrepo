"use strict";
n.r(t), n.d(t, {
  default: function() {
    return er
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("392711"),
  o = n("442837"),
  u = n("433517"),
  d = n("481060"),
  c = n("570140"),
  f = n("393238"),
  h = n("40851"),
  m = n("100527"),
  p = n("906732"),
  E = n("358221"),
  C = n("414910"),
  g = n("909820"),
  S = n("493010"),
  _ = n("788983"),
  T = n("928518"),
  I = n("703656"),
  A = n("493754"),
  v = n("880831"),
  N = n("73563"),
  x = n("800965"),
  M = n("107169"),
  R = n("891551"),
  L = n("314897"),
  y = n("979696"),
  O = n("430824"),
  j = n("496675"),
  P = n("944486"),
  D = n("358085"),
  b = n("792125"),
  U = n("998502"),
  F = n("922482"),
  w = n("431328"),
  k = n("501655"),
  H = n("427679"),
  B = n("513449"),
  G = n("153349"),
  V = n("901434"),
  W = n("302270"),
  Y = n("308177"),
  z = n("700483"),
  Z = n("686468"),
  K = n("801405"),
  X = n("903108"),
  q = n("981631"),
  Q = n("354459"),
  J = n("689938"),
  $ = n("700202");
let ee = "HasBeenInStageChannel",
  et = (e, t) => () => {
    let n = e.getGuildId();
    null != n && null != t && (0, I.transitionToGuild)(n, t), _.openChannelCallPopout(e)
  },
  en = () => {
    c.default.wait(() => _.close(q.PopoutWindowKeys.CHANNEL_CALL_POPOUT))
  },
  ea = e => {
    _.setAlwaysOnTop(q.PopoutWindowKeys.CHANNEL_CALL_POPOUT, e)
  };

function el(e) {
  let {
    channel: t,
    appContext: n,
    popoutOpen: s,
    popoutWindow: i,
    popoutWindowAlwaysOnTop: r,
    selectedParticipant: u
  } = e, d = t.getGuildId(), c = (0, o.useStateFromStores)([P.default], () => P.default.getMostRecentSelectedTextChannelId(d), [d]), f = L.default.getId(), h = !(0, o.useStateFromStores)([E.default], () => E.default.isFullscreenInContext(n)) && (!D.isPlatformEmbedded || D.isPlatformEmbedded && U.default.supportsFeature(q.NativeFeatures.POPOUT_WINDOWS)), m = null != u && u.type !== Q.ParticipantTypes.ACTIVITY && u.user.id !== f, p = l.useMemo(() => {
    var e;
    return null !== (e = null == i ? void 0 : i.window) && void 0 !== e ? e : window
  }, [i]), g = (0, K.default)({
    channel: t,
    appContext: n,
    popoutOpen: s,
    popoutWindow: i,
    currentWindow: p
  }), S = n === q.AppContext.POPOUT && D.isPlatformEmbedded && U.default.supportsFeature(q.NativeFeatures.POPOUT_WINDOWS);
  return (0, a.jsxs)(a.Fragment, {
    children: [m ? (0, a.jsx)(R.default, {
      context: (0, C.default)(u.type),
      userId: u.user.id,
      currentWindow: p,
      sliderClassName: $.volumeSlider
    }) : null, S ? (0, a.jsx)(M.default, {
      className: $.rightTrayIcon,
      popoutWindowAlwaysOnTop: r,
      onToggleStayOnTop: ea
    }) : null, h ? (0, a.jsx)(x.default, {
      className: $.rightTrayIcon,
      popoutOpen: s,
      onOpenPopout: et(t, c),
      onClosePopout: en
    }) : null, g]
  })
}

function es(e) {
  let {
    channel: t
  } = e, n = (0, h.useAppContext)(), l = (0, o.useStateFromStores)([j.default], () => j.default.can(q.Permissions.CREATE_INSTANT_INVITE, t)), s = (0, o.useStateFromStores)([O.default], () => O.default.getGuild(t.guild_id)), i = (0, o.useStateFromStores)([H.default], () => H.default.getStageInstanceByChannel(t.id)), r = l || (null == i ? void 0 : i.invite_code) != null;
  return null != s && r ? (0, a.jsx)(A.default, {
    channel: t,
    appContext: n,
    className: $.__invalid_leftTrayIcon,
    analyticsLocation: q.AnalyticsPages.GUILD_CHANNEL
  }) : null
}

function ei(e) {
  let t, {
      channel: n,
      toggleRequestToSpeakSidebar: s,
      showRequestToSpeakSidebar: u,
      popoutWindow: d,
      popoutWindowAlwaysOnTop: c,
      popoutOpen: f,
      chatOpen: m
    } = e,
    p = (0, h.useAppContext)(),
    C = (0, o.useStateFromStores)([P.default], () => P.default.getVoiceChannelId() === n.id, [n.id]),
    S = (0, o.useStateFromStores)([j.default], () => j.default.can(q.Permissions.CONNECT, n)),
    _ = (0, w.useStageParticipants)(n.id, k.StageChannelParticipantNamedIndex.SPEAKER),
    T = (0, o.useStateFromStores)([E.default], () => E.default.getSelectedParticipant(n.id)),
    I = f && p !== q.AppContext.POPOUT,
    [A, x] = l.useState(0),
    {
      isOnStartStageScreen: M
    } = (0, B.default)();
  (0, B.useUpdateIsOnStartStageScreenEffect)(n);
  let R = (0, o.useStateFromStores)([y.default], () => y.default.getToastsEnabled(n.id)),
    L = (0, X.default)(n) ? null != T ? "84px" : "124px" : null != T ? "0px" : "48px";
  return t = M ? (0, a.jsx)(Z.default, {
    channel: n,
    onContinueClick: () => {
      (0, B.setIsOnStartStageScreen)(!1), !C && (0, F.connectToStage)(n)
    }
  }) : C ? (0, a.jsx)(Y.default, {
    channel: n,
    onScroll: e => {
      let {
        scrollTop: t
      } = e.target;
      (0, r.debounce)(() => x(t), 1e3, {
        leading: !0
      })()
    }
  }) : (0, a.jsx)(V.default, {
    participants: _,
    channel: n,
    hasConnectPermission: S
  }), (0, a.jsx)(N.default, {
    style: {
      height: "calc(100% - ".concat(L, ")"),
      paddingTop: L
    },
    disableGradients: 0 === A && N.DisableGradient.TOP,
    renderBottomLeft: () => (0, a.jsx)(es, {
      channel: n
    }),
    renderBottomCenter: () => C ? (0, a.jsx)(z.default, {
      channel: n,
      isOnStartStageScreen: M
    }) : null,
    renderBottomRight: () => C ? (0, a.jsx)(el, {
      channel: n,
      appContext: p,
      popoutOpen: f,
      popoutWindow: d,
      popoutWindowAlwaysOnTop: c,
      selectedParticipant: T
    }) : null,
    renderHeader: () => (0, a.jsx)(W.default, {
      inPopout: p === q.AppContext.POPOUT,
      toggleRequestToSpeakSidebar: s,
      showRequestToSpeakSidebar: u,
      channel: n
    }),
    renderChatToasts: () => !R || m || I ? null : (0, a.jsx)(g.default, {
      children: (0, a.jsx)(v.default, {
        className: i()($.chatToasts, {
          [$.rtsSidebarOpen]: u
        }),
        channelId: n.id
      })
    }),
    onActive: () => {},
    onPreventIdle: () => {},
    onAllowIdle: () => {},
    onForceIdle: () => {},
    screenMessage: I ? {
      mainText: J.default.Messages.POPOUT_PLAYER_OPENED
    } : null,
    idle: !1,
    children: !I && t
  })
}

function er(e) {
  let {
    channel: t
  } = e, [s, r] = l.useState(!1), c = l.useCallback(() => {
    r(!s)
  }, [s, r]), {
    popoutWindow: C,
    popoutWindowAlwaysOnTop: _
  } = (0, o.useStateFromStoresObject)([T.default], () => ({
    popoutWindow: T.default.getWindow(q.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
    popoutWindowAlwaysOnTop: T.default.getIsAlwaysOnTop(q.PopoutWindowKeys.CHANNEL_CALL_POPOUT)
  })), I = null != C && !C.closed, {
    analyticsLocations: A
  } = (0, p.default)(m.default.STAGE_CHANNEL_CALL), v = (0, h.useAppContext)(), N = (0, o.useStateFromStores)([E.default], () => E.default.getChatOpen(t.id), [t.id]), x = (0, o.useStateFromStores)([O.default], () => O.default.getGuild(t.guild_id), [t.guild_id]);
  l.useEffect(() => {
    null == u.Storage.get(ee) && ((0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("37194")]).then(n.bind(n, "947422"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    }), u.Storage.set(ee, Date.now()))
  }, []);
  let {
    width: M = 0,
    ref: R
  } = (0, f.default)();
  return (0, a.jsx)(p.AnalyticsLocationProvider, {
    value: A,
    children: (0, a.jsxs)(g.ChannelCallChatLayerProvider, {
      children: [(0, a.jsxs)("div", {
        className: $.container,
        ref: R,
        children: [(0, a.jsx)("div", {
          className: i()($.callContainer, (0, b.getThemeClass)(q.ThemeTypes.DARK), {
            [$.sidebarVisible]: s,
            [$.sidebarOrChatVisible]: s || N
          }),
          children: (0, a.jsx)(ei, {
            channel: t,
            toggleRequestToSpeakSidebar: c,
            showRequestToSpeakSidebar: s,
            popoutWindow: C,
            popoutWindowAlwaysOnTop: _,
            popoutOpen: I,
            chatOpen: N
          })
        }), s ? (0, a.jsx)(G.default, {
          channel: t,
          toggleRequestToSpeakSidebar: c,
          chatOpen: N
        }) : null, (0, a.jsx)("div", {
          className: $.channelChatWrapper,
          children: N && (!I || I && v === q.AppContext.POPOUT) && (0, a.jsx)(S.default, {
            channel: t,
            guild: x,
            maxWidth: M - 550
          })
        })]
      }), (0, a.jsx)(g.ChannelCallChatLayerContainer, {})]
    })
  })
}