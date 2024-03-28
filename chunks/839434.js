"use strict";
n.r(t), n.d(t, {
  VoiceWidget: function() {
    return eu
  },
  default: function() {
    return ec
  }
}), n("47120");
var i, a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  o = n.n(s),
  r = n("442837"),
  d = n("692547"),
  u = n("477690"),
  c = n("481060"),
  f = n("239091"),
  h = n("765250"),
  p = n("13245"),
  g = n("872810"),
  m = n("586902"),
  E = n("835473"),
  S = n("933557"),
  v = n("594190"),
  y = n("569545"),
  I = n("914923"),
  T = n("165393"),
  N = n("989941"),
  O = n("552282"),
  _ = n("565799"),
  C = n("501655"),
  A = n("786915"),
  x = n("7188"),
  R = n("199902"),
  M = n("314897"),
  L = n("592125"),
  D = n("77498"),
  b = n("131951"),
  j = n("944486"),
  P = n("606304"),
  w = n("449224"),
  k = n("938475"),
  V = n("237997"),
  U = n("285952"),
  B = n("366695"),
  F = n("548343"),
  G = n("937482"),
  H = n("823779"),
  z = n("632184"),
  W = n("990138"),
  Y = n("118717"),
  K = n("154921"),
  Z = n("547881"),
  X = n("333454"),
  J = n("805009"),
  q = n("136015"),
  Q = n("51144"),
  $ = n("145597"),
  ee = n("658785"),
  et = n("244073"),
  en = n("876205"),
  ei = n("906037"),
  ea = n("981631"),
  el = n("65154"),
  es = n("689938"),
  eo = n("968342");

