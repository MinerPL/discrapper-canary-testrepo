"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eV
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("627445"),
  u = n.n(r),
  o = n("446674"),
  d = n("151426"),
  c = n("862337"),
  f = n("77078"),
  h = n("913144"),
  m = n("255397"),
  p = n("272030"),
  E = n("987317"),
  g = n("990766"),
  S = n("452804"),
  C = n("654978"),
  _ = n("901582"),
  I = n("731898"),
  T = n("84339"),
  v = n("244201"),
  x = n("84460"),
  N = n("191225"),
  A = n("372610"),
  M = n("78516"),
  R = n("735890"),
  j = n("812204"),
  L = n("716241"),
  y = n("685665"),
  O = n("862853"),
  P = n("76393"),
  D = n("261552"),
  b = n("710560"),
  U = n("374014"),
  w = n("223913"),
  F = n("383294"),
  V = n("292687"),
  k = n("393414"),
  H = n("168973"),
  G = n("581389"),
  B = n("103738"),
  W = n("486030"),
  Y = n("908583"),
  z = n("550410"),
  K = n("115531"),
  Z = n("620592"),
  X = n("172131"),
  Q = n("640553"),
  q = n("95032"),
  J = n("331759"),
  $ = n("336971"),
  ee = n("555038"),
  et = n("634472"),
  en = n("260014"),
  ea = n("373469"),
  el = n("271938"),
  es = n("712234"),
  ei = n("950104"),
  er = n("305961"),
  eu = n("957255"),
  eo = n("660478"),
  ed = n("18494"),
  ec = n("697218"),
  ef = n("800762"),
  eh = n("145131"),
  em = n("956089"),
  ep = n("599110"),
  eE = n("404008"),
  eg = n("659500"),
  eS = n("773336"),
  eC = n("439932"),
  e_ = n("50885"),
  eI = n("563680"),
  eT = n("191145"),
  ev = n("161306"),
  ex = n("598785"),
  eN = n("412090"),
  eA = n("452027"),
  eM = n("328715"),
  eR = n("836087"),
  ej = n("579408"),
  eL = n("198755"),
  ey = n("636150"),
  eO = n("99795"),
  eP = n("49111"),
  eD = n("782340"),
  eb = n("65640");
let eU = {
    [eP.ChannelLayouts.NORMAL]: eb.normal,
    [eP.ChannelLayouts.MINIMUM]: eb.minimum,
    [eP.ChannelLayouts.NO_CHAT]: eb.noChat,
    [eP.ChannelLayouts.FULL_SCREEN]: eb.fullScreen
  },
  ew = {
    [eP.AppContext.POPOUT]: eb.popout,
    [eP.AppContext.APP]: null,
    [eP.AppContext.OVERLAY]: null
  };
