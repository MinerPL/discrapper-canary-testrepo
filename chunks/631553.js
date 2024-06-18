"use strict";
let i;
n.d(t, {
  Z: function() {
    return eE
  }
}), n(653041);
var s = n(735250),
  l = n(470079),
  a = n(120356),
  o = n.n(a),
  r = n(921738),
  d = n.n(r),
  c = n(954955),
  u = n.n(c),
  h = n(498607),
  p = n.n(h),
  f = n(442837),
  E = n(481060),
  Z = n(668781),
  g = n(239091),
  m = n(13245),
  _ = n(425493),
  I = n(951483),
  S = n(714338),
  v = n(185666),
  C = n(100527),
  x = n(906732),
  N = n(770471),
  T = n(757454),
  O = n(594190),
  A = n(74299),
  y = n(989941),
  R = n(377400),
  M = n(329557),
  L = n(199902),
  D = n(314897),
  P = n(592125),
  j = n(430824),
  b = n(131951),
  w = n(944486),
  k = n(618541),
  V = n(449224),
  U = n(574254),
  B = n(556296),
  G = n(237997),
  H = n(451478),
  z = n(285952);
n(810090);
var Y = n(70956),
  W = n(358085),
  F = n(998502),
  K = n(13140),
  X = n(145597),
  Q = n(658785),
  J = n(681603),
  q = n(358446),
  $ = n(348733),
  ee = n(312178),
  et = n(708383),
  en = n(923532),
  ei = n(107200),
  es = n(987650),
  el = n(981631),
  ea = n(689938),
  eo = n(727087);

