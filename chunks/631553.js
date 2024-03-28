"use strict";
let i;
n.r(t), n.d(t, {
  default: function() {
    return eg
  }
}), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  o = n.n(s),
  r = n("921738"),
  d = n.n(r),
  u = n("954955"),
  c = n.n(u),
  f = n("498607"),
  h = n.n(f),
  p = n("442837"),
  g = n("481060"),
  m = n("668781"),
  E = n("239091"),
  S = n("13245"),
  v = n("425493"),
  y = n("951483"),
  I = n("714338"),
  T = n("185666"),
  N = n("100527"),
  O = n("906732"),
  _ = n("770471"),
  C = n("757454"),
  A = n("594190"),
  x = n("74299"),
  R = n("989941"),
  M = n("377400"),
  L = n("329557"),
  D = n("199902"),
  b = n("314897"),
  j = n("592125"),
  P = n("430824"),
  w = n("131951"),
  k = n("944486"),
  V = n("618541"),
  U = n("449224"),
  B = n("574254"),
  F = n("556296"),
  G = n("237997"),
  H = n("451478"),
  z = n("285952");
n("810090");
var W = n("70956"),
  Y = n("358085"),
  K = n("998502"),
  Z = n("13140"),
  X = n("145597"),
  J = n("658785"),
  q = n("681603"),
  Q = n("358446"),
  $ = n("348733"),
  ee = n("312178"),
  et = n("708383"),
  en = n("923532"),
  ei = n("107200"),
  ea = n("987650"),
  el = n("981631"),
  es = n("689938"),
  eo = n("925588");

function er(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
p.default.PersistedStore.disableWrites = __OVERLAY__, p.default.initialize();
let ed = null;

function eu(e) {
  e.preventDefault()
}

function ec(e) {
  (0, E.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await n.e("92780").then(n.bind(n, "930381"));
    return t => (0, a.jsx)(e, {
      ...t
    })
  })
}
let ef = e => {
    let {
      keybind: t,
      onClick: n,
      isPreviewingInGame: i,
      locked: l
    } = e, s = l ? g.Clickable : "div";
    return (0, a.jsx)(s, {
      className: o()(eo.overlayBackground, {
        [eo.overlayActive]: !l,
        [eo.overlayLocked]: l,
        [eo.previewMode]: !l && i
      }),
      onMouseDown: e => {
        let {
          currentTarget: t,
          target: i,
          button: a
        } = e;
        a === el.MouseButtons.PRIMARY && t === i && n()
      },
      onContextMenu: ec,
      children: l ? null : (0, a.jsx)("div", {
        className: eo.closeContainer,
        children: (0, a.jsx)(v.default, {
          variant: v.default.Variants.BOLD,
          keybind: t,
          closeAction: n
        })
      })
    })
  },
  eh = e => {
    let {
      keyCode: t,
      shiftKey: n,
      metaKey: i,
      altKey: a,
      ctrlKey: l
    } = e;
    return {
      keyCode: t,
      shiftKey: n,
      metaKey: i,
      altKey: a,
      ctrlKey: l
    }
  };