class eF extends l.PureComponent {
  getRootNode() {
    var e, t;
    let n = null !== (t = null === (e = this.props.popoutWindow) || void 0 === e ? void 0 : e.window) && void 0 !== t ? t : window;
    return n.document.getElementById("app-mount")
  }
  componentDidMount() {
    let {
      channel: e,
      layout: t
    } = this.props;
    this.currentDocument.addEventListener(eI.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenChange), ep.default.track(eP.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, {
      video_layout: this.inPopout ? "popout" : t,
      ...(0, L.collectVoiceAnalyticsMetadata)(e.id)
    })
  }
  componentWillUnmount() {
    this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(eI.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenChange), !(this.inPopout && (0, eS.isMac)()) && this.maybeLeaveFullScreen()
  }
  componentDidUpdate(e) {
    let {
      participantsOpen: t,
      inCall: n,
      mode: a,
      layout: l
    } = this.props, s = this.getRootNode();
    if (null != s && e.mode === eP.ChannelModes.VIDEO && a === eP.ChannelModes.VOICE && (0, eI.isFullScreen)(s, this.currentDocument) && (0, eI.exitFullScreen)(s, this.currentDocument), e.participantsOpen !== t || l !== e.layout) {
      var i;
      null === (i = this._contentRef.current) || void 0 === i || i.triggerResize()
    }
    e.inCall && !n && this.inPopout && h.default.wait(() => this.handleClosePopout())
  }
  get nativePopoutSupported() {
    return eS.isPlatformEmbedded && e_.default.supportsFeature(eP.NativeFeatures.POPOUT_WINDOWS)
  }
  get popoutSupported() {
    return !eS.isPlatformEmbedded || this.nativePopoutSupported
  }
  get popoutOpen() {
    let {
      popoutWindow: e
    } = this.props;
    return null != e && !e.closed
  }
  get currentDocument() {
    let {
      popoutWindow: e
    } = this.props;
    return null != e && this.popoutOpen && this.inPopout ? e.document : document
  }
  get screenMessage() {
    return this.popoutOpen && !this.inPopout && this.props.inCall ? {
      mainText: eD.default.Messages.POPOUT_PLAYER_OPENED
    } : null
  }
  get paused() {
    return this.popoutOpen && !this.inPopout
  }
  get inPopout() {
    return this.props.appContext === eP.AppContext.POPOUT
  }
  get viewProperties() {
    let {
      layout: e,
      mode: t,
      channel: n,
      inCall: a
    } = this.props, l = t === eP.ChannelModes.VIDEO && a && !(this.popoutOpen && !this.inPopout), s = t === eP.ChannelModes.VIDEO && a && this.popoutSupported, i = t !== eP.ChannelModes.VOICE && n.isPrivate() && !this.inPopout && a, r = n.type === eP.ChannelTypes.GUILD_VOICE, u = e === eP.ChannelLayouts.MINIMUM || e === eP.ChannelLayouts.NORMAL, o = this.inPopout && this.nativePopoutSupported, d = n.isPrivate() && !n.isBroadcastChannel(), c = {
      renderHeader: !0,
      useTheme: !1,
      useExternalHeader: u,
      canInvite: r,
      canPopout: s,
      canFullscreen: l,
      canSelectRegion: d,
      canChangeLayout: i,
      canStayOnTop: o
    };
    if (!a) return {
      ...c,
      canFullscreen: l,
      useTheme: !0
    };
    switch (e) {
      case eP.ChannelLayouts.FULL_SCREEN:
        return {
          ...c, canPopout: !this.inPopout && this.popoutOpen && c.canPopout
        };
      case eP.ChannelLayouts.MINIMUM:
        return {
          ...c, canPopout: !1, useTheme: !0
        };
      case eP.ChannelLayouts.NO_CHAT:
      case eP.ChannelLayouts.NORMAL:
        return {
          ...c
        }
    }
  }
  renderContent(e) {
    let {
      selectedParticipant: t,
      inCall: n,
      hasConnectPermission: l,
      mode: s,
      popoutWindow: i,
      participantsOpen: r,
      participants: u,
      filteredParticipants: o,
      participantsVersion: d,
      channel: c,
      guild: f,
      layout: h,
      forceShowControls: m,
      awaitingRemoteSessionInfo: p
    } = this.props, E = h === eP.ChannelLayouts.MINIMUM, g = E || h === eP.ChannelLayouts.NORMAL, S = n && s === eP.ChannelModes.VIDEO;
    return this._lastIdleProps = e, (0, a.jsx)(Z.default, {
      renderHeader: this.renderHeader,
      renderBottomLeft: this.renderBottomLeft,
      renderBottomCenter: this.renderBottomCenter,
      renderBottomRight: this.renderBottomRight,
      renderChatButton: c.isGuildVoice() ? this.renderChatButton : void 0,
      renderChatToasts: c.isGuildVoice() ? this.renderChatToasts : void 0,
      renderVoiceChannelEffects: this.renderVoiceChannelEffects,
      ...e,
      screenMessage: this.screenMessage,
      disableGradients: E,
      idle: !m && n && !E && e.idle,
      children: n && this.popoutOpen && !this.inPopout ? null : (0, a.jsx)(B.default, {
        ref: this._contentRef,
        inCall: n,
        paused: this.paused,
        channel: c,
        hasConnectPermission: l,
        guild: f,
        participants: u,
        filteredParticipants: o,
        participantsVersion: d,
        selectedParticipant: S ? t : null,
        layout: h,
        idle: e.idle,
        mode: s,
        onSelectParticipant: this.handleSelectParticipant,
        onContextMenuParticipant: this.handleContextMenu,
        showParticipants: r && !g,
        popoutWindow: this.inPopout ? i : null,
        awaitingRemoteSessionInfo: p
      })
    })
  }
  render() {
    let {
      layout: e,
      channel: t,
      guild: n,
      mode: l,
      chatOpen: s,
      appContext: r,
      maxSidebarWidth: u,
      maxHeight: o,
      inCall: d
    } = this.props, {
      resizedHeight: c
    } = this.state, f = l === eP.ChannelModes.VIDEO, h = e !== eP.ChannelLayouts.NO_CHAT && e !== eP.ChannelLayouts.FULL_SCREEN && null != o;
    return (0, a.jsxs)("div", {
      className: i(eb.wrapper, eU[e], ew[r], {
        [eb.poppedOut]: this.popoutOpen && !this.inPopout && e !== eP.ChannelLayouts.NO_CHAT && t.isPrivate(),
        [eb.video]: f,
        [eb.chatSidebarOpen]: s
      }),
      ref: e => {
        this._wrapperRef.current = e, this.props.wrapperRef.current = e
      },
      style: h && null != c ? {
        minHeight: 200,
        maxHeight: o,
        height: c
      } : void 0,
      children: [(0, a.jsx)("div", {
        className: i(eb.callContainer, {
          [(0, eC.getThemeClass)(eP.ThemeTypes.DARK)]: f
        }),
        ref: e => {
          this._callContainerRef.current = e, this.props.callContainerRef.current = e
        },
        children: (0, a.jsx)(Y.default, {
          timeout: 2e3,
          children: e => this.renderContent(e)
        })
      }), h && (0, a.jsx)(ej.default, {
        minHeight: 200,
        maxHeight: o,
        resizableNode: this._wrapperRef,
        onResize: this.handleCallResize,
        onResizeEnd: this.props.updateStoredCallHeaderHeight
      }), (0, a.jsx)("div", {
        className: eb.channelChatWrapper,
        ref: e => {
          this._channelChatRef.current = e, this.props.channelChatRef.current = e
        },
        children: s && (!d || !this.popoutOpen || this.inPopout) && (0, a.jsx)(eA.default, {
          channel: t,
          guild: n,
          maxWidth: u
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), this._prevLayout = eP.ChannelLayouts.MINIMUM, this._wrapperRef = l.createRef(), this._callContainerRef = l.createRef(), this._channelChatRef = l.createRef(), this._contentRef = l.createRef(), this._videoBackgroundTooltipTimeout = new c.Timeout, this._lastIdleProps = null, this.state = {
      resizedHeight: H.default.callHeaderHeight
    }, this.handleFullScreenChange = () => {
      let e = this.getRootNode();
      null != e && !(0, eI.isFullScreen)(e, this.currentDocument) && this.props.layout === eP.ChannelLayouts.FULL_SCREEN && this.handleFullScreen()
    }, this.handleFullScreen = () => {
      let e = this.getRootNode();
      null != e && (this.props.layout !== eP.ChannelLayouts.FULL_SCREEN ? (this._prevLayout = this.props.layout, this.handleChangeLayout(eP.ChannelLayouts.FULL_SCREEN), (0, eI.requestFullScreen)(e)) : this.maybeLeaveFullScreen())
    }, this.maybeLeaveFullScreen = () => {
      let e = this.getRootNode();
      if (null != e) this.props.layout === eP.ChannelLayouts.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, eI.exitFullScreen)(e, this.currentDocument))
    }, this.handleToggleLayout = () => {
      this.handleChangeLayout(this.props.layout === eP.ChannelLayouts.NORMAL ? eP.ChannelLayouts.NO_CHAT : eP.ChannelLayouts.NORMAL)
    }, this.handleChangeLayout = e => {
      let {
        channel: t,
        appContext: n,
        layout: a
      } = this.props;
      a !== e && (m.default.updateLayout(t.id, e, n), e === eP.ChannelLayouts.FULL_SCREEN && t.isPrivate() && eg.ComponentDispatch.dispatch(eP.ComponentActions.TEXTAREA_BLUR))
    }, this.handleDisconnect = () => {
      this.props.layout === eP.ChannelLayouts.FULL_SCREEN && this.handleFullScreen()
    }, this.handleContextMenu = (e, t) => {
      var l, s;
      let {
        channel: i,
        appContext: r,
        layout: o
      } = this.props, d = {
        onClose: () => {
          var e;
          return null === (e = this._lastIdleProps) || void 0 === e ? void 0 : e.onAllowIdle("menu")
        },
        context: r
      };
      switch (null === (l = this._lastIdleProps) || void 0 === l || l.onPreventIdle("menu"), null === (s = this._lastIdleProps) || void 0 === s || s.onActive(), e.type) {
        case eO.ParticipantTypes.HIDDEN_STREAM:
        case eO.ParticipantTypes.STREAM:
          (0, p.openContextMenuLazy)(t, async () => {
            let {
              default: t
            } = await n.el("172844").then(n.bind(n, "172844"));
            return n => (0, a.jsx)(t, {
              ...n,
              stream: e.stream,
              exitFullscreen: this.maybeLeaveFullScreen,
              appContext: r
            })
          }, d);
          return;
        case eO.ParticipantTypes.USER:
          let c = ec.default.getUser(e.id);
          if (null != c) switch (i.type) {
            case eP.ChannelTypes.DM:
              return (0, p.openContextMenuLazy)(t, async () => {
                let {
                  default: e
                } = await n.el("130074").then(n.bind(n, "130074"));
                return t => (0, a.jsx)(e, {
                  ...t,
                  showChannelCallItems: !0,
                  showMediaItems: !0,
                  user: c,
                  channel: i,
                  showModalItems: !0
                })
              }, d);
            case eP.ChannelTypes.GROUP_DM:
              return (0, p.openContextMenuLazy)(t, async () => {
                let {
                  default: e
                } = await n.el("166452").then(n.bind(n, "166452"));
                return t => (0, a.jsx)(e, {
                  ...t,
                  showChannelCallItems: !0,
                  showMediaItems: !0,
                  showChatItems: o === eP.ChannelLayouts.MINIMUM || o === eP.ChannelLayouts.NORMAL,
                  user: c,
                  channel: i,
                  showModalItems: !0
                })
              }, d);
            case eP.ChannelTypes.GUILD_VOICE:
              let f = i.getGuildId();
              return u(null != f, "GuildID null for guild voice channel"), (0, p.openContextMenuLazy)(t, async () => {
                let {
                  default: e
                } = await n.el("834247").then(n.bind(n, "834247"));
                return t => (0, a.jsx)(e, {
                  ...t,
                  showMediaItems: !0,
                  showChannelCallItems: !0,
                  showChatItems: !1,
                  user: c,
                  channel: i,
                  guildId: f,
                  showModalItems: !0
                })
              }, d)
          }
      }
    }, this.handleCallResize = e => {
      this.setState({
        resizedHeight: e
      })
    }, this.handleSelectParticipant = (e, t) => {
      let {
        channel: n,
        selectedParticipant: a,
        allActiveStreams: l,
        inCall: s,
        mode: i
      } = this.props;
      if ((0, eO.isStreamParticipant)(e) && (0, w.canWatchStream)(n, ef.default, er.default, eu.default, P.default)[0]) {
        E.default.selectVoiceChannel(n.id);
        let a = l.filter(t => (0, U.encodeStreamKey)(t) === e.id && t.state !== eP.ApplicationStreamStates.ENDED);
        0 === a.length && (0, g.watchStream)((0, U.decodeStreamKey)(e.id), {
          forceMultiple: t.shiftKey
        })
      }
      s && i === eP.ChannelModes.VIDEO && ((null == a ? void 0 : a.id) === e.id ? m.default.selectParticipant(n.id, null) : m.default.selectParticipant(n.id, e.id))
    }, this.handleOpenPopout = () => {
      let {
        channel: e,
        connectedToEmbeddedActivity: t
      } = this.props, n = () => {
        let t = e.getGuildId();
        null != t && (0, k.transitionTo)((0, eE.previousTextChannelRouteForGuild)(t)), F.openChannelCallPopout(e)
      };
      t ? (0, R.default)(n) : n()
    }, this.handleStayOnTop = e => {
      F.setAlwaysOnTop(eP.PopoutWindowKeys.CHANNEL_CALL_POPOUT, e)
    }, this.handleClosePopout = () => {
      F.close(eP.PopoutWindowKeys.CHANNEL_CALL_POPOUT)
    }, this.handleFullscreenParticipant = (e, t) => {
      let {
        layout: n,
        selectedParticipant: a
      } = this.props, l = n === eP.ChannelLayouts.FULL_SCREEN;
      (!l && (null == a ? void 0 : a.id) !== e.id || l && (null == a ? void 0 : a.id) === e.id) && this.handleSelectParticipant(e, t), this.handleFullScreen()
    }, this.renderRegionSelect = () => {
      let e;
      let {
        call: t,
        channel: n,
        layout: l
      } = this.props;
      return !this.inPopout && l !== eP.ChannelLayouts.FULL_SCREEN && null != t && !n.isManaged() && (e = (0, a.jsx)(C.default, {
        call: t
      })), (0, a.jsx)(eh.default, {
        justify: eh.default.Justify.END,
        children: e
      })
    }, this.renderBottomCenter = () => {
      let {
        channel: e,
        inCall: t,
        layout: n
      } = this.props;
      return t || n === eP.ChannelLayouts.MINIMUM || n === eP.ChannelLayouts.NORMAL ? (0, a.jsx)(G.default, {
        exitFullScreen: this.maybeLeaveFullScreen,
        channel: e,
        onDisconnectCall: this.handleDisconnect,
        idleProps: this._lastIdleProps
      }) : null
    }, this.renderBottomLeft = () => {
      let {
        layout: e,
        mentionCount: t,
        channel: n,
        appContext: l,
        useNewInviteButton: s,
        selectedParticipant: r,
        shouldUseVoiceEffectsActionBar: u,
        inCall: o,
        participants: d
      } = this.props;
      if (!o) return null;
      let c = e === eP.ChannelLayouts.NO_CHAT ? X.default.Directions.UP : X.default.Directions.DOWN,
        f = [eP.ChannelLayouts.FULL_SCREEN, eP.ChannelLayouts.NO_CHAT].includes(e),
        h = d.some(e => e.type === eO.ParticipantTypes.STREAM),
        m = e === eP.ChannelLayouts.FULL_SCREEN ? () => {
          this._prevLayout = eP.ChannelLayouts.NORMAL, this.handleFullScreen()
        } : this.handleToggleLayout,
        {
          canChangeLayout: p,
          canInvite: E
        } = this.viewProperties,
        g = s ? (0, a.jsx)(W.default, {
          channel: n,
          stream: (null == r ? void 0 : r.type) === eO.ParticipantTypes.STREAM ? (0, U.decodeStreamKey)(r.id) : void 0,
          applicationId: (null == r ? void 0 : r.type) === eO.ParticipantTypes.ACTIVITY ? r.id : void 0,
          appContext: l,
          className: eb.leftTrayIcon,
          exitFullScreen: this.maybeLeaveFullScreen,
          analyticsLocation: n.type === eP.ChannelTypes.GUILD_VOICE ? eP.AnalyticsPages.GUILD_CHANNEL : eP.AnalyticsPages.DM_CHANNEL
        }) : (0, a.jsx)(J.default, {
          channel: n,
          stream: (null == r ? void 0 : r.type) === eO.ParticipantTypes.STREAM ? (0, U.decodeStreamKey)(r.id) : void 0,
          className: eb.leftTrayIcon,
          exitFullScreen: this.maybeLeaveFullScreen,
          analyticsLocation: n.type === eP.ChannelTypes.GUILD_VOICE ? eP.AnalyticsPages.GUILD_CHANNEL : eP.AnalyticsPages.DM_CHANNEL
        });
      return (0, a.jsxs)(a.Fragment, {
        children: [E && !u ? g : null, p ? (0, a.jsxs)(eh.default, {
          className: eb.iconWrapper,
          align: eh.default.Align.CENTER,
          grow: 0,
          children: [(0, a.jsx)(X.default, {
            label: f ? eD.default.Messages.SHOW_CHAT : eD.default.Messages.HIDE_CHAT,
            direction: c,
            className: eb.leftTrayIcon,
            onClick: m
          }), f && t > 0 ? (0, a.jsx)(em.NumberBadge, {
            className: eb.badge,
            count: t
          }) : null]
        }) : null, (null == r ? void 0 : r.type) !== eO.ParticipantTypes.STREAM && (null == r ? void 0 : r.type) !== eO.ParticipantTypes.ACTIVITY || u ? null : (0, a.jsx)(z.default, {
          children: (0, a.jsx)(eR.default, {
            className: i(eb.leftTrayIcon, eb.viewersButton),
            participant: r,
            maxVisibleUsers: 4,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: this.inPopout || e === eP.ChannelLayouts.FULL_SCREEN
          })
        }), u && (0, a.jsx)(ey.default, {
          channel: n,
          hasActiveStream: h,
          themeable: this.viewProperties.useTheme
        }), (0, a.jsx)(b.default, {
          showLeftDivider: u,
          themeable: this.viewProperties.useTheme,
          className: eb.leftTrayIcon,
          channel: n
        })]
      })
    }, this.renderBottomRight = () => {
      let {
        popoutWindow: e,
        popoutWindowAlwaysOnTop: t,
        currentUserId: n,
        selectedParticipant: l
      } = this.props, {
        canFullscreen: s,
        canStayOnTop: i,
        canPopout: r,
        useTheme: u
      } = this.viewProperties;
      return (0, a.jsxs)(a.Fragment, {
        children: [null != l && l.type !== eO.ParticipantTypes.ACTIVITY && l.user.id !== n ? (0, a.jsx)(et.default, {
          context: (0, ev.default)(l.type),
          userId: l.user.id,
          currentWindow: this.inPopout ? null != e ? e : void 0 : window,
          sliderClassName: eb.volumeSlider,
          className: eb.rightTrayIcon
        }) : null, i ? (0, a.jsx)(ee.default, {
          className: eb.rightTrayIcon,
          popoutWindowAlwaysOnTop: t,
          onToggleStayOnTop: this.handleStayOnTop
        }) : null, r ? (0, a.jsx)($.default, {
          themeable: u,
          popoutOpen: this.popoutOpen,
          className: eb.rightTrayIcon,
          onOpenPopout: this.handleOpenPopout,
          onClosePopout: this.handleClosePopout
        }) : null, s ? (0, a.jsx)(q.default, {
          themeable: u,
          node: this.getRootNode(),
          guestWindow: e,
          className: eb.rightTrayIcon,
          onClick: this.handleFullScreen
        }) : null]
      })
    }, this.renderChatButton = e => {
      let {
        className: t,
        showingClassName: n
      } = e, {
        channel: l,
        chatOpen: s,
        inCall: i
      } = this.props;
      return s || this.popoutOpen && !this.inPopout && i ? null : (0, a.jsx)(Q.ChatButton, {
        channelId: l.id,
        className: t,
        showingClassName: n
      })
    }, this.renderChatToasts = () => {
      let {
        showChatToasts: e,
        chatOpen: t,
        channel: n,
        inCall: l
      } = this.props;
      return !e || t || this.popoutOpen && !this.inPopout && l ? null : (0, a.jsx)(eN.default, {
        children: (0, a.jsx)(K.default, {
          className: eb.chatToasts,
          channelId: n.id
        })
      })
    }, this.renderVoiceChannelEffects = () => {
      let {
        channel: e,
        callContainerDimensions: t
      } = this.props;
      return (0, a.jsx)(eL.default, {
        children: (0, a.jsx)(en.default, {
          callHeight: t.height,
          channelId: e.id
        })
      })
    }, this.renderHeader = () => {
      let {
        renderExternalHeader: e,
        channel: t,
        guild: n,
        appContext: l,
        chatOpen: s,
        inCall: i
      } = this.props, {
        useExternalHeader: r,
        canSelectRegion: u,
        renderHeader: o
      } = this.viewProperties;
      return o ? (0, a.jsxs)(z.default, {
        children: [(0, a.jsx)("div", {
          className: eb.headerWrapper,
          children: r ? null == e ? void 0 : e() : (0, a.jsx)(eM.default, {
            channel: t,
            guild: n,
            appContext: l,
            inCall: i,
            isChatOpen: s || this.popoutOpen && !this.inPopout && i,
            exitFullScreen: this.maybeLeaveFullScreen
          })
        }), u ? this.renderRegionSelect() : null]
      }) : null
    }
  }
}
var eV = function(e) {
  var t;
  let {
    channel: n,
    renderExternalHeader: s,
    maxHeight: i
  } = e, {
    width: r = 0,
    ref: u
  } = (0, I.default)(), {
    width: c = 0,
    height: h = 0,
    ref: m
  } = (0, I.default)(), {
    ref: p
  } = (0, I.default)(), E = (0, v.useAppContext)(), g = (0, D.default)(), C = (0, o.useStateFromStores)([ed.default], () => {
    var e;
    return (null !== (e = null == g ? void 0 : g.channelId) && void 0 !== e ? e : ed.default.getVoiceChannelId()) === n.id
  }), {
    participants: R,
    filteredParticipants: L,
    participantsVersion: b,
    mode: U,
    layout: w,
    participantsOpen: F,
    chatOpen: k,
    selectedParticipant: G
  } = (0, o.useStateFromStoresObject)([eT.default], () => {
    let e = E === eP.AppContext.POPOUT,
      t = eT.default.getMode(n.id);
    e && (t = eP.ChannelModes.VIDEO);
    let a = t === eP.ChannelModes.VIDEO ? eT.default.getLayout(n.id, E) : eP.ChannelLayouts.MINIMUM;
    return e && a !== eP.ChannelLayouts.FULL_SCREEN && (a = eP.ChannelLayouts.NO_CHAT), {
      mode: t,
      layout: a,
      selectedParticipant: t !== eP.ChannelModes.VOICE ? eT.default.getSelectedParticipant(n.id) : null,
      participants: eT.default.getParticipants(n.id),
      filteredParticipants: eT.default.getFilteredParticipants(n.id),
      participantsOpen: eT.default.getParticipantsOpen(n.id),
      chatOpen: eT.default.getChatOpen(n.id),
      participantsVersion: eT.default.getParticipantsVersion(n.id)
    }
  }, [E, n.id]), B = (0, o.useStateFromStoresArray)([ea.default], () => ea.default.getAllActiveStreams()), {
    selectedStream: W
  } = (0, o.useStateFromStoresObject)([ea.default], () => ({
    selectedStream: null != G ? ea.default.getActiveStreamForStreamKey(G.id) : null
  }), [G]), Y = (0, o.useStateFromStores)([er.default], () => er.default.getGuild(n.getGuildId())), z = (0, o.useStateFromStores)([ei.default], () => ei.default.getCall(n.id), [n.id]), K = (0, o.useStateFromStores)([eo.default], () => eo.default.getMentionCount(n.id), [n.id]), Z = (0, o.useStateFromStores)([el.default], () => el.default.getId()), {
    popoutWindow: X,
    popoutWindowAlwaysOnTop: Q
  } = (0, o.useStateFromStoresObject)([V.default], () => ({
    popoutWindow: V.default.getWindow(eP.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
    popoutWindowAlwaysOnTop: V.default.getIsAlwaysOnTop(eP.PopoutWindowKeys.CHANNEL_CALL_POPOUT)
  })), q = (0, o.useStateFromStores)([eu.default], () => eu.default.can(eP.Permissions.CONNECT, n)), J = (0, o.useStateFromStores)([es.default], () => es.default.getToastsEnabled(n.id)), $ = (0, o.useStateFromStores)([P.default], () => P.default.getAwaitingRemoteSessionInfo()), ee = (0, o.useStateFromStores)([H.default], () => H.default.callHeaderHeight), et = l.useCallback(e => {
    S.default.updatedUnsyncedSettings({
      callHeaderHeight: e
    })
  }, []), en = null !== (t = null == Y ? void 0 : Y.id) && void 0 !== t ? t : null, ec = (0, A.default)(en, n.id), ef = (0, o.useStateFromStores)([x.default], () => x.default.getFetchState(), []), eh = (0, T.default)(ef);
  l.useEffect(() => {
    "errored" === ef && "errored" !== eh && (0, f.showToast)((0, f.createToast)(eD.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FETCH_ERROR, f.ToastType.FAILURE))
  }, [ef, eh]);
  let em = (0, o.useStateFromStores)([N.default], () => null != N.default.getSelfEmbeddedActivityForChannel(n.id), [n]);
  l.useEffect(() => {
    let e = !1,
      t = null,
      n = async () => {
        C && U === eP.ChannelModes.VIDEO && (t = await e_.default.blockDisplaySleep(), e && null != t && e_.default.unblockDisplaySleep(t))
      };
    return n(), () => {
      null != t ? e_.default.unblockDisplaySleep(t) : e = !0
    }
  }, [C, U]), (0, M.default)({
    onTransition: void 0
  });
  let ep = (0, ex.default)(n, !0),
    eE = (0, O.useIsContentShown)(d.DismissibleContent.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
    {
      analyticsLocations: eg
    } = (0, y.default)(j.default.CHANNEL_CALL);
  return (0, a.jsx)(y.AnalyticsLocationProvider, {
    value: eg,
    children: (0, a.jsx)(_.default, {
      page: eP.AnalyticsPages.CHANNEL_CALL,
      children: (0, a.jsx)(eN.ChannelCallChatLayerProvider, {
        children: (0, a.jsxs)(eL.VoiceChannelEffectsLayerProvider, {
          children: [(0, a.jsx)(eF, {
            channel: n,
            guild: Y,
            hasConnectPermission: q,
            participantsOpen: F,
            renderExternalHeader: s,
            appContext: E,
            call: z,
            popoutWindow: X,
            popoutWindowAlwaysOnTop: Q,
            mentionCount: K,
            selectedStream: W,
            mode: U,
            inCall: C,
            participants: R,
            filteredParticipants: L,
            participantsVersion: b,
            layout: w,
            chatOpen: k,
            maxSidebarWidth: r - 550,
            shouldUseVoiceEffectsActionBar: ep,
            currentUserId: Z,
            selectedParticipant: G,
            allActiveStreams: B,
            useNewInviteButton: ec,
            connectedToEmbeddedActivity: em,
            showChatToasts: J,
            storedCallHeaderHeight: ee,
            updateStoredCallHeaderHeight: et,
            wrapperRef: u,
            callContainerDimensions: {
              width: c,
              height: h
            },
            callContainerRef: m,
            channelChatRef: p,
            width: r,
            maxHeight: i,
            forceShowControls: eE,
            awaitingRemoteSessionInfo: $
          }), !n.isPrivate() && (0, a.jsx)(eL.VoiceChannelEffectsLayerContainer, {}), (0, a.jsx)(eN.ChannelCallChatLayerContainer, {})]
        })
      })
    })
  })
}