function er(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
f.ZP.PersistedStore.disableWrites = __OVERLAY__, f.ZP.initialize();
let ed = null;

function ec(e) {
  e.preventDefault()
}

function eu(e) {
  (0, g.jW)(e, async () => {
    let {
      default: e
    } = await n.e("92780").then(n.bind(n, 930381));
    return t => (0, s.jsx)(e, {
      ...t
    })
  })
}
W.isPlatformEmbedded;
let eh = e => {
    let {
      keybind: t,
      onClick: n,
      isPreviewingInGame: i,
      locked: l
    } = e, a = l ? E.Clickable : "div";
    return (0, s.jsx)(a, {
      className: o()(eo.overlayBackground, {
        [eo.overlayActive]: !l,
        [eo.overlayLocked]: l,
        [eo.previewMode]: !l && i
      }),
      onMouseDown: e => {
        let {
          currentTarget: t,
          target: i,
          button: s
        } = e;
        s === el.AeJ.PRIMARY && t === i && n()
      },
      onContextMenu: eu,
      children: l ? null : (0, s.jsx)("div", {
        className: eo.closeContainer,
        children: (0, s.jsx)(_.Z, {
          variant: _.Z.Variants.BOLD,
          keybind: t,
          closeAction: n
        })
      })
    })
  },
  ep = e => {
    let {
      keyCode: t,
      shiftKey: n,
      metaKey: i,
      altKey: s,
      ctrlKey: l
    } = e;
    return {
      keyCode: t,
      shiftKey: n,
      metaKey: i,
      altKey: s,
      ctrlKey: l
    }
  };
class ef extends l.Component {
  handleLock() {
    !(0, E.hasAnyModalOpen)() && !U.Z.isOpen() && m.Z.setLocked(!0, (0, X.QF)())
  }
  handleDeactivate() {
    m.Z.deactivateAllRegions()
  }
  componentDidMount() {
    m.Z.startSession(), R.Z.initialize(), v.Z.initialize(), M.Z.initialize()
  }
  componentDidUpdate(e) {
    let {
      initialized: t
    } = this.props;
    if (!!t) {
      if (t && !e.initialized) {
        this.initialSetup();
        return
      }
      if (!e.locked && this.props.locked) {
        if (window.addEventListener("contextmenu", ec, !1), null != ed) {
          let e = Date.now() - ed;
          m.Z.track(el.rMx.OVERLAY_LOCKED, {
            unlocked_duration: e
          }), ed = null
        }
        S.Z.disable(), this.activeKeyEventShapes = [], G.Z.isPinned(el.Odu.TEXT) && (S.Z.setLayout(I.Xq), S.Z.enable())
      } else e.locked && !this.props.locked && (window.removeEventListener("contextmenu", ec, !1), null == ed && (ed = Date.now(), m.Z.track(el.rMx.OVERLAY_UNLOCKED)), S.Z.disable(), this.activeKeyEventShapes = [], S.Z.setLayout(I.Sr), S.Z.enable());
      e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, K.d2)(this.props.keybindKeyCodes))
    }
  }
  initialSetup() {
    let {
      connectedToVoice: e,
      locked: t,
      canGoLive: n,
      isStreaming: i,
      voiceGuild: s,
      voiceChannelId: l,
      game: a,
      canStartBroadcast: o,
      canBroadcast: r,
      showKeybindNotification: d,
      dismissKeybindNotification: c
    } = this.props;
    m.Z.track(el.rMx.OVERLAY_INITIALIZED, {
      voice_widget_connected: e,
      text_widget_connected: G.Z.isPinned(el.Odu.TEXT)
    }), Q.Z.trackExposure({
      location: "Overlay"
    });
    let u = n && !i && null != a,
      h = e && null != s && null != l,
      p = {
        type: es.nc.WELCOME
      };
    if (d ? p = {
        type: es.nc.KEYBIND_INDICATORS,
        markAsDismissed: c
      } : u && !e && o ? (N.Z.trackExposure({
        location: "overlay_notification"
      }), r && (p = {
        type: es.nc.BROADCAST,
        game: a
      })) : u && h ? p = {
        type: es.nc.GO_LIVE_VOICE,
        game: a,
        voiceChannelId: l,
        voiceGuild: s
      } : u && (p = {
        type: es.nc.GO_LIVE_NON_VOICE,
        game: a
      }), m.Z.overlayMounted(p), window.addEventListener("resize", this.handleWindowResize), t && window.addEventListener("contextmenu", ec, !1), W.isPlatformEmbedded) {
      let e = F.ZP.requireModule("discord_overlay2");
      void 0 !== e.setPerfInfoCallback && (e.setPerfInfoCallback(e => {
        m.Z.track(el.rMx.OVERLAY_PERF_INFO, e)
      }), e.broadcastCommand({
        message: "set_perf_report_interval",
        interval: 15 * Y.Z.Millis.MINUTE
      })), F.ZP.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
        G.Z.getDisableExternalLinkAlert() || t === k.Z.getLastURL() ? F.ZP.send("OPEN_EXTERNAL_URL", t) : Z.Z.show({
          title: ea.Z.Messages.OVERLAY_LINK_ALERT_TITLE,
          body: ea.Z.Messages.OVERLAY_LINK_ALERT_BODY,
          secondaryConfirmText: ea.Z.Messages.OVERLAY_LINK_ALERT_SECONDARY,
          confirmText: ea.Z.Messages.CONTINUE,
          cancelText: ea.Z.Messages.CANCEL,
          onConfirmSecondary: () => {
            m.Z.disableExternalLinkAlert(), F.ZP.send("OPEN_EXTERNAL_URL", t)
          },
          onConfirm: () => F.ZP.send("OPEN_EXTERNAL_URL", t)
        })
      })
    }
    window.addEventListener("keydown", this.onKeyDownGlobal, !0), window.addEventListener("keyup", this.onKeyUpGlobal, !0)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize), window.removeEventListener("keydown", this.onKeyDownGlobal, !0), window.removeEventListener("keyup", this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener("contextmenu", ec, !1), R.Z.terminate(), v.Z.terminate(), M.Z.terminate()
  }
  renderInvalidSizeMessage() {
    return (0, s.jsx)(z.Z, {
      justify: z.Z.Justify.CENTER,
      align: z.Z.Align.CENTER,
      className: eo.invalidContainer,
      children: (0, s.jsx)("div", {
        className: eo.inactiveContainer,
        children: ea.Z.Messages.OVERLAY_TOO_SMALL.format(X.FW)
      })
    })
  }
  render() {
    let {
      locked: e,
      keybind: t,
      incompatibleApp: n,
      initialized: l,
      isPreviewingInGame: a,
      activeRegions: r,
      windowSize: d,
      voiceGuild: c,
      voiceChannelId: u
    } = this.props, {
      width: h,
      height: p
    } = d;
    if (0 === h || 0 === p || n || !l) return null;
    let f = e || a,
      E = D.default.getId();
    return (0, s.jsxs)("div", {
      className: eo.overlay,
      children: [(0, s.jsx)(et.Z, {}), a && (0, s.jsx)("header", {
        className: eo.previewingInGameHeader,
        children: ea.Z.Messages.OVERLAY_IN_GAME_PREVIEW_HEADER
      }), i, (!e || r.has(el.O0n.TEXT_WIDGET)) && (0, s.jsx)(eh, {
        locked: e,
        keybind: t,
        onClick: e ? this.handleDeactivate : this.handleLock,
        isPreviewingInGame: a
      }), (0, X.Te)(d) ? (0, s.jsx)(ee.Z, {
        className: o()({
          [eo.layoutLocked]: e,
          [eo.layoutUnlocked]: !e
        })
      }) : e ? null : this.renderInvalidSizeMessage(), (0, s.jsx)(ei.Z, {}), null != c && null != u && (0, s.jsx)(en.Z, {
        streamerId: E,
        guildId: c.id,
        channelId: u
      }), (0, s.jsx)($.Z, {
        locked: f,
        keybind: t
      }), (0, s.jsx)(J.Z, {})]
    })
  }
  constructor(e) {
    super(e), er(this, "handleWindowResize", () => {
      (0, X.W2)() ? this.forceUpdate(): u()(() => {
        this.forceUpdate()
      }, 500)
    }), er(this, "activeKeyEventShapes", []), er(this, "lockEventShape", (0, K.d2)(this.props.keybindKeyCodes)), er(this, "getActiveKeyEventIndex", e => this.activeKeyEventShapes.findIndex(t => p()(t, e))), er(this, "onKeyDownGlobal", e => {
      let t = ep(e),
        n = this.getActiveKeyEventIndex(t) > -1,
        i = [16, 17, 18, 91].includes(e.keyCode);
      !n && !i && this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every(e => this.activeKeyEventShapes.some(t => p()(e, t))) && (e.preventDefault(), e.stopPropagation());
      let {
        locked: s,
        activeRegions: l
      } = this.props;
      t.keyCode === d().codes.esc && s && l.has(el.O0n.TEXT_WIDGET) && m.Z.deactivateAllRegions()
    }), er(this, "onKeyUpGlobal", e => {
      let t = ep(e),
        n = this.getActiveKeyEventIndex(t);
      n > -1 && this.activeKeyEventShapes.splice(n, 1)
    });
    let t = e.locked && G.Z.isPinned(el.Odu.TEXT);
    S.Z.setLayout(t ? I.Xq : I.Sr), t && S.Z.enable()
  }
}

