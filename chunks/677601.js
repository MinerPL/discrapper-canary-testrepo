n(47120);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(512722),
  o = n.n(r),
  c = n(442837),
  d = n(704215),
  u = n(846519),
  h = n(481060),
  p = n(570140),
  m = n(475179),
  _ = n(239091),
  f = n(287734),
  E = n(872810),
  C = n(153867),
  g = n(944543),
  I = n(410575),
  x = n(393238),
  T = n(110924),
  v = n(40851),
  N = n(115130),
  S = n(317381),
  Z = n(596040),
  A = n(296797),
  M = n(349619),
  b = n(100527),
  R = n(367907),
  j = n(906732),
  L = n(211644),
  P = n(258609),
  O = n(446226),
  y = n(276598),
  D = n(569545),
  k = n(382182),
  U = n(788983),
  w = n(928518),
  B = n(703656),
  H = n(740492),
  G = n(793319),
  V = n(3861),
  F = n(493754),
  W = n(937995),
  z = n(618158),
  Y = n(880831),
  K = n(73563),
  q = n(751843),
  X = n(616286),
  Q = n(268353),
  J = n(786915),
  $ = n(800965),
  ee = n(107169),
  et = n(891551),
  en = n(488785),
  ei = n(199902),
  ea = n(314897),
  el = n(979696),
  es = n(523746),
  er = n(430824),
  eo = n(496675),
  ec = n(306680),
  ed = n(944486),
  eu = n(594174),
  eh = n(979651),
  ep = n(285952),
  em = n(626135),
  e_ = n(934415),
  ef = n(585483),
  eE = n(358085),
  eC = n(792125),
  eg = n(998502),
  eI = n(228488),
  ex = n(358221),
  eT = n(414910),
  ev = n(887012),
  eN = n(909820),
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
} = this.props, l = this.getRootNode();
if (null != l && e.mode === eL.WtW.VIDEO && i === eL.WtW.VOICE && (0, eI.rB)(l, this.currentDocument) && (0, eI.Pr)(l, this.currentDocument), e.participantsOpen !== t || a !== e.layout) {
  var s;
  null === (s = this._contentRef.current) || void 0 === s || s.triggerResize();
}
e.inCall && !n && this.inPopout && p.Z.wait(() => this.handleClosePopout());
  }
  get nativePopoutSupported() {
return eE.isPlatformEmbedded && eg.ZP.supportsFeature(eL.eRX.POPOUT_WINDOWS);
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
} = this.props, a = t === eL.WtW.VIDEO && i && !(this.popoutOpen && !this.inPopout), l = t === eL.WtW.VIDEO && i && this.popoutSupported, s = t !== eL.WtW.VOICE && n.isPrivate() && !this.inPopout && i, r = n.type === eL.d4z.GUILD_VOICE, o = e === eL.AEg.MINIMUM || e === eL.AEg.NORMAL, c = this.inPopout && this.nativePopoutSupported, d = {
  renderHeader: !0,
  useTheme: !1,
  useExternalHeader: o,
  canInvite: r,
  canPopout: l,
  canFullscreen: a,
  canSelectRegion: n.isPrivate() && !n.isBroadcastChannel(),
  canChangeLayout: s,
  canStayOnTop: c
};
if (!i)
  return {
    ...d,
    canFullscreen: a,
    useTheme: !0
  };
