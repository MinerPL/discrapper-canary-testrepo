"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("442837"),
  d = n("524437"),
  c = n("846519"),
  f = n("481060"),
  h = n("570140"),
  m = n("475179"),
  p = n("239091"),
  E = n("287734"),
  C = n("872810"),
  g = n("153867"),
  S = n("944543"),
  _ = n("410575"),
  T = n("393238"),
  I = n("110924"),
  A = n("40851"),
  v = n("115130"),
  N = n("317381"),
  x = n("596040"),
  M = n("296797"),
  R = n("349619"),
  L = n("100527"),
  y = n("367907"),
  O = n("906732"),
  j = n("211644"),
  P = n("258609"),
  D = n("446226"),
  b = n("276598"),
  U = n("569545"),
  F = n("102172"),
  w = n("788983"),
  k = n("928518"),
  H = n("703656"),
  B = n("740492"),
  G = n("793319"),
  V = n("3861"),
  W = n("493754"),
  Y = n("937995"),
  z = n("618158"),
  Z = n("880831"),
  K = n("73563"),
  X = n("751843"),
  q = n("616286"),
  Q = n("268353"),
  J = n("786915"),
  $ = n("800965"),
  ee = n("107169"),
  et = n("891551"),
  en = n("488785"),
  ea = n("199902"),
  el = n("314897"),
  es = n("979696"),
  ei = n("523746"),
  er = n("430824"),
  eo = n("496675"),
  eu = n("306680"),
  ed = n("944486"),
  ec = n("594174"),
  ef = n("979651"),
  eh = n("285952"),
  em = n("26290"),
  ep = n("626135"),
  eE = n("934415"),
  eC = n("585483"),
  eg = n("358085"),
  eS = n("792125"),
  e_ = n("998502"),
  eT = n("228488"),
  eI = n("358221"),
  eA = n("414910"),
  ev = n("887012"),
  eN = n("909820"),
  ex = n("493010"),
  eM = n("742603"),
  eR = n("221888"),
  eL = n("900211"),
  ey = n("18759"),
  eO = n("878752"),
  ej = n("354459"),
  eP = n("981631"),
  eD = n("689938"),
  eb = n("329446");

