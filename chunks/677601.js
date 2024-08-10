n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(512722),
  o = n.n(r),
  c = n(442837),
  u = n(704215),
  d = n(846519),
  h = n(481060),
  p = n(570140),
  m = n(475179),
  _ = n(239091),
  f = n(287734),
  E = n(872810),
  g = n(153867),
  C = n(944543),
  I = n(410575),
  x = n(393238),
  T = n(110924),
  N = n(40851),
  v = n(115130),
  S = n(317381),
  Z = n(596040),
  A = n(296797),
  M = n(349619),
  b = n(100527),
  R = n(367907),
  j = n(906732),
  L = n(600164),
  P = n(211644),
  O = n(258609),
  y = n(446226),
  D = n(276598),
  k = n(569545),
  U = n(382182),
  w = n(788983),
  B = n(928518),
  H = n(703656),
  G = n(740492),
  V = n(793319),
  F = n(3861),
  W = n(493754),
  z = n(937995),
  Y = n(618158),
  K = n(880831),
  q = n(73563),
  X = n(751843),
  Q = n(616286),
  J = n(268353),
  $ = n(786915),
  ee = n(800965),
  et = n(107169),
  en = n(891551),
  ei = n(488785),
  ea = n(199902),
  es = n(314897),
  el = n(979696),
  er = n(523746),
  eo = n(430824),
  ec = n(496675),
  eu = n(306680),
  ed = n(944486),
  eh = n(594174),
  ep = n(979651),
  em = n(626135),
  e_ = n(934415),
  ef = n(585483),
  eE = n(358085),
  eg = n(792125),
  eC = n(998502),
  eI = n(228488),
  ex = n(358221),
  eT = n(414910),
  eN = n(887012),
  ev = n(909820),
  eS = n(493010),
  eZ = n(742603),
  eA = n(221888),
  eM = n(900211),
  eb = n(18759),
  eR = n(878752),
  ej = n(354459),
  eL = n(981631),
  eP = n(689938),
  eO = n(568336);