switch (e) {
  case eL.AEg.FULL_SCREEN:
    return {
      ...d,
      canPopout: !this.inPopout && this.popoutOpen && d.canPopout
    };
  case eL.AEg.MINIMUM:
    return {
      ...d,
      canPopout: !1,
        useTheme: !0
    };
  case eL.AEg.NO_CHAT:
  case eL.AEg.NORMAL:
    return {
      ...d
    };
}
  }
  renderContent(e) {
var t;
let {
  selectedParticipant: n,
  inCall: a,
  hasConnectPermission: l,
  mode: s,
  popoutWindow: r,
  participantsOpen: o,
  participants: c,
  filteredParticipants: d,
  participantsVersion: u,
  channel: h,
  guild: p,
  layout: m,
  forceShowControls: _,
  awaitingRemoteSessionInfo: f,
  currentChannelActivities: E
} = this.props, C = m === eL.AEg.MINIMUM, g = C || m === eL.AEg.NORMAL, I = a && s === eL.WtW.VIDEO, x = (null !== (t = null == E ? void 0 : E.length) && void 0 !== t ? t : 0) > 0 && h.isPrivate();
return this._lastIdleProps = e, (0, i.jsx)(K.Z, {
  renderHeader: this.renderHeader,
  renderBottomLeft: this.renderBottomLeft,
  renderBottomCenter: this.renderBottomCenter,
  renderBottomRight: this.renderBottomRight,
  renderChatButton: h.isGuildVoice() ? this.renderChatButton : void 0,
  renderChatToasts: h.isGuildVoice() ? this.renderChatToasts : void 0,
  renderVoiceChannelEffects: this.renderVoiceChannelEffects,
  ...e,
  screenMessage: this.screenMessage,
  disableGradients: C,
  idle: !_ && a && !C && e.idle,
  children: a && this.popoutOpen && !this.inPopout ? null : (0, i.jsx)(V.Z, {
    ref: this._contentRef,
    inCall: a,
    paused: this.paused,
    channel: h,
    hasConnectPermission: l,
    guild: p,
    participants: c,
    filteredParticipants: d,
    participantsVersion: u,
    selectedParticipant: I ? n : null,
    layout: m,
    idle: e.idle,
    mode: s,
    onSelectParticipant: this.handleSelectParticipant,
    onContextMenuParticipant: this.handleContextMenu,
    showParticipants: o && (!g || x),
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
  chatOpen: l,
  appContext: r,
  maxSidebarWidth: o,
  maxHeight: c,
  inCall: d
} = this.props, {
  resizedHeight: u
} = this.state, h = a === eL.WtW.VIDEO, p = e !== eL.AEg.NO_CHAT && e !== eL.AEg.FULL_SCREEN && null != c;
return (0, i.jsxs)('div', {
  className: s()(eO.wrapper, eD[e], ek[r], {
    [eO.poppedOut]: this.popoutOpen && !this.inPopout && e !== eL.AEg.NO_CHAT && t.isPrivate(),
    [eO.video]: h,
    [eO.chatSidebarOpen]: l
  }),
  ref: e => {
    this._wrapperRef.current = e, this.props.wrapperRef.current = e;
  },
  style: p && null != u ? {
    minHeight: 230,
    maxHeight: c,
    height: u
  } : void 0,
  children: [
    (0, i.jsx)('div', {
      className: s()(eO.callContainer, {
        [(0, eC.Q)(eL.BRd.DARK)]: h
      }),
      ref: e => {
        this._callContainerRef.current = e, this.props.callContainerRef.current = e;
      },
      children: (0, i.jsx)(W.ZP, {
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
      children: l && (!d || !this.popoutOpen || this.inPopout) && (0, i.jsx)(eS.Z, {
        channel: t,
        guild: n,
        maxWidth: o
      })
    })
  ]
});
  }
  constructor(...e) {
super(...e), ey(this, '_prevLayout', eL.AEg.MINIMUM), ey(this, '_wrapperRef', a.createRef()), ey(this, '_callContainerRef', a.createRef()), ey(this, '_channelChatRef', a.createRef()), ey(this, '_contentRef', a.createRef()), ey(this, '_videoBackgroundTooltipTimeout', new u.V7()), ey(this, '_lastIdleProps', null), ey(this, 'state', {
  resizedHeight: H.ZP.callHeaderHeight
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
  var a, l;
  let {
    channel: s,
    appContext: r,
    layout: c
  } = this.props, d = {
    onClose: () => {
      var e;
      return null === (e = this._lastIdleProps) || void 0 === e ? void 0 : e.onAllowIdle('menu');
    },
    context: r
  };
  switch (null === (a = this._lastIdleProps) || void 0 === a || a.onPreventIdle('menu'), null === (l = this._lastIdleProps) || void 0 === l || l.onActive(), e.type) {
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
      }, d);
      return;
    case ej.fO.USER:
      let u = eu.default.getUser(e.id);
      if (null != u)
        switch (s.type) {
          case eL.d4z.DM:
            return (0, _.jW)(t, async () => {
              let {
                default: e
              } = await Promise.all([
                n.e('79695'),
                n.e('17400'),
                n.e('22036'),
                n.e('56826'),
                n.e('79598')
              ]).then(n.bind(n, 131404));
              return t => (0, i.jsx)(e, {
                ...t,
                showChannelCallItems: !0,
                showMediaItems: !0,
                user: u,
                channel: s,
                showModalItems: !0
              });
            }, d);
          case eL.d4z.GROUP_DM:
            return (0, _.jW)(t, async () => {
              let {
                default: e
              } = await Promise.all([
                n.e('79695'),
                n.e('17400'),
                n.e('60677'),
                n.e('33952')
              ]).then(n.bind(n, 354589));
              return t => (0, i.jsx)(e, {
                ...t,
                showChannelCallItems: !0,
                showMediaItems: !0,
                showChatItems: c === eL.AEg.MINIMUM || c === eL.AEg.NORMAL,
                user: u,
                channel: s,
                showModalItems: !0
              });
            }, d);
          case eL.d4z.GUILD_VOICE:
            let h = s.getGuildId();
            return o()(null != h, 'GuildID null for guild voice channel'), (0, _.jW)(t, async () => {
              let {
                default: e
              } = await Promise.all([
                n.e('79695'),
                n.e('17400'),
                n.e('12435'),
                n.e('17463')
              ]).then(n.bind(n, 757387));
              return t => (0, i.jsx)(e, {
                ...t,
                showMediaItems: !0,
                showChannelCallItems: !0,
                showChatItems: !1,
                user: u,
                channel: s,
                guildId: h,
                showModalItems: !0
              });
            }, d);
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
    inCall: l,
    mode: s
  } = this.props;
  (0, ej._5)(e) && (0, k.p9)(n, eh.Z, er.Z, eo.Z, P.Z)[0] && (f.default.selectVoiceChannel(n.id), 0 === a.filter(t => (0, D.V9)(t) === e.id && t.state !== eL.jm8.ENDED).length && (0, E.rn)((0, D.my)(e.id), {
    forceMultiple: t.shiftKey
  })), l && s === eL.WtW.VIDEO && ((null == i ? void 0 : i.id) === e.id ? m.Z.selectParticipant(n.id, null) : m.Z.selectParticipant(n.id, e.id));
}), ey(this, 'handleOpenPopout', () => {
  let {
    channel: e,
    connectedToEmbeddedActivity: t
  } = this.props, n = () => {
    let t = e.getGuildId();
    null != t && (0, B.uL)((0, e_.LY)(t)), U.hP(e);
  };
  t ? (0, M.Z)(n) : n();
}), ey(this, 'handleStayOnTop', e => {
  U.hY(eL.KJ3.CHANNEL_CALL_POPOUT, e);
}), ey(this, 'handleClosePopout', () => {
  U.xv(eL.KJ3.CHANNEL_CALL_POPOUT);
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
  return !this.inPopout && a !== eL.AEg.FULL_SCREEN && null != t && !n.isManaged() && (e = (0, i.jsx)(g.Z, {
    call: t
  })), (0, i.jsx)(ep.Z, {
    justify: ep.Z.Justify.END,
    children: e
  });
}), ey(this, 'renderBottomCenter', () => {
  let {
    channel: e,
    inCall: t,
    layout: n
  } = this.props;
  return t || n === eL.AEg.MINIMUM || n === eL.AEg.NORMAL ? (0, i.jsx)(G.ZP, {
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
    useNewInviteButton: l,
    selectedParticipant: r,
    shouldUseVoiceEffectsActionBar: o,
    inCall: c,
    participants: d
  } = this.props;
  if (!c)
    return null;
  let u = e === eL.AEg.NO_CHAT ? q.Z.Directions.UP : q.Z.Directions.DOWN,
    p = [
      eL.AEg.FULL_SCREEN,
      eL.AEg.NO_CHAT
    ].includes(e),
    m = d.some(e => e.type === ej.fO.STREAM),
    _ = e === eL.AEg.FULL_SCREEN ? () => {
      this._prevLayout = eL.AEg.NORMAL, this.handleFullScreen();
    } : this.handleToggleLayout,
    {
      canChangeLayout: f,
      canInvite: E
    } = this.viewProperties,
    C = l ? (0, i.jsx)(F.Z, {
      channel: n,
      stream: (null == r ? void 0 : r.type) === ej.fO.STREAM ? (0, D.my)(r.id) : void 0,
      applicationId: (null == r ? void 0 : r.type) === ej.fO.ACTIVITY ? r.id : void 0,
      appContext: a,
      className: eO.leftTrayIcon,
      exitFullScreen: this.maybeLeaveFullScreen,
      analyticsLocation: n.type === eL.d4z.GUILD_VOICE ? eL.ZY5.GUILD_CHANNEL : eL.ZY5.DM_CHANNEL
    }) : (0, i.jsx)(J.Z, {
      channel: n,
      stream: (null == r ? void 0 : r.type) === ej.fO.STREAM ? (0, D.my)(r.id) : void 0,
      className: eO.leftTrayIcon,
      exitFullScreen: this.maybeLeaveFullScreen,
      analyticsLocation: n.type === eL.d4z.GUILD_VOICE ? eL.ZY5.GUILD_CHANNEL : eL.ZY5.DM_CHANNEL
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [
      E && !o ? C : null,
      f ? (0, i.jsxs)(ep.Z, {
        className: eO.iconWrapper,
        align: ep.Z.Align.CENTER,
        grow: 0,
        children: [
          (0, i.jsx)(q.Z, {
            label: p ? eP.Z.Messages.SHOW_CHAT : eP.Z.Messages.HIDE_CHAT,
            direction: u,
            className: eO.leftTrayIcon,
            onClick: _
          }),
          p && t > 0 ? (0, i.jsx)(h.NumberBadge, {
            className: eO.badge,
            count: t
          }) : null
        ]
      }) : null,
      (null == r ? void 0 : r.type) !== ej.fO.STREAM && (null == r ? void 0 : r.type) !== ej.fO.ACTIVITY || o ? null : (0, i.jsx)(z.Z, {
        children: (0, i.jsx)(eA.Z, {
          className: s()(eO.leftTrayIcon, eO.viewersButton),
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
      (0, i.jsx)(y.Z, {
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
    canFullscreen: l,
    canStayOnTop: s,
    canPopout: r,
    useTheme: o
  } = this.viewProperties;
  return (0, i.jsxs)(i.Fragment, {
    children: [
      null != a && a.type !== ej.fO.ACTIVITY && a.user.id !== n ? (0, i.jsx)(et.Z, {
        context: (0, eT.Z)(a.type),
        userId: a.user.id,
        currentWindow: this.inPopout ? null != e ? e : void 0 : window,
        sliderClassName: eO.volumeSlider,
        className: eO.rightTrayIcon
      }) : null,
      s ? (0, i.jsx)(ee.Z, {
        className: eO.rightTrayIcon,
        popoutWindowAlwaysOnTop: t,
        onToggleStayOnTop: this.handleStayOnTop
      }) : null,
      r ? (0, i.jsx)($.Z, {
        themeable: o,
        popoutOpen: this.popoutOpen,
        className: eO.rightTrayIcon,
        onOpenPopout: this.handleOpenPopout,
        onClosePopout: this.handleClosePopout
      }) : null,
      l ? (0, i.jsx)(Q.Z, {
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
    chatOpen: l,
    inCall: s
  } = this.props;
  return l || this.popoutOpen && !this.inPopout && s ? null : (0, i.jsx)(X.T, {
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
  return !e || t || this.popoutOpen && !this.inPopout && a ? null : (0, i.jsx)(eN.ZP, {
    children: (0, i.jsx)(Y.Z, {
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
    children: (0, i.jsx)(en.Z, {
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
    chatOpen: l,
    inCall: s
  } = this.props, {
    useExternalHeader: r,
    canSelectRegion: o,
    renderHeader: c
  } = this.viewProperties;
  return c ? (0, i.jsxs)(z.Z, {
    children: [
      (0, i.jsx)('div', {
        className: eO.headerWrapper,
        children: r ? null == e ? void 0 : e() : (0, i.jsx)(eZ.Z, {
          channel: t,
          guild: n,
          appContext: a,
          inCall: s,
          isChatOpen: l || this.popoutOpen && !this.inPopout && s,
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
renderExternalHeader: l,
maxHeight: s
  } = e, {
width: r = 0,
ref: o
  } = (0, x.Z)(), {
width: u = 0,
height: p = 0,
ref: _
  } = (0, x.Z)(), {
ref: f
  } = (0, x.Z)(), E = (0, v.bp)(), g = (0, O.Z)(), M = (0, c.e7)([ed.Z], () => {
var e;
return (null !== (e = null == g ? void 0 : g.channelId) && void 0 !== e ? e : ed.Z.getVoiceChannelId()) === n.id;
  }), R = (0, T.Z)(M), {
participants: y,
filteredParticipants: D,
participantsVersion: k,
mode: U,
layout: B,
participantsOpen: G,
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
  ]), W = (0, c.Wu)([ei.Z], () => ei.Z.getAllActiveStreams()), {
selectedStream: z
  } = (0, c.cj)([ei.Z], () => ({
selectedStream: null != F ? ei.Z.getActiveStreamForStreamKey(F.id) : null
  }), [F]), Y = (0, c.e7)([er.Z], () => er.Z.getGuild(n.getGuildId())), K = (0, c.e7)([es.Z], () => es.Z.getCall(n.id), [n.id]), q = (0, c.e7)([ec.ZP], () => ec.ZP.getMentionCount(n.id), [n.id]), X = (0, c.e7)([ea.default], () => ea.default.getId()), {
popoutWindow: Q,
popoutWindowAlwaysOnTop: J
  } = (0, c.cj)([w.Z], () => ({
popoutWindow: w.Z.getWindow(eL.KJ3.CHANNEL_CALL_POPOUT),
popoutWindowAlwaysOnTop: w.Z.getIsAlwaysOnTop(eL.KJ3.CHANNEL_CALL_POPOUT)
  })), $ = (0, c.e7)([eo.Z], () => eo.Z.can(eL.Plq.CONNECT, n)), ee = (0, c.e7)([el.Z], () => el.Z.getToastsEnabled(n.id)), et = (0, c.e7)([P.Z], () => P.Z.getAwaitingRemoteSessionInfo()), en = (0, c.e7)([H.ZP], () => H.ZP.callHeaderHeight), eu = a.useCallback(e => {
C.ZP.updatedUnsyncedSettings({
  callHeaderHeight: e
});
  }, []), eh = null !== (t = null == Y ? void 0 : Y.id) && void 0 !== t ? t : null, ep = (0, Z.Z)(eh, n.id), em = (0, c.e7)([N.Z], () => N.Z.getFetchState(), []), e_ = (0, T.Z)(em);
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
  M && U === eL.WtW.VIDEO && (t = await eg.ZP.blockDisplaySleep(), e && null != t && eg.ZP.unblockDisplaySleep(t));
})(), () => {
  null != t ? eg.ZP.unblockDisplaySleep(t) : e = !0;
};
  }, [
M,
U
  ]), (0, A.Z)({
onTransition: void 0
  });
  let eE = (0, ev.Z)(n, !0),
eC = (0, L.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
{
  analyticsLocations: eI
} = (0, j.ZP)(b.Z.CHANNEL_CALL),
eT = S.ZP.getEmbeddedActivitiesForChannel(n.id);
  return (0, i.jsx)(j.Gt, {
value: eI,
children: (0, i.jsx)(I.Z, {
  page: eL.ZY5.CHANNEL_CALL,
  children: (0, i.jsx)(eN.B2, {
    children: (0, i.jsxs)(eb._A, {
      children: [
        (0, i.jsx)(eU, {
          channel: n,
          guild: Y,
          hasConnectPermission: $,
          participantsOpen: G,
          renderExternalHeader: l,
          appContext: E,
          call: K,
          popoutWindow: Q,
          popoutWindowAlwaysOnTop: J,
          mentionCount: q,
          selectedStream: z,
          mode: U,
          inCall: M,
          participants: y,
          filteredParticipants: D,
          participantsVersion: k,
          layout: B,
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
          updateStoredCallHeaderHeight: eu,
          wrapperRef: o,
          callContainerDimensions: {
            width: u,
            height: p
          },
          callContainerRef: _,
          channelChatRef: f,
          width: r,
          maxHeight: s,
          forceShowControls: eC,
          awaitingRemoteSessionInfo: et,
          currentChannelActivities: eT
        }),
        !n.isPrivate() && (0, i.jsx)(eb.YR, {}),
        (0, i.jsx)(eN.H_, {})
      ]
    })
  })
})
  });
};