function eE() {
  let {
    locked: e,
    initialized: t,
    incompatibleApp: n,
    activeRegions: i,
    isPreviewingInGame: l
  } = (0, f.cj)([G.Z], () => ({
    locked: G.Z.isUILocked((0, X.QF)()),
    initialized: G.Z.initialized,
    incompatibleApp: G.Z.incompatibleApp,
    activeRegions: G.Z.getActiveRegions(),
    isPreviewingInGame: G.Z.isPreviewingInGame()
  })), a = (0, f.e7)([H.Z], () => H.Z.windowSize()), o = (0, f.e7)([B.Z], () => B.Z.getOverlayKeybind()), r = (0, f.e7)([w.Z], () => w.Z.getVoiceChannelId()), d = (0, f.e7)([P.Z], () => P.Z.getChannel(r)), c = (0, f.e7)([j.Z], () => null != d ? j.Z.getGuild(d.guild_id) : null), u = (0, f.e7)([O.ZP, V.Z], () => (0, y.Z)(O.ZP, V.Z)), h = (0, f.e7)([b.Z], () => (0, A.Z)(b.Z)), {
    canBroadcast: p
  } = N.Z.useExperiment({
    location: "overlay"
  }, {
    autoTrackExposure: !1
  }), Z = (0, T.Z)() && null != u, g = (0, f.e7)([L.Z], () => null != L.Z.getCurrentUserActiveStream()), {
    analyticsLocations: m
  } = (0, x.ZP)(C.Z.OVERLAY), {
    showKeybindIndicators: _,
    dismissKeybindNotification: I
  } = (0, q.K)();
  return (0, s.jsx)(x.Gt, {
    value: m,
    children: (0, s.jsx)(E.RedesignIconContextProvider, {
      children: (0, s.jsx)(ef, {
        locked: e,
        initialized: t,
        incompatibleApp: n,
        activeRegions: i,
        isPreviewingInGame: l,
        windowSize: a,
        keybind: null != o ? (0, K.BB)(o.shortcut, !0) : "???",
        keybindKeyCodes: null != o ? o.shortcut : [],
        connectedToVoice: null != r,
        voiceChannelId: null != d ? d.id : null,
        voiceGuild: c,
        game: u,
        canGoLive: h,
        isStreaming: g,
        canBroadcast: p,
        canStartBroadcast: Z,
        showKeybindNotification: _,
        dismissKeybindNotification: I
      })
    })
  })
}