function er(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function ed(e) {
  let {
    flipped: t = !1,
    locked: n = !1,
    user: i,
    nick: s,
    displayNameMode: d,
    displayUserMode: u,
    size: c = ea.OverlayAvatarSizes.LARGE,
    onClick: f,
    onContextMenu: h,
    context: p,
    guildId: g,
    voiceState: E
  } = e, {
    showKeybindIndicators: S
  } = ee.default.useExperiment({
    location: "overlay_voice_widget"
  }), v = (0, r.useStateFromStores)([V.default], () => V.default.showKeybindIndicators), y = (0, r.useStateFromStores)([M.default], () => M.default.getId()), I = (0, r.useStateFromStores)([b.default], () => b.default.isLocalMute(i.id)), T = (0, r.useStateFromStores)([R.default], () => R.default.getCurrentUserActiveStream()), N = (0, r.useStateFromStoresArray)([R.default], () => null != T ? R.default.getViewerIds(T) : []), O = (0, m.default)({
    userId: i.id,
    context: p
  }), _ = (0, r.useStateFromStores)([P.default], () => P.default.isPrioritySpeaker(i.id, p)), C = (0, r.useStateFromStores)([R.default], () => null != R.default.getStreamForUser(i.id, g)), A = l.useMemo(() => null != T && T.ownerId !== i.id && N.includes(i.id), [T, i.id, N]);
  if (u === ea.OverlayDisplayUsers.ONLY_WHILE_SPEAKING && n && !O) return null;
  let x = i.id === y,
    {
      mute: L,
      selfMute: D,
      suppress: j,
      deaf: w,
      selfDeaf: k
    } = E,
    U = S && v,
    B = D && (!x || !U);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(J.default, {
      guildId: g,
      onClick: n ? void 0 : e => null == f ? void 0 : f(e, i),
      onContextMenu: n ? void 0 : e => null == h ? void 0 : h(e, i),
      className: o()(eo.voiceUserWrapper, {
        [eo.faded]: !O,
        [eo.interactive]: !n
      }),
      user: i,
      nick: s,
      speaking: !1,
      flipped: t,
      isStreaming: C,
      iconClassName: o()(eo.voiceIcon, {
        [eo.locked]: n
      }),
      isWatching: A,
      size: c,
      priority: _,
      mute: L || B || I,
      localMute: I,
      serverMute: L || j,
      deaf: w || k,
      serverDeaf: w,
      userNameClassName: o()(eo.username, {
        [eo.locked]: n,
        [eo.hidden]: n && (d === ea.OverlayDisplayNames.NEVER || !O && d === ea.OverlayDisplayNames.ONLY_WHILE_SPEAKING)
      })
    }), x && U && (0, a.jsx)(en.default, {
      value: D,
      action: ea.GlobalKeybindActions.TOGGLE_MUTE,
      shouldShow: !L && !j
    })]
  })
}
class eu extends(i = l.PureComponent) {
  renderVoiceUsers() {
    let {
      context: e,
      sortedVoiceStates: t,
      displayNameMode: n,
      displayUserMode: i,
      locked: l,
      isPreviewingInGame: s,
      channel: r,
      anchor: d,
      avatarSizeMode: c
    } = this.props, f = null != d.right, h = t.map(t => {
      var o;
      let {
        user: d,
        voiceState: u,
        member: h
      } = t;
      if (null == d || null == r || null == e) return null;
      let p = l || s;
      return (0, a.jsx)(ed, {
        guildId: null == r ? void 0 : r.guild_id,
        user: d,
        nick: null !== (o = null == h ? void 0 : h.nick) && void 0 !== o ? o : Q.default.getName(d),
        flipped: f,
        voiceState: u,
        displayNameMode: n,
        displayUserMode: i,
        size: c,
        locked: p,
        onContextMenu: this.handleUserContextMenu,
        onClick: this.handleUserContextMenu,
        context: e
      }, d.id)
    });
    return (0, a.jsx)(Z.default.Body, {
      className: o()({
        [u.default.VOICE_WIDGET_TOP_MARGIN]: l,
        [eo.bottomMargin]: l
      }),
      children: (0, a.jsx)(J.VoiceUserList, {
        className: eo.voiceList,
        children: h
      })
    })
  }
  renderHeader() {
    let {
      pinned: e,
      title: t,
      isPreviewingInGame: n
    } = this.props;
    return (0, a.jsxs)(Z.default.Bar, {
      className: o()(eo.draggableStartArea, {
        [eo.preview]: n
      }),
      children: [(0, a.jsxs)(Z.default.Content, {
        dynamicSize: !0,
        className: o()(eo.content, {
          [eo.hidden]: n
        }),
        children: [(0, a.jsx)(F.default, {
          color: d.default.unsafe_rawColors.WHITE_500.css,
          width: 20,
          height: 20,
          className: o()(eo.icon, eo.faded, eo.dragIcon)
        }), (0, a.jsx)(z.default, {
          color: d.default.unsafe_rawColors.WHITE_500.css,
          width: 20,
          height: 20,
          className: o()(eo.icon, eo.faded, eo.speakerIcon)
        }), (0, a.jsx)(K.default, {
          color: d.default.unsafe_rawColors.PRIMARY_200.css,
          className: eo.title,
          children: t
        })]
      }), n ? null : (0, a.jsx)(Z.default.Icon, {
        icon: G.default,
        label: es.default.Messages.VOICE_SETTINGS,
        onClick: this.handleOpenVoiceSettings,
        tooltipPosition: "left",
        size: 18
      }), n ? null : (0, a.jsx)(Z.default.Icon, {
        icon: e ? Y.default : H.default,
        label: e ? es.default.Messages.OVERLAY_WIDGET_HIDE_IN_GAME : es.default.Messages.OVERLAY_WIDGET_SHOW_IN_GAME,
        onClick: this.handlePin,
        tooltipPosition: "left",
        size: 18,
        isActive: e
      })]
    })
  }
  renderStreamerSettings() {
    var e;
    let {
      locked: t,
      pinned: n,
      isPreviewingInGame: i,
      channel: l,
      application: s,
      streamMetadata: r,
      streamApplication: d,
      stream: u
    } = this.props;
    if (t || null == u || null == l) return null;
    let {
      sanitizedTitle: f,
      title: h
    } = (0, I.default)(r);
    return (0, a.jsx)(Z.default.Bar, {
      className: o()(eo.streamerControls, {
        [eo.hidden]: i,
        [eo.unpinned]: !n
      }),
      children: (0, a.jsxs)(Z.default.Content, {
        className: eo.streamerContent,
        dynamicSize: !0,
        children: [(0, a.jsxs)("div", {
          className: eo.streamerInner,
          children: [(null == d ? void 0 : d.id) != null && d.id === (null == s ? void 0 : s.id) ? (0, a.jsx)(B.default, {
            className: eo.gameIcon,
            game: s
          }) : (0, a.jsx)(T.default, {
            title: f
          }), (0, a.jsxs)(U.default, {
            direction: U.default.Direction.VERTICAL,
            justify: U.default.Justify.BETWEEN,
            className: eo.streamerInfo,
            children: [(0, a.jsx)(c.Text, {
              className: eo.streaming,
              variant: "text-sm/normal",
              children: es.default.Messages.STATUS_STREAMING
            }), (0, a.jsx)(X.default, {
              children: null !== (e = null == d ? void 0 : d.name) && void 0 !== e ? e : h
            })]
          })]
        }), (0, a.jsxs)(U.default, {
          grow: 0,
          children: [(0, a.jsx)("div", {
            className: eo.streamerIconWrapper,
            children: (0, a.jsx)(A.default, {
              stream: u,
              iconClassName: eo.streamerIcon,
              appContext: ea.AppContext.OVERLAY
            })
          }), (0, a.jsx)("div", {
            className: eo.streamerIconWrapper,
            children: (0, a.jsx)(x.default, {
              stream: u,
              appContext: ea.AppContext.OVERLAY
            })
          }), (0, a.jsx)("div", {
            className: eo.streamerIconWrapper,
            children: (0, a.jsx)(c.TooltipContainer, {
              text: es.default.Messages.STOP_STREAMING,
              children: (0, a.jsx)(c.Button, {
                onClick: this.handleStopStream,
                look: c.Button.Looks.BLANK,
                size: c.Button.Sizes.NONE,
                children: (0, a.jsx)(W.default, {
                  className: eo.streamerIcon
                })
              })
            })
          })]
        })]
      })
    })
  }
  componentDidMount() {
    (0, ei.dispatchOverlayWidgetChanged)(this.props, this.shouldDisplay())
  }
  componentDidUpdate(e) {
    (0, ei.dispatchOverlayWidgetIfChanged)(e, this.props, this.shouldDisplay)
  }
  shouldDisplay() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
      {
        context: t,
        locked: n,
        pinned: i,
        sortedVoiceStates: a,
        channel: l
      } = e;
    return 0 !== a.length && null != t && null != l && (!n || !!i) && !0
  }
  render() {
    let {
      context: e,
      lobbyId: t,
      locked: n,
      pinned: i,
      isPreviewingInGame: l,
      channel: s
    } = this.props;
    if (null == s || null == e || !this.shouldDisplay()) return null;
    let r = ea.OverlayWidgetTypes.UNPINNED;
    return i && (r = ea.OverlayWidgetTypes.PINNED), l && (r = ea.OverlayWidgetTypes.IN_GAME_PREVIEW), n && (r = ea.OverlayWidgetTypes.IN_GAME), (0, a.jsxs)(Z.default, {
      type: r,
      width: 280,
      children: [n ? null : this.renderHeader(), this.renderVoiceUsers(), this.renderStreamerSettings(), n ? null : (0, a.jsx)(et.default, {
        className: o()({
          [eo.preview]: l
        }),
        contentClassName: o()({
          [eo.hidden]: l
        }),
        channel: s,
        lobbyId: t,
        context: e,
        pinned: i
      })]
    })
  }
  constructor(...e) {
    super(...e), er(this, "handleUserContextMenu", (e, t) => {
      let {
        context: i
      } = this.props;
      (0, f.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("85559"), n.e("64409")]).then(n.bind(n, "881351"));
        return n => (0, a.jsx)(e, {
          ...n,
          user: t,
          showMediaItems: !0,
          mediaEngineContext: i
        })
      })
    }), er(this, "handleOpenVoiceSettings", () => {
      let {
        context: e,
        channel: t,
        title: i
      } = this.props;
      (0, c.openModalLazy)(async () => {
        let {
          default: l
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("84518")]).then(n.bind(n, "344516"));
        return n => (0, a.jsx)(l, {
          ...n,
          mediaEngineContext: e,
          title: null != t ? null : i
        })
      })
    }), er(this, "handlePin", () => {
      var e, t, n;
      let i = !this.props.pinned;
      p.default.track(ea.AnalyticEvents.OVERLAY_PIN_TOGGLED, {
        pinned: i,
        guild_id: null === (e = this.props.channel) || void 0 === e ? void 0 : e.guild_id,
        channel_id: null === (t = this.props.channel) || void 0 === t ? void 0 : t.id,
        channel_type: null === (n = this.props.channel) || void 0 === n ? void 0 : n.type,
        widget_type: ea.OverlayWidgets.VOICE
      });
      let {
        id: a
      } = this.props;
      (0, h.togglePinned)(a)
    }), er(this, "handleStopStream", () => {
      let {
        stream: e
      } = this.props;
      null != e && g.stopStream((0, y.encodeStreamKey)(e))
    })
  }
}
er(eu, "defaultProps", {
  context: el.MediaEngineContextTypes.DEFAULT
});