class ep extends l.Component {
  handleLock() {
    !(0, g.hasAnyModalOpen)() && !B.default.isOpen() && S.default.setLocked(!0, (0, X.getPID)())
  }
  handleDeactivate() {
    S.default.deactivateAllRegions()
  }
  componentDidMount() {
    S.default.startSession(), M.default.initialize(), T.default.initialize(), L.default.initialize()
  }
  componentDidUpdate(e) {
    let {
      initialized: t
    } = this.props;
    if (t) {
      if (t && !e.initialized) {
        this.initialSetup();
        return
      }
      if (!e.locked && this.props.locked) {
        if (window.addEventListener("contextmenu", eu, !1), null != ed) {
          let e = Date.now() - ed;
          S.default.track(el.AnalyticEvents.OVERLAY_LOCKED, {
            unlocked_duration: e
          }), ed = null
        }
        I.default.disable(), this.activeKeyEventShapes = [], G.default.isPinned(el.OverlayWidgets.TEXT) && (I.default.setLayout(y.OVERLAY_LOCKED_LAYOUT), I.default.enable())
      } else e.locked && !this.props.locked && (window.removeEventListener("contextmenu", eu, !1), null == ed && (ed = Date.now(), S.default.track(el.AnalyticEvents.OVERLAY_UNLOCKED)), I.default.disable(), this.activeKeyEventShapes = [], I.default.setLayout(y.OVERLAY_LAYOUT), I.default.enable());
      e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, Z.toBrowserEvents)(this.props.keybindKeyCodes))
    }
  }
  initialSetup() {
    let {
      connectedToVoice: e,
      locked: t,
      canGoLive: n,
      isStreaming: i,
      voiceGuild: a,
      voiceChannelId: l,
      game: s,
      canStartBroadcast: o,
      canBroadcast: r,
      showKeybindNotification: d,
      dismissKeybindNotification: u
    } = this.props;
    S.default.track(el.AnalyticEvents.OVERLAY_INITIALIZED, {
      voice_widget_connected: e,
      text_widget_connected: G.default.isPinned(el.OverlayWidgets.TEXT)
    }), J.default.trackExposure({
      location: "Overlay"
    });
    let c = n && !i && null != s,
      f = e && null != a && null != l,
      h = {
        type: ea.OverlayNudgeTypes.WELCOME
      };
    if (d ? h = {
        type: ea.OverlayNudgeTypes.KEYBIND_INDICATORS,
        markAsDismissed: u
      } : c && !e && o ? (_.default.trackExposure({
        location: "overlay_notification"
      }), r && (h = {
        type: ea.OverlayNudgeTypes.BROADCAST,
        game: s
      })) : c && f ? h = {
        type: ea.OverlayNudgeTypes.GO_LIVE_VOICE,
        game: s,
        voiceChannelId: l,
        voiceGuild: a
      } : c && (h = {
        type: ea.OverlayNudgeTypes.GO_LIVE_NON_VOICE,
        game: s
      }), S.default.overlayMounted(h), window.addEventListener("resize", this.handleWindowResize), t && window.addEventListener("contextmenu", eu, !1), Y.isPlatformEmbedded) {
      let e = K.default.requireModule("discord_overlay2");
      void 0 !== e.setPerfInfoCallback && (e.setPerfInfoCallback(e => {
        S.default.track(el.AnalyticEvents.OVERLAY_PERF_INFO, e)
      }), e.broadcastCommand({
        message: "set_perf_report_interval",
        interval: 15 * W.default.Millis.MINUTE
      })), K.default.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
        G.default.getDisableExternalLinkAlert() || t === V.default.getLastURL() ? K.default.send("OPEN_EXTERNAL_URL", t) : m.default.show({
          title: es.default.Messages.OVERLAY_LINK_ALERT_TITLE,
          body: es.default.Messages.OVERLAY_LINK_ALERT_BODY,
          secondaryConfirmText: es.default.Messages.OVERLAY_LINK_ALERT_SECONDARY,
          confirmText: es.default.Messages.CONTINUE,
          cancelText: es.default.Messages.CANCEL,
          onConfirmSecondary: () => {
            S.default.disableExternalLinkAlert(), K.default.send("OPEN_EXTERNAL_URL", t)
          },
          onConfirm: () => K.default.send("OPEN_EXTERNAL_URL", t)
        })
      })
    }
    window.addEventListener("keydown", this.onKeyDownGlobal, !0), window.addEventListener("keyup", this.onKeyUpGlobal, !0)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize), window.removeEventListener("keydown", this.onKeyDownGlobal, !0), window.removeEventListener("keyup", this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener("contextmenu", eu, !1), M.default.terminate(), T.default.terminate(), L.default.terminate()
  }
  renderInvalidSizeMessage() {
    return (0, a.jsx)(z.default, {
      justify: z.default.Justify.CENTER,
      align: z.default.Align.CENTER,
      className: eo.invalidContainer,
      children: (0, a.jsx)("div", {
        className: eo.inactiveContainer,
        children: es.default.Messages.OVERLAY_TOO_SMALL.format(X.OVERLAY_MIN_RESOLUTION)
      })
    })
  }
  render() {
    let {
      locked: e,
      keybind: t,
      incompatibleApp: n,
      initialized: l,
      isPreviewingInGame: s,
      activeRegions: r,
      windowSize: d,
      voiceGuild: u,
      voiceChannelId: c
    } = this.props, {
      width: f,
      height: h
    } = d;
    if (0 === f || 0 === h || n || !l) return null;
    let p = e || s,
      g = b.default.getId();
    return (0, a.jsxs)("div", {
      className: eo.overlay,
      children: [(0, a.jsx)(et.default, {}), s && (0, a.jsx)("header", {
        className: eo.previewingInGameHeader,
        children: es.default.Messages.OVERLAY_IN_GAME_PREVIEW_HEADER
      }), i, (!e || r.has(el.OverlayActiveRegions.TEXT_WIDGET)) && (0, a.jsx)(ef, {
        locked: e,
        keybind: t,
        onClick: e ? this.handleDeactivate : this.handleLock,
        isPreviewingInGame: s
      }), (0, X.validResolution)(d) ? (0, a.jsx)(ee.default, {
        className: o()({
          [eo.layoutLocked]: e,
          [eo.layoutUnlocked]: !e
        })
      }) : e ? null : this.renderInvalidSizeMessage(), (0, a.jsx)(ei.default, {}), null != u && null != c && (0, a.jsx)(en.default, {
        streamerId: g,
        guildId: u.id,
        channelId: c
      }), (0, a.jsx)($.default, {
        locked: p,
        keybind: t
      }), (0, a.jsx)(q.default, {})]
    })
  }
  constructor(e) {
    super(e), er(this, "handleWindowResize", () => {
      (0, X.isOutOfProcess)() ? this.forceUpdate(): c()(() => {
        this.forceUpdate()
      }, 500)
    }), er(this, "activeKeyEventShapes", []), er(this, "lockEventShape", (0, Z.toBrowserEvents)(this.props.keybindKeyCodes)), er(this, "getActiveKeyEventIndex", e => this.activeKeyEventShapes.findIndex(t => h()(t, e))), er(this, "onKeyDownGlobal", e => {
      let t = eh(e),
        n = this.getActiveKeyEventIndex(t) > -1,
        i = [16, 17, 18, 91].includes(e.keyCode);
      !n && !i && this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every(e => this.activeKeyEventShapes.some(t => h()(e, t))) && (e.preventDefault(), e.stopPropagation());
      let {
        locked: a,
        activeRegions: l
      } = this.props;
      t.keyCode === d().codes.esc && a && l.has(el.OverlayActiveRegions.TEXT_WIDGET) && S.default.deactivateAllRegions()
    }), er(this, "onKeyUpGlobal", e => {
      let t = eh(e),
        n = this.getActiveKeyEventIndex(t);
      n > -1 && this.activeKeyEventShapes.splice(n, 1)
    });
    let t = e.locked && G.default.isPinned(el.OverlayWidgets.TEXT);
    I.default.setLayout(t ? y.OVERLAY_LOCKED_LAYOUT : y.OVERLAY_LAYOUT), t && I.default.enable()
  }
}