function eU(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let eF = {
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
class ek extends l.PureComponent {
  getRootNode() {
    var e, t;
    return (null !== (t = null === (e = this.props.popoutWindow) || void 0 === e ? void 0 : e.window) && void 0 !== t ? t : window).document.getElementById("app-mount")
  }
  componentDidMount() {
    let {
      channel: e,
      layout: t
    } = this.props;
    this.currentDocument.addEventListener(eT.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenChange), ep.default.track(eP.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, {
      video_layout: this.inPopout ? "popout" : t,
      ...(0, y.collectVoiceAnalyticsMetadata)(e.id)
    })
  }
  componentWillUnmount() {
    this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(eT.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenChange), !(this.inPopout && (0, eg.isMac)()) && this.maybeLeaveFullScreen()
  }
  componentDidUpdate(e) {
    let {
      participantsOpen: t,
      inCall: n,
      mode: a,
      layout: l
    } = this.props, s = this.getRootNode();
    if (null != s && e.mode === eP.ChannelModes.VIDEO && a === eP.ChannelModes.VOICE && (0, eT.isFullScreen)(s, this.currentDocument) && (0, eT.exitFullScreen)(s, this.currentDocument), e.participantsOpen !== t || l !== e.layout) {
      var i;
      null === (i = this._contentRef.current) || void 0 === i || i.triggerResize()
    }
    e.inCall && !n && this.inPopout && h.default.wait(() => this.handleClosePopout())
  }
  get nativePopoutSupported() {
    return eg.isPlatformEmbedded && e_.default.supportsFeature(eP.NativeFeatures.POPOUT_WINDOWS)
  }
  get popoutSupported() {
    return !eg.isPlatformEmbedded || this.nativePopoutSupported
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
    } = this.props, l = t === eP.ChannelModes.VIDEO && a && !(this.popoutOpen && !this.inPopout), s = t === eP.ChannelModes.VIDEO && a && this.popoutSupported, i = t !== eP.ChannelModes.VOICE && n.isPrivate() && !this.inPopout && a, r = n.type === eP.ChannelTypes.GUILD_VOICE, o = e === eP.ChannelLayouts.MINIMUM || e === eP.ChannelLayouts.NORMAL, u = this.inPopout && this.nativePopoutSupported, d = {
      renderHeader: !0,
      useTheme: !1,
      useExternalHeader: o,
      canInvite: r,
      canPopout: s,
      canFullscreen: l,
      canSelectRegion: n.isPrivate() && !n.isBroadcastChannel(),
      canChangeLayout: i,
      canStayOnTop: u
    };
    if (!a) return {
      ...d,
      canFullscreen: l,
      useTheme: !0
    };
    switch (e) {
      case eP.ChannelLayouts.FULL_SCREEN:
        return {
          ...d, canPopout: !this.inPopout && this.popoutOpen && d.canPopout
        };
      case eP.ChannelLayouts.MINIMUM:
        return {
          ...d, canPopout: !1, useTheme: !0
        };
      case eP.ChannelLayouts.NO_CHAT:
      case eP.ChannelLayouts.NORMAL:
        return {
          ...d
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
      participants: o,
      filteredParticipants: u,
      participantsVersion: d,
      channel: c,
      guild: f,
      layout: h,
      forceShowControls: m,
      awaitingRemoteSessionInfo: p
    } = this.props, E = h === eP.ChannelLayouts.MINIMUM, C = E || h === eP.ChannelLayouts.NORMAL, g = n && s === eP.ChannelModes.VIDEO;
    return this._lastIdleProps = e, (0, a.jsx)(K.default, {
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
      children: n && this.popoutOpen && !this.inPopout ? null : (0, a.jsx)(V.default, {
        ref: this._contentRef,
        inCall: n,
        paused: this.paused,
        channel: c,
        hasConnectPermission: l,
        guild: f,
        participants: o,
        filteredParticipants: u,
        participantsVersion: d,
        selectedParticipant: g ? t : null,
        layout: h,
        idle: e.idle,
        mode: s,
        onSelectParticipant: this.handleSelectParticipant,
        onContextMenuParticipant: this.handleContextMenu,
        showParticipants: r && !C,
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
      maxSidebarWidth: o,
      maxHeight: u,
      inCall: d
    } = this.props, {
      resizedHeight: c
    } = this.state, f = l === eP.ChannelModes.VIDEO, h = e !== eP.ChannelLayouts.NO_CHAT && e !== eP.ChannelLayouts.FULL_SCREEN && null != u;
    return (0, a.jsxs)("div", {
      className: i()(eb.wrapper, eF[e], ew[r], {
        [eb.poppedOut]: this.popoutOpen && !this.inPopout && e !== eP.ChannelLayouts.NO_CHAT && t.isPrivate(),
        [eb.video]: f,
        [eb.chatSidebarOpen]: s
      }),
      ref: e => {
        this._wrapperRef.current = e, this.props.wrapperRef.current = e
      },
      style: h && null != c ? {
        minHeight: 200,
        maxHeight: u,
        height: c
      } : void 0,
      children: [(0, a.jsx)("div", {
        className: i()(eb.callContainer, {
          [(0, eS.getThemeClass)(eP.ThemeTypes.DARK)]: f
        }),
        ref: e => {
          this._callContainerRef.current = e, this.props.callContainerRef.current = e
        },
        children: (0, a.jsx)(Y.default, {
          timeout: 2e3,
          children: e => this.renderContent(e)
        })
      }), h && (0, a.jsx)(eL.default, {
        minHeight: 200,
        maxHeight: u,
        resizableNode: this._wrapperRef,
        onResize: this.handleCallResize,
        onResizeEnd: this.props.updateStoredCallHeaderHeight
      }), (0, a.jsx)("div", {
        className: eb.channelChatWrapper,
        ref: e => {
          this._channelChatRef.current = e, this.props.channelChatRef.current = e
        },
        children: s && (!d || !this.popoutOpen || this.inPopout) && (0, a.jsx)(ex.default, {
          channel: t,
          guild: n,
          maxWidth: o
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), eU(this, "_prevLayout", eP.ChannelLayouts.MINIMUM), eU(this, "_wrapperRef", l.createRef()), eU(this, "_callContainerRef", l.createRef()), eU(this, "_channelChatRef", l.createRef()), eU(this, "_contentRef", l.createRef()), eU(this, "_videoBackgroundTooltipTimeout", new c.Timeout), eU(this, "_lastIdleProps", null), eU(this, "state", {
      resizedHeight: B.default.callHeaderHeight
    }), eU(this, "handleFullScreenChange", () => {
      let e = this.getRootNode();
      null != e && !(0, eT.isFullScreen)(e, this.currentDocument) && this.props.layout === eP.ChannelLayouts.FULL_SCREEN && this.handleFullScreen()
    }), eU(this, "handleFullScreen", () => {
      let e = this.getRootNode();
      null != e && (this.props.layout !== eP.ChannelLayouts.FULL_SCREEN ? (this._prevLayout = this.props.layout, this.handleChangeLayout(eP.ChannelLayouts.FULL_SCREEN), (0, eT.requestFullScreen)(e)) : this.maybeLeaveFullScreen())
    }), eU(this, "maybeLeaveFullScreen", () => {
      let e = this.getRootNode();
      if (null != e) this.props.layout === eP.ChannelLayouts.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, eT.exitFullScreen)(e, this.currentDocument))
    }), eU(this, "handleToggleLayout", () => {
      this.handleChangeLayout(this.props.layout === eP.ChannelLayouts.NORMAL ? eP.ChannelLayouts.NO_CHAT : eP.ChannelLayouts.NORMAL)
    }), eU(this, "handleChangeLayout", e => {
      let {
        channel: t,
        appContext: n,
        layout: a
      } = this.props;
      a !== e && (m.default.updateLayout(t.id, e, n), e === eP.ChannelLayouts.FULL_SCREEN && t.isPrivate() && eC.ComponentDispatch.dispatch(eP.ComponentActions.TEXTAREA_BLUR))
    }), eU(this, "handleDisconnect", () => {
      this.props.layout === eP.ChannelLayouts.FULL_SCREEN && this.handleFullScreen()
    }), eU(this, "handleContextMenu", (e, t) => {
      var l, s;
      let {
        channel: i,
        appContext: r,
        layout: u
      } = this.props, d = {
        onClose: () => {
          var e;
          return null === (e = this._lastIdleProps) || void 0 === e ? void 0 : e.onAllowIdle("menu")
        },
        context: r
      };
      switch (null === (l = this._lastIdleProps) || void 0 === l || l.onPreventIdle("menu"), null === (s = this._lastIdleProps) || void 0 === s || s.onActive(), e.type) {
        case ej.ParticipantTypes.HIDDEN_STREAM:
        case ej.ParticipantTypes.STREAM:
          (0, p.openContextMenuLazy)(t, async () => {
            let {
              default: t
            } = await n.e("22183").then(n.bind(n, "720336"));
            return n => (0, a.jsx)(t, {
              ...n,
              stream: e.stream,
              exitFullscreen: this.maybeLeaveFullScreen,
              appContext: r
            })
          }, d);
          return;
        case ej.ParticipantTypes.USER:
          let c = ec.default.getUser(e.id);
          if (null != c) switch (i.type) {
            case eP.ChannelTypes.DM:
              return (0, p.openContextMenuLazy)(t, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("99387"), n.e("79695"), n.e("85559"), n.e("56826")]).then(n.bind(n, "131404"));
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
                } = await Promise.all([n.e("99387"), n.e("79695"), n.e("85559"), n.e("60677")]).then(n.bind(n, "354589"));
                return t => (0, a.jsx)(e, {
                  ...t,
                  showChannelCallItems: !0,
                  showMediaItems: !0,
                  showChatItems: u === eP.ChannelLayouts.MINIMUM || u === eP.ChannelLayouts.NORMAL,
                  user: c,
                  channel: i,
                  showModalItems: !0
                })
              }, d);
            case eP.ChannelTypes.GUILD_VOICE:
              let f = i.getGuildId();
              return o()(null != f, "GuildID null for guild voice channel"), (0, p.openContextMenuLazy)(t, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("99387"), n.e("79695"), n.e("85559"), n.e("12435"), n.e("7717")]).then(n.bind(n, "757387"));
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
    }), eU(this, "handleCallResize", e => {
      this.setState({
        resizedHeight: e
      })
    }), eU(this, "handleSelectParticipant", (e, t) => {
      let {
        channel: n,
        selectedParticipant: a,
        allActiveStreams: l,
        inCall: s,
        mode: i
      } = this.props;
      (0, ej.isStreamParticipant)(e) && (0, F.canWatchStream)(n, ef.default, er.default, eo.default, P.default)[0] && (E.default.selectVoiceChannel(n.id), 0 === l.filter(t => (0, U.encodeStreamKey)(t) === e.id && t.state !== eP.ApplicationStreamStates.ENDED).length && (0, C.watchStream)((0, U.decodeStreamKey)(e.id), {
        forceMultiple: t.shiftKey
      })), s && i === eP.ChannelModes.VIDEO && ((null == a ? void 0 : a.id) === e.id ? m.default.selectParticipant(n.id, null) : m.default.selectParticipant(n.id, e.id))
    }), eU(this, "handleOpenPopout", () => {
      let {
        channel: e,
        connectedToEmbeddedActivity: t
      } = this.props, n = () => {
        let t = e.getGuildId();
        null != t && (0, H.transitionTo)((0, eE.previousTextChannelRouteForGuild)(t)), w.openChannelCallPopout(e)
      };
      t ? (0, R.default)(n) : n()
    }), eU(this, "handleStayOnTop", e => {
      w.setAlwaysOnTop(eP.PopoutWindowKeys.CHANNEL_CALL_POPOUT, e)
    }), eU(this, "handleClosePopout", () => {
      w.close(eP.PopoutWindowKeys.CHANNEL_CALL_POPOUT)
    }), eU(this, "handleFullscreenParticipant", (e, t) => {
      let {
        layout: n,
        selectedParticipant: a
      } = this.props, l = n === eP.ChannelLayouts.FULL_SCREEN;
      (!l && (null == a ? void 0 : a.id) !== e.id || l && (null == a ? void 0 : a.id) === e.id) && this.handleSelectParticipant(e, t), this.handleFullScreen()
    }), eU(this, "renderRegionSelect", () => {
      let e;
      let {
        call: t,
        channel: n,
        layout: l
      } = this.props;
      return !this.inPopout && l !== eP.ChannelLayouts.FULL_SCREEN && null != t && !n.isManaged() && (e = (0, a.jsx)(S.default, {
        call: t
      })), (0, a.jsx)(eh.default, {
        justify: eh.default.Justify.END,
        children: e
      })
    }), eU(this, "renderBottomCenter", () => {
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
    }), eU(this, "renderBottomLeft", () => {
      let {
        layout: e,
        mentionCount: t,
        channel: n,
        appContext: l,
        useNewInviteButton: s,
        selectedParticipant: r,
        shouldUseVoiceEffectsActionBar: o,
        inCall: u,
        participants: d
      } = this.props;
      if (!u) return null;
      let c = e === eP.ChannelLayouts.NO_CHAT ? X.default.Directions.UP : X.default.Directions.DOWN,
        f = [eP.ChannelLayouts.FULL_SCREEN, eP.ChannelLayouts.NO_CHAT].includes(e),
        h = d.some(e => e.type === ej.ParticipantTypes.STREAM),
        m = e === eP.ChannelLayouts.FULL_SCREEN ? () => {
          this._prevLayout = eP.ChannelLayouts.NORMAL, this.handleFullScreen()
        } : this.handleToggleLayout,
        {
          canChangeLayout: p,
          canInvite: E
        } = this.viewProperties,
        C = s ? (0, a.jsx)(W.default, {
          channel: n,
          stream: (null == r ? void 0 : r.type) === ej.ParticipantTypes.STREAM ? (0, U.decodeStreamKey)(r.id) : void 0,
          applicationId: (null == r ? void 0 : r.type) === ej.ParticipantTypes.ACTIVITY ? r.id : void 0,
          appContext: l,
          className: eb.leftTrayIcon,
          exitFullScreen: this.maybeLeaveFullScreen,
          analyticsLocation: n.type === eP.ChannelTypes.GUILD_VOICE ? eP.AnalyticsPages.GUILD_CHANNEL : eP.AnalyticsPages.DM_CHANNEL
        }) : (0, a.jsx)(J.default, {
          channel: n,
          stream: (null == r ? void 0 : r.type) === ej.ParticipantTypes.STREAM ? (0, U.decodeStreamKey)(r.id) : void 0,
          className: eb.leftTrayIcon,
          exitFullScreen: this.maybeLeaveFullScreen,
          analyticsLocation: n.type === eP.ChannelTypes.GUILD_VOICE ? eP.AnalyticsPages.GUILD_CHANNEL : eP.AnalyticsPages.DM_CHANNEL
        });
      return (0, a.jsxs)(a.Fragment, {
        children: [E && !o ? C : null, p ? (0, a.jsxs)(eh.default, {
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
        }) : null, (null == r ? void 0 : r.type) !== ej.ParticipantTypes.STREAM && (null == r ? void 0 : r.type) !== ej.ParticipantTypes.ACTIVITY || o ? null : (0, a.jsx)(z.default, {
          children: (0, a.jsx)(eR.default, {
            className: i()(eb.leftTrayIcon, eb.viewersButton),
            participant: r,
            maxVisibleUsers: 4,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: this.inPopout || e === eP.ChannelLayouts.FULL_SCREEN
          })
        }), o && (0, a.jsx)(eO.default, {
          channel: n,
          hasActiveStream: h,
          themeable: this.viewProperties.useTheme
        }), (0, a.jsx)(b.default, {
          showLeftDivider: o,
          themeable: this.viewProperties.useTheme,
          className: eb.leftTrayIcon,
          channel: n
        })]
      })
    }), eU(this, "renderBottomRight", () => {
      let {
        popoutWindow: e,
        popoutWindowAlwaysOnTop: t,
        currentUserId: n,
        selectedParticipant: l
      } = this.props, {
        canFullscreen: s,
        canStayOnTop: i,
        canPopout: r,
        useTheme: o
      } = this.viewProperties;
      return (0, a.jsxs)(a.Fragment, {
        children: [null != l && l.type !== ej.ParticipantTypes.ACTIVITY && l.user.id !== n ? (0, a.jsx)(et.default, {
          context: (0, eA.default)(l.type),
          userId: l.user.id,
          currentWindow: this.inPopout ? null != e ? e : void 0 : window,
          sliderClassName: eb.volumeSlider,
          className: eb.rightTrayIcon
        }) : null, i ? (0, a.jsx)(ee.default, {
          className: eb.rightTrayIcon,
          popoutWindowAlwaysOnTop: t,
          onToggleStayOnTop: this.handleStayOnTop
        }) : null, r ? (0, a.jsx)($.default, {
          themeable: o,
          popoutOpen: this.popoutOpen,
          className: eb.rightTrayIcon,
          onOpenPopout: this.handleOpenPopout,
          onClosePopout: this.handleClosePopout
        }) : null, s ? (0, a.jsx)(Q.default, {
          themeable: o,
          node: this.getRootNode(),
          guestWindow: e,
          className: eb.rightTrayIcon,
          onClick: this.handleFullScreen
        }) : null]
      })
    }), eU(this, "renderChatButton", e => {
      let {
        className: t,
        showingClassName: n
      } = e, {
        channel: l,
        chatOpen: s,
        inCall: i
      } = this.props;
      return s || this.popoutOpen && !this.inPopout && i ? null : (0, a.jsx)(q.ChatButton, {
        channelId: l.id,
        className: t,
        showingClassName: n
      })
    }), eU(this, "renderChatToasts", () => {
      let {
        showChatToasts: e,
        chatOpen: t,
        channel: n,
        inCall: l
      } = this.props;
      return !e || t || this.popoutOpen && !this.inPopout && l ? null : (0, a.jsx)(eN.default, {
        children: (0, a.jsx)(Z.default, {
          className: eb.chatToasts,
          channelId: n.id
        })
      })
    }), eU(this, "renderVoiceChannelEffects", () => {
      let {
        channel: e,
        callContainerDimensions: t
      } = this.props;
      return (0, a.jsx)(ey.default, {
        children: (0, a.jsx)(en.default, {
          callHeight: t.height,
          channelId: e.id
        })
      })
    }), eU(this, "renderHeader", () => {
      let {
        renderExternalHeader: e,
        channel: t,
        guild: n,
        appContext: l,
        chatOpen: s,
        inCall: i
      } = this.props, {
        useExternalHeader: r,
        canSelectRegion: o,
        renderHeader: u
      } = this.viewProperties;
      return u ? (0, a.jsxs)(z.default, {
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
        }), o ? this.renderRegionSelect() : null]
      }) : null
    })
  }
}
t.default = function(e) {
  var t;
  let {
    channel: n,
    renderExternalHeader: s,
    maxHeight: i
  } = e, {
    width: r = 0,
    ref: o
  } = (0, T.default)(), {
    width: c = 0,
    height: h = 0,
    ref: m
  } = (0, T.default)(), {
    ref: p
  } = (0, T.default)(), E = (0, A.useAppContext)(), C = (0, D.default)(), S = (0, u.useStateFromStores)([ed.default], () => {
    var e;
    return (null !== (e = null == C ? void 0 : C.channelId) && void 0 !== e ? e : ed.default.getVoiceChannelId()) === n.id
  }), {
    participants: R,
    filteredParticipants: y,
    participantsVersion: b,
    mode: U,
    layout: F,
    participantsOpen: w,
    chatOpen: H,
    selectedParticipant: G
  } = (0, u.useStateFromStoresObject)([eI.default], () => {
    let e = E === eP.AppContext.POPOUT,
      t = eI.default.getMode(n.id);
    e && (t = eP.ChannelModes.VIDEO);
    let a = t === eP.ChannelModes.VIDEO ? eI.default.getLayout(n.id, E) : eP.ChannelLayouts.MINIMUM;
    return e && a !== eP.ChannelLayouts.FULL_SCREEN && (a = eP.ChannelLayouts.NO_CHAT), {
      mode: t,
      layout: a,
      selectedParticipant: t !== eP.ChannelModes.VOICE ? eI.default.getSelectedParticipant(n.id) : null,
      participants: eI.default.getParticipants(n.id),
      filteredParticipants: eI.default.getFilteredParticipants(n.id),
      participantsOpen: eI.default.getParticipantsOpen(n.id),
      chatOpen: eI.default.getChatOpen(n.id),
      participantsVersion: eI.default.getParticipantsVersion(n.id)
    }
  }, [E, n.id]), V = (0, u.useStateFromStoresArray)([ea.default], () => ea.default.getAllActiveStreams()), {
    selectedStream: W
  } = (0, u.useStateFromStoresObject)([ea.default], () => ({
    selectedStream: null != G ? ea.default.getActiveStreamForStreamKey(G.id) : null
  }), [G]), Y = (0, u.useStateFromStores)([er.default], () => er.default.getGuild(n.getGuildId())), z = (0, u.useStateFromStores)([ei.default], () => ei.default.getCall(n.id), [n.id]), Z = (0, u.useStateFromStores)([eu.default], () => eu.default.getMentionCount(n.id), [n.id]), K = (0, u.useStateFromStores)([el.default], () => el.default.getId()), {
    popoutWindow: X,
    popoutWindowAlwaysOnTop: q
  } = (0, u.useStateFromStoresObject)([k.default], () => ({
    popoutWindow: k.default.getWindow(eP.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
    popoutWindowAlwaysOnTop: k.default.getIsAlwaysOnTop(eP.PopoutWindowKeys.CHANNEL_CALL_POPOUT)
  })), Q = (0, u.useStateFromStores)([eo.default], () => eo.default.can(eP.Permissions.CONNECT, n)), J = (0, u.useStateFromStores)([es.default], () => es.default.getToastsEnabled(n.id)), $ = (0, u.useStateFromStores)([P.default], () => P.default.getAwaitingRemoteSessionInfo()), ee = (0, u.useStateFromStores)([B.default], () => B.default.callHeaderHeight), et = l.useCallback(e => {
    g.default.updatedUnsyncedSettings({
      callHeaderHeight: e
    })
  }, []), en = null !== (t = null == Y ? void 0 : Y.id) && void 0 !== t ? t : null, ec = (0, x.default)(en, n.id), ef = (0, u.useStateFromStores)([v.default], () => v.default.getFetchState(), []), eh = (0, I.default)(ef);
  l.useEffect(() => {
    "errored" === ef && "errored" !== eh && (0, f.showToast)((0, f.createToast)(eD.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FETCH_ERROR, f.ToastType.FAILURE))
  }, [ef, eh]);
  let em = (0, u.useStateFromStores)([N.default], () => null != N.default.getSelfEmbeddedActivityForChannel(n.id), [n]);
  l.useEffect(() => {
    let e = !1,
      t = null;
    return (async () => {
      S && U === eP.ChannelModes.VIDEO && (t = await e_.default.blockDisplaySleep(), e && null != t && e_.default.unblockDisplaySleep(t))
    })(), () => {
      null != t ? e_.default.unblockDisplaySleep(t) : e = !0
    }
  }, [S, U]), (0, M.default)({
    onTransition: void 0
  });
  let ep = (0, ev.default)(n, !0),
    eE = (0, j.useIsContentShown)(d.DismissibleContent.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
    {
      analyticsLocations: eC
    } = (0, O.default)(L.default.CHANNEL_CALL);
  return (0, a.jsx)(O.AnalyticsLocationProvider, {
    value: eC,
    children: (0, a.jsx)(_.default, {
      page: eP.AnalyticsPages.CHANNEL_CALL,
      children: (0, a.jsx)(eN.ChannelCallChatLayerProvider, {
        children: (0, a.jsxs)(ey.VoiceChannelEffectsLayerProvider, {
          children: [(0, a.jsx)(ek, {
            channel: n,
            guild: Y,
            hasConnectPermission: Q,
            participantsOpen: w,
            renderExternalHeader: s,
            appContext: E,
            call: z,
            popoutWindow: X,
            popoutWindowAlwaysOnTop: q,
            mentionCount: Z,
            selectedStream: W,
            mode: U,
            inCall: S,
            participants: R,
            filteredParticipants: y,
            participantsVersion: b,
            layout: F,
            chatOpen: H,
            maxSidebarWidth: r - 550,
            shouldUseVoiceEffectsActionBar: ep,
            currentUserId: K,
            selectedParticipant: G,
            allActiveStreams: V,
            useNewInviteButton: ec,
            connectedToEmbeddedActivity: em,
            showChatToasts: J,
            storedCallHeaderHeight: ee,
            updateStoredCallHeaderHeight: et,
            wrapperRef: o,
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
          }), !n.isPrivate() && (0, a.jsx)(ey.VoiceChannelEffectsLayerContainer, {}), (0, a.jsx)(eN.ChannelCallChatLayerContainer, {})]
        })
      })
    })
  })
}