function ey(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let eD = {
[eL.AEg.NORMAL]: eO.normal,
[eL.AEg.MINIMUM]: eO.minimum,
[eL.AEg.NO_CHAT]: eO.noChat,
[eL.AEg.FULL_SCREEN]: eO.fullScreen
  },
  ek = {
[eL.IlC.POPOUT]: eO.popout,
[eL.IlC.APP]: null,
[eL.IlC.OVERLAY]: null
  };
class eU extends a.PureComponent {
  getRootNode() {
var e, t;
return (null !== (t = null === (e = this.props.popoutWindow) || void 0 === e ? void 0 : e.window) && void 0 !== t ? t : window).document.getElementById('app-mount');
  }
  componentDidMount() {
let {
  channel: e,
  layout: t
} = this.props;
this.currentDocument.addEventListener(eI.NO, this.handleFullScreenChange), em.default.track(eL.rMx.VIDEO_LAYOUT_TOGGLED, {
  video_layout: this.inPopout ? 'popout' : t,
  ...(0, R.AB)(e.id)
});
  }
  componentWillUnmount() {
this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(eI.NO, this.handleFullScreenChange), !(this.inPopout && (0, eE.isMac)()) && this.maybeLeaveFullScreen();
  }
  componentDidUpdate(e) {
let {
  participantsOpen: t,
  inCall: n,
  mode: i,
  layout: a
} = this.props, s = this.getRootNode();
if (null != s && e.mode === eL.WtW.VIDEO && i === eL.WtW.VOICE && (0, eI.rB)(s, this.currentDocument) && (0, eI.Pr)(s, this.currentDocument), e.participantsOpen !== t || a !== e.layout) {
  var l;
  null === (l = this._contentRef.current) || void 0 === l || l.triggerResize();
}
e.inCall && !n && this.inPopout && p.Z.wait(() => this.handleClosePopout());
  }
  get nativePopoutSupported() {
return eE.isPlatformEmbedded && eC.ZP.supportsFeature(eL.eRX.POPOUT_WINDOWS);
  }
  get popoutSupported() {
return !eE.isPlatformEmbedded || this.nativePopoutSupported;
  }
  get popoutOpen() {
let {
  popoutWindow: e
} = this.props;
return null != e && !e.closed;
  }
  get currentDocument() {
let {
  popoutWindow: e
} = this.props;
return null != e && this.popoutOpen && this.inPopout ? e.document : document;
  }
  get screenMessage() {
return this.popoutOpen && !this.inPopout && this.props.inCall ? {
  mainText: eP.Z.Messages.POPOUT_PLAYER_OPENED
} : null;
  }
  get paused() {
return this.popoutOpen && !this.inPopout;
  }
  get inPopout() {
return this.props.appContext === eL.IlC.POPOUT;
  }
  get viewProperties() {
let {
  layout: e,
  mode: t,
  channel: n,
  inCall: i
} = this.props, a = t === eL.WtW.VIDEO && i && !(this.popoutOpen && !this.inPopout), s = t === eL.WtW.VIDEO && i && this.popoutSupported, l = t !== eL.WtW.VOICE && n.isPrivate() && !this.inPopout && i, r = n.type === eL.d4z.GUILD_VOICE, o = e === eL.AEg.MINIMUM || e === eL.AEg.NORMAL, c = this.inPopout && this.nativePopoutSupported, u = {
  renderHeader: !0,
  useTheme: !1,
  useExternalHeader: o,
  canInvite: r,
  canPopout: s,
  canFullscreen: a,
  canSelectRegion: n.isPrivate() && !n.isBroadcastChannel(),
  canChangeLayout: l,
  canStayOnTop: c
};
if (!i)
  return {
    ...u,
    canFullscreen: a,
    useTheme: !0
  };
switch (e) {
  case eL.AEg.FULL_SCREEN:
    return {
      ...u,
      canPopout: !this.inPopout && this.popoutOpen && u.canPopout
    };
  case eL.AEg.MINIMUM:
    return {
      ...u,
      canPopout: !1,
        useTheme: !0
    };
  case eL.AEg.NO_CHAT:
  case eL.AEg.NORMAL:
    return {
      ...u
    };
}
  }
  renderContent(e) {
var t;
let {
  selectedParticipant: n,
  inCall: a,
  hasConnectPermission: s,
  mode: l,
  popoutWindow: r,
  participantsOpen: o,
  participants: c,
  filteredParticipants: u,
  participantsVersion: d,
  channel: h,
  guild: p,
  layout: m,
  forceShowControls: _,
  awaitingRemoteSessionInfo: f,
  currentChannelActivities: E
} = this.props, g = m === eL.AEg.MINIMUM, C = g || m === eL.AEg.NORMAL, I = a && l === eL.WtW.VIDEO, x = (null !== (t = null == E ? void 0 : E.length) && void 0 !== t ? t : 0) > 0 && h.isPrivate();
return this._lastIdleProps = e, (0, i.jsx)(q.Z, {
  renderHeader: this.renderHeader,
  renderBottomLeft: this.renderBottomLeft,
  renderBottomCenter: this.renderBottomCenter,
  renderBottomRight: this.renderBottomRight,
  renderChatButton: h.isGuildVoice() ? this.renderChatButton : void 0,
  renderChatToasts: h.isGuildVoice() ? this.renderChatToasts : void 0,
  renderVoiceChannelEffects: this.renderVoiceChannelEffects,
  ...e,
  screenMessage: this.screenMessage,
  disableGradients: g,
  idle: !_ && a && !g && e.idle,
  children: a && this.popoutOpen && !this.inPopout ? null : (0, i.jsx)(F.Z, {
    ref: this._contentRef,
    inCall: a,
    paused: this.paused,
    channel: h,
    hasConnectPermission: s,
    guild: p,
    participants: c,
    filteredParticipants: u,
    participantsVersion: d,
    selectedParticipant: I ? n : null,
    layout: m,
    idle: e.idle,
    mode: l,
    onSelectParticipant: this.handleSelectParticipant,
    onContextMenuParticipant: this.handleContextMenu,
    showParticipants: o && (!C || x),
    popoutWindow: this.inPopout ? r : null,
    awaitingRemoteSessionInfo: f
  })
});
  }
  render() {
let {
  layout: e,
  channel: t,
  guild: n,
  mode: a,
  chatOpen: s,
  appContext: r,
  maxSidebarWidth: o,
  maxHeight: c,
  inCall: u
} = this.props, {
  resizedHeight: d
} = this.state, h = a === eL.WtW.VIDEO, p = e !== eL.AEg.NO_CHAT && e !== eL.AEg.FULL_SCREEN && null != c;
return (0, i.jsxs)('div', {
  className: l()(eO.wrapper, eD[e], ek[r], {
    [eO.poppedOut]: this.popoutOpen && !this.inPopout && e !== eL.AEg.NO_CHAT && t.isPrivate(),
    [eO.video]: h,
    [eO.chatSidebarOpen]: s
  }),
  ref: e => {
    this._wrapperRef.current = e, this.props.wrapperRef.current = e;
  },
  style: p && null != d ? {
    minHeight: 230,
    maxHeight: c,
    height: d
  } : void 0,
  children: [
    (0, i.jsx)('div', {
      className: l()(eO.callContainer, {
        [(0, eg.Q)(eL.BRd.DARK)]: h
      }),
      ref: e => {
        this._callContainerRef.current = e, this.props.callContainerRef.current = e;
      },
      children: (0, i.jsx)(z.ZP, {
        timeout: 2000,
        children: e => this.renderContent(e)
      })
    }),
    p && (0, i.jsx)(eM.Z, {
      minHeight: 230,
      maxHeight: c,
      resizableNode: this._wrapperRef,
      onResize: this.handleCallResize,
      onResizeEnd: this.props.updateStoredCallHeaderHeight
    }),
    (0, i.jsx)('div', {
      className: eO.channelChatWrapper,
      ref: e => {
        this._channelChatRef.current = e, this.props.channelChatRef.current = e;
      },
      children: s && (!u || !this.popoutOpen || this.inPopout) && (0, i.jsx)(eS.Z, {
        channel: t,
        guild: n,
        maxWidth: o
      })
    })
  ]
});
  }
  constructor(...e) {
super(...e), ey(this, '_prevLayout', eL.AEg.MINIMUM), ey(this, '_wrapperRef', a.createRef()), ey(this, '_callContainerRef', a.createRef()), ey(this, '_channelChatRef', a.createRef()), ey(this, '_contentRef', a.createRef()), ey(this, '_videoBackgroundTooltipTimeout', new d.V7()), ey(this, '_lastIdleProps', null), ey(this, 'state', {
  resizedHeight: G.ZP.callHeaderHeight
}), ey(this, 'handleFullScreenChange', () => {
  let e = this.getRootNode();
  null != e && !(0, eI.rB)(e, this.currentDocument) && this.props.layout === eL.AEg.FULL_SCREEN && this.handleFullScreen();
}), ey(this, 'handleFullScreen', () => {
  let e = this.getRootNode();
  null != e && (this.props.layout !== eL.AEg.FULL_SCREEN ? (this._prevLayout = this.props.layout, this.handleChangeLayout(eL.AEg.FULL_SCREEN), (0, eI.Dj)(e)) : this.maybeLeaveFullScreen());
}), ey(this, 'maybeLeaveFullScreen', () => {
  let e = this.getRootNode();
  if (null != e)
    this.props.layout === eL.AEg.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, eI.Pr)(e, this.currentDocument));
}), ey(this, 'handleToggleLayout', () => {
  this.handleChangeLayout(this.props.layout === eL.AEg.NORMAL ? eL.AEg.NO_CHAT : eL.AEg.NORMAL);
}), ey(this, 'handleChangeLayout', e => {
  let {
    channel: t,
    appContext: n,
    layout: i
  } = this.props;
  i !== e && (m.Z.updateLayout(t.id, e, n), e === eL.AEg.FULL_SCREEN && t.isPrivate() && ef.S.dispatch(eL.CkL.TEXTAREA_BLUR));
}), ey(this, 'handleDisconnect', () => {
  this.props.layout === eL.AEg.FULL_SCREEN && this.handleFullScreen();
}), ey(this, 'handleContextMenu', (e, t) => {
  var a, s;
  let {
    channel: l,
    appContext: r,
    layout: c
  } = this.props, u = {
    onClose: () => {
      var e;
      return null === (e = this._lastIdleProps) || void 0 === e ? void 0 : e.onAllowIdle('menu');
    },
    context: r
  };
  switch (null === (a = this._lastIdleProps) || void 0 === a || a.onPreventIdle('menu'), null === (s = this._lastIdleProps) || void 0 === s || s.onActive(), e.type) {
    case ej.fO.HIDDEN_STREAM:
    case ej.fO.STREAM:
      (0, _.jW)(t, async () => {
        let {
          default: t
        } = await n.e('22183').then(n.bind(n, 987281));
        return n => (0, i.jsx)(t, {
          ...n,
          stream: e.stream,
          exitFullscreen: this.maybeLeaveFullScreen,
          appContext: r
        });
      }, u);
      return;
    case ej.fO.USER:
      let d = eh.default.getUser(e.id);
      if (null != d)
        switch (l.type) {
          case eL.d4z.DM:
            return (0, _.jW)(t, async () => {
              let {
                default: e
              } = await Promise.all([
                n.e('79695'),
                n.e('70474'),
                n.e('22036'),
                n.e('56826'),
                n.e('79598')
              ]).then(n.bind(n, 131404));
              return t => (0, i.jsx)(e, {
                ...t,
                showChannelCallItems: !0,
                showMediaItems: !0,
                user: d,
                channel: l,
                showModalItems: !0
              });
            }, u);
          case eL.d4z.GROUP_DM:
            return (0, _.jW)(t, async () => {
              let {
                default: e
              } = await Promise.all([
                n.e('79695'),
                n.e('70474'),
                n.e('59820')
              ]).then(n.bind(n, 354589));
              return t => (0, i.jsx)(e, {
                ...t,
                showChannelCallItems: !0,
                showMediaItems: !0,
                showChatItems: c === eL.AEg.MINIMUM || c === eL.AEg.NORMAL,
                user: d,
                channel: l,
                showModalItems: !0
              });
            }, u);
          case eL.d4z.GUILD_VOICE:
            let h = l.getGuildId();
            return o()(null != h, 'GuildID null for guild voice channel'), (0, _.jW)(t, async () => {
              let {
                default: e
              } = await Promise.all([
                n.e('79695'),
                n.e('70474'),
                n.e('12435'),
                n.e('17463')
              ]).then(n.bind(n, 757387));
              return t => (0, i.jsx)(e, {
                ...t,
                showMediaItems: !0,
                showChannelCallItems: !0,
                showChatItems: !1,
                user: d,
                channel: l,
                guildId: h,
                showModalItems: !0
              });
            }, u);
        }
  }
}), ey(this, 'handleCallResize', e => {
  this.setState({
    resizedHeight: e
  });
}), ey(this, 'handleSelectParticipant', (e, t) => {
  let {
    channel: n,
    selectedParticipant: i,
    allActiveStreams: a,
    inCall: s,
    mode: l
  } = this.props;
  (0, ej._5)(e) && (0, U.p9)(n, ep.Z, eo.Z, ec.Z, O.Z)[0] && (f.default.selectVoiceChannel(n.id), 0 === a.filter(t => (0, k.V9)(t) === e.id && t.state !== eL.jm8.ENDED).length && (0, E.rn)((0, k.my)(e.id), {
    forceMultiple: t.shiftKey
  })), s && l === eL.WtW.VIDEO && ((null == i ? void 0 : i.id) === e.id ? m.Z.selectParticipant(n.id, null) : m.Z.selectParticipant(n.id, e.id));
}), ey(this, 'handleOpenPopout', () => {
  let {
    channel: e,
    connectedToEmbeddedActivity: t
  } = this.props, n = () => {
    let t = e.getGuildId();
    null != t && (0, H.uL)((0, e_.LY)(t)), w.hP(e);
  };
  t ? (0, M.Z)(n) : n();
}), ey(this, 'handleStayOnTop', e => {
  w.hY(eL.KJ3.CHANNEL_CALL_POPOUT, e);
}), ey(this, 'handleClosePopout', () => {
  w.xv(eL.KJ3.CHANNEL_CALL_POPOUT);
}), ey(this, 'handleFullscreenParticipant', (e, t) => {
  let {
    layout: n,
    selectedParticipant: i
  } = this.props, a = n === eL.AEg.FULL_SCREEN;
  (!a && (null == i ? void 0 : i.id) !== e.id || a && (null == i ? void 0 : i.id) === e.id) && this.handleSelectParticipant(e, t), this.handleFullScreen();
}), ey(this, 'renderRegionSelect', () => {
  let e;
  let {
    call: t,
    channel: n,
    layout: a
  } = this.props;
  return !this.inPopout && a !== eL.AEg.FULL_SCREEN && null != t && !n.isManaged() && (e = (0, i.jsx)(C.Z, {
    call: t
  })), (0, i.jsx)(L.Z, {
    justify: L.Z.Justify.END,
    children: e
  });
}), ey(this, 'renderBottomCenter', () => {
  let {
    channel: e,
    inCall: t,
    layout: n
  } = this.props;
  return t || n === eL.AEg.MINIMUM || n === eL.AEg.NORMAL ? (0, i.jsx)(V.ZP, {
    exitFullScreen: this.maybeLeaveFullScreen,
    channel: e,
    onDisconnectCall: this.handleDisconnect,
    idleProps: this._lastIdleProps
  }) : null;
}), ey(this, 'renderBottomLeft', () => {
  let {
    layout: e,
    mentionCount: t,
    channel: n,
    appContext: a,
    useNewInviteButton: s,
    selectedParticipant: r,
    shouldUseVoiceEffectsActionBar: o,
    inCall: c,
    participants: u
  } = this.props;
  if (!c)
    return null;
  let d = e === eL.AEg.NO_CHAT ? X.Z.Directions.UP : X.Z.Directions.DOWN,
    p = [
      eL.AEg.FULL_SCREEN,
      eL.AEg.NO_CHAT
    ].includes(e),
    m = u.some(e => e.type === ej.fO.STREAM),
    _ = e === eL.AEg.FULL_SCREEN ? () => {
      this._prevLayout = eL.AEg.NORMAL, this.handleFullScreen();
    } : this.handleToggleLayout,
    {
      canChangeLayout: f,
      canInvite: E
    } = this.viewProperties,
    g = s ? (0, i.jsx)(W.Z, {
      channel: n,
      stream: (null == r ? void 0 : r.type) === ej.fO.STREAM ? (0, k.my)(r.id) : void 0,
      applicationId: (null == r ? void 0 : r.type) === ej.fO.ACTIVITY ? r.id : void 0,
      appContext: a,
      className: eO.leftTrayIcon,
      exitFullScreen: this.maybeLeaveFullScreen,
      analyticsLocation: n.type === eL.d4z.GUILD_VOICE ? eL.ZY5.GUILD_CHANNEL : eL.ZY5.DM_CHANNEL
    }) : (0, i.jsx)($.Z, {
      channel: n,
      stream: (null == r ? void 0 : r.type) === ej.fO.STREAM ? (0, k.my)(r.id) : void 0,
      className: eO.leftTrayIcon,
      exitFullScreen: this.maybeLeaveFullScreen,
      analyticsLocation: n.type === eL.d4z.GUILD_VOICE ? eL.ZY5.GUILD_CHANNEL : eL.ZY5.DM_CHANNEL
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [
      E && !o ? g : null,
      f ? (0, i.jsxs)(L.Z, {
        className: eO.iconWrapper,
        align: L.Z.Align.CENTER,
        grow: 0,
        children: [
          (0, i.jsx)(X.Z, {
            label: p ? eP.Z.Messages.SHOW_CHAT : eP.Z.Messages.HIDE_CHAT,
            direction: d,
            className: eO.leftTrayIcon,
            onClick: _
          }),
          p && t > 0 ? (0, i.jsx)(h.NumberBadge, {
            className: eO.badge,
            count: t
          }) : null
        ]
      }) : null,
      (null == r ? void 0 : r.type) !== ej.fO.STREAM && (null == r ? void 0 : r.type) !== ej.fO.ACTIVITY || o ? null : (0, i.jsx)(Y.Z, {
        children: (0, i.jsx)(eA.Z, {
          className: l()(eO.leftTrayIcon, eO.viewersButton),
          participant: r,
          maxVisibleUsers: 4,
          guildId: n.getGuildId(),
          channelId: n.id,
          disableInteraction: this.inPopout || e === eL.AEg.FULL_SCREEN
        })
      }),
      o && (0, i.jsx)(eR.Z, {
        channel: n,
        hasActiveStream: m,
        themeable: this.viewProperties.useTheme
      }),
      (0, i.jsx)(D.Z, {
        showLeftDivider: o,
        themeable: this.viewProperties.useTheme,
        className: eO.leftTrayIcon,
        channel: n
      })
    ]
  });
}), ey(this, 'renderBottomRight', () => {
  let {
    popoutWindow: e,
    popoutWindowAlwaysOnTop: t,
    currentUserId: n,
    selectedParticipant: a
  } = this.props, {
    canFullscreen: s,
    canStayOnTop: l,
    canPopout: r,
    useTheme: o
  } = this.viewProperties;
  return (0, i.jsxs)(i.Fragment, {
    children: [
      null != a && a.type !== ej.fO.ACTIVITY && a.user.id !== n ? (0, i.jsx)(en.Z, {
        context: (0, eT.Z)(a.type),
        userId: a.user.id,
        currentWindow: this.inPopout ? null != e ? e : void 0 : window,
        sliderClassName: eO.volumeSlider,
        className: eO.rightTrayIcon
      }) : null,
      l ? (0, i.jsx)(et.Z, {
        className: eO.rightTrayIcon,
        popoutWindowAlwaysOnTop: t,
        onToggleStayOnTop: this.handleStayOnTop
      }) : null,
      r ? (0, i.jsx)(ee.Z, {
        themeable: o,
        popoutOpen: this.popoutOpen,
        className: eO.rightTrayIcon,
        onOpenPopout: this.handleOpenPopout,
        onClosePopout: this.handleClosePopout
      }) : null,
      s ? (0, i.jsx)(J.Z, {
        themeable: o,
        node: this.getRootNode(),
        guestWindow: e,
        className: eO.rightTrayIcon,
        onClick: this.handleFullScreen
      }) : null
    ]
  });
}), ey(this, 'renderChatButton', e => {
  let {
    className: t,
    showingClassName: n
  } = e, {
    channel: a,
    chatOpen: s,
    inCall: l
  } = this.props;
  return s || this.popoutOpen && !this.inPopout && l ? null : (0, i.jsx)(Q.T, {
    channelId: a.id,
    className: t,
    showingClassName: n
  });
}), ey(this, 'renderChatToasts', () => {
  let {
    showChatToasts: e,
    chatOpen: t,
    channel: n,
    inCall: a
  } = this.props;
  return !e || t || this.popoutOpen && !this.inPopout && a ? null : (0, i.jsx)(ev.ZP, {
    children: (0, i.jsx)(K.Z, {
      className: eO.chatToasts,
      channelId: n.id
    })
  });
}), ey(this, 'renderVoiceChannelEffects', () => {
  let {
    channel: e,
    callContainerDimensions: t
  } = this.props;
  return (0, i.jsx)(eb.ZP, {
    children: (0, i.jsx)(ei.Z, {
      callHeight: t.height,
      channelId: e.id
    })
  });
}), ey(this, 'renderHeader', () => {
  let {
    renderExternalHeader: e,
    channel: t,
    guild: n,
    appContext: a,
    chatOpen: s,
    inCall: l
  } = this.props, {
    useExternalHeader: r,
    canSelectRegion: o,
    renderHeader: c
  } = this.viewProperties;
  return c ? (0, i.jsxs)(Y.Z, {
    children: [
      (0, i.jsx)('div', {
        className: eO.headerWrapper,
        children: r ? null == e ? void 0 : e() : (0, i.jsx)(eZ.Z, {
          channel: t,
          guild: n,
          appContext: a,
          inCall: l,
          isChatOpen: s || this.popoutOpen && !this.inPopout && l,
          exitFullScreen: this.maybeLeaveFullScreen
        })
      }),
      o ? this.renderRegionSelect() : null
    ]
  }) : null;
});
  }
}
t.Z = function(e) {
  var t;
  let {
channel: n,
renderExternalHeader: s,
maxHeight: l
  } = e, {
width: r = 0,
ref: o
  } = (0, x.Z)(), {
width: d = 0,
height: p = 0,
ref: _
  } = (0, x.Z)(), {
ref: f
  } = (0, x.Z)(), E = (0, N.bp)(), C = (0, y.Z)(), M = (0, c.e7)([ed.Z], () => {
var e;
return (null !== (e = null == C ? void 0 : C.channelId) && void 0 !== e ? e : ed.Z.getVoiceChannelId()) === n.id;
  }), R = (0, T.Z)(M), {
participants: L,
filteredParticipants: D,
participantsVersion: k,
mode: U,
layout: w,
participantsOpen: H,
chatOpen: V,
selectedParticipant: F
  } = (0, c.cj)([ex.Z], () => {
let e = E === eL.IlC.POPOUT,
  t = ex.Z.getMode(n.id);
e && (t = eL.WtW.VIDEO);
let i = t === eL.WtW.VIDEO ? ex.Z.getLayout(n.id, E) : eL.AEg.MINIMUM;
return e && i !== eL.AEg.FULL_SCREEN && (i = eL.AEg.NO_CHAT), {
  mode: t,
  layout: i,
  selectedParticipant: t !== eL.WtW.VOICE ? ex.Z.getSelectedParticipant(n.id) : null,
  participants: ex.Z.getParticipants(n.id),
  filteredParticipants: ex.Z.getFilteredParticipants(n.id),
  participantsOpen: ex.Z.getParticipantsOpen(n.id),
  chatOpen: ex.Z.getChatOpen(n.id),
  participantsVersion: ex.Z.getParticipantsVersion(n.id)
};
  }, [
E,
n.id
  ]), W = (0, c.Wu)([ea.Z], () => ea.Z.getAllActiveStreams()), {
selectedStream: z
  } = (0, c.cj)([ea.Z], () => ({
selectedStream: null != F ? ea.Z.getActiveStreamForStreamKey(F.id) : null
  }), [F]), Y = (0, c.e7)([eo.Z], () => eo.Z.getGuild(n.getGuildId())), K = (0, c.e7)([er.Z], () => er.Z.getCall(n.id), [n.id]), q = (0, c.e7)([eu.ZP], () => eu.ZP.getMentionCount(n.id), [n.id]), X = (0, c.e7)([es.default], () => es.default.getId()), {
popoutWindow: Q,
popoutWindowAlwaysOnTop: J
  } = (0, c.cj)([B.Z], () => ({
popoutWindow: B.Z.getWindow(eL.KJ3.CHANNEL_CALL_POPOUT),
popoutWindowAlwaysOnTop: B.Z.getIsAlwaysOnTop(eL.KJ3.CHANNEL_CALL_POPOUT)
  })), $ = (0, c.e7)([ec.Z], () => ec.Z.can(eL.Plq.CONNECT, n)), ee = (0, c.e7)([el.Z], () => el.Z.getToastsEnabled(n.id)), et = (0, c.e7)([O.Z], () => O.Z.getAwaitingRemoteSessionInfo()), en = (0, c.e7)([G.ZP], () => G.ZP.callHeaderHeight), ei = a.useCallback(e => {
g.ZP.updatedUnsyncedSettings({
  callHeaderHeight: e
});
  }, []), eh = null !== (t = null == Y ? void 0 : Y.id) && void 0 !== t ? t : null, ep = (0, Z.Z)(eh, n.id), em = (0, c.e7)([v.Z], () => v.Z.getFetchState(), []), e_ = (0, T.Z)(em);
  a.useEffect(() => {
'errored' === em && 'errored' !== e_ && (0, h.showToast)((0, h.createToast)(eP.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FETCH_ERROR, h.ToastType.FAILURE));
  }, [
em,
e_
  ]);
  let ef = (0, c.e7)([S.ZP], () => S.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
  a.useEffect(() => {
M && !R && null != ef && m.Z.selectParticipant(n.id, ef.applicationId);
  }, [
M,
R,
ef,
n.id
  ]), a.useEffect(() => {
let e = !1,
  t = null;
return (async () => {
  M && U === eL.WtW.VIDEO && (t = await eC.ZP.blockDisplaySleep(), e && null != t && eC.ZP.unblockDisplaySleep(t));
})(), () => {
  null != t ? eC.ZP.unblockDisplaySleep(t) : e = !0;
};
  }, [
M,
U
  ]), (0, A.Z)({
onTransition: void 0
  });
  let eE = (0, eN.Z)(n, !0),
eg = (0, P.bn)(u.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
{
  analyticsLocations: eI
} = (0, j.ZP)(b.Z.CHANNEL_CALL),
eT = S.ZP.getEmbeddedActivitiesForChannel(n.id);
  return (0, i.jsx)(j.Gt, {
value: eI,
children: (0, i.jsx)(I.Z, {
  page: eL.ZY5.CHANNEL_CALL,
  children: (0, i.jsx)(ev.B2, {
    children: (0, i.jsxs)(eb._A, {
      children: [
        (0, i.jsx)(eU, {
          channel: n,
          guild: Y,
          hasConnectPermission: $,
          participantsOpen: H,
          renderExternalHeader: s,
          appContext: E,
          call: K,
          popoutWindow: Q,
          popoutWindowAlwaysOnTop: J,
          mentionCount: q,
          selectedStream: z,
          mode: U,
          inCall: M,
          participants: L,
          filteredParticipants: D,
          participantsVersion: k,
          layout: w,
          chatOpen: V,
          maxSidebarWidth: r - 550,
          shouldUseVoiceEffectsActionBar: eE,
          currentUserId: X,
          selectedParticipant: F,
          allActiveStreams: W,
          useNewInviteButton: ep,
          connectedToEmbeddedActivity: null != ef,
          showChatToasts: ee,
          storedCallHeaderHeight: en,
          updateStoredCallHeaderHeight: ei,
          wrapperRef: o,
          callContainerDimensions: {
            width: d,
            height: p
          },
          callContainerRef: _,
          channelChatRef: f,
          width: r,
          maxHeight: l,
          forceShowControls: eg,
          awaitingRemoteSessionInfo: et,
          currentChannelActivities: eT
        }),
        !n.isPrivate() && (0, i.jsx)(eb.YR, {}),
        (0, i.jsx)(ev.H_, {})
      ]
    })
  })
})
  });
};