function eg() {
  let {
    locked: e,
    initialized: t,
    incompatibleApp: n,
    activeRegions: i,
    isPreviewingInGame: l
  } = (0, p.useStateFromStoresObject)([G.default], () => ({
    locked: G.default.isUILocked((0, X.getPID)()),
    initialized: G.default.initialized,
    incompatibleApp: G.default.incompatibleApp,
    activeRegions: G.default.getActiveRegions(),
    isPreviewingInGame: G.default.isPreviewingInGame()
  })), s = (0, p.useStateFromStores)([H.default], () => H.default.windowSize()), o = (0, p.useStateFromStores)([F.default], () => F.default.getOverlayKeybind()), r = (0, p.useStateFromStores)([k.default], () => k.default.getVoiceChannelId()), d = (0, p.useStateFromStores)([j.default], () => j.default.getChannel(r)), u = (0, p.useStateFromStores)([P.default], () => null != d ? P.default.getGuild(d.guild_id) : null), c = (0, p.useStateFromStores)([A.default, U.default], () => (0, R.default)(A.default, U.default)), f = (0, p.useStateFromStores)([w.default], () => (0, x.default)(w.default)), {
    canBroadcast: h
  } = _.default.useExperiment({
    location: "overlay"
  }, {
    autoTrackExposure: !1
  }), m = (0, C.default)() && null != c, E = (0, p.useStateFromStores)([D.default], () => null != D.default.getCurrentUserActiveStream()), {
    analyticsLocations: S
  } = (0, O.default)(N.default.OVERLAY), {
    showKeybindIndicators: v,
    dismissKeybindNotification: y
  } = (0, Q.useGetKeybindNotification)();
  return (0, a.jsx)(O.AnalyticsLocationProvider, {
    value: S,
    children: (0, a.jsx)(g.RedesignIconContextProvider, {
      children: (0, a.jsx)(ep, {
        locked: e,
        initialized: t,
        incompatibleApp: n,
        activeRegions: i,
        isPreviewingInGame: l,
        windowSize: s,
        keybind: null != o ? (0, Z.toString)(o.shortcut, !0) : "???",
        keybindKeyCodes: null != o ? o.shortcut : [],
        connectedToVoice: null != r,
        voiceChannelId: null != d ? d.id : null,
        voiceGuild: u,
        game: c,
        canGoLive: f,
        isStreaming: E,
        canBroadcast: h,
        canStartBroadcast: m,
        showKeybindNotification: v,
        dismissKeybindNotification: y
      })
    })
  })
}