function ec(e) {
  var t;
  let n = (0, r.useStateFromStores)([j.default, L.default], () => L.default.getChannel(j.default.getVoiceChannelId())),
    i = (0, S.default)(n),
    s = function(e) {
      let [t] = (0, r.useStateFromStores)([k.default, _.default], () => null == e ? [
        [], -1
      ] : e.isGuildStageVoice() ? [_.default.getMutableParticipants(e.id, C.StageChannelParticipantNamedIndex.SPEAKER), _.default.getParticipantsVersion(e.id)] : [k.default.getVoiceStatesForChannel(e), k.default.getVoiceStateVersion(e.getGuildId())], [e], q.isVersionEqual), n = (0, r.useStateFromStores)([M.default], () => M.default.getId()), {
        showKeybindIndicators: i
      } = ee.default.useExperiment({
        location: "voice_widget"
      });
      return l.useMemo(() => i ? [...t].sort((e, t) => e.user.id === n ? -1 : t.user.id === n ? 1 : 0) : t, [t, n, i])
    }(n),
    o = (0, r.useStateFromStores)([R.default], () => R.default.getStreamerActiveStreamMetadata()),
    d = (0, r.useStateFromStores)([v.default, w.default, D.default], () => {
      var e;
      let t = (0, N.default)(v.default, w.default);
      return null != t ? null === (e = D.default.getGameByGameData(t)) || void 0 === e ? void 0 : e.id : null
    }),
    u = (0, E.useGetOrFetchApplication)(d),
    c = (0, r.useStateFromStoresObject)([v.default, w.default, R.default, V.default], () => {
      let e = (0, N.default)(v.default, w.default),
        t = R.default.getCurrentUserActiveStream();
      return {
        displayUserMode: V.default.getDisplayUserMode(),
        displayNameMode: V.default.getDisplayNameMode(),
        avatarSizeMode: V.default.getAvatarSizeMode(),
        streamApplication: (null == o ? void 0 : o.pid) === (0, $.getPID)() ? (0, O.default)(e) : null,
        stream: t
      }
    });
  return (0, a.jsx)(eu, {
    ...c,
    application: u,
    ...e,
    sortedVoiceStates: s,
    channel: n,
    title: null != i ? i : "",
    streamMetadata: o,
    streamApplication: null !== (t = c.streamApplication) && void 0 !== t ? t : {
      id: null,
      name: null == o ? void 0 : o.sourceName
    